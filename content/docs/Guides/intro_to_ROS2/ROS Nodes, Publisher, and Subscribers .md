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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GHJADD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBF3gTEx4c8Hbgigr%2B1zJgX5hQ3QhAXhOcOEuJb%2B24m6AiB0SOKsu%2FJY8ltn%2B6w2%2B6BdwzL38eJa%2Fwx4oso%2BfU%2BCCiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYFjuN1vNNUvysgqKtwDC5xcFavvQPI0gnxJEEIT0u7i5MGK67mFg%2BpnRLSrOSJaYdoKooCLx%2FgdaKf5JrIDEBgYEmWR%2BUQQIXDAp8ZOFixC8unKfZCuT0TR3NFXbYHwfgh34Egzav42ltmQq3vBx0RxP7r7IoTDZwqPziASYPp5tsbYxEs6C2RrewWEHJcWa5L9hxYaM4uRtqgJn5OH30ciBkfnLwercN124dUYEcqd4qukZZHDFuXG5XDEmvvWvymf3yCW2Lzn1GszcgcX8Xn0B1pGy5Y0DpyxJ3Ac5vrpgwb8tHh%2BJXTb%2B0zFLDuzpmjHfRq1PuiLXz591j7JkrIAVih%2F242bhcUaoAwdsHcsJ1bnbPMKe1EmCiwl4Y9m5Tyq7cA2A7wIuYoApV4znvl9CTzDn5xxpUE%2FZScazWDtQwJtqkUs03A8mrKbMlSKEpSVlasJWxiXzmvDH%2B%2BA5HUBh6aQRO6ehhzx%2BqEEZfpACtAHEdPHVA22UQD0mmF%2Fb%2FZJ08SgAy%2FFI12qgMcAfnn90uyOrGHnE6eZbwRpiWjl3Os7xvnD0Td5PkjdAQCNudJ%2FJRpABLwMEnObFxheknOK%2BCDIApNBeE6ihC6jCIZlvBQ2%2F4EBEnQi6M%2BZgwugypo2vz5me2V2stMwzOm5vgY6pgFXxT0njiw4w%2Bl99bCoZDjwCI0IMEEX7qfNxUFxhC074qDUPeDmpBNCkSRnbbtpEkP3Ddt5cFMQbsVOTa9b22XyPqeCbZyfXmKSUSWRJJKI75WmJk3PBoerxR8WUo5TKCdRVL0sJF3xbJwr8insVOllLZTjC2gGsx7d2cOK8Q1sKzR6ulQpwXpeEnlZRznM27fxw3gS%2Fe4amDo8h%2FbDw47GSGk5JnTW&X-Amz-Signature=d90eb75dd448ec93c886fb98b05ab941f5e1505a2496d1c6423cdacbca18cc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GHJADD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBF3gTEx4c8Hbgigr%2B1zJgX5hQ3QhAXhOcOEuJb%2B24m6AiB0SOKsu%2FJY8ltn%2B6w2%2B6BdwzL38eJa%2Fwx4oso%2BfU%2BCCiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYFjuN1vNNUvysgqKtwDC5xcFavvQPI0gnxJEEIT0u7i5MGK67mFg%2BpnRLSrOSJaYdoKooCLx%2FgdaKf5JrIDEBgYEmWR%2BUQQIXDAp8ZOFixC8unKfZCuT0TR3NFXbYHwfgh34Egzav42ltmQq3vBx0RxP7r7IoTDZwqPziASYPp5tsbYxEs6C2RrewWEHJcWa5L9hxYaM4uRtqgJn5OH30ciBkfnLwercN124dUYEcqd4qukZZHDFuXG5XDEmvvWvymf3yCW2Lzn1GszcgcX8Xn0B1pGy5Y0DpyxJ3Ac5vrpgwb8tHh%2BJXTb%2B0zFLDuzpmjHfRq1PuiLXz591j7JkrIAVih%2F242bhcUaoAwdsHcsJ1bnbPMKe1EmCiwl4Y9m5Tyq7cA2A7wIuYoApV4znvl9CTzDn5xxpUE%2FZScazWDtQwJtqkUs03A8mrKbMlSKEpSVlasJWxiXzmvDH%2B%2BA5HUBh6aQRO6ehhzx%2BqEEZfpACtAHEdPHVA22UQD0mmF%2Fb%2FZJ08SgAy%2FFI12qgMcAfnn90uyOrGHnE6eZbwRpiWjl3Os7xvnD0Td5PkjdAQCNudJ%2FJRpABLwMEnObFxheknOK%2BCDIApNBeE6ihC6jCIZlvBQ2%2F4EBEnQi6M%2BZgwugypo2vz5me2V2stMwzOm5vgY6pgFXxT0njiw4w%2Bl99bCoZDjwCI0IMEEX7qfNxUFxhC074qDUPeDmpBNCkSRnbbtpEkP3Ddt5cFMQbsVOTa9b22XyPqeCbZyfXmKSUSWRJJKI75WmJk3PBoerxR8WUo5TKCdRVL0sJF3xbJwr8insVOllLZTjC2gGsx7d2cOK8Q1sKzR6ulQpwXpeEnlZRznM27fxw3gS%2Fe4amDo8h%2FbDw47GSGk5JnTW&X-Amz-Signature=88dc3f38979b0e62c0fa700d0a97d2a169b64a021bef416a0a1a821f6816a2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GHJADD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBF3gTEx4c8Hbgigr%2B1zJgX5hQ3QhAXhOcOEuJb%2B24m6AiB0SOKsu%2FJY8ltn%2B6w2%2B6BdwzL38eJa%2Fwx4oso%2BfU%2BCCiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYFjuN1vNNUvysgqKtwDC5xcFavvQPI0gnxJEEIT0u7i5MGK67mFg%2BpnRLSrOSJaYdoKooCLx%2FgdaKf5JrIDEBgYEmWR%2BUQQIXDAp8ZOFixC8unKfZCuT0TR3NFXbYHwfgh34Egzav42ltmQq3vBx0RxP7r7IoTDZwqPziASYPp5tsbYxEs6C2RrewWEHJcWa5L9hxYaM4uRtqgJn5OH30ciBkfnLwercN124dUYEcqd4qukZZHDFuXG5XDEmvvWvymf3yCW2Lzn1GszcgcX8Xn0B1pGy5Y0DpyxJ3Ac5vrpgwb8tHh%2BJXTb%2B0zFLDuzpmjHfRq1PuiLXz591j7JkrIAVih%2F242bhcUaoAwdsHcsJ1bnbPMKe1EmCiwl4Y9m5Tyq7cA2A7wIuYoApV4znvl9CTzDn5xxpUE%2FZScazWDtQwJtqkUs03A8mrKbMlSKEpSVlasJWxiXzmvDH%2B%2BA5HUBh6aQRO6ehhzx%2BqEEZfpACtAHEdPHVA22UQD0mmF%2Fb%2FZJ08SgAy%2FFI12qgMcAfnn90uyOrGHnE6eZbwRpiWjl3Os7xvnD0Td5PkjdAQCNudJ%2FJRpABLwMEnObFxheknOK%2BCDIApNBeE6ihC6jCIZlvBQ2%2F4EBEnQi6M%2BZgwugypo2vz5me2V2stMwzOm5vgY6pgFXxT0njiw4w%2Bl99bCoZDjwCI0IMEEX7qfNxUFxhC074qDUPeDmpBNCkSRnbbtpEkP3Ddt5cFMQbsVOTa9b22XyPqeCbZyfXmKSUSWRJJKI75WmJk3PBoerxR8WUo5TKCdRVL0sJF3xbJwr8insVOllLZTjC2gGsx7d2cOK8Q1sKzR6ulQpwXpeEnlZRznM27fxw3gS%2Fe4amDo8h%2FbDw47GSGk5JnTW&X-Amz-Signature=907e92ddd36df42e18bf2c4365d93bb1902ae14852e229f91649fb9ef2768fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GHJADD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBF3gTEx4c8Hbgigr%2B1zJgX5hQ3QhAXhOcOEuJb%2B24m6AiB0SOKsu%2FJY8ltn%2B6w2%2B6BdwzL38eJa%2Fwx4oso%2BfU%2BCCiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYFjuN1vNNUvysgqKtwDC5xcFavvQPI0gnxJEEIT0u7i5MGK67mFg%2BpnRLSrOSJaYdoKooCLx%2FgdaKf5JrIDEBgYEmWR%2BUQQIXDAp8ZOFixC8unKfZCuT0TR3NFXbYHwfgh34Egzav42ltmQq3vBx0RxP7r7IoTDZwqPziASYPp5tsbYxEs6C2RrewWEHJcWa5L9hxYaM4uRtqgJn5OH30ciBkfnLwercN124dUYEcqd4qukZZHDFuXG5XDEmvvWvymf3yCW2Lzn1GszcgcX8Xn0B1pGy5Y0DpyxJ3Ac5vrpgwb8tHh%2BJXTb%2B0zFLDuzpmjHfRq1PuiLXz591j7JkrIAVih%2F242bhcUaoAwdsHcsJ1bnbPMKe1EmCiwl4Y9m5Tyq7cA2A7wIuYoApV4znvl9CTzDn5xxpUE%2FZScazWDtQwJtqkUs03A8mrKbMlSKEpSVlasJWxiXzmvDH%2B%2BA5HUBh6aQRO6ehhzx%2BqEEZfpACtAHEdPHVA22UQD0mmF%2Fb%2FZJ08SgAy%2FFI12qgMcAfnn90uyOrGHnE6eZbwRpiWjl3Os7xvnD0Td5PkjdAQCNudJ%2FJRpABLwMEnObFxheknOK%2BCDIApNBeE6ihC6jCIZlvBQ2%2F4EBEnQi6M%2BZgwugypo2vz5me2V2stMwzOm5vgY6pgFXxT0njiw4w%2Bl99bCoZDjwCI0IMEEX7qfNxUFxhC074qDUPeDmpBNCkSRnbbtpEkP3Ddt5cFMQbsVOTa9b22XyPqeCbZyfXmKSUSWRJJKI75WmJk3PBoerxR8WUo5TKCdRVL0sJF3xbJwr8insVOllLZTjC2gGsx7d2cOK8Q1sKzR6ulQpwXpeEnlZRznM27fxw3gS%2Fe4amDo8h%2FbDw47GSGk5JnTW&X-Amz-Signature=8c905ad2d92bb022b53a6c155dd41560fe7358066bb27a939e731240f69d9546&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GHJADD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBF3gTEx4c8Hbgigr%2B1zJgX5hQ3QhAXhOcOEuJb%2B24m6AiB0SOKsu%2FJY8ltn%2B6w2%2B6BdwzL38eJa%2Fwx4oso%2BfU%2BCCiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYFjuN1vNNUvysgqKtwDC5xcFavvQPI0gnxJEEIT0u7i5MGK67mFg%2BpnRLSrOSJaYdoKooCLx%2FgdaKf5JrIDEBgYEmWR%2BUQQIXDAp8ZOFixC8unKfZCuT0TR3NFXbYHwfgh34Egzav42ltmQq3vBx0RxP7r7IoTDZwqPziASYPp5tsbYxEs6C2RrewWEHJcWa5L9hxYaM4uRtqgJn5OH30ciBkfnLwercN124dUYEcqd4qukZZHDFuXG5XDEmvvWvymf3yCW2Lzn1GszcgcX8Xn0B1pGy5Y0DpyxJ3Ac5vrpgwb8tHh%2BJXTb%2B0zFLDuzpmjHfRq1PuiLXz591j7JkrIAVih%2F242bhcUaoAwdsHcsJ1bnbPMKe1EmCiwl4Y9m5Tyq7cA2A7wIuYoApV4znvl9CTzDn5xxpUE%2FZScazWDtQwJtqkUs03A8mrKbMlSKEpSVlasJWxiXzmvDH%2B%2BA5HUBh6aQRO6ehhzx%2BqEEZfpACtAHEdPHVA22UQD0mmF%2Fb%2FZJ08SgAy%2FFI12qgMcAfnn90uyOrGHnE6eZbwRpiWjl3Os7xvnD0Td5PkjdAQCNudJ%2FJRpABLwMEnObFxheknOK%2BCDIApNBeE6ihC6jCIZlvBQ2%2F4EBEnQi6M%2BZgwugypo2vz5me2V2stMwzOm5vgY6pgFXxT0njiw4w%2Bl99bCoZDjwCI0IMEEX7qfNxUFxhC074qDUPeDmpBNCkSRnbbtpEkP3Ddt5cFMQbsVOTa9b22XyPqeCbZyfXmKSUSWRJJKI75WmJk3PBoerxR8WUo5TKCdRVL0sJF3xbJwr8insVOllLZTjC2gGsx7d2cOK8Q1sKzR6ulQpwXpeEnlZRznM27fxw3gS%2Fe4amDo8h%2FbDw47GSGk5JnTW&X-Amz-Signature=332b6bc8b915df418e81806c5fc556a0c533f3a251743d07de602eeb28361838&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GHJADD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBF3gTEx4c8Hbgigr%2B1zJgX5hQ3QhAXhOcOEuJb%2B24m6AiB0SOKsu%2FJY8ltn%2B6w2%2B6BdwzL38eJa%2Fwx4oso%2BfU%2BCCiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYFjuN1vNNUvysgqKtwDC5xcFavvQPI0gnxJEEIT0u7i5MGK67mFg%2BpnRLSrOSJaYdoKooCLx%2FgdaKf5JrIDEBgYEmWR%2BUQQIXDAp8ZOFixC8unKfZCuT0TR3NFXbYHwfgh34Egzav42ltmQq3vBx0RxP7r7IoTDZwqPziASYPp5tsbYxEs6C2RrewWEHJcWa5L9hxYaM4uRtqgJn5OH30ciBkfnLwercN124dUYEcqd4qukZZHDFuXG5XDEmvvWvymf3yCW2Lzn1GszcgcX8Xn0B1pGy5Y0DpyxJ3Ac5vrpgwb8tHh%2BJXTb%2B0zFLDuzpmjHfRq1PuiLXz591j7JkrIAVih%2F242bhcUaoAwdsHcsJ1bnbPMKe1EmCiwl4Y9m5Tyq7cA2A7wIuYoApV4znvl9CTzDn5xxpUE%2FZScazWDtQwJtqkUs03A8mrKbMlSKEpSVlasJWxiXzmvDH%2B%2BA5HUBh6aQRO6ehhzx%2BqEEZfpACtAHEdPHVA22UQD0mmF%2Fb%2FZJ08SgAy%2FFI12qgMcAfnn90uyOrGHnE6eZbwRpiWjl3Os7xvnD0Td5PkjdAQCNudJ%2FJRpABLwMEnObFxheknOK%2BCDIApNBeE6ihC6jCIZlvBQ2%2F4EBEnQi6M%2BZgwugypo2vz5me2V2stMwzOm5vgY6pgFXxT0njiw4w%2Bl99bCoZDjwCI0IMEEX7qfNxUFxhC074qDUPeDmpBNCkSRnbbtpEkP3Ddt5cFMQbsVOTa9b22XyPqeCbZyfXmKSUSWRJJKI75WmJk3PBoerxR8WUo5TKCdRVL0sJF3xbJwr8insVOllLZTjC2gGsx7d2cOK8Q1sKzR6ulQpwXpeEnlZRznM27fxw3gS%2Fe4amDo8h%2FbDw47GSGk5JnTW&X-Amz-Signature=f67e635f7a717db7f70031dfae040aa63dc1c835e863b03fd005fb56fdb04138&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GHJADD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBF3gTEx4c8Hbgigr%2B1zJgX5hQ3QhAXhOcOEuJb%2B24m6AiB0SOKsu%2FJY8ltn%2B6w2%2B6BdwzL38eJa%2Fwx4oso%2BfU%2BCCiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYFjuN1vNNUvysgqKtwDC5xcFavvQPI0gnxJEEIT0u7i5MGK67mFg%2BpnRLSrOSJaYdoKooCLx%2FgdaKf5JrIDEBgYEmWR%2BUQQIXDAp8ZOFixC8unKfZCuT0TR3NFXbYHwfgh34Egzav42ltmQq3vBx0RxP7r7IoTDZwqPziASYPp5tsbYxEs6C2RrewWEHJcWa5L9hxYaM4uRtqgJn5OH30ciBkfnLwercN124dUYEcqd4qukZZHDFuXG5XDEmvvWvymf3yCW2Lzn1GszcgcX8Xn0B1pGy5Y0DpyxJ3Ac5vrpgwb8tHh%2BJXTb%2B0zFLDuzpmjHfRq1PuiLXz591j7JkrIAVih%2F242bhcUaoAwdsHcsJ1bnbPMKe1EmCiwl4Y9m5Tyq7cA2A7wIuYoApV4znvl9CTzDn5xxpUE%2FZScazWDtQwJtqkUs03A8mrKbMlSKEpSVlasJWxiXzmvDH%2B%2BA5HUBh6aQRO6ehhzx%2BqEEZfpACtAHEdPHVA22UQD0mmF%2Fb%2FZJ08SgAy%2FFI12qgMcAfnn90uyOrGHnE6eZbwRpiWjl3Os7xvnD0Td5PkjdAQCNudJ%2FJRpABLwMEnObFxheknOK%2BCDIApNBeE6ihC6jCIZlvBQ2%2F4EBEnQi6M%2BZgwugypo2vz5me2V2stMwzOm5vgY6pgFXxT0njiw4w%2Bl99bCoZDjwCI0IMEEX7qfNxUFxhC074qDUPeDmpBNCkSRnbbtpEkP3Ddt5cFMQbsVOTa9b22XyPqeCbZyfXmKSUSWRJJKI75WmJk3PBoerxR8WUo5TKCdRVL0sJF3xbJwr8insVOllLZTjC2gGsx7d2cOK8Q1sKzR6ulQpwXpeEnlZRznM27fxw3gS%2Fe4amDo8h%2FbDw47GSGk5JnTW&X-Amz-Signature=f3e09ffbd237b2fa9d8c75fde0d212a57a0a53d8546102116917d382c324fb94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GHJADD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBF3gTEx4c8Hbgigr%2B1zJgX5hQ3QhAXhOcOEuJb%2B24m6AiB0SOKsu%2FJY8ltn%2B6w2%2B6BdwzL38eJa%2Fwx4oso%2BfU%2BCCiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYFjuN1vNNUvysgqKtwDC5xcFavvQPI0gnxJEEIT0u7i5MGK67mFg%2BpnRLSrOSJaYdoKooCLx%2FgdaKf5JrIDEBgYEmWR%2BUQQIXDAp8ZOFixC8unKfZCuT0TR3NFXbYHwfgh34Egzav42ltmQq3vBx0RxP7r7IoTDZwqPziASYPp5tsbYxEs6C2RrewWEHJcWa5L9hxYaM4uRtqgJn5OH30ciBkfnLwercN124dUYEcqd4qukZZHDFuXG5XDEmvvWvymf3yCW2Lzn1GszcgcX8Xn0B1pGy5Y0DpyxJ3Ac5vrpgwb8tHh%2BJXTb%2B0zFLDuzpmjHfRq1PuiLXz591j7JkrIAVih%2F242bhcUaoAwdsHcsJ1bnbPMKe1EmCiwl4Y9m5Tyq7cA2A7wIuYoApV4znvl9CTzDn5xxpUE%2FZScazWDtQwJtqkUs03A8mrKbMlSKEpSVlasJWxiXzmvDH%2B%2BA5HUBh6aQRO6ehhzx%2BqEEZfpACtAHEdPHVA22UQD0mmF%2Fb%2FZJ08SgAy%2FFI12qgMcAfnn90uyOrGHnE6eZbwRpiWjl3Os7xvnD0Td5PkjdAQCNudJ%2FJRpABLwMEnObFxheknOK%2BCDIApNBeE6ihC6jCIZlvBQ2%2F4EBEnQi6M%2BZgwugypo2vz5me2V2stMwzOm5vgY6pgFXxT0njiw4w%2Bl99bCoZDjwCI0IMEEX7qfNxUFxhC074qDUPeDmpBNCkSRnbbtpEkP3Ddt5cFMQbsVOTa9b22XyPqeCbZyfXmKSUSWRJJKI75WmJk3PBoerxR8WUo5TKCdRVL0sJF3xbJwr8insVOllLZTjC2gGsx7d2cOK8Q1sKzR6ulQpwXpeEnlZRznM27fxw3gS%2Fe4amDo8h%2FbDw47GSGk5JnTW&X-Amz-Signature=494d24fc6449038ef3f87cd165edb7f022f7761c372bd9531dce615e26caca9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
