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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MCS6F%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFadLJUw7AJUThVt2PsvNQe4m2rsmBKFoTVA8h8enc8lAiBYsdHvYH%2BasKUAfsHl%2BVATxgSHhG4mVwCppjMHpi%2FR0iqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphl%2FljYls%2FsEUKqcKtwDRSgKtu4ijQqFVXQcRz3ECHi9H3BVmv6IVdLYIj0oyGx8Nr67C8RWivDIJ7hIG%2BMTNQTEpCqGAAWbCopTWOn6XyuR4oMfqojuABcoZA7PFmacb%2Fi%2B5d8CmXnGDq4NlRzcIQzoSdhwdpUu35txqSZQ6H1sGes%2B7AAbwHiAtiC0VWzUC3fqjZffug3JJnAjshMHHM46BS9rrL7q6nC6peuKLyX2SZrXua9mtnyz%2B3KUwiCjEjRF%2FADY7kcDVOBt8CoZP%2FpxnaBAjbLfPog%2FLEdLvt7n5Zv%2FtY1t1HgGKYF7Oy%2BD2dWKb2%2FKIo6Sm9FS68Xeeapw62v6JjznQ%2BrAqgBQkRFkjI9JZ1tw%2B%2FHlcoOxD0yQLDouMcsfD6E21l1goDnrnDnPkd7UdWppoJHYIa9YSadYhV1ImkWECeUwGy1nYWq6DD0wRk%2BKSY07mCSQ1GoTP%2FUa0b8qJPL5vxBNMdR6wqJqB6HoF6Bk4KF2e9714Rm2Sy1LOPSw1bSr9FrRCoZQvRew9pJDJFAvcwzaXtEncg714KWEAx0JgvCIt4Fi6i08pmj%2BxTiKK0LIGtYTUquZREP9wcdSXFLtxCsEiNc18KZpf3kIpCdKLKtfA7pGri3g%2FE%2BEi8XbITdHBYcw3aHKwwY6pgGycMhqFVWg%2Fzt4Vr%2BnejqC1iuxhkGixBUg1S2jxDLWGQZ%2BG3kerJ7Rgo4OWyvWk7k3b8l7XE%2FWuUaJoqBIHvB%2BHkBmgNMBF3ufT%2FJS%2B51aQpwsj1GJ8c2kEqcbnMfu8qnoYiLfspD36jG2uT199%2FfvgEGTEbvykpQkQwU1J%2FXr3cm%2FNa07DxGO4aBnGz74ItZ6UagTs6Teo0hUGRNzvx%2FiVOTn3kwt&X-Amz-Signature=2a8e99b5e7aa3ec530f9d56451baea325d395499d07ae1c2142619fb11eafdcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MCS6F%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFadLJUw7AJUThVt2PsvNQe4m2rsmBKFoTVA8h8enc8lAiBYsdHvYH%2BasKUAfsHl%2BVATxgSHhG4mVwCppjMHpi%2FR0iqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphl%2FljYls%2FsEUKqcKtwDRSgKtu4ijQqFVXQcRz3ECHi9H3BVmv6IVdLYIj0oyGx8Nr67C8RWivDIJ7hIG%2BMTNQTEpCqGAAWbCopTWOn6XyuR4oMfqojuABcoZA7PFmacb%2Fi%2B5d8CmXnGDq4NlRzcIQzoSdhwdpUu35txqSZQ6H1sGes%2B7AAbwHiAtiC0VWzUC3fqjZffug3JJnAjshMHHM46BS9rrL7q6nC6peuKLyX2SZrXua9mtnyz%2B3KUwiCjEjRF%2FADY7kcDVOBt8CoZP%2FpxnaBAjbLfPog%2FLEdLvt7n5Zv%2FtY1t1HgGKYF7Oy%2BD2dWKb2%2FKIo6Sm9FS68Xeeapw62v6JjznQ%2BrAqgBQkRFkjI9JZ1tw%2B%2FHlcoOxD0yQLDouMcsfD6E21l1goDnrnDnPkd7UdWppoJHYIa9YSadYhV1ImkWECeUwGy1nYWq6DD0wRk%2BKSY07mCSQ1GoTP%2FUa0b8qJPL5vxBNMdR6wqJqB6HoF6Bk4KF2e9714Rm2Sy1LOPSw1bSr9FrRCoZQvRew9pJDJFAvcwzaXtEncg714KWEAx0JgvCIt4Fi6i08pmj%2BxTiKK0LIGtYTUquZREP9wcdSXFLtxCsEiNc18KZpf3kIpCdKLKtfA7pGri3g%2FE%2BEi8XbITdHBYcw3aHKwwY6pgGycMhqFVWg%2Fzt4Vr%2BnejqC1iuxhkGixBUg1S2jxDLWGQZ%2BG3kerJ7Rgo4OWyvWk7k3b8l7XE%2FWuUaJoqBIHvB%2BHkBmgNMBF3ufT%2FJS%2B51aQpwsj1GJ8c2kEqcbnMfu8qnoYiLfspD36jG2uT199%2FfvgEGTEbvykpQkQwU1J%2FXr3cm%2FNa07DxGO4aBnGz74ItZ6UagTs6Teo0hUGRNzvx%2FiVOTn3kwt&X-Amz-Signature=8595e2dab5d595741ff85f91b4a6bc3a9dfc9962368180b53b73705a45e3a591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MCS6F%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFadLJUw7AJUThVt2PsvNQe4m2rsmBKFoTVA8h8enc8lAiBYsdHvYH%2BasKUAfsHl%2BVATxgSHhG4mVwCppjMHpi%2FR0iqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphl%2FljYls%2FsEUKqcKtwDRSgKtu4ijQqFVXQcRz3ECHi9H3BVmv6IVdLYIj0oyGx8Nr67C8RWivDIJ7hIG%2BMTNQTEpCqGAAWbCopTWOn6XyuR4oMfqojuABcoZA7PFmacb%2Fi%2B5d8CmXnGDq4NlRzcIQzoSdhwdpUu35txqSZQ6H1sGes%2B7AAbwHiAtiC0VWzUC3fqjZffug3JJnAjshMHHM46BS9rrL7q6nC6peuKLyX2SZrXua9mtnyz%2B3KUwiCjEjRF%2FADY7kcDVOBt8CoZP%2FpxnaBAjbLfPog%2FLEdLvt7n5Zv%2FtY1t1HgGKYF7Oy%2BD2dWKb2%2FKIo6Sm9FS68Xeeapw62v6JjznQ%2BrAqgBQkRFkjI9JZ1tw%2B%2FHlcoOxD0yQLDouMcsfD6E21l1goDnrnDnPkd7UdWppoJHYIa9YSadYhV1ImkWECeUwGy1nYWq6DD0wRk%2BKSY07mCSQ1GoTP%2FUa0b8qJPL5vxBNMdR6wqJqB6HoF6Bk4KF2e9714Rm2Sy1LOPSw1bSr9FrRCoZQvRew9pJDJFAvcwzaXtEncg714KWEAx0JgvCIt4Fi6i08pmj%2BxTiKK0LIGtYTUquZREP9wcdSXFLtxCsEiNc18KZpf3kIpCdKLKtfA7pGri3g%2FE%2BEi8XbITdHBYcw3aHKwwY6pgGycMhqFVWg%2Fzt4Vr%2BnejqC1iuxhkGixBUg1S2jxDLWGQZ%2BG3kerJ7Rgo4OWyvWk7k3b8l7XE%2FWuUaJoqBIHvB%2BHkBmgNMBF3ufT%2FJS%2B51aQpwsj1GJ8c2kEqcbnMfu8qnoYiLfspD36jG2uT199%2FfvgEGTEbvykpQkQwU1J%2FXr3cm%2FNa07DxGO4aBnGz74ItZ6UagTs6Teo0hUGRNzvx%2FiVOTn3kwt&X-Amz-Signature=0eb710ce9f2d32421a68a32d689d608617be87f2e298396788647b8480095bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MCS6F%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFadLJUw7AJUThVt2PsvNQe4m2rsmBKFoTVA8h8enc8lAiBYsdHvYH%2BasKUAfsHl%2BVATxgSHhG4mVwCppjMHpi%2FR0iqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphl%2FljYls%2FsEUKqcKtwDRSgKtu4ijQqFVXQcRz3ECHi9H3BVmv6IVdLYIj0oyGx8Nr67C8RWivDIJ7hIG%2BMTNQTEpCqGAAWbCopTWOn6XyuR4oMfqojuABcoZA7PFmacb%2Fi%2B5d8CmXnGDq4NlRzcIQzoSdhwdpUu35txqSZQ6H1sGes%2B7AAbwHiAtiC0VWzUC3fqjZffug3JJnAjshMHHM46BS9rrL7q6nC6peuKLyX2SZrXua9mtnyz%2B3KUwiCjEjRF%2FADY7kcDVOBt8CoZP%2FpxnaBAjbLfPog%2FLEdLvt7n5Zv%2FtY1t1HgGKYF7Oy%2BD2dWKb2%2FKIo6Sm9FS68Xeeapw62v6JjznQ%2BrAqgBQkRFkjI9JZ1tw%2B%2FHlcoOxD0yQLDouMcsfD6E21l1goDnrnDnPkd7UdWppoJHYIa9YSadYhV1ImkWECeUwGy1nYWq6DD0wRk%2BKSY07mCSQ1GoTP%2FUa0b8qJPL5vxBNMdR6wqJqB6HoF6Bk4KF2e9714Rm2Sy1LOPSw1bSr9FrRCoZQvRew9pJDJFAvcwzaXtEncg714KWEAx0JgvCIt4Fi6i08pmj%2BxTiKK0LIGtYTUquZREP9wcdSXFLtxCsEiNc18KZpf3kIpCdKLKtfA7pGri3g%2FE%2BEi8XbITdHBYcw3aHKwwY6pgGycMhqFVWg%2Fzt4Vr%2BnejqC1iuxhkGixBUg1S2jxDLWGQZ%2BG3kerJ7Rgo4OWyvWk7k3b8l7XE%2FWuUaJoqBIHvB%2BHkBmgNMBF3ufT%2FJS%2B51aQpwsj1GJ8c2kEqcbnMfu8qnoYiLfspD36jG2uT199%2FfvgEGTEbvykpQkQwU1J%2FXr3cm%2FNa07DxGO4aBnGz74ItZ6UagTs6Teo0hUGRNzvx%2FiVOTn3kwt&X-Amz-Signature=1213e1da56d12c2519d2ef5f6c051dd2d239da011bdf406102834c12257faeef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MCS6F%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFadLJUw7AJUThVt2PsvNQe4m2rsmBKFoTVA8h8enc8lAiBYsdHvYH%2BasKUAfsHl%2BVATxgSHhG4mVwCppjMHpi%2FR0iqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphl%2FljYls%2FsEUKqcKtwDRSgKtu4ijQqFVXQcRz3ECHi9H3BVmv6IVdLYIj0oyGx8Nr67C8RWivDIJ7hIG%2BMTNQTEpCqGAAWbCopTWOn6XyuR4oMfqojuABcoZA7PFmacb%2Fi%2B5d8CmXnGDq4NlRzcIQzoSdhwdpUu35txqSZQ6H1sGes%2B7AAbwHiAtiC0VWzUC3fqjZffug3JJnAjshMHHM46BS9rrL7q6nC6peuKLyX2SZrXua9mtnyz%2B3KUwiCjEjRF%2FADY7kcDVOBt8CoZP%2FpxnaBAjbLfPog%2FLEdLvt7n5Zv%2FtY1t1HgGKYF7Oy%2BD2dWKb2%2FKIo6Sm9FS68Xeeapw62v6JjznQ%2BrAqgBQkRFkjI9JZ1tw%2B%2FHlcoOxD0yQLDouMcsfD6E21l1goDnrnDnPkd7UdWppoJHYIa9YSadYhV1ImkWECeUwGy1nYWq6DD0wRk%2BKSY07mCSQ1GoTP%2FUa0b8qJPL5vxBNMdR6wqJqB6HoF6Bk4KF2e9714Rm2Sy1LOPSw1bSr9FrRCoZQvRew9pJDJFAvcwzaXtEncg714KWEAx0JgvCIt4Fi6i08pmj%2BxTiKK0LIGtYTUquZREP9wcdSXFLtxCsEiNc18KZpf3kIpCdKLKtfA7pGri3g%2FE%2BEi8XbITdHBYcw3aHKwwY6pgGycMhqFVWg%2Fzt4Vr%2BnejqC1iuxhkGixBUg1S2jxDLWGQZ%2BG3kerJ7Rgo4OWyvWk7k3b8l7XE%2FWuUaJoqBIHvB%2BHkBmgNMBF3ufT%2FJS%2B51aQpwsj1GJ8c2kEqcbnMfu8qnoYiLfspD36jG2uT199%2FfvgEGTEbvykpQkQwU1J%2FXr3cm%2FNa07DxGO4aBnGz74ItZ6UagTs6Teo0hUGRNzvx%2FiVOTn3kwt&X-Amz-Signature=16a3e54949444630c908743147abf2c54f0e1b974f7dfa5801f3969d5019a2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MCS6F%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFadLJUw7AJUThVt2PsvNQe4m2rsmBKFoTVA8h8enc8lAiBYsdHvYH%2BasKUAfsHl%2BVATxgSHhG4mVwCppjMHpi%2FR0iqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphl%2FljYls%2FsEUKqcKtwDRSgKtu4ijQqFVXQcRz3ECHi9H3BVmv6IVdLYIj0oyGx8Nr67C8RWivDIJ7hIG%2BMTNQTEpCqGAAWbCopTWOn6XyuR4oMfqojuABcoZA7PFmacb%2Fi%2B5d8CmXnGDq4NlRzcIQzoSdhwdpUu35txqSZQ6H1sGes%2B7AAbwHiAtiC0VWzUC3fqjZffug3JJnAjshMHHM46BS9rrL7q6nC6peuKLyX2SZrXua9mtnyz%2B3KUwiCjEjRF%2FADY7kcDVOBt8CoZP%2FpxnaBAjbLfPog%2FLEdLvt7n5Zv%2FtY1t1HgGKYF7Oy%2BD2dWKb2%2FKIo6Sm9FS68Xeeapw62v6JjznQ%2BrAqgBQkRFkjI9JZ1tw%2B%2FHlcoOxD0yQLDouMcsfD6E21l1goDnrnDnPkd7UdWppoJHYIa9YSadYhV1ImkWECeUwGy1nYWq6DD0wRk%2BKSY07mCSQ1GoTP%2FUa0b8qJPL5vxBNMdR6wqJqB6HoF6Bk4KF2e9714Rm2Sy1LOPSw1bSr9FrRCoZQvRew9pJDJFAvcwzaXtEncg714KWEAx0JgvCIt4Fi6i08pmj%2BxTiKK0LIGtYTUquZREP9wcdSXFLtxCsEiNc18KZpf3kIpCdKLKtfA7pGri3g%2FE%2BEi8XbITdHBYcw3aHKwwY6pgGycMhqFVWg%2Fzt4Vr%2BnejqC1iuxhkGixBUg1S2jxDLWGQZ%2BG3kerJ7Rgo4OWyvWk7k3b8l7XE%2FWuUaJoqBIHvB%2BHkBmgNMBF3ufT%2FJS%2B51aQpwsj1GJ8c2kEqcbnMfu8qnoYiLfspD36jG2uT199%2FfvgEGTEbvykpQkQwU1J%2FXr3cm%2FNa07DxGO4aBnGz74ItZ6UagTs6Teo0hUGRNzvx%2FiVOTn3kwt&X-Amz-Signature=2d5a9febc32320b23e4b090d3b4984998b0cb64e0b2aeddf5a2770d1a8b606dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MCS6F%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFadLJUw7AJUThVt2PsvNQe4m2rsmBKFoTVA8h8enc8lAiBYsdHvYH%2BasKUAfsHl%2BVATxgSHhG4mVwCppjMHpi%2FR0iqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphl%2FljYls%2FsEUKqcKtwDRSgKtu4ijQqFVXQcRz3ECHi9H3BVmv6IVdLYIj0oyGx8Nr67C8RWivDIJ7hIG%2BMTNQTEpCqGAAWbCopTWOn6XyuR4oMfqojuABcoZA7PFmacb%2Fi%2B5d8CmXnGDq4NlRzcIQzoSdhwdpUu35txqSZQ6H1sGes%2B7AAbwHiAtiC0VWzUC3fqjZffug3JJnAjshMHHM46BS9rrL7q6nC6peuKLyX2SZrXua9mtnyz%2B3KUwiCjEjRF%2FADY7kcDVOBt8CoZP%2FpxnaBAjbLfPog%2FLEdLvt7n5Zv%2FtY1t1HgGKYF7Oy%2BD2dWKb2%2FKIo6Sm9FS68Xeeapw62v6JjznQ%2BrAqgBQkRFkjI9JZ1tw%2B%2FHlcoOxD0yQLDouMcsfD6E21l1goDnrnDnPkd7UdWppoJHYIa9YSadYhV1ImkWECeUwGy1nYWq6DD0wRk%2BKSY07mCSQ1GoTP%2FUa0b8qJPL5vxBNMdR6wqJqB6HoF6Bk4KF2e9714Rm2Sy1LOPSw1bSr9FrRCoZQvRew9pJDJFAvcwzaXtEncg714KWEAx0JgvCIt4Fi6i08pmj%2BxTiKK0LIGtYTUquZREP9wcdSXFLtxCsEiNc18KZpf3kIpCdKLKtfA7pGri3g%2FE%2BEi8XbITdHBYcw3aHKwwY6pgGycMhqFVWg%2Fzt4Vr%2BnejqC1iuxhkGixBUg1S2jxDLWGQZ%2BG3kerJ7Rgo4OWyvWk7k3b8l7XE%2FWuUaJoqBIHvB%2BHkBmgNMBF3ufT%2FJS%2B51aQpwsj1GJ8c2kEqcbnMfu8qnoYiLfspD36jG2uT199%2FfvgEGTEbvykpQkQwU1J%2FXr3cm%2FNa07DxGO4aBnGz74ItZ6UagTs6Teo0hUGRNzvx%2FiVOTn3kwt&X-Amz-Signature=030fd54d8fdf3d003437672d233da9fec24c58f4d4ed1fbe94f59a84ec0aefa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MCS6F%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFadLJUw7AJUThVt2PsvNQe4m2rsmBKFoTVA8h8enc8lAiBYsdHvYH%2BasKUAfsHl%2BVATxgSHhG4mVwCppjMHpi%2FR0iqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMphl%2FljYls%2FsEUKqcKtwDRSgKtu4ijQqFVXQcRz3ECHi9H3BVmv6IVdLYIj0oyGx8Nr67C8RWivDIJ7hIG%2BMTNQTEpCqGAAWbCopTWOn6XyuR4oMfqojuABcoZA7PFmacb%2Fi%2B5d8CmXnGDq4NlRzcIQzoSdhwdpUu35txqSZQ6H1sGes%2B7AAbwHiAtiC0VWzUC3fqjZffug3JJnAjshMHHM46BS9rrL7q6nC6peuKLyX2SZrXua9mtnyz%2B3KUwiCjEjRF%2FADY7kcDVOBt8CoZP%2FpxnaBAjbLfPog%2FLEdLvt7n5Zv%2FtY1t1HgGKYF7Oy%2BD2dWKb2%2FKIo6Sm9FS68Xeeapw62v6JjznQ%2BrAqgBQkRFkjI9JZ1tw%2B%2FHlcoOxD0yQLDouMcsfD6E21l1goDnrnDnPkd7UdWppoJHYIa9YSadYhV1ImkWECeUwGy1nYWq6DD0wRk%2BKSY07mCSQ1GoTP%2FUa0b8qJPL5vxBNMdR6wqJqB6HoF6Bk4KF2e9714Rm2Sy1LOPSw1bSr9FrRCoZQvRew9pJDJFAvcwzaXtEncg714KWEAx0JgvCIt4Fi6i08pmj%2BxTiKK0LIGtYTUquZREP9wcdSXFLtxCsEiNc18KZpf3kIpCdKLKtfA7pGri3g%2FE%2BEi8XbITdHBYcw3aHKwwY6pgGycMhqFVWg%2Fzt4Vr%2BnejqC1iuxhkGixBUg1S2jxDLWGQZ%2BG3kerJ7Rgo4OWyvWk7k3b8l7XE%2FWuUaJoqBIHvB%2BHkBmgNMBF3ufT%2FJS%2B51aQpwsj1GJ8c2kEqcbnMfu8qnoYiLfspD36jG2uT199%2FfvgEGTEbvykpQkQwU1J%2FXr3cm%2FNa07DxGO4aBnGz74ItZ6UagTs6Teo0hUGRNzvx%2FiVOTn3kwt&X-Amz-Signature=c1070a747e7e022cb62f80ada28df697efd9f1f5149bb04353e58c7ce6b24cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
