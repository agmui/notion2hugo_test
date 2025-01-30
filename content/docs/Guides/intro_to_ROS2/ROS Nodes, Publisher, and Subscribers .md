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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXAZ464%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECqX9JwQpfaXG3BM9Is%2FNttstulryhznwLhT32%2BmZztAiASc2DfLgpfr6PPF1u947UKrhcJPjS%2BqBWV6bcxanvoCyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG33q2CfcbXNcChjeKtwDRnI3tp4xpF0aL8f8D5G2gxYm1yTDx6RP%2FU1oJgdDpqlwZHiQfjGTMqYloziLnCQJE3sGhdMI7RGpIE0r9wagm5fY0F%2Fq7okR2N8G6GjH05%2FVtCcc%2BlywCTt%2Bte9TR4aP8X9mgtJSksCXnAoM3K4Tds82jQb69eaIgTzi7CIjnRGceDwBl7rs%2BOIhEvARHfJujH2pDUawMu9UoIWRh65AaymTDdPIM5f6DbgZH74TyiDvXop58zOdayXw8ylVJjxgXnAIWICO4KpQPmL%2FS4p%2FQt6BcEn3EvhUGDtqrhuC%2BTgua9zJ4TQEWS7dvHAbHgrkooEX3Q2UkpJRqkuvaB7ihsLcTFFAZawhKRXehmjfebK7Ut%2FDAVodSvvlWlMzOdpX0hA%2F0rANj6C7IwVY70Df5EzEX4%2BOXEcuDCcB480%2FTRJAH%2BB%2FgyuLT7%2BKO48NSrX7AIc4DFbeudwzzmvuSlWekqM4UZfsz36H4eIOc5DcBu5JZ5nWUYwj58sr7pROPFT%2BTHNaWedegHEhBVLPis75%2BM9Qf6SV4ZgJ6IjVoTkDbV%2FF2fTK8vMlm3gwsh1IsJsRGPZGbIz19mDYYds2vi4W39QmkwuXPMIYgdocL7sIAY5WhKOA0wR2YJCaHYYw9cTtvAY6pgHB00lgNoCucXxa7YBQsOaCX8bUoiy0RTZwobREfyAsmnzrhOEuLBiAl%2FFIl63DeLgS0VKEXYJYt5FzAABoSDurU8O6up2%2FheYJ83HJ6kHYDC7vPwsSlwZENAmQRChOCYbJZFZbqp%2BtPykIJSJ94xTiaShHOFHJGoQWpq7wmFfBrlcleSGviP9vsiDjyqq0UhrnmX9KXWaJVIB90Wq07QnS%2FpBre7po&X-Amz-Signature=d3c98f6b6645fbbd48f56000bbb1453bbc0cc9b6ceae00c661b236ce5213866c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXAZ464%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECqX9JwQpfaXG3BM9Is%2FNttstulryhznwLhT32%2BmZztAiASc2DfLgpfr6PPF1u947UKrhcJPjS%2BqBWV6bcxanvoCyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG33q2CfcbXNcChjeKtwDRnI3tp4xpF0aL8f8D5G2gxYm1yTDx6RP%2FU1oJgdDpqlwZHiQfjGTMqYloziLnCQJE3sGhdMI7RGpIE0r9wagm5fY0F%2Fq7okR2N8G6GjH05%2FVtCcc%2BlywCTt%2Bte9TR4aP8X9mgtJSksCXnAoM3K4Tds82jQb69eaIgTzi7CIjnRGceDwBl7rs%2BOIhEvARHfJujH2pDUawMu9UoIWRh65AaymTDdPIM5f6DbgZH74TyiDvXop58zOdayXw8ylVJjxgXnAIWICO4KpQPmL%2FS4p%2FQt6BcEn3EvhUGDtqrhuC%2BTgua9zJ4TQEWS7dvHAbHgrkooEX3Q2UkpJRqkuvaB7ihsLcTFFAZawhKRXehmjfebK7Ut%2FDAVodSvvlWlMzOdpX0hA%2F0rANj6C7IwVY70Df5EzEX4%2BOXEcuDCcB480%2FTRJAH%2BB%2FgyuLT7%2BKO48NSrX7AIc4DFbeudwzzmvuSlWekqM4UZfsz36H4eIOc5DcBu5JZ5nWUYwj58sr7pROPFT%2BTHNaWedegHEhBVLPis75%2BM9Qf6SV4ZgJ6IjVoTkDbV%2FF2fTK8vMlm3gwsh1IsJsRGPZGbIz19mDYYds2vi4W39QmkwuXPMIYgdocL7sIAY5WhKOA0wR2YJCaHYYw9cTtvAY6pgHB00lgNoCucXxa7YBQsOaCX8bUoiy0RTZwobREfyAsmnzrhOEuLBiAl%2FFIl63DeLgS0VKEXYJYt5FzAABoSDurU8O6up2%2FheYJ83HJ6kHYDC7vPwsSlwZENAmQRChOCYbJZFZbqp%2BtPykIJSJ94xTiaShHOFHJGoQWpq7wmFfBrlcleSGviP9vsiDjyqq0UhrnmX9KXWaJVIB90Wq07QnS%2FpBre7po&X-Amz-Signature=10f9dffdd6c5bba2b1a2d8e67552ba43b95e5d33e6d4b21ae3731af6d20952aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXAZ464%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECqX9JwQpfaXG3BM9Is%2FNttstulryhznwLhT32%2BmZztAiASc2DfLgpfr6PPF1u947UKrhcJPjS%2BqBWV6bcxanvoCyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG33q2CfcbXNcChjeKtwDRnI3tp4xpF0aL8f8D5G2gxYm1yTDx6RP%2FU1oJgdDpqlwZHiQfjGTMqYloziLnCQJE3sGhdMI7RGpIE0r9wagm5fY0F%2Fq7okR2N8G6GjH05%2FVtCcc%2BlywCTt%2Bte9TR4aP8X9mgtJSksCXnAoM3K4Tds82jQb69eaIgTzi7CIjnRGceDwBl7rs%2BOIhEvARHfJujH2pDUawMu9UoIWRh65AaymTDdPIM5f6DbgZH74TyiDvXop58zOdayXw8ylVJjxgXnAIWICO4KpQPmL%2FS4p%2FQt6BcEn3EvhUGDtqrhuC%2BTgua9zJ4TQEWS7dvHAbHgrkooEX3Q2UkpJRqkuvaB7ihsLcTFFAZawhKRXehmjfebK7Ut%2FDAVodSvvlWlMzOdpX0hA%2F0rANj6C7IwVY70Df5EzEX4%2BOXEcuDCcB480%2FTRJAH%2BB%2FgyuLT7%2BKO48NSrX7AIc4DFbeudwzzmvuSlWekqM4UZfsz36H4eIOc5DcBu5JZ5nWUYwj58sr7pROPFT%2BTHNaWedegHEhBVLPis75%2BM9Qf6SV4ZgJ6IjVoTkDbV%2FF2fTK8vMlm3gwsh1IsJsRGPZGbIz19mDYYds2vi4W39QmkwuXPMIYgdocL7sIAY5WhKOA0wR2YJCaHYYw9cTtvAY6pgHB00lgNoCucXxa7YBQsOaCX8bUoiy0RTZwobREfyAsmnzrhOEuLBiAl%2FFIl63DeLgS0VKEXYJYt5FzAABoSDurU8O6up2%2FheYJ83HJ6kHYDC7vPwsSlwZENAmQRChOCYbJZFZbqp%2BtPykIJSJ94xTiaShHOFHJGoQWpq7wmFfBrlcleSGviP9vsiDjyqq0UhrnmX9KXWaJVIB90Wq07QnS%2FpBre7po&X-Amz-Signature=cdd4dbc08dd2bf130fc38bf581cf90872e1ab1007950591ed81c4b347570fa9b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXAZ464%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECqX9JwQpfaXG3BM9Is%2FNttstulryhznwLhT32%2BmZztAiASc2DfLgpfr6PPF1u947UKrhcJPjS%2BqBWV6bcxanvoCyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG33q2CfcbXNcChjeKtwDRnI3tp4xpF0aL8f8D5G2gxYm1yTDx6RP%2FU1oJgdDpqlwZHiQfjGTMqYloziLnCQJE3sGhdMI7RGpIE0r9wagm5fY0F%2Fq7okR2N8G6GjH05%2FVtCcc%2BlywCTt%2Bte9TR4aP8X9mgtJSksCXnAoM3K4Tds82jQb69eaIgTzi7CIjnRGceDwBl7rs%2BOIhEvARHfJujH2pDUawMu9UoIWRh65AaymTDdPIM5f6DbgZH74TyiDvXop58zOdayXw8ylVJjxgXnAIWICO4KpQPmL%2FS4p%2FQt6BcEn3EvhUGDtqrhuC%2BTgua9zJ4TQEWS7dvHAbHgrkooEX3Q2UkpJRqkuvaB7ihsLcTFFAZawhKRXehmjfebK7Ut%2FDAVodSvvlWlMzOdpX0hA%2F0rANj6C7IwVY70Df5EzEX4%2BOXEcuDCcB480%2FTRJAH%2BB%2FgyuLT7%2BKO48NSrX7AIc4DFbeudwzzmvuSlWekqM4UZfsz36H4eIOc5DcBu5JZ5nWUYwj58sr7pROPFT%2BTHNaWedegHEhBVLPis75%2BM9Qf6SV4ZgJ6IjVoTkDbV%2FF2fTK8vMlm3gwsh1IsJsRGPZGbIz19mDYYds2vi4W39QmkwuXPMIYgdocL7sIAY5WhKOA0wR2YJCaHYYw9cTtvAY6pgHB00lgNoCucXxa7YBQsOaCX8bUoiy0RTZwobREfyAsmnzrhOEuLBiAl%2FFIl63DeLgS0VKEXYJYt5FzAABoSDurU8O6up2%2FheYJ83HJ6kHYDC7vPwsSlwZENAmQRChOCYbJZFZbqp%2BtPykIJSJ94xTiaShHOFHJGoQWpq7wmFfBrlcleSGviP9vsiDjyqq0UhrnmX9KXWaJVIB90Wq07QnS%2FpBre7po&X-Amz-Signature=bd188465ad9005e4919905c9724318ddd931d3ce2cd3c53c9404477c39d0ad5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXAZ464%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECqX9JwQpfaXG3BM9Is%2FNttstulryhznwLhT32%2BmZztAiASc2DfLgpfr6PPF1u947UKrhcJPjS%2BqBWV6bcxanvoCyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG33q2CfcbXNcChjeKtwDRnI3tp4xpF0aL8f8D5G2gxYm1yTDx6RP%2FU1oJgdDpqlwZHiQfjGTMqYloziLnCQJE3sGhdMI7RGpIE0r9wagm5fY0F%2Fq7okR2N8G6GjH05%2FVtCcc%2BlywCTt%2Bte9TR4aP8X9mgtJSksCXnAoM3K4Tds82jQb69eaIgTzi7CIjnRGceDwBl7rs%2BOIhEvARHfJujH2pDUawMu9UoIWRh65AaymTDdPIM5f6DbgZH74TyiDvXop58zOdayXw8ylVJjxgXnAIWICO4KpQPmL%2FS4p%2FQt6BcEn3EvhUGDtqrhuC%2BTgua9zJ4TQEWS7dvHAbHgrkooEX3Q2UkpJRqkuvaB7ihsLcTFFAZawhKRXehmjfebK7Ut%2FDAVodSvvlWlMzOdpX0hA%2F0rANj6C7IwVY70Df5EzEX4%2BOXEcuDCcB480%2FTRJAH%2BB%2FgyuLT7%2BKO48NSrX7AIc4DFbeudwzzmvuSlWekqM4UZfsz36H4eIOc5DcBu5JZ5nWUYwj58sr7pROPFT%2BTHNaWedegHEhBVLPis75%2BM9Qf6SV4ZgJ6IjVoTkDbV%2FF2fTK8vMlm3gwsh1IsJsRGPZGbIz19mDYYds2vi4W39QmkwuXPMIYgdocL7sIAY5WhKOA0wR2YJCaHYYw9cTtvAY6pgHB00lgNoCucXxa7YBQsOaCX8bUoiy0RTZwobREfyAsmnzrhOEuLBiAl%2FFIl63DeLgS0VKEXYJYt5FzAABoSDurU8O6up2%2FheYJ83HJ6kHYDC7vPwsSlwZENAmQRChOCYbJZFZbqp%2BtPykIJSJ94xTiaShHOFHJGoQWpq7wmFfBrlcleSGviP9vsiDjyqq0UhrnmX9KXWaJVIB90Wq07QnS%2FpBre7po&X-Amz-Signature=7304c47059714f8c44ff3a56cf1de0d9a4646e0baacb102f9578979a2d0439ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXAZ464%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECqX9JwQpfaXG3BM9Is%2FNttstulryhznwLhT32%2BmZztAiASc2DfLgpfr6PPF1u947UKrhcJPjS%2BqBWV6bcxanvoCyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG33q2CfcbXNcChjeKtwDRnI3tp4xpF0aL8f8D5G2gxYm1yTDx6RP%2FU1oJgdDpqlwZHiQfjGTMqYloziLnCQJE3sGhdMI7RGpIE0r9wagm5fY0F%2Fq7okR2N8G6GjH05%2FVtCcc%2BlywCTt%2Bte9TR4aP8X9mgtJSksCXnAoM3K4Tds82jQb69eaIgTzi7CIjnRGceDwBl7rs%2BOIhEvARHfJujH2pDUawMu9UoIWRh65AaymTDdPIM5f6DbgZH74TyiDvXop58zOdayXw8ylVJjxgXnAIWICO4KpQPmL%2FS4p%2FQt6BcEn3EvhUGDtqrhuC%2BTgua9zJ4TQEWS7dvHAbHgrkooEX3Q2UkpJRqkuvaB7ihsLcTFFAZawhKRXehmjfebK7Ut%2FDAVodSvvlWlMzOdpX0hA%2F0rANj6C7IwVY70Df5EzEX4%2BOXEcuDCcB480%2FTRJAH%2BB%2FgyuLT7%2BKO48NSrX7AIc4DFbeudwzzmvuSlWekqM4UZfsz36H4eIOc5DcBu5JZ5nWUYwj58sr7pROPFT%2BTHNaWedegHEhBVLPis75%2BM9Qf6SV4ZgJ6IjVoTkDbV%2FF2fTK8vMlm3gwsh1IsJsRGPZGbIz19mDYYds2vi4W39QmkwuXPMIYgdocL7sIAY5WhKOA0wR2YJCaHYYw9cTtvAY6pgHB00lgNoCucXxa7YBQsOaCX8bUoiy0RTZwobREfyAsmnzrhOEuLBiAl%2FFIl63DeLgS0VKEXYJYt5FzAABoSDurU8O6up2%2FheYJ83HJ6kHYDC7vPwsSlwZENAmQRChOCYbJZFZbqp%2BtPykIJSJ94xTiaShHOFHJGoQWpq7wmFfBrlcleSGviP9vsiDjyqq0UhrnmX9KXWaJVIB90Wq07QnS%2FpBre7po&X-Amz-Signature=a0bf4477616aa718b187ddb190f364193d1514e5a97dc02339678149a2174ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXAZ464%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECqX9JwQpfaXG3BM9Is%2FNttstulryhznwLhT32%2BmZztAiASc2DfLgpfr6PPF1u947UKrhcJPjS%2BqBWV6bcxanvoCyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG33q2CfcbXNcChjeKtwDRnI3tp4xpF0aL8f8D5G2gxYm1yTDx6RP%2FU1oJgdDpqlwZHiQfjGTMqYloziLnCQJE3sGhdMI7RGpIE0r9wagm5fY0F%2Fq7okR2N8G6GjH05%2FVtCcc%2BlywCTt%2Bte9TR4aP8X9mgtJSksCXnAoM3K4Tds82jQb69eaIgTzi7CIjnRGceDwBl7rs%2BOIhEvARHfJujH2pDUawMu9UoIWRh65AaymTDdPIM5f6DbgZH74TyiDvXop58zOdayXw8ylVJjxgXnAIWICO4KpQPmL%2FS4p%2FQt6BcEn3EvhUGDtqrhuC%2BTgua9zJ4TQEWS7dvHAbHgrkooEX3Q2UkpJRqkuvaB7ihsLcTFFAZawhKRXehmjfebK7Ut%2FDAVodSvvlWlMzOdpX0hA%2F0rANj6C7IwVY70Df5EzEX4%2BOXEcuDCcB480%2FTRJAH%2BB%2FgyuLT7%2BKO48NSrX7AIc4DFbeudwzzmvuSlWekqM4UZfsz36H4eIOc5DcBu5JZ5nWUYwj58sr7pROPFT%2BTHNaWedegHEhBVLPis75%2BM9Qf6SV4ZgJ6IjVoTkDbV%2FF2fTK8vMlm3gwsh1IsJsRGPZGbIz19mDYYds2vi4W39QmkwuXPMIYgdocL7sIAY5WhKOA0wR2YJCaHYYw9cTtvAY6pgHB00lgNoCucXxa7YBQsOaCX8bUoiy0RTZwobREfyAsmnzrhOEuLBiAl%2FFIl63DeLgS0VKEXYJYt5FzAABoSDurU8O6up2%2FheYJ83HJ6kHYDC7vPwsSlwZENAmQRChOCYbJZFZbqp%2BtPykIJSJ94xTiaShHOFHJGoQWpq7wmFfBrlcleSGviP9vsiDjyqq0UhrnmX9KXWaJVIB90Wq07QnS%2FpBre7po&X-Amz-Signature=27bd0cc52430d9905ed8605c05554b697c880ff87b2f433c685593eb42be4611&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXAZ464%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECqX9JwQpfaXG3BM9Is%2FNttstulryhznwLhT32%2BmZztAiASc2DfLgpfr6PPF1u947UKrhcJPjS%2BqBWV6bcxanvoCyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG33q2CfcbXNcChjeKtwDRnI3tp4xpF0aL8f8D5G2gxYm1yTDx6RP%2FU1oJgdDpqlwZHiQfjGTMqYloziLnCQJE3sGhdMI7RGpIE0r9wagm5fY0F%2Fq7okR2N8G6GjH05%2FVtCcc%2BlywCTt%2Bte9TR4aP8X9mgtJSksCXnAoM3K4Tds82jQb69eaIgTzi7CIjnRGceDwBl7rs%2BOIhEvARHfJujH2pDUawMu9UoIWRh65AaymTDdPIM5f6DbgZH74TyiDvXop58zOdayXw8ylVJjxgXnAIWICO4KpQPmL%2FS4p%2FQt6BcEn3EvhUGDtqrhuC%2BTgua9zJ4TQEWS7dvHAbHgrkooEX3Q2UkpJRqkuvaB7ihsLcTFFAZawhKRXehmjfebK7Ut%2FDAVodSvvlWlMzOdpX0hA%2F0rANj6C7IwVY70Df5EzEX4%2BOXEcuDCcB480%2FTRJAH%2BB%2FgyuLT7%2BKO48NSrX7AIc4DFbeudwzzmvuSlWekqM4UZfsz36H4eIOc5DcBu5JZ5nWUYwj58sr7pROPFT%2BTHNaWedegHEhBVLPis75%2BM9Qf6SV4ZgJ6IjVoTkDbV%2FF2fTK8vMlm3gwsh1IsJsRGPZGbIz19mDYYds2vi4W39QmkwuXPMIYgdocL7sIAY5WhKOA0wR2YJCaHYYw9cTtvAY6pgHB00lgNoCucXxa7YBQsOaCX8bUoiy0RTZwobREfyAsmnzrhOEuLBiAl%2FFIl63DeLgS0VKEXYJYt5FzAABoSDurU8O6up2%2FheYJ83HJ6kHYDC7vPwsSlwZENAmQRChOCYbJZFZbqp%2BtPykIJSJ94xTiaShHOFHJGoQWpq7wmFfBrlcleSGviP9vsiDjyqq0UhrnmX9KXWaJVIB90Wq07QnS%2FpBre7po&X-Amz-Signature=d9e091bcbaad6790f67468d9aedeec8b837ed18cceb46bd610503323366610b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
