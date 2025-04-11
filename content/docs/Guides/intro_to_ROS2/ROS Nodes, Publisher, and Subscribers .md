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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAFHN4M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDYsAfqYjK9RAGWQTShLQeuK3SnUxw8R9BacbyzAtIWxwIhAL92mtH9bwb7EZ%2FrQ4Wwgv1QwRuQziBBJn4IU%2BbX995ZKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkW%2BG%2BfQHvLWa%2FEhkq3APeR5C1FtVeviAfs%2F6jEJQbidkjkGiEXUVRpWvpMcd5qA%2BILExvfZA3m8Pai7dcTlp1Qa4rKaWMf1ZwqerFV3eQIJ%2F0e0Sm9qmRZaljBR0q9xFUHbg9U96f8%2BnRi4YCe5nEfVwhHAkWMeKGsOBnEpaDlsgoB1erWmzeHvG%2FXOwfXKq1A8Isyl%2BhZlwYPy%2Bjt%2FqSSqLmOCrb2Qsk0xgMePN2LOxFQlznTZj456Majxt%2Bbp3hun9YWwEF9K%2Bjjf3RQNIIzTZz0ARsKWP%2FF6SQQ7nnaAkSm5xxV5qrF7okmJZNJNhNIMfy7Q1vXKGRGOmfON4VCsw%2FdP%2FA0V7ZISQ0yv6dS%2BhVBDp8ESN5BOCZSgdTn05daO0GllXbWQwGqSfwbsibGgMOppCxpvo%2BT5Fp2krZhE3Le0u03xhyp6EY48OuQOQ1cYUEHlH9IFgsh6poNTm7AxHyMpGCTQVZ9q7lV2GD2NFbzIhzB0dw6vdgAhHNVgfRt%2Fu8C5eowHSJpHG3TIBoaGhkz0lKFDf%2BmA9wq87ywTC1h5CLkOZE6x3JshwoQ6dEBlPmON6A3wzO8ISNv2fZT8cg6YIN2raZNg9JnFo8SsBSEqcl5w6d2YDcyzZ7Gke31LkdiRx4FwKSIjDpu%2BW%2FBjqkAT4ftinWexGHrwJIk7aOUtmQ2XTUsnoPYn0cS%2BuUAUjDVAyKkfaCqV9wMeopYcKrltEW2gZVdVyFBIqXtNtNrKoYTB4srr%2BzMDGzKl0fDjCO%2FytbQH5yE4IQrMnNSz1q1LmMk9DmTAA1y0TQUFf7w9bJBwDD5KlXFOirnOWpVxVpsC8iIw8pnXimI3zCHe3Lu9zHkBJ6DIrmFimdcG0wituge23L&X-Amz-Signature=decf611e62ab5225191b8d36d29257f23c0bdff604efce24439541a0427fe873&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAFHN4M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDYsAfqYjK9RAGWQTShLQeuK3SnUxw8R9BacbyzAtIWxwIhAL92mtH9bwb7EZ%2FrQ4Wwgv1QwRuQziBBJn4IU%2BbX995ZKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkW%2BG%2BfQHvLWa%2FEhkq3APeR5C1FtVeviAfs%2F6jEJQbidkjkGiEXUVRpWvpMcd5qA%2BILExvfZA3m8Pai7dcTlp1Qa4rKaWMf1ZwqerFV3eQIJ%2F0e0Sm9qmRZaljBR0q9xFUHbg9U96f8%2BnRi4YCe5nEfVwhHAkWMeKGsOBnEpaDlsgoB1erWmzeHvG%2FXOwfXKq1A8Isyl%2BhZlwYPy%2Bjt%2FqSSqLmOCrb2Qsk0xgMePN2LOxFQlznTZj456Majxt%2Bbp3hun9YWwEF9K%2Bjjf3RQNIIzTZz0ARsKWP%2FF6SQQ7nnaAkSm5xxV5qrF7okmJZNJNhNIMfy7Q1vXKGRGOmfON4VCsw%2FdP%2FA0V7ZISQ0yv6dS%2BhVBDp8ESN5BOCZSgdTn05daO0GllXbWQwGqSfwbsibGgMOppCxpvo%2BT5Fp2krZhE3Le0u03xhyp6EY48OuQOQ1cYUEHlH9IFgsh6poNTm7AxHyMpGCTQVZ9q7lV2GD2NFbzIhzB0dw6vdgAhHNVgfRt%2Fu8C5eowHSJpHG3TIBoaGhkz0lKFDf%2BmA9wq87ywTC1h5CLkOZE6x3JshwoQ6dEBlPmON6A3wzO8ISNv2fZT8cg6YIN2raZNg9JnFo8SsBSEqcl5w6d2YDcyzZ7Gke31LkdiRx4FwKSIjDpu%2BW%2FBjqkAT4ftinWexGHrwJIk7aOUtmQ2XTUsnoPYn0cS%2BuUAUjDVAyKkfaCqV9wMeopYcKrltEW2gZVdVyFBIqXtNtNrKoYTB4srr%2BzMDGzKl0fDjCO%2FytbQH5yE4IQrMnNSz1q1LmMk9DmTAA1y0TQUFf7w9bJBwDD5KlXFOirnOWpVxVpsC8iIw8pnXimI3zCHe3Lu9zHkBJ6DIrmFimdcG0wituge23L&X-Amz-Signature=c3677de8bc8ce43f364cc1d7b10853b3f51e0814a677040a5e5e7cb01a8ece72&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAFHN4M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDYsAfqYjK9RAGWQTShLQeuK3SnUxw8R9BacbyzAtIWxwIhAL92mtH9bwb7EZ%2FrQ4Wwgv1QwRuQziBBJn4IU%2BbX995ZKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkW%2BG%2BfQHvLWa%2FEhkq3APeR5C1FtVeviAfs%2F6jEJQbidkjkGiEXUVRpWvpMcd5qA%2BILExvfZA3m8Pai7dcTlp1Qa4rKaWMf1ZwqerFV3eQIJ%2F0e0Sm9qmRZaljBR0q9xFUHbg9U96f8%2BnRi4YCe5nEfVwhHAkWMeKGsOBnEpaDlsgoB1erWmzeHvG%2FXOwfXKq1A8Isyl%2BhZlwYPy%2Bjt%2FqSSqLmOCrb2Qsk0xgMePN2LOxFQlznTZj456Majxt%2Bbp3hun9YWwEF9K%2Bjjf3RQNIIzTZz0ARsKWP%2FF6SQQ7nnaAkSm5xxV5qrF7okmJZNJNhNIMfy7Q1vXKGRGOmfON4VCsw%2FdP%2FA0V7ZISQ0yv6dS%2BhVBDp8ESN5BOCZSgdTn05daO0GllXbWQwGqSfwbsibGgMOppCxpvo%2BT5Fp2krZhE3Le0u03xhyp6EY48OuQOQ1cYUEHlH9IFgsh6poNTm7AxHyMpGCTQVZ9q7lV2GD2NFbzIhzB0dw6vdgAhHNVgfRt%2Fu8C5eowHSJpHG3TIBoaGhkz0lKFDf%2BmA9wq87ywTC1h5CLkOZE6x3JshwoQ6dEBlPmON6A3wzO8ISNv2fZT8cg6YIN2raZNg9JnFo8SsBSEqcl5w6d2YDcyzZ7Gke31LkdiRx4FwKSIjDpu%2BW%2FBjqkAT4ftinWexGHrwJIk7aOUtmQ2XTUsnoPYn0cS%2BuUAUjDVAyKkfaCqV9wMeopYcKrltEW2gZVdVyFBIqXtNtNrKoYTB4srr%2BzMDGzKl0fDjCO%2FytbQH5yE4IQrMnNSz1q1LmMk9DmTAA1y0TQUFf7w9bJBwDD5KlXFOirnOWpVxVpsC8iIw8pnXimI3zCHe3Lu9zHkBJ6DIrmFimdcG0wituge23L&X-Amz-Signature=8a73fb5115bd073611f981c337c0ab4de93226c0ff39bda733eb91409e93fc74&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAFHN4M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDYsAfqYjK9RAGWQTShLQeuK3SnUxw8R9BacbyzAtIWxwIhAL92mtH9bwb7EZ%2FrQ4Wwgv1QwRuQziBBJn4IU%2BbX995ZKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkW%2BG%2BfQHvLWa%2FEhkq3APeR5C1FtVeviAfs%2F6jEJQbidkjkGiEXUVRpWvpMcd5qA%2BILExvfZA3m8Pai7dcTlp1Qa4rKaWMf1ZwqerFV3eQIJ%2F0e0Sm9qmRZaljBR0q9xFUHbg9U96f8%2BnRi4YCe5nEfVwhHAkWMeKGsOBnEpaDlsgoB1erWmzeHvG%2FXOwfXKq1A8Isyl%2BhZlwYPy%2Bjt%2FqSSqLmOCrb2Qsk0xgMePN2LOxFQlznTZj456Majxt%2Bbp3hun9YWwEF9K%2Bjjf3RQNIIzTZz0ARsKWP%2FF6SQQ7nnaAkSm5xxV5qrF7okmJZNJNhNIMfy7Q1vXKGRGOmfON4VCsw%2FdP%2FA0V7ZISQ0yv6dS%2BhVBDp8ESN5BOCZSgdTn05daO0GllXbWQwGqSfwbsibGgMOppCxpvo%2BT5Fp2krZhE3Le0u03xhyp6EY48OuQOQ1cYUEHlH9IFgsh6poNTm7AxHyMpGCTQVZ9q7lV2GD2NFbzIhzB0dw6vdgAhHNVgfRt%2Fu8C5eowHSJpHG3TIBoaGhkz0lKFDf%2BmA9wq87ywTC1h5CLkOZE6x3JshwoQ6dEBlPmON6A3wzO8ISNv2fZT8cg6YIN2raZNg9JnFo8SsBSEqcl5w6d2YDcyzZ7Gke31LkdiRx4FwKSIjDpu%2BW%2FBjqkAT4ftinWexGHrwJIk7aOUtmQ2XTUsnoPYn0cS%2BuUAUjDVAyKkfaCqV9wMeopYcKrltEW2gZVdVyFBIqXtNtNrKoYTB4srr%2BzMDGzKl0fDjCO%2FytbQH5yE4IQrMnNSz1q1LmMk9DmTAA1y0TQUFf7w9bJBwDD5KlXFOirnOWpVxVpsC8iIw8pnXimI3zCHe3Lu9zHkBJ6DIrmFimdcG0wituge23L&X-Amz-Signature=34a2f1927447c402acd2407f793046267fa907254219f07336216e2ea86bb0f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAFHN4M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDYsAfqYjK9RAGWQTShLQeuK3SnUxw8R9BacbyzAtIWxwIhAL92mtH9bwb7EZ%2FrQ4Wwgv1QwRuQziBBJn4IU%2BbX995ZKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkW%2BG%2BfQHvLWa%2FEhkq3APeR5C1FtVeviAfs%2F6jEJQbidkjkGiEXUVRpWvpMcd5qA%2BILExvfZA3m8Pai7dcTlp1Qa4rKaWMf1ZwqerFV3eQIJ%2F0e0Sm9qmRZaljBR0q9xFUHbg9U96f8%2BnRi4YCe5nEfVwhHAkWMeKGsOBnEpaDlsgoB1erWmzeHvG%2FXOwfXKq1A8Isyl%2BhZlwYPy%2Bjt%2FqSSqLmOCrb2Qsk0xgMePN2LOxFQlznTZj456Majxt%2Bbp3hun9YWwEF9K%2Bjjf3RQNIIzTZz0ARsKWP%2FF6SQQ7nnaAkSm5xxV5qrF7okmJZNJNhNIMfy7Q1vXKGRGOmfON4VCsw%2FdP%2FA0V7ZISQ0yv6dS%2BhVBDp8ESN5BOCZSgdTn05daO0GllXbWQwGqSfwbsibGgMOppCxpvo%2BT5Fp2krZhE3Le0u03xhyp6EY48OuQOQ1cYUEHlH9IFgsh6poNTm7AxHyMpGCTQVZ9q7lV2GD2NFbzIhzB0dw6vdgAhHNVgfRt%2Fu8C5eowHSJpHG3TIBoaGhkz0lKFDf%2BmA9wq87ywTC1h5CLkOZE6x3JshwoQ6dEBlPmON6A3wzO8ISNv2fZT8cg6YIN2raZNg9JnFo8SsBSEqcl5w6d2YDcyzZ7Gke31LkdiRx4FwKSIjDpu%2BW%2FBjqkAT4ftinWexGHrwJIk7aOUtmQ2XTUsnoPYn0cS%2BuUAUjDVAyKkfaCqV9wMeopYcKrltEW2gZVdVyFBIqXtNtNrKoYTB4srr%2BzMDGzKl0fDjCO%2FytbQH5yE4IQrMnNSz1q1LmMk9DmTAA1y0TQUFf7w9bJBwDD5KlXFOirnOWpVxVpsC8iIw8pnXimI3zCHe3Lu9zHkBJ6DIrmFimdcG0wituge23L&X-Amz-Signature=4c44e4110f48ca86ad85a1ef4dc7e4be2091a2a350d13d4061a0dc428de13aca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAFHN4M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDYsAfqYjK9RAGWQTShLQeuK3SnUxw8R9BacbyzAtIWxwIhAL92mtH9bwb7EZ%2FrQ4Wwgv1QwRuQziBBJn4IU%2BbX995ZKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkW%2BG%2BfQHvLWa%2FEhkq3APeR5C1FtVeviAfs%2F6jEJQbidkjkGiEXUVRpWvpMcd5qA%2BILExvfZA3m8Pai7dcTlp1Qa4rKaWMf1ZwqerFV3eQIJ%2F0e0Sm9qmRZaljBR0q9xFUHbg9U96f8%2BnRi4YCe5nEfVwhHAkWMeKGsOBnEpaDlsgoB1erWmzeHvG%2FXOwfXKq1A8Isyl%2BhZlwYPy%2Bjt%2FqSSqLmOCrb2Qsk0xgMePN2LOxFQlznTZj456Majxt%2Bbp3hun9YWwEF9K%2Bjjf3RQNIIzTZz0ARsKWP%2FF6SQQ7nnaAkSm5xxV5qrF7okmJZNJNhNIMfy7Q1vXKGRGOmfON4VCsw%2FdP%2FA0V7ZISQ0yv6dS%2BhVBDp8ESN5BOCZSgdTn05daO0GllXbWQwGqSfwbsibGgMOppCxpvo%2BT5Fp2krZhE3Le0u03xhyp6EY48OuQOQ1cYUEHlH9IFgsh6poNTm7AxHyMpGCTQVZ9q7lV2GD2NFbzIhzB0dw6vdgAhHNVgfRt%2Fu8C5eowHSJpHG3TIBoaGhkz0lKFDf%2BmA9wq87ywTC1h5CLkOZE6x3JshwoQ6dEBlPmON6A3wzO8ISNv2fZT8cg6YIN2raZNg9JnFo8SsBSEqcl5w6d2YDcyzZ7Gke31LkdiRx4FwKSIjDpu%2BW%2FBjqkAT4ftinWexGHrwJIk7aOUtmQ2XTUsnoPYn0cS%2BuUAUjDVAyKkfaCqV9wMeopYcKrltEW2gZVdVyFBIqXtNtNrKoYTB4srr%2BzMDGzKl0fDjCO%2FytbQH5yE4IQrMnNSz1q1LmMk9DmTAA1y0TQUFf7w9bJBwDD5KlXFOirnOWpVxVpsC8iIw8pnXimI3zCHe3Lu9zHkBJ6DIrmFimdcG0wituge23L&X-Amz-Signature=ff56a302559d552f7d05bb34fdc9e22d52bad23d77af1010f486b91e0a6bd5bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAFHN4M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDYsAfqYjK9RAGWQTShLQeuK3SnUxw8R9BacbyzAtIWxwIhAL92mtH9bwb7EZ%2FrQ4Wwgv1QwRuQziBBJn4IU%2BbX995ZKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkW%2BG%2BfQHvLWa%2FEhkq3APeR5C1FtVeviAfs%2F6jEJQbidkjkGiEXUVRpWvpMcd5qA%2BILExvfZA3m8Pai7dcTlp1Qa4rKaWMf1ZwqerFV3eQIJ%2F0e0Sm9qmRZaljBR0q9xFUHbg9U96f8%2BnRi4YCe5nEfVwhHAkWMeKGsOBnEpaDlsgoB1erWmzeHvG%2FXOwfXKq1A8Isyl%2BhZlwYPy%2Bjt%2FqSSqLmOCrb2Qsk0xgMePN2LOxFQlznTZj456Majxt%2Bbp3hun9YWwEF9K%2Bjjf3RQNIIzTZz0ARsKWP%2FF6SQQ7nnaAkSm5xxV5qrF7okmJZNJNhNIMfy7Q1vXKGRGOmfON4VCsw%2FdP%2FA0V7ZISQ0yv6dS%2BhVBDp8ESN5BOCZSgdTn05daO0GllXbWQwGqSfwbsibGgMOppCxpvo%2BT5Fp2krZhE3Le0u03xhyp6EY48OuQOQ1cYUEHlH9IFgsh6poNTm7AxHyMpGCTQVZ9q7lV2GD2NFbzIhzB0dw6vdgAhHNVgfRt%2Fu8C5eowHSJpHG3TIBoaGhkz0lKFDf%2BmA9wq87ywTC1h5CLkOZE6x3JshwoQ6dEBlPmON6A3wzO8ISNv2fZT8cg6YIN2raZNg9JnFo8SsBSEqcl5w6d2YDcyzZ7Gke31LkdiRx4FwKSIjDpu%2BW%2FBjqkAT4ftinWexGHrwJIk7aOUtmQ2XTUsnoPYn0cS%2BuUAUjDVAyKkfaCqV9wMeopYcKrltEW2gZVdVyFBIqXtNtNrKoYTB4srr%2BzMDGzKl0fDjCO%2FytbQH5yE4IQrMnNSz1q1LmMk9DmTAA1y0TQUFf7w9bJBwDD5KlXFOirnOWpVxVpsC8iIw8pnXimI3zCHe3Lu9zHkBJ6DIrmFimdcG0wituge23L&X-Amz-Signature=625371b5f4cfb3a47ace1dad2689ca4322a240069b34fd34d2abe95cb14248bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAFHN4M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDYsAfqYjK9RAGWQTShLQeuK3SnUxw8R9BacbyzAtIWxwIhAL92mtH9bwb7EZ%2FrQ4Wwgv1QwRuQziBBJn4IU%2BbX995ZKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkW%2BG%2BfQHvLWa%2FEhkq3APeR5C1FtVeviAfs%2F6jEJQbidkjkGiEXUVRpWvpMcd5qA%2BILExvfZA3m8Pai7dcTlp1Qa4rKaWMf1ZwqerFV3eQIJ%2F0e0Sm9qmRZaljBR0q9xFUHbg9U96f8%2BnRi4YCe5nEfVwhHAkWMeKGsOBnEpaDlsgoB1erWmzeHvG%2FXOwfXKq1A8Isyl%2BhZlwYPy%2Bjt%2FqSSqLmOCrb2Qsk0xgMePN2LOxFQlznTZj456Majxt%2Bbp3hun9YWwEF9K%2Bjjf3RQNIIzTZz0ARsKWP%2FF6SQQ7nnaAkSm5xxV5qrF7okmJZNJNhNIMfy7Q1vXKGRGOmfON4VCsw%2FdP%2FA0V7ZISQ0yv6dS%2BhVBDp8ESN5BOCZSgdTn05daO0GllXbWQwGqSfwbsibGgMOppCxpvo%2BT5Fp2krZhE3Le0u03xhyp6EY48OuQOQ1cYUEHlH9IFgsh6poNTm7AxHyMpGCTQVZ9q7lV2GD2NFbzIhzB0dw6vdgAhHNVgfRt%2Fu8C5eowHSJpHG3TIBoaGhkz0lKFDf%2BmA9wq87ywTC1h5CLkOZE6x3JshwoQ6dEBlPmON6A3wzO8ISNv2fZT8cg6YIN2raZNg9JnFo8SsBSEqcl5w6d2YDcyzZ7Gke31LkdiRx4FwKSIjDpu%2BW%2FBjqkAT4ftinWexGHrwJIk7aOUtmQ2XTUsnoPYn0cS%2BuUAUjDVAyKkfaCqV9wMeopYcKrltEW2gZVdVyFBIqXtNtNrKoYTB4srr%2BzMDGzKl0fDjCO%2FytbQH5yE4IQrMnNSz1q1LmMk9DmTAA1y0TQUFf7w9bJBwDD5KlXFOirnOWpVxVpsC8iIw8pnXimI3zCHe3Lu9zHkBJ6DIrmFimdcG0wituge23L&X-Amz-Signature=0b1f205beddbc9841524e2e3166783383347684b0d2e6a9a016669fbcad684aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
