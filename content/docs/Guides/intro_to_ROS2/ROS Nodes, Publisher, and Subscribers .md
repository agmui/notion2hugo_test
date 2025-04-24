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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SW4BMY3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDaHYx8AWc8dAwE8IfeM4T1PkUxM%2FNVj%2FaLraV5o5MipgIhAMKfT4P5u%2FWHmeZrkqw0%2BqNm7jgf0XOkPNlsJ3nXmcfTKv8DCBEQABoMNjM3NDIzMTgzODA1Igze46FQRGMMNfrZlrIq3APImUXnJo0WqJiJW3%2FfgARNQusyKQzuWPb8GELBydz6pCnm5a%2FIm4BcHWFuOxjoLt5wjALMr0%2FbnUZVvNQm42ERC0QPKQoOLd7F3qbf9V%2FIKRwhsO3DtY825d70HifrR%2BSb%2BGN7FezviypQEglwMKWpjXVHUJh96Ijg5KTsfGd%2FqaiSJAlbxlbQXE6ABOdR8adOGcqoDg8ArAvoogSVTOxso7nr63m0gCH6qQJeChratmbHrFw5VMJ%2F3D%2FgxnPzgmKCJfbC1yE9RQ1rMtrGM%2BTCf83AmpQhWzACiaqDfDDgRo9wMZRsM7rn%2BwUOidCNGaxnwuTeeWWyrpcJW7s48C42fbuDq4FNGfRSyh6m4TlP87H4%2B%2FHsAaAe3eapryihH8hfaqmeR%2F8MyjBJEu2Ajv5TStwXqbICfXeoBQP6di4K%2F4HxFgaJoPjXlim122Zl6srZYsYw3rVESkrSDVQVtYNPBvkFcUvqJIhtfwfgWkYndd8fRvzZbmOtxoVlc1xmM15zaPTn1NkYBil%2BrD4G9qUz9lGkY6B0CplnwLrC8Ul3SOBVvjKuoZzNfsQskszKKbMDaR6D2P64MUhliTc3roQY%2FyGl3q5vyS3oi2lusYjyp5FdaGhtL5a6or2oaTCv6afABjqkAUNvlQS7yJCwYwrJwHVeGCK1mEmXLElJbBav%2B0YkX%2BZTRJvg5%2BNSdu734I7NJrKt6bCO%2B2vrRevhjmaOg1PrJ4DNGCtSptv99hciJkZsf3NiehtXxWgvQGx7ApzZ8E%2F0x406BxXD%2FWm8W%2BNdGNqhd2D1zvWaoK8RCshvTtHptdZJDD%2F9hgQnw8MnIY%2FJDWRpkiyv1jq7lKz2SdjAJLepXndJ3%2BI6&X-Amz-Signature=0f20e46cc6a44fbd8c770e177a709a4133045ebcd274122f232da045257d897a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SW4BMY3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDaHYx8AWc8dAwE8IfeM4T1PkUxM%2FNVj%2FaLraV5o5MipgIhAMKfT4P5u%2FWHmeZrkqw0%2BqNm7jgf0XOkPNlsJ3nXmcfTKv8DCBEQABoMNjM3NDIzMTgzODA1Igze46FQRGMMNfrZlrIq3APImUXnJo0WqJiJW3%2FfgARNQusyKQzuWPb8GELBydz6pCnm5a%2FIm4BcHWFuOxjoLt5wjALMr0%2FbnUZVvNQm42ERC0QPKQoOLd7F3qbf9V%2FIKRwhsO3DtY825d70HifrR%2BSb%2BGN7FezviypQEglwMKWpjXVHUJh96Ijg5KTsfGd%2FqaiSJAlbxlbQXE6ABOdR8adOGcqoDg8ArAvoogSVTOxso7nr63m0gCH6qQJeChratmbHrFw5VMJ%2F3D%2FgxnPzgmKCJfbC1yE9RQ1rMtrGM%2BTCf83AmpQhWzACiaqDfDDgRo9wMZRsM7rn%2BwUOidCNGaxnwuTeeWWyrpcJW7s48C42fbuDq4FNGfRSyh6m4TlP87H4%2B%2FHsAaAe3eapryihH8hfaqmeR%2F8MyjBJEu2Ajv5TStwXqbICfXeoBQP6di4K%2F4HxFgaJoPjXlim122Zl6srZYsYw3rVESkrSDVQVtYNPBvkFcUvqJIhtfwfgWkYndd8fRvzZbmOtxoVlc1xmM15zaPTn1NkYBil%2BrD4G9qUz9lGkY6B0CplnwLrC8Ul3SOBVvjKuoZzNfsQskszKKbMDaR6D2P64MUhliTc3roQY%2FyGl3q5vyS3oi2lusYjyp5FdaGhtL5a6or2oaTCv6afABjqkAUNvlQS7yJCwYwrJwHVeGCK1mEmXLElJbBav%2B0YkX%2BZTRJvg5%2BNSdu734I7NJrKt6bCO%2B2vrRevhjmaOg1PrJ4DNGCtSptv99hciJkZsf3NiehtXxWgvQGx7ApzZ8E%2F0x406BxXD%2FWm8W%2BNdGNqhd2D1zvWaoK8RCshvTtHptdZJDD%2F9hgQnw8MnIY%2FJDWRpkiyv1jq7lKz2SdjAJLepXndJ3%2BI6&X-Amz-Signature=2f72aaf5495b4e65967cff7303324a433608dc017e2ac4799e24e7e858027fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SW4BMY3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDaHYx8AWc8dAwE8IfeM4T1PkUxM%2FNVj%2FaLraV5o5MipgIhAMKfT4P5u%2FWHmeZrkqw0%2BqNm7jgf0XOkPNlsJ3nXmcfTKv8DCBEQABoMNjM3NDIzMTgzODA1Igze46FQRGMMNfrZlrIq3APImUXnJo0WqJiJW3%2FfgARNQusyKQzuWPb8GELBydz6pCnm5a%2FIm4BcHWFuOxjoLt5wjALMr0%2FbnUZVvNQm42ERC0QPKQoOLd7F3qbf9V%2FIKRwhsO3DtY825d70HifrR%2BSb%2BGN7FezviypQEglwMKWpjXVHUJh96Ijg5KTsfGd%2FqaiSJAlbxlbQXE6ABOdR8adOGcqoDg8ArAvoogSVTOxso7nr63m0gCH6qQJeChratmbHrFw5VMJ%2F3D%2FgxnPzgmKCJfbC1yE9RQ1rMtrGM%2BTCf83AmpQhWzACiaqDfDDgRo9wMZRsM7rn%2BwUOidCNGaxnwuTeeWWyrpcJW7s48C42fbuDq4FNGfRSyh6m4TlP87H4%2B%2FHsAaAe3eapryihH8hfaqmeR%2F8MyjBJEu2Ajv5TStwXqbICfXeoBQP6di4K%2F4HxFgaJoPjXlim122Zl6srZYsYw3rVESkrSDVQVtYNPBvkFcUvqJIhtfwfgWkYndd8fRvzZbmOtxoVlc1xmM15zaPTn1NkYBil%2BrD4G9qUz9lGkY6B0CplnwLrC8Ul3SOBVvjKuoZzNfsQskszKKbMDaR6D2P64MUhliTc3roQY%2FyGl3q5vyS3oi2lusYjyp5FdaGhtL5a6or2oaTCv6afABjqkAUNvlQS7yJCwYwrJwHVeGCK1mEmXLElJbBav%2B0YkX%2BZTRJvg5%2BNSdu734I7NJrKt6bCO%2B2vrRevhjmaOg1PrJ4DNGCtSptv99hciJkZsf3NiehtXxWgvQGx7ApzZ8E%2F0x406BxXD%2FWm8W%2BNdGNqhd2D1zvWaoK8RCshvTtHptdZJDD%2F9hgQnw8MnIY%2FJDWRpkiyv1jq7lKz2SdjAJLepXndJ3%2BI6&X-Amz-Signature=bdeb8e42c2b7abc04c0302127784b52818b476852df3ba595ad919986f47e1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SW4BMY3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDaHYx8AWc8dAwE8IfeM4T1PkUxM%2FNVj%2FaLraV5o5MipgIhAMKfT4P5u%2FWHmeZrkqw0%2BqNm7jgf0XOkPNlsJ3nXmcfTKv8DCBEQABoMNjM3NDIzMTgzODA1Igze46FQRGMMNfrZlrIq3APImUXnJo0WqJiJW3%2FfgARNQusyKQzuWPb8GELBydz6pCnm5a%2FIm4BcHWFuOxjoLt5wjALMr0%2FbnUZVvNQm42ERC0QPKQoOLd7F3qbf9V%2FIKRwhsO3DtY825d70HifrR%2BSb%2BGN7FezviypQEglwMKWpjXVHUJh96Ijg5KTsfGd%2FqaiSJAlbxlbQXE6ABOdR8adOGcqoDg8ArAvoogSVTOxso7nr63m0gCH6qQJeChratmbHrFw5VMJ%2F3D%2FgxnPzgmKCJfbC1yE9RQ1rMtrGM%2BTCf83AmpQhWzACiaqDfDDgRo9wMZRsM7rn%2BwUOidCNGaxnwuTeeWWyrpcJW7s48C42fbuDq4FNGfRSyh6m4TlP87H4%2B%2FHsAaAe3eapryihH8hfaqmeR%2F8MyjBJEu2Ajv5TStwXqbICfXeoBQP6di4K%2F4HxFgaJoPjXlim122Zl6srZYsYw3rVESkrSDVQVtYNPBvkFcUvqJIhtfwfgWkYndd8fRvzZbmOtxoVlc1xmM15zaPTn1NkYBil%2BrD4G9qUz9lGkY6B0CplnwLrC8Ul3SOBVvjKuoZzNfsQskszKKbMDaR6D2P64MUhliTc3roQY%2FyGl3q5vyS3oi2lusYjyp5FdaGhtL5a6or2oaTCv6afABjqkAUNvlQS7yJCwYwrJwHVeGCK1mEmXLElJbBav%2B0YkX%2BZTRJvg5%2BNSdu734I7NJrKt6bCO%2B2vrRevhjmaOg1PrJ4DNGCtSptv99hciJkZsf3NiehtXxWgvQGx7ApzZ8E%2F0x406BxXD%2FWm8W%2BNdGNqhd2D1zvWaoK8RCshvTtHptdZJDD%2F9hgQnw8MnIY%2FJDWRpkiyv1jq7lKz2SdjAJLepXndJ3%2BI6&X-Amz-Signature=95a91df90c79c6da82117dc450f07e8d17dfa1bf8d1cb48f1d63283191e3cd19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SW4BMY3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDaHYx8AWc8dAwE8IfeM4T1PkUxM%2FNVj%2FaLraV5o5MipgIhAMKfT4P5u%2FWHmeZrkqw0%2BqNm7jgf0XOkPNlsJ3nXmcfTKv8DCBEQABoMNjM3NDIzMTgzODA1Igze46FQRGMMNfrZlrIq3APImUXnJo0WqJiJW3%2FfgARNQusyKQzuWPb8GELBydz6pCnm5a%2FIm4BcHWFuOxjoLt5wjALMr0%2FbnUZVvNQm42ERC0QPKQoOLd7F3qbf9V%2FIKRwhsO3DtY825d70HifrR%2BSb%2BGN7FezviypQEglwMKWpjXVHUJh96Ijg5KTsfGd%2FqaiSJAlbxlbQXE6ABOdR8adOGcqoDg8ArAvoogSVTOxso7nr63m0gCH6qQJeChratmbHrFw5VMJ%2F3D%2FgxnPzgmKCJfbC1yE9RQ1rMtrGM%2BTCf83AmpQhWzACiaqDfDDgRo9wMZRsM7rn%2BwUOidCNGaxnwuTeeWWyrpcJW7s48C42fbuDq4FNGfRSyh6m4TlP87H4%2B%2FHsAaAe3eapryihH8hfaqmeR%2F8MyjBJEu2Ajv5TStwXqbICfXeoBQP6di4K%2F4HxFgaJoPjXlim122Zl6srZYsYw3rVESkrSDVQVtYNPBvkFcUvqJIhtfwfgWkYndd8fRvzZbmOtxoVlc1xmM15zaPTn1NkYBil%2BrD4G9qUz9lGkY6B0CplnwLrC8Ul3SOBVvjKuoZzNfsQskszKKbMDaR6D2P64MUhliTc3roQY%2FyGl3q5vyS3oi2lusYjyp5FdaGhtL5a6or2oaTCv6afABjqkAUNvlQS7yJCwYwrJwHVeGCK1mEmXLElJbBav%2B0YkX%2BZTRJvg5%2BNSdu734I7NJrKt6bCO%2B2vrRevhjmaOg1PrJ4DNGCtSptv99hciJkZsf3NiehtXxWgvQGx7ApzZ8E%2F0x406BxXD%2FWm8W%2BNdGNqhd2D1zvWaoK8RCshvTtHptdZJDD%2F9hgQnw8MnIY%2FJDWRpkiyv1jq7lKz2SdjAJLepXndJ3%2BI6&X-Amz-Signature=0a6c9a0d38e1f195b271b83bd1ef9ec93cd2cfc0bb013cc7cfb2918c007fcaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SW4BMY3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDaHYx8AWc8dAwE8IfeM4T1PkUxM%2FNVj%2FaLraV5o5MipgIhAMKfT4P5u%2FWHmeZrkqw0%2BqNm7jgf0XOkPNlsJ3nXmcfTKv8DCBEQABoMNjM3NDIzMTgzODA1Igze46FQRGMMNfrZlrIq3APImUXnJo0WqJiJW3%2FfgARNQusyKQzuWPb8GELBydz6pCnm5a%2FIm4BcHWFuOxjoLt5wjALMr0%2FbnUZVvNQm42ERC0QPKQoOLd7F3qbf9V%2FIKRwhsO3DtY825d70HifrR%2BSb%2BGN7FezviypQEglwMKWpjXVHUJh96Ijg5KTsfGd%2FqaiSJAlbxlbQXE6ABOdR8adOGcqoDg8ArAvoogSVTOxso7nr63m0gCH6qQJeChratmbHrFw5VMJ%2F3D%2FgxnPzgmKCJfbC1yE9RQ1rMtrGM%2BTCf83AmpQhWzACiaqDfDDgRo9wMZRsM7rn%2BwUOidCNGaxnwuTeeWWyrpcJW7s48C42fbuDq4FNGfRSyh6m4TlP87H4%2B%2FHsAaAe3eapryihH8hfaqmeR%2F8MyjBJEu2Ajv5TStwXqbICfXeoBQP6di4K%2F4HxFgaJoPjXlim122Zl6srZYsYw3rVESkrSDVQVtYNPBvkFcUvqJIhtfwfgWkYndd8fRvzZbmOtxoVlc1xmM15zaPTn1NkYBil%2BrD4G9qUz9lGkY6B0CplnwLrC8Ul3SOBVvjKuoZzNfsQskszKKbMDaR6D2P64MUhliTc3roQY%2FyGl3q5vyS3oi2lusYjyp5FdaGhtL5a6or2oaTCv6afABjqkAUNvlQS7yJCwYwrJwHVeGCK1mEmXLElJbBav%2B0YkX%2BZTRJvg5%2BNSdu734I7NJrKt6bCO%2B2vrRevhjmaOg1PrJ4DNGCtSptv99hciJkZsf3NiehtXxWgvQGx7ApzZ8E%2F0x406BxXD%2FWm8W%2BNdGNqhd2D1zvWaoK8RCshvTtHptdZJDD%2F9hgQnw8MnIY%2FJDWRpkiyv1jq7lKz2SdjAJLepXndJ3%2BI6&X-Amz-Signature=b4052b246591d035a121dadbcb866b4eb3d9422a3483a0e782c50d220a2215a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SW4BMY3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDaHYx8AWc8dAwE8IfeM4T1PkUxM%2FNVj%2FaLraV5o5MipgIhAMKfT4P5u%2FWHmeZrkqw0%2BqNm7jgf0XOkPNlsJ3nXmcfTKv8DCBEQABoMNjM3NDIzMTgzODA1Igze46FQRGMMNfrZlrIq3APImUXnJo0WqJiJW3%2FfgARNQusyKQzuWPb8GELBydz6pCnm5a%2FIm4BcHWFuOxjoLt5wjALMr0%2FbnUZVvNQm42ERC0QPKQoOLd7F3qbf9V%2FIKRwhsO3DtY825d70HifrR%2BSb%2BGN7FezviypQEglwMKWpjXVHUJh96Ijg5KTsfGd%2FqaiSJAlbxlbQXE6ABOdR8adOGcqoDg8ArAvoogSVTOxso7nr63m0gCH6qQJeChratmbHrFw5VMJ%2F3D%2FgxnPzgmKCJfbC1yE9RQ1rMtrGM%2BTCf83AmpQhWzACiaqDfDDgRo9wMZRsM7rn%2BwUOidCNGaxnwuTeeWWyrpcJW7s48C42fbuDq4FNGfRSyh6m4TlP87H4%2B%2FHsAaAe3eapryihH8hfaqmeR%2F8MyjBJEu2Ajv5TStwXqbICfXeoBQP6di4K%2F4HxFgaJoPjXlim122Zl6srZYsYw3rVESkrSDVQVtYNPBvkFcUvqJIhtfwfgWkYndd8fRvzZbmOtxoVlc1xmM15zaPTn1NkYBil%2BrD4G9qUz9lGkY6B0CplnwLrC8Ul3SOBVvjKuoZzNfsQskszKKbMDaR6D2P64MUhliTc3roQY%2FyGl3q5vyS3oi2lusYjyp5FdaGhtL5a6or2oaTCv6afABjqkAUNvlQS7yJCwYwrJwHVeGCK1mEmXLElJbBav%2B0YkX%2BZTRJvg5%2BNSdu734I7NJrKt6bCO%2B2vrRevhjmaOg1PrJ4DNGCtSptv99hciJkZsf3NiehtXxWgvQGx7ApzZ8E%2F0x406BxXD%2FWm8W%2BNdGNqhd2D1zvWaoK8RCshvTtHptdZJDD%2F9hgQnw8MnIY%2FJDWRpkiyv1jq7lKz2SdjAJLepXndJ3%2BI6&X-Amz-Signature=5b17cc9be68c48478a5277b68f502d60cef43937ab4bd7bef98f90b0d985c55b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SW4BMY3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDaHYx8AWc8dAwE8IfeM4T1PkUxM%2FNVj%2FaLraV5o5MipgIhAMKfT4P5u%2FWHmeZrkqw0%2BqNm7jgf0XOkPNlsJ3nXmcfTKv8DCBEQABoMNjM3NDIzMTgzODA1Igze46FQRGMMNfrZlrIq3APImUXnJo0WqJiJW3%2FfgARNQusyKQzuWPb8GELBydz6pCnm5a%2FIm4BcHWFuOxjoLt5wjALMr0%2FbnUZVvNQm42ERC0QPKQoOLd7F3qbf9V%2FIKRwhsO3DtY825d70HifrR%2BSb%2BGN7FezviypQEglwMKWpjXVHUJh96Ijg5KTsfGd%2FqaiSJAlbxlbQXE6ABOdR8adOGcqoDg8ArAvoogSVTOxso7nr63m0gCH6qQJeChratmbHrFw5VMJ%2F3D%2FgxnPzgmKCJfbC1yE9RQ1rMtrGM%2BTCf83AmpQhWzACiaqDfDDgRo9wMZRsM7rn%2BwUOidCNGaxnwuTeeWWyrpcJW7s48C42fbuDq4FNGfRSyh6m4TlP87H4%2B%2FHsAaAe3eapryihH8hfaqmeR%2F8MyjBJEu2Ajv5TStwXqbICfXeoBQP6di4K%2F4HxFgaJoPjXlim122Zl6srZYsYw3rVESkrSDVQVtYNPBvkFcUvqJIhtfwfgWkYndd8fRvzZbmOtxoVlc1xmM15zaPTn1NkYBil%2BrD4G9qUz9lGkY6B0CplnwLrC8Ul3SOBVvjKuoZzNfsQskszKKbMDaR6D2P64MUhliTc3roQY%2FyGl3q5vyS3oi2lusYjyp5FdaGhtL5a6or2oaTCv6afABjqkAUNvlQS7yJCwYwrJwHVeGCK1mEmXLElJbBav%2B0YkX%2BZTRJvg5%2BNSdu734I7NJrKt6bCO%2B2vrRevhjmaOg1PrJ4DNGCtSptv99hciJkZsf3NiehtXxWgvQGx7ApzZ8E%2F0x406BxXD%2FWm8W%2BNdGNqhd2D1zvWaoK8RCshvTtHptdZJDD%2F9hgQnw8MnIY%2FJDWRpkiyv1jq7lKz2SdjAJLepXndJ3%2BI6&X-Amz-Signature=08098bac1dd9adf09f77e41515cf087671d44421c187831794400e5879857851&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
