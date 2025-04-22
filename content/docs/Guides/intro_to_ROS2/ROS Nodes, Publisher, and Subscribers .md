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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DIFDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBis4TzWLPvYhHEcPOuIajDX5tL6Kl%2FvKjYKWqBkI8QkAiBePrRM7ENLCgnsAzSHuhNZPw2YjoUZLUEa2sEkVbMgMSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMv6QzH7UzbQcRIUKtwDTZGZ%2BjhYAm%2BLSVzwtKJMIzvQ3ufkZmxlsWP%2FNK8LbRsbDN0jPW2oQQsUV9Vijc0Kj6x0g5LwdPaXdSTWS5HljvUBBSME7JdrKPSDWUQXfPCS6OBJx8%2Blt2JWrKMeSrA5dIKrDWLZRQS8Y%2FHVPN2utetpbVpFU7fUqjalyv9f2cb3APJ32SZux9HoY4m7Oiavkc0Wtx%2Bg0EsCwN6sLtCclIIwdcHF0VL8hPj64HR5Fh%2Fi252K4XESZtqFK9m17KSIB2AWIQpeKd%2FOEhpzF7BsXbPJdyNDhTWDs8PjiMldyR8S54v8VvI5wLB7UjwPKy5lcjxgd7rAEqeJqpowIqvw3sJq4TbhvsBbHbTAswtYMHGxGRgfOrdh5Mzp0xUCIr%2F%2BFnDv%2FB%2BPo740JolgnAeyNHX%2Fu%2B67jBfw4OYTCu%2FPMU1qwaD1uf2zy%2BUIxVI6gF8%2B6hBn2K1jFxXJ3pEN7LCwDtXY%2BNN1LbS3E9taRi4XhSAQfgu2ifaIs9qwBoC0br7rLVbXvTlKuPc1ay8dF%2FxseD0164OV%2FFwU2KMvJujc9WGk72W8IPiLAnVkQF22aiecKpoecIKGS%2BHASugOkwHwr%2BehtBdmFEcIydfcqheWzo7SHW2CE28zfm5Qsn4w8I%2BewAY6pgGbSIWyVaNZ3xZL5jPgvthUK15Dp3J3tE1tlz6kE8uTN7VJpUUhX9xlJPzKV8dNvL2GN35L5ZLkWh9KQUS3nQb2zh4JElWu9eeAMa4xQQSbuA98HKZbaKqBQiH9eupC6yAw2MKgfjaejj1pGBWxvg1EzkvNw3ZK3N4%2F93VNChWimmDpNdfhsNAz60SvmnoKsxbAn804xy7TWPWFSeh9Tdz%2FErFsnkiM&X-Amz-Signature=ce99fb7b5036730b59355ff89c56b0b63e019843602a070ed57a11e04a927ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DIFDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBis4TzWLPvYhHEcPOuIajDX5tL6Kl%2FvKjYKWqBkI8QkAiBePrRM7ENLCgnsAzSHuhNZPw2YjoUZLUEa2sEkVbMgMSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMv6QzH7UzbQcRIUKtwDTZGZ%2BjhYAm%2BLSVzwtKJMIzvQ3ufkZmxlsWP%2FNK8LbRsbDN0jPW2oQQsUV9Vijc0Kj6x0g5LwdPaXdSTWS5HljvUBBSME7JdrKPSDWUQXfPCS6OBJx8%2Blt2JWrKMeSrA5dIKrDWLZRQS8Y%2FHVPN2utetpbVpFU7fUqjalyv9f2cb3APJ32SZux9HoY4m7Oiavkc0Wtx%2Bg0EsCwN6sLtCclIIwdcHF0VL8hPj64HR5Fh%2Fi252K4XESZtqFK9m17KSIB2AWIQpeKd%2FOEhpzF7BsXbPJdyNDhTWDs8PjiMldyR8S54v8VvI5wLB7UjwPKy5lcjxgd7rAEqeJqpowIqvw3sJq4TbhvsBbHbTAswtYMHGxGRgfOrdh5Mzp0xUCIr%2F%2BFnDv%2FB%2BPo740JolgnAeyNHX%2Fu%2B67jBfw4OYTCu%2FPMU1qwaD1uf2zy%2BUIxVI6gF8%2B6hBn2K1jFxXJ3pEN7LCwDtXY%2BNN1LbS3E9taRi4XhSAQfgu2ifaIs9qwBoC0br7rLVbXvTlKuPc1ay8dF%2FxseD0164OV%2FFwU2KMvJujc9WGk72W8IPiLAnVkQF22aiecKpoecIKGS%2BHASugOkwHwr%2BehtBdmFEcIydfcqheWzo7SHW2CE28zfm5Qsn4w8I%2BewAY6pgGbSIWyVaNZ3xZL5jPgvthUK15Dp3J3tE1tlz6kE8uTN7VJpUUhX9xlJPzKV8dNvL2GN35L5ZLkWh9KQUS3nQb2zh4JElWu9eeAMa4xQQSbuA98HKZbaKqBQiH9eupC6yAw2MKgfjaejj1pGBWxvg1EzkvNw3ZK3N4%2F93VNChWimmDpNdfhsNAz60SvmnoKsxbAn804xy7TWPWFSeh9Tdz%2FErFsnkiM&X-Amz-Signature=b584f24d887be90e13f571d27f5cc63218874009e59647160e8e3faa699d83e5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DIFDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBis4TzWLPvYhHEcPOuIajDX5tL6Kl%2FvKjYKWqBkI8QkAiBePrRM7ENLCgnsAzSHuhNZPw2YjoUZLUEa2sEkVbMgMSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMv6QzH7UzbQcRIUKtwDTZGZ%2BjhYAm%2BLSVzwtKJMIzvQ3ufkZmxlsWP%2FNK8LbRsbDN0jPW2oQQsUV9Vijc0Kj6x0g5LwdPaXdSTWS5HljvUBBSME7JdrKPSDWUQXfPCS6OBJx8%2Blt2JWrKMeSrA5dIKrDWLZRQS8Y%2FHVPN2utetpbVpFU7fUqjalyv9f2cb3APJ32SZux9HoY4m7Oiavkc0Wtx%2Bg0EsCwN6sLtCclIIwdcHF0VL8hPj64HR5Fh%2Fi252K4XESZtqFK9m17KSIB2AWIQpeKd%2FOEhpzF7BsXbPJdyNDhTWDs8PjiMldyR8S54v8VvI5wLB7UjwPKy5lcjxgd7rAEqeJqpowIqvw3sJq4TbhvsBbHbTAswtYMHGxGRgfOrdh5Mzp0xUCIr%2F%2BFnDv%2FB%2BPo740JolgnAeyNHX%2Fu%2B67jBfw4OYTCu%2FPMU1qwaD1uf2zy%2BUIxVI6gF8%2B6hBn2K1jFxXJ3pEN7LCwDtXY%2BNN1LbS3E9taRi4XhSAQfgu2ifaIs9qwBoC0br7rLVbXvTlKuPc1ay8dF%2FxseD0164OV%2FFwU2KMvJujc9WGk72W8IPiLAnVkQF22aiecKpoecIKGS%2BHASugOkwHwr%2BehtBdmFEcIydfcqheWzo7SHW2CE28zfm5Qsn4w8I%2BewAY6pgGbSIWyVaNZ3xZL5jPgvthUK15Dp3J3tE1tlz6kE8uTN7VJpUUhX9xlJPzKV8dNvL2GN35L5ZLkWh9KQUS3nQb2zh4JElWu9eeAMa4xQQSbuA98HKZbaKqBQiH9eupC6yAw2MKgfjaejj1pGBWxvg1EzkvNw3ZK3N4%2F93VNChWimmDpNdfhsNAz60SvmnoKsxbAn804xy7TWPWFSeh9Tdz%2FErFsnkiM&X-Amz-Signature=d0b6b5c2d367d926684c6b490b78da19e8a4e98bfbb90a0051e68fef2523d1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DIFDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBis4TzWLPvYhHEcPOuIajDX5tL6Kl%2FvKjYKWqBkI8QkAiBePrRM7ENLCgnsAzSHuhNZPw2YjoUZLUEa2sEkVbMgMSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMv6QzH7UzbQcRIUKtwDTZGZ%2BjhYAm%2BLSVzwtKJMIzvQ3ufkZmxlsWP%2FNK8LbRsbDN0jPW2oQQsUV9Vijc0Kj6x0g5LwdPaXdSTWS5HljvUBBSME7JdrKPSDWUQXfPCS6OBJx8%2Blt2JWrKMeSrA5dIKrDWLZRQS8Y%2FHVPN2utetpbVpFU7fUqjalyv9f2cb3APJ32SZux9HoY4m7Oiavkc0Wtx%2Bg0EsCwN6sLtCclIIwdcHF0VL8hPj64HR5Fh%2Fi252K4XESZtqFK9m17KSIB2AWIQpeKd%2FOEhpzF7BsXbPJdyNDhTWDs8PjiMldyR8S54v8VvI5wLB7UjwPKy5lcjxgd7rAEqeJqpowIqvw3sJq4TbhvsBbHbTAswtYMHGxGRgfOrdh5Mzp0xUCIr%2F%2BFnDv%2FB%2BPo740JolgnAeyNHX%2Fu%2B67jBfw4OYTCu%2FPMU1qwaD1uf2zy%2BUIxVI6gF8%2B6hBn2K1jFxXJ3pEN7LCwDtXY%2BNN1LbS3E9taRi4XhSAQfgu2ifaIs9qwBoC0br7rLVbXvTlKuPc1ay8dF%2FxseD0164OV%2FFwU2KMvJujc9WGk72W8IPiLAnVkQF22aiecKpoecIKGS%2BHASugOkwHwr%2BehtBdmFEcIydfcqheWzo7SHW2CE28zfm5Qsn4w8I%2BewAY6pgGbSIWyVaNZ3xZL5jPgvthUK15Dp3J3tE1tlz6kE8uTN7VJpUUhX9xlJPzKV8dNvL2GN35L5ZLkWh9KQUS3nQb2zh4JElWu9eeAMa4xQQSbuA98HKZbaKqBQiH9eupC6yAw2MKgfjaejj1pGBWxvg1EzkvNw3ZK3N4%2F93VNChWimmDpNdfhsNAz60SvmnoKsxbAn804xy7TWPWFSeh9Tdz%2FErFsnkiM&X-Amz-Signature=6230335afe52fedb4a54bdad50676b8aad1aff614f03df552a8e9857e78f1b59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DIFDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBis4TzWLPvYhHEcPOuIajDX5tL6Kl%2FvKjYKWqBkI8QkAiBePrRM7ENLCgnsAzSHuhNZPw2YjoUZLUEa2sEkVbMgMSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMv6QzH7UzbQcRIUKtwDTZGZ%2BjhYAm%2BLSVzwtKJMIzvQ3ufkZmxlsWP%2FNK8LbRsbDN0jPW2oQQsUV9Vijc0Kj6x0g5LwdPaXdSTWS5HljvUBBSME7JdrKPSDWUQXfPCS6OBJx8%2Blt2JWrKMeSrA5dIKrDWLZRQS8Y%2FHVPN2utetpbVpFU7fUqjalyv9f2cb3APJ32SZux9HoY4m7Oiavkc0Wtx%2Bg0EsCwN6sLtCclIIwdcHF0VL8hPj64HR5Fh%2Fi252K4XESZtqFK9m17KSIB2AWIQpeKd%2FOEhpzF7BsXbPJdyNDhTWDs8PjiMldyR8S54v8VvI5wLB7UjwPKy5lcjxgd7rAEqeJqpowIqvw3sJq4TbhvsBbHbTAswtYMHGxGRgfOrdh5Mzp0xUCIr%2F%2BFnDv%2FB%2BPo740JolgnAeyNHX%2Fu%2B67jBfw4OYTCu%2FPMU1qwaD1uf2zy%2BUIxVI6gF8%2B6hBn2K1jFxXJ3pEN7LCwDtXY%2BNN1LbS3E9taRi4XhSAQfgu2ifaIs9qwBoC0br7rLVbXvTlKuPc1ay8dF%2FxseD0164OV%2FFwU2KMvJujc9WGk72W8IPiLAnVkQF22aiecKpoecIKGS%2BHASugOkwHwr%2BehtBdmFEcIydfcqheWzo7SHW2CE28zfm5Qsn4w8I%2BewAY6pgGbSIWyVaNZ3xZL5jPgvthUK15Dp3J3tE1tlz6kE8uTN7VJpUUhX9xlJPzKV8dNvL2GN35L5ZLkWh9KQUS3nQb2zh4JElWu9eeAMa4xQQSbuA98HKZbaKqBQiH9eupC6yAw2MKgfjaejj1pGBWxvg1EzkvNw3ZK3N4%2F93VNChWimmDpNdfhsNAz60SvmnoKsxbAn804xy7TWPWFSeh9Tdz%2FErFsnkiM&X-Amz-Signature=11069b6c36fa0e297f9d014a606b2d7c1f14394937429f488a63ef72ede9678b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DIFDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBis4TzWLPvYhHEcPOuIajDX5tL6Kl%2FvKjYKWqBkI8QkAiBePrRM7ENLCgnsAzSHuhNZPw2YjoUZLUEa2sEkVbMgMSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMv6QzH7UzbQcRIUKtwDTZGZ%2BjhYAm%2BLSVzwtKJMIzvQ3ufkZmxlsWP%2FNK8LbRsbDN0jPW2oQQsUV9Vijc0Kj6x0g5LwdPaXdSTWS5HljvUBBSME7JdrKPSDWUQXfPCS6OBJx8%2Blt2JWrKMeSrA5dIKrDWLZRQS8Y%2FHVPN2utetpbVpFU7fUqjalyv9f2cb3APJ32SZux9HoY4m7Oiavkc0Wtx%2Bg0EsCwN6sLtCclIIwdcHF0VL8hPj64HR5Fh%2Fi252K4XESZtqFK9m17KSIB2AWIQpeKd%2FOEhpzF7BsXbPJdyNDhTWDs8PjiMldyR8S54v8VvI5wLB7UjwPKy5lcjxgd7rAEqeJqpowIqvw3sJq4TbhvsBbHbTAswtYMHGxGRgfOrdh5Mzp0xUCIr%2F%2BFnDv%2FB%2BPo740JolgnAeyNHX%2Fu%2B67jBfw4OYTCu%2FPMU1qwaD1uf2zy%2BUIxVI6gF8%2B6hBn2K1jFxXJ3pEN7LCwDtXY%2BNN1LbS3E9taRi4XhSAQfgu2ifaIs9qwBoC0br7rLVbXvTlKuPc1ay8dF%2FxseD0164OV%2FFwU2KMvJujc9WGk72W8IPiLAnVkQF22aiecKpoecIKGS%2BHASugOkwHwr%2BehtBdmFEcIydfcqheWzo7SHW2CE28zfm5Qsn4w8I%2BewAY6pgGbSIWyVaNZ3xZL5jPgvthUK15Dp3J3tE1tlz6kE8uTN7VJpUUhX9xlJPzKV8dNvL2GN35L5ZLkWh9KQUS3nQb2zh4JElWu9eeAMa4xQQSbuA98HKZbaKqBQiH9eupC6yAw2MKgfjaejj1pGBWxvg1EzkvNw3ZK3N4%2F93VNChWimmDpNdfhsNAz60SvmnoKsxbAn804xy7TWPWFSeh9Tdz%2FErFsnkiM&X-Amz-Signature=d4cbd4564543c10790ca89cb46b346718c55afe68fd4876928f14ca346e9f921&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DIFDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBis4TzWLPvYhHEcPOuIajDX5tL6Kl%2FvKjYKWqBkI8QkAiBePrRM7ENLCgnsAzSHuhNZPw2YjoUZLUEa2sEkVbMgMSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMv6QzH7UzbQcRIUKtwDTZGZ%2BjhYAm%2BLSVzwtKJMIzvQ3ufkZmxlsWP%2FNK8LbRsbDN0jPW2oQQsUV9Vijc0Kj6x0g5LwdPaXdSTWS5HljvUBBSME7JdrKPSDWUQXfPCS6OBJx8%2Blt2JWrKMeSrA5dIKrDWLZRQS8Y%2FHVPN2utetpbVpFU7fUqjalyv9f2cb3APJ32SZux9HoY4m7Oiavkc0Wtx%2Bg0EsCwN6sLtCclIIwdcHF0VL8hPj64HR5Fh%2Fi252K4XESZtqFK9m17KSIB2AWIQpeKd%2FOEhpzF7BsXbPJdyNDhTWDs8PjiMldyR8S54v8VvI5wLB7UjwPKy5lcjxgd7rAEqeJqpowIqvw3sJq4TbhvsBbHbTAswtYMHGxGRgfOrdh5Mzp0xUCIr%2F%2BFnDv%2FB%2BPo740JolgnAeyNHX%2Fu%2B67jBfw4OYTCu%2FPMU1qwaD1uf2zy%2BUIxVI6gF8%2B6hBn2K1jFxXJ3pEN7LCwDtXY%2BNN1LbS3E9taRi4XhSAQfgu2ifaIs9qwBoC0br7rLVbXvTlKuPc1ay8dF%2FxseD0164OV%2FFwU2KMvJujc9WGk72W8IPiLAnVkQF22aiecKpoecIKGS%2BHASugOkwHwr%2BehtBdmFEcIydfcqheWzo7SHW2CE28zfm5Qsn4w8I%2BewAY6pgGbSIWyVaNZ3xZL5jPgvthUK15Dp3J3tE1tlz6kE8uTN7VJpUUhX9xlJPzKV8dNvL2GN35L5ZLkWh9KQUS3nQb2zh4JElWu9eeAMa4xQQSbuA98HKZbaKqBQiH9eupC6yAw2MKgfjaejj1pGBWxvg1EzkvNw3ZK3N4%2F93VNChWimmDpNdfhsNAz60SvmnoKsxbAn804xy7TWPWFSeh9Tdz%2FErFsnkiM&X-Amz-Signature=3bf1539dae9c3f3d10a20edf7e8d9ae0bb12068b54925504de755196202ebc7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A4DIFDO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBis4TzWLPvYhHEcPOuIajDX5tL6Kl%2FvKjYKWqBkI8QkAiBePrRM7ENLCgnsAzSHuhNZPw2YjoUZLUEa2sEkVbMgMSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMv6QzH7UzbQcRIUKtwDTZGZ%2BjhYAm%2BLSVzwtKJMIzvQ3ufkZmxlsWP%2FNK8LbRsbDN0jPW2oQQsUV9Vijc0Kj6x0g5LwdPaXdSTWS5HljvUBBSME7JdrKPSDWUQXfPCS6OBJx8%2Blt2JWrKMeSrA5dIKrDWLZRQS8Y%2FHVPN2utetpbVpFU7fUqjalyv9f2cb3APJ32SZux9HoY4m7Oiavkc0Wtx%2Bg0EsCwN6sLtCclIIwdcHF0VL8hPj64HR5Fh%2Fi252K4XESZtqFK9m17KSIB2AWIQpeKd%2FOEhpzF7BsXbPJdyNDhTWDs8PjiMldyR8S54v8VvI5wLB7UjwPKy5lcjxgd7rAEqeJqpowIqvw3sJq4TbhvsBbHbTAswtYMHGxGRgfOrdh5Mzp0xUCIr%2F%2BFnDv%2FB%2BPo740JolgnAeyNHX%2Fu%2B67jBfw4OYTCu%2FPMU1qwaD1uf2zy%2BUIxVI6gF8%2B6hBn2K1jFxXJ3pEN7LCwDtXY%2BNN1LbS3E9taRi4XhSAQfgu2ifaIs9qwBoC0br7rLVbXvTlKuPc1ay8dF%2FxseD0164OV%2FFwU2KMvJujc9WGk72W8IPiLAnVkQF22aiecKpoecIKGS%2BHASugOkwHwr%2BehtBdmFEcIydfcqheWzo7SHW2CE28zfm5Qsn4w8I%2BewAY6pgGbSIWyVaNZ3xZL5jPgvthUK15Dp3J3tE1tlz6kE8uTN7VJpUUhX9xlJPzKV8dNvL2GN35L5ZLkWh9KQUS3nQb2zh4JElWu9eeAMa4xQQSbuA98HKZbaKqBQiH9eupC6yAw2MKgfjaejj1pGBWxvg1EzkvNw3ZK3N4%2F93VNChWimmDpNdfhsNAz60SvmnoKsxbAn804xy7TWPWFSeh9Tdz%2FErFsnkiM&X-Amz-Signature=42b836fbb795f0660705e3d28002f75b26bb946fd4f4de05166e1190e9d82820&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
