---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JH75DXU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFRVVmz24%2Fjk6a0N2GvwcylWCNwwRZebzLSrzjUR8zkHAiB3EfxlyJp9X2G0W4TH9rQEB8X8%2BjEi5kE2dP4WDltqCSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMdcvpejtspsaH8bY1KtwDtobDxizwze713COhBC5h92mOo9OWMxaqzdYuu0Jfn4ZwowYDjMQwiWAmn%2F5iYzingUdQQoilM9zvCjoyGU8SC9S2ul5fQTL7pg9zA6idRxkd1YXcDKsfVVbVGdTOV%2FifdKS4fMXnTIr5X5e74bwkAEq0ilIbmC%2BBWNy5oSh8kALrUjME%2FwbAGMupw4x8rVCo948iqNd2O947ivpFZ2%2BsV6k8I2U2qka0lJHhdSgRA4hKuh0OGRjVx2AVvgg320ndQDCRQV3H4dTANYpSR2eaROr6Bqz%2Bjn%2FXf6t0sYZwHSWVCvHjxE39Iv9fsT95HfcWg4Dm0kdRDTHMCIl1KUu61gQTOnUV97pQGvMrgAr9HfJbD8q4RoBmxFSz3y8tu8%2FhrAEnTIGuNvevsKhB87RMuPh1%2BbbjRIFeeClVj2jfQ7oHDW%2B0dEHBsZYqfSl%2FbH1J1DG9RkckqhmuKsxItejCENhUInFJUloDvH3kCI68gPojzH2aD%2Fc8tEfWVHw77Gd3vc3v%2FeMh%2FUwZ0cayyFTD43DOfQQ7SLuY4pfplPHHvC0TVsW%2BcTnFN3BEQQ72kLgH9ukCK9IV8MlJasAfmZ1TnYOH3VGsqc25CbzJ%2FTh57TZrQMWwkaiw2tSArfcw2oaiwwY6pgFrj1RPM3Gxy4jMKitiGyXGN1lYazAGJPc2h6%2B4jyGSZob1ZuMT3iq1cubavsq63bar2qBHq%2FV7Z%2FbOLUjCYQyr5W8XLvjireiyIp3RSeEDqaoH0XnnW0HKOoc5yIKyf4JEIhotX9dU3ZkR8gSl1ZjaLfdJyQ5P0i4w0t2et7HnepGKrY0rVfDoKojDTIDIzPt1pRMspHOb7OncvRGY6BssdV2jcmO7&X-Amz-Signature=b397843d95eac2916ebad8e7385835615baaf812e8562cbd8a83fa3af4f24775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JH75DXU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFRVVmz24%2Fjk6a0N2GvwcylWCNwwRZebzLSrzjUR8zkHAiB3EfxlyJp9X2G0W4TH9rQEB8X8%2BjEi5kE2dP4WDltqCSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMdcvpejtspsaH8bY1KtwDtobDxizwze713COhBC5h92mOo9OWMxaqzdYuu0Jfn4ZwowYDjMQwiWAmn%2F5iYzingUdQQoilM9zvCjoyGU8SC9S2ul5fQTL7pg9zA6idRxkd1YXcDKsfVVbVGdTOV%2FifdKS4fMXnTIr5X5e74bwkAEq0ilIbmC%2BBWNy5oSh8kALrUjME%2FwbAGMupw4x8rVCo948iqNd2O947ivpFZ2%2BsV6k8I2U2qka0lJHhdSgRA4hKuh0OGRjVx2AVvgg320ndQDCRQV3H4dTANYpSR2eaROr6Bqz%2Bjn%2FXf6t0sYZwHSWVCvHjxE39Iv9fsT95HfcWg4Dm0kdRDTHMCIl1KUu61gQTOnUV97pQGvMrgAr9HfJbD8q4RoBmxFSz3y8tu8%2FhrAEnTIGuNvevsKhB87RMuPh1%2BbbjRIFeeClVj2jfQ7oHDW%2B0dEHBsZYqfSl%2FbH1J1DG9RkckqhmuKsxItejCENhUInFJUloDvH3kCI68gPojzH2aD%2Fc8tEfWVHw77Gd3vc3v%2FeMh%2FUwZ0cayyFTD43DOfQQ7SLuY4pfplPHHvC0TVsW%2BcTnFN3BEQQ72kLgH9ukCK9IV8MlJasAfmZ1TnYOH3VGsqc25CbzJ%2FTh57TZrQMWwkaiw2tSArfcw2oaiwwY6pgFrj1RPM3Gxy4jMKitiGyXGN1lYazAGJPc2h6%2B4jyGSZob1ZuMT3iq1cubavsq63bar2qBHq%2FV7Z%2FbOLUjCYQyr5W8XLvjireiyIp3RSeEDqaoH0XnnW0HKOoc5yIKyf4JEIhotX9dU3ZkR8gSl1ZjaLfdJyQ5P0i4w0t2et7HnepGKrY0rVfDoKojDTIDIzPt1pRMspHOb7OncvRGY6BssdV2jcmO7&X-Amz-Signature=c5df434cbdcc5a4b29ba9882f4b1ce9b5a26ba3309ae4ed7c4f2a6cb9a26a866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JH75DXU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFRVVmz24%2Fjk6a0N2GvwcylWCNwwRZebzLSrzjUR8zkHAiB3EfxlyJp9X2G0W4TH9rQEB8X8%2BjEi5kE2dP4WDltqCSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMdcvpejtspsaH8bY1KtwDtobDxizwze713COhBC5h92mOo9OWMxaqzdYuu0Jfn4ZwowYDjMQwiWAmn%2F5iYzingUdQQoilM9zvCjoyGU8SC9S2ul5fQTL7pg9zA6idRxkd1YXcDKsfVVbVGdTOV%2FifdKS4fMXnTIr5X5e74bwkAEq0ilIbmC%2BBWNy5oSh8kALrUjME%2FwbAGMupw4x8rVCo948iqNd2O947ivpFZ2%2BsV6k8I2U2qka0lJHhdSgRA4hKuh0OGRjVx2AVvgg320ndQDCRQV3H4dTANYpSR2eaROr6Bqz%2Bjn%2FXf6t0sYZwHSWVCvHjxE39Iv9fsT95HfcWg4Dm0kdRDTHMCIl1KUu61gQTOnUV97pQGvMrgAr9HfJbD8q4RoBmxFSz3y8tu8%2FhrAEnTIGuNvevsKhB87RMuPh1%2BbbjRIFeeClVj2jfQ7oHDW%2B0dEHBsZYqfSl%2FbH1J1DG9RkckqhmuKsxItejCENhUInFJUloDvH3kCI68gPojzH2aD%2Fc8tEfWVHw77Gd3vc3v%2FeMh%2FUwZ0cayyFTD43DOfQQ7SLuY4pfplPHHvC0TVsW%2BcTnFN3BEQQ72kLgH9ukCK9IV8MlJasAfmZ1TnYOH3VGsqc25CbzJ%2FTh57TZrQMWwkaiw2tSArfcw2oaiwwY6pgFrj1RPM3Gxy4jMKitiGyXGN1lYazAGJPc2h6%2B4jyGSZob1ZuMT3iq1cubavsq63bar2qBHq%2FV7Z%2FbOLUjCYQyr5W8XLvjireiyIp3RSeEDqaoH0XnnW0HKOoc5yIKyf4JEIhotX9dU3ZkR8gSl1ZjaLfdJyQ5P0i4w0t2et7HnepGKrY0rVfDoKojDTIDIzPt1pRMspHOb7OncvRGY6BssdV2jcmO7&X-Amz-Signature=052f1663e8c445c3daa5f148c792baa04d204e5c9d8feabf74a02ec9999b30c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JH75DXU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFRVVmz24%2Fjk6a0N2GvwcylWCNwwRZebzLSrzjUR8zkHAiB3EfxlyJp9X2G0W4TH9rQEB8X8%2BjEi5kE2dP4WDltqCSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMdcvpejtspsaH8bY1KtwDtobDxizwze713COhBC5h92mOo9OWMxaqzdYuu0Jfn4ZwowYDjMQwiWAmn%2F5iYzingUdQQoilM9zvCjoyGU8SC9S2ul5fQTL7pg9zA6idRxkd1YXcDKsfVVbVGdTOV%2FifdKS4fMXnTIr5X5e74bwkAEq0ilIbmC%2BBWNy5oSh8kALrUjME%2FwbAGMupw4x8rVCo948iqNd2O947ivpFZ2%2BsV6k8I2U2qka0lJHhdSgRA4hKuh0OGRjVx2AVvgg320ndQDCRQV3H4dTANYpSR2eaROr6Bqz%2Bjn%2FXf6t0sYZwHSWVCvHjxE39Iv9fsT95HfcWg4Dm0kdRDTHMCIl1KUu61gQTOnUV97pQGvMrgAr9HfJbD8q4RoBmxFSz3y8tu8%2FhrAEnTIGuNvevsKhB87RMuPh1%2BbbjRIFeeClVj2jfQ7oHDW%2B0dEHBsZYqfSl%2FbH1J1DG9RkckqhmuKsxItejCENhUInFJUloDvH3kCI68gPojzH2aD%2Fc8tEfWVHw77Gd3vc3v%2FeMh%2FUwZ0cayyFTD43DOfQQ7SLuY4pfplPHHvC0TVsW%2BcTnFN3BEQQ72kLgH9ukCK9IV8MlJasAfmZ1TnYOH3VGsqc25CbzJ%2FTh57TZrQMWwkaiw2tSArfcw2oaiwwY6pgFrj1RPM3Gxy4jMKitiGyXGN1lYazAGJPc2h6%2B4jyGSZob1ZuMT3iq1cubavsq63bar2qBHq%2FV7Z%2FbOLUjCYQyr5W8XLvjireiyIp3RSeEDqaoH0XnnW0HKOoc5yIKyf4JEIhotX9dU3ZkR8gSl1ZjaLfdJyQ5P0i4w0t2et7HnepGKrY0rVfDoKojDTIDIzPt1pRMspHOb7OncvRGY6BssdV2jcmO7&X-Amz-Signature=f00b83474f1f69994cd182b54f7358fcfd1f58e4d85ccc82f451b0d46c79e136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JH75DXU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFRVVmz24%2Fjk6a0N2GvwcylWCNwwRZebzLSrzjUR8zkHAiB3EfxlyJp9X2G0W4TH9rQEB8X8%2BjEi5kE2dP4WDltqCSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMdcvpejtspsaH8bY1KtwDtobDxizwze713COhBC5h92mOo9OWMxaqzdYuu0Jfn4ZwowYDjMQwiWAmn%2F5iYzingUdQQoilM9zvCjoyGU8SC9S2ul5fQTL7pg9zA6idRxkd1YXcDKsfVVbVGdTOV%2FifdKS4fMXnTIr5X5e74bwkAEq0ilIbmC%2BBWNy5oSh8kALrUjME%2FwbAGMupw4x8rVCo948iqNd2O947ivpFZ2%2BsV6k8I2U2qka0lJHhdSgRA4hKuh0OGRjVx2AVvgg320ndQDCRQV3H4dTANYpSR2eaROr6Bqz%2Bjn%2FXf6t0sYZwHSWVCvHjxE39Iv9fsT95HfcWg4Dm0kdRDTHMCIl1KUu61gQTOnUV97pQGvMrgAr9HfJbD8q4RoBmxFSz3y8tu8%2FhrAEnTIGuNvevsKhB87RMuPh1%2BbbjRIFeeClVj2jfQ7oHDW%2B0dEHBsZYqfSl%2FbH1J1DG9RkckqhmuKsxItejCENhUInFJUloDvH3kCI68gPojzH2aD%2Fc8tEfWVHw77Gd3vc3v%2FeMh%2FUwZ0cayyFTD43DOfQQ7SLuY4pfplPHHvC0TVsW%2BcTnFN3BEQQ72kLgH9ukCK9IV8MlJasAfmZ1TnYOH3VGsqc25CbzJ%2FTh57TZrQMWwkaiw2tSArfcw2oaiwwY6pgFrj1RPM3Gxy4jMKitiGyXGN1lYazAGJPc2h6%2B4jyGSZob1ZuMT3iq1cubavsq63bar2qBHq%2FV7Z%2FbOLUjCYQyr5W8XLvjireiyIp3RSeEDqaoH0XnnW0HKOoc5yIKyf4JEIhotX9dU3ZkR8gSl1ZjaLfdJyQ5P0i4w0t2et7HnepGKrY0rVfDoKojDTIDIzPt1pRMspHOb7OncvRGY6BssdV2jcmO7&X-Amz-Signature=0e2bed78433bb6610dba2ce2d6ac07f2ee44e819ed6f5138c54c008a46056361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JH75DXU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFRVVmz24%2Fjk6a0N2GvwcylWCNwwRZebzLSrzjUR8zkHAiB3EfxlyJp9X2G0W4TH9rQEB8X8%2BjEi5kE2dP4WDltqCSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMdcvpejtspsaH8bY1KtwDtobDxizwze713COhBC5h92mOo9OWMxaqzdYuu0Jfn4ZwowYDjMQwiWAmn%2F5iYzingUdQQoilM9zvCjoyGU8SC9S2ul5fQTL7pg9zA6idRxkd1YXcDKsfVVbVGdTOV%2FifdKS4fMXnTIr5X5e74bwkAEq0ilIbmC%2BBWNy5oSh8kALrUjME%2FwbAGMupw4x8rVCo948iqNd2O947ivpFZ2%2BsV6k8I2U2qka0lJHhdSgRA4hKuh0OGRjVx2AVvgg320ndQDCRQV3H4dTANYpSR2eaROr6Bqz%2Bjn%2FXf6t0sYZwHSWVCvHjxE39Iv9fsT95HfcWg4Dm0kdRDTHMCIl1KUu61gQTOnUV97pQGvMrgAr9HfJbD8q4RoBmxFSz3y8tu8%2FhrAEnTIGuNvevsKhB87RMuPh1%2BbbjRIFeeClVj2jfQ7oHDW%2B0dEHBsZYqfSl%2FbH1J1DG9RkckqhmuKsxItejCENhUInFJUloDvH3kCI68gPojzH2aD%2Fc8tEfWVHw77Gd3vc3v%2FeMh%2FUwZ0cayyFTD43DOfQQ7SLuY4pfplPHHvC0TVsW%2BcTnFN3BEQQ72kLgH9ukCK9IV8MlJasAfmZ1TnYOH3VGsqc25CbzJ%2FTh57TZrQMWwkaiw2tSArfcw2oaiwwY6pgFrj1RPM3Gxy4jMKitiGyXGN1lYazAGJPc2h6%2B4jyGSZob1ZuMT3iq1cubavsq63bar2qBHq%2FV7Z%2FbOLUjCYQyr5W8XLvjireiyIp3RSeEDqaoH0XnnW0HKOoc5yIKyf4JEIhotX9dU3ZkR8gSl1ZjaLfdJyQ5P0i4w0t2et7HnepGKrY0rVfDoKojDTIDIzPt1pRMspHOb7OncvRGY6BssdV2jcmO7&X-Amz-Signature=64179de808ac7837381977fd8cdbf076e966a6759cf4b540ee1b1a2be859da49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JH75DXU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFRVVmz24%2Fjk6a0N2GvwcylWCNwwRZebzLSrzjUR8zkHAiB3EfxlyJp9X2G0W4TH9rQEB8X8%2BjEi5kE2dP4WDltqCSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMdcvpejtspsaH8bY1KtwDtobDxizwze713COhBC5h92mOo9OWMxaqzdYuu0Jfn4ZwowYDjMQwiWAmn%2F5iYzingUdQQoilM9zvCjoyGU8SC9S2ul5fQTL7pg9zA6idRxkd1YXcDKsfVVbVGdTOV%2FifdKS4fMXnTIr5X5e74bwkAEq0ilIbmC%2BBWNy5oSh8kALrUjME%2FwbAGMupw4x8rVCo948iqNd2O947ivpFZ2%2BsV6k8I2U2qka0lJHhdSgRA4hKuh0OGRjVx2AVvgg320ndQDCRQV3H4dTANYpSR2eaROr6Bqz%2Bjn%2FXf6t0sYZwHSWVCvHjxE39Iv9fsT95HfcWg4Dm0kdRDTHMCIl1KUu61gQTOnUV97pQGvMrgAr9HfJbD8q4RoBmxFSz3y8tu8%2FhrAEnTIGuNvevsKhB87RMuPh1%2BbbjRIFeeClVj2jfQ7oHDW%2B0dEHBsZYqfSl%2FbH1J1DG9RkckqhmuKsxItejCENhUInFJUloDvH3kCI68gPojzH2aD%2Fc8tEfWVHw77Gd3vc3v%2FeMh%2FUwZ0cayyFTD43DOfQQ7SLuY4pfplPHHvC0TVsW%2BcTnFN3BEQQ72kLgH9ukCK9IV8MlJasAfmZ1TnYOH3VGsqc25CbzJ%2FTh57TZrQMWwkaiw2tSArfcw2oaiwwY6pgFrj1RPM3Gxy4jMKitiGyXGN1lYazAGJPc2h6%2B4jyGSZob1ZuMT3iq1cubavsq63bar2qBHq%2FV7Z%2FbOLUjCYQyr5W8XLvjireiyIp3RSeEDqaoH0XnnW0HKOoc5yIKyf4JEIhotX9dU3ZkR8gSl1ZjaLfdJyQ5P0i4w0t2et7HnepGKrY0rVfDoKojDTIDIzPt1pRMspHOb7OncvRGY6BssdV2jcmO7&X-Amz-Signature=646edb0da81b6270a812504a26565c4de20c0bed18f8ade4c40dcd7dc6a47bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JH75DXU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFRVVmz24%2Fjk6a0N2GvwcylWCNwwRZebzLSrzjUR8zkHAiB3EfxlyJp9X2G0W4TH9rQEB8X8%2BjEi5kE2dP4WDltqCSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMdcvpejtspsaH8bY1KtwDtobDxizwze713COhBC5h92mOo9OWMxaqzdYuu0Jfn4ZwowYDjMQwiWAmn%2F5iYzingUdQQoilM9zvCjoyGU8SC9S2ul5fQTL7pg9zA6idRxkd1YXcDKsfVVbVGdTOV%2FifdKS4fMXnTIr5X5e74bwkAEq0ilIbmC%2BBWNy5oSh8kALrUjME%2FwbAGMupw4x8rVCo948iqNd2O947ivpFZ2%2BsV6k8I2U2qka0lJHhdSgRA4hKuh0OGRjVx2AVvgg320ndQDCRQV3H4dTANYpSR2eaROr6Bqz%2Bjn%2FXf6t0sYZwHSWVCvHjxE39Iv9fsT95HfcWg4Dm0kdRDTHMCIl1KUu61gQTOnUV97pQGvMrgAr9HfJbD8q4RoBmxFSz3y8tu8%2FhrAEnTIGuNvevsKhB87RMuPh1%2BbbjRIFeeClVj2jfQ7oHDW%2B0dEHBsZYqfSl%2FbH1J1DG9RkckqhmuKsxItejCENhUInFJUloDvH3kCI68gPojzH2aD%2Fc8tEfWVHw77Gd3vc3v%2FeMh%2FUwZ0cayyFTD43DOfQQ7SLuY4pfplPHHvC0TVsW%2BcTnFN3BEQQ72kLgH9ukCK9IV8MlJasAfmZ1TnYOH3VGsqc25CbzJ%2FTh57TZrQMWwkaiw2tSArfcw2oaiwwY6pgFrj1RPM3Gxy4jMKitiGyXGN1lYazAGJPc2h6%2B4jyGSZob1ZuMT3iq1cubavsq63bar2qBHq%2FV7Z%2FbOLUjCYQyr5W8XLvjireiyIp3RSeEDqaoH0XnnW0HKOoc5yIKyf4JEIhotX9dU3ZkR8gSl1ZjaLfdJyQ5P0i4w0t2et7HnepGKrY0rVfDoKojDTIDIzPt1pRMspHOb7OncvRGY6BssdV2jcmO7&X-Amz-Signature=d07af560a3713c7e3becaef2a26f327e748c0daca096d97a44bad00489c17b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
