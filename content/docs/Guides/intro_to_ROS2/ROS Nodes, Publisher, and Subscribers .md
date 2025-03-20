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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=59e868d28805b1a8f0a35010beb42383564cc4018f78c715f7f6c60292ee62fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=7bdd8a624424d5d32f07ca5182f4059fa3fc93cd999ce8c6051de5d73b56cbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=f06540e29f2d4126e2fc1787d4693e3a389bb5c1fabaf4cec97dc15967e89897&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=9f71460e116cb3c2b6bfc274e29c81df15276f74368705deeb0c601ad5052417&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=7205f23639df74d90b3a554f7b555c2c19a07b7c58499b4f68dc59c32866cedf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=1047ce920ffd976c522a78a301fc4ea2ff1a343d8e9c58fcc1641d5bc799d3d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=d37e486142a7a47ab64fad8da1d7023ff5b81ca1e672cd2526f82771cbd63fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3JKDSU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIANW3dWcCrZTXYXcSJZn7jJVqReVOkDmCdprN10qgIGUAiEA24C%2Fib4y7rm2QbRqXJNRJ8yIUnt90DArrz2qBPJViJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyKV4pcsPUVqi6YJyrcA3ugmfNgYhKFf9idx3X%2Fyv96hEXpjhb%2BaO1HZVwjsQ1np%2FXzcvmIOlF%2F3VdZgui3w%2F%2B27O7VGZkZ%2FK2Dt3%2BmcbPImmS%2FhfDC4UDcbgK6DcuyNXUPsD0X%2F%2FCu%2F%2F1OHY5Hqi3h1y6vwVzCrTpBZ4H60BB88uRZA1tmNCIJhS1MIrR5LZDXJtaO3tATNT8CL2b%2FVtJ8IwNeMB6RUcVjVZcKpoWa2LWwUz1IHp9nr5L50%2BYbNTgNvm1rwP4DUBYvPjtevyj8KXMKvUUwmyLeE5HjrzOzXmqHqUsMCbs9onaRRvhpR2Bus1%2Fs%2FQXbpSCE6qVH0i8h8gQOwnBOuz%2BGZsGMGYe2XO5uHAd3DUWKfatPa9Np5RJ5yl6Us4oq%2BKXZ84S5VxB1FA9%2BaKa3MJmO%2FEcDDn7A%2BxPCLa4YlYZ7KDZpOyXeixQGAE7LW3%2B6f4ITc4x%2B61lTlrKaHYtQQG57mov6ISP89%2Ft9wxtlGnmRT6mVw5LQMVfI%2FJPZKMRvn3euIu8AtA8qj63RUK1QTb0YM65W6XglbESXy5gTnFGuyIVyL5Xlm%2FEOIRXH8B7OyJvABFIpxYX3gD8A2Td0d4YU%2FvroHJk4zpfGGMrLbb2p7Nxizs%2FSZSiiK1kajdZ%2BWATkMJnH7r4GOqUBibGCpt2ztsRmzA3ydwWNV464oNtJLqSFHCnuYwdft2F%2BIf7OdEFOEAH3qiMx%2BV5sRDuEwE2iflk7Di0q0n%2B6yJbGfLqstj%2FSyYZ%2B4T5BDrIILT4UFtRXWA5xloZd%2BYpReBx74Wd4IMhuoRZnDTqh13pszemQNrRkyTSsoeptdsiXyFtROvIeZX3Gn2xxVQKS2UPhML%2FPOaNftJwr5rhO7U6efNrL&X-Amz-Signature=f42bfb9df139b24c3207ece9210970d4f4089dfdc07a97f775797c3a97deb27e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
