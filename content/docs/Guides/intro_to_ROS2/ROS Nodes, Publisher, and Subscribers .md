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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HPKX6Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs%2BEclm0cPCQPPlXh1VeTobEarRlLjglpndOMocr8gGAiAFPpqgQo%2FZx%2FFZ6%2BkuaIESp1sX91HVPkUEwgjwmcODjiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wUgDoOY4kz%2Bc1MKtwDGeZMGyyD7sLPCGY9P3soy30DnVwLQT2hrt8gu27lV9nFiiEi07fpQSqzyr1s43kqf93nxYwNLPEq5g1SqCGKDTQ6TgEd89tSSzBuksXw6sDABhnnJVBrfZP0ThIr%2FrxvUb0gt3vDBCAh1evjXovMdsxnwxYtvaNn%2BUpgfu%2F4ZmiU3FPcDjH2JDMSRLg1UlV4itA9FjcZaK%2BLoaZqSzeTPmEYlZ4SnBmsBiKxrK2USXRMAs6fkS7BaVJbdcLPvmnW3XBFEVPtvppSPPK1awtz%2F%2BlxydUwwNUqvurpcfVX7%2FN4FWFo3RXXDUiaHXCE6HH4Fq6V2weUjw7KcKfTBODr0FumPwJMsCLQO8qwQEwGVqm%2FKWzixcnwr8nfxzRsPHC%2BPavhJPeWG%2BCpiS36cxGRlnUP2RGgrg0DAc2bHIMexQ1aRcTHokOM2jUPe25Y8MZBdKTgDvSmNBaFNq1Uc%2F3JZehkks7QtnlfYpJiiVMjLNEy%2FN1sdY6fuiMuIdC8QnHKKxSFseBwjbTe7uvaqyhYw85vB2ZZ2nrIwDXQVBfuwIFLPiJBXsHmUPkq0KFYdehbE1jUtuRY6NNUmazrmXWZenzm6C8DSiGMOVUR7Lh4lKgNhgqZhwDcqZm%2Fa4Ywtfr0vAY6pgEIda%2FTV9mW8yuCXx%2F30C4lnZ8f3xI2S%2BrCsRD5jvHPP%2B9ZPy9TLk%2BO2YF3JnX%2FnbJpS5SlhRfGkpsiaE6YZRL3t5QzmLA58nhybC4AthYrU6Dsuk1u89UcllKPKhUwSFWJoEWRejM%2FQmUtYmexWSxAIEOdKYjlHrLbqYYzw5CmAVNTRVWFqrou2BcjlpmHPG1XrraVf1%2F5Xe9UZOFhEwLEx%2BtfYtM2&X-Amz-Signature=ae3ca3b706c9da1d4ab975f2944069862bec38f8dbcfc4fe826969d35c2c3f64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HPKX6Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs%2BEclm0cPCQPPlXh1VeTobEarRlLjglpndOMocr8gGAiAFPpqgQo%2FZx%2FFZ6%2BkuaIESp1sX91HVPkUEwgjwmcODjiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wUgDoOY4kz%2Bc1MKtwDGeZMGyyD7sLPCGY9P3soy30DnVwLQT2hrt8gu27lV9nFiiEi07fpQSqzyr1s43kqf93nxYwNLPEq5g1SqCGKDTQ6TgEd89tSSzBuksXw6sDABhnnJVBrfZP0ThIr%2FrxvUb0gt3vDBCAh1evjXovMdsxnwxYtvaNn%2BUpgfu%2F4ZmiU3FPcDjH2JDMSRLg1UlV4itA9FjcZaK%2BLoaZqSzeTPmEYlZ4SnBmsBiKxrK2USXRMAs6fkS7BaVJbdcLPvmnW3XBFEVPtvppSPPK1awtz%2F%2BlxydUwwNUqvurpcfVX7%2FN4FWFo3RXXDUiaHXCE6HH4Fq6V2weUjw7KcKfTBODr0FumPwJMsCLQO8qwQEwGVqm%2FKWzixcnwr8nfxzRsPHC%2BPavhJPeWG%2BCpiS36cxGRlnUP2RGgrg0DAc2bHIMexQ1aRcTHokOM2jUPe25Y8MZBdKTgDvSmNBaFNq1Uc%2F3JZehkks7QtnlfYpJiiVMjLNEy%2FN1sdY6fuiMuIdC8QnHKKxSFseBwjbTe7uvaqyhYw85vB2ZZ2nrIwDXQVBfuwIFLPiJBXsHmUPkq0KFYdehbE1jUtuRY6NNUmazrmXWZenzm6C8DSiGMOVUR7Lh4lKgNhgqZhwDcqZm%2Fa4Ywtfr0vAY6pgEIda%2FTV9mW8yuCXx%2F30C4lnZ8f3xI2S%2BrCsRD5jvHPP%2B9ZPy9TLk%2BO2YF3JnX%2FnbJpS5SlhRfGkpsiaE6YZRL3t5QzmLA58nhybC4AthYrU6Dsuk1u89UcllKPKhUwSFWJoEWRejM%2FQmUtYmexWSxAIEOdKYjlHrLbqYYzw5CmAVNTRVWFqrou2BcjlpmHPG1XrraVf1%2F5Xe9UZOFhEwLEx%2BtfYtM2&X-Amz-Signature=4263b01b9d02777199ef4ff86c688ee3886919a304fb0cdfaf95dcf3975c6172&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HPKX6Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs%2BEclm0cPCQPPlXh1VeTobEarRlLjglpndOMocr8gGAiAFPpqgQo%2FZx%2FFZ6%2BkuaIESp1sX91HVPkUEwgjwmcODjiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wUgDoOY4kz%2Bc1MKtwDGeZMGyyD7sLPCGY9P3soy30DnVwLQT2hrt8gu27lV9nFiiEi07fpQSqzyr1s43kqf93nxYwNLPEq5g1SqCGKDTQ6TgEd89tSSzBuksXw6sDABhnnJVBrfZP0ThIr%2FrxvUb0gt3vDBCAh1evjXovMdsxnwxYtvaNn%2BUpgfu%2F4ZmiU3FPcDjH2JDMSRLg1UlV4itA9FjcZaK%2BLoaZqSzeTPmEYlZ4SnBmsBiKxrK2USXRMAs6fkS7BaVJbdcLPvmnW3XBFEVPtvppSPPK1awtz%2F%2BlxydUwwNUqvurpcfVX7%2FN4FWFo3RXXDUiaHXCE6HH4Fq6V2weUjw7KcKfTBODr0FumPwJMsCLQO8qwQEwGVqm%2FKWzixcnwr8nfxzRsPHC%2BPavhJPeWG%2BCpiS36cxGRlnUP2RGgrg0DAc2bHIMexQ1aRcTHokOM2jUPe25Y8MZBdKTgDvSmNBaFNq1Uc%2F3JZehkks7QtnlfYpJiiVMjLNEy%2FN1sdY6fuiMuIdC8QnHKKxSFseBwjbTe7uvaqyhYw85vB2ZZ2nrIwDXQVBfuwIFLPiJBXsHmUPkq0KFYdehbE1jUtuRY6NNUmazrmXWZenzm6C8DSiGMOVUR7Lh4lKgNhgqZhwDcqZm%2Fa4Ywtfr0vAY6pgEIda%2FTV9mW8yuCXx%2F30C4lnZ8f3xI2S%2BrCsRD5jvHPP%2B9ZPy9TLk%2BO2YF3JnX%2FnbJpS5SlhRfGkpsiaE6YZRL3t5QzmLA58nhybC4AthYrU6Dsuk1u89UcllKPKhUwSFWJoEWRejM%2FQmUtYmexWSxAIEOdKYjlHrLbqYYzw5CmAVNTRVWFqrou2BcjlpmHPG1XrraVf1%2F5Xe9UZOFhEwLEx%2BtfYtM2&X-Amz-Signature=766a1a785220c5e0c225356998cd6520c8362a07ebab5c3ade6856fe20a861ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HPKX6Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs%2BEclm0cPCQPPlXh1VeTobEarRlLjglpndOMocr8gGAiAFPpqgQo%2FZx%2FFZ6%2BkuaIESp1sX91HVPkUEwgjwmcODjiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wUgDoOY4kz%2Bc1MKtwDGeZMGyyD7sLPCGY9P3soy30DnVwLQT2hrt8gu27lV9nFiiEi07fpQSqzyr1s43kqf93nxYwNLPEq5g1SqCGKDTQ6TgEd89tSSzBuksXw6sDABhnnJVBrfZP0ThIr%2FrxvUb0gt3vDBCAh1evjXovMdsxnwxYtvaNn%2BUpgfu%2F4ZmiU3FPcDjH2JDMSRLg1UlV4itA9FjcZaK%2BLoaZqSzeTPmEYlZ4SnBmsBiKxrK2USXRMAs6fkS7BaVJbdcLPvmnW3XBFEVPtvppSPPK1awtz%2F%2BlxydUwwNUqvurpcfVX7%2FN4FWFo3RXXDUiaHXCE6HH4Fq6V2weUjw7KcKfTBODr0FumPwJMsCLQO8qwQEwGVqm%2FKWzixcnwr8nfxzRsPHC%2BPavhJPeWG%2BCpiS36cxGRlnUP2RGgrg0DAc2bHIMexQ1aRcTHokOM2jUPe25Y8MZBdKTgDvSmNBaFNq1Uc%2F3JZehkks7QtnlfYpJiiVMjLNEy%2FN1sdY6fuiMuIdC8QnHKKxSFseBwjbTe7uvaqyhYw85vB2ZZ2nrIwDXQVBfuwIFLPiJBXsHmUPkq0KFYdehbE1jUtuRY6NNUmazrmXWZenzm6C8DSiGMOVUR7Lh4lKgNhgqZhwDcqZm%2Fa4Ywtfr0vAY6pgEIda%2FTV9mW8yuCXx%2F30C4lnZ8f3xI2S%2BrCsRD5jvHPP%2B9ZPy9TLk%2BO2YF3JnX%2FnbJpS5SlhRfGkpsiaE6YZRL3t5QzmLA58nhybC4AthYrU6Dsuk1u89UcllKPKhUwSFWJoEWRejM%2FQmUtYmexWSxAIEOdKYjlHrLbqYYzw5CmAVNTRVWFqrou2BcjlpmHPG1XrraVf1%2F5Xe9UZOFhEwLEx%2BtfYtM2&X-Amz-Signature=f77e706e4aba5feb7bf3b30760e77a0293f5b1b187b025773d98d41df753008b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HPKX6Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs%2BEclm0cPCQPPlXh1VeTobEarRlLjglpndOMocr8gGAiAFPpqgQo%2FZx%2FFZ6%2BkuaIESp1sX91HVPkUEwgjwmcODjiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wUgDoOY4kz%2Bc1MKtwDGeZMGyyD7sLPCGY9P3soy30DnVwLQT2hrt8gu27lV9nFiiEi07fpQSqzyr1s43kqf93nxYwNLPEq5g1SqCGKDTQ6TgEd89tSSzBuksXw6sDABhnnJVBrfZP0ThIr%2FrxvUb0gt3vDBCAh1evjXovMdsxnwxYtvaNn%2BUpgfu%2F4ZmiU3FPcDjH2JDMSRLg1UlV4itA9FjcZaK%2BLoaZqSzeTPmEYlZ4SnBmsBiKxrK2USXRMAs6fkS7BaVJbdcLPvmnW3XBFEVPtvppSPPK1awtz%2F%2BlxydUwwNUqvurpcfVX7%2FN4FWFo3RXXDUiaHXCE6HH4Fq6V2weUjw7KcKfTBODr0FumPwJMsCLQO8qwQEwGVqm%2FKWzixcnwr8nfxzRsPHC%2BPavhJPeWG%2BCpiS36cxGRlnUP2RGgrg0DAc2bHIMexQ1aRcTHokOM2jUPe25Y8MZBdKTgDvSmNBaFNq1Uc%2F3JZehkks7QtnlfYpJiiVMjLNEy%2FN1sdY6fuiMuIdC8QnHKKxSFseBwjbTe7uvaqyhYw85vB2ZZ2nrIwDXQVBfuwIFLPiJBXsHmUPkq0KFYdehbE1jUtuRY6NNUmazrmXWZenzm6C8DSiGMOVUR7Lh4lKgNhgqZhwDcqZm%2Fa4Ywtfr0vAY6pgEIda%2FTV9mW8yuCXx%2F30C4lnZ8f3xI2S%2BrCsRD5jvHPP%2B9ZPy9TLk%2BO2YF3JnX%2FnbJpS5SlhRfGkpsiaE6YZRL3t5QzmLA58nhybC4AthYrU6Dsuk1u89UcllKPKhUwSFWJoEWRejM%2FQmUtYmexWSxAIEOdKYjlHrLbqYYzw5CmAVNTRVWFqrou2BcjlpmHPG1XrraVf1%2F5Xe9UZOFhEwLEx%2BtfYtM2&X-Amz-Signature=f944ce6a2026dc4b3f4e75c4a0549f41122ffe9d1d3c7d1ea6f8656ed36b01b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HPKX6Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs%2BEclm0cPCQPPlXh1VeTobEarRlLjglpndOMocr8gGAiAFPpqgQo%2FZx%2FFZ6%2BkuaIESp1sX91HVPkUEwgjwmcODjiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wUgDoOY4kz%2Bc1MKtwDGeZMGyyD7sLPCGY9P3soy30DnVwLQT2hrt8gu27lV9nFiiEi07fpQSqzyr1s43kqf93nxYwNLPEq5g1SqCGKDTQ6TgEd89tSSzBuksXw6sDABhnnJVBrfZP0ThIr%2FrxvUb0gt3vDBCAh1evjXovMdsxnwxYtvaNn%2BUpgfu%2F4ZmiU3FPcDjH2JDMSRLg1UlV4itA9FjcZaK%2BLoaZqSzeTPmEYlZ4SnBmsBiKxrK2USXRMAs6fkS7BaVJbdcLPvmnW3XBFEVPtvppSPPK1awtz%2F%2BlxydUwwNUqvurpcfVX7%2FN4FWFo3RXXDUiaHXCE6HH4Fq6V2weUjw7KcKfTBODr0FumPwJMsCLQO8qwQEwGVqm%2FKWzixcnwr8nfxzRsPHC%2BPavhJPeWG%2BCpiS36cxGRlnUP2RGgrg0DAc2bHIMexQ1aRcTHokOM2jUPe25Y8MZBdKTgDvSmNBaFNq1Uc%2F3JZehkks7QtnlfYpJiiVMjLNEy%2FN1sdY6fuiMuIdC8QnHKKxSFseBwjbTe7uvaqyhYw85vB2ZZ2nrIwDXQVBfuwIFLPiJBXsHmUPkq0KFYdehbE1jUtuRY6NNUmazrmXWZenzm6C8DSiGMOVUR7Lh4lKgNhgqZhwDcqZm%2Fa4Ywtfr0vAY6pgEIda%2FTV9mW8yuCXx%2F30C4lnZ8f3xI2S%2BrCsRD5jvHPP%2B9ZPy9TLk%2BO2YF3JnX%2FnbJpS5SlhRfGkpsiaE6YZRL3t5QzmLA58nhybC4AthYrU6Dsuk1u89UcllKPKhUwSFWJoEWRejM%2FQmUtYmexWSxAIEOdKYjlHrLbqYYzw5CmAVNTRVWFqrou2BcjlpmHPG1XrraVf1%2F5Xe9UZOFhEwLEx%2BtfYtM2&X-Amz-Signature=d4b3a303e93f63ee5921cf40ca5a7e801619ce1bd09dfccb70fda592e7025a58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HPKX6Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs%2BEclm0cPCQPPlXh1VeTobEarRlLjglpndOMocr8gGAiAFPpqgQo%2FZx%2FFZ6%2BkuaIESp1sX91HVPkUEwgjwmcODjiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wUgDoOY4kz%2Bc1MKtwDGeZMGyyD7sLPCGY9P3soy30DnVwLQT2hrt8gu27lV9nFiiEi07fpQSqzyr1s43kqf93nxYwNLPEq5g1SqCGKDTQ6TgEd89tSSzBuksXw6sDABhnnJVBrfZP0ThIr%2FrxvUb0gt3vDBCAh1evjXovMdsxnwxYtvaNn%2BUpgfu%2F4ZmiU3FPcDjH2JDMSRLg1UlV4itA9FjcZaK%2BLoaZqSzeTPmEYlZ4SnBmsBiKxrK2USXRMAs6fkS7BaVJbdcLPvmnW3XBFEVPtvppSPPK1awtz%2F%2BlxydUwwNUqvurpcfVX7%2FN4FWFo3RXXDUiaHXCE6HH4Fq6V2weUjw7KcKfTBODr0FumPwJMsCLQO8qwQEwGVqm%2FKWzixcnwr8nfxzRsPHC%2BPavhJPeWG%2BCpiS36cxGRlnUP2RGgrg0DAc2bHIMexQ1aRcTHokOM2jUPe25Y8MZBdKTgDvSmNBaFNq1Uc%2F3JZehkks7QtnlfYpJiiVMjLNEy%2FN1sdY6fuiMuIdC8QnHKKxSFseBwjbTe7uvaqyhYw85vB2ZZ2nrIwDXQVBfuwIFLPiJBXsHmUPkq0KFYdehbE1jUtuRY6NNUmazrmXWZenzm6C8DSiGMOVUR7Lh4lKgNhgqZhwDcqZm%2Fa4Ywtfr0vAY6pgEIda%2FTV9mW8yuCXx%2F30C4lnZ8f3xI2S%2BrCsRD5jvHPP%2B9ZPy9TLk%2BO2YF3JnX%2FnbJpS5SlhRfGkpsiaE6YZRL3t5QzmLA58nhybC4AthYrU6Dsuk1u89UcllKPKhUwSFWJoEWRejM%2FQmUtYmexWSxAIEOdKYjlHrLbqYYzw5CmAVNTRVWFqrou2BcjlpmHPG1XrraVf1%2F5Xe9UZOFhEwLEx%2BtfYtM2&X-Amz-Signature=d663105b756aa32f408f8f3be84ea8175b14ed37191a1c94b483cbc2a17b707e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HPKX6Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs%2BEclm0cPCQPPlXh1VeTobEarRlLjglpndOMocr8gGAiAFPpqgQo%2FZx%2FFZ6%2BkuaIESp1sX91HVPkUEwgjwmcODjiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7wUgDoOY4kz%2Bc1MKtwDGeZMGyyD7sLPCGY9P3soy30DnVwLQT2hrt8gu27lV9nFiiEi07fpQSqzyr1s43kqf93nxYwNLPEq5g1SqCGKDTQ6TgEd89tSSzBuksXw6sDABhnnJVBrfZP0ThIr%2FrxvUb0gt3vDBCAh1evjXovMdsxnwxYtvaNn%2BUpgfu%2F4ZmiU3FPcDjH2JDMSRLg1UlV4itA9FjcZaK%2BLoaZqSzeTPmEYlZ4SnBmsBiKxrK2USXRMAs6fkS7BaVJbdcLPvmnW3XBFEVPtvppSPPK1awtz%2F%2BlxydUwwNUqvurpcfVX7%2FN4FWFo3RXXDUiaHXCE6HH4Fq6V2weUjw7KcKfTBODr0FumPwJMsCLQO8qwQEwGVqm%2FKWzixcnwr8nfxzRsPHC%2BPavhJPeWG%2BCpiS36cxGRlnUP2RGgrg0DAc2bHIMexQ1aRcTHokOM2jUPe25Y8MZBdKTgDvSmNBaFNq1Uc%2F3JZehkks7QtnlfYpJiiVMjLNEy%2FN1sdY6fuiMuIdC8QnHKKxSFseBwjbTe7uvaqyhYw85vB2ZZ2nrIwDXQVBfuwIFLPiJBXsHmUPkq0KFYdehbE1jUtuRY6NNUmazrmXWZenzm6C8DSiGMOVUR7Lh4lKgNhgqZhwDcqZm%2Fa4Ywtfr0vAY6pgEIda%2FTV9mW8yuCXx%2F30C4lnZ8f3xI2S%2BrCsRD5jvHPP%2B9ZPy9TLk%2BO2YF3JnX%2FnbJpS5SlhRfGkpsiaE6YZRL3t5QzmLA58nhybC4AthYrU6Dsuk1u89UcllKPKhUwSFWJoEWRejM%2FQmUtYmexWSxAIEOdKYjlHrLbqYYzw5CmAVNTRVWFqrou2BcjlpmHPG1XrraVf1%2F5Xe9UZOFhEwLEx%2BtfYtM2&X-Amz-Signature=721f69b5e776f8432c8aa4c3e8bb776556fda747f0614e9bd8c6de2cb935b325&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
