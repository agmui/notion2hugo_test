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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7NZRXF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHuydz5A70kKpp5r1Krm5sG2XZlpsKSX%2F36PbVYrpFsdAiBFuRVLACQlobLgQBMG0QGR6%2BME0odSRbCI7OcvqL0KFSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwcPv3aQ98aO%2FmEV0KtwD6dyyI9OyALVmWOljQUl2QDbrU4g4jAGkDNJcmo%2BGRiTOF0dKBpJE1X93YJIBmC2rhhCA%2BB%2FIhbMGCSj1DNaH5LeXjh2k0QD9Exrh%2Bjnbn0iUkM3muLuxgC%2FtEwuxBt0BoHBh5rRzc1fG3D%2FDYqryHzAxPixbSS7Q3bQQjZxVxQCODCZMnld9TK%2B6Bx4d5cuIE4jO74esgmAW4JJJhBhwfuYVME7oJ3CVlFnHw1NqoGg0gcDjUX2%2B4J6rBYFSsNMwwLFeQMU%2F2Dh8jrH3zi1S0eJb54nK7bWh0RcOh%2BraWEIgzq5ZIULsESPuSXhkdyaUI22yUBh5a5XLehlGv5hf1w1ErfPvv1qdW9gsJ2UsU5fYvnLMx63KTAnzmd3CMkzkDGpWqWmXIkqjOnBtDTF9XZqbabCxFTJ9hwvgqrkJ9jn%2BztM%2ByCmyDkhvRA5slSWz88HkGqCt%2F64ERHSAtMfad08mAjnMtpYckyVCTsnjz%2FmNv3lXbwdJKroyoDMM2PEbOrFShC0fr7Sql3YYttZa3zbcwH71le0Ykp5lkpWrkIyg5kVHJsFHU9sBaaxoDsi%2FnZBjedRupm6TtLzdrFz2QQNXJS6gG3DCbQZ8hEoJxf%2B3xGpze9DvhkdgJxUwu7aWwQY6pgHVWwgCMgfmpQVY5qTbA70pDkPDVf%2FZIt1boWc%2FU0ZazT7Rt1l9p8IN7QxUrLgcpHwEg0E9s%2FkBpVhTgvYPrIdmy2KHmc91mIbibbz6sjIk2p%2FtbY0cx0kpYJRO2LQ7q82QNKfRjZ88deiZr1eseRx7Cy7qpjub%2B1BWnhGjApsHY5e9tp3APDi02OZ10RiRZ9NTGmsBBCLVmgJmjryOtnDWpBFBEAWa&X-Amz-Signature=1ee7e2dc6dc4101cfca6e3c516aa8e3c04cdce0c639c967af7676f743a73996a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7NZRXF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHuydz5A70kKpp5r1Krm5sG2XZlpsKSX%2F36PbVYrpFsdAiBFuRVLACQlobLgQBMG0QGR6%2BME0odSRbCI7OcvqL0KFSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwcPv3aQ98aO%2FmEV0KtwD6dyyI9OyALVmWOljQUl2QDbrU4g4jAGkDNJcmo%2BGRiTOF0dKBpJE1X93YJIBmC2rhhCA%2BB%2FIhbMGCSj1DNaH5LeXjh2k0QD9Exrh%2Bjnbn0iUkM3muLuxgC%2FtEwuxBt0BoHBh5rRzc1fG3D%2FDYqryHzAxPixbSS7Q3bQQjZxVxQCODCZMnld9TK%2B6Bx4d5cuIE4jO74esgmAW4JJJhBhwfuYVME7oJ3CVlFnHw1NqoGg0gcDjUX2%2B4J6rBYFSsNMwwLFeQMU%2F2Dh8jrH3zi1S0eJb54nK7bWh0RcOh%2BraWEIgzq5ZIULsESPuSXhkdyaUI22yUBh5a5XLehlGv5hf1w1ErfPvv1qdW9gsJ2UsU5fYvnLMx63KTAnzmd3CMkzkDGpWqWmXIkqjOnBtDTF9XZqbabCxFTJ9hwvgqrkJ9jn%2BztM%2ByCmyDkhvRA5slSWz88HkGqCt%2F64ERHSAtMfad08mAjnMtpYckyVCTsnjz%2FmNv3lXbwdJKroyoDMM2PEbOrFShC0fr7Sql3YYttZa3zbcwH71le0Ykp5lkpWrkIyg5kVHJsFHU9sBaaxoDsi%2FnZBjedRupm6TtLzdrFz2QQNXJS6gG3DCbQZ8hEoJxf%2B3xGpze9DvhkdgJxUwu7aWwQY6pgHVWwgCMgfmpQVY5qTbA70pDkPDVf%2FZIt1boWc%2FU0ZazT7Rt1l9p8IN7QxUrLgcpHwEg0E9s%2FkBpVhTgvYPrIdmy2KHmc91mIbibbz6sjIk2p%2FtbY0cx0kpYJRO2LQ7q82QNKfRjZ88deiZr1eseRx7Cy7qpjub%2B1BWnhGjApsHY5e9tp3APDi02OZ10RiRZ9NTGmsBBCLVmgJmjryOtnDWpBFBEAWa&X-Amz-Signature=579b91cd9c665b7dbe7eb38a03e02d6a108586875b7b65536ffdfbf028c969f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7NZRXF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHuydz5A70kKpp5r1Krm5sG2XZlpsKSX%2F36PbVYrpFsdAiBFuRVLACQlobLgQBMG0QGR6%2BME0odSRbCI7OcvqL0KFSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwcPv3aQ98aO%2FmEV0KtwD6dyyI9OyALVmWOljQUl2QDbrU4g4jAGkDNJcmo%2BGRiTOF0dKBpJE1X93YJIBmC2rhhCA%2BB%2FIhbMGCSj1DNaH5LeXjh2k0QD9Exrh%2Bjnbn0iUkM3muLuxgC%2FtEwuxBt0BoHBh5rRzc1fG3D%2FDYqryHzAxPixbSS7Q3bQQjZxVxQCODCZMnld9TK%2B6Bx4d5cuIE4jO74esgmAW4JJJhBhwfuYVME7oJ3CVlFnHw1NqoGg0gcDjUX2%2B4J6rBYFSsNMwwLFeQMU%2F2Dh8jrH3zi1S0eJb54nK7bWh0RcOh%2BraWEIgzq5ZIULsESPuSXhkdyaUI22yUBh5a5XLehlGv5hf1w1ErfPvv1qdW9gsJ2UsU5fYvnLMx63KTAnzmd3CMkzkDGpWqWmXIkqjOnBtDTF9XZqbabCxFTJ9hwvgqrkJ9jn%2BztM%2ByCmyDkhvRA5slSWz88HkGqCt%2F64ERHSAtMfad08mAjnMtpYckyVCTsnjz%2FmNv3lXbwdJKroyoDMM2PEbOrFShC0fr7Sql3YYttZa3zbcwH71le0Ykp5lkpWrkIyg5kVHJsFHU9sBaaxoDsi%2FnZBjedRupm6TtLzdrFz2QQNXJS6gG3DCbQZ8hEoJxf%2B3xGpze9DvhkdgJxUwu7aWwQY6pgHVWwgCMgfmpQVY5qTbA70pDkPDVf%2FZIt1boWc%2FU0ZazT7Rt1l9p8IN7QxUrLgcpHwEg0E9s%2FkBpVhTgvYPrIdmy2KHmc91mIbibbz6sjIk2p%2FtbY0cx0kpYJRO2LQ7q82QNKfRjZ88deiZr1eseRx7Cy7qpjub%2B1BWnhGjApsHY5e9tp3APDi02OZ10RiRZ9NTGmsBBCLVmgJmjryOtnDWpBFBEAWa&X-Amz-Signature=000f5fc8ca3f5985f2b46a5e1d130a19c513443a17b882e0ec3ea0e5e451c347&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7NZRXF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHuydz5A70kKpp5r1Krm5sG2XZlpsKSX%2F36PbVYrpFsdAiBFuRVLACQlobLgQBMG0QGR6%2BME0odSRbCI7OcvqL0KFSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwcPv3aQ98aO%2FmEV0KtwD6dyyI9OyALVmWOljQUl2QDbrU4g4jAGkDNJcmo%2BGRiTOF0dKBpJE1X93YJIBmC2rhhCA%2BB%2FIhbMGCSj1DNaH5LeXjh2k0QD9Exrh%2Bjnbn0iUkM3muLuxgC%2FtEwuxBt0BoHBh5rRzc1fG3D%2FDYqryHzAxPixbSS7Q3bQQjZxVxQCODCZMnld9TK%2B6Bx4d5cuIE4jO74esgmAW4JJJhBhwfuYVME7oJ3CVlFnHw1NqoGg0gcDjUX2%2B4J6rBYFSsNMwwLFeQMU%2F2Dh8jrH3zi1S0eJb54nK7bWh0RcOh%2BraWEIgzq5ZIULsESPuSXhkdyaUI22yUBh5a5XLehlGv5hf1w1ErfPvv1qdW9gsJ2UsU5fYvnLMx63KTAnzmd3CMkzkDGpWqWmXIkqjOnBtDTF9XZqbabCxFTJ9hwvgqrkJ9jn%2BztM%2ByCmyDkhvRA5slSWz88HkGqCt%2F64ERHSAtMfad08mAjnMtpYckyVCTsnjz%2FmNv3lXbwdJKroyoDMM2PEbOrFShC0fr7Sql3YYttZa3zbcwH71le0Ykp5lkpWrkIyg5kVHJsFHU9sBaaxoDsi%2FnZBjedRupm6TtLzdrFz2QQNXJS6gG3DCbQZ8hEoJxf%2B3xGpze9DvhkdgJxUwu7aWwQY6pgHVWwgCMgfmpQVY5qTbA70pDkPDVf%2FZIt1boWc%2FU0ZazT7Rt1l9p8IN7QxUrLgcpHwEg0E9s%2FkBpVhTgvYPrIdmy2KHmc91mIbibbz6sjIk2p%2FtbY0cx0kpYJRO2LQ7q82QNKfRjZ88deiZr1eseRx7Cy7qpjub%2B1BWnhGjApsHY5e9tp3APDi02OZ10RiRZ9NTGmsBBCLVmgJmjryOtnDWpBFBEAWa&X-Amz-Signature=3a7be1fab90c7ef1797c8e3a19d34906bf940fd9f6ab0212adf6da9f5c580441&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7NZRXF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHuydz5A70kKpp5r1Krm5sG2XZlpsKSX%2F36PbVYrpFsdAiBFuRVLACQlobLgQBMG0QGR6%2BME0odSRbCI7OcvqL0KFSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwcPv3aQ98aO%2FmEV0KtwD6dyyI9OyALVmWOljQUl2QDbrU4g4jAGkDNJcmo%2BGRiTOF0dKBpJE1X93YJIBmC2rhhCA%2BB%2FIhbMGCSj1DNaH5LeXjh2k0QD9Exrh%2Bjnbn0iUkM3muLuxgC%2FtEwuxBt0BoHBh5rRzc1fG3D%2FDYqryHzAxPixbSS7Q3bQQjZxVxQCODCZMnld9TK%2B6Bx4d5cuIE4jO74esgmAW4JJJhBhwfuYVME7oJ3CVlFnHw1NqoGg0gcDjUX2%2B4J6rBYFSsNMwwLFeQMU%2F2Dh8jrH3zi1S0eJb54nK7bWh0RcOh%2BraWEIgzq5ZIULsESPuSXhkdyaUI22yUBh5a5XLehlGv5hf1w1ErfPvv1qdW9gsJ2UsU5fYvnLMx63KTAnzmd3CMkzkDGpWqWmXIkqjOnBtDTF9XZqbabCxFTJ9hwvgqrkJ9jn%2BztM%2ByCmyDkhvRA5slSWz88HkGqCt%2F64ERHSAtMfad08mAjnMtpYckyVCTsnjz%2FmNv3lXbwdJKroyoDMM2PEbOrFShC0fr7Sql3YYttZa3zbcwH71le0Ykp5lkpWrkIyg5kVHJsFHU9sBaaxoDsi%2FnZBjedRupm6TtLzdrFz2QQNXJS6gG3DCbQZ8hEoJxf%2B3xGpze9DvhkdgJxUwu7aWwQY6pgHVWwgCMgfmpQVY5qTbA70pDkPDVf%2FZIt1boWc%2FU0ZazT7Rt1l9p8IN7QxUrLgcpHwEg0E9s%2FkBpVhTgvYPrIdmy2KHmc91mIbibbz6sjIk2p%2FtbY0cx0kpYJRO2LQ7q82QNKfRjZ88deiZr1eseRx7Cy7qpjub%2B1BWnhGjApsHY5e9tp3APDi02OZ10RiRZ9NTGmsBBCLVmgJmjryOtnDWpBFBEAWa&X-Amz-Signature=d359f12741bd026e874bf48a8902b9fdf8fe41f1e6d78adb4230a9e50131b641&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7NZRXF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHuydz5A70kKpp5r1Krm5sG2XZlpsKSX%2F36PbVYrpFsdAiBFuRVLACQlobLgQBMG0QGR6%2BME0odSRbCI7OcvqL0KFSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwcPv3aQ98aO%2FmEV0KtwD6dyyI9OyALVmWOljQUl2QDbrU4g4jAGkDNJcmo%2BGRiTOF0dKBpJE1X93YJIBmC2rhhCA%2BB%2FIhbMGCSj1DNaH5LeXjh2k0QD9Exrh%2Bjnbn0iUkM3muLuxgC%2FtEwuxBt0BoHBh5rRzc1fG3D%2FDYqryHzAxPixbSS7Q3bQQjZxVxQCODCZMnld9TK%2B6Bx4d5cuIE4jO74esgmAW4JJJhBhwfuYVME7oJ3CVlFnHw1NqoGg0gcDjUX2%2B4J6rBYFSsNMwwLFeQMU%2F2Dh8jrH3zi1S0eJb54nK7bWh0RcOh%2BraWEIgzq5ZIULsESPuSXhkdyaUI22yUBh5a5XLehlGv5hf1w1ErfPvv1qdW9gsJ2UsU5fYvnLMx63KTAnzmd3CMkzkDGpWqWmXIkqjOnBtDTF9XZqbabCxFTJ9hwvgqrkJ9jn%2BztM%2ByCmyDkhvRA5slSWz88HkGqCt%2F64ERHSAtMfad08mAjnMtpYckyVCTsnjz%2FmNv3lXbwdJKroyoDMM2PEbOrFShC0fr7Sql3YYttZa3zbcwH71le0Ykp5lkpWrkIyg5kVHJsFHU9sBaaxoDsi%2FnZBjedRupm6TtLzdrFz2QQNXJS6gG3DCbQZ8hEoJxf%2B3xGpze9DvhkdgJxUwu7aWwQY6pgHVWwgCMgfmpQVY5qTbA70pDkPDVf%2FZIt1boWc%2FU0ZazT7Rt1l9p8IN7QxUrLgcpHwEg0E9s%2FkBpVhTgvYPrIdmy2KHmc91mIbibbz6sjIk2p%2FtbY0cx0kpYJRO2LQ7q82QNKfRjZ88deiZr1eseRx7Cy7qpjub%2B1BWnhGjApsHY5e9tp3APDi02OZ10RiRZ9NTGmsBBCLVmgJmjryOtnDWpBFBEAWa&X-Amz-Signature=ea464d720bada2457806d9c8e19f2795f14abd9c84de275d11cf629d4a66d167&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7NZRXF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHuydz5A70kKpp5r1Krm5sG2XZlpsKSX%2F36PbVYrpFsdAiBFuRVLACQlobLgQBMG0QGR6%2BME0odSRbCI7OcvqL0KFSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwcPv3aQ98aO%2FmEV0KtwD6dyyI9OyALVmWOljQUl2QDbrU4g4jAGkDNJcmo%2BGRiTOF0dKBpJE1X93YJIBmC2rhhCA%2BB%2FIhbMGCSj1DNaH5LeXjh2k0QD9Exrh%2Bjnbn0iUkM3muLuxgC%2FtEwuxBt0BoHBh5rRzc1fG3D%2FDYqryHzAxPixbSS7Q3bQQjZxVxQCODCZMnld9TK%2B6Bx4d5cuIE4jO74esgmAW4JJJhBhwfuYVME7oJ3CVlFnHw1NqoGg0gcDjUX2%2B4J6rBYFSsNMwwLFeQMU%2F2Dh8jrH3zi1S0eJb54nK7bWh0RcOh%2BraWEIgzq5ZIULsESPuSXhkdyaUI22yUBh5a5XLehlGv5hf1w1ErfPvv1qdW9gsJ2UsU5fYvnLMx63KTAnzmd3CMkzkDGpWqWmXIkqjOnBtDTF9XZqbabCxFTJ9hwvgqrkJ9jn%2BztM%2ByCmyDkhvRA5slSWz88HkGqCt%2F64ERHSAtMfad08mAjnMtpYckyVCTsnjz%2FmNv3lXbwdJKroyoDMM2PEbOrFShC0fr7Sql3YYttZa3zbcwH71le0Ykp5lkpWrkIyg5kVHJsFHU9sBaaxoDsi%2FnZBjedRupm6TtLzdrFz2QQNXJS6gG3DCbQZ8hEoJxf%2B3xGpze9DvhkdgJxUwu7aWwQY6pgHVWwgCMgfmpQVY5qTbA70pDkPDVf%2FZIt1boWc%2FU0ZazT7Rt1l9p8IN7QxUrLgcpHwEg0E9s%2FkBpVhTgvYPrIdmy2KHmc91mIbibbz6sjIk2p%2FtbY0cx0kpYJRO2LQ7q82QNKfRjZ88deiZr1eseRx7Cy7qpjub%2B1BWnhGjApsHY5e9tp3APDi02OZ10RiRZ9NTGmsBBCLVmgJmjryOtnDWpBFBEAWa&X-Amz-Signature=dc30392ef343878df7696caa5758bd058b9446578b032af7fe330004b8aeeea1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7NZRXF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHuydz5A70kKpp5r1Krm5sG2XZlpsKSX%2F36PbVYrpFsdAiBFuRVLACQlobLgQBMG0QGR6%2BME0odSRbCI7OcvqL0KFSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwcPv3aQ98aO%2FmEV0KtwD6dyyI9OyALVmWOljQUl2QDbrU4g4jAGkDNJcmo%2BGRiTOF0dKBpJE1X93YJIBmC2rhhCA%2BB%2FIhbMGCSj1DNaH5LeXjh2k0QD9Exrh%2Bjnbn0iUkM3muLuxgC%2FtEwuxBt0BoHBh5rRzc1fG3D%2FDYqryHzAxPixbSS7Q3bQQjZxVxQCODCZMnld9TK%2B6Bx4d5cuIE4jO74esgmAW4JJJhBhwfuYVME7oJ3CVlFnHw1NqoGg0gcDjUX2%2B4J6rBYFSsNMwwLFeQMU%2F2Dh8jrH3zi1S0eJb54nK7bWh0RcOh%2BraWEIgzq5ZIULsESPuSXhkdyaUI22yUBh5a5XLehlGv5hf1w1ErfPvv1qdW9gsJ2UsU5fYvnLMx63KTAnzmd3CMkzkDGpWqWmXIkqjOnBtDTF9XZqbabCxFTJ9hwvgqrkJ9jn%2BztM%2ByCmyDkhvRA5slSWz88HkGqCt%2F64ERHSAtMfad08mAjnMtpYckyVCTsnjz%2FmNv3lXbwdJKroyoDMM2PEbOrFShC0fr7Sql3YYttZa3zbcwH71le0Ykp5lkpWrkIyg5kVHJsFHU9sBaaxoDsi%2FnZBjedRupm6TtLzdrFz2QQNXJS6gG3DCbQZ8hEoJxf%2B3xGpze9DvhkdgJxUwu7aWwQY6pgHVWwgCMgfmpQVY5qTbA70pDkPDVf%2FZIt1boWc%2FU0ZazT7Rt1l9p8IN7QxUrLgcpHwEg0E9s%2FkBpVhTgvYPrIdmy2KHmc91mIbibbz6sjIk2p%2FtbY0cx0kpYJRO2LQ7q82QNKfRjZ88deiZr1eseRx7Cy7qpjub%2B1BWnhGjApsHY5e9tp3APDi02OZ10RiRZ9NTGmsBBCLVmgJmjryOtnDWpBFBEAWa&X-Amz-Signature=0723977a676f6d2820f28f050bf28b6af3e6f21f62a6721a7164dbebc1b27bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
