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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIC7U23%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIfXCNdH0XlG7hoX8fMexvg%2BfulhDa7Ts7kZkXFGwIGAiA%2Bz8nqOmB9U2Q8Oqhu56srA1Bso5V0P2Aq89qjS028sSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMfwdrS%2F42HHBewVDBKtwDMxOClhJiG8n%2B9JuP1hnNhfG%2FF2GSVYJLpLe%2BqMYZdI8QInY1Xutt9lhU07AkcbSfjEYZVrSlTzp5UcEPyfqGxSI6TWZF8vBWI18OT7YVaeBKr8IOSqhbtKGTjcRrVPYbFQ0r5xRimm5StIOR9ZYmItqbwC5QcpdhPM7bkcZgIBKL2YvBE8rbH%2BHi%2B5zjYLF0vxeQeyWVzvygEOhlJ2zPIQMLqb%2Fty2ksau2TADjGbi0BsJfXXeQJYYRvFpgUqH1iLo%2FQVjMeTd%2FzA0J4el1imhkmrr5mt1ZyPeNRpzjvPEVOuBZVsml3O%2BIbyfby0dv5lO6uakP6%2F0pPy4SgupE7fW8wVh%2BL2nJwHX8sj2QQExlVnmdcHr%2BHzZ5RabYHyoUiMXKBNPsCUl99LMoKw7inRvoF6nJcKOpzFUq6fh%2BiI7wfK%2F4mVIfOP2GrLpZjofwdjKC07I38D%2BvizDkHRQKOstIcC2yNJvRQL47jpaP1Bl7gRWLlk%2FfqjAiq%2Ba2E95Ha1mYlPxYyFT20EYY8%2FrFnuNwyBKFUNcVnlBaPqQp6jO6F3vmut61Zl5LoueDroM1KHZv52SvSNCCspsxtd2FriF46h5khO%2FN%2FaJMBFnezZyzIKsy5uct55dWh9vswlseAwAY6pgEa3Nzw7X4hVTNBdPbPeGI5vWrm5Nkgajj0jm2b7V9sXRPP2%2FQYOzSYUevQyTcZra3x0t8Hf5qoncvUHd6Hz01r0iUAg4ktQ60jEdvAeY7A0hoy2%2FmtzYNk%2B4tkpxKmBLLga2eYVwL0%2Bf9U8x8Bzkv2HcV3gXzCh3iGZt8XOYDkR%2FWr5sKUa1rNAIesYvJzlM9qgAHYQjO05OxR%2F13NNoPT0bJTjDS1&X-Amz-Signature=3cfcd84a661d1984160103081c17414a1460c97b5a57a52d91f72dd10f54485f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIC7U23%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIfXCNdH0XlG7hoX8fMexvg%2BfulhDa7Ts7kZkXFGwIGAiA%2Bz8nqOmB9U2Q8Oqhu56srA1Bso5V0P2Aq89qjS028sSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMfwdrS%2F42HHBewVDBKtwDMxOClhJiG8n%2B9JuP1hnNhfG%2FF2GSVYJLpLe%2BqMYZdI8QInY1Xutt9lhU07AkcbSfjEYZVrSlTzp5UcEPyfqGxSI6TWZF8vBWI18OT7YVaeBKr8IOSqhbtKGTjcRrVPYbFQ0r5xRimm5StIOR9ZYmItqbwC5QcpdhPM7bkcZgIBKL2YvBE8rbH%2BHi%2B5zjYLF0vxeQeyWVzvygEOhlJ2zPIQMLqb%2Fty2ksau2TADjGbi0BsJfXXeQJYYRvFpgUqH1iLo%2FQVjMeTd%2FzA0J4el1imhkmrr5mt1ZyPeNRpzjvPEVOuBZVsml3O%2BIbyfby0dv5lO6uakP6%2F0pPy4SgupE7fW8wVh%2BL2nJwHX8sj2QQExlVnmdcHr%2BHzZ5RabYHyoUiMXKBNPsCUl99LMoKw7inRvoF6nJcKOpzFUq6fh%2BiI7wfK%2F4mVIfOP2GrLpZjofwdjKC07I38D%2BvizDkHRQKOstIcC2yNJvRQL47jpaP1Bl7gRWLlk%2FfqjAiq%2Ba2E95Ha1mYlPxYyFT20EYY8%2FrFnuNwyBKFUNcVnlBaPqQp6jO6F3vmut61Zl5LoueDroM1KHZv52SvSNCCspsxtd2FriF46h5khO%2FN%2FaJMBFnezZyzIKsy5uct55dWh9vswlseAwAY6pgEa3Nzw7X4hVTNBdPbPeGI5vWrm5Nkgajj0jm2b7V9sXRPP2%2FQYOzSYUevQyTcZra3x0t8Hf5qoncvUHd6Hz01r0iUAg4ktQ60jEdvAeY7A0hoy2%2FmtzYNk%2B4tkpxKmBLLga2eYVwL0%2Bf9U8x8Bzkv2HcV3gXzCh3iGZt8XOYDkR%2FWr5sKUa1rNAIesYvJzlM9qgAHYQjO05OxR%2F13NNoPT0bJTjDS1&X-Amz-Signature=c5f00bc2eb93377aab09de868bc83b6d62305603d1494663e674cda0428a7d14&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIC7U23%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIfXCNdH0XlG7hoX8fMexvg%2BfulhDa7Ts7kZkXFGwIGAiA%2Bz8nqOmB9U2Q8Oqhu56srA1Bso5V0P2Aq89qjS028sSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMfwdrS%2F42HHBewVDBKtwDMxOClhJiG8n%2B9JuP1hnNhfG%2FF2GSVYJLpLe%2BqMYZdI8QInY1Xutt9lhU07AkcbSfjEYZVrSlTzp5UcEPyfqGxSI6TWZF8vBWI18OT7YVaeBKr8IOSqhbtKGTjcRrVPYbFQ0r5xRimm5StIOR9ZYmItqbwC5QcpdhPM7bkcZgIBKL2YvBE8rbH%2BHi%2B5zjYLF0vxeQeyWVzvygEOhlJ2zPIQMLqb%2Fty2ksau2TADjGbi0BsJfXXeQJYYRvFpgUqH1iLo%2FQVjMeTd%2FzA0J4el1imhkmrr5mt1ZyPeNRpzjvPEVOuBZVsml3O%2BIbyfby0dv5lO6uakP6%2F0pPy4SgupE7fW8wVh%2BL2nJwHX8sj2QQExlVnmdcHr%2BHzZ5RabYHyoUiMXKBNPsCUl99LMoKw7inRvoF6nJcKOpzFUq6fh%2BiI7wfK%2F4mVIfOP2GrLpZjofwdjKC07I38D%2BvizDkHRQKOstIcC2yNJvRQL47jpaP1Bl7gRWLlk%2FfqjAiq%2Ba2E95Ha1mYlPxYyFT20EYY8%2FrFnuNwyBKFUNcVnlBaPqQp6jO6F3vmut61Zl5LoueDroM1KHZv52SvSNCCspsxtd2FriF46h5khO%2FN%2FaJMBFnezZyzIKsy5uct55dWh9vswlseAwAY6pgEa3Nzw7X4hVTNBdPbPeGI5vWrm5Nkgajj0jm2b7V9sXRPP2%2FQYOzSYUevQyTcZra3x0t8Hf5qoncvUHd6Hz01r0iUAg4ktQ60jEdvAeY7A0hoy2%2FmtzYNk%2B4tkpxKmBLLga2eYVwL0%2Bf9U8x8Bzkv2HcV3gXzCh3iGZt8XOYDkR%2FWr5sKUa1rNAIesYvJzlM9qgAHYQjO05OxR%2F13NNoPT0bJTjDS1&X-Amz-Signature=c04f046fb595954ca347e751f548eaf549981b2949436c59101d2f27204cc9a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIC7U23%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIfXCNdH0XlG7hoX8fMexvg%2BfulhDa7Ts7kZkXFGwIGAiA%2Bz8nqOmB9U2Q8Oqhu56srA1Bso5V0P2Aq89qjS028sSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMfwdrS%2F42HHBewVDBKtwDMxOClhJiG8n%2B9JuP1hnNhfG%2FF2GSVYJLpLe%2BqMYZdI8QInY1Xutt9lhU07AkcbSfjEYZVrSlTzp5UcEPyfqGxSI6TWZF8vBWI18OT7YVaeBKr8IOSqhbtKGTjcRrVPYbFQ0r5xRimm5StIOR9ZYmItqbwC5QcpdhPM7bkcZgIBKL2YvBE8rbH%2BHi%2B5zjYLF0vxeQeyWVzvygEOhlJ2zPIQMLqb%2Fty2ksau2TADjGbi0BsJfXXeQJYYRvFpgUqH1iLo%2FQVjMeTd%2FzA0J4el1imhkmrr5mt1ZyPeNRpzjvPEVOuBZVsml3O%2BIbyfby0dv5lO6uakP6%2F0pPy4SgupE7fW8wVh%2BL2nJwHX8sj2QQExlVnmdcHr%2BHzZ5RabYHyoUiMXKBNPsCUl99LMoKw7inRvoF6nJcKOpzFUq6fh%2BiI7wfK%2F4mVIfOP2GrLpZjofwdjKC07I38D%2BvizDkHRQKOstIcC2yNJvRQL47jpaP1Bl7gRWLlk%2FfqjAiq%2Ba2E95Ha1mYlPxYyFT20EYY8%2FrFnuNwyBKFUNcVnlBaPqQp6jO6F3vmut61Zl5LoueDroM1KHZv52SvSNCCspsxtd2FriF46h5khO%2FN%2FaJMBFnezZyzIKsy5uct55dWh9vswlseAwAY6pgEa3Nzw7X4hVTNBdPbPeGI5vWrm5Nkgajj0jm2b7V9sXRPP2%2FQYOzSYUevQyTcZra3x0t8Hf5qoncvUHd6Hz01r0iUAg4ktQ60jEdvAeY7A0hoy2%2FmtzYNk%2B4tkpxKmBLLga2eYVwL0%2Bf9U8x8Bzkv2HcV3gXzCh3iGZt8XOYDkR%2FWr5sKUa1rNAIesYvJzlM9qgAHYQjO05OxR%2F13NNoPT0bJTjDS1&X-Amz-Signature=ecb45ee14a2de142f72d4a95b37e1fb76f200086ac2541eebe53c4e95df63c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIC7U23%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIfXCNdH0XlG7hoX8fMexvg%2BfulhDa7Ts7kZkXFGwIGAiA%2Bz8nqOmB9U2Q8Oqhu56srA1Bso5V0P2Aq89qjS028sSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMfwdrS%2F42HHBewVDBKtwDMxOClhJiG8n%2B9JuP1hnNhfG%2FF2GSVYJLpLe%2BqMYZdI8QInY1Xutt9lhU07AkcbSfjEYZVrSlTzp5UcEPyfqGxSI6TWZF8vBWI18OT7YVaeBKr8IOSqhbtKGTjcRrVPYbFQ0r5xRimm5StIOR9ZYmItqbwC5QcpdhPM7bkcZgIBKL2YvBE8rbH%2BHi%2B5zjYLF0vxeQeyWVzvygEOhlJ2zPIQMLqb%2Fty2ksau2TADjGbi0BsJfXXeQJYYRvFpgUqH1iLo%2FQVjMeTd%2FzA0J4el1imhkmrr5mt1ZyPeNRpzjvPEVOuBZVsml3O%2BIbyfby0dv5lO6uakP6%2F0pPy4SgupE7fW8wVh%2BL2nJwHX8sj2QQExlVnmdcHr%2BHzZ5RabYHyoUiMXKBNPsCUl99LMoKw7inRvoF6nJcKOpzFUq6fh%2BiI7wfK%2F4mVIfOP2GrLpZjofwdjKC07I38D%2BvizDkHRQKOstIcC2yNJvRQL47jpaP1Bl7gRWLlk%2FfqjAiq%2Ba2E95Ha1mYlPxYyFT20EYY8%2FrFnuNwyBKFUNcVnlBaPqQp6jO6F3vmut61Zl5LoueDroM1KHZv52SvSNCCspsxtd2FriF46h5khO%2FN%2FaJMBFnezZyzIKsy5uct55dWh9vswlseAwAY6pgEa3Nzw7X4hVTNBdPbPeGI5vWrm5Nkgajj0jm2b7V9sXRPP2%2FQYOzSYUevQyTcZra3x0t8Hf5qoncvUHd6Hz01r0iUAg4ktQ60jEdvAeY7A0hoy2%2FmtzYNk%2B4tkpxKmBLLga2eYVwL0%2Bf9U8x8Bzkv2HcV3gXzCh3iGZt8XOYDkR%2FWr5sKUa1rNAIesYvJzlM9qgAHYQjO05OxR%2F13NNoPT0bJTjDS1&X-Amz-Signature=37179b5d75b30a9f441255824eb4c4546ae3b72877270e134e1cadcdc6d9826f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIC7U23%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIfXCNdH0XlG7hoX8fMexvg%2BfulhDa7Ts7kZkXFGwIGAiA%2Bz8nqOmB9U2Q8Oqhu56srA1Bso5V0P2Aq89qjS028sSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMfwdrS%2F42HHBewVDBKtwDMxOClhJiG8n%2B9JuP1hnNhfG%2FF2GSVYJLpLe%2BqMYZdI8QInY1Xutt9lhU07AkcbSfjEYZVrSlTzp5UcEPyfqGxSI6TWZF8vBWI18OT7YVaeBKr8IOSqhbtKGTjcRrVPYbFQ0r5xRimm5StIOR9ZYmItqbwC5QcpdhPM7bkcZgIBKL2YvBE8rbH%2BHi%2B5zjYLF0vxeQeyWVzvygEOhlJ2zPIQMLqb%2Fty2ksau2TADjGbi0BsJfXXeQJYYRvFpgUqH1iLo%2FQVjMeTd%2FzA0J4el1imhkmrr5mt1ZyPeNRpzjvPEVOuBZVsml3O%2BIbyfby0dv5lO6uakP6%2F0pPy4SgupE7fW8wVh%2BL2nJwHX8sj2QQExlVnmdcHr%2BHzZ5RabYHyoUiMXKBNPsCUl99LMoKw7inRvoF6nJcKOpzFUq6fh%2BiI7wfK%2F4mVIfOP2GrLpZjofwdjKC07I38D%2BvizDkHRQKOstIcC2yNJvRQL47jpaP1Bl7gRWLlk%2FfqjAiq%2Ba2E95Ha1mYlPxYyFT20EYY8%2FrFnuNwyBKFUNcVnlBaPqQp6jO6F3vmut61Zl5LoueDroM1KHZv52SvSNCCspsxtd2FriF46h5khO%2FN%2FaJMBFnezZyzIKsy5uct55dWh9vswlseAwAY6pgEa3Nzw7X4hVTNBdPbPeGI5vWrm5Nkgajj0jm2b7V9sXRPP2%2FQYOzSYUevQyTcZra3x0t8Hf5qoncvUHd6Hz01r0iUAg4ktQ60jEdvAeY7A0hoy2%2FmtzYNk%2B4tkpxKmBLLga2eYVwL0%2Bf9U8x8Bzkv2HcV3gXzCh3iGZt8XOYDkR%2FWr5sKUa1rNAIesYvJzlM9qgAHYQjO05OxR%2F13NNoPT0bJTjDS1&X-Amz-Signature=21d53c15eb86ff3ad15f650712e236fbcfceb3da5de2e883f7cbdc07fd24ff8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIC7U23%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIfXCNdH0XlG7hoX8fMexvg%2BfulhDa7Ts7kZkXFGwIGAiA%2Bz8nqOmB9U2Q8Oqhu56srA1Bso5V0P2Aq89qjS028sSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMfwdrS%2F42HHBewVDBKtwDMxOClhJiG8n%2B9JuP1hnNhfG%2FF2GSVYJLpLe%2BqMYZdI8QInY1Xutt9lhU07AkcbSfjEYZVrSlTzp5UcEPyfqGxSI6TWZF8vBWI18OT7YVaeBKr8IOSqhbtKGTjcRrVPYbFQ0r5xRimm5StIOR9ZYmItqbwC5QcpdhPM7bkcZgIBKL2YvBE8rbH%2BHi%2B5zjYLF0vxeQeyWVzvygEOhlJ2zPIQMLqb%2Fty2ksau2TADjGbi0BsJfXXeQJYYRvFpgUqH1iLo%2FQVjMeTd%2FzA0J4el1imhkmrr5mt1ZyPeNRpzjvPEVOuBZVsml3O%2BIbyfby0dv5lO6uakP6%2F0pPy4SgupE7fW8wVh%2BL2nJwHX8sj2QQExlVnmdcHr%2BHzZ5RabYHyoUiMXKBNPsCUl99LMoKw7inRvoF6nJcKOpzFUq6fh%2BiI7wfK%2F4mVIfOP2GrLpZjofwdjKC07I38D%2BvizDkHRQKOstIcC2yNJvRQL47jpaP1Bl7gRWLlk%2FfqjAiq%2Ba2E95Ha1mYlPxYyFT20EYY8%2FrFnuNwyBKFUNcVnlBaPqQp6jO6F3vmut61Zl5LoueDroM1KHZv52SvSNCCspsxtd2FriF46h5khO%2FN%2FaJMBFnezZyzIKsy5uct55dWh9vswlseAwAY6pgEa3Nzw7X4hVTNBdPbPeGI5vWrm5Nkgajj0jm2b7V9sXRPP2%2FQYOzSYUevQyTcZra3x0t8Hf5qoncvUHd6Hz01r0iUAg4ktQ60jEdvAeY7A0hoy2%2FmtzYNk%2B4tkpxKmBLLga2eYVwL0%2Bf9U8x8Bzkv2HcV3gXzCh3iGZt8XOYDkR%2FWr5sKUa1rNAIesYvJzlM9qgAHYQjO05OxR%2F13NNoPT0bJTjDS1&X-Amz-Signature=8bf634ecd21a3dc0f84eb75111b29e1c2bf22757f6c542156b020254c9042fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIC7U23%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIfXCNdH0XlG7hoX8fMexvg%2BfulhDa7Ts7kZkXFGwIGAiA%2Bz8nqOmB9U2Q8Oqhu56srA1Bso5V0P2Aq89qjS028sSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMfwdrS%2F42HHBewVDBKtwDMxOClhJiG8n%2B9JuP1hnNhfG%2FF2GSVYJLpLe%2BqMYZdI8QInY1Xutt9lhU07AkcbSfjEYZVrSlTzp5UcEPyfqGxSI6TWZF8vBWI18OT7YVaeBKr8IOSqhbtKGTjcRrVPYbFQ0r5xRimm5StIOR9ZYmItqbwC5QcpdhPM7bkcZgIBKL2YvBE8rbH%2BHi%2B5zjYLF0vxeQeyWVzvygEOhlJ2zPIQMLqb%2Fty2ksau2TADjGbi0BsJfXXeQJYYRvFpgUqH1iLo%2FQVjMeTd%2FzA0J4el1imhkmrr5mt1ZyPeNRpzjvPEVOuBZVsml3O%2BIbyfby0dv5lO6uakP6%2F0pPy4SgupE7fW8wVh%2BL2nJwHX8sj2QQExlVnmdcHr%2BHzZ5RabYHyoUiMXKBNPsCUl99LMoKw7inRvoF6nJcKOpzFUq6fh%2BiI7wfK%2F4mVIfOP2GrLpZjofwdjKC07I38D%2BvizDkHRQKOstIcC2yNJvRQL47jpaP1Bl7gRWLlk%2FfqjAiq%2Ba2E95Ha1mYlPxYyFT20EYY8%2FrFnuNwyBKFUNcVnlBaPqQp6jO6F3vmut61Zl5LoueDroM1KHZv52SvSNCCspsxtd2FriF46h5khO%2FN%2FaJMBFnezZyzIKsy5uct55dWh9vswlseAwAY6pgEa3Nzw7X4hVTNBdPbPeGI5vWrm5Nkgajj0jm2b7V9sXRPP2%2FQYOzSYUevQyTcZra3x0t8Hf5qoncvUHd6Hz01r0iUAg4ktQ60jEdvAeY7A0hoy2%2FmtzYNk%2B4tkpxKmBLLga2eYVwL0%2Bf9U8x8Bzkv2HcV3gXzCh3iGZt8XOYDkR%2FWr5sKUa1rNAIesYvJzlM9qgAHYQjO05OxR%2F13NNoPT0bJTjDS1&X-Amz-Signature=6d29aa65bd4a766463d6bfe4d5a8908d4cd374cdbb184c1f09118b6ebb7c2c96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
