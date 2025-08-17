---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2UXWDF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDhUzgWOw99vrWgPdnSTTubBvtmX5UL8Uuf414jAvnX%2FgIgEdZwdjDGzRXouSgnPaufdtCuscKpdv%2BgHA04gCMv5McqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOMq%2FLvCafINZmtAyrcA%2FnJNYrgwx4LheTjS%2BgGD3NOQ%2BHzYs7yDffjPdsyuBOMD3%2B%2BPLQrY1KvFFGzHuxBrpziCedtYMYPDrrbDnbHRhwpGZFrwszrRklYXcjeZZdxx7lsh9oBPs%2Ffb2PXJaonysiDQq4o06T9D4kehLZHvPspP7VCRj6NqUvgCDjeYBM2Thws%2FKXzT7%2BdIgcccl9VDbc5YCO2y70D6xmCBqEK9BTycFmecCHENOKQV%2Fxuynih3KP5CgTz63lokBsVqZl2DU6wPH2hvoE%2FFm4vhquXFrvrXMZYZs208MGD4WrntlUfi4AFJzFvXDfkbxDAnqRYpdJzgcOEk3GuvagxYbg0qWSsvSU546lO8sd6EApX4SZJ13njKhNE1qYle1Tz%2FC%2FwtbzMI0FKLtYu%2ForR%2F6Jg%2Bx4AGgIniU9%2BUkLgd%2F2zDzkvFLCmr8%2Bf0WKWlAbIo5QJLECeqF7R%2F0rVTn2sYqGvnuEKN%2BAt8XXzP91HTB3T4SPhjlvepyl0i9Z9GmJRCzsrwa1dhZu57PcK1fVM9XLaxaBgj4QnRWvsU2JpYkT1i5JCuZsVWD9qpblB%2BkOpqk8fjmRC583ihvNZXtJw5OuGvCFTPmpJoQ%2BbUh%2BHt5dGT%2B1G4ZpNs%2F%2FkKdQKLwrPMJrNhMUGOqUBCqlNCHVPTBNEy3QPJR1XUjdkA3a7y2Iqu0ofxmwaGhIAbUoVAy2nn5P3jPQWO77cPesInplxBMqP46Pgbhbmg0ShiS%2BDyHl%2FsQYeAhiB9xXmbNUDvjFtnNL%2B%2BU2vGsUKDmaMGXDzS6K1YekPRpYF0SMyzwiaPq2otFrM8U9ZiBs4gDgjr0OrH45znVuQPhIE4tThCedOovSlNvXKuygF1vSGFArk&X-Amz-Signature=ba8ff3a8b02d6ae73f832613ca48ce7f9a382136750f6d0593966f6c27f6a9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2UXWDF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDhUzgWOw99vrWgPdnSTTubBvtmX5UL8Uuf414jAvnX%2FgIgEdZwdjDGzRXouSgnPaufdtCuscKpdv%2BgHA04gCMv5McqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOMq%2FLvCafINZmtAyrcA%2FnJNYrgwx4LheTjS%2BgGD3NOQ%2BHzYs7yDffjPdsyuBOMD3%2B%2BPLQrY1KvFFGzHuxBrpziCedtYMYPDrrbDnbHRhwpGZFrwszrRklYXcjeZZdxx7lsh9oBPs%2Ffb2PXJaonysiDQq4o06T9D4kehLZHvPspP7VCRj6NqUvgCDjeYBM2Thws%2FKXzT7%2BdIgcccl9VDbc5YCO2y70D6xmCBqEK9BTycFmecCHENOKQV%2Fxuynih3KP5CgTz63lokBsVqZl2DU6wPH2hvoE%2FFm4vhquXFrvrXMZYZs208MGD4WrntlUfi4AFJzFvXDfkbxDAnqRYpdJzgcOEk3GuvagxYbg0qWSsvSU546lO8sd6EApX4SZJ13njKhNE1qYle1Tz%2FC%2FwtbzMI0FKLtYu%2ForR%2F6Jg%2Bx4AGgIniU9%2BUkLgd%2F2zDzkvFLCmr8%2Bf0WKWlAbIo5QJLECeqF7R%2F0rVTn2sYqGvnuEKN%2BAt8XXzP91HTB3T4SPhjlvepyl0i9Z9GmJRCzsrwa1dhZu57PcK1fVM9XLaxaBgj4QnRWvsU2JpYkT1i5JCuZsVWD9qpblB%2BkOpqk8fjmRC583ihvNZXtJw5OuGvCFTPmpJoQ%2BbUh%2BHt5dGT%2B1G4ZpNs%2F%2FkKdQKLwrPMJrNhMUGOqUBCqlNCHVPTBNEy3QPJR1XUjdkA3a7y2Iqu0ofxmwaGhIAbUoVAy2nn5P3jPQWO77cPesInplxBMqP46Pgbhbmg0ShiS%2BDyHl%2FsQYeAhiB9xXmbNUDvjFtnNL%2B%2BU2vGsUKDmaMGXDzS6K1YekPRpYF0SMyzwiaPq2otFrM8U9ZiBs4gDgjr0OrH45znVuQPhIE4tThCedOovSlNvXKuygF1vSGFArk&X-Amz-Signature=5fea28598e9edbf0fe5093b30263dd9c231f7da584d5acdee7eb861c9ff56749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2UXWDF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDhUzgWOw99vrWgPdnSTTubBvtmX5UL8Uuf414jAvnX%2FgIgEdZwdjDGzRXouSgnPaufdtCuscKpdv%2BgHA04gCMv5McqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOMq%2FLvCafINZmtAyrcA%2FnJNYrgwx4LheTjS%2BgGD3NOQ%2BHzYs7yDffjPdsyuBOMD3%2B%2BPLQrY1KvFFGzHuxBrpziCedtYMYPDrrbDnbHRhwpGZFrwszrRklYXcjeZZdxx7lsh9oBPs%2Ffb2PXJaonysiDQq4o06T9D4kehLZHvPspP7VCRj6NqUvgCDjeYBM2Thws%2FKXzT7%2BdIgcccl9VDbc5YCO2y70D6xmCBqEK9BTycFmecCHENOKQV%2Fxuynih3KP5CgTz63lokBsVqZl2DU6wPH2hvoE%2FFm4vhquXFrvrXMZYZs208MGD4WrntlUfi4AFJzFvXDfkbxDAnqRYpdJzgcOEk3GuvagxYbg0qWSsvSU546lO8sd6EApX4SZJ13njKhNE1qYle1Tz%2FC%2FwtbzMI0FKLtYu%2ForR%2F6Jg%2Bx4AGgIniU9%2BUkLgd%2F2zDzkvFLCmr8%2Bf0WKWlAbIo5QJLECeqF7R%2F0rVTn2sYqGvnuEKN%2BAt8XXzP91HTB3T4SPhjlvepyl0i9Z9GmJRCzsrwa1dhZu57PcK1fVM9XLaxaBgj4QnRWvsU2JpYkT1i5JCuZsVWD9qpblB%2BkOpqk8fjmRC583ihvNZXtJw5OuGvCFTPmpJoQ%2BbUh%2BHt5dGT%2B1G4ZpNs%2F%2FkKdQKLwrPMJrNhMUGOqUBCqlNCHVPTBNEy3QPJR1XUjdkA3a7y2Iqu0ofxmwaGhIAbUoVAy2nn5P3jPQWO77cPesInplxBMqP46Pgbhbmg0ShiS%2BDyHl%2FsQYeAhiB9xXmbNUDvjFtnNL%2B%2BU2vGsUKDmaMGXDzS6K1YekPRpYF0SMyzwiaPq2otFrM8U9ZiBs4gDgjr0OrH45znVuQPhIE4tThCedOovSlNvXKuygF1vSGFArk&X-Amz-Signature=44eee8419b6e24096913ca894f5049a19a653ab55ad55aca5fbf3d0f58a50271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2UXWDF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDhUzgWOw99vrWgPdnSTTubBvtmX5UL8Uuf414jAvnX%2FgIgEdZwdjDGzRXouSgnPaufdtCuscKpdv%2BgHA04gCMv5McqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOMq%2FLvCafINZmtAyrcA%2FnJNYrgwx4LheTjS%2BgGD3NOQ%2BHzYs7yDffjPdsyuBOMD3%2B%2BPLQrY1KvFFGzHuxBrpziCedtYMYPDrrbDnbHRhwpGZFrwszrRklYXcjeZZdxx7lsh9oBPs%2Ffb2PXJaonysiDQq4o06T9D4kehLZHvPspP7VCRj6NqUvgCDjeYBM2Thws%2FKXzT7%2BdIgcccl9VDbc5YCO2y70D6xmCBqEK9BTycFmecCHENOKQV%2Fxuynih3KP5CgTz63lokBsVqZl2DU6wPH2hvoE%2FFm4vhquXFrvrXMZYZs208MGD4WrntlUfi4AFJzFvXDfkbxDAnqRYpdJzgcOEk3GuvagxYbg0qWSsvSU546lO8sd6EApX4SZJ13njKhNE1qYle1Tz%2FC%2FwtbzMI0FKLtYu%2ForR%2F6Jg%2Bx4AGgIniU9%2BUkLgd%2F2zDzkvFLCmr8%2Bf0WKWlAbIo5QJLECeqF7R%2F0rVTn2sYqGvnuEKN%2BAt8XXzP91HTB3T4SPhjlvepyl0i9Z9GmJRCzsrwa1dhZu57PcK1fVM9XLaxaBgj4QnRWvsU2JpYkT1i5JCuZsVWD9qpblB%2BkOpqk8fjmRC583ihvNZXtJw5OuGvCFTPmpJoQ%2BbUh%2BHt5dGT%2B1G4ZpNs%2F%2FkKdQKLwrPMJrNhMUGOqUBCqlNCHVPTBNEy3QPJR1XUjdkA3a7y2Iqu0ofxmwaGhIAbUoVAy2nn5P3jPQWO77cPesInplxBMqP46Pgbhbmg0ShiS%2BDyHl%2FsQYeAhiB9xXmbNUDvjFtnNL%2B%2BU2vGsUKDmaMGXDzS6K1YekPRpYF0SMyzwiaPq2otFrM8U9ZiBs4gDgjr0OrH45znVuQPhIE4tThCedOovSlNvXKuygF1vSGFArk&X-Amz-Signature=8cef73a91d5dcde32258306c5ced1838ec386bca995442aafd457e1d61e54651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2UXWDF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDhUzgWOw99vrWgPdnSTTubBvtmX5UL8Uuf414jAvnX%2FgIgEdZwdjDGzRXouSgnPaufdtCuscKpdv%2BgHA04gCMv5McqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOMq%2FLvCafINZmtAyrcA%2FnJNYrgwx4LheTjS%2BgGD3NOQ%2BHzYs7yDffjPdsyuBOMD3%2B%2BPLQrY1KvFFGzHuxBrpziCedtYMYPDrrbDnbHRhwpGZFrwszrRklYXcjeZZdxx7lsh9oBPs%2Ffb2PXJaonysiDQq4o06T9D4kehLZHvPspP7VCRj6NqUvgCDjeYBM2Thws%2FKXzT7%2BdIgcccl9VDbc5YCO2y70D6xmCBqEK9BTycFmecCHENOKQV%2Fxuynih3KP5CgTz63lokBsVqZl2DU6wPH2hvoE%2FFm4vhquXFrvrXMZYZs208MGD4WrntlUfi4AFJzFvXDfkbxDAnqRYpdJzgcOEk3GuvagxYbg0qWSsvSU546lO8sd6EApX4SZJ13njKhNE1qYle1Tz%2FC%2FwtbzMI0FKLtYu%2ForR%2F6Jg%2Bx4AGgIniU9%2BUkLgd%2F2zDzkvFLCmr8%2Bf0WKWlAbIo5QJLECeqF7R%2F0rVTn2sYqGvnuEKN%2BAt8XXzP91HTB3T4SPhjlvepyl0i9Z9GmJRCzsrwa1dhZu57PcK1fVM9XLaxaBgj4QnRWvsU2JpYkT1i5JCuZsVWD9qpblB%2BkOpqk8fjmRC583ihvNZXtJw5OuGvCFTPmpJoQ%2BbUh%2BHt5dGT%2B1G4ZpNs%2F%2FkKdQKLwrPMJrNhMUGOqUBCqlNCHVPTBNEy3QPJR1XUjdkA3a7y2Iqu0ofxmwaGhIAbUoVAy2nn5P3jPQWO77cPesInplxBMqP46Pgbhbmg0ShiS%2BDyHl%2FsQYeAhiB9xXmbNUDvjFtnNL%2B%2BU2vGsUKDmaMGXDzS6K1YekPRpYF0SMyzwiaPq2otFrM8U9ZiBs4gDgjr0OrH45znVuQPhIE4tThCedOovSlNvXKuygF1vSGFArk&X-Amz-Signature=335d621385578161d36edb549526e5e641753e549c493f3325190b96f2593eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2UXWDF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDhUzgWOw99vrWgPdnSTTubBvtmX5UL8Uuf414jAvnX%2FgIgEdZwdjDGzRXouSgnPaufdtCuscKpdv%2BgHA04gCMv5McqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOMq%2FLvCafINZmtAyrcA%2FnJNYrgwx4LheTjS%2BgGD3NOQ%2BHzYs7yDffjPdsyuBOMD3%2B%2BPLQrY1KvFFGzHuxBrpziCedtYMYPDrrbDnbHRhwpGZFrwszrRklYXcjeZZdxx7lsh9oBPs%2Ffb2PXJaonysiDQq4o06T9D4kehLZHvPspP7VCRj6NqUvgCDjeYBM2Thws%2FKXzT7%2BdIgcccl9VDbc5YCO2y70D6xmCBqEK9BTycFmecCHENOKQV%2Fxuynih3KP5CgTz63lokBsVqZl2DU6wPH2hvoE%2FFm4vhquXFrvrXMZYZs208MGD4WrntlUfi4AFJzFvXDfkbxDAnqRYpdJzgcOEk3GuvagxYbg0qWSsvSU546lO8sd6EApX4SZJ13njKhNE1qYle1Tz%2FC%2FwtbzMI0FKLtYu%2ForR%2F6Jg%2Bx4AGgIniU9%2BUkLgd%2F2zDzkvFLCmr8%2Bf0WKWlAbIo5QJLECeqF7R%2F0rVTn2sYqGvnuEKN%2BAt8XXzP91HTB3T4SPhjlvepyl0i9Z9GmJRCzsrwa1dhZu57PcK1fVM9XLaxaBgj4QnRWvsU2JpYkT1i5JCuZsVWD9qpblB%2BkOpqk8fjmRC583ihvNZXtJw5OuGvCFTPmpJoQ%2BbUh%2BHt5dGT%2B1G4ZpNs%2F%2FkKdQKLwrPMJrNhMUGOqUBCqlNCHVPTBNEy3QPJR1XUjdkA3a7y2Iqu0ofxmwaGhIAbUoVAy2nn5P3jPQWO77cPesInplxBMqP46Pgbhbmg0ShiS%2BDyHl%2FsQYeAhiB9xXmbNUDvjFtnNL%2B%2BU2vGsUKDmaMGXDzS6K1YekPRpYF0SMyzwiaPq2otFrM8U9ZiBs4gDgjr0OrH45znVuQPhIE4tThCedOovSlNvXKuygF1vSGFArk&X-Amz-Signature=310b6501071800011a8a010383104153b45ca1604c4b970a57d94a62a10fd5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2UXWDF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDhUzgWOw99vrWgPdnSTTubBvtmX5UL8Uuf414jAvnX%2FgIgEdZwdjDGzRXouSgnPaufdtCuscKpdv%2BgHA04gCMv5McqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOMq%2FLvCafINZmtAyrcA%2FnJNYrgwx4LheTjS%2BgGD3NOQ%2BHzYs7yDffjPdsyuBOMD3%2B%2BPLQrY1KvFFGzHuxBrpziCedtYMYPDrrbDnbHRhwpGZFrwszrRklYXcjeZZdxx7lsh9oBPs%2Ffb2PXJaonysiDQq4o06T9D4kehLZHvPspP7VCRj6NqUvgCDjeYBM2Thws%2FKXzT7%2BdIgcccl9VDbc5YCO2y70D6xmCBqEK9BTycFmecCHENOKQV%2Fxuynih3KP5CgTz63lokBsVqZl2DU6wPH2hvoE%2FFm4vhquXFrvrXMZYZs208MGD4WrntlUfi4AFJzFvXDfkbxDAnqRYpdJzgcOEk3GuvagxYbg0qWSsvSU546lO8sd6EApX4SZJ13njKhNE1qYle1Tz%2FC%2FwtbzMI0FKLtYu%2ForR%2F6Jg%2Bx4AGgIniU9%2BUkLgd%2F2zDzkvFLCmr8%2Bf0WKWlAbIo5QJLECeqF7R%2F0rVTn2sYqGvnuEKN%2BAt8XXzP91HTB3T4SPhjlvepyl0i9Z9GmJRCzsrwa1dhZu57PcK1fVM9XLaxaBgj4QnRWvsU2JpYkT1i5JCuZsVWD9qpblB%2BkOpqk8fjmRC583ihvNZXtJw5OuGvCFTPmpJoQ%2BbUh%2BHt5dGT%2B1G4ZpNs%2F%2FkKdQKLwrPMJrNhMUGOqUBCqlNCHVPTBNEy3QPJR1XUjdkA3a7y2Iqu0ofxmwaGhIAbUoVAy2nn5P3jPQWO77cPesInplxBMqP46Pgbhbmg0ShiS%2BDyHl%2FsQYeAhiB9xXmbNUDvjFtnNL%2B%2BU2vGsUKDmaMGXDzS6K1YekPRpYF0SMyzwiaPq2otFrM8U9ZiBs4gDgjr0OrH45znVuQPhIE4tThCedOovSlNvXKuygF1vSGFArk&X-Amz-Signature=74890328ddf7cc3fbf6af03c31d401a392af236fe2c4b3e6e65cc7001326d3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D2UXWDF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDhUzgWOw99vrWgPdnSTTubBvtmX5UL8Uuf414jAvnX%2FgIgEdZwdjDGzRXouSgnPaufdtCuscKpdv%2BgHA04gCMv5McqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOMq%2FLvCafINZmtAyrcA%2FnJNYrgwx4LheTjS%2BgGD3NOQ%2BHzYs7yDffjPdsyuBOMD3%2B%2BPLQrY1KvFFGzHuxBrpziCedtYMYPDrrbDnbHRhwpGZFrwszrRklYXcjeZZdxx7lsh9oBPs%2Ffb2PXJaonysiDQq4o06T9D4kehLZHvPspP7VCRj6NqUvgCDjeYBM2Thws%2FKXzT7%2BdIgcccl9VDbc5YCO2y70D6xmCBqEK9BTycFmecCHENOKQV%2Fxuynih3KP5CgTz63lokBsVqZl2DU6wPH2hvoE%2FFm4vhquXFrvrXMZYZs208MGD4WrntlUfi4AFJzFvXDfkbxDAnqRYpdJzgcOEk3GuvagxYbg0qWSsvSU546lO8sd6EApX4SZJ13njKhNE1qYle1Tz%2FC%2FwtbzMI0FKLtYu%2ForR%2F6Jg%2Bx4AGgIniU9%2BUkLgd%2F2zDzkvFLCmr8%2Bf0WKWlAbIo5QJLECeqF7R%2F0rVTn2sYqGvnuEKN%2BAt8XXzP91HTB3T4SPhjlvepyl0i9Z9GmJRCzsrwa1dhZu57PcK1fVM9XLaxaBgj4QnRWvsU2JpYkT1i5JCuZsVWD9qpblB%2BkOpqk8fjmRC583ihvNZXtJw5OuGvCFTPmpJoQ%2BbUh%2BHt5dGT%2B1G4ZpNs%2F%2FkKdQKLwrPMJrNhMUGOqUBCqlNCHVPTBNEy3QPJR1XUjdkA3a7y2Iqu0ofxmwaGhIAbUoVAy2nn5P3jPQWO77cPesInplxBMqP46Pgbhbmg0ShiS%2BDyHl%2FsQYeAhiB9xXmbNUDvjFtnNL%2B%2BU2vGsUKDmaMGXDzS6K1YekPRpYF0SMyzwiaPq2otFrM8U9ZiBs4gDgjr0OrH45znVuQPhIE4tThCedOovSlNvXKuygF1vSGFArk&X-Amz-Signature=a1007aa647ce6a6ad29172ddb0dd87aea7546ef91a12493b32377bdc09c53a46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
