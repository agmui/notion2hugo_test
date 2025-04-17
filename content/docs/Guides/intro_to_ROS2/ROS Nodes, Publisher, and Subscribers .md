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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOXQSD4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN6UTqRS%2FMIGxdkLb2tI6C%2BgTLTN26wooJjyxcQxMJAgIhANHXppiBaev8DCblqxmJ6WSGOF9bC7%2B16ft384cPMeMCKv8DCGYQABoMNjM3NDIzMTgzODA1Igz1q%2FwWxKdhJpG%2Bzbgq3ANAlQGwouhiBNIvNgUWoMv6iiFGuDE8aH7VSKNDmIREi9cTcWR0tbLKvmUyx6Ejju59qT%2Fq%2BD6abaByw%2FyqYbkrmBB6x52Nz6iKKzQarjpbB%2FEBS3luDFL0H1wFQLa6dljpFU%2B8%2Fd6IjYohSXlo%2FJ668rMFBDQMjieSNbQ9%2F5veNkBnsFCs2Rs7SzGBxPQDD%2BrMx9Tzi7U7MNuf9XKirpPnISOrNX8zdMXapc1%2FCoMykYtIVEj6JwCJTLQyCg%2F61LRsMzTnZxTHvhrIh2wuWnH5qreDUQ0Wl61Ek%2FVbh1X6U%2FbHL%2Bio4kUc2PUfqERt26h2BmTRwTxUoc0ysU950DJW3MfbuqX2xzcdwYm54SnGjh4GjrB%2BGnm%2BuK4CSkVHqoVuiaKua6%2BHH54yfLwuneMUJeN4NE0R9jOkn8R%2F%2FCAqeNx4KnJc20QanSslXrZ%2B4q9Bn%2FAcyUqt8YPP13JWXlo4lCwBLzFhFzzIOTBa02IBdXTaB7eANvx4Rr9kv7E1J%2FbppkCug9dXrIWVKgJilHTelcmMhtUpFJoz%2FtYhb6g%2BpUBnCXUoVUNYO479lojCyC%2BlSfqy4pMDQuqfZxqemra%2FI%2FZ4sUtU3VfbXkukAHPVNEngD9q0iC5GWe1qhjCK0oXABjqkASta4ihaKgIB2P2qL9skVqzZfBdMClW4nmy2Wxvi1uYnJd%2BBVEmeqFlUsHgTYkSQpV0HUhtzxgH2QXlI%2B0VFydQsJ9P1ppHzTZVDS5NrRF1U6v9PgGg5%2FKcElKCYqfZHuGVhtf2h34dhxM3L%2BQeBjx3twsEMcADgtKMZch2wJbr6WpMBmTrUvgv5d5Ulzjc9Uz3rsdMzq3RirBRKNTvAmXJzcoOr&X-Amz-Signature=dcd1474766d855122810714394c985f541a456bf67fac3591b328ce039e0366e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOXQSD4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN6UTqRS%2FMIGxdkLb2tI6C%2BgTLTN26wooJjyxcQxMJAgIhANHXppiBaev8DCblqxmJ6WSGOF9bC7%2B16ft384cPMeMCKv8DCGYQABoMNjM3NDIzMTgzODA1Igz1q%2FwWxKdhJpG%2Bzbgq3ANAlQGwouhiBNIvNgUWoMv6iiFGuDE8aH7VSKNDmIREi9cTcWR0tbLKvmUyx6Ejju59qT%2Fq%2BD6abaByw%2FyqYbkrmBB6x52Nz6iKKzQarjpbB%2FEBS3luDFL0H1wFQLa6dljpFU%2B8%2Fd6IjYohSXlo%2FJ668rMFBDQMjieSNbQ9%2F5veNkBnsFCs2Rs7SzGBxPQDD%2BrMx9Tzi7U7MNuf9XKirpPnISOrNX8zdMXapc1%2FCoMykYtIVEj6JwCJTLQyCg%2F61LRsMzTnZxTHvhrIh2wuWnH5qreDUQ0Wl61Ek%2FVbh1X6U%2FbHL%2Bio4kUc2PUfqERt26h2BmTRwTxUoc0ysU950DJW3MfbuqX2xzcdwYm54SnGjh4GjrB%2BGnm%2BuK4CSkVHqoVuiaKua6%2BHH54yfLwuneMUJeN4NE0R9jOkn8R%2F%2FCAqeNx4KnJc20QanSslXrZ%2B4q9Bn%2FAcyUqt8YPP13JWXlo4lCwBLzFhFzzIOTBa02IBdXTaB7eANvx4Rr9kv7E1J%2FbppkCug9dXrIWVKgJilHTelcmMhtUpFJoz%2FtYhb6g%2BpUBnCXUoVUNYO479lojCyC%2BlSfqy4pMDQuqfZxqemra%2FI%2FZ4sUtU3VfbXkukAHPVNEngD9q0iC5GWe1qhjCK0oXABjqkASta4ihaKgIB2P2qL9skVqzZfBdMClW4nmy2Wxvi1uYnJd%2BBVEmeqFlUsHgTYkSQpV0HUhtzxgH2QXlI%2B0VFydQsJ9P1ppHzTZVDS5NrRF1U6v9PgGg5%2FKcElKCYqfZHuGVhtf2h34dhxM3L%2BQeBjx3twsEMcADgtKMZch2wJbr6WpMBmTrUvgv5d5Ulzjc9Uz3rsdMzq3RirBRKNTvAmXJzcoOr&X-Amz-Signature=16990c14f464628bfa0edc9dca5a4dda5c1e9b2d9e156abd134880782fc7aee0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOXQSD4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN6UTqRS%2FMIGxdkLb2tI6C%2BgTLTN26wooJjyxcQxMJAgIhANHXppiBaev8DCblqxmJ6WSGOF9bC7%2B16ft384cPMeMCKv8DCGYQABoMNjM3NDIzMTgzODA1Igz1q%2FwWxKdhJpG%2Bzbgq3ANAlQGwouhiBNIvNgUWoMv6iiFGuDE8aH7VSKNDmIREi9cTcWR0tbLKvmUyx6Ejju59qT%2Fq%2BD6abaByw%2FyqYbkrmBB6x52Nz6iKKzQarjpbB%2FEBS3luDFL0H1wFQLa6dljpFU%2B8%2Fd6IjYohSXlo%2FJ668rMFBDQMjieSNbQ9%2F5veNkBnsFCs2Rs7SzGBxPQDD%2BrMx9Tzi7U7MNuf9XKirpPnISOrNX8zdMXapc1%2FCoMykYtIVEj6JwCJTLQyCg%2F61LRsMzTnZxTHvhrIh2wuWnH5qreDUQ0Wl61Ek%2FVbh1X6U%2FbHL%2Bio4kUc2PUfqERt26h2BmTRwTxUoc0ysU950DJW3MfbuqX2xzcdwYm54SnGjh4GjrB%2BGnm%2BuK4CSkVHqoVuiaKua6%2BHH54yfLwuneMUJeN4NE0R9jOkn8R%2F%2FCAqeNx4KnJc20QanSslXrZ%2B4q9Bn%2FAcyUqt8YPP13JWXlo4lCwBLzFhFzzIOTBa02IBdXTaB7eANvx4Rr9kv7E1J%2FbppkCug9dXrIWVKgJilHTelcmMhtUpFJoz%2FtYhb6g%2BpUBnCXUoVUNYO479lojCyC%2BlSfqy4pMDQuqfZxqemra%2FI%2FZ4sUtU3VfbXkukAHPVNEngD9q0iC5GWe1qhjCK0oXABjqkASta4ihaKgIB2P2qL9skVqzZfBdMClW4nmy2Wxvi1uYnJd%2BBVEmeqFlUsHgTYkSQpV0HUhtzxgH2QXlI%2B0VFydQsJ9P1ppHzTZVDS5NrRF1U6v9PgGg5%2FKcElKCYqfZHuGVhtf2h34dhxM3L%2BQeBjx3twsEMcADgtKMZch2wJbr6WpMBmTrUvgv5d5Ulzjc9Uz3rsdMzq3RirBRKNTvAmXJzcoOr&X-Amz-Signature=c1e85a2b37884226860ef4e8c768e54c7a6131d572c2e13290f4f81227fd4a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOXQSD4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN6UTqRS%2FMIGxdkLb2tI6C%2BgTLTN26wooJjyxcQxMJAgIhANHXppiBaev8DCblqxmJ6WSGOF9bC7%2B16ft384cPMeMCKv8DCGYQABoMNjM3NDIzMTgzODA1Igz1q%2FwWxKdhJpG%2Bzbgq3ANAlQGwouhiBNIvNgUWoMv6iiFGuDE8aH7VSKNDmIREi9cTcWR0tbLKvmUyx6Ejju59qT%2Fq%2BD6abaByw%2FyqYbkrmBB6x52Nz6iKKzQarjpbB%2FEBS3luDFL0H1wFQLa6dljpFU%2B8%2Fd6IjYohSXlo%2FJ668rMFBDQMjieSNbQ9%2F5veNkBnsFCs2Rs7SzGBxPQDD%2BrMx9Tzi7U7MNuf9XKirpPnISOrNX8zdMXapc1%2FCoMykYtIVEj6JwCJTLQyCg%2F61LRsMzTnZxTHvhrIh2wuWnH5qreDUQ0Wl61Ek%2FVbh1X6U%2FbHL%2Bio4kUc2PUfqERt26h2BmTRwTxUoc0ysU950DJW3MfbuqX2xzcdwYm54SnGjh4GjrB%2BGnm%2BuK4CSkVHqoVuiaKua6%2BHH54yfLwuneMUJeN4NE0R9jOkn8R%2F%2FCAqeNx4KnJc20QanSslXrZ%2B4q9Bn%2FAcyUqt8YPP13JWXlo4lCwBLzFhFzzIOTBa02IBdXTaB7eANvx4Rr9kv7E1J%2FbppkCug9dXrIWVKgJilHTelcmMhtUpFJoz%2FtYhb6g%2BpUBnCXUoVUNYO479lojCyC%2BlSfqy4pMDQuqfZxqemra%2FI%2FZ4sUtU3VfbXkukAHPVNEngD9q0iC5GWe1qhjCK0oXABjqkASta4ihaKgIB2P2qL9skVqzZfBdMClW4nmy2Wxvi1uYnJd%2BBVEmeqFlUsHgTYkSQpV0HUhtzxgH2QXlI%2B0VFydQsJ9P1ppHzTZVDS5NrRF1U6v9PgGg5%2FKcElKCYqfZHuGVhtf2h34dhxM3L%2BQeBjx3twsEMcADgtKMZch2wJbr6WpMBmTrUvgv5d5Ulzjc9Uz3rsdMzq3RirBRKNTvAmXJzcoOr&X-Amz-Signature=50826977d9aec079423cb6d92cbb9ac0ecf48d435baf4a9a18c978f736fc368d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOXQSD4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN6UTqRS%2FMIGxdkLb2tI6C%2BgTLTN26wooJjyxcQxMJAgIhANHXppiBaev8DCblqxmJ6WSGOF9bC7%2B16ft384cPMeMCKv8DCGYQABoMNjM3NDIzMTgzODA1Igz1q%2FwWxKdhJpG%2Bzbgq3ANAlQGwouhiBNIvNgUWoMv6iiFGuDE8aH7VSKNDmIREi9cTcWR0tbLKvmUyx6Ejju59qT%2Fq%2BD6abaByw%2FyqYbkrmBB6x52Nz6iKKzQarjpbB%2FEBS3luDFL0H1wFQLa6dljpFU%2B8%2Fd6IjYohSXlo%2FJ668rMFBDQMjieSNbQ9%2F5veNkBnsFCs2Rs7SzGBxPQDD%2BrMx9Tzi7U7MNuf9XKirpPnISOrNX8zdMXapc1%2FCoMykYtIVEj6JwCJTLQyCg%2F61LRsMzTnZxTHvhrIh2wuWnH5qreDUQ0Wl61Ek%2FVbh1X6U%2FbHL%2Bio4kUc2PUfqERt26h2BmTRwTxUoc0ysU950DJW3MfbuqX2xzcdwYm54SnGjh4GjrB%2BGnm%2BuK4CSkVHqoVuiaKua6%2BHH54yfLwuneMUJeN4NE0R9jOkn8R%2F%2FCAqeNx4KnJc20QanSslXrZ%2B4q9Bn%2FAcyUqt8YPP13JWXlo4lCwBLzFhFzzIOTBa02IBdXTaB7eANvx4Rr9kv7E1J%2FbppkCug9dXrIWVKgJilHTelcmMhtUpFJoz%2FtYhb6g%2BpUBnCXUoVUNYO479lojCyC%2BlSfqy4pMDQuqfZxqemra%2FI%2FZ4sUtU3VfbXkukAHPVNEngD9q0iC5GWe1qhjCK0oXABjqkASta4ihaKgIB2P2qL9skVqzZfBdMClW4nmy2Wxvi1uYnJd%2BBVEmeqFlUsHgTYkSQpV0HUhtzxgH2QXlI%2B0VFydQsJ9P1ppHzTZVDS5NrRF1U6v9PgGg5%2FKcElKCYqfZHuGVhtf2h34dhxM3L%2BQeBjx3twsEMcADgtKMZch2wJbr6WpMBmTrUvgv5d5Ulzjc9Uz3rsdMzq3RirBRKNTvAmXJzcoOr&X-Amz-Signature=d549d8d33223c68ad808ccc6842b6e9eeb33c905355dbbe9e26e1e702580d6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOXQSD4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN6UTqRS%2FMIGxdkLb2tI6C%2BgTLTN26wooJjyxcQxMJAgIhANHXppiBaev8DCblqxmJ6WSGOF9bC7%2B16ft384cPMeMCKv8DCGYQABoMNjM3NDIzMTgzODA1Igz1q%2FwWxKdhJpG%2Bzbgq3ANAlQGwouhiBNIvNgUWoMv6iiFGuDE8aH7VSKNDmIREi9cTcWR0tbLKvmUyx6Ejju59qT%2Fq%2BD6abaByw%2FyqYbkrmBB6x52Nz6iKKzQarjpbB%2FEBS3luDFL0H1wFQLa6dljpFU%2B8%2Fd6IjYohSXlo%2FJ668rMFBDQMjieSNbQ9%2F5veNkBnsFCs2Rs7SzGBxPQDD%2BrMx9Tzi7U7MNuf9XKirpPnISOrNX8zdMXapc1%2FCoMykYtIVEj6JwCJTLQyCg%2F61LRsMzTnZxTHvhrIh2wuWnH5qreDUQ0Wl61Ek%2FVbh1X6U%2FbHL%2Bio4kUc2PUfqERt26h2BmTRwTxUoc0ysU950DJW3MfbuqX2xzcdwYm54SnGjh4GjrB%2BGnm%2BuK4CSkVHqoVuiaKua6%2BHH54yfLwuneMUJeN4NE0R9jOkn8R%2F%2FCAqeNx4KnJc20QanSslXrZ%2B4q9Bn%2FAcyUqt8YPP13JWXlo4lCwBLzFhFzzIOTBa02IBdXTaB7eANvx4Rr9kv7E1J%2FbppkCug9dXrIWVKgJilHTelcmMhtUpFJoz%2FtYhb6g%2BpUBnCXUoVUNYO479lojCyC%2BlSfqy4pMDQuqfZxqemra%2FI%2FZ4sUtU3VfbXkukAHPVNEngD9q0iC5GWe1qhjCK0oXABjqkASta4ihaKgIB2P2qL9skVqzZfBdMClW4nmy2Wxvi1uYnJd%2BBVEmeqFlUsHgTYkSQpV0HUhtzxgH2QXlI%2B0VFydQsJ9P1ppHzTZVDS5NrRF1U6v9PgGg5%2FKcElKCYqfZHuGVhtf2h34dhxM3L%2BQeBjx3twsEMcADgtKMZch2wJbr6WpMBmTrUvgv5d5Ulzjc9Uz3rsdMzq3RirBRKNTvAmXJzcoOr&X-Amz-Signature=123f31ad097870d859fe395b8894c32455a86b59135d29f0234577767b7fd0b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOXQSD4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN6UTqRS%2FMIGxdkLb2tI6C%2BgTLTN26wooJjyxcQxMJAgIhANHXppiBaev8DCblqxmJ6WSGOF9bC7%2B16ft384cPMeMCKv8DCGYQABoMNjM3NDIzMTgzODA1Igz1q%2FwWxKdhJpG%2Bzbgq3ANAlQGwouhiBNIvNgUWoMv6iiFGuDE8aH7VSKNDmIREi9cTcWR0tbLKvmUyx6Ejju59qT%2Fq%2BD6abaByw%2FyqYbkrmBB6x52Nz6iKKzQarjpbB%2FEBS3luDFL0H1wFQLa6dljpFU%2B8%2Fd6IjYohSXlo%2FJ668rMFBDQMjieSNbQ9%2F5veNkBnsFCs2Rs7SzGBxPQDD%2BrMx9Tzi7U7MNuf9XKirpPnISOrNX8zdMXapc1%2FCoMykYtIVEj6JwCJTLQyCg%2F61LRsMzTnZxTHvhrIh2wuWnH5qreDUQ0Wl61Ek%2FVbh1X6U%2FbHL%2Bio4kUc2PUfqERt26h2BmTRwTxUoc0ysU950DJW3MfbuqX2xzcdwYm54SnGjh4GjrB%2BGnm%2BuK4CSkVHqoVuiaKua6%2BHH54yfLwuneMUJeN4NE0R9jOkn8R%2F%2FCAqeNx4KnJc20QanSslXrZ%2B4q9Bn%2FAcyUqt8YPP13JWXlo4lCwBLzFhFzzIOTBa02IBdXTaB7eANvx4Rr9kv7E1J%2FbppkCug9dXrIWVKgJilHTelcmMhtUpFJoz%2FtYhb6g%2BpUBnCXUoVUNYO479lojCyC%2BlSfqy4pMDQuqfZxqemra%2FI%2FZ4sUtU3VfbXkukAHPVNEngD9q0iC5GWe1qhjCK0oXABjqkASta4ihaKgIB2P2qL9skVqzZfBdMClW4nmy2Wxvi1uYnJd%2BBVEmeqFlUsHgTYkSQpV0HUhtzxgH2QXlI%2B0VFydQsJ9P1ppHzTZVDS5NrRF1U6v9PgGg5%2FKcElKCYqfZHuGVhtf2h34dhxM3L%2BQeBjx3twsEMcADgtKMZch2wJbr6WpMBmTrUvgv5d5Ulzjc9Uz3rsdMzq3RirBRKNTvAmXJzcoOr&X-Amz-Signature=ecd2508655ba59045a73535c7afd8a56f187efac8c027ed383ba3629cc238b07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCOXQSD4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN6UTqRS%2FMIGxdkLb2tI6C%2BgTLTN26wooJjyxcQxMJAgIhANHXppiBaev8DCblqxmJ6WSGOF9bC7%2B16ft384cPMeMCKv8DCGYQABoMNjM3NDIzMTgzODA1Igz1q%2FwWxKdhJpG%2Bzbgq3ANAlQGwouhiBNIvNgUWoMv6iiFGuDE8aH7VSKNDmIREi9cTcWR0tbLKvmUyx6Ejju59qT%2Fq%2BD6abaByw%2FyqYbkrmBB6x52Nz6iKKzQarjpbB%2FEBS3luDFL0H1wFQLa6dljpFU%2B8%2Fd6IjYohSXlo%2FJ668rMFBDQMjieSNbQ9%2F5veNkBnsFCs2Rs7SzGBxPQDD%2BrMx9Tzi7U7MNuf9XKirpPnISOrNX8zdMXapc1%2FCoMykYtIVEj6JwCJTLQyCg%2F61LRsMzTnZxTHvhrIh2wuWnH5qreDUQ0Wl61Ek%2FVbh1X6U%2FbHL%2Bio4kUc2PUfqERt26h2BmTRwTxUoc0ysU950DJW3MfbuqX2xzcdwYm54SnGjh4GjrB%2BGnm%2BuK4CSkVHqoVuiaKua6%2BHH54yfLwuneMUJeN4NE0R9jOkn8R%2F%2FCAqeNx4KnJc20QanSslXrZ%2B4q9Bn%2FAcyUqt8YPP13JWXlo4lCwBLzFhFzzIOTBa02IBdXTaB7eANvx4Rr9kv7E1J%2FbppkCug9dXrIWVKgJilHTelcmMhtUpFJoz%2FtYhb6g%2BpUBnCXUoVUNYO479lojCyC%2BlSfqy4pMDQuqfZxqemra%2FI%2FZ4sUtU3VfbXkukAHPVNEngD9q0iC5GWe1qhjCK0oXABjqkASta4ihaKgIB2P2qL9skVqzZfBdMClW4nmy2Wxvi1uYnJd%2BBVEmeqFlUsHgTYkSQpV0HUhtzxgH2QXlI%2B0VFydQsJ9P1ppHzTZVDS5NrRF1U6v9PgGg5%2FKcElKCYqfZHuGVhtf2h34dhxM3L%2BQeBjx3twsEMcADgtKMZch2wJbr6WpMBmTrUvgv5d5Ulzjc9Uz3rsdMzq3RirBRKNTvAmXJzcoOr&X-Amz-Signature=e1cb43414fdbfcd9ca5a6ba5d4b3c59d61581cb98a3132e40af29e592ca7794c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
