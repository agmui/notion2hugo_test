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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGF3DZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD4gYxQCZtGUeDBbAlPf2iSTnfg2yH2pa6hmlyHu8i4xQIhAPDtvb0Uwh7h3%2FjUV16gMdB9KsX0cZJWmdLuBELLBx1rKv8DCBoQABoMNjM3NDIzMTgzODA1IgzQkmCC9uotFWdWCjcq3AMtIx9oh6knotzQGOHbFWqY0bPBPY%2Bcwy0Ucyb3PiKy0nIKS%2FiQA8CHqR2nXXhHNdRd2OCUeDD9%2FfSD13Pp5cACPFfMLWr6QMPLdNHQDyrTlDO9NeV0nYF9%2FpBJeZA%2BCAI13vf4u4XKTaGr35wTVuo0V7REsPemnbpJrnuhyje2nt73is1v7YpD7VgmKADWkX8oWH4QrPeGHCGHT1p3njXXLa%2BqlwjZcKfZK1hp11jcAmIG8BFBYXcFupLNNwlSjkkbgmr5CuLativwYxZ5Xz0IU8Pbji%2FIIQDSMFJl45eT00K8u7G26GVc1D6L3AgQvUGJuir6dn1O%2BkyYf6kj%2B9FEHwb%2F0L8k4quu3icFWsLgIR8GgijtfUZv5LOx4O4V2Q6funLMC03TqcO9mUA8v6x8gzYH0BsB4ugqyZts03ntLHiDWsOmIwfBjgOsmoenQET%2FzZYP2ZvRt2am%2FSg224BOF7w3zWQbCgcdfK1Gwl3JLXjquNkqa7wG4ss9i%2Btrfy4FNkWVXjARhXk1DkHa1lIDlt2rxQByVC8d8ZSB2Ao0gti0THwJoLV0uwhmM3dyS4uLsJde%2BO%2BxG0%2BTSG8GIxJqprEoA069b%2FedNr8CSnwbsarHJDZLXbZFWSHUZjCo5prDBjqkAYYVHCePmY2JiDsGUzHq1ZfZ81IJVcMh7PmWgjtYw%2Bb7DnR%2FQh8YNTLcoQSeK6FZYTlrZvc6Gmq%2B%2FIqWO8n7SbTSQR2TpSnohGY5jORop8N6fPusqZk%2BEZjdqqcuSpx0MQVWcXB8YgaAKSnFx%2BMmaUSdlsKJ3OY7fU%2F01CGzoq7avAccYS5e%2FgzzNFB55%2BRyI6MEEdIxWxW3Qq1Rm%2F99GkiGYvC3&X-Amz-Signature=5f8911596a359c55a4b8f7a7c2fdfd792e911156aeeb7e89c02c2681a5aae3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGF3DZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD4gYxQCZtGUeDBbAlPf2iSTnfg2yH2pa6hmlyHu8i4xQIhAPDtvb0Uwh7h3%2FjUV16gMdB9KsX0cZJWmdLuBELLBx1rKv8DCBoQABoMNjM3NDIzMTgzODA1IgzQkmCC9uotFWdWCjcq3AMtIx9oh6knotzQGOHbFWqY0bPBPY%2Bcwy0Ucyb3PiKy0nIKS%2FiQA8CHqR2nXXhHNdRd2OCUeDD9%2FfSD13Pp5cACPFfMLWr6QMPLdNHQDyrTlDO9NeV0nYF9%2FpBJeZA%2BCAI13vf4u4XKTaGr35wTVuo0V7REsPemnbpJrnuhyje2nt73is1v7YpD7VgmKADWkX8oWH4QrPeGHCGHT1p3njXXLa%2BqlwjZcKfZK1hp11jcAmIG8BFBYXcFupLNNwlSjkkbgmr5CuLativwYxZ5Xz0IU8Pbji%2FIIQDSMFJl45eT00K8u7G26GVc1D6L3AgQvUGJuir6dn1O%2BkyYf6kj%2B9FEHwb%2F0L8k4quu3icFWsLgIR8GgijtfUZv5LOx4O4V2Q6funLMC03TqcO9mUA8v6x8gzYH0BsB4ugqyZts03ntLHiDWsOmIwfBjgOsmoenQET%2FzZYP2ZvRt2am%2FSg224BOF7w3zWQbCgcdfK1Gwl3JLXjquNkqa7wG4ss9i%2Btrfy4FNkWVXjARhXk1DkHa1lIDlt2rxQByVC8d8ZSB2Ao0gti0THwJoLV0uwhmM3dyS4uLsJde%2BO%2BxG0%2BTSG8GIxJqprEoA069b%2FedNr8CSnwbsarHJDZLXbZFWSHUZjCo5prDBjqkAYYVHCePmY2JiDsGUzHq1ZfZ81IJVcMh7PmWgjtYw%2Bb7DnR%2FQh8YNTLcoQSeK6FZYTlrZvc6Gmq%2B%2FIqWO8n7SbTSQR2TpSnohGY5jORop8N6fPusqZk%2BEZjdqqcuSpx0MQVWcXB8YgaAKSnFx%2BMmaUSdlsKJ3OY7fU%2F01CGzoq7avAccYS5e%2FgzzNFB55%2BRyI6MEEdIxWxW3Qq1Rm%2F99GkiGYvC3&X-Amz-Signature=a6b09b1a2eb3fc60075f5c0e7f4a1e4423659ebecbc6329a580575e99c08a849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGF3DZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD4gYxQCZtGUeDBbAlPf2iSTnfg2yH2pa6hmlyHu8i4xQIhAPDtvb0Uwh7h3%2FjUV16gMdB9KsX0cZJWmdLuBELLBx1rKv8DCBoQABoMNjM3NDIzMTgzODA1IgzQkmCC9uotFWdWCjcq3AMtIx9oh6knotzQGOHbFWqY0bPBPY%2Bcwy0Ucyb3PiKy0nIKS%2FiQA8CHqR2nXXhHNdRd2OCUeDD9%2FfSD13Pp5cACPFfMLWr6QMPLdNHQDyrTlDO9NeV0nYF9%2FpBJeZA%2BCAI13vf4u4XKTaGr35wTVuo0V7REsPemnbpJrnuhyje2nt73is1v7YpD7VgmKADWkX8oWH4QrPeGHCGHT1p3njXXLa%2BqlwjZcKfZK1hp11jcAmIG8BFBYXcFupLNNwlSjkkbgmr5CuLativwYxZ5Xz0IU8Pbji%2FIIQDSMFJl45eT00K8u7G26GVc1D6L3AgQvUGJuir6dn1O%2BkyYf6kj%2B9FEHwb%2F0L8k4quu3icFWsLgIR8GgijtfUZv5LOx4O4V2Q6funLMC03TqcO9mUA8v6x8gzYH0BsB4ugqyZts03ntLHiDWsOmIwfBjgOsmoenQET%2FzZYP2ZvRt2am%2FSg224BOF7w3zWQbCgcdfK1Gwl3JLXjquNkqa7wG4ss9i%2Btrfy4FNkWVXjARhXk1DkHa1lIDlt2rxQByVC8d8ZSB2Ao0gti0THwJoLV0uwhmM3dyS4uLsJde%2BO%2BxG0%2BTSG8GIxJqprEoA069b%2FedNr8CSnwbsarHJDZLXbZFWSHUZjCo5prDBjqkAYYVHCePmY2JiDsGUzHq1ZfZ81IJVcMh7PmWgjtYw%2Bb7DnR%2FQh8YNTLcoQSeK6FZYTlrZvc6Gmq%2B%2FIqWO8n7SbTSQR2TpSnohGY5jORop8N6fPusqZk%2BEZjdqqcuSpx0MQVWcXB8YgaAKSnFx%2BMmaUSdlsKJ3OY7fU%2F01CGzoq7avAccYS5e%2FgzzNFB55%2BRyI6MEEdIxWxW3Qq1Rm%2F99GkiGYvC3&X-Amz-Signature=d47cbf0450d2a696e24c7c9c0967534a1bfb5eb9b77fb74c1af8e098845dd17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGF3DZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD4gYxQCZtGUeDBbAlPf2iSTnfg2yH2pa6hmlyHu8i4xQIhAPDtvb0Uwh7h3%2FjUV16gMdB9KsX0cZJWmdLuBELLBx1rKv8DCBoQABoMNjM3NDIzMTgzODA1IgzQkmCC9uotFWdWCjcq3AMtIx9oh6knotzQGOHbFWqY0bPBPY%2Bcwy0Ucyb3PiKy0nIKS%2FiQA8CHqR2nXXhHNdRd2OCUeDD9%2FfSD13Pp5cACPFfMLWr6QMPLdNHQDyrTlDO9NeV0nYF9%2FpBJeZA%2BCAI13vf4u4XKTaGr35wTVuo0V7REsPemnbpJrnuhyje2nt73is1v7YpD7VgmKADWkX8oWH4QrPeGHCGHT1p3njXXLa%2BqlwjZcKfZK1hp11jcAmIG8BFBYXcFupLNNwlSjkkbgmr5CuLativwYxZ5Xz0IU8Pbji%2FIIQDSMFJl45eT00K8u7G26GVc1D6L3AgQvUGJuir6dn1O%2BkyYf6kj%2B9FEHwb%2F0L8k4quu3icFWsLgIR8GgijtfUZv5LOx4O4V2Q6funLMC03TqcO9mUA8v6x8gzYH0BsB4ugqyZts03ntLHiDWsOmIwfBjgOsmoenQET%2FzZYP2ZvRt2am%2FSg224BOF7w3zWQbCgcdfK1Gwl3JLXjquNkqa7wG4ss9i%2Btrfy4FNkWVXjARhXk1DkHa1lIDlt2rxQByVC8d8ZSB2Ao0gti0THwJoLV0uwhmM3dyS4uLsJde%2BO%2BxG0%2BTSG8GIxJqprEoA069b%2FedNr8CSnwbsarHJDZLXbZFWSHUZjCo5prDBjqkAYYVHCePmY2JiDsGUzHq1ZfZ81IJVcMh7PmWgjtYw%2Bb7DnR%2FQh8YNTLcoQSeK6FZYTlrZvc6Gmq%2B%2FIqWO8n7SbTSQR2TpSnohGY5jORop8N6fPusqZk%2BEZjdqqcuSpx0MQVWcXB8YgaAKSnFx%2BMmaUSdlsKJ3OY7fU%2F01CGzoq7avAccYS5e%2FgzzNFB55%2BRyI6MEEdIxWxW3Qq1Rm%2F99GkiGYvC3&X-Amz-Signature=3d260296bc456ea78da3ae9c5f0d9ed7064d2a237252e1caf21abe52e425d6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGF3DZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD4gYxQCZtGUeDBbAlPf2iSTnfg2yH2pa6hmlyHu8i4xQIhAPDtvb0Uwh7h3%2FjUV16gMdB9KsX0cZJWmdLuBELLBx1rKv8DCBoQABoMNjM3NDIzMTgzODA1IgzQkmCC9uotFWdWCjcq3AMtIx9oh6knotzQGOHbFWqY0bPBPY%2Bcwy0Ucyb3PiKy0nIKS%2FiQA8CHqR2nXXhHNdRd2OCUeDD9%2FfSD13Pp5cACPFfMLWr6QMPLdNHQDyrTlDO9NeV0nYF9%2FpBJeZA%2BCAI13vf4u4XKTaGr35wTVuo0V7REsPemnbpJrnuhyje2nt73is1v7YpD7VgmKADWkX8oWH4QrPeGHCGHT1p3njXXLa%2BqlwjZcKfZK1hp11jcAmIG8BFBYXcFupLNNwlSjkkbgmr5CuLativwYxZ5Xz0IU8Pbji%2FIIQDSMFJl45eT00K8u7G26GVc1D6L3AgQvUGJuir6dn1O%2BkyYf6kj%2B9FEHwb%2F0L8k4quu3icFWsLgIR8GgijtfUZv5LOx4O4V2Q6funLMC03TqcO9mUA8v6x8gzYH0BsB4ugqyZts03ntLHiDWsOmIwfBjgOsmoenQET%2FzZYP2ZvRt2am%2FSg224BOF7w3zWQbCgcdfK1Gwl3JLXjquNkqa7wG4ss9i%2Btrfy4FNkWVXjARhXk1DkHa1lIDlt2rxQByVC8d8ZSB2Ao0gti0THwJoLV0uwhmM3dyS4uLsJde%2BO%2BxG0%2BTSG8GIxJqprEoA069b%2FedNr8CSnwbsarHJDZLXbZFWSHUZjCo5prDBjqkAYYVHCePmY2JiDsGUzHq1ZfZ81IJVcMh7PmWgjtYw%2Bb7DnR%2FQh8YNTLcoQSeK6FZYTlrZvc6Gmq%2B%2FIqWO8n7SbTSQR2TpSnohGY5jORop8N6fPusqZk%2BEZjdqqcuSpx0MQVWcXB8YgaAKSnFx%2BMmaUSdlsKJ3OY7fU%2F01CGzoq7avAccYS5e%2FgzzNFB55%2BRyI6MEEdIxWxW3Qq1Rm%2F99GkiGYvC3&X-Amz-Signature=fd718bf0d816497c3a27c9bcf76f39ed0f4d8dba0b04f6f28aad9cfd34050919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGF3DZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD4gYxQCZtGUeDBbAlPf2iSTnfg2yH2pa6hmlyHu8i4xQIhAPDtvb0Uwh7h3%2FjUV16gMdB9KsX0cZJWmdLuBELLBx1rKv8DCBoQABoMNjM3NDIzMTgzODA1IgzQkmCC9uotFWdWCjcq3AMtIx9oh6knotzQGOHbFWqY0bPBPY%2Bcwy0Ucyb3PiKy0nIKS%2FiQA8CHqR2nXXhHNdRd2OCUeDD9%2FfSD13Pp5cACPFfMLWr6QMPLdNHQDyrTlDO9NeV0nYF9%2FpBJeZA%2BCAI13vf4u4XKTaGr35wTVuo0V7REsPemnbpJrnuhyje2nt73is1v7YpD7VgmKADWkX8oWH4QrPeGHCGHT1p3njXXLa%2BqlwjZcKfZK1hp11jcAmIG8BFBYXcFupLNNwlSjkkbgmr5CuLativwYxZ5Xz0IU8Pbji%2FIIQDSMFJl45eT00K8u7G26GVc1D6L3AgQvUGJuir6dn1O%2BkyYf6kj%2B9FEHwb%2F0L8k4quu3icFWsLgIR8GgijtfUZv5LOx4O4V2Q6funLMC03TqcO9mUA8v6x8gzYH0BsB4ugqyZts03ntLHiDWsOmIwfBjgOsmoenQET%2FzZYP2ZvRt2am%2FSg224BOF7w3zWQbCgcdfK1Gwl3JLXjquNkqa7wG4ss9i%2Btrfy4FNkWVXjARhXk1DkHa1lIDlt2rxQByVC8d8ZSB2Ao0gti0THwJoLV0uwhmM3dyS4uLsJde%2BO%2BxG0%2BTSG8GIxJqprEoA069b%2FedNr8CSnwbsarHJDZLXbZFWSHUZjCo5prDBjqkAYYVHCePmY2JiDsGUzHq1ZfZ81IJVcMh7PmWgjtYw%2Bb7DnR%2FQh8YNTLcoQSeK6FZYTlrZvc6Gmq%2B%2FIqWO8n7SbTSQR2TpSnohGY5jORop8N6fPusqZk%2BEZjdqqcuSpx0MQVWcXB8YgaAKSnFx%2BMmaUSdlsKJ3OY7fU%2F01CGzoq7avAccYS5e%2FgzzNFB55%2BRyI6MEEdIxWxW3Qq1Rm%2F99GkiGYvC3&X-Amz-Signature=e50dd4f4043880bb8820a73ac97f3bec8751fbb5ead397899c28149f7d54b322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGF3DZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD4gYxQCZtGUeDBbAlPf2iSTnfg2yH2pa6hmlyHu8i4xQIhAPDtvb0Uwh7h3%2FjUV16gMdB9KsX0cZJWmdLuBELLBx1rKv8DCBoQABoMNjM3NDIzMTgzODA1IgzQkmCC9uotFWdWCjcq3AMtIx9oh6knotzQGOHbFWqY0bPBPY%2Bcwy0Ucyb3PiKy0nIKS%2FiQA8CHqR2nXXhHNdRd2OCUeDD9%2FfSD13Pp5cACPFfMLWr6QMPLdNHQDyrTlDO9NeV0nYF9%2FpBJeZA%2BCAI13vf4u4XKTaGr35wTVuo0V7REsPemnbpJrnuhyje2nt73is1v7YpD7VgmKADWkX8oWH4QrPeGHCGHT1p3njXXLa%2BqlwjZcKfZK1hp11jcAmIG8BFBYXcFupLNNwlSjkkbgmr5CuLativwYxZ5Xz0IU8Pbji%2FIIQDSMFJl45eT00K8u7G26GVc1D6L3AgQvUGJuir6dn1O%2BkyYf6kj%2B9FEHwb%2F0L8k4quu3icFWsLgIR8GgijtfUZv5LOx4O4V2Q6funLMC03TqcO9mUA8v6x8gzYH0BsB4ugqyZts03ntLHiDWsOmIwfBjgOsmoenQET%2FzZYP2ZvRt2am%2FSg224BOF7w3zWQbCgcdfK1Gwl3JLXjquNkqa7wG4ss9i%2Btrfy4FNkWVXjARhXk1DkHa1lIDlt2rxQByVC8d8ZSB2Ao0gti0THwJoLV0uwhmM3dyS4uLsJde%2BO%2BxG0%2BTSG8GIxJqprEoA069b%2FedNr8CSnwbsarHJDZLXbZFWSHUZjCo5prDBjqkAYYVHCePmY2JiDsGUzHq1ZfZ81IJVcMh7PmWgjtYw%2Bb7DnR%2FQh8YNTLcoQSeK6FZYTlrZvc6Gmq%2B%2FIqWO8n7SbTSQR2TpSnohGY5jORop8N6fPusqZk%2BEZjdqqcuSpx0MQVWcXB8YgaAKSnFx%2BMmaUSdlsKJ3OY7fU%2F01CGzoq7avAccYS5e%2FgzzNFB55%2BRyI6MEEdIxWxW3Qq1Rm%2F99GkiGYvC3&X-Amz-Signature=746986192e47343a3a93c9e729efe0bf4be0a494926e6f1a573751998f68102c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGF3DZA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD4gYxQCZtGUeDBbAlPf2iSTnfg2yH2pa6hmlyHu8i4xQIhAPDtvb0Uwh7h3%2FjUV16gMdB9KsX0cZJWmdLuBELLBx1rKv8DCBoQABoMNjM3NDIzMTgzODA1IgzQkmCC9uotFWdWCjcq3AMtIx9oh6knotzQGOHbFWqY0bPBPY%2Bcwy0Ucyb3PiKy0nIKS%2FiQA8CHqR2nXXhHNdRd2OCUeDD9%2FfSD13Pp5cACPFfMLWr6QMPLdNHQDyrTlDO9NeV0nYF9%2FpBJeZA%2BCAI13vf4u4XKTaGr35wTVuo0V7REsPemnbpJrnuhyje2nt73is1v7YpD7VgmKADWkX8oWH4QrPeGHCGHT1p3njXXLa%2BqlwjZcKfZK1hp11jcAmIG8BFBYXcFupLNNwlSjkkbgmr5CuLativwYxZ5Xz0IU8Pbji%2FIIQDSMFJl45eT00K8u7G26GVc1D6L3AgQvUGJuir6dn1O%2BkyYf6kj%2B9FEHwb%2F0L8k4quu3icFWsLgIR8GgijtfUZv5LOx4O4V2Q6funLMC03TqcO9mUA8v6x8gzYH0BsB4ugqyZts03ntLHiDWsOmIwfBjgOsmoenQET%2FzZYP2ZvRt2am%2FSg224BOF7w3zWQbCgcdfK1Gwl3JLXjquNkqa7wG4ss9i%2Btrfy4FNkWVXjARhXk1DkHa1lIDlt2rxQByVC8d8ZSB2Ao0gti0THwJoLV0uwhmM3dyS4uLsJde%2BO%2BxG0%2BTSG8GIxJqprEoA069b%2FedNr8CSnwbsarHJDZLXbZFWSHUZjCo5prDBjqkAYYVHCePmY2JiDsGUzHq1ZfZ81IJVcMh7PmWgjtYw%2Bb7DnR%2FQh8YNTLcoQSeK6FZYTlrZvc6Gmq%2B%2FIqWO8n7SbTSQR2TpSnohGY5jORop8N6fPusqZk%2BEZjdqqcuSpx0MQVWcXB8YgaAKSnFx%2BMmaUSdlsKJ3OY7fU%2F01CGzoq7avAccYS5e%2FgzzNFB55%2BRyI6MEEdIxWxW3Qq1Rm%2F99GkiGYvC3&X-Amz-Signature=a35d1a2f93b21f1437cf9f5fd9d1778d9b4128c2861679d49b74571d4daa9e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
