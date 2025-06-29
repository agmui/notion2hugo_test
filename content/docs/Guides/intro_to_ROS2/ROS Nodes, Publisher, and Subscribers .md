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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JSOF7I%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9SQdWbQ7%2FVUdOd8i9l7XLYKfiCEBNGctWbfQ9g0QsAiBinAjYgymfc5MRorX2KuDfnpHMT605BYy%2FW66Xx8ejEyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNYnk%2By92v1cwn9t5KtwDYtqWbpQmZTcrf7V24XwKUbCraF%2FlRly1McpNHjVXY2PTi23LiMSnFTSo09kxPInhdErniopTOJHoGvfhg0zIoda70GWDZIwhvtEsMyUJEybklNDm0WAs2wQLnYOd11LkrhSL8PHPfbey%2FNfB1wDIAavCNL6SgPn86z0ItMl6NUVOGVUhfo7gfc7m8WnucljKZMiepAGuuzNWVuL8d7DzrUQh8NLjsjgJJ8yYq%2BiD7fdNnQJfvJrdKUV1v9kThhI8A5Jb1oIkkBytHdo%2BdB%2FSoh3JtlbwxEDbz%2FgXm3CXMqoNa3PVUk5RV8Ujg4HCBpd7BpfxUb%2FWu6GLgbMT8MRBv26tgRE0hCSypB5DbNEbYhk1QLheCHdnGOao9r9y11e5Y%2FQSPgTZ%2BM7moGC6wCQwb7ADIr%2BvHoLhyFIwPX7u%2FHHMi7OT%2Bz443NOz8KUVWwxy0Bh26R1w2SsDTytk7I2SFZfqn038qJlc2y4OmyydGX6zZ1CQheiK0fqKt0DzuevvG1e5EOxOWW9EIKXMArBB2q7YwlyUQWTuuw0q0ESXog0nFLug0uagnUeL4hgNWFsaR1ZduyLY1GdOet%2FQCg0hNhnCNjOh4fPw%2FXZkwgUZ4Lrf7VF418JwE9OzRv4w45WCwwY6pgHKIeuHrjXuVErLLXVvF7DmectilYP%2BiCaJgA8HN5UDJfqpaO4mekIzB845nr%2FBITLiabk7be4tlgxh2w0QAgU1ELUdJ1tzP5rnwxjTNi05t0TAzJbMoyNwxd4DQ4DDsfY6zcfFMQsCSfduUWqDIQcPeyIP%2Bq55qTuSSXPAPXsKFgqeY0t6huxIh2PJ5CrrOTofaHvHaVkhyQV6bYwVObzqwjVQg8XU&X-Amz-Signature=57a65b53f2cdfde4cc4dbfa3fb468e4827b8099d64d229790a1432752646874f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JSOF7I%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9SQdWbQ7%2FVUdOd8i9l7XLYKfiCEBNGctWbfQ9g0QsAiBinAjYgymfc5MRorX2KuDfnpHMT605BYy%2FW66Xx8ejEyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNYnk%2By92v1cwn9t5KtwDYtqWbpQmZTcrf7V24XwKUbCraF%2FlRly1McpNHjVXY2PTi23LiMSnFTSo09kxPInhdErniopTOJHoGvfhg0zIoda70GWDZIwhvtEsMyUJEybklNDm0WAs2wQLnYOd11LkrhSL8PHPfbey%2FNfB1wDIAavCNL6SgPn86z0ItMl6NUVOGVUhfo7gfc7m8WnucljKZMiepAGuuzNWVuL8d7DzrUQh8NLjsjgJJ8yYq%2BiD7fdNnQJfvJrdKUV1v9kThhI8A5Jb1oIkkBytHdo%2BdB%2FSoh3JtlbwxEDbz%2FgXm3CXMqoNa3PVUk5RV8Ujg4HCBpd7BpfxUb%2FWu6GLgbMT8MRBv26tgRE0hCSypB5DbNEbYhk1QLheCHdnGOao9r9y11e5Y%2FQSPgTZ%2BM7moGC6wCQwb7ADIr%2BvHoLhyFIwPX7u%2FHHMi7OT%2Bz443NOz8KUVWwxy0Bh26R1w2SsDTytk7I2SFZfqn038qJlc2y4OmyydGX6zZ1CQheiK0fqKt0DzuevvG1e5EOxOWW9EIKXMArBB2q7YwlyUQWTuuw0q0ESXog0nFLug0uagnUeL4hgNWFsaR1ZduyLY1GdOet%2FQCg0hNhnCNjOh4fPw%2FXZkwgUZ4Lrf7VF418JwE9OzRv4w45WCwwY6pgHKIeuHrjXuVErLLXVvF7DmectilYP%2BiCaJgA8HN5UDJfqpaO4mekIzB845nr%2FBITLiabk7be4tlgxh2w0QAgU1ELUdJ1tzP5rnwxjTNi05t0TAzJbMoyNwxd4DQ4DDsfY6zcfFMQsCSfduUWqDIQcPeyIP%2Bq55qTuSSXPAPXsKFgqeY0t6huxIh2PJ5CrrOTofaHvHaVkhyQV6bYwVObzqwjVQg8XU&X-Amz-Signature=bb0cad9ef53031d0300ec5afab53d1cb0623ae2ac718f71f7da773ae131313cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JSOF7I%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9SQdWbQ7%2FVUdOd8i9l7XLYKfiCEBNGctWbfQ9g0QsAiBinAjYgymfc5MRorX2KuDfnpHMT605BYy%2FW66Xx8ejEyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNYnk%2By92v1cwn9t5KtwDYtqWbpQmZTcrf7V24XwKUbCraF%2FlRly1McpNHjVXY2PTi23LiMSnFTSo09kxPInhdErniopTOJHoGvfhg0zIoda70GWDZIwhvtEsMyUJEybklNDm0WAs2wQLnYOd11LkrhSL8PHPfbey%2FNfB1wDIAavCNL6SgPn86z0ItMl6NUVOGVUhfo7gfc7m8WnucljKZMiepAGuuzNWVuL8d7DzrUQh8NLjsjgJJ8yYq%2BiD7fdNnQJfvJrdKUV1v9kThhI8A5Jb1oIkkBytHdo%2BdB%2FSoh3JtlbwxEDbz%2FgXm3CXMqoNa3PVUk5RV8Ujg4HCBpd7BpfxUb%2FWu6GLgbMT8MRBv26tgRE0hCSypB5DbNEbYhk1QLheCHdnGOao9r9y11e5Y%2FQSPgTZ%2BM7moGC6wCQwb7ADIr%2BvHoLhyFIwPX7u%2FHHMi7OT%2Bz443NOz8KUVWwxy0Bh26R1w2SsDTytk7I2SFZfqn038qJlc2y4OmyydGX6zZ1CQheiK0fqKt0DzuevvG1e5EOxOWW9EIKXMArBB2q7YwlyUQWTuuw0q0ESXog0nFLug0uagnUeL4hgNWFsaR1ZduyLY1GdOet%2FQCg0hNhnCNjOh4fPw%2FXZkwgUZ4Lrf7VF418JwE9OzRv4w45WCwwY6pgHKIeuHrjXuVErLLXVvF7DmectilYP%2BiCaJgA8HN5UDJfqpaO4mekIzB845nr%2FBITLiabk7be4tlgxh2w0QAgU1ELUdJ1tzP5rnwxjTNi05t0TAzJbMoyNwxd4DQ4DDsfY6zcfFMQsCSfduUWqDIQcPeyIP%2Bq55qTuSSXPAPXsKFgqeY0t6huxIh2PJ5CrrOTofaHvHaVkhyQV6bYwVObzqwjVQg8XU&X-Amz-Signature=8ec34adbb71d87cb532f38fe5d4d947154e84130af7ab1e641443dca2ca77b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JSOF7I%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9SQdWbQ7%2FVUdOd8i9l7XLYKfiCEBNGctWbfQ9g0QsAiBinAjYgymfc5MRorX2KuDfnpHMT605BYy%2FW66Xx8ejEyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNYnk%2By92v1cwn9t5KtwDYtqWbpQmZTcrf7V24XwKUbCraF%2FlRly1McpNHjVXY2PTi23LiMSnFTSo09kxPInhdErniopTOJHoGvfhg0zIoda70GWDZIwhvtEsMyUJEybklNDm0WAs2wQLnYOd11LkrhSL8PHPfbey%2FNfB1wDIAavCNL6SgPn86z0ItMl6NUVOGVUhfo7gfc7m8WnucljKZMiepAGuuzNWVuL8d7DzrUQh8NLjsjgJJ8yYq%2BiD7fdNnQJfvJrdKUV1v9kThhI8A5Jb1oIkkBytHdo%2BdB%2FSoh3JtlbwxEDbz%2FgXm3CXMqoNa3PVUk5RV8Ujg4HCBpd7BpfxUb%2FWu6GLgbMT8MRBv26tgRE0hCSypB5DbNEbYhk1QLheCHdnGOao9r9y11e5Y%2FQSPgTZ%2BM7moGC6wCQwb7ADIr%2BvHoLhyFIwPX7u%2FHHMi7OT%2Bz443NOz8KUVWwxy0Bh26R1w2SsDTytk7I2SFZfqn038qJlc2y4OmyydGX6zZ1CQheiK0fqKt0DzuevvG1e5EOxOWW9EIKXMArBB2q7YwlyUQWTuuw0q0ESXog0nFLug0uagnUeL4hgNWFsaR1ZduyLY1GdOet%2FQCg0hNhnCNjOh4fPw%2FXZkwgUZ4Lrf7VF418JwE9OzRv4w45WCwwY6pgHKIeuHrjXuVErLLXVvF7DmectilYP%2BiCaJgA8HN5UDJfqpaO4mekIzB845nr%2FBITLiabk7be4tlgxh2w0QAgU1ELUdJ1tzP5rnwxjTNi05t0TAzJbMoyNwxd4DQ4DDsfY6zcfFMQsCSfduUWqDIQcPeyIP%2Bq55qTuSSXPAPXsKFgqeY0t6huxIh2PJ5CrrOTofaHvHaVkhyQV6bYwVObzqwjVQg8XU&X-Amz-Signature=2cd1437a9c95b9c7ff9e79febe50170e4d93c9a77faf0fe72d95ec3623ca3299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JSOF7I%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9SQdWbQ7%2FVUdOd8i9l7XLYKfiCEBNGctWbfQ9g0QsAiBinAjYgymfc5MRorX2KuDfnpHMT605BYy%2FW66Xx8ejEyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNYnk%2By92v1cwn9t5KtwDYtqWbpQmZTcrf7V24XwKUbCraF%2FlRly1McpNHjVXY2PTi23LiMSnFTSo09kxPInhdErniopTOJHoGvfhg0zIoda70GWDZIwhvtEsMyUJEybklNDm0WAs2wQLnYOd11LkrhSL8PHPfbey%2FNfB1wDIAavCNL6SgPn86z0ItMl6NUVOGVUhfo7gfc7m8WnucljKZMiepAGuuzNWVuL8d7DzrUQh8NLjsjgJJ8yYq%2BiD7fdNnQJfvJrdKUV1v9kThhI8A5Jb1oIkkBytHdo%2BdB%2FSoh3JtlbwxEDbz%2FgXm3CXMqoNa3PVUk5RV8Ujg4HCBpd7BpfxUb%2FWu6GLgbMT8MRBv26tgRE0hCSypB5DbNEbYhk1QLheCHdnGOao9r9y11e5Y%2FQSPgTZ%2BM7moGC6wCQwb7ADIr%2BvHoLhyFIwPX7u%2FHHMi7OT%2Bz443NOz8KUVWwxy0Bh26R1w2SsDTytk7I2SFZfqn038qJlc2y4OmyydGX6zZ1CQheiK0fqKt0DzuevvG1e5EOxOWW9EIKXMArBB2q7YwlyUQWTuuw0q0ESXog0nFLug0uagnUeL4hgNWFsaR1ZduyLY1GdOet%2FQCg0hNhnCNjOh4fPw%2FXZkwgUZ4Lrf7VF418JwE9OzRv4w45WCwwY6pgHKIeuHrjXuVErLLXVvF7DmectilYP%2BiCaJgA8HN5UDJfqpaO4mekIzB845nr%2FBITLiabk7be4tlgxh2w0QAgU1ELUdJ1tzP5rnwxjTNi05t0TAzJbMoyNwxd4DQ4DDsfY6zcfFMQsCSfduUWqDIQcPeyIP%2Bq55qTuSSXPAPXsKFgqeY0t6huxIh2PJ5CrrOTofaHvHaVkhyQV6bYwVObzqwjVQg8XU&X-Amz-Signature=23345133d5eb0d0927689c866151899fc798c68be4520d4cd5ffa1763c1a9417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JSOF7I%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9SQdWbQ7%2FVUdOd8i9l7XLYKfiCEBNGctWbfQ9g0QsAiBinAjYgymfc5MRorX2KuDfnpHMT605BYy%2FW66Xx8ejEyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNYnk%2By92v1cwn9t5KtwDYtqWbpQmZTcrf7V24XwKUbCraF%2FlRly1McpNHjVXY2PTi23LiMSnFTSo09kxPInhdErniopTOJHoGvfhg0zIoda70GWDZIwhvtEsMyUJEybklNDm0WAs2wQLnYOd11LkrhSL8PHPfbey%2FNfB1wDIAavCNL6SgPn86z0ItMl6NUVOGVUhfo7gfc7m8WnucljKZMiepAGuuzNWVuL8d7DzrUQh8NLjsjgJJ8yYq%2BiD7fdNnQJfvJrdKUV1v9kThhI8A5Jb1oIkkBytHdo%2BdB%2FSoh3JtlbwxEDbz%2FgXm3CXMqoNa3PVUk5RV8Ujg4HCBpd7BpfxUb%2FWu6GLgbMT8MRBv26tgRE0hCSypB5DbNEbYhk1QLheCHdnGOao9r9y11e5Y%2FQSPgTZ%2BM7moGC6wCQwb7ADIr%2BvHoLhyFIwPX7u%2FHHMi7OT%2Bz443NOz8KUVWwxy0Bh26R1w2SsDTytk7I2SFZfqn038qJlc2y4OmyydGX6zZ1CQheiK0fqKt0DzuevvG1e5EOxOWW9EIKXMArBB2q7YwlyUQWTuuw0q0ESXog0nFLug0uagnUeL4hgNWFsaR1ZduyLY1GdOet%2FQCg0hNhnCNjOh4fPw%2FXZkwgUZ4Lrf7VF418JwE9OzRv4w45WCwwY6pgHKIeuHrjXuVErLLXVvF7DmectilYP%2BiCaJgA8HN5UDJfqpaO4mekIzB845nr%2FBITLiabk7be4tlgxh2w0QAgU1ELUdJ1tzP5rnwxjTNi05t0TAzJbMoyNwxd4DQ4DDsfY6zcfFMQsCSfduUWqDIQcPeyIP%2Bq55qTuSSXPAPXsKFgqeY0t6huxIh2PJ5CrrOTofaHvHaVkhyQV6bYwVObzqwjVQg8XU&X-Amz-Signature=37c2b293a28a47109578ea71c81a894802bd37e2fad42e8109f21b4931404581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JSOF7I%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9SQdWbQ7%2FVUdOd8i9l7XLYKfiCEBNGctWbfQ9g0QsAiBinAjYgymfc5MRorX2KuDfnpHMT605BYy%2FW66Xx8ejEyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNYnk%2By92v1cwn9t5KtwDYtqWbpQmZTcrf7V24XwKUbCraF%2FlRly1McpNHjVXY2PTi23LiMSnFTSo09kxPInhdErniopTOJHoGvfhg0zIoda70GWDZIwhvtEsMyUJEybklNDm0WAs2wQLnYOd11LkrhSL8PHPfbey%2FNfB1wDIAavCNL6SgPn86z0ItMl6NUVOGVUhfo7gfc7m8WnucljKZMiepAGuuzNWVuL8d7DzrUQh8NLjsjgJJ8yYq%2BiD7fdNnQJfvJrdKUV1v9kThhI8A5Jb1oIkkBytHdo%2BdB%2FSoh3JtlbwxEDbz%2FgXm3CXMqoNa3PVUk5RV8Ujg4HCBpd7BpfxUb%2FWu6GLgbMT8MRBv26tgRE0hCSypB5DbNEbYhk1QLheCHdnGOao9r9y11e5Y%2FQSPgTZ%2BM7moGC6wCQwb7ADIr%2BvHoLhyFIwPX7u%2FHHMi7OT%2Bz443NOz8KUVWwxy0Bh26R1w2SsDTytk7I2SFZfqn038qJlc2y4OmyydGX6zZ1CQheiK0fqKt0DzuevvG1e5EOxOWW9EIKXMArBB2q7YwlyUQWTuuw0q0ESXog0nFLug0uagnUeL4hgNWFsaR1ZduyLY1GdOet%2FQCg0hNhnCNjOh4fPw%2FXZkwgUZ4Lrf7VF418JwE9OzRv4w45WCwwY6pgHKIeuHrjXuVErLLXVvF7DmectilYP%2BiCaJgA8HN5UDJfqpaO4mekIzB845nr%2FBITLiabk7be4tlgxh2w0QAgU1ELUdJ1tzP5rnwxjTNi05t0TAzJbMoyNwxd4DQ4DDsfY6zcfFMQsCSfduUWqDIQcPeyIP%2Bq55qTuSSXPAPXsKFgqeY0t6huxIh2PJ5CrrOTofaHvHaVkhyQV6bYwVObzqwjVQg8XU&X-Amz-Signature=22e2d895bf119050d279bd9250323d9611f27ac20755c9eb3d2610c38238df08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JSOF7I%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd9SQdWbQ7%2FVUdOd8i9l7XLYKfiCEBNGctWbfQ9g0QsAiBinAjYgymfc5MRorX2KuDfnpHMT605BYy%2FW66Xx8ejEyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNYnk%2By92v1cwn9t5KtwDYtqWbpQmZTcrf7V24XwKUbCraF%2FlRly1McpNHjVXY2PTi23LiMSnFTSo09kxPInhdErniopTOJHoGvfhg0zIoda70GWDZIwhvtEsMyUJEybklNDm0WAs2wQLnYOd11LkrhSL8PHPfbey%2FNfB1wDIAavCNL6SgPn86z0ItMl6NUVOGVUhfo7gfc7m8WnucljKZMiepAGuuzNWVuL8d7DzrUQh8NLjsjgJJ8yYq%2BiD7fdNnQJfvJrdKUV1v9kThhI8A5Jb1oIkkBytHdo%2BdB%2FSoh3JtlbwxEDbz%2FgXm3CXMqoNa3PVUk5RV8Ujg4HCBpd7BpfxUb%2FWu6GLgbMT8MRBv26tgRE0hCSypB5DbNEbYhk1QLheCHdnGOao9r9y11e5Y%2FQSPgTZ%2BM7moGC6wCQwb7ADIr%2BvHoLhyFIwPX7u%2FHHMi7OT%2Bz443NOz8KUVWwxy0Bh26R1w2SsDTytk7I2SFZfqn038qJlc2y4OmyydGX6zZ1CQheiK0fqKt0DzuevvG1e5EOxOWW9EIKXMArBB2q7YwlyUQWTuuw0q0ESXog0nFLug0uagnUeL4hgNWFsaR1ZduyLY1GdOet%2FQCg0hNhnCNjOh4fPw%2FXZkwgUZ4Lrf7VF418JwE9OzRv4w45WCwwY6pgHKIeuHrjXuVErLLXVvF7DmectilYP%2BiCaJgA8HN5UDJfqpaO4mekIzB845nr%2FBITLiabk7be4tlgxh2w0QAgU1ELUdJ1tzP5rnwxjTNi05t0TAzJbMoyNwxd4DQ4DDsfY6zcfFMQsCSfduUWqDIQcPeyIP%2Bq55qTuSSXPAPXsKFgqeY0t6huxIh2PJ5CrrOTofaHvHaVkhyQV6bYwVObzqwjVQg8XU&X-Amz-Signature=31f61c825422cc18bcc26e5c49de05069960dea0e2f3c32c58ac2e19a752e136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
