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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOJTJML%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIB3Shs9dd9andYb0XUcXwYsx%2FBYPKLDbJbZeR4reTroWAiAY45a7rab19TQzHx%2BG%2BS6J%2B53Qv2pq23%2BgUxCb6K8UDCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Qj8SgbswsNEnXwRKtwDm9voveVkKP%2Fi4d1jKIrmDPTQjUbOknplleycaStufDHaeNP9zI0butgw9NF%2B8TFGlF6d8TskzzWtGMaDehCnfjeNYMs02S3Z8B8YCvdQ7zArUrZpJjgIIvA7ef1wWQsGyzacHeXTEFMZ6t8nOmR4DimULgXQt3JjVNLpe2IuRVYpfX8pHsE7Oth0zmVqWeDhC0PCeubvdGAzHiaFeBeUNm8WvKoSZfv0yFPB8CbENRZjIkL2T83S%2BnzekrHTGv0%2BGd9BEVNJYS6EI9UtBZJph%2BDevry68691RPZrKbHPFIYbBrKxvEA6FtThcwRiSqpPwLAR7stjhOUHsoLAyk8fDuCHbV8o%2BL53HR69NzSBwv8iuI61r9LLDUSHWg4msAoO7%2FP01REajkIaj%2FqKIeddQqTsDygxAiAiWsOVZKGtpe3O6qZHCq2GOR9o5nKJgsDZO1pY4Bzv7Ly2yG08sqY1PB6qP43gcZNx7m4W65liJhBGt%2BUyoqE0OZERqFsvICg%2Btvr6y4cnZQhhD%2Foz33HW%2FnCqkv%2Fo8Mza1iiNKIPILLPFIDoa6QK7edsxz8Jw0NoA5PpYRddZTKomzNwgzzawWJwUFP2MaS7Pzaefxvs0gg0fEmXDIfVGRTCVe08wo6vaxAY6pgHK8opgFYsa9i9qKXXwjNGD8bFZQ9CES0qehTkZucpZLLt0ajvVq1%2F6tS9rQFX6x28oSMpVWgBNguQWTMxs4k6t0hceHmw6K1vainTESNpyw80pZShrVOmSnkBOyIVVYRTg%2FfDrfQ4mtQfaoxUpB3yhqQ2x%2BYGGRC7sUyiZ6pC6WLhzZKVp3fPBcg1jC9CBncnO7AbNyveO7xhdlty5DufA6SEBs7Eq&X-Amz-Signature=1efe1c06c09baca01457ab1788859eead585b3b16f73416948a4d0667d8a60a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOJTJML%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIB3Shs9dd9andYb0XUcXwYsx%2FBYPKLDbJbZeR4reTroWAiAY45a7rab19TQzHx%2BG%2BS6J%2B53Qv2pq23%2BgUxCb6K8UDCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Qj8SgbswsNEnXwRKtwDm9voveVkKP%2Fi4d1jKIrmDPTQjUbOknplleycaStufDHaeNP9zI0butgw9NF%2B8TFGlF6d8TskzzWtGMaDehCnfjeNYMs02S3Z8B8YCvdQ7zArUrZpJjgIIvA7ef1wWQsGyzacHeXTEFMZ6t8nOmR4DimULgXQt3JjVNLpe2IuRVYpfX8pHsE7Oth0zmVqWeDhC0PCeubvdGAzHiaFeBeUNm8WvKoSZfv0yFPB8CbENRZjIkL2T83S%2BnzekrHTGv0%2BGd9BEVNJYS6EI9UtBZJph%2BDevry68691RPZrKbHPFIYbBrKxvEA6FtThcwRiSqpPwLAR7stjhOUHsoLAyk8fDuCHbV8o%2BL53HR69NzSBwv8iuI61r9LLDUSHWg4msAoO7%2FP01REajkIaj%2FqKIeddQqTsDygxAiAiWsOVZKGtpe3O6qZHCq2GOR9o5nKJgsDZO1pY4Bzv7Ly2yG08sqY1PB6qP43gcZNx7m4W65liJhBGt%2BUyoqE0OZERqFsvICg%2Btvr6y4cnZQhhD%2Foz33HW%2FnCqkv%2Fo8Mza1iiNKIPILLPFIDoa6QK7edsxz8Jw0NoA5PpYRddZTKomzNwgzzawWJwUFP2MaS7Pzaefxvs0gg0fEmXDIfVGRTCVe08wo6vaxAY6pgHK8opgFYsa9i9qKXXwjNGD8bFZQ9CES0qehTkZucpZLLt0ajvVq1%2F6tS9rQFX6x28oSMpVWgBNguQWTMxs4k6t0hceHmw6K1vainTESNpyw80pZShrVOmSnkBOyIVVYRTg%2FfDrfQ4mtQfaoxUpB3yhqQ2x%2BYGGRC7sUyiZ6pC6WLhzZKVp3fPBcg1jC9CBncnO7AbNyveO7xhdlty5DufA6SEBs7Eq&X-Amz-Signature=b91ff61ed9de210434a1037cc0a6a85bed2eb099117a9c2dadf52f9f8c494de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOJTJML%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIB3Shs9dd9andYb0XUcXwYsx%2FBYPKLDbJbZeR4reTroWAiAY45a7rab19TQzHx%2BG%2BS6J%2B53Qv2pq23%2BgUxCb6K8UDCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Qj8SgbswsNEnXwRKtwDm9voveVkKP%2Fi4d1jKIrmDPTQjUbOknplleycaStufDHaeNP9zI0butgw9NF%2B8TFGlF6d8TskzzWtGMaDehCnfjeNYMs02S3Z8B8YCvdQ7zArUrZpJjgIIvA7ef1wWQsGyzacHeXTEFMZ6t8nOmR4DimULgXQt3JjVNLpe2IuRVYpfX8pHsE7Oth0zmVqWeDhC0PCeubvdGAzHiaFeBeUNm8WvKoSZfv0yFPB8CbENRZjIkL2T83S%2BnzekrHTGv0%2BGd9BEVNJYS6EI9UtBZJph%2BDevry68691RPZrKbHPFIYbBrKxvEA6FtThcwRiSqpPwLAR7stjhOUHsoLAyk8fDuCHbV8o%2BL53HR69NzSBwv8iuI61r9LLDUSHWg4msAoO7%2FP01REajkIaj%2FqKIeddQqTsDygxAiAiWsOVZKGtpe3O6qZHCq2GOR9o5nKJgsDZO1pY4Bzv7Ly2yG08sqY1PB6qP43gcZNx7m4W65liJhBGt%2BUyoqE0OZERqFsvICg%2Btvr6y4cnZQhhD%2Foz33HW%2FnCqkv%2Fo8Mza1iiNKIPILLPFIDoa6QK7edsxz8Jw0NoA5PpYRddZTKomzNwgzzawWJwUFP2MaS7Pzaefxvs0gg0fEmXDIfVGRTCVe08wo6vaxAY6pgHK8opgFYsa9i9qKXXwjNGD8bFZQ9CES0qehTkZucpZLLt0ajvVq1%2F6tS9rQFX6x28oSMpVWgBNguQWTMxs4k6t0hceHmw6K1vainTESNpyw80pZShrVOmSnkBOyIVVYRTg%2FfDrfQ4mtQfaoxUpB3yhqQ2x%2BYGGRC7sUyiZ6pC6WLhzZKVp3fPBcg1jC9CBncnO7AbNyveO7xhdlty5DufA6SEBs7Eq&X-Amz-Signature=cea69918c5cc00c85672b03e5de0784fb06fd9540058db4504b110d91da859b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOJTJML%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIB3Shs9dd9andYb0XUcXwYsx%2FBYPKLDbJbZeR4reTroWAiAY45a7rab19TQzHx%2BG%2BS6J%2B53Qv2pq23%2BgUxCb6K8UDCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Qj8SgbswsNEnXwRKtwDm9voveVkKP%2Fi4d1jKIrmDPTQjUbOknplleycaStufDHaeNP9zI0butgw9NF%2B8TFGlF6d8TskzzWtGMaDehCnfjeNYMs02S3Z8B8YCvdQ7zArUrZpJjgIIvA7ef1wWQsGyzacHeXTEFMZ6t8nOmR4DimULgXQt3JjVNLpe2IuRVYpfX8pHsE7Oth0zmVqWeDhC0PCeubvdGAzHiaFeBeUNm8WvKoSZfv0yFPB8CbENRZjIkL2T83S%2BnzekrHTGv0%2BGd9BEVNJYS6EI9UtBZJph%2BDevry68691RPZrKbHPFIYbBrKxvEA6FtThcwRiSqpPwLAR7stjhOUHsoLAyk8fDuCHbV8o%2BL53HR69NzSBwv8iuI61r9LLDUSHWg4msAoO7%2FP01REajkIaj%2FqKIeddQqTsDygxAiAiWsOVZKGtpe3O6qZHCq2GOR9o5nKJgsDZO1pY4Bzv7Ly2yG08sqY1PB6qP43gcZNx7m4W65liJhBGt%2BUyoqE0OZERqFsvICg%2Btvr6y4cnZQhhD%2Foz33HW%2FnCqkv%2Fo8Mza1iiNKIPILLPFIDoa6QK7edsxz8Jw0NoA5PpYRddZTKomzNwgzzawWJwUFP2MaS7Pzaefxvs0gg0fEmXDIfVGRTCVe08wo6vaxAY6pgHK8opgFYsa9i9qKXXwjNGD8bFZQ9CES0qehTkZucpZLLt0ajvVq1%2F6tS9rQFX6x28oSMpVWgBNguQWTMxs4k6t0hceHmw6K1vainTESNpyw80pZShrVOmSnkBOyIVVYRTg%2FfDrfQ4mtQfaoxUpB3yhqQ2x%2BYGGRC7sUyiZ6pC6WLhzZKVp3fPBcg1jC9CBncnO7AbNyveO7xhdlty5DufA6SEBs7Eq&X-Amz-Signature=e70aaa7e976fabafbf8fcfde428bb45e5ac5cb72e6dd54c4fb9ec6d18191ed1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOJTJML%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIB3Shs9dd9andYb0XUcXwYsx%2FBYPKLDbJbZeR4reTroWAiAY45a7rab19TQzHx%2BG%2BS6J%2B53Qv2pq23%2BgUxCb6K8UDCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Qj8SgbswsNEnXwRKtwDm9voveVkKP%2Fi4d1jKIrmDPTQjUbOknplleycaStufDHaeNP9zI0butgw9NF%2B8TFGlF6d8TskzzWtGMaDehCnfjeNYMs02S3Z8B8YCvdQ7zArUrZpJjgIIvA7ef1wWQsGyzacHeXTEFMZ6t8nOmR4DimULgXQt3JjVNLpe2IuRVYpfX8pHsE7Oth0zmVqWeDhC0PCeubvdGAzHiaFeBeUNm8WvKoSZfv0yFPB8CbENRZjIkL2T83S%2BnzekrHTGv0%2BGd9BEVNJYS6EI9UtBZJph%2BDevry68691RPZrKbHPFIYbBrKxvEA6FtThcwRiSqpPwLAR7stjhOUHsoLAyk8fDuCHbV8o%2BL53HR69NzSBwv8iuI61r9LLDUSHWg4msAoO7%2FP01REajkIaj%2FqKIeddQqTsDygxAiAiWsOVZKGtpe3O6qZHCq2GOR9o5nKJgsDZO1pY4Bzv7Ly2yG08sqY1PB6qP43gcZNx7m4W65liJhBGt%2BUyoqE0OZERqFsvICg%2Btvr6y4cnZQhhD%2Foz33HW%2FnCqkv%2Fo8Mza1iiNKIPILLPFIDoa6QK7edsxz8Jw0NoA5PpYRddZTKomzNwgzzawWJwUFP2MaS7Pzaefxvs0gg0fEmXDIfVGRTCVe08wo6vaxAY6pgHK8opgFYsa9i9qKXXwjNGD8bFZQ9CES0qehTkZucpZLLt0ajvVq1%2F6tS9rQFX6x28oSMpVWgBNguQWTMxs4k6t0hceHmw6K1vainTESNpyw80pZShrVOmSnkBOyIVVYRTg%2FfDrfQ4mtQfaoxUpB3yhqQ2x%2BYGGRC7sUyiZ6pC6WLhzZKVp3fPBcg1jC9CBncnO7AbNyveO7xhdlty5DufA6SEBs7Eq&X-Amz-Signature=3d9ef650dddc669ebd0e611928b498db1e7d53c0ba6a1e482184f42e54552ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOJTJML%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIB3Shs9dd9andYb0XUcXwYsx%2FBYPKLDbJbZeR4reTroWAiAY45a7rab19TQzHx%2BG%2BS6J%2B53Qv2pq23%2BgUxCb6K8UDCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Qj8SgbswsNEnXwRKtwDm9voveVkKP%2Fi4d1jKIrmDPTQjUbOknplleycaStufDHaeNP9zI0butgw9NF%2B8TFGlF6d8TskzzWtGMaDehCnfjeNYMs02S3Z8B8YCvdQ7zArUrZpJjgIIvA7ef1wWQsGyzacHeXTEFMZ6t8nOmR4DimULgXQt3JjVNLpe2IuRVYpfX8pHsE7Oth0zmVqWeDhC0PCeubvdGAzHiaFeBeUNm8WvKoSZfv0yFPB8CbENRZjIkL2T83S%2BnzekrHTGv0%2BGd9BEVNJYS6EI9UtBZJph%2BDevry68691RPZrKbHPFIYbBrKxvEA6FtThcwRiSqpPwLAR7stjhOUHsoLAyk8fDuCHbV8o%2BL53HR69NzSBwv8iuI61r9LLDUSHWg4msAoO7%2FP01REajkIaj%2FqKIeddQqTsDygxAiAiWsOVZKGtpe3O6qZHCq2GOR9o5nKJgsDZO1pY4Bzv7Ly2yG08sqY1PB6qP43gcZNx7m4W65liJhBGt%2BUyoqE0OZERqFsvICg%2Btvr6y4cnZQhhD%2Foz33HW%2FnCqkv%2Fo8Mza1iiNKIPILLPFIDoa6QK7edsxz8Jw0NoA5PpYRddZTKomzNwgzzawWJwUFP2MaS7Pzaefxvs0gg0fEmXDIfVGRTCVe08wo6vaxAY6pgHK8opgFYsa9i9qKXXwjNGD8bFZQ9CES0qehTkZucpZLLt0ajvVq1%2F6tS9rQFX6x28oSMpVWgBNguQWTMxs4k6t0hceHmw6K1vainTESNpyw80pZShrVOmSnkBOyIVVYRTg%2FfDrfQ4mtQfaoxUpB3yhqQ2x%2BYGGRC7sUyiZ6pC6WLhzZKVp3fPBcg1jC9CBncnO7AbNyveO7xhdlty5DufA6SEBs7Eq&X-Amz-Signature=081cbc7383d75320060624d51285bead2827f78e7863dc4a81022c478c26b319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOJTJML%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIB3Shs9dd9andYb0XUcXwYsx%2FBYPKLDbJbZeR4reTroWAiAY45a7rab19TQzHx%2BG%2BS6J%2B53Qv2pq23%2BgUxCb6K8UDCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Qj8SgbswsNEnXwRKtwDm9voveVkKP%2Fi4d1jKIrmDPTQjUbOknplleycaStufDHaeNP9zI0butgw9NF%2B8TFGlF6d8TskzzWtGMaDehCnfjeNYMs02S3Z8B8YCvdQ7zArUrZpJjgIIvA7ef1wWQsGyzacHeXTEFMZ6t8nOmR4DimULgXQt3JjVNLpe2IuRVYpfX8pHsE7Oth0zmVqWeDhC0PCeubvdGAzHiaFeBeUNm8WvKoSZfv0yFPB8CbENRZjIkL2T83S%2BnzekrHTGv0%2BGd9BEVNJYS6EI9UtBZJph%2BDevry68691RPZrKbHPFIYbBrKxvEA6FtThcwRiSqpPwLAR7stjhOUHsoLAyk8fDuCHbV8o%2BL53HR69NzSBwv8iuI61r9LLDUSHWg4msAoO7%2FP01REajkIaj%2FqKIeddQqTsDygxAiAiWsOVZKGtpe3O6qZHCq2GOR9o5nKJgsDZO1pY4Bzv7Ly2yG08sqY1PB6qP43gcZNx7m4W65liJhBGt%2BUyoqE0OZERqFsvICg%2Btvr6y4cnZQhhD%2Foz33HW%2FnCqkv%2Fo8Mza1iiNKIPILLPFIDoa6QK7edsxz8Jw0NoA5PpYRddZTKomzNwgzzawWJwUFP2MaS7Pzaefxvs0gg0fEmXDIfVGRTCVe08wo6vaxAY6pgHK8opgFYsa9i9qKXXwjNGD8bFZQ9CES0qehTkZucpZLLt0ajvVq1%2F6tS9rQFX6x28oSMpVWgBNguQWTMxs4k6t0hceHmw6K1vainTESNpyw80pZShrVOmSnkBOyIVVYRTg%2FfDrfQ4mtQfaoxUpB3yhqQ2x%2BYGGRC7sUyiZ6pC6WLhzZKVp3fPBcg1jC9CBncnO7AbNyveO7xhdlty5DufA6SEBs7Eq&X-Amz-Signature=3febce7b54b8a5afc179aab4ca64fb96caf9fae2d882aa831b94199d43b8e14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOJTJML%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIB3Shs9dd9andYb0XUcXwYsx%2FBYPKLDbJbZeR4reTroWAiAY45a7rab19TQzHx%2BG%2BS6J%2B53Qv2pq23%2BgUxCb6K8UDCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Qj8SgbswsNEnXwRKtwDm9voveVkKP%2Fi4d1jKIrmDPTQjUbOknplleycaStufDHaeNP9zI0butgw9NF%2B8TFGlF6d8TskzzWtGMaDehCnfjeNYMs02S3Z8B8YCvdQ7zArUrZpJjgIIvA7ef1wWQsGyzacHeXTEFMZ6t8nOmR4DimULgXQt3JjVNLpe2IuRVYpfX8pHsE7Oth0zmVqWeDhC0PCeubvdGAzHiaFeBeUNm8WvKoSZfv0yFPB8CbENRZjIkL2T83S%2BnzekrHTGv0%2BGd9BEVNJYS6EI9UtBZJph%2BDevry68691RPZrKbHPFIYbBrKxvEA6FtThcwRiSqpPwLAR7stjhOUHsoLAyk8fDuCHbV8o%2BL53HR69NzSBwv8iuI61r9LLDUSHWg4msAoO7%2FP01REajkIaj%2FqKIeddQqTsDygxAiAiWsOVZKGtpe3O6qZHCq2GOR9o5nKJgsDZO1pY4Bzv7Ly2yG08sqY1PB6qP43gcZNx7m4W65liJhBGt%2BUyoqE0OZERqFsvICg%2Btvr6y4cnZQhhD%2Foz33HW%2FnCqkv%2Fo8Mza1iiNKIPILLPFIDoa6QK7edsxz8Jw0NoA5PpYRddZTKomzNwgzzawWJwUFP2MaS7Pzaefxvs0gg0fEmXDIfVGRTCVe08wo6vaxAY6pgHK8opgFYsa9i9qKXXwjNGD8bFZQ9CES0qehTkZucpZLLt0ajvVq1%2F6tS9rQFX6x28oSMpVWgBNguQWTMxs4k6t0hceHmw6K1vainTESNpyw80pZShrVOmSnkBOyIVVYRTg%2FfDrfQ4mtQfaoxUpB3yhqQ2x%2BYGGRC7sUyiZ6pC6WLhzZKVp3fPBcg1jC9CBncnO7AbNyveO7xhdlty5DufA6SEBs7Eq&X-Amz-Signature=c235bebbef933ad810ce246459147e9e5878256fcd6bd201ab00cf6aa7721edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
