import React from 'react';
import { Link } from 'react-router';
import { Tab1,Tab2} from '../../components';
import { Tabs, TabList, Tab, TabPanel} from '../../components/Tabs';
import { Modal, ModalHeader, ModalBody } from '../../components/Modal';
import Button from '../../components/Button';
import Slider from '../../components/Slider'

class Home extends React.Component {
    handleOpen() {
        this.refs.modal.open()
    }
    handleSliding(value) {
    console.log('sliding:', value);
  }

  handleSlid(value) {
    console.log('slid:', value);
  }
    render() {
        return (
            <div>
                <p>Home</p>
                <Link to="/list">to list</Link>
                <Tab2>
                    <div name="社会新闻">
                        社会新闻的内容>
                    </div>
                    <div name="体育世界">
                        体育世界的内容
                    </div>
                    <div name="娱乐圈">
                        娱乐圈的内容
                    </div>
                </Tab2>
                <Tabs>
                  <TabList>
                    <Tab>群体特征报告</Tab>
                    <Tab>样例用户画像</Tab>
                  </TabList>
                  <TabPanel>我是群体特征报告</TabPanel>
                  <TabPanel>我是样例用户画像</TabPanel>
                </Tabs>

                <div>
                    <Button onClick={::this.handleOpen}>Open</Button>
                    <Modal ref="modal">
                      <ModalHeader>
                        <h4>Heading</h4>
                      </ModalHeader>
                      <ModalBody>
                        <Button
                          type="minor"
                          onClick={() => this.refs.modal2.open()}
                        >
                          Open
                        </Button>
                        <Modal ref="modal2" size="sm">
                          <ModalHeader>
                            <h4>Heading</h4>
                          </ModalHeader>
                          <ModalBody>
                            Modal Body
                          </ModalBody>
                        </Modal>
                      </ModalBody>
                    </Modal>
                </div>
                <Slider defaultValue={40} tickValue={5} start={0} end={100} suffix="%" onSliding={::this.handleSliding} onSlid={::this.handleSlid}/>
            </div>
        )
    }
}

export default Home