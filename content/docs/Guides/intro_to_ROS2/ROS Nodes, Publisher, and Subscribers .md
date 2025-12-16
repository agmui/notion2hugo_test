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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5UMO32%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWU%2Fr%2BrqaopovHLcDP6Q8ETiqAQKp9BGlobPhugwomwwIhANxqBLaVLsg28t4GVf8vXCF5vKmkp%2FQfH6zEpgnNn83uKv8DCFkQABoMNjM3NDIzMTgzODA1Igwf2mLVDDV1nyNw4IAq3AN0fu3ghgXB7nNUOqHvD0IufFsNPDq8FDGRn3C0p72bLXAWXzIjSqe9tcaoNLKogmusBz2iQsXUm%2BG9ysuuKgGjCRsDLWG8sH6WrTkjxRfWYNQYm2SXQbk1A7bRcDF0N8jSXVatZTWY%2FEriZyn8InJ%2BFXe4jamJgKGR4zevasF74IpJo4IvzYIqsEwjU0sDD724YgmJc%2FBGWe2ct3sKurfJGF7257vOJVQ3%2FaufQENUMNCmMlwKu2BfTa40bD6BKFhRinG1Rq%2FNPaoKixz6ZC2gdAFs8vRW0FpxmaaSmWc%2Fp2c6cmdnm4WNzPMuXdEGkno3V%2FjzH55QUgjaOnvuUEmsm98Swyvi03hp%2FSiUv5YFriGN3XXVnQL1p4h95NhgFGaSLVjn9C96VRQFXc40y2ToIpy5Tusf0O8oxloEF8kM4xECwF%2B0g9Txm37CMBLV6DyKGXAkv6ZEW7vuBTp75juMJH%2FjsL619i4XOYNQTud8Fi%2BuI%2FqDiJVoVIZ1AapYc6nsoXD425MMZ%2FrpH%2BzJXN90tWzBMgZ1R23%2BpbhGGKy3wq951P5W0aUqcQxOmG5qGGZR6OFmV6wJab0QxbzDkMaOPJ6gT5nCUlSUWuc%2FzbQFVuERkLhwUE9AYJtU8TDkyoLKBjqkAcCZGJv6C9zKKW5GVzZg8cDI5F13HMhbe8ydlGY0bLMDrT%2BPc0CI9HgUJccMjq7zUiyVMSuKSndCzDNAP2koK2tDs1K%2B0%2B%2By3NxBsYPkDgdQ2DnFY7n9neyNyQAFUC7S2e0IsaGW1ZAcBvVVmim0PySbEiERe5zIKipltjEy9Ptz6K9iwxlbYyN%2Bxylp6LuGCKGYOc7ZaON4E1qt7zw6j049g9bz&X-Amz-Signature=ee9912142f2147fb1a84f38a467c313bf502d20d9d12913c957635b8a90a567c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5UMO32%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWU%2Fr%2BrqaopovHLcDP6Q8ETiqAQKp9BGlobPhugwomwwIhANxqBLaVLsg28t4GVf8vXCF5vKmkp%2FQfH6zEpgnNn83uKv8DCFkQABoMNjM3NDIzMTgzODA1Igwf2mLVDDV1nyNw4IAq3AN0fu3ghgXB7nNUOqHvD0IufFsNPDq8FDGRn3C0p72bLXAWXzIjSqe9tcaoNLKogmusBz2iQsXUm%2BG9ysuuKgGjCRsDLWG8sH6WrTkjxRfWYNQYm2SXQbk1A7bRcDF0N8jSXVatZTWY%2FEriZyn8InJ%2BFXe4jamJgKGR4zevasF74IpJo4IvzYIqsEwjU0sDD724YgmJc%2FBGWe2ct3sKurfJGF7257vOJVQ3%2FaufQENUMNCmMlwKu2BfTa40bD6BKFhRinG1Rq%2FNPaoKixz6ZC2gdAFs8vRW0FpxmaaSmWc%2Fp2c6cmdnm4WNzPMuXdEGkno3V%2FjzH55QUgjaOnvuUEmsm98Swyvi03hp%2FSiUv5YFriGN3XXVnQL1p4h95NhgFGaSLVjn9C96VRQFXc40y2ToIpy5Tusf0O8oxloEF8kM4xECwF%2B0g9Txm37CMBLV6DyKGXAkv6ZEW7vuBTp75juMJH%2FjsL619i4XOYNQTud8Fi%2BuI%2FqDiJVoVIZ1AapYc6nsoXD425MMZ%2FrpH%2BzJXN90tWzBMgZ1R23%2BpbhGGKy3wq951P5W0aUqcQxOmG5qGGZR6OFmV6wJab0QxbzDkMaOPJ6gT5nCUlSUWuc%2FzbQFVuERkLhwUE9AYJtU8TDkyoLKBjqkAcCZGJv6C9zKKW5GVzZg8cDI5F13HMhbe8ydlGY0bLMDrT%2BPc0CI9HgUJccMjq7zUiyVMSuKSndCzDNAP2koK2tDs1K%2B0%2B%2By3NxBsYPkDgdQ2DnFY7n9neyNyQAFUC7S2e0IsaGW1ZAcBvVVmim0PySbEiERe5zIKipltjEy9Ptz6K9iwxlbYyN%2Bxylp6LuGCKGYOc7ZaON4E1qt7zw6j049g9bz&X-Amz-Signature=5ee65d0e4f8bad3962d549fb333250b4b38f65771599984f4af66b07ceb5ca7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5UMO32%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWU%2Fr%2BrqaopovHLcDP6Q8ETiqAQKp9BGlobPhugwomwwIhANxqBLaVLsg28t4GVf8vXCF5vKmkp%2FQfH6zEpgnNn83uKv8DCFkQABoMNjM3NDIzMTgzODA1Igwf2mLVDDV1nyNw4IAq3AN0fu3ghgXB7nNUOqHvD0IufFsNPDq8FDGRn3C0p72bLXAWXzIjSqe9tcaoNLKogmusBz2iQsXUm%2BG9ysuuKgGjCRsDLWG8sH6WrTkjxRfWYNQYm2SXQbk1A7bRcDF0N8jSXVatZTWY%2FEriZyn8InJ%2BFXe4jamJgKGR4zevasF74IpJo4IvzYIqsEwjU0sDD724YgmJc%2FBGWe2ct3sKurfJGF7257vOJVQ3%2FaufQENUMNCmMlwKu2BfTa40bD6BKFhRinG1Rq%2FNPaoKixz6ZC2gdAFs8vRW0FpxmaaSmWc%2Fp2c6cmdnm4WNzPMuXdEGkno3V%2FjzH55QUgjaOnvuUEmsm98Swyvi03hp%2FSiUv5YFriGN3XXVnQL1p4h95NhgFGaSLVjn9C96VRQFXc40y2ToIpy5Tusf0O8oxloEF8kM4xECwF%2B0g9Txm37CMBLV6DyKGXAkv6ZEW7vuBTp75juMJH%2FjsL619i4XOYNQTud8Fi%2BuI%2FqDiJVoVIZ1AapYc6nsoXD425MMZ%2FrpH%2BzJXN90tWzBMgZ1R23%2BpbhGGKy3wq951P5W0aUqcQxOmG5qGGZR6OFmV6wJab0QxbzDkMaOPJ6gT5nCUlSUWuc%2FzbQFVuERkLhwUE9AYJtU8TDkyoLKBjqkAcCZGJv6C9zKKW5GVzZg8cDI5F13HMhbe8ydlGY0bLMDrT%2BPc0CI9HgUJccMjq7zUiyVMSuKSndCzDNAP2koK2tDs1K%2B0%2B%2By3NxBsYPkDgdQ2DnFY7n9neyNyQAFUC7S2e0IsaGW1ZAcBvVVmim0PySbEiERe5zIKipltjEy9Ptz6K9iwxlbYyN%2Bxylp6LuGCKGYOc7ZaON4E1qt7zw6j049g9bz&X-Amz-Signature=f98b30974db08995e76692545b386f1c6847aaeb57f67e09a79a3ade3a0a5e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5UMO32%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWU%2Fr%2BrqaopovHLcDP6Q8ETiqAQKp9BGlobPhugwomwwIhANxqBLaVLsg28t4GVf8vXCF5vKmkp%2FQfH6zEpgnNn83uKv8DCFkQABoMNjM3NDIzMTgzODA1Igwf2mLVDDV1nyNw4IAq3AN0fu3ghgXB7nNUOqHvD0IufFsNPDq8FDGRn3C0p72bLXAWXzIjSqe9tcaoNLKogmusBz2iQsXUm%2BG9ysuuKgGjCRsDLWG8sH6WrTkjxRfWYNQYm2SXQbk1A7bRcDF0N8jSXVatZTWY%2FEriZyn8InJ%2BFXe4jamJgKGR4zevasF74IpJo4IvzYIqsEwjU0sDD724YgmJc%2FBGWe2ct3sKurfJGF7257vOJVQ3%2FaufQENUMNCmMlwKu2BfTa40bD6BKFhRinG1Rq%2FNPaoKixz6ZC2gdAFs8vRW0FpxmaaSmWc%2Fp2c6cmdnm4WNzPMuXdEGkno3V%2FjzH55QUgjaOnvuUEmsm98Swyvi03hp%2FSiUv5YFriGN3XXVnQL1p4h95NhgFGaSLVjn9C96VRQFXc40y2ToIpy5Tusf0O8oxloEF8kM4xECwF%2B0g9Txm37CMBLV6DyKGXAkv6ZEW7vuBTp75juMJH%2FjsL619i4XOYNQTud8Fi%2BuI%2FqDiJVoVIZ1AapYc6nsoXD425MMZ%2FrpH%2BzJXN90tWzBMgZ1R23%2BpbhGGKy3wq951P5W0aUqcQxOmG5qGGZR6OFmV6wJab0QxbzDkMaOPJ6gT5nCUlSUWuc%2FzbQFVuERkLhwUE9AYJtU8TDkyoLKBjqkAcCZGJv6C9zKKW5GVzZg8cDI5F13HMhbe8ydlGY0bLMDrT%2BPc0CI9HgUJccMjq7zUiyVMSuKSndCzDNAP2koK2tDs1K%2B0%2B%2By3NxBsYPkDgdQ2DnFY7n9neyNyQAFUC7S2e0IsaGW1ZAcBvVVmim0PySbEiERe5zIKipltjEy9Ptz6K9iwxlbYyN%2Bxylp6LuGCKGYOc7ZaON4E1qt7zw6j049g9bz&X-Amz-Signature=7524f8cb0906456231f2c9b4c163815448a53bba73d4d643c39428e020eb62f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5UMO32%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWU%2Fr%2BrqaopovHLcDP6Q8ETiqAQKp9BGlobPhugwomwwIhANxqBLaVLsg28t4GVf8vXCF5vKmkp%2FQfH6zEpgnNn83uKv8DCFkQABoMNjM3NDIzMTgzODA1Igwf2mLVDDV1nyNw4IAq3AN0fu3ghgXB7nNUOqHvD0IufFsNPDq8FDGRn3C0p72bLXAWXzIjSqe9tcaoNLKogmusBz2iQsXUm%2BG9ysuuKgGjCRsDLWG8sH6WrTkjxRfWYNQYm2SXQbk1A7bRcDF0N8jSXVatZTWY%2FEriZyn8InJ%2BFXe4jamJgKGR4zevasF74IpJo4IvzYIqsEwjU0sDD724YgmJc%2FBGWe2ct3sKurfJGF7257vOJVQ3%2FaufQENUMNCmMlwKu2BfTa40bD6BKFhRinG1Rq%2FNPaoKixz6ZC2gdAFs8vRW0FpxmaaSmWc%2Fp2c6cmdnm4WNzPMuXdEGkno3V%2FjzH55QUgjaOnvuUEmsm98Swyvi03hp%2FSiUv5YFriGN3XXVnQL1p4h95NhgFGaSLVjn9C96VRQFXc40y2ToIpy5Tusf0O8oxloEF8kM4xECwF%2B0g9Txm37CMBLV6DyKGXAkv6ZEW7vuBTp75juMJH%2FjsL619i4XOYNQTud8Fi%2BuI%2FqDiJVoVIZ1AapYc6nsoXD425MMZ%2FrpH%2BzJXN90tWzBMgZ1R23%2BpbhGGKy3wq951P5W0aUqcQxOmG5qGGZR6OFmV6wJab0QxbzDkMaOPJ6gT5nCUlSUWuc%2FzbQFVuERkLhwUE9AYJtU8TDkyoLKBjqkAcCZGJv6C9zKKW5GVzZg8cDI5F13HMhbe8ydlGY0bLMDrT%2BPc0CI9HgUJccMjq7zUiyVMSuKSndCzDNAP2koK2tDs1K%2B0%2B%2By3NxBsYPkDgdQ2DnFY7n9neyNyQAFUC7S2e0IsaGW1ZAcBvVVmim0PySbEiERe5zIKipltjEy9Ptz6K9iwxlbYyN%2Bxylp6LuGCKGYOc7ZaON4E1qt7zw6j049g9bz&X-Amz-Signature=57a6aa9636195c79286a5c4a09e820973d2fa5b91c52f025157b0020c42060b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5UMO32%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWU%2Fr%2BrqaopovHLcDP6Q8ETiqAQKp9BGlobPhugwomwwIhANxqBLaVLsg28t4GVf8vXCF5vKmkp%2FQfH6zEpgnNn83uKv8DCFkQABoMNjM3NDIzMTgzODA1Igwf2mLVDDV1nyNw4IAq3AN0fu3ghgXB7nNUOqHvD0IufFsNPDq8FDGRn3C0p72bLXAWXzIjSqe9tcaoNLKogmusBz2iQsXUm%2BG9ysuuKgGjCRsDLWG8sH6WrTkjxRfWYNQYm2SXQbk1A7bRcDF0N8jSXVatZTWY%2FEriZyn8InJ%2BFXe4jamJgKGR4zevasF74IpJo4IvzYIqsEwjU0sDD724YgmJc%2FBGWe2ct3sKurfJGF7257vOJVQ3%2FaufQENUMNCmMlwKu2BfTa40bD6BKFhRinG1Rq%2FNPaoKixz6ZC2gdAFs8vRW0FpxmaaSmWc%2Fp2c6cmdnm4WNzPMuXdEGkno3V%2FjzH55QUgjaOnvuUEmsm98Swyvi03hp%2FSiUv5YFriGN3XXVnQL1p4h95NhgFGaSLVjn9C96VRQFXc40y2ToIpy5Tusf0O8oxloEF8kM4xECwF%2B0g9Txm37CMBLV6DyKGXAkv6ZEW7vuBTp75juMJH%2FjsL619i4XOYNQTud8Fi%2BuI%2FqDiJVoVIZ1AapYc6nsoXD425MMZ%2FrpH%2BzJXN90tWzBMgZ1R23%2BpbhGGKy3wq951P5W0aUqcQxOmG5qGGZR6OFmV6wJab0QxbzDkMaOPJ6gT5nCUlSUWuc%2FzbQFVuERkLhwUE9AYJtU8TDkyoLKBjqkAcCZGJv6C9zKKW5GVzZg8cDI5F13HMhbe8ydlGY0bLMDrT%2BPc0CI9HgUJccMjq7zUiyVMSuKSndCzDNAP2koK2tDs1K%2B0%2B%2By3NxBsYPkDgdQ2DnFY7n9neyNyQAFUC7S2e0IsaGW1ZAcBvVVmim0PySbEiERe5zIKipltjEy9Ptz6K9iwxlbYyN%2Bxylp6LuGCKGYOc7ZaON4E1qt7zw6j049g9bz&X-Amz-Signature=244fd07f6a292e610b568d26e0c3be88212a888b736fb510562445efbd45b2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5UMO32%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWU%2Fr%2BrqaopovHLcDP6Q8ETiqAQKp9BGlobPhugwomwwIhANxqBLaVLsg28t4GVf8vXCF5vKmkp%2FQfH6zEpgnNn83uKv8DCFkQABoMNjM3NDIzMTgzODA1Igwf2mLVDDV1nyNw4IAq3AN0fu3ghgXB7nNUOqHvD0IufFsNPDq8FDGRn3C0p72bLXAWXzIjSqe9tcaoNLKogmusBz2iQsXUm%2BG9ysuuKgGjCRsDLWG8sH6WrTkjxRfWYNQYm2SXQbk1A7bRcDF0N8jSXVatZTWY%2FEriZyn8InJ%2BFXe4jamJgKGR4zevasF74IpJo4IvzYIqsEwjU0sDD724YgmJc%2FBGWe2ct3sKurfJGF7257vOJVQ3%2FaufQENUMNCmMlwKu2BfTa40bD6BKFhRinG1Rq%2FNPaoKixz6ZC2gdAFs8vRW0FpxmaaSmWc%2Fp2c6cmdnm4WNzPMuXdEGkno3V%2FjzH55QUgjaOnvuUEmsm98Swyvi03hp%2FSiUv5YFriGN3XXVnQL1p4h95NhgFGaSLVjn9C96VRQFXc40y2ToIpy5Tusf0O8oxloEF8kM4xECwF%2B0g9Txm37CMBLV6DyKGXAkv6ZEW7vuBTp75juMJH%2FjsL619i4XOYNQTud8Fi%2BuI%2FqDiJVoVIZ1AapYc6nsoXD425MMZ%2FrpH%2BzJXN90tWzBMgZ1R23%2BpbhGGKy3wq951P5W0aUqcQxOmG5qGGZR6OFmV6wJab0QxbzDkMaOPJ6gT5nCUlSUWuc%2FzbQFVuERkLhwUE9AYJtU8TDkyoLKBjqkAcCZGJv6C9zKKW5GVzZg8cDI5F13HMhbe8ydlGY0bLMDrT%2BPc0CI9HgUJccMjq7zUiyVMSuKSndCzDNAP2koK2tDs1K%2B0%2B%2By3NxBsYPkDgdQ2DnFY7n9neyNyQAFUC7S2e0IsaGW1ZAcBvVVmim0PySbEiERe5zIKipltjEy9Ptz6K9iwxlbYyN%2Bxylp6LuGCKGYOc7ZaON4E1qt7zw6j049g9bz&X-Amz-Signature=8fcee13e087329fb6bab01f5edf38bff8847ad02f8b9fb1d6af92571c09635e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5UMO32%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWU%2Fr%2BrqaopovHLcDP6Q8ETiqAQKp9BGlobPhugwomwwIhANxqBLaVLsg28t4GVf8vXCF5vKmkp%2FQfH6zEpgnNn83uKv8DCFkQABoMNjM3NDIzMTgzODA1Igwf2mLVDDV1nyNw4IAq3AN0fu3ghgXB7nNUOqHvD0IufFsNPDq8FDGRn3C0p72bLXAWXzIjSqe9tcaoNLKogmusBz2iQsXUm%2BG9ysuuKgGjCRsDLWG8sH6WrTkjxRfWYNQYm2SXQbk1A7bRcDF0N8jSXVatZTWY%2FEriZyn8InJ%2BFXe4jamJgKGR4zevasF74IpJo4IvzYIqsEwjU0sDD724YgmJc%2FBGWe2ct3sKurfJGF7257vOJVQ3%2FaufQENUMNCmMlwKu2BfTa40bD6BKFhRinG1Rq%2FNPaoKixz6ZC2gdAFs8vRW0FpxmaaSmWc%2Fp2c6cmdnm4WNzPMuXdEGkno3V%2FjzH55QUgjaOnvuUEmsm98Swyvi03hp%2FSiUv5YFriGN3XXVnQL1p4h95NhgFGaSLVjn9C96VRQFXc40y2ToIpy5Tusf0O8oxloEF8kM4xECwF%2B0g9Txm37CMBLV6DyKGXAkv6ZEW7vuBTp75juMJH%2FjsL619i4XOYNQTud8Fi%2BuI%2FqDiJVoVIZ1AapYc6nsoXD425MMZ%2FrpH%2BzJXN90tWzBMgZ1R23%2BpbhGGKy3wq951P5W0aUqcQxOmG5qGGZR6OFmV6wJab0QxbzDkMaOPJ6gT5nCUlSUWuc%2FzbQFVuERkLhwUE9AYJtU8TDkyoLKBjqkAcCZGJv6C9zKKW5GVzZg8cDI5F13HMhbe8ydlGY0bLMDrT%2BPc0CI9HgUJccMjq7zUiyVMSuKSndCzDNAP2koK2tDs1K%2B0%2B%2By3NxBsYPkDgdQ2DnFY7n9neyNyQAFUC7S2e0IsaGW1ZAcBvVVmim0PySbEiERe5zIKipltjEy9Ptz6K9iwxlbYyN%2Bxylp6LuGCKGYOc7ZaON4E1qt7zw6j049g9bz&X-Amz-Signature=7bc0dd6d9918901c242523da5e7a16b7f760491f471bdf3948d9b40d10b79974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
