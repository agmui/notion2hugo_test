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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WW6QIP6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0wI7gKm2kpNQO6K9%2Bk4ew356pUwQaGZhtf%2B2lMO6JaAiAnCeFhL%2FMvaeQJ%2B5HMi8HfruwdJgVYQnohcZbklSwA4SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmH7yEQp0ZA3ZN7ooKtwD%2BMuDc3QkhwQOT4UUeIfDt31yjNTazGP2aahd3YsZRkgSMZGQltZn2RXuW6nsb%2B19XE9tuBZ8XMp31FNvos01IhUg5v0AMfbqPCh%2FtQnkYlVFghwhvnsf1wGpepJ%2FMVNhKZ4ngrKmYdYiJBc6TBqzRoMiXn97MNFik3cDpUKlFRt6oqtJKakMYAZb4rli4s38n3fyx25HD2n2Gm3m%2BJGOOtxMeQVX4JoW3swE%2FnBPdB0BI%2B6jPQGHWgoTgdRAwaar3xhFqXr4nfhU9zknbkeYIEvaZ%2F5rynris9KEHZiSrms%2FfLeYEkT4eREnet3BfvqxP6QofTI0ezNTT4iJC2bOpIl%2BztK1U6OLFSBjK5qmOiJpa6VkUIElD7RIdNPApG2RtUkft%2FqkIdrjuIUvE3RYZZC9u9ZKH%2B0TcYHyRcM7KtT9mqPdKEr6XnP7ihBaVDfm%2F9WMrrGjCgOtLHErbeQfrKd%2Bgt%2Fj%2B3v6WL7w9%2BhUCbGzM9%2BIH0NDIGoR7ZUJMZ9qLBP5ctFAsQmYt1PqwNvsf6Grtwp0%2BUapmXFxbzZBEzyZYVCF0bfDK1cRlgZvqY6VVb6lyGEw4VPn7VCuSx%2BC54TcxsmR8n37m2rNrdmE75vNJxdosdMiirXRBEowsqKoxAY6pgHIrt1vF89vCCYHGRJQ%2F2GsCvHe2IvN%2F0KVov29RcINWz7yTDchwUo817j8xg8QTA%2Ffu1kQks8hDFS5imWamnJ9uAMaf21Sro2OxrvJbRsLYd2t3PUcfszgNvDV8%2BcxjK8trCOuzqXM41BKWd8QOegcdb3dulTa%2FhYfCAa7f35wwd1Ea3pZvRrbOfueQhfpep2dAVhme%2BExzcB9vBM9vTjaVniy7x9L&X-Amz-Signature=f6d51ac34e0759c33ddb7d91e71860c673eacf8d7f4a6c139fe28fffb0f06a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WW6QIP6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0wI7gKm2kpNQO6K9%2Bk4ew356pUwQaGZhtf%2B2lMO6JaAiAnCeFhL%2FMvaeQJ%2B5HMi8HfruwdJgVYQnohcZbklSwA4SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmH7yEQp0ZA3ZN7ooKtwD%2BMuDc3QkhwQOT4UUeIfDt31yjNTazGP2aahd3YsZRkgSMZGQltZn2RXuW6nsb%2B19XE9tuBZ8XMp31FNvos01IhUg5v0AMfbqPCh%2FtQnkYlVFghwhvnsf1wGpepJ%2FMVNhKZ4ngrKmYdYiJBc6TBqzRoMiXn97MNFik3cDpUKlFRt6oqtJKakMYAZb4rli4s38n3fyx25HD2n2Gm3m%2BJGOOtxMeQVX4JoW3swE%2FnBPdB0BI%2B6jPQGHWgoTgdRAwaar3xhFqXr4nfhU9zknbkeYIEvaZ%2F5rynris9KEHZiSrms%2FfLeYEkT4eREnet3BfvqxP6QofTI0ezNTT4iJC2bOpIl%2BztK1U6OLFSBjK5qmOiJpa6VkUIElD7RIdNPApG2RtUkft%2FqkIdrjuIUvE3RYZZC9u9ZKH%2B0TcYHyRcM7KtT9mqPdKEr6XnP7ihBaVDfm%2F9WMrrGjCgOtLHErbeQfrKd%2Bgt%2Fj%2B3v6WL7w9%2BhUCbGzM9%2BIH0NDIGoR7ZUJMZ9qLBP5ctFAsQmYt1PqwNvsf6Grtwp0%2BUapmXFxbzZBEzyZYVCF0bfDK1cRlgZvqY6VVb6lyGEw4VPn7VCuSx%2BC54TcxsmR8n37m2rNrdmE75vNJxdosdMiirXRBEowsqKoxAY6pgHIrt1vF89vCCYHGRJQ%2F2GsCvHe2IvN%2F0KVov29RcINWz7yTDchwUo817j8xg8QTA%2Ffu1kQks8hDFS5imWamnJ9uAMaf21Sro2OxrvJbRsLYd2t3PUcfszgNvDV8%2BcxjK8trCOuzqXM41BKWd8QOegcdb3dulTa%2FhYfCAa7f35wwd1Ea3pZvRrbOfueQhfpep2dAVhme%2BExzcB9vBM9vTjaVniy7x9L&X-Amz-Signature=40c87946d691fa0940b07711f4020e42cf438636918e1170fafe9bf8fb3f40d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WW6QIP6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0wI7gKm2kpNQO6K9%2Bk4ew356pUwQaGZhtf%2B2lMO6JaAiAnCeFhL%2FMvaeQJ%2B5HMi8HfruwdJgVYQnohcZbklSwA4SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmH7yEQp0ZA3ZN7ooKtwD%2BMuDc3QkhwQOT4UUeIfDt31yjNTazGP2aahd3YsZRkgSMZGQltZn2RXuW6nsb%2B19XE9tuBZ8XMp31FNvos01IhUg5v0AMfbqPCh%2FtQnkYlVFghwhvnsf1wGpepJ%2FMVNhKZ4ngrKmYdYiJBc6TBqzRoMiXn97MNFik3cDpUKlFRt6oqtJKakMYAZb4rli4s38n3fyx25HD2n2Gm3m%2BJGOOtxMeQVX4JoW3swE%2FnBPdB0BI%2B6jPQGHWgoTgdRAwaar3xhFqXr4nfhU9zknbkeYIEvaZ%2F5rynris9KEHZiSrms%2FfLeYEkT4eREnet3BfvqxP6QofTI0ezNTT4iJC2bOpIl%2BztK1U6OLFSBjK5qmOiJpa6VkUIElD7RIdNPApG2RtUkft%2FqkIdrjuIUvE3RYZZC9u9ZKH%2B0TcYHyRcM7KtT9mqPdKEr6XnP7ihBaVDfm%2F9WMrrGjCgOtLHErbeQfrKd%2Bgt%2Fj%2B3v6WL7w9%2BhUCbGzM9%2BIH0NDIGoR7ZUJMZ9qLBP5ctFAsQmYt1PqwNvsf6Grtwp0%2BUapmXFxbzZBEzyZYVCF0bfDK1cRlgZvqY6VVb6lyGEw4VPn7VCuSx%2BC54TcxsmR8n37m2rNrdmE75vNJxdosdMiirXRBEowsqKoxAY6pgHIrt1vF89vCCYHGRJQ%2F2GsCvHe2IvN%2F0KVov29RcINWz7yTDchwUo817j8xg8QTA%2Ffu1kQks8hDFS5imWamnJ9uAMaf21Sro2OxrvJbRsLYd2t3PUcfszgNvDV8%2BcxjK8trCOuzqXM41BKWd8QOegcdb3dulTa%2FhYfCAa7f35wwd1Ea3pZvRrbOfueQhfpep2dAVhme%2BExzcB9vBM9vTjaVniy7x9L&X-Amz-Signature=2e3eb1f11872063436b09efdbf77ca9dc1497dec9225a6989b966675c6d6a063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WW6QIP6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0wI7gKm2kpNQO6K9%2Bk4ew356pUwQaGZhtf%2B2lMO6JaAiAnCeFhL%2FMvaeQJ%2B5HMi8HfruwdJgVYQnohcZbklSwA4SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmH7yEQp0ZA3ZN7ooKtwD%2BMuDc3QkhwQOT4UUeIfDt31yjNTazGP2aahd3YsZRkgSMZGQltZn2RXuW6nsb%2B19XE9tuBZ8XMp31FNvos01IhUg5v0AMfbqPCh%2FtQnkYlVFghwhvnsf1wGpepJ%2FMVNhKZ4ngrKmYdYiJBc6TBqzRoMiXn97MNFik3cDpUKlFRt6oqtJKakMYAZb4rli4s38n3fyx25HD2n2Gm3m%2BJGOOtxMeQVX4JoW3swE%2FnBPdB0BI%2B6jPQGHWgoTgdRAwaar3xhFqXr4nfhU9zknbkeYIEvaZ%2F5rynris9KEHZiSrms%2FfLeYEkT4eREnet3BfvqxP6QofTI0ezNTT4iJC2bOpIl%2BztK1U6OLFSBjK5qmOiJpa6VkUIElD7RIdNPApG2RtUkft%2FqkIdrjuIUvE3RYZZC9u9ZKH%2B0TcYHyRcM7KtT9mqPdKEr6XnP7ihBaVDfm%2F9WMrrGjCgOtLHErbeQfrKd%2Bgt%2Fj%2B3v6WL7w9%2BhUCbGzM9%2BIH0NDIGoR7ZUJMZ9qLBP5ctFAsQmYt1PqwNvsf6Grtwp0%2BUapmXFxbzZBEzyZYVCF0bfDK1cRlgZvqY6VVb6lyGEw4VPn7VCuSx%2BC54TcxsmR8n37m2rNrdmE75vNJxdosdMiirXRBEowsqKoxAY6pgHIrt1vF89vCCYHGRJQ%2F2GsCvHe2IvN%2F0KVov29RcINWz7yTDchwUo817j8xg8QTA%2Ffu1kQks8hDFS5imWamnJ9uAMaf21Sro2OxrvJbRsLYd2t3PUcfszgNvDV8%2BcxjK8trCOuzqXM41BKWd8QOegcdb3dulTa%2FhYfCAa7f35wwd1Ea3pZvRrbOfueQhfpep2dAVhme%2BExzcB9vBM9vTjaVniy7x9L&X-Amz-Signature=d5eaecc88c78cfa87e7fa584ba1599bb214f84fa929ee4dc882b05f9f2ad4f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WW6QIP6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0wI7gKm2kpNQO6K9%2Bk4ew356pUwQaGZhtf%2B2lMO6JaAiAnCeFhL%2FMvaeQJ%2B5HMi8HfruwdJgVYQnohcZbklSwA4SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmH7yEQp0ZA3ZN7ooKtwD%2BMuDc3QkhwQOT4UUeIfDt31yjNTazGP2aahd3YsZRkgSMZGQltZn2RXuW6nsb%2B19XE9tuBZ8XMp31FNvos01IhUg5v0AMfbqPCh%2FtQnkYlVFghwhvnsf1wGpepJ%2FMVNhKZ4ngrKmYdYiJBc6TBqzRoMiXn97MNFik3cDpUKlFRt6oqtJKakMYAZb4rli4s38n3fyx25HD2n2Gm3m%2BJGOOtxMeQVX4JoW3swE%2FnBPdB0BI%2B6jPQGHWgoTgdRAwaar3xhFqXr4nfhU9zknbkeYIEvaZ%2F5rynris9KEHZiSrms%2FfLeYEkT4eREnet3BfvqxP6QofTI0ezNTT4iJC2bOpIl%2BztK1U6OLFSBjK5qmOiJpa6VkUIElD7RIdNPApG2RtUkft%2FqkIdrjuIUvE3RYZZC9u9ZKH%2B0TcYHyRcM7KtT9mqPdKEr6XnP7ihBaVDfm%2F9WMrrGjCgOtLHErbeQfrKd%2Bgt%2Fj%2B3v6WL7w9%2BhUCbGzM9%2BIH0NDIGoR7ZUJMZ9qLBP5ctFAsQmYt1PqwNvsf6Grtwp0%2BUapmXFxbzZBEzyZYVCF0bfDK1cRlgZvqY6VVb6lyGEw4VPn7VCuSx%2BC54TcxsmR8n37m2rNrdmE75vNJxdosdMiirXRBEowsqKoxAY6pgHIrt1vF89vCCYHGRJQ%2F2GsCvHe2IvN%2F0KVov29RcINWz7yTDchwUo817j8xg8QTA%2Ffu1kQks8hDFS5imWamnJ9uAMaf21Sro2OxrvJbRsLYd2t3PUcfszgNvDV8%2BcxjK8trCOuzqXM41BKWd8QOegcdb3dulTa%2FhYfCAa7f35wwd1Ea3pZvRrbOfueQhfpep2dAVhme%2BExzcB9vBM9vTjaVniy7x9L&X-Amz-Signature=d85d8f2f8ffb180222573ede393bdd884aa259a26c1018f96b140408bd8bcecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WW6QIP6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0wI7gKm2kpNQO6K9%2Bk4ew356pUwQaGZhtf%2B2lMO6JaAiAnCeFhL%2FMvaeQJ%2B5HMi8HfruwdJgVYQnohcZbklSwA4SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmH7yEQp0ZA3ZN7ooKtwD%2BMuDc3QkhwQOT4UUeIfDt31yjNTazGP2aahd3YsZRkgSMZGQltZn2RXuW6nsb%2B19XE9tuBZ8XMp31FNvos01IhUg5v0AMfbqPCh%2FtQnkYlVFghwhvnsf1wGpepJ%2FMVNhKZ4ngrKmYdYiJBc6TBqzRoMiXn97MNFik3cDpUKlFRt6oqtJKakMYAZb4rli4s38n3fyx25HD2n2Gm3m%2BJGOOtxMeQVX4JoW3swE%2FnBPdB0BI%2B6jPQGHWgoTgdRAwaar3xhFqXr4nfhU9zknbkeYIEvaZ%2F5rynris9KEHZiSrms%2FfLeYEkT4eREnet3BfvqxP6QofTI0ezNTT4iJC2bOpIl%2BztK1U6OLFSBjK5qmOiJpa6VkUIElD7RIdNPApG2RtUkft%2FqkIdrjuIUvE3RYZZC9u9ZKH%2B0TcYHyRcM7KtT9mqPdKEr6XnP7ihBaVDfm%2F9WMrrGjCgOtLHErbeQfrKd%2Bgt%2Fj%2B3v6WL7w9%2BhUCbGzM9%2BIH0NDIGoR7ZUJMZ9qLBP5ctFAsQmYt1PqwNvsf6Grtwp0%2BUapmXFxbzZBEzyZYVCF0bfDK1cRlgZvqY6VVb6lyGEw4VPn7VCuSx%2BC54TcxsmR8n37m2rNrdmE75vNJxdosdMiirXRBEowsqKoxAY6pgHIrt1vF89vCCYHGRJQ%2F2GsCvHe2IvN%2F0KVov29RcINWz7yTDchwUo817j8xg8QTA%2Ffu1kQks8hDFS5imWamnJ9uAMaf21Sro2OxrvJbRsLYd2t3PUcfszgNvDV8%2BcxjK8trCOuzqXM41BKWd8QOegcdb3dulTa%2FhYfCAa7f35wwd1Ea3pZvRrbOfueQhfpep2dAVhme%2BExzcB9vBM9vTjaVniy7x9L&X-Amz-Signature=016a88d182afe0b5adf89e6a0649a626e57ade54228c17f060bde388bbe16df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WW6QIP6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0wI7gKm2kpNQO6K9%2Bk4ew356pUwQaGZhtf%2B2lMO6JaAiAnCeFhL%2FMvaeQJ%2B5HMi8HfruwdJgVYQnohcZbklSwA4SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmH7yEQp0ZA3ZN7ooKtwD%2BMuDc3QkhwQOT4UUeIfDt31yjNTazGP2aahd3YsZRkgSMZGQltZn2RXuW6nsb%2B19XE9tuBZ8XMp31FNvos01IhUg5v0AMfbqPCh%2FtQnkYlVFghwhvnsf1wGpepJ%2FMVNhKZ4ngrKmYdYiJBc6TBqzRoMiXn97MNFik3cDpUKlFRt6oqtJKakMYAZb4rli4s38n3fyx25HD2n2Gm3m%2BJGOOtxMeQVX4JoW3swE%2FnBPdB0BI%2B6jPQGHWgoTgdRAwaar3xhFqXr4nfhU9zknbkeYIEvaZ%2F5rynris9KEHZiSrms%2FfLeYEkT4eREnet3BfvqxP6QofTI0ezNTT4iJC2bOpIl%2BztK1U6OLFSBjK5qmOiJpa6VkUIElD7RIdNPApG2RtUkft%2FqkIdrjuIUvE3RYZZC9u9ZKH%2B0TcYHyRcM7KtT9mqPdKEr6XnP7ihBaVDfm%2F9WMrrGjCgOtLHErbeQfrKd%2Bgt%2Fj%2B3v6WL7w9%2BhUCbGzM9%2BIH0NDIGoR7ZUJMZ9qLBP5ctFAsQmYt1PqwNvsf6Grtwp0%2BUapmXFxbzZBEzyZYVCF0bfDK1cRlgZvqY6VVb6lyGEw4VPn7VCuSx%2BC54TcxsmR8n37m2rNrdmE75vNJxdosdMiirXRBEowsqKoxAY6pgHIrt1vF89vCCYHGRJQ%2F2GsCvHe2IvN%2F0KVov29RcINWz7yTDchwUo817j8xg8QTA%2Ffu1kQks8hDFS5imWamnJ9uAMaf21Sro2OxrvJbRsLYd2t3PUcfszgNvDV8%2BcxjK8trCOuzqXM41BKWd8QOegcdb3dulTa%2FhYfCAa7f35wwd1Ea3pZvRrbOfueQhfpep2dAVhme%2BExzcB9vBM9vTjaVniy7x9L&X-Amz-Signature=7d2ee0799dc2cbb78e72e44c7361a3ea561ab5c7d4703b555e0739531a27303e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WW6QIP6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0wI7gKm2kpNQO6K9%2Bk4ew356pUwQaGZhtf%2B2lMO6JaAiAnCeFhL%2FMvaeQJ%2B5HMi8HfruwdJgVYQnohcZbklSwA4SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmH7yEQp0ZA3ZN7ooKtwD%2BMuDc3QkhwQOT4UUeIfDt31yjNTazGP2aahd3YsZRkgSMZGQltZn2RXuW6nsb%2B19XE9tuBZ8XMp31FNvos01IhUg5v0AMfbqPCh%2FtQnkYlVFghwhvnsf1wGpepJ%2FMVNhKZ4ngrKmYdYiJBc6TBqzRoMiXn97MNFik3cDpUKlFRt6oqtJKakMYAZb4rli4s38n3fyx25HD2n2Gm3m%2BJGOOtxMeQVX4JoW3swE%2FnBPdB0BI%2B6jPQGHWgoTgdRAwaar3xhFqXr4nfhU9zknbkeYIEvaZ%2F5rynris9KEHZiSrms%2FfLeYEkT4eREnet3BfvqxP6QofTI0ezNTT4iJC2bOpIl%2BztK1U6OLFSBjK5qmOiJpa6VkUIElD7RIdNPApG2RtUkft%2FqkIdrjuIUvE3RYZZC9u9ZKH%2B0TcYHyRcM7KtT9mqPdKEr6XnP7ihBaVDfm%2F9WMrrGjCgOtLHErbeQfrKd%2Bgt%2Fj%2B3v6WL7w9%2BhUCbGzM9%2BIH0NDIGoR7ZUJMZ9qLBP5ctFAsQmYt1PqwNvsf6Grtwp0%2BUapmXFxbzZBEzyZYVCF0bfDK1cRlgZvqY6VVb6lyGEw4VPn7VCuSx%2BC54TcxsmR8n37m2rNrdmE75vNJxdosdMiirXRBEowsqKoxAY6pgHIrt1vF89vCCYHGRJQ%2F2GsCvHe2IvN%2F0KVov29RcINWz7yTDchwUo817j8xg8QTA%2Ffu1kQks8hDFS5imWamnJ9uAMaf21Sro2OxrvJbRsLYd2t3PUcfszgNvDV8%2BcxjK8trCOuzqXM41BKWd8QOegcdb3dulTa%2FhYfCAa7f35wwd1Ea3pZvRrbOfueQhfpep2dAVhme%2BExzcB9vBM9vTjaVniy7x9L&X-Amz-Signature=fd9a5113fa7749a06e7be9ff78a7f68529e7c09afe38b69d170cbb0bd8e38fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
