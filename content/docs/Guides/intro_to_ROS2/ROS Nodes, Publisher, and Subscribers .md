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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6LI6NY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGUUvwXHsHgcSqa0jjNrmvSSiBp2yvH6c0NBGUSqaDYeAiAJpRK2sJZ9pNUHhiAc1yM%2Bj4gFGCw4u9Zm1YTXpDMBhir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMRHYMMkZGxXjx9Sk%2FKtwD8f8eSmxqUQrtF0ORupo0ppVkncHJN4Xojb5yBX9Beq2Fmxe6hH6s2CKTZRaUp7eJmYd43DQ3CTyxOlrJD0WBiFKLKzKUZrvvb5xfbDhRoVsNbA9jmOPY%2BG1NQCWCXVC9YCShNZW3l351hvDRNNstAGCSi0CiapfRs%2Bj%2BW0OIQq435e3Zo8tkbMtpijZdVXD1RBxBZ84lJMawyQdiE%2FALjZcO%2BEDsJXuXd0czOR48KaM0yWCf05iRwVbOroOQHKGFlejyRcWipoumKLiEbO5ePbBMN7PYpvxMGK2k9kd174vW7UkVv%2FRxqcfK2dMfESoRdiLiLkWq76%2B4HJCPEyT05E6CrY%2F51ILaAumneeiYyKitRs4rbrjYH9ltrtfcWEGI8bg7SUOZeukrQp1MpfBVc%2FtJvQU6qeHXaaP2B9qlhoG%2Bu6lLrlHwS11SU5FlDtG%2FkB%2F2seOS2l5kI379TtkGzXdBPPi8FiVrbkvhL7%2BD1xA4m64eVfCOP3wmMAV9rOTWzAMmKgiTl%2BQKZj5m%2FqeYoXX9Bn8OTCz4ReG9SHT%2B7eaBIbTOpb4E3HJg5RYwvE5sFl%2FHDOXT5HCBBaYyTwsUW3TTGHH5an%2BbhfLw%2FaeGXYeQ%2BqciSM1iZ3Z0mzkwwp3ExAY6pgGHgd%2B6YIUuyMtytaqO6M2hgm7IIYypZNoxUsZvaSwuyt4jHIAl3xlvymqNKXr8wr9a8PXxJ45lX0p2yKZrjpJVCd7T4nTvvyd6ufKaYz%2FLkS7x3ThkMQdiTLnt1h5F3jyFZ5N%2Bak1K99ZerNaM09wXz7pS64TMD72tLbqr1WBiDB2%2FEEZH4AqTkFA6QhGnlqIehmce%2BnYAs0KYBYot0DgWHSDsL8Io&X-Amz-Signature=78fe5a45b5bafc121db9b4553ec0fab640263e9c127ec1c2136bf5d5b711f606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6LI6NY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGUUvwXHsHgcSqa0jjNrmvSSiBp2yvH6c0NBGUSqaDYeAiAJpRK2sJZ9pNUHhiAc1yM%2Bj4gFGCw4u9Zm1YTXpDMBhir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMRHYMMkZGxXjx9Sk%2FKtwD8f8eSmxqUQrtF0ORupo0ppVkncHJN4Xojb5yBX9Beq2Fmxe6hH6s2CKTZRaUp7eJmYd43DQ3CTyxOlrJD0WBiFKLKzKUZrvvb5xfbDhRoVsNbA9jmOPY%2BG1NQCWCXVC9YCShNZW3l351hvDRNNstAGCSi0CiapfRs%2Bj%2BW0OIQq435e3Zo8tkbMtpijZdVXD1RBxBZ84lJMawyQdiE%2FALjZcO%2BEDsJXuXd0czOR48KaM0yWCf05iRwVbOroOQHKGFlejyRcWipoumKLiEbO5ePbBMN7PYpvxMGK2k9kd174vW7UkVv%2FRxqcfK2dMfESoRdiLiLkWq76%2B4HJCPEyT05E6CrY%2F51ILaAumneeiYyKitRs4rbrjYH9ltrtfcWEGI8bg7SUOZeukrQp1MpfBVc%2FtJvQU6qeHXaaP2B9qlhoG%2Bu6lLrlHwS11SU5FlDtG%2FkB%2F2seOS2l5kI379TtkGzXdBPPi8FiVrbkvhL7%2BD1xA4m64eVfCOP3wmMAV9rOTWzAMmKgiTl%2BQKZj5m%2FqeYoXX9Bn8OTCz4ReG9SHT%2B7eaBIbTOpb4E3HJg5RYwvE5sFl%2FHDOXT5HCBBaYyTwsUW3TTGHH5an%2BbhfLw%2FaeGXYeQ%2BqciSM1iZ3Z0mzkwwp3ExAY6pgGHgd%2B6YIUuyMtytaqO6M2hgm7IIYypZNoxUsZvaSwuyt4jHIAl3xlvymqNKXr8wr9a8PXxJ45lX0p2yKZrjpJVCd7T4nTvvyd6ufKaYz%2FLkS7x3ThkMQdiTLnt1h5F3jyFZ5N%2Bak1K99ZerNaM09wXz7pS64TMD72tLbqr1WBiDB2%2FEEZH4AqTkFA6QhGnlqIehmce%2BnYAs0KYBYot0DgWHSDsL8Io&X-Amz-Signature=65d24f993474294e4a5571aed2d0b06b19d59755eba8b26f44547b80378486ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6LI6NY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGUUvwXHsHgcSqa0jjNrmvSSiBp2yvH6c0NBGUSqaDYeAiAJpRK2sJZ9pNUHhiAc1yM%2Bj4gFGCw4u9Zm1YTXpDMBhir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMRHYMMkZGxXjx9Sk%2FKtwD8f8eSmxqUQrtF0ORupo0ppVkncHJN4Xojb5yBX9Beq2Fmxe6hH6s2CKTZRaUp7eJmYd43DQ3CTyxOlrJD0WBiFKLKzKUZrvvb5xfbDhRoVsNbA9jmOPY%2BG1NQCWCXVC9YCShNZW3l351hvDRNNstAGCSi0CiapfRs%2Bj%2BW0OIQq435e3Zo8tkbMtpijZdVXD1RBxBZ84lJMawyQdiE%2FALjZcO%2BEDsJXuXd0czOR48KaM0yWCf05iRwVbOroOQHKGFlejyRcWipoumKLiEbO5ePbBMN7PYpvxMGK2k9kd174vW7UkVv%2FRxqcfK2dMfESoRdiLiLkWq76%2B4HJCPEyT05E6CrY%2F51ILaAumneeiYyKitRs4rbrjYH9ltrtfcWEGI8bg7SUOZeukrQp1MpfBVc%2FtJvQU6qeHXaaP2B9qlhoG%2Bu6lLrlHwS11SU5FlDtG%2FkB%2F2seOS2l5kI379TtkGzXdBPPi8FiVrbkvhL7%2BD1xA4m64eVfCOP3wmMAV9rOTWzAMmKgiTl%2BQKZj5m%2FqeYoXX9Bn8OTCz4ReG9SHT%2B7eaBIbTOpb4E3HJg5RYwvE5sFl%2FHDOXT5HCBBaYyTwsUW3TTGHH5an%2BbhfLw%2FaeGXYeQ%2BqciSM1iZ3Z0mzkwwp3ExAY6pgGHgd%2B6YIUuyMtytaqO6M2hgm7IIYypZNoxUsZvaSwuyt4jHIAl3xlvymqNKXr8wr9a8PXxJ45lX0p2yKZrjpJVCd7T4nTvvyd6ufKaYz%2FLkS7x3ThkMQdiTLnt1h5F3jyFZ5N%2Bak1K99ZerNaM09wXz7pS64TMD72tLbqr1WBiDB2%2FEEZH4AqTkFA6QhGnlqIehmce%2BnYAs0KYBYot0DgWHSDsL8Io&X-Amz-Signature=9408e18eee4bd6307c15650d5c3fe698a2da27a877de81145ea49ead7ff12e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6LI6NY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGUUvwXHsHgcSqa0jjNrmvSSiBp2yvH6c0NBGUSqaDYeAiAJpRK2sJZ9pNUHhiAc1yM%2Bj4gFGCw4u9Zm1YTXpDMBhir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMRHYMMkZGxXjx9Sk%2FKtwD8f8eSmxqUQrtF0ORupo0ppVkncHJN4Xojb5yBX9Beq2Fmxe6hH6s2CKTZRaUp7eJmYd43DQ3CTyxOlrJD0WBiFKLKzKUZrvvb5xfbDhRoVsNbA9jmOPY%2BG1NQCWCXVC9YCShNZW3l351hvDRNNstAGCSi0CiapfRs%2Bj%2BW0OIQq435e3Zo8tkbMtpijZdVXD1RBxBZ84lJMawyQdiE%2FALjZcO%2BEDsJXuXd0czOR48KaM0yWCf05iRwVbOroOQHKGFlejyRcWipoumKLiEbO5ePbBMN7PYpvxMGK2k9kd174vW7UkVv%2FRxqcfK2dMfESoRdiLiLkWq76%2B4HJCPEyT05E6CrY%2F51ILaAumneeiYyKitRs4rbrjYH9ltrtfcWEGI8bg7SUOZeukrQp1MpfBVc%2FtJvQU6qeHXaaP2B9qlhoG%2Bu6lLrlHwS11SU5FlDtG%2FkB%2F2seOS2l5kI379TtkGzXdBPPi8FiVrbkvhL7%2BD1xA4m64eVfCOP3wmMAV9rOTWzAMmKgiTl%2BQKZj5m%2FqeYoXX9Bn8OTCz4ReG9SHT%2B7eaBIbTOpb4E3HJg5RYwvE5sFl%2FHDOXT5HCBBaYyTwsUW3TTGHH5an%2BbhfLw%2FaeGXYeQ%2BqciSM1iZ3Z0mzkwwp3ExAY6pgGHgd%2B6YIUuyMtytaqO6M2hgm7IIYypZNoxUsZvaSwuyt4jHIAl3xlvymqNKXr8wr9a8PXxJ45lX0p2yKZrjpJVCd7T4nTvvyd6ufKaYz%2FLkS7x3ThkMQdiTLnt1h5F3jyFZ5N%2Bak1K99ZerNaM09wXz7pS64TMD72tLbqr1WBiDB2%2FEEZH4AqTkFA6QhGnlqIehmce%2BnYAs0KYBYot0DgWHSDsL8Io&X-Amz-Signature=32772568f5763dfef01b3b630e168cb39e1e9acf53a46e4010fd070adcc14289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6LI6NY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGUUvwXHsHgcSqa0jjNrmvSSiBp2yvH6c0NBGUSqaDYeAiAJpRK2sJZ9pNUHhiAc1yM%2Bj4gFGCw4u9Zm1YTXpDMBhir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMRHYMMkZGxXjx9Sk%2FKtwD8f8eSmxqUQrtF0ORupo0ppVkncHJN4Xojb5yBX9Beq2Fmxe6hH6s2CKTZRaUp7eJmYd43DQ3CTyxOlrJD0WBiFKLKzKUZrvvb5xfbDhRoVsNbA9jmOPY%2BG1NQCWCXVC9YCShNZW3l351hvDRNNstAGCSi0CiapfRs%2Bj%2BW0OIQq435e3Zo8tkbMtpijZdVXD1RBxBZ84lJMawyQdiE%2FALjZcO%2BEDsJXuXd0czOR48KaM0yWCf05iRwVbOroOQHKGFlejyRcWipoumKLiEbO5ePbBMN7PYpvxMGK2k9kd174vW7UkVv%2FRxqcfK2dMfESoRdiLiLkWq76%2B4HJCPEyT05E6CrY%2F51ILaAumneeiYyKitRs4rbrjYH9ltrtfcWEGI8bg7SUOZeukrQp1MpfBVc%2FtJvQU6qeHXaaP2B9qlhoG%2Bu6lLrlHwS11SU5FlDtG%2FkB%2F2seOS2l5kI379TtkGzXdBPPi8FiVrbkvhL7%2BD1xA4m64eVfCOP3wmMAV9rOTWzAMmKgiTl%2BQKZj5m%2FqeYoXX9Bn8OTCz4ReG9SHT%2B7eaBIbTOpb4E3HJg5RYwvE5sFl%2FHDOXT5HCBBaYyTwsUW3TTGHH5an%2BbhfLw%2FaeGXYeQ%2BqciSM1iZ3Z0mzkwwp3ExAY6pgGHgd%2B6YIUuyMtytaqO6M2hgm7IIYypZNoxUsZvaSwuyt4jHIAl3xlvymqNKXr8wr9a8PXxJ45lX0p2yKZrjpJVCd7T4nTvvyd6ufKaYz%2FLkS7x3ThkMQdiTLnt1h5F3jyFZ5N%2Bak1K99ZerNaM09wXz7pS64TMD72tLbqr1WBiDB2%2FEEZH4AqTkFA6QhGnlqIehmce%2BnYAs0KYBYot0DgWHSDsL8Io&X-Amz-Signature=fcc3bacd7d4945e70071d0b66daa85f4da4a7756f3cf4a4d892ce6c8d662b502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6LI6NY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGUUvwXHsHgcSqa0jjNrmvSSiBp2yvH6c0NBGUSqaDYeAiAJpRK2sJZ9pNUHhiAc1yM%2Bj4gFGCw4u9Zm1YTXpDMBhir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMRHYMMkZGxXjx9Sk%2FKtwD8f8eSmxqUQrtF0ORupo0ppVkncHJN4Xojb5yBX9Beq2Fmxe6hH6s2CKTZRaUp7eJmYd43DQ3CTyxOlrJD0WBiFKLKzKUZrvvb5xfbDhRoVsNbA9jmOPY%2BG1NQCWCXVC9YCShNZW3l351hvDRNNstAGCSi0CiapfRs%2Bj%2BW0OIQq435e3Zo8tkbMtpijZdVXD1RBxBZ84lJMawyQdiE%2FALjZcO%2BEDsJXuXd0czOR48KaM0yWCf05iRwVbOroOQHKGFlejyRcWipoumKLiEbO5ePbBMN7PYpvxMGK2k9kd174vW7UkVv%2FRxqcfK2dMfESoRdiLiLkWq76%2B4HJCPEyT05E6CrY%2F51ILaAumneeiYyKitRs4rbrjYH9ltrtfcWEGI8bg7SUOZeukrQp1MpfBVc%2FtJvQU6qeHXaaP2B9qlhoG%2Bu6lLrlHwS11SU5FlDtG%2FkB%2F2seOS2l5kI379TtkGzXdBPPi8FiVrbkvhL7%2BD1xA4m64eVfCOP3wmMAV9rOTWzAMmKgiTl%2BQKZj5m%2FqeYoXX9Bn8OTCz4ReG9SHT%2B7eaBIbTOpb4E3HJg5RYwvE5sFl%2FHDOXT5HCBBaYyTwsUW3TTGHH5an%2BbhfLw%2FaeGXYeQ%2BqciSM1iZ3Z0mzkwwp3ExAY6pgGHgd%2B6YIUuyMtytaqO6M2hgm7IIYypZNoxUsZvaSwuyt4jHIAl3xlvymqNKXr8wr9a8PXxJ45lX0p2yKZrjpJVCd7T4nTvvyd6ufKaYz%2FLkS7x3ThkMQdiTLnt1h5F3jyFZ5N%2Bak1K99ZerNaM09wXz7pS64TMD72tLbqr1WBiDB2%2FEEZH4AqTkFA6QhGnlqIehmce%2BnYAs0KYBYot0DgWHSDsL8Io&X-Amz-Signature=73079917d622f278a0f584d4cd4029db37a532629fa0636a7b005be91a6fa877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6LI6NY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGUUvwXHsHgcSqa0jjNrmvSSiBp2yvH6c0NBGUSqaDYeAiAJpRK2sJZ9pNUHhiAc1yM%2Bj4gFGCw4u9Zm1YTXpDMBhir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMRHYMMkZGxXjx9Sk%2FKtwD8f8eSmxqUQrtF0ORupo0ppVkncHJN4Xojb5yBX9Beq2Fmxe6hH6s2CKTZRaUp7eJmYd43DQ3CTyxOlrJD0WBiFKLKzKUZrvvb5xfbDhRoVsNbA9jmOPY%2BG1NQCWCXVC9YCShNZW3l351hvDRNNstAGCSi0CiapfRs%2Bj%2BW0OIQq435e3Zo8tkbMtpijZdVXD1RBxBZ84lJMawyQdiE%2FALjZcO%2BEDsJXuXd0czOR48KaM0yWCf05iRwVbOroOQHKGFlejyRcWipoumKLiEbO5ePbBMN7PYpvxMGK2k9kd174vW7UkVv%2FRxqcfK2dMfESoRdiLiLkWq76%2B4HJCPEyT05E6CrY%2F51ILaAumneeiYyKitRs4rbrjYH9ltrtfcWEGI8bg7SUOZeukrQp1MpfBVc%2FtJvQU6qeHXaaP2B9qlhoG%2Bu6lLrlHwS11SU5FlDtG%2FkB%2F2seOS2l5kI379TtkGzXdBPPi8FiVrbkvhL7%2BD1xA4m64eVfCOP3wmMAV9rOTWzAMmKgiTl%2BQKZj5m%2FqeYoXX9Bn8OTCz4ReG9SHT%2B7eaBIbTOpb4E3HJg5RYwvE5sFl%2FHDOXT5HCBBaYyTwsUW3TTGHH5an%2BbhfLw%2FaeGXYeQ%2BqciSM1iZ3Z0mzkwwp3ExAY6pgGHgd%2B6YIUuyMtytaqO6M2hgm7IIYypZNoxUsZvaSwuyt4jHIAl3xlvymqNKXr8wr9a8PXxJ45lX0p2yKZrjpJVCd7T4nTvvyd6ufKaYz%2FLkS7x3ThkMQdiTLnt1h5F3jyFZ5N%2Bak1K99ZerNaM09wXz7pS64TMD72tLbqr1WBiDB2%2FEEZH4AqTkFA6QhGnlqIehmce%2BnYAs0KYBYot0DgWHSDsL8Io&X-Amz-Signature=a59c3af5b5d9258d790e72807a20101b558bc0b0d4c91d1a2d827b11ef656a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6LI6NY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGUUvwXHsHgcSqa0jjNrmvSSiBp2yvH6c0NBGUSqaDYeAiAJpRK2sJZ9pNUHhiAc1yM%2Bj4gFGCw4u9Zm1YTXpDMBhir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMRHYMMkZGxXjx9Sk%2FKtwD8f8eSmxqUQrtF0ORupo0ppVkncHJN4Xojb5yBX9Beq2Fmxe6hH6s2CKTZRaUp7eJmYd43DQ3CTyxOlrJD0WBiFKLKzKUZrvvb5xfbDhRoVsNbA9jmOPY%2BG1NQCWCXVC9YCShNZW3l351hvDRNNstAGCSi0CiapfRs%2Bj%2BW0OIQq435e3Zo8tkbMtpijZdVXD1RBxBZ84lJMawyQdiE%2FALjZcO%2BEDsJXuXd0czOR48KaM0yWCf05iRwVbOroOQHKGFlejyRcWipoumKLiEbO5ePbBMN7PYpvxMGK2k9kd174vW7UkVv%2FRxqcfK2dMfESoRdiLiLkWq76%2B4HJCPEyT05E6CrY%2F51ILaAumneeiYyKitRs4rbrjYH9ltrtfcWEGI8bg7SUOZeukrQp1MpfBVc%2FtJvQU6qeHXaaP2B9qlhoG%2Bu6lLrlHwS11SU5FlDtG%2FkB%2F2seOS2l5kI379TtkGzXdBPPi8FiVrbkvhL7%2BD1xA4m64eVfCOP3wmMAV9rOTWzAMmKgiTl%2BQKZj5m%2FqeYoXX9Bn8OTCz4ReG9SHT%2B7eaBIbTOpb4E3HJg5RYwvE5sFl%2FHDOXT5HCBBaYyTwsUW3TTGHH5an%2BbhfLw%2FaeGXYeQ%2BqciSM1iZ3Z0mzkwwp3ExAY6pgGHgd%2B6YIUuyMtytaqO6M2hgm7IIYypZNoxUsZvaSwuyt4jHIAl3xlvymqNKXr8wr9a8PXxJ45lX0p2yKZrjpJVCd7T4nTvvyd6ufKaYz%2FLkS7x3ThkMQdiTLnt1h5F3jyFZ5N%2Bak1K99ZerNaM09wXz7pS64TMD72tLbqr1WBiDB2%2FEEZH4AqTkFA6QhGnlqIehmce%2BnYAs0KYBYot0DgWHSDsL8Io&X-Amz-Signature=c942f9a94be4aaa51cd75d1afec5756c2a1088b6b884330adac39258474449a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
