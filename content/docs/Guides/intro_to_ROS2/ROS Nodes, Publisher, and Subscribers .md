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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYW6KAU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1KCtX8OE%2Bwvu5zh4hOMCl7S6BztkyDo1UNfCTXnWY1gIhALIJbqwZOZNKoDZ4T%2BgGFKGwa%2BltwtDONTP3OYBn6LR7KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL5sOBvElhVZEAPuYq3AOU2%2F1aBDJniX2ira7ZpxcfELMxwccJKS3tiUzTuGO3P4pVRo2g3VIzmO2UbhptRxFtwk%2Fn2ObQrfmXRpYHNZjsA%2Bvchhmf1rDybQivHlb1Uosf9F6qzLLZQOjNqWmAEMKkRDrioHXzoz0G6at6gHF5cN%2FtqADcU%2Bqg3cEYx%2FtkRk%2By0nDKgBRG8fS3E1DHzm5JrjI%2Bjy97HGErZfJNfR6YKOnk5JEMdSrmJRpAGSqzGCzp5n%2BdcAuEBJ%2FKAfG%2BPwU6%2FdH9mOd%2Far7ayo30uvhqEELiNJbLLBjDbRxL2twOVrfFIwPhM9XQ0GkHPKtNggs7zLXwGF1YMmY61BAl3bGuaMEh99dNyn%2Fm3Y4%2BNVTLUkrLsx0xVjhrJxEHvjwAkByiRMIdsbWlsn8O2E2tTV%2BJoqTcWEDbmvJ3hbvHFYnqT%2BfCidS4X3RUeHpzC6Rz0oLPmUQjTtPaviVZRYLXcRtrnhLby32C6nKXz1ftLBXPXNSvi8Np%2FtQYfJE7Z9icoCgp%2FXDuykUX%2FIAZPqY9Oinfheu%2F8Y6KSGnYWGwXb62Hr49a%2FfMxRhxWZ2KvLgn%2FDrTQCE%2B2T0X72tTD3AjCCLjlR9iFkEgpi282mlsEUoqSp%2FWt%2F1XjQS5aUCmnNjDOrbXDBjqkAVqzFT6Ue%2Fjm43I9i8q6XkP6CzphGEt5tAIXWZtfxbIZw5s3CAKO56PEKhJDLyQxMHEMU4XkXsojPPC64k0SqLbplUoFsNKFgyx4TgZBPDCZDxPHnbs5uMvs31qMyULnzXFeHYHqtfEtcNHEVNUi%2BfSM6VG%2FkHWesm0whj3MUlsqUIEGZkwe7PdyIQ85WTNqm3dh1X2vDhjvRrFdmvL1bP28Cmpr&X-Amz-Signature=5a036de6bf162a72c97d00ca9bbdc8d6161648eb5b4ccab166c0b41d2c9268c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYW6KAU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1KCtX8OE%2Bwvu5zh4hOMCl7S6BztkyDo1UNfCTXnWY1gIhALIJbqwZOZNKoDZ4T%2BgGFKGwa%2BltwtDONTP3OYBn6LR7KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL5sOBvElhVZEAPuYq3AOU2%2F1aBDJniX2ira7ZpxcfELMxwccJKS3tiUzTuGO3P4pVRo2g3VIzmO2UbhptRxFtwk%2Fn2ObQrfmXRpYHNZjsA%2Bvchhmf1rDybQivHlb1Uosf9F6qzLLZQOjNqWmAEMKkRDrioHXzoz0G6at6gHF5cN%2FtqADcU%2Bqg3cEYx%2FtkRk%2By0nDKgBRG8fS3E1DHzm5JrjI%2Bjy97HGErZfJNfR6YKOnk5JEMdSrmJRpAGSqzGCzp5n%2BdcAuEBJ%2FKAfG%2BPwU6%2FdH9mOd%2Far7ayo30uvhqEELiNJbLLBjDbRxL2twOVrfFIwPhM9XQ0GkHPKtNggs7zLXwGF1YMmY61BAl3bGuaMEh99dNyn%2Fm3Y4%2BNVTLUkrLsx0xVjhrJxEHvjwAkByiRMIdsbWlsn8O2E2tTV%2BJoqTcWEDbmvJ3hbvHFYnqT%2BfCidS4X3RUeHpzC6Rz0oLPmUQjTtPaviVZRYLXcRtrnhLby32C6nKXz1ftLBXPXNSvi8Np%2FtQYfJE7Z9icoCgp%2FXDuykUX%2FIAZPqY9Oinfheu%2F8Y6KSGnYWGwXb62Hr49a%2FfMxRhxWZ2KvLgn%2FDrTQCE%2B2T0X72tTD3AjCCLjlR9iFkEgpi282mlsEUoqSp%2FWt%2F1XjQS5aUCmnNjDOrbXDBjqkAVqzFT6Ue%2Fjm43I9i8q6XkP6CzphGEt5tAIXWZtfxbIZw5s3CAKO56PEKhJDLyQxMHEMU4XkXsojPPC64k0SqLbplUoFsNKFgyx4TgZBPDCZDxPHnbs5uMvs31qMyULnzXFeHYHqtfEtcNHEVNUi%2BfSM6VG%2FkHWesm0whj3MUlsqUIEGZkwe7PdyIQ85WTNqm3dh1X2vDhjvRrFdmvL1bP28Cmpr&X-Amz-Signature=31236c45f62d1314fb4001d79f6cf92917faa157c5a5c962d4311a2d99c5264b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYW6KAU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1KCtX8OE%2Bwvu5zh4hOMCl7S6BztkyDo1UNfCTXnWY1gIhALIJbqwZOZNKoDZ4T%2BgGFKGwa%2BltwtDONTP3OYBn6LR7KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL5sOBvElhVZEAPuYq3AOU2%2F1aBDJniX2ira7ZpxcfELMxwccJKS3tiUzTuGO3P4pVRo2g3VIzmO2UbhptRxFtwk%2Fn2ObQrfmXRpYHNZjsA%2Bvchhmf1rDybQivHlb1Uosf9F6qzLLZQOjNqWmAEMKkRDrioHXzoz0G6at6gHF5cN%2FtqADcU%2Bqg3cEYx%2FtkRk%2By0nDKgBRG8fS3E1DHzm5JrjI%2Bjy97HGErZfJNfR6YKOnk5JEMdSrmJRpAGSqzGCzp5n%2BdcAuEBJ%2FKAfG%2BPwU6%2FdH9mOd%2Far7ayo30uvhqEELiNJbLLBjDbRxL2twOVrfFIwPhM9XQ0GkHPKtNggs7zLXwGF1YMmY61BAl3bGuaMEh99dNyn%2Fm3Y4%2BNVTLUkrLsx0xVjhrJxEHvjwAkByiRMIdsbWlsn8O2E2tTV%2BJoqTcWEDbmvJ3hbvHFYnqT%2BfCidS4X3RUeHpzC6Rz0oLPmUQjTtPaviVZRYLXcRtrnhLby32C6nKXz1ftLBXPXNSvi8Np%2FtQYfJE7Z9icoCgp%2FXDuykUX%2FIAZPqY9Oinfheu%2F8Y6KSGnYWGwXb62Hr49a%2FfMxRhxWZ2KvLgn%2FDrTQCE%2B2T0X72tTD3AjCCLjlR9iFkEgpi282mlsEUoqSp%2FWt%2F1XjQS5aUCmnNjDOrbXDBjqkAVqzFT6Ue%2Fjm43I9i8q6XkP6CzphGEt5tAIXWZtfxbIZw5s3CAKO56PEKhJDLyQxMHEMU4XkXsojPPC64k0SqLbplUoFsNKFgyx4TgZBPDCZDxPHnbs5uMvs31qMyULnzXFeHYHqtfEtcNHEVNUi%2BfSM6VG%2FkHWesm0whj3MUlsqUIEGZkwe7PdyIQ85WTNqm3dh1X2vDhjvRrFdmvL1bP28Cmpr&X-Amz-Signature=10fcef36b74509189f3a2c58ec3005fa26f8ed77c9ec34d1b415aa15da13148b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYW6KAU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1KCtX8OE%2Bwvu5zh4hOMCl7S6BztkyDo1UNfCTXnWY1gIhALIJbqwZOZNKoDZ4T%2BgGFKGwa%2BltwtDONTP3OYBn6LR7KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL5sOBvElhVZEAPuYq3AOU2%2F1aBDJniX2ira7ZpxcfELMxwccJKS3tiUzTuGO3P4pVRo2g3VIzmO2UbhptRxFtwk%2Fn2ObQrfmXRpYHNZjsA%2Bvchhmf1rDybQivHlb1Uosf9F6qzLLZQOjNqWmAEMKkRDrioHXzoz0G6at6gHF5cN%2FtqADcU%2Bqg3cEYx%2FtkRk%2By0nDKgBRG8fS3E1DHzm5JrjI%2Bjy97HGErZfJNfR6YKOnk5JEMdSrmJRpAGSqzGCzp5n%2BdcAuEBJ%2FKAfG%2BPwU6%2FdH9mOd%2Far7ayo30uvhqEELiNJbLLBjDbRxL2twOVrfFIwPhM9XQ0GkHPKtNggs7zLXwGF1YMmY61BAl3bGuaMEh99dNyn%2Fm3Y4%2BNVTLUkrLsx0xVjhrJxEHvjwAkByiRMIdsbWlsn8O2E2tTV%2BJoqTcWEDbmvJ3hbvHFYnqT%2BfCidS4X3RUeHpzC6Rz0oLPmUQjTtPaviVZRYLXcRtrnhLby32C6nKXz1ftLBXPXNSvi8Np%2FtQYfJE7Z9icoCgp%2FXDuykUX%2FIAZPqY9Oinfheu%2F8Y6KSGnYWGwXb62Hr49a%2FfMxRhxWZ2KvLgn%2FDrTQCE%2B2T0X72tTD3AjCCLjlR9iFkEgpi282mlsEUoqSp%2FWt%2F1XjQS5aUCmnNjDOrbXDBjqkAVqzFT6Ue%2Fjm43I9i8q6XkP6CzphGEt5tAIXWZtfxbIZw5s3CAKO56PEKhJDLyQxMHEMU4XkXsojPPC64k0SqLbplUoFsNKFgyx4TgZBPDCZDxPHnbs5uMvs31qMyULnzXFeHYHqtfEtcNHEVNUi%2BfSM6VG%2FkHWesm0whj3MUlsqUIEGZkwe7PdyIQ85WTNqm3dh1X2vDhjvRrFdmvL1bP28Cmpr&X-Amz-Signature=f2072cd781ef46ab233492a297de4ee46c3e0e8d42f9af8535609c1a9b585e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYW6KAU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1KCtX8OE%2Bwvu5zh4hOMCl7S6BztkyDo1UNfCTXnWY1gIhALIJbqwZOZNKoDZ4T%2BgGFKGwa%2BltwtDONTP3OYBn6LR7KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL5sOBvElhVZEAPuYq3AOU2%2F1aBDJniX2ira7ZpxcfELMxwccJKS3tiUzTuGO3P4pVRo2g3VIzmO2UbhptRxFtwk%2Fn2ObQrfmXRpYHNZjsA%2Bvchhmf1rDybQivHlb1Uosf9F6qzLLZQOjNqWmAEMKkRDrioHXzoz0G6at6gHF5cN%2FtqADcU%2Bqg3cEYx%2FtkRk%2By0nDKgBRG8fS3E1DHzm5JrjI%2Bjy97HGErZfJNfR6YKOnk5JEMdSrmJRpAGSqzGCzp5n%2BdcAuEBJ%2FKAfG%2BPwU6%2FdH9mOd%2Far7ayo30uvhqEELiNJbLLBjDbRxL2twOVrfFIwPhM9XQ0GkHPKtNggs7zLXwGF1YMmY61BAl3bGuaMEh99dNyn%2Fm3Y4%2BNVTLUkrLsx0xVjhrJxEHvjwAkByiRMIdsbWlsn8O2E2tTV%2BJoqTcWEDbmvJ3hbvHFYnqT%2BfCidS4X3RUeHpzC6Rz0oLPmUQjTtPaviVZRYLXcRtrnhLby32C6nKXz1ftLBXPXNSvi8Np%2FtQYfJE7Z9icoCgp%2FXDuykUX%2FIAZPqY9Oinfheu%2F8Y6KSGnYWGwXb62Hr49a%2FfMxRhxWZ2KvLgn%2FDrTQCE%2B2T0X72tTD3AjCCLjlR9iFkEgpi282mlsEUoqSp%2FWt%2F1XjQS5aUCmnNjDOrbXDBjqkAVqzFT6Ue%2Fjm43I9i8q6XkP6CzphGEt5tAIXWZtfxbIZw5s3CAKO56PEKhJDLyQxMHEMU4XkXsojPPC64k0SqLbplUoFsNKFgyx4TgZBPDCZDxPHnbs5uMvs31qMyULnzXFeHYHqtfEtcNHEVNUi%2BfSM6VG%2FkHWesm0whj3MUlsqUIEGZkwe7PdyIQ85WTNqm3dh1X2vDhjvRrFdmvL1bP28Cmpr&X-Amz-Signature=04663c52c621a112ad0c8e7cab90100dc72fa72f05dc9c12c11b28b6ac5793cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYW6KAU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1KCtX8OE%2Bwvu5zh4hOMCl7S6BztkyDo1UNfCTXnWY1gIhALIJbqwZOZNKoDZ4T%2BgGFKGwa%2BltwtDONTP3OYBn6LR7KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL5sOBvElhVZEAPuYq3AOU2%2F1aBDJniX2ira7ZpxcfELMxwccJKS3tiUzTuGO3P4pVRo2g3VIzmO2UbhptRxFtwk%2Fn2ObQrfmXRpYHNZjsA%2Bvchhmf1rDybQivHlb1Uosf9F6qzLLZQOjNqWmAEMKkRDrioHXzoz0G6at6gHF5cN%2FtqADcU%2Bqg3cEYx%2FtkRk%2By0nDKgBRG8fS3E1DHzm5JrjI%2Bjy97HGErZfJNfR6YKOnk5JEMdSrmJRpAGSqzGCzp5n%2BdcAuEBJ%2FKAfG%2BPwU6%2FdH9mOd%2Far7ayo30uvhqEELiNJbLLBjDbRxL2twOVrfFIwPhM9XQ0GkHPKtNggs7zLXwGF1YMmY61BAl3bGuaMEh99dNyn%2Fm3Y4%2BNVTLUkrLsx0xVjhrJxEHvjwAkByiRMIdsbWlsn8O2E2tTV%2BJoqTcWEDbmvJ3hbvHFYnqT%2BfCidS4X3RUeHpzC6Rz0oLPmUQjTtPaviVZRYLXcRtrnhLby32C6nKXz1ftLBXPXNSvi8Np%2FtQYfJE7Z9icoCgp%2FXDuykUX%2FIAZPqY9Oinfheu%2F8Y6KSGnYWGwXb62Hr49a%2FfMxRhxWZ2KvLgn%2FDrTQCE%2B2T0X72tTD3AjCCLjlR9iFkEgpi282mlsEUoqSp%2FWt%2F1XjQS5aUCmnNjDOrbXDBjqkAVqzFT6Ue%2Fjm43I9i8q6XkP6CzphGEt5tAIXWZtfxbIZw5s3CAKO56PEKhJDLyQxMHEMU4XkXsojPPC64k0SqLbplUoFsNKFgyx4TgZBPDCZDxPHnbs5uMvs31qMyULnzXFeHYHqtfEtcNHEVNUi%2BfSM6VG%2FkHWesm0whj3MUlsqUIEGZkwe7PdyIQ85WTNqm3dh1X2vDhjvRrFdmvL1bP28Cmpr&X-Amz-Signature=6f6d16be788fea419ce6cc9f549ba0e8b1e42ed05ab8d752ff0a59916f1c35ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYW6KAU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1KCtX8OE%2Bwvu5zh4hOMCl7S6BztkyDo1UNfCTXnWY1gIhALIJbqwZOZNKoDZ4T%2BgGFKGwa%2BltwtDONTP3OYBn6LR7KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL5sOBvElhVZEAPuYq3AOU2%2F1aBDJniX2ira7ZpxcfELMxwccJKS3tiUzTuGO3P4pVRo2g3VIzmO2UbhptRxFtwk%2Fn2ObQrfmXRpYHNZjsA%2Bvchhmf1rDybQivHlb1Uosf9F6qzLLZQOjNqWmAEMKkRDrioHXzoz0G6at6gHF5cN%2FtqADcU%2Bqg3cEYx%2FtkRk%2By0nDKgBRG8fS3E1DHzm5JrjI%2Bjy97HGErZfJNfR6YKOnk5JEMdSrmJRpAGSqzGCzp5n%2BdcAuEBJ%2FKAfG%2BPwU6%2FdH9mOd%2Far7ayo30uvhqEELiNJbLLBjDbRxL2twOVrfFIwPhM9XQ0GkHPKtNggs7zLXwGF1YMmY61BAl3bGuaMEh99dNyn%2Fm3Y4%2BNVTLUkrLsx0xVjhrJxEHvjwAkByiRMIdsbWlsn8O2E2tTV%2BJoqTcWEDbmvJ3hbvHFYnqT%2BfCidS4X3RUeHpzC6Rz0oLPmUQjTtPaviVZRYLXcRtrnhLby32C6nKXz1ftLBXPXNSvi8Np%2FtQYfJE7Z9icoCgp%2FXDuykUX%2FIAZPqY9Oinfheu%2F8Y6KSGnYWGwXb62Hr49a%2FfMxRhxWZ2KvLgn%2FDrTQCE%2B2T0X72tTD3AjCCLjlR9iFkEgpi282mlsEUoqSp%2FWt%2F1XjQS5aUCmnNjDOrbXDBjqkAVqzFT6Ue%2Fjm43I9i8q6XkP6CzphGEt5tAIXWZtfxbIZw5s3CAKO56PEKhJDLyQxMHEMU4XkXsojPPC64k0SqLbplUoFsNKFgyx4TgZBPDCZDxPHnbs5uMvs31qMyULnzXFeHYHqtfEtcNHEVNUi%2BfSM6VG%2FkHWesm0whj3MUlsqUIEGZkwe7PdyIQ85WTNqm3dh1X2vDhjvRrFdmvL1bP28Cmpr&X-Amz-Signature=f166c97d367d81653e6a8fac117b8db246e5a1b353963a0c9bf9b4dcf216840b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYW6KAU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1KCtX8OE%2Bwvu5zh4hOMCl7S6BztkyDo1UNfCTXnWY1gIhALIJbqwZOZNKoDZ4T%2BgGFKGwa%2BltwtDONTP3OYBn6LR7KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL5sOBvElhVZEAPuYq3AOU2%2F1aBDJniX2ira7ZpxcfELMxwccJKS3tiUzTuGO3P4pVRo2g3VIzmO2UbhptRxFtwk%2Fn2ObQrfmXRpYHNZjsA%2Bvchhmf1rDybQivHlb1Uosf9F6qzLLZQOjNqWmAEMKkRDrioHXzoz0G6at6gHF5cN%2FtqADcU%2Bqg3cEYx%2FtkRk%2By0nDKgBRG8fS3E1DHzm5JrjI%2Bjy97HGErZfJNfR6YKOnk5JEMdSrmJRpAGSqzGCzp5n%2BdcAuEBJ%2FKAfG%2BPwU6%2FdH9mOd%2Far7ayo30uvhqEELiNJbLLBjDbRxL2twOVrfFIwPhM9XQ0GkHPKtNggs7zLXwGF1YMmY61BAl3bGuaMEh99dNyn%2Fm3Y4%2BNVTLUkrLsx0xVjhrJxEHvjwAkByiRMIdsbWlsn8O2E2tTV%2BJoqTcWEDbmvJ3hbvHFYnqT%2BfCidS4X3RUeHpzC6Rz0oLPmUQjTtPaviVZRYLXcRtrnhLby32C6nKXz1ftLBXPXNSvi8Np%2FtQYfJE7Z9icoCgp%2FXDuykUX%2FIAZPqY9Oinfheu%2F8Y6KSGnYWGwXb62Hr49a%2FfMxRhxWZ2KvLgn%2FDrTQCE%2B2T0X72tTD3AjCCLjlR9iFkEgpi282mlsEUoqSp%2FWt%2F1XjQS5aUCmnNjDOrbXDBjqkAVqzFT6Ue%2Fjm43I9i8q6XkP6CzphGEt5tAIXWZtfxbIZw5s3CAKO56PEKhJDLyQxMHEMU4XkXsojPPC64k0SqLbplUoFsNKFgyx4TgZBPDCZDxPHnbs5uMvs31qMyULnzXFeHYHqtfEtcNHEVNUi%2BfSM6VG%2FkHWesm0whj3MUlsqUIEGZkwe7PdyIQ85WTNqm3dh1X2vDhjvRrFdmvL1bP28Cmpr&X-Amz-Signature=f269d882e5e80bb499fef3c5ace26d481fd22de21c33f58c174a03cbed98af26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
