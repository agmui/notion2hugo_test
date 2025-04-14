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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2TJ2QB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmlJTQi4EL%2Fv%2BPc8zEmsxVrQgEkId3n%2FxSY%2F%2FcJI8PAiANjZpRRFoN4YRIRG1PLVDSxQZMjYWX9oOR15GXwXACJCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMG2GJ8BlL0ZmmBvzPKtwDU42TR%2FIsw0PMtr9y5BSnYE8YkX2aMhgKvGT2v1KyWQLe5JkDpFNVTmhUcvHIYIdkbEYTIMftc%2B6e%2Bb8DG%2Fk6H21A7VY6v20dqBC2HWP3F3go6eki5iEen%2FV3%2FqUiXD0iieRLXBxy532%2BYR%2BGzPFjtA1q3Ft8gqkxTxZIsPFeHY1%2BABhI9rojQuywuU946Ab0HF62%2FaFIZbxchwhKM0%2FxmlvE045YYgqCUuApcMwfmce9yWEC946rom0g4bNXsN1Dmvd29iFwGD5vdpkUsgSWpympTzjEOlJh9ac0qrpglt5swNZNbKd%2F39t3dHWgu8F1GLBADix5s70H5NX25QrdFvPUdpB8CjGzd89YT0h4mnYGBQp4tHwytRQjiSniS0GdK684XbB3ROci3Md3KQ38IU1QOSiHhKQXSXrxngFMZ99OARyKw4yDSoEDix6WOKnWpV5TJw1NGFlGqTRi8hz8PjtxnwaPbTkhZS%2BNNue%2BnmhLxn1KKXrGpzpAQncPFRGM%2FI7XgLoBJcJ47a2K6QciPabAZmzVn5j2zUUpXlWIFDieVo3HxvQykW7GoXLJZdUrsP6L%2FYrsuotD7Dl2sx4IKIi9jvEEf1nfPWB6rAtM8ZDnpmvCyi9Tvir%2BUwAw%2B%2BLyvwY6pgG0lt0ZmDWBvSesn%2F2%2BZBZkXKsu%2FcFnGhApFKO5MM4XBqwUi9doemVmVfLmkq3Jp02KzJKXbU8alzp0ZTgNZvQo5NOUOHlmPKWKzNZv6n6S1O4LOikM%2FobTq7kqEWzNDuDaVhXAIny7%2BLSMJ%2FDu5ElgllFc8ehDdgC6wh0UzyUXpN8yrJm4OySV57fvEaWM3K8zF%2FwebT4WeLrHBEdJEDD%2FpT8uyjxM&X-Amz-Signature=1b950692642e31bff7a1d7d85bad000c1990befaa771f89b4bf4710f575dda1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2TJ2QB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmlJTQi4EL%2Fv%2BPc8zEmsxVrQgEkId3n%2FxSY%2F%2FcJI8PAiANjZpRRFoN4YRIRG1PLVDSxQZMjYWX9oOR15GXwXACJCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMG2GJ8BlL0ZmmBvzPKtwDU42TR%2FIsw0PMtr9y5BSnYE8YkX2aMhgKvGT2v1KyWQLe5JkDpFNVTmhUcvHIYIdkbEYTIMftc%2B6e%2Bb8DG%2Fk6H21A7VY6v20dqBC2HWP3F3go6eki5iEen%2FV3%2FqUiXD0iieRLXBxy532%2BYR%2BGzPFjtA1q3Ft8gqkxTxZIsPFeHY1%2BABhI9rojQuywuU946Ab0HF62%2FaFIZbxchwhKM0%2FxmlvE045YYgqCUuApcMwfmce9yWEC946rom0g4bNXsN1Dmvd29iFwGD5vdpkUsgSWpympTzjEOlJh9ac0qrpglt5swNZNbKd%2F39t3dHWgu8F1GLBADix5s70H5NX25QrdFvPUdpB8CjGzd89YT0h4mnYGBQp4tHwytRQjiSniS0GdK684XbB3ROci3Md3KQ38IU1QOSiHhKQXSXrxngFMZ99OARyKw4yDSoEDix6WOKnWpV5TJw1NGFlGqTRi8hz8PjtxnwaPbTkhZS%2BNNue%2BnmhLxn1KKXrGpzpAQncPFRGM%2FI7XgLoBJcJ47a2K6QciPabAZmzVn5j2zUUpXlWIFDieVo3HxvQykW7GoXLJZdUrsP6L%2FYrsuotD7Dl2sx4IKIi9jvEEf1nfPWB6rAtM8ZDnpmvCyi9Tvir%2BUwAw%2B%2BLyvwY6pgG0lt0ZmDWBvSesn%2F2%2BZBZkXKsu%2FcFnGhApFKO5MM4XBqwUi9doemVmVfLmkq3Jp02KzJKXbU8alzp0ZTgNZvQo5NOUOHlmPKWKzNZv6n6S1O4LOikM%2FobTq7kqEWzNDuDaVhXAIny7%2BLSMJ%2FDu5ElgllFc8ehDdgC6wh0UzyUXpN8yrJm4OySV57fvEaWM3K8zF%2FwebT4WeLrHBEdJEDD%2FpT8uyjxM&X-Amz-Signature=d13cf494f38f115352d872696ba8dc9cd1b139131311edff153c4ffeed1ef4e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2TJ2QB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmlJTQi4EL%2Fv%2BPc8zEmsxVrQgEkId3n%2FxSY%2F%2FcJI8PAiANjZpRRFoN4YRIRG1PLVDSxQZMjYWX9oOR15GXwXACJCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMG2GJ8BlL0ZmmBvzPKtwDU42TR%2FIsw0PMtr9y5BSnYE8YkX2aMhgKvGT2v1KyWQLe5JkDpFNVTmhUcvHIYIdkbEYTIMftc%2B6e%2Bb8DG%2Fk6H21A7VY6v20dqBC2HWP3F3go6eki5iEen%2FV3%2FqUiXD0iieRLXBxy532%2BYR%2BGzPFjtA1q3Ft8gqkxTxZIsPFeHY1%2BABhI9rojQuywuU946Ab0HF62%2FaFIZbxchwhKM0%2FxmlvE045YYgqCUuApcMwfmce9yWEC946rom0g4bNXsN1Dmvd29iFwGD5vdpkUsgSWpympTzjEOlJh9ac0qrpglt5swNZNbKd%2F39t3dHWgu8F1GLBADix5s70H5NX25QrdFvPUdpB8CjGzd89YT0h4mnYGBQp4tHwytRQjiSniS0GdK684XbB3ROci3Md3KQ38IU1QOSiHhKQXSXrxngFMZ99OARyKw4yDSoEDix6WOKnWpV5TJw1NGFlGqTRi8hz8PjtxnwaPbTkhZS%2BNNue%2BnmhLxn1KKXrGpzpAQncPFRGM%2FI7XgLoBJcJ47a2K6QciPabAZmzVn5j2zUUpXlWIFDieVo3HxvQykW7GoXLJZdUrsP6L%2FYrsuotD7Dl2sx4IKIi9jvEEf1nfPWB6rAtM8ZDnpmvCyi9Tvir%2BUwAw%2B%2BLyvwY6pgG0lt0ZmDWBvSesn%2F2%2BZBZkXKsu%2FcFnGhApFKO5MM4XBqwUi9doemVmVfLmkq3Jp02KzJKXbU8alzp0ZTgNZvQo5NOUOHlmPKWKzNZv6n6S1O4LOikM%2FobTq7kqEWzNDuDaVhXAIny7%2BLSMJ%2FDu5ElgllFc8ehDdgC6wh0UzyUXpN8yrJm4OySV57fvEaWM3K8zF%2FwebT4WeLrHBEdJEDD%2FpT8uyjxM&X-Amz-Signature=90e38b6fa3e3c97b3b002b11b6d89eba15970da11c8ef4ad82890f70f93f2f13&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2TJ2QB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmlJTQi4EL%2Fv%2BPc8zEmsxVrQgEkId3n%2FxSY%2F%2FcJI8PAiANjZpRRFoN4YRIRG1PLVDSxQZMjYWX9oOR15GXwXACJCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMG2GJ8BlL0ZmmBvzPKtwDU42TR%2FIsw0PMtr9y5BSnYE8YkX2aMhgKvGT2v1KyWQLe5JkDpFNVTmhUcvHIYIdkbEYTIMftc%2B6e%2Bb8DG%2Fk6H21A7VY6v20dqBC2HWP3F3go6eki5iEen%2FV3%2FqUiXD0iieRLXBxy532%2BYR%2BGzPFjtA1q3Ft8gqkxTxZIsPFeHY1%2BABhI9rojQuywuU946Ab0HF62%2FaFIZbxchwhKM0%2FxmlvE045YYgqCUuApcMwfmce9yWEC946rom0g4bNXsN1Dmvd29iFwGD5vdpkUsgSWpympTzjEOlJh9ac0qrpglt5swNZNbKd%2F39t3dHWgu8F1GLBADix5s70H5NX25QrdFvPUdpB8CjGzd89YT0h4mnYGBQp4tHwytRQjiSniS0GdK684XbB3ROci3Md3KQ38IU1QOSiHhKQXSXrxngFMZ99OARyKw4yDSoEDix6WOKnWpV5TJw1NGFlGqTRi8hz8PjtxnwaPbTkhZS%2BNNue%2BnmhLxn1KKXrGpzpAQncPFRGM%2FI7XgLoBJcJ47a2K6QciPabAZmzVn5j2zUUpXlWIFDieVo3HxvQykW7GoXLJZdUrsP6L%2FYrsuotD7Dl2sx4IKIi9jvEEf1nfPWB6rAtM8ZDnpmvCyi9Tvir%2BUwAw%2B%2BLyvwY6pgG0lt0ZmDWBvSesn%2F2%2BZBZkXKsu%2FcFnGhApFKO5MM4XBqwUi9doemVmVfLmkq3Jp02KzJKXbU8alzp0ZTgNZvQo5NOUOHlmPKWKzNZv6n6S1O4LOikM%2FobTq7kqEWzNDuDaVhXAIny7%2BLSMJ%2FDu5ElgllFc8ehDdgC6wh0UzyUXpN8yrJm4OySV57fvEaWM3K8zF%2FwebT4WeLrHBEdJEDD%2FpT8uyjxM&X-Amz-Signature=aa41dfdb14e7be48f5a33cae545480290defee52190eaa96ced94bbda6f3248b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2TJ2QB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmlJTQi4EL%2Fv%2BPc8zEmsxVrQgEkId3n%2FxSY%2F%2FcJI8PAiANjZpRRFoN4YRIRG1PLVDSxQZMjYWX9oOR15GXwXACJCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMG2GJ8BlL0ZmmBvzPKtwDU42TR%2FIsw0PMtr9y5BSnYE8YkX2aMhgKvGT2v1KyWQLe5JkDpFNVTmhUcvHIYIdkbEYTIMftc%2B6e%2Bb8DG%2Fk6H21A7VY6v20dqBC2HWP3F3go6eki5iEen%2FV3%2FqUiXD0iieRLXBxy532%2BYR%2BGzPFjtA1q3Ft8gqkxTxZIsPFeHY1%2BABhI9rojQuywuU946Ab0HF62%2FaFIZbxchwhKM0%2FxmlvE045YYgqCUuApcMwfmce9yWEC946rom0g4bNXsN1Dmvd29iFwGD5vdpkUsgSWpympTzjEOlJh9ac0qrpglt5swNZNbKd%2F39t3dHWgu8F1GLBADix5s70H5NX25QrdFvPUdpB8CjGzd89YT0h4mnYGBQp4tHwytRQjiSniS0GdK684XbB3ROci3Md3KQ38IU1QOSiHhKQXSXrxngFMZ99OARyKw4yDSoEDix6WOKnWpV5TJw1NGFlGqTRi8hz8PjtxnwaPbTkhZS%2BNNue%2BnmhLxn1KKXrGpzpAQncPFRGM%2FI7XgLoBJcJ47a2K6QciPabAZmzVn5j2zUUpXlWIFDieVo3HxvQykW7GoXLJZdUrsP6L%2FYrsuotD7Dl2sx4IKIi9jvEEf1nfPWB6rAtM8ZDnpmvCyi9Tvir%2BUwAw%2B%2BLyvwY6pgG0lt0ZmDWBvSesn%2F2%2BZBZkXKsu%2FcFnGhApFKO5MM4XBqwUi9doemVmVfLmkq3Jp02KzJKXbU8alzp0ZTgNZvQo5NOUOHlmPKWKzNZv6n6S1O4LOikM%2FobTq7kqEWzNDuDaVhXAIny7%2BLSMJ%2FDu5ElgllFc8ehDdgC6wh0UzyUXpN8yrJm4OySV57fvEaWM3K8zF%2FwebT4WeLrHBEdJEDD%2FpT8uyjxM&X-Amz-Signature=378ef23586012c1cc9b5265b32e7b466598029876921e7949c735efba0243f09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2TJ2QB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmlJTQi4EL%2Fv%2BPc8zEmsxVrQgEkId3n%2FxSY%2F%2FcJI8PAiANjZpRRFoN4YRIRG1PLVDSxQZMjYWX9oOR15GXwXACJCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMG2GJ8BlL0ZmmBvzPKtwDU42TR%2FIsw0PMtr9y5BSnYE8YkX2aMhgKvGT2v1KyWQLe5JkDpFNVTmhUcvHIYIdkbEYTIMftc%2B6e%2Bb8DG%2Fk6H21A7VY6v20dqBC2HWP3F3go6eki5iEen%2FV3%2FqUiXD0iieRLXBxy532%2BYR%2BGzPFjtA1q3Ft8gqkxTxZIsPFeHY1%2BABhI9rojQuywuU946Ab0HF62%2FaFIZbxchwhKM0%2FxmlvE045YYgqCUuApcMwfmce9yWEC946rom0g4bNXsN1Dmvd29iFwGD5vdpkUsgSWpympTzjEOlJh9ac0qrpglt5swNZNbKd%2F39t3dHWgu8F1GLBADix5s70H5NX25QrdFvPUdpB8CjGzd89YT0h4mnYGBQp4tHwytRQjiSniS0GdK684XbB3ROci3Md3KQ38IU1QOSiHhKQXSXrxngFMZ99OARyKw4yDSoEDix6WOKnWpV5TJw1NGFlGqTRi8hz8PjtxnwaPbTkhZS%2BNNue%2BnmhLxn1KKXrGpzpAQncPFRGM%2FI7XgLoBJcJ47a2K6QciPabAZmzVn5j2zUUpXlWIFDieVo3HxvQykW7GoXLJZdUrsP6L%2FYrsuotD7Dl2sx4IKIi9jvEEf1nfPWB6rAtM8ZDnpmvCyi9Tvir%2BUwAw%2B%2BLyvwY6pgG0lt0ZmDWBvSesn%2F2%2BZBZkXKsu%2FcFnGhApFKO5MM4XBqwUi9doemVmVfLmkq3Jp02KzJKXbU8alzp0ZTgNZvQo5NOUOHlmPKWKzNZv6n6S1O4LOikM%2FobTq7kqEWzNDuDaVhXAIny7%2BLSMJ%2FDu5ElgllFc8ehDdgC6wh0UzyUXpN8yrJm4OySV57fvEaWM3K8zF%2FwebT4WeLrHBEdJEDD%2FpT8uyjxM&X-Amz-Signature=84c2e2108f617a2f87bfd23b14d47e1b85c9a34316c47949f3e8aa615a4f4d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2TJ2QB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmlJTQi4EL%2Fv%2BPc8zEmsxVrQgEkId3n%2FxSY%2F%2FcJI8PAiANjZpRRFoN4YRIRG1PLVDSxQZMjYWX9oOR15GXwXACJCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMG2GJ8BlL0ZmmBvzPKtwDU42TR%2FIsw0PMtr9y5BSnYE8YkX2aMhgKvGT2v1KyWQLe5JkDpFNVTmhUcvHIYIdkbEYTIMftc%2B6e%2Bb8DG%2Fk6H21A7VY6v20dqBC2HWP3F3go6eki5iEen%2FV3%2FqUiXD0iieRLXBxy532%2BYR%2BGzPFjtA1q3Ft8gqkxTxZIsPFeHY1%2BABhI9rojQuywuU946Ab0HF62%2FaFIZbxchwhKM0%2FxmlvE045YYgqCUuApcMwfmce9yWEC946rom0g4bNXsN1Dmvd29iFwGD5vdpkUsgSWpympTzjEOlJh9ac0qrpglt5swNZNbKd%2F39t3dHWgu8F1GLBADix5s70H5NX25QrdFvPUdpB8CjGzd89YT0h4mnYGBQp4tHwytRQjiSniS0GdK684XbB3ROci3Md3KQ38IU1QOSiHhKQXSXrxngFMZ99OARyKw4yDSoEDix6WOKnWpV5TJw1NGFlGqTRi8hz8PjtxnwaPbTkhZS%2BNNue%2BnmhLxn1KKXrGpzpAQncPFRGM%2FI7XgLoBJcJ47a2K6QciPabAZmzVn5j2zUUpXlWIFDieVo3HxvQykW7GoXLJZdUrsP6L%2FYrsuotD7Dl2sx4IKIi9jvEEf1nfPWB6rAtM8ZDnpmvCyi9Tvir%2BUwAw%2B%2BLyvwY6pgG0lt0ZmDWBvSesn%2F2%2BZBZkXKsu%2FcFnGhApFKO5MM4XBqwUi9doemVmVfLmkq3Jp02KzJKXbU8alzp0ZTgNZvQo5NOUOHlmPKWKzNZv6n6S1O4LOikM%2FobTq7kqEWzNDuDaVhXAIny7%2BLSMJ%2FDu5ElgllFc8ehDdgC6wh0UzyUXpN8yrJm4OySV57fvEaWM3K8zF%2FwebT4WeLrHBEdJEDD%2FpT8uyjxM&X-Amz-Signature=eed71e6d3437745c7d86e289e5b944e7f9fb89a980528cc2ea6c2f0fe28132ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2TJ2QB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmlJTQi4EL%2Fv%2BPc8zEmsxVrQgEkId3n%2FxSY%2F%2FcJI8PAiANjZpRRFoN4YRIRG1PLVDSxQZMjYWX9oOR15GXwXACJCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMG2GJ8BlL0ZmmBvzPKtwDU42TR%2FIsw0PMtr9y5BSnYE8YkX2aMhgKvGT2v1KyWQLe5JkDpFNVTmhUcvHIYIdkbEYTIMftc%2B6e%2Bb8DG%2Fk6H21A7VY6v20dqBC2HWP3F3go6eki5iEen%2FV3%2FqUiXD0iieRLXBxy532%2BYR%2BGzPFjtA1q3Ft8gqkxTxZIsPFeHY1%2BABhI9rojQuywuU946Ab0HF62%2FaFIZbxchwhKM0%2FxmlvE045YYgqCUuApcMwfmce9yWEC946rom0g4bNXsN1Dmvd29iFwGD5vdpkUsgSWpympTzjEOlJh9ac0qrpglt5swNZNbKd%2F39t3dHWgu8F1GLBADix5s70H5NX25QrdFvPUdpB8CjGzd89YT0h4mnYGBQp4tHwytRQjiSniS0GdK684XbB3ROci3Md3KQ38IU1QOSiHhKQXSXrxngFMZ99OARyKw4yDSoEDix6WOKnWpV5TJw1NGFlGqTRi8hz8PjtxnwaPbTkhZS%2BNNue%2BnmhLxn1KKXrGpzpAQncPFRGM%2FI7XgLoBJcJ47a2K6QciPabAZmzVn5j2zUUpXlWIFDieVo3HxvQykW7GoXLJZdUrsP6L%2FYrsuotD7Dl2sx4IKIi9jvEEf1nfPWB6rAtM8ZDnpmvCyi9Tvir%2BUwAw%2B%2BLyvwY6pgG0lt0ZmDWBvSesn%2F2%2BZBZkXKsu%2FcFnGhApFKO5MM4XBqwUi9doemVmVfLmkq3Jp02KzJKXbU8alzp0ZTgNZvQo5NOUOHlmPKWKzNZv6n6S1O4LOikM%2FobTq7kqEWzNDuDaVhXAIny7%2BLSMJ%2FDu5ElgllFc8ehDdgC6wh0UzyUXpN8yrJm4OySV57fvEaWM3K8zF%2FwebT4WeLrHBEdJEDD%2FpT8uyjxM&X-Amz-Signature=f18eb0ac43d0eac2e3605644249a8977d373fdc55825d450f0c5ddc381c5e433&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
