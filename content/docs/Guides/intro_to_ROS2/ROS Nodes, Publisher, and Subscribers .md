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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAK7IYJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICNzz8nEQMmHgkTdnyJYM6YBOfV6G3Bk37huNFQoK0yYAiBFtcMRE27KGmhKlQ2u83lclquxw8SlW75LZv8FtGSXfSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMr%2BoQ%2FIq5FI5SAYbKKtwDNTq%2BnBVIDVZLBHQAGzd%2FgGBFXlLA%2BS79BbU43UX%2Bp7ByoW4zsmQzwJSU7iCOwdsFF3C80B19I%2BfOjPXMNc5AQY2mnRr8CsSf6ZQ0vCOyu9eQXp6jq%2BRuiitYdkuLJCmpUoF92dGA%2By6FEePczth9B6UL1EM7fJ1X19NpJ%2B36oGDkvqZa5AjYcXk%2FP3tQ7sAi8wNhfN3ZBgOPYy%2FKUgsYsIJ%2FD3P230SSOq8xxk%2FVKNrT1lTtNIKI7dwcvYZbx3qdRjZuiSsDFXBjauikVlNmhX2U7SsJu6QjNYn7d5plVfUaiSiMQVLnMFgKvC6bbURH1zZFwXUq30cmGHvXheUr6PgSbR6ny0tymNkijgdWwa4xHVxrUyMBAONcZw94PpTrMcQHVzrg1LZWba6Di2%2FQQmwrEM2QPKEXqFfe2IEBRUclCocQS6gnkHPcFml94KTfIOcloweOMsocuJ5G9LhXOCVhhGKIGswapzZ4T9T4mUTNFuVC6C5tGwJzNS0hvG76nPwfb9JPD1vDw8v3CiTPkeyUT6ARaT9vyYL1rfotv0lg26SA2zwd%2B6DMFamfB7bA8gUOKlxG0SjzOOVzUuMSmNBxPodcg6230uJ18PeB3Vki6vxFr%2B8FcukzqHowoITUwwY6pgFyBuLWzUV0D59%2F63lI2PRxpvE4cX3D3afbpg68xA1kXaDTnBVS%2BpdACCAERUeRN30XzQ6hb7YiKlj2OajpGhgytuc8SqQIdK8x97Iu7qqjUCBvT44uT4LIJi1wbcKNAXFgye5rjgSMsl%2B7A3Nmh1XCEvUDNCUBLZGJAIogSquPNBXojOdcueErIer3%2BFUcfZSZjrDYThDpPJ98lLERiJ5EDuXjdAp1&X-Amz-Signature=cc9d4ef9a2b952fbdbf95862d0f6b57d4bc3223357aca734152b2dcf673303dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAK7IYJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICNzz8nEQMmHgkTdnyJYM6YBOfV6G3Bk37huNFQoK0yYAiBFtcMRE27KGmhKlQ2u83lclquxw8SlW75LZv8FtGSXfSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMr%2BoQ%2FIq5FI5SAYbKKtwDNTq%2BnBVIDVZLBHQAGzd%2FgGBFXlLA%2BS79BbU43UX%2Bp7ByoW4zsmQzwJSU7iCOwdsFF3C80B19I%2BfOjPXMNc5AQY2mnRr8CsSf6ZQ0vCOyu9eQXp6jq%2BRuiitYdkuLJCmpUoF92dGA%2By6FEePczth9B6UL1EM7fJ1X19NpJ%2B36oGDkvqZa5AjYcXk%2FP3tQ7sAi8wNhfN3ZBgOPYy%2FKUgsYsIJ%2FD3P230SSOq8xxk%2FVKNrT1lTtNIKI7dwcvYZbx3qdRjZuiSsDFXBjauikVlNmhX2U7SsJu6QjNYn7d5plVfUaiSiMQVLnMFgKvC6bbURH1zZFwXUq30cmGHvXheUr6PgSbR6ny0tymNkijgdWwa4xHVxrUyMBAONcZw94PpTrMcQHVzrg1LZWba6Di2%2FQQmwrEM2QPKEXqFfe2IEBRUclCocQS6gnkHPcFml94KTfIOcloweOMsocuJ5G9LhXOCVhhGKIGswapzZ4T9T4mUTNFuVC6C5tGwJzNS0hvG76nPwfb9JPD1vDw8v3CiTPkeyUT6ARaT9vyYL1rfotv0lg26SA2zwd%2B6DMFamfB7bA8gUOKlxG0SjzOOVzUuMSmNBxPodcg6230uJ18PeB3Vki6vxFr%2B8FcukzqHowoITUwwY6pgFyBuLWzUV0D59%2F63lI2PRxpvE4cX3D3afbpg68xA1kXaDTnBVS%2BpdACCAERUeRN30XzQ6hb7YiKlj2OajpGhgytuc8SqQIdK8x97Iu7qqjUCBvT44uT4LIJi1wbcKNAXFgye5rjgSMsl%2B7A3Nmh1XCEvUDNCUBLZGJAIogSquPNBXojOdcueErIer3%2BFUcfZSZjrDYThDpPJ98lLERiJ5EDuXjdAp1&X-Amz-Signature=c6f9b3cc187fe11e09e3d34e35fd81accaf845d7360bdb5d683f5de7796addda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAK7IYJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICNzz8nEQMmHgkTdnyJYM6YBOfV6G3Bk37huNFQoK0yYAiBFtcMRE27KGmhKlQ2u83lclquxw8SlW75LZv8FtGSXfSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMr%2BoQ%2FIq5FI5SAYbKKtwDNTq%2BnBVIDVZLBHQAGzd%2FgGBFXlLA%2BS79BbU43UX%2Bp7ByoW4zsmQzwJSU7iCOwdsFF3C80B19I%2BfOjPXMNc5AQY2mnRr8CsSf6ZQ0vCOyu9eQXp6jq%2BRuiitYdkuLJCmpUoF92dGA%2By6FEePczth9B6UL1EM7fJ1X19NpJ%2B36oGDkvqZa5AjYcXk%2FP3tQ7sAi8wNhfN3ZBgOPYy%2FKUgsYsIJ%2FD3P230SSOq8xxk%2FVKNrT1lTtNIKI7dwcvYZbx3qdRjZuiSsDFXBjauikVlNmhX2U7SsJu6QjNYn7d5plVfUaiSiMQVLnMFgKvC6bbURH1zZFwXUq30cmGHvXheUr6PgSbR6ny0tymNkijgdWwa4xHVxrUyMBAONcZw94PpTrMcQHVzrg1LZWba6Di2%2FQQmwrEM2QPKEXqFfe2IEBRUclCocQS6gnkHPcFml94KTfIOcloweOMsocuJ5G9LhXOCVhhGKIGswapzZ4T9T4mUTNFuVC6C5tGwJzNS0hvG76nPwfb9JPD1vDw8v3CiTPkeyUT6ARaT9vyYL1rfotv0lg26SA2zwd%2B6DMFamfB7bA8gUOKlxG0SjzOOVzUuMSmNBxPodcg6230uJ18PeB3Vki6vxFr%2B8FcukzqHowoITUwwY6pgFyBuLWzUV0D59%2F63lI2PRxpvE4cX3D3afbpg68xA1kXaDTnBVS%2BpdACCAERUeRN30XzQ6hb7YiKlj2OajpGhgytuc8SqQIdK8x97Iu7qqjUCBvT44uT4LIJi1wbcKNAXFgye5rjgSMsl%2B7A3Nmh1XCEvUDNCUBLZGJAIogSquPNBXojOdcueErIer3%2BFUcfZSZjrDYThDpPJ98lLERiJ5EDuXjdAp1&X-Amz-Signature=975823dbd179e781eba20d8e77fa4c4dc428eb3df41c08c621d3a03efa7d1444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAK7IYJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICNzz8nEQMmHgkTdnyJYM6YBOfV6G3Bk37huNFQoK0yYAiBFtcMRE27KGmhKlQ2u83lclquxw8SlW75LZv8FtGSXfSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMr%2BoQ%2FIq5FI5SAYbKKtwDNTq%2BnBVIDVZLBHQAGzd%2FgGBFXlLA%2BS79BbU43UX%2Bp7ByoW4zsmQzwJSU7iCOwdsFF3C80B19I%2BfOjPXMNc5AQY2mnRr8CsSf6ZQ0vCOyu9eQXp6jq%2BRuiitYdkuLJCmpUoF92dGA%2By6FEePczth9B6UL1EM7fJ1X19NpJ%2B36oGDkvqZa5AjYcXk%2FP3tQ7sAi8wNhfN3ZBgOPYy%2FKUgsYsIJ%2FD3P230SSOq8xxk%2FVKNrT1lTtNIKI7dwcvYZbx3qdRjZuiSsDFXBjauikVlNmhX2U7SsJu6QjNYn7d5plVfUaiSiMQVLnMFgKvC6bbURH1zZFwXUq30cmGHvXheUr6PgSbR6ny0tymNkijgdWwa4xHVxrUyMBAONcZw94PpTrMcQHVzrg1LZWba6Di2%2FQQmwrEM2QPKEXqFfe2IEBRUclCocQS6gnkHPcFml94KTfIOcloweOMsocuJ5G9LhXOCVhhGKIGswapzZ4T9T4mUTNFuVC6C5tGwJzNS0hvG76nPwfb9JPD1vDw8v3CiTPkeyUT6ARaT9vyYL1rfotv0lg26SA2zwd%2B6DMFamfB7bA8gUOKlxG0SjzOOVzUuMSmNBxPodcg6230uJ18PeB3Vki6vxFr%2B8FcukzqHowoITUwwY6pgFyBuLWzUV0D59%2F63lI2PRxpvE4cX3D3afbpg68xA1kXaDTnBVS%2BpdACCAERUeRN30XzQ6hb7YiKlj2OajpGhgytuc8SqQIdK8x97Iu7qqjUCBvT44uT4LIJi1wbcKNAXFgye5rjgSMsl%2B7A3Nmh1XCEvUDNCUBLZGJAIogSquPNBXojOdcueErIer3%2BFUcfZSZjrDYThDpPJ98lLERiJ5EDuXjdAp1&X-Amz-Signature=c06cc2616ff4b4a9de15612d6a7b16c2d9d8af61ec6202f3fdde2598eab805af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAK7IYJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICNzz8nEQMmHgkTdnyJYM6YBOfV6G3Bk37huNFQoK0yYAiBFtcMRE27KGmhKlQ2u83lclquxw8SlW75LZv8FtGSXfSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMr%2BoQ%2FIq5FI5SAYbKKtwDNTq%2BnBVIDVZLBHQAGzd%2FgGBFXlLA%2BS79BbU43UX%2Bp7ByoW4zsmQzwJSU7iCOwdsFF3C80B19I%2BfOjPXMNc5AQY2mnRr8CsSf6ZQ0vCOyu9eQXp6jq%2BRuiitYdkuLJCmpUoF92dGA%2By6FEePczth9B6UL1EM7fJ1X19NpJ%2B36oGDkvqZa5AjYcXk%2FP3tQ7sAi8wNhfN3ZBgOPYy%2FKUgsYsIJ%2FD3P230SSOq8xxk%2FVKNrT1lTtNIKI7dwcvYZbx3qdRjZuiSsDFXBjauikVlNmhX2U7SsJu6QjNYn7d5plVfUaiSiMQVLnMFgKvC6bbURH1zZFwXUq30cmGHvXheUr6PgSbR6ny0tymNkijgdWwa4xHVxrUyMBAONcZw94PpTrMcQHVzrg1LZWba6Di2%2FQQmwrEM2QPKEXqFfe2IEBRUclCocQS6gnkHPcFml94KTfIOcloweOMsocuJ5G9LhXOCVhhGKIGswapzZ4T9T4mUTNFuVC6C5tGwJzNS0hvG76nPwfb9JPD1vDw8v3CiTPkeyUT6ARaT9vyYL1rfotv0lg26SA2zwd%2B6DMFamfB7bA8gUOKlxG0SjzOOVzUuMSmNBxPodcg6230uJ18PeB3Vki6vxFr%2B8FcukzqHowoITUwwY6pgFyBuLWzUV0D59%2F63lI2PRxpvE4cX3D3afbpg68xA1kXaDTnBVS%2BpdACCAERUeRN30XzQ6hb7YiKlj2OajpGhgytuc8SqQIdK8x97Iu7qqjUCBvT44uT4LIJi1wbcKNAXFgye5rjgSMsl%2B7A3Nmh1XCEvUDNCUBLZGJAIogSquPNBXojOdcueErIer3%2BFUcfZSZjrDYThDpPJ98lLERiJ5EDuXjdAp1&X-Amz-Signature=5de70bc0b54eb4b5a266d334d28adeefe9f28848974aff403aa4ed8b78a2b80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAK7IYJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICNzz8nEQMmHgkTdnyJYM6YBOfV6G3Bk37huNFQoK0yYAiBFtcMRE27KGmhKlQ2u83lclquxw8SlW75LZv8FtGSXfSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMr%2BoQ%2FIq5FI5SAYbKKtwDNTq%2BnBVIDVZLBHQAGzd%2FgGBFXlLA%2BS79BbU43UX%2Bp7ByoW4zsmQzwJSU7iCOwdsFF3C80B19I%2BfOjPXMNc5AQY2mnRr8CsSf6ZQ0vCOyu9eQXp6jq%2BRuiitYdkuLJCmpUoF92dGA%2By6FEePczth9B6UL1EM7fJ1X19NpJ%2B36oGDkvqZa5AjYcXk%2FP3tQ7sAi8wNhfN3ZBgOPYy%2FKUgsYsIJ%2FD3P230SSOq8xxk%2FVKNrT1lTtNIKI7dwcvYZbx3qdRjZuiSsDFXBjauikVlNmhX2U7SsJu6QjNYn7d5plVfUaiSiMQVLnMFgKvC6bbURH1zZFwXUq30cmGHvXheUr6PgSbR6ny0tymNkijgdWwa4xHVxrUyMBAONcZw94PpTrMcQHVzrg1LZWba6Di2%2FQQmwrEM2QPKEXqFfe2IEBRUclCocQS6gnkHPcFml94KTfIOcloweOMsocuJ5G9LhXOCVhhGKIGswapzZ4T9T4mUTNFuVC6C5tGwJzNS0hvG76nPwfb9JPD1vDw8v3CiTPkeyUT6ARaT9vyYL1rfotv0lg26SA2zwd%2B6DMFamfB7bA8gUOKlxG0SjzOOVzUuMSmNBxPodcg6230uJ18PeB3Vki6vxFr%2B8FcukzqHowoITUwwY6pgFyBuLWzUV0D59%2F63lI2PRxpvE4cX3D3afbpg68xA1kXaDTnBVS%2BpdACCAERUeRN30XzQ6hb7YiKlj2OajpGhgytuc8SqQIdK8x97Iu7qqjUCBvT44uT4LIJi1wbcKNAXFgye5rjgSMsl%2B7A3Nmh1XCEvUDNCUBLZGJAIogSquPNBXojOdcueErIer3%2BFUcfZSZjrDYThDpPJ98lLERiJ5EDuXjdAp1&X-Amz-Signature=969335c461b228fa217f4f8ba6f630ff16026d7aabf45f96acd929854d07bec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAK7IYJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICNzz8nEQMmHgkTdnyJYM6YBOfV6G3Bk37huNFQoK0yYAiBFtcMRE27KGmhKlQ2u83lclquxw8SlW75LZv8FtGSXfSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMr%2BoQ%2FIq5FI5SAYbKKtwDNTq%2BnBVIDVZLBHQAGzd%2FgGBFXlLA%2BS79BbU43UX%2Bp7ByoW4zsmQzwJSU7iCOwdsFF3C80B19I%2BfOjPXMNc5AQY2mnRr8CsSf6ZQ0vCOyu9eQXp6jq%2BRuiitYdkuLJCmpUoF92dGA%2By6FEePczth9B6UL1EM7fJ1X19NpJ%2B36oGDkvqZa5AjYcXk%2FP3tQ7sAi8wNhfN3ZBgOPYy%2FKUgsYsIJ%2FD3P230SSOq8xxk%2FVKNrT1lTtNIKI7dwcvYZbx3qdRjZuiSsDFXBjauikVlNmhX2U7SsJu6QjNYn7d5plVfUaiSiMQVLnMFgKvC6bbURH1zZFwXUq30cmGHvXheUr6PgSbR6ny0tymNkijgdWwa4xHVxrUyMBAONcZw94PpTrMcQHVzrg1LZWba6Di2%2FQQmwrEM2QPKEXqFfe2IEBRUclCocQS6gnkHPcFml94KTfIOcloweOMsocuJ5G9LhXOCVhhGKIGswapzZ4T9T4mUTNFuVC6C5tGwJzNS0hvG76nPwfb9JPD1vDw8v3CiTPkeyUT6ARaT9vyYL1rfotv0lg26SA2zwd%2B6DMFamfB7bA8gUOKlxG0SjzOOVzUuMSmNBxPodcg6230uJ18PeB3Vki6vxFr%2B8FcukzqHowoITUwwY6pgFyBuLWzUV0D59%2F63lI2PRxpvE4cX3D3afbpg68xA1kXaDTnBVS%2BpdACCAERUeRN30XzQ6hb7YiKlj2OajpGhgytuc8SqQIdK8x97Iu7qqjUCBvT44uT4LIJi1wbcKNAXFgye5rjgSMsl%2B7A3Nmh1XCEvUDNCUBLZGJAIogSquPNBXojOdcueErIer3%2BFUcfZSZjrDYThDpPJ98lLERiJ5EDuXjdAp1&X-Amz-Signature=afd93eca82f20ba80f32b73d7f22d519d39473b00866f4c7d807acd7ff3d9d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAK7IYJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICNzz8nEQMmHgkTdnyJYM6YBOfV6G3Bk37huNFQoK0yYAiBFtcMRE27KGmhKlQ2u83lclquxw8SlW75LZv8FtGSXfSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMr%2BoQ%2FIq5FI5SAYbKKtwDNTq%2BnBVIDVZLBHQAGzd%2FgGBFXlLA%2BS79BbU43UX%2Bp7ByoW4zsmQzwJSU7iCOwdsFF3C80B19I%2BfOjPXMNc5AQY2mnRr8CsSf6ZQ0vCOyu9eQXp6jq%2BRuiitYdkuLJCmpUoF92dGA%2By6FEePczth9B6UL1EM7fJ1X19NpJ%2B36oGDkvqZa5AjYcXk%2FP3tQ7sAi8wNhfN3ZBgOPYy%2FKUgsYsIJ%2FD3P230SSOq8xxk%2FVKNrT1lTtNIKI7dwcvYZbx3qdRjZuiSsDFXBjauikVlNmhX2U7SsJu6QjNYn7d5plVfUaiSiMQVLnMFgKvC6bbURH1zZFwXUq30cmGHvXheUr6PgSbR6ny0tymNkijgdWwa4xHVxrUyMBAONcZw94PpTrMcQHVzrg1LZWba6Di2%2FQQmwrEM2QPKEXqFfe2IEBRUclCocQS6gnkHPcFml94KTfIOcloweOMsocuJ5G9LhXOCVhhGKIGswapzZ4T9T4mUTNFuVC6C5tGwJzNS0hvG76nPwfb9JPD1vDw8v3CiTPkeyUT6ARaT9vyYL1rfotv0lg26SA2zwd%2B6DMFamfB7bA8gUOKlxG0SjzOOVzUuMSmNBxPodcg6230uJ18PeB3Vki6vxFr%2B8FcukzqHowoITUwwY6pgFyBuLWzUV0D59%2F63lI2PRxpvE4cX3D3afbpg68xA1kXaDTnBVS%2BpdACCAERUeRN30XzQ6hb7YiKlj2OajpGhgytuc8SqQIdK8x97Iu7qqjUCBvT44uT4LIJi1wbcKNAXFgye5rjgSMsl%2B7A3Nmh1XCEvUDNCUBLZGJAIogSquPNBXojOdcueErIer3%2BFUcfZSZjrDYThDpPJ98lLERiJ5EDuXjdAp1&X-Amz-Signature=f994b07086709b7b525fa6e5f2489ea2ad785619616c99bea67bc75ecdace907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
