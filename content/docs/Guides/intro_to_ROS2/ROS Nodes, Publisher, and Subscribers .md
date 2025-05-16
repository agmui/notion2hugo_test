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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3GPJ3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBvCLTNy%2Fsa2rC802xRQ%2FShFmxpqugSpziTnrj4haigIgdWsUsqqnuyDYlXwNebgJTPuv7xjPmidWx3FwV2kesoUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKNTTRYl7ooOJF86SrcA6c7sVZi4Pfeu3An%2BoV%2F8DyaQ8Ry2KKDvQWWIj8Kg75p2LvqgyjV948ez3S%2Fs1qTesxsR87TgXLyj6%2FkMvmXqZBNfOhho0ckBGXaC0XYZYvTryeVrygkvpCWX8zFvIVmHqs9NS6uMwNQ9TxfzHhmkacTFkzbPdkY%2FJq2bnO2hYPLxz1FRLxJ3udOjN6%2BUA1wSLnNssbFzzRxfK7awOJ2WEplzEfX1qMA1%2FObNtXbc240MQvlGqE7ECeXrYqUHWXHsyr4zq3gbxU1%2BXQt%2F8iexJD%2F71yVVRhEL%2F2SicY20iEo6P7VjvwWmEIwQNRi%2FlPBLTyh5M1CyuW1F9V17Iv9DEUNOA0qxyC%2B%2BKX5jQQuhXPZxq0o0ab5KqUeo9MFl4%2BOQERUulWDxYIZ49LQLsPK1S3XA5VJ2AqU%2BYxY2yQbWV43O6wp42cxpDAWi9fmsbRCK%2Fomkgh%2B9mxAHVfihHCb7Oaa1Hb%2FfcszsfalStm9roGuz9W5Fy2uc%2B4sYgxVsSOLqiXdxDPv0gkJ610bBPG0dAc8gJ2%2FRFpFzbIxz6s7NiWtMst9ok%2BWG4Vjcs1631iE0Pt%2BPo0elZEDFFq8o7FdJzD2RB6kZ5SxMl9RkTH5jCCHBvi69G%2Bo0v9fwyARMMnPncEGOqUBExtpy0%2Bu%2FKGnM1U4br7SZ547PLlo2Zm2JxLxfUyZj%2Fy%2BWir34V%2FKq1radT3k0cSfZUhzvuWfdknPffBRAnMF25unE%2B3lr7sdUH%2Bd%2FTgQxb3JlbG4f%2B7drL5bEDI%2FpLxkFpMCrrOKUOnQNzi3v1THJgSxQe3TbzyhuzKR0EH4DKdLCwl6UX79s5JUjOtJEPB%2Bqeci2ToH0VoIx1LUQPXC7vTpKYoo&X-Amz-Signature=7d35c2b577489fe96d3838f78e5c0e7b667e43170fe74c9dc457a50341aa18ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3GPJ3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBvCLTNy%2Fsa2rC802xRQ%2FShFmxpqugSpziTnrj4haigIgdWsUsqqnuyDYlXwNebgJTPuv7xjPmidWx3FwV2kesoUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKNTTRYl7ooOJF86SrcA6c7sVZi4Pfeu3An%2BoV%2F8DyaQ8Ry2KKDvQWWIj8Kg75p2LvqgyjV948ez3S%2Fs1qTesxsR87TgXLyj6%2FkMvmXqZBNfOhho0ckBGXaC0XYZYvTryeVrygkvpCWX8zFvIVmHqs9NS6uMwNQ9TxfzHhmkacTFkzbPdkY%2FJq2bnO2hYPLxz1FRLxJ3udOjN6%2BUA1wSLnNssbFzzRxfK7awOJ2WEplzEfX1qMA1%2FObNtXbc240MQvlGqE7ECeXrYqUHWXHsyr4zq3gbxU1%2BXQt%2F8iexJD%2F71yVVRhEL%2F2SicY20iEo6P7VjvwWmEIwQNRi%2FlPBLTyh5M1CyuW1F9V17Iv9DEUNOA0qxyC%2B%2BKX5jQQuhXPZxq0o0ab5KqUeo9MFl4%2BOQERUulWDxYIZ49LQLsPK1S3XA5VJ2AqU%2BYxY2yQbWV43O6wp42cxpDAWi9fmsbRCK%2Fomkgh%2B9mxAHVfihHCb7Oaa1Hb%2FfcszsfalStm9roGuz9W5Fy2uc%2B4sYgxVsSOLqiXdxDPv0gkJ610bBPG0dAc8gJ2%2FRFpFzbIxz6s7NiWtMst9ok%2BWG4Vjcs1631iE0Pt%2BPo0elZEDFFq8o7FdJzD2RB6kZ5SxMl9RkTH5jCCHBvi69G%2Bo0v9fwyARMMnPncEGOqUBExtpy0%2Bu%2FKGnM1U4br7SZ547PLlo2Zm2JxLxfUyZj%2Fy%2BWir34V%2FKq1radT3k0cSfZUhzvuWfdknPffBRAnMF25unE%2B3lr7sdUH%2Bd%2FTgQxb3JlbG4f%2B7drL5bEDI%2FpLxkFpMCrrOKUOnQNzi3v1THJgSxQe3TbzyhuzKR0EH4DKdLCwl6UX79s5JUjOtJEPB%2Bqeci2ToH0VoIx1LUQPXC7vTpKYoo&X-Amz-Signature=31658ee4d8a61e83d9301fbe182fcf8dbf6c5d8536fc62ac86e2293142d76f81&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3GPJ3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBvCLTNy%2Fsa2rC802xRQ%2FShFmxpqugSpziTnrj4haigIgdWsUsqqnuyDYlXwNebgJTPuv7xjPmidWx3FwV2kesoUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKNTTRYl7ooOJF86SrcA6c7sVZi4Pfeu3An%2BoV%2F8DyaQ8Ry2KKDvQWWIj8Kg75p2LvqgyjV948ez3S%2Fs1qTesxsR87TgXLyj6%2FkMvmXqZBNfOhho0ckBGXaC0XYZYvTryeVrygkvpCWX8zFvIVmHqs9NS6uMwNQ9TxfzHhmkacTFkzbPdkY%2FJq2bnO2hYPLxz1FRLxJ3udOjN6%2BUA1wSLnNssbFzzRxfK7awOJ2WEplzEfX1qMA1%2FObNtXbc240MQvlGqE7ECeXrYqUHWXHsyr4zq3gbxU1%2BXQt%2F8iexJD%2F71yVVRhEL%2F2SicY20iEo6P7VjvwWmEIwQNRi%2FlPBLTyh5M1CyuW1F9V17Iv9DEUNOA0qxyC%2B%2BKX5jQQuhXPZxq0o0ab5KqUeo9MFl4%2BOQERUulWDxYIZ49LQLsPK1S3XA5VJ2AqU%2BYxY2yQbWV43O6wp42cxpDAWi9fmsbRCK%2Fomkgh%2B9mxAHVfihHCb7Oaa1Hb%2FfcszsfalStm9roGuz9W5Fy2uc%2B4sYgxVsSOLqiXdxDPv0gkJ610bBPG0dAc8gJ2%2FRFpFzbIxz6s7NiWtMst9ok%2BWG4Vjcs1631iE0Pt%2BPo0elZEDFFq8o7FdJzD2RB6kZ5SxMl9RkTH5jCCHBvi69G%2Bo0v9fwyARMMnPncEGOqUBExtpy0%2Bu%2FKGnM1U4br7SZ547PLlo2Zm2JxLxfUyZj%2Fy%2BWir34V%2FKq1radT3k0cSfZUhzvuWfdknPffBRAnMF25unE%2B3lr7sdUH%2Bd%2FTgQxb3JlbG4f%2B7drL5bEDI%2FpLxkFpMCrrOKUOnQNzi3v1THJgSxQe3TbzyhuzKR0EH4DKdLCwl6UX79s5JUjOtJEPB%2Bqeci2ToH0VoIx1LUQPXC7vTpKYoo&X-Amz-Signature=ef47517592cb168dc06063c7fd2099e4b65d8870ca74adc75e5b32ab970e27b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3GPJ3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBvCLTNy%2Fsa2rC802xRQ%2FShFmxpqugSpziTnrj4haigIgdWsUsqqnuyDYlXwNebgJTPuv7xjPmidWx3FwV2kesoUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKNTTRYl7ooOJF86SrcA6c7sVZi4Pfeu3An%2BoV%2F8DyaQ8Ry2KKDvQWWIj8Kg75p2LvqgyjV948ez3S%2Fs1qTesxsR87TgXLyj6%2FkMvmXqZBNfOhho0ckBGXaC0XYZYvTryeVrygkvpCWX8zFvIVmHqs9NS6uMwNQ9TxfzHhmkacTFkzbPdkY%2FJq2bnO2hYPLxz1FRLxJ3udOjN6%2BUA1wSLnNssbFzzRxfK7awOJ2WEplzEfX1qMA1%2FObNtXbc240MQvlGqE7ECeXrYqUHWXHsyr4zq3gbxU1%2BXQt%2F8iexJD%2F71yVVRhEL%2F2SicY20iEo6P7VjvwWmEIwQNRi%2FlPBLTyh5M1CyuW1F9V17Iv9DEUNOA0qxyC%2B%2BKX5jQQuhXPZxq0o0ab5KqUeo9MFl4%2BOQERUulWDxYIZ49LQLsPK1S3XA5VJ2AqU%2BYxY2yQbWV43O6wp42cxpDAWi9fmsbRCK%2Fomkgh%2B9mxAHVfihHCb7Oaa1Hb%2FfcszsfalStm9roGuz9W5Fy2uc%2B4sYgxVsSOLqiXdxDPv0gkJ610bBPG0dAc8gJ2%2FRFpFzbIxz6s7NiWtMst9ok%2BWG4Vjcs1631iE0Pt%2BPo0elZEDFFq8o7FdJzD2RB6kZ5SxMl9RkTH5jCCHBvi69G%2Bo0v9fwyARMMnPncEGOqUBExtpy0%2Bu%2FKGnM1U4br7SZ547PLlo2Zm2JxLxfUyZj%2Fy%2BWir34V%2FKq1radT3k0cSfZUhzvuWfdknPffBRAnMF25unE%2B3lr7sdUH%2Bd%2FTgQxb3JlbG4f%2B7drL5bEDI%2FpLxkFpMCrrOKUOnQNzi3v1THJgSxQe3TbzyhuzKR0EH4DKdLCwl6UX79s5JUjOtJEPB%2Bqeci2ToH0VoIx1LUQPXC7vTpKYoo&X-Amz-Signature=fbc22063b4b1e47d0adae7f8f8e2bd8e6d3e3fb41b456be529d2471d6daaf3b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3GPJ3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBvCLTNy%2Fsa2rC802xRQ%2FShFmxpqugSpziTnrj4haigIgdWsUsqqnuyDYlXwNebgJTPuv7xjPmidWx3FwV2kesoUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKNTTRYl7ooOJF86SrcA6c7sVZi4Pfeu3An%2BoV%2F8DyaQ8Ry2KKDvQWWIj8Kg75p2LvqgyjV948ez3S%2Fs1qTesxsR87TgXLyj6%2FkMvmXqZBNfOhho0ckBGXaC0XYZYvTryeVrygkvpCWX8zFvIVmHqs9NS6uMwNQ9TxfzHhmkacTFkzbPdkY%2FJq2bnO2hYPLxz1FRLxJ3udOjN6%2BUA1wSLnNssbFzzRxfK7awOJ2WEplzEfX1qMA1%2FObNtXbc240MQvlGqE7ECeXrYqUHWXHsyr4zq3gbxU1%2BXQt%2F8iexJD%2F71yVVRhEL%2F2SicY20iEo6P7VjvwWmEIwQNRi%2FlPBLTyh5M1CyuW1F9V17Iv9DEUNOA0qxyC%2B%2BKX5jQQuhXPZxq0o0ab5KqUeo9MFl4%2BOQERUulWDxYIZ49LQLsPK1S3XA5VJ2AqU%2BYxY2yQbWV43O6wp42cxpDAWi9fmsbRCK%2Fomkgh%2B9mxAHVfihHCb7Oaa1Hb%2FfcszsfalStm9roGuz9W5Fy2uc%2B4sYgxVsSOLqiXdxDPv0gkJ610bBPG0dAc8gJ2%2FRFpFzbIxz6s7NiWtMst9ok%2BWG4Vjcs1631iE0Pt%2BPo0elZEDFFq8o7FdJzD2RB6kZ5SxMl9RkTH5jCCHBvi69G%2Bo0v9fwyARMMnPncEGOqUBExtpy0%2Bu%2FKGnM1U4br7SZ547PLlo2Zm2JxLxfUyZj%2Fy%2BWir34V%2FKq1radT3k0cSfZUhzvuWfdknPffBRAnMF25unE%2B3lr7sdUH%2Bd%2FTgQxb3JlbG4f%2B7drL5bEDI%2FpLxkFpMCrrOKUOnQNzi3v1THJgSxQe3TbzyhuzKR0EH4DKdLCwl6UX79s5JUjOtJEPB%2Bqeci2ToH0VoIx1LUQPXC7vTpKYoo&X-Amz-Signature=5d0a46bdb9d319e2b19da68d106d2f2b17756ad3213e45ff8e42a4aec6f10f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3GPJ3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBvCLTNy%2Fsa2rC802xRQ%2FShFmxpqugSpziTnrj4haigIgdWsUsqqnuyDYlXwNebgJTPuv7xjPmidWx3FwV2kesoUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKNTTRYl7ooOJF86SrcA6c7sVZi4Pfeu3An%2BoV%2F8DyaQ8Ry2KKDvQWWIj8Kg75p2LvqgyjV948ez3S%2Fs1qTesxsR87TgXLyj6%2FkMvmXqZBNfOhho0ckBGXaC0XYZYvTryeVrygkvpCWX8zFvIVmHqs9NS6uMwNQ9TxfzHhmkacTFkzbPdkY%2FJq2bnO2hYPLxz1FRLxJ3udOjN6%2BUA1wSLnNssbFzzRxfK7awOJ2WEplzEfX1qMA1%2FObNtXbc240MQvlGqE7ECeXrYqUHWXHsyr4zq3gbxU1%2BXQt%2F8iexJD%2F71yVVRhEL%2F2SicY20iEo6P7VjvwWmEIwQNRi%2FlPBLTyh5M1CyuW1F9V17Iv9DEUNOA0qxyC%2B%2BKX5jQQuhXPZxq0o0ab5KqUeo9MFl4%2BOQERUulWDxYIZ49LQLsPK1S3XA5VJ2AqU%2BYxY2yQbWV43O6wp42cxpDAWi9fmsbRCK%2Fomkgh%2B9mxAHVfihHCb7Oaa1Hb%2FfcszsfalStm9roGuz9W5Fy2uc%2B4sYgxVsSOLqiXdxDPv0gkJ610bBPG0dAc8gJ2%2FRFpFzbIxz6s7NiWtMst9ok%2BWG4Vjcs1631iE0Pt%2BPo0elZEDFFq8o7FdJzD2RB6kZ5SxMl9RkTH5jCCHBvi69G%2Bo0v9fwyARMMnPncEGOqUBExtpy0%2Bu%2FKGnM1U4br7SZ547PLlo2Zm2JxLxfUyZj%2Fy%2BWir34V%2FKq1radT3k0cSfZUhzvuWfdknPffBRAnMF25unE%2B3lr7sdUH%2Bd%2FTgQxb3JlbG4f%2B7drL5bEDI%2FpLxkFpMCrrOKUOnQNzi3v1THJgSxQe3TbzyhuzKR0EH4DKdLCwl6UX79s5JUjOtJEPB%2Bqeci2ToH0VoIx1LUQPXC7vTpKYoo&X-Amz-Signature=d7dbb1fd9f006ab40e3bbc79000177893c03b789220a631eade7c165fe6e9d14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3GPJ3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBvCLTNy%2Fsa2rC802xRQ%2FShFmxpqugSpziTnrj4haigIgdWsUsqqnuyDYlXwNebgJTPuv7xjPmidWx3FwV2kesoUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKNTTRYl7ooOJF86SrcA6c7sVZi4Pfeu3An%2BoV%2F8DyaQ8Ry2KKDvQWWIj8Kg75p2LvqgyjV948ez3S%2Fs1qTesxsR87TgXLyj6%2FkMvmXqZBNfOhho0ckBGXaC0XYZYvTryeVrygkvpCWX8zFvIVmHqs9NS6uMwNQ9TxfzHhmkacTFkzbPdkY%2FJq2bnO2hYPLxz1FRLxJ3udOjN6%2BUA1wSLnNssbFzzRxfK7awOJ2WEplzEfX1qMA1%2FObNtXbc240MQvlGqE7ECeXrYqUHWXHsyr4zq3gbxU1%2BXQt%2F8iexJD%2F71yVVRhEL%2F2SicY20iEo6P7VjvwWmEIwQNRi%2FlPBLTyh5M1CyuW1F9V17Iv9DEUNOA0qxyC%2B%2BKX5jQQuhXPZxq0o0ab5KqUeo9MFl4%2BOQERUulWDxYIZ49LQLsPK1S3XA5VJ2AqU%2BYxY2yQbWV43O6wp42cxpDAWi9fmsbRCK%2Fomkgh%2B9mxAHVfihHCb7Oaa1Hb%2FfcszsfalStm9roGuz9W5Fy2uc%2B4sYgxVsSOLqiXdxDPv0gkJ610bBPG0dAc8gJ2%2FRFpFzbIxz6s7NiWtMst9ok%2BWG4Vjcs1631iE0Pt%2BPo0elZEDFFq8o7FdJzD2RB6kZ5SxMl9RkTH5jCCHBvi69G%2Bo0v9fwyARMMnPncEGOqUBExtpy0%2Bu%2FKGnM1U4br7SZ547PLlo2Zm2JxLxfUyZj%2Fy%2BWir34V%2FKq1radT3k0cSfZUhzvuWfdknPffBRAnMF25unE%2B3lr7sdUH%2Bd%2FTgQxb3JlbG4f%2B7drL5bEDI%2FpLxkFpMCrrOKUOnQNzi3v1THJgSxQe3TbzyhuzKR0EH4DKdLCwl6UX79s5JUjOtJEPB%2Bqeci2ToH0VoIx1LUQPXC7vTpKYoo&X-Amz-Signature=d0bf5c8b094fae078b1745f8e9eb16a887a8f3ce9f3a45e8b407af6795338862&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3GPJ3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcBvCLTNy%2Fsa2rC802xRQ%2FShFmxpqugSpziTnrj4haigIgdWsUsqqnuyDYlXwNebgJTPuv7xjPmidWx3FwV2kesoUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCKNTTRYl7ooOJF86SrcA6c7sVZi4Pfeu3An%2BoV%2F8DyaQ8Ry2KKDvQWWIj8Kg75p2LvqgyjV948ez3S%2Fs1qTesxsR87TgXLyj6%2FkMvmXqZBNfOhho0ckBGXaC0XYZYvTryeVrygkvpCWX8zFvIVmHqs9NS6uMwNQ9TxfzHhmkacTFkzbPdkY%2FJq2bnO2hYPLxz1FRLxJ3udOjN6%2BUA1wSLnNssbFzzRxfK7awOJ2WEplzEfX1qMA1%2FObNtXbc240MQvlGqE7ECeXrYqUHWXHsyr4zq3gbxU1%2BXQt%2F8iexJD%2F71yVVRhEL%2F2SicY20iEo6P7VjvwWmEIwQNRi%2FlPBLTyh5M1CyuW1F9V17Iv9DEUNOA0qxyC%2B%2BKX5jQQuhXPZxq0o0ab5KqUeo9MFl4%2BOQERUulWDxYIZ49LQLsPK1S3XA5VJ2AqU%2BYxY2yQbWV43O6wp42cxpDAWi9fmsbRCK%2Fomkgh%2B9mxAHVfihHCb7Oaa1Hb%2FfcszsfalStm9roGuz9W5Fy2uc%2B4sYgxVsSOLqiXdxDPv0gkJ610bBPG0dAc8gJ2%2FRFpFzbIxz6s7NiWtMst9ok%2BWG4Vjcs1631iE0Pt%2BPo0elZEDFFq8o7FdJzD2RB6kZ5SxMl9RkTH5jCCHBvi69G%2Bo0v9fwyARMMnPncEGOqUBExtpy0%2Bu%2FKGnM1U4br7SZ547PLlo2Zm2JxLxfUyZj%2Fy%2BWir34V%2FKq1radT3k0cSfZUhzvuWfdknPffBRAnMF25unE%2B3lr7sdUH%2Bd%2FTgQxb3JlbG4f%2B7drL5bEDI%2FpLxkFpMCrrOKUOnQNzi3v1THJgSxQe3TbzyhuzKR0EH4DKdLCwl6UX79s5JUjOtJEPB%2Bqeci2ToH0VoIx1LUQPXC7vTpKYoo&X-Amz-Signature=4361c3911f4ebc8e003be335864dfa9df54ca5bd43a7c8bc82e3492e5727b5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
