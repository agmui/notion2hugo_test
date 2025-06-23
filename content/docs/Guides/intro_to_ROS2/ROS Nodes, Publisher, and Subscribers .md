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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMFEKWF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBdD9n932UxXIb2YW9f7DZqo46DnpU7o8rX9PiYZAq8qAiBObnoCENZ0%2BZRndp8y5oPEofzCKUvohF%2F2SEXuNfOekSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0CmPCR9RLqhBZSEDKtwDtcyp%2F2qiIjuVptWawEb6mV3Tu6VC3BosMziYWIpumhwfWEHWxhBXRkjV1D3femc8gkED%2Fe40OZf%2BVCg25bEEZ%2FcwaU1vBD2VbdyVbx0A5BWjb7xowZ1Akg8EroVH5zCErvmIVA8clUD5F3eLgficoCrsLbW%2BTlCU7E9CO3%2Ffra0fR%2FiX%2BjRNezuUSeCNesHkBCT9reyQe3hKBqIMSOmiljgMuCBOP1mLef35UlivNvL%2Baa5aflCYZYu942%2FPeG3u16U0Cc6ot0E6VSWhsX4qSxxwBRnBiKq%2BcDo12h1oUlicRD14KjG%2FOEuJln%2BC5%2FyB1cXrIa37Oyl5l5hQeAaioO4Ey2j1aLJimmCWW%2BYG1dQ%2F7wF9XfWI5wygv9JNaDHBIeRTmaDF163LzQ0YPw1X%2B288oJBQVmQDN7PXoPF4j5mHHIV1heK6DvzwytofcdSjYiGN0572ZzqjTlqXaWhw4gHNMKXPYR%2FMVTEQP5gNvKrl27wOKbEk0Ka%2BphG4%2BeTDKYpLq2gYuN7R78zD1A9okf%2FyjhVlWflmgod2saNA1E3g2f%2FtBzd8kaz1nroxdYekOqERv%2BnP5tG27jGT5mmxsg4RyZ4PlIOVfIL0qU19Lzl2QqvXpliu7Itkx4AwiajiwgY6pgHPHBvnON%2FNRebgPSYnzVHUXUgBQ%2FZtmNuZiYKj9y0cO1PLNSY8jtRcc8pG3QGjpJhXXdL9vgpPKA%2Bqd2C5yK66T6gJ47zJE9QSi5fTL82iU0GEMbQdhJtKbBLZPA%2BwonctfOEiUQybC5S5%2BOYCkDZh%2B0bYHB%2FmXBCOjOmBG8aS%2Fh%2BDPqkoTxx6sqInCcbEin5FsMFNxXbbzZMkKkH1buqeCWiTgj0P&X-Amz-Signature=8142b54301efb22812741f504a61038b4d4d5287a6db13054cd5de0a31adba37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMFEKWF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBdD9n932UxXIb2YW9f7DZqo46DnpU7o8rX9PiYZAq8qAiBObnoCENZ0%2BZRndp8y5oPEofzCKUvohF%2F2SEXuNfOekSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0CmPCR9RLqhBZSEDKtwDtcyp%2F2qiIjuVptWawEb6mV3Tu6VC3BosMziYWIpumhwfWEHWxhBXRkjV1D3femc8gkED%2Fe40OZf%2BVCg25bEEZ%2FcwaU1vBD2VbdyVbx0A5BWjb7xowZ1Akg8EroVH5zCErvmIVA8clUD5F3eLgficoCrsLbW%2BTlCU7E9CO3%2Ffra0fR%2FiX%2BjRNezuUSeCNesHkBCT9reyQe3hKBqIMSOmiljgMuCBOP1mLef35UlivNvL%2Baa5aflCYZYu942%2FPeG3u16U0Cc6ot0E6VSWhsX4qSxxwBRnBiKq%2BcDo12h1oUlicRD14KjG%2FOEuJln%2BC5%2FyB1cXrIa37Oyl5l5hQeAaioO4Ey2j1aLJimmCWW%2BYG1dQ%2F7wF9XfWI5wygv9JNaDHBIeRTmaDF163LzQ0YPw1X%2B288oJBQVmQDN7PXoPF4j5mHHIV1heK6DvzwytofcdSjYiGN0572ZzqjTlqXaWhw4gHNMKXPYR%2FMVTEQP5gNvKrl27wOKbEk0Ka%2BphG4%2BeTDKYpLq2gYuN7R78zD1A9okf%2FyjhVlWflmgod2saNA1E3g2f%2FtBzd8kaz1nroxdYekOqERv%2BnP5tG27jGT5mmxsg4RyZ4PlIOVfIL0qU19Lzl2QqvXpliu7Itkx4AwiajiwgY6pgHPHBvnON%2FNRebgPSYnzVHUXUgBQ%2FZtmNuZiYKj9y0cO1PLNSY8jtRcc8pG3QGjpJhXXdL9vgpPKA%2Bqd2C5yK66T6gJ47zJE9QSi5fTL82iU0GEMbQdhJtKbBLZPA%2BwonctfOEiUQybC5S5%2BOYCkDZh%2B0bYHB%2FmXBCOjOmBG8aS%2Fh%2BDPqkoTxx6sqInCcbEin5FsMFNxXbbzZMkKkH1buqeCWiTgj0P&X-Amz-Signature=01f433c17aa83a1743eb2695e8f0df405a149b9b35207def4d573a30c03f11a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMFEKWF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBdD9n932UxXIb2YW9f7DZqo46DnpU7o8rX9PiYZAq8qAiBObnoCENZ0%2BZRndp8y5oPEofzCKUvohF%2F2SEXuNfOekSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0CmPCR9RLqhBZSEDKtwDtcyp%2F2qiIjuVptWawEb6mV3Tu6VC3BosMziYWIpumhwfWEHWxhBXRkjV1D3femc8gkED%2Fe40OZf%2BVCg25bEEZ%2FcwaU1vBD2VbdyVbx0A5BWjb7xowZ1Akg8EroVH5zCErvmIVA8clUD5F3eLgficoCrsLbW%2BTlCU7E9CO3%2Ffra0fR%2FiX%2BjRNezuUSeCNesHkBCT9reyQe3hKBqIMSOmiljgMuCBOP1mLef35UlivNvL%2Baa5aflCYZYu942%2FPeG3u16U0Cc6ot0E6VSWhsX4qSxxwBRnBiKq%2BcDo12h1oUlicRD14KjG%2FOEuJln%2BC5%2FyB1cXrIa37Oyl5l5hQeAaioO4Ey2j1aLJimmCWW%2BYG1dQ%2F7wF9XfWI5wygv9JNaDHBIeRTmaDF163LzQ0YPw1X%2B288oJBQVmQDN7PXoPF4j5mHHIV1heK6DvzwytofcdSjYiGN0572ZzqjTlqXaWhw4gHNMKXPYR%2FMVTEQP5gNvKrl27wOKbEk0Ka%2BphG4%2BeTDKYpLq2gYuN7R78zD1A9okf%2FyjhVlWflmgod2saNA1E3g2f%2FtBzd8kaz1nroxdYekOqERv%2BnP5tG27jGT5mmxsg4RyZ4PlIOVfIL0qU19Lzl2QqvXpliu7Itkx4AwiajiwgY6pgHPHBvnON%2FNRebgPSYnzVHUXUgBQ%2FZtmNuZiYKj9y0cO1PLNSY8jtRcc8pG3QGjpJhXXdL9vgpPKA%2Bqd2C5yK66T6gJ47zJE9QSi5fTL82iU0GEMbQdhJtKbBLZPA%2BwonctfOEiUQybC5S5%2BOYCkDZh%2B0bYHB%2FmXBCOjOmBG8aS%2Fh%2BDPqkoTxx6sqInCcbEin5FsMFNxXbbzZMkKkH1buqeCWiTgj0P&X-Amz-Signature=954848d750ee348c50c8280e7176e8e206b8ed186ffae243a39c7d014d39e7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMFEKWF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBdD9n932UxXIb2YW9f7DZqo46DnpU7o8rX9PiYZAq8qAiBObnoCENZ0%2BZRndp8y5oPEofzCKUvohF%2F2SEXuNfOekSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0CmPCR9RLqhBZSEDKtwDtcyp%2F2qiIjuVptWawEb6mV3Tu6VC3BosMziYWIpumhwfWEHWxhBXRkjV1D3femc8gkED%2Fe40OZf%2BVCg25bEEZ%2FcwaU1vBD2VbdyVbx0A5BWjb7xowZ1Akg8EroVH5zCErvmIVA8clUD5F3eLgficoCrsLbW%2BTlCU7E9CO3%2Ffra0fR%2FiX%2BjRNezuUSeCNesHkBCT9reyQe3hKBqIMSOmiljgMuCBOP1mLef35UlivNvL%2Baa5aflCYZYu942%2FPeG3u16U0Cc6ot0E6VSWhsX4qSxxwBRnBiKq%2BcDo12h1oUlicRD14KjG%2FOEuJln%2BC5%2FyB1cXrIa37Oyl5l5hQeAaioO4Ey2j1aLJimmCWW%2BYG1dQ%2F7wF9XfWI5wygv9JNaDHBIeRTmaDF163LzQ0YPw1X%2B288oJBQVmQDN7PXoPF4j5mHHIV1heK6DvzwytofcdSjYiGN0572ZzqjTlqXaWhw4gHNMKXPYR%2FMVTEQP5gNvKrl27wOKbEk0Ka%2BphG4%2BeTDKYpLq2gYuN7R78zD1A9okf%2FyjhVlWflmgod2saNA1E3g2f%2FtBzd8kaz1nroxdYekOqERv%2BnP5tG27jGT5mmxsg4RyZ4PlIOVfIL0qU19Lzl2QqvXpliu7Itkx4AwiajiwgY6pgHPHBvnON%2FNRebgPSYnzVHUXUgBQ%2FZtmNuZiYKj9y0cO1PLNSY8jtRcc8pG3QGjpJhXXdL9vgpPKA%2Bqd2C5yK66T6gJ47zJE9QSi5fTL82iU0GEMbQdhJtKbBLZPA%2BwonctfOEiUQybC5S5%2BOYCkDZh%2B0bYHB%2FmXBCOjOmBG8aS%2Fh%2BDPqkoTxx6sqInCcbEin5FsMFNxXbbzZMkKkH1buqeCWiTgj0P&X-Amz-Signature=352b07773ff2843dc26d74ed9bd034fa39ff7b99b0ba5e4e697757b43d32d6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMFEKWF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBdD9n932UxXIb2YW9f7DZqo46DnpU7o8rX9PiYZAq8qAiBObnoCENZ0%2BZRndp8y5oPEofzCKUvohF%2F2SEXuNfOekSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0CmPCR9RLqhBZSEDKtwDtcyp%2F2qiIjuVptWawEb6mV3Tu6VC3BosMziYWIpumhwfWEHWxhBXRkjV1D3femc8gkED%2Fe40OZf%2BVCg25bEEZ%2FcwaU1vBD2VbdyVbx0A5BWjb7xowZ1Akg8EroVH5zCErvmIVA8clUD5F3eLgficoCrsLbW%2BTlCU7E9CO3%2Ffra0fR%2FiX%2BjRNezuUSeCNesHkBCT9reyQe3hKBqIMSOmiljgMuCBOP1mLef35UlivNvL%2Baa5aflCYZYu942%2FPeG3u16U0Cc6ot0E6VSWhsX4qSxxwBRnBiKq%2BcDo12h1oUlicRD14KjG%2FOEuJln%2BC5%2FyB1cXrIa37Oyl5l5hQeAaioO4Ey2j1aLJimmCWW%2BYG1dQ%2F7wF9XfWI5wygv9JNaDHBIeRTmaDF163LzQ0YPw1X%2B288oJBQVmQDN7PXoPF4j5mHHIV1heK6DvzwytofcdSjYiGN0572ZzqjTlqXaWhw4gHNMKXPYR%2FMVTEQP5gNvKrl27wOKbEk0Ka%2BphG4%2BeTDKYpLq2gYuN7R78zD1A9okf%2FyjhVlWflmgod2saNA1E3g2f%2FtBzd8kaz1nroxdYekOqERv%2BnP5tG27jGT5mmxsg4RyZ4PlIOVfIL0qU19Lzl2QqvXpliu7Itkx4AwiajiwgY6pgHPHBvnON%2FNRebgPSYnzVHUXUgBQ%2FZtmNuZiYKj9y0cO1PLNSY8jtRcc8pG3QGjpJhXXdL9vgpPKA%2Bqd2C5yK66T6gJ47zJE9QSi5fTL82iU0GEMbQdhJtKbBLZPA%2BwonctfOEiUQybC5S5%2BOYCkDZh%2B0bYHB%2FmXBCOjOmBG8aS%2Fh%2BDPqkoTxx6sqInCcbEin5FsMFNxXbbzZMkKkH1buqeCWiTgj0P&X-Amz-Signature=f28c667b790b10109ef9922242e7de14a092a7e350e49a181d996f1ede91eb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMFEKWF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBdD9n932UxXIb2YW9f7DZqo46DnpU7o8rX9PiYZAq8qAiBObnoCENZ0%2BZRndp8y5oPEofzCKUvohF%2F2SEXuNfOekSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0CmPCR9RLqhBZSEDKtwDtcyp%2F2qiIjuVptWawEb6mV3Tu6VC3BosMziYWIpumhwfWEHWxhBXRkjV1D3femc8gkED%2Fe40OZf%2BVCg25bEEZ%2FcwaU1vBD2VbdyVbx0A5BWjb7xowZ1Akg8EroVH5zCErvmIVA8clUD5F3eLgficoCrsLbW%2BTlCU7E9CO3%2Ffra0fR%2FiX%2BjRNezuUSeCNesHkBCT9reyQe3hKBqIMSOmiljgMuCBOP1mLef35UlivNvL%2Baa5aflCYZYu942%2FPeG3u16U0Cc6ot0E6VSWhsX4qSxxwBRnBiKq%2BcDo12h1oUlicRD14KjG%2FOEuJln%2BC5%2FyB1cXrIa37Oyl5l5hQeAaioO4Ey2j1aLJimmCWW%2BYG1dQ%2F7wF9XfWI5wygv9JNaDHBIeRTmaDF163LzQ0YPw1X%2B288oJBQVmQDN7PXoPF4j5mHHIV1heK6DvzwytofcdSjYiGN0572ZzqjTlqXaWhw4gHNMKXPYR%2FMVTEQP5gNvKrl27wOKbEk0Ka%2BphG4%2BeTDKYpLq2gYuN7R78zD1A9okf%2FyjhVlWflmgod2saNA1E3g2f%2FtBzd8kaz1nroxdYekOqERv%2BnP5tG27jGT5mmxsg4RyZ4PlIOVfIL0qU19Lzl2QqvXpliu7Itkx4AwiajiwgY6pgHPHBvnON%2FNRebgPSYnzVHUXUgBQ%2FZtmNuZiYKj9y0cO1PLNSY8jtRcc8pG3QGjpJhXXdL9vgpPKA%2Bqd2C5yK66T6gJ47zJE9QSi5fTL82iU0GEMbQdhJtKbBLZPA%2BwonctfOEiUQybC5S5%2BOYCkDZh%2B0bYHB%2FmXBCOjOmBG8aS%2Fh%2BDPqkoTxx6sqInCcbEin5FsMFNxXbbzZMkKkH1buqeCWiTgj0P&X-Amz-Signature=abf30a8bf2b070fbefaa70bec9593c68c53aee4627378ae18fcca80d25152ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMFEKWF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBdD9n932UxXIb2YW9f7DZqo46DnpU7o8rX9PiYZAq8qAiBObnoCENZ0%2BZRndp8y5oPEofzCKUvohF%2F2SEXuNfOekSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0CmPCR9RLqhBZSEDKtwDtcyp%2F2qiIjuVptWawEb6mV3Tu6VC3BosMziYWIpumhwfWEHWxhBXRkjV1D3femc8gkED%2Fe40OZf%2BVCg25bEEZ%2FcwaU1vBD2VbdyVbx0A5BWjb7xowZ1Akg8EroVH5zCErvmIVA8clUD5F3eLgficoCrsLbW%2BTlCU7E9CO3%2Ffra0fR%2FiX%2BjRNezuUSeCNesHkBCT9reyQe3hKBqIMSOmiljgMuCBOP1mLef35UlivNvL%2Baa5aflCYZYu942%2FPeG3u16U0Cc6ot0E6VSWhsX4qSxxwBRnBiKq%2BcDo12h1oUlicRD14KjG%2FOEuJln%2BC5%2FyB1cXrIa37Oyl5l5hQeAaioO4Ey2j1aLJimmCWW%2BYG1dQ%2F7wF9XfWI5wygv9JNaDHBIeRTmaDF163LzQ0YPw1X%2B288oJBQVmQDN7PXoPF4j5mHHIV1heK6DvzwytofcdSjYiGN0572ZzqjTlqXaWhw4gHNMKXPYR%2FMVTEQP5gNvKrl27wOKbEk0Ka%2BphG4%2BeTDKYpLq2gYuN7R78zD1A9okf%2FyjhVlWflmgod2saNA1E3g2f%2FtBzd8kaz1nroxdYekOqERv%2BnP5tG27jGT5mmxsg4RyZ4PlIOVfIL0qU19Lzl2QqvXpliu7Itkx4AwiajiwgY6pgHPHBvnON%2FNRebgPSYnzVHUXUgBQ%2FZtmNuZiYKj9y0cO1PLNSY8jtRcc8pG3QGjpJhXXdL9vgpPKA%2Bqd2C5yK66T6gJ47zJE9QSi5fTL82iU0GEMbQdhJtKbBLZPA%2BwonctfOEiUQybC5S5%2BOYCkDZh%2B0bYHB%2FmXBCOjOmBG8aS%2Fh%2BDPqkoTxx6sqInCcbEin5FsMFNxXbbzZMkKkH1buqeCWiTgj0P&X-Amz-Signature=8b7166e30fb59fccacc289924e52c48ca2e094a46fe3c50bdffbc9fe5d8a94de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMFEKWF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBdD9n932UxXIb2YW9f7DZqo46DnpU7o8rX9PiYZAq8qAiBObnoCENZ0%2BZRndp8y5oPEofzCKUvohF%2F2SEXuNfOekSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0CmPCR9RLqhBZSEDKtwDtcyp%2F2qiIjuVptWawEb6mV3Tu6VC3BosMziYWIpumhwfWEHWxhBXRkjV1D3femc8gkED%2Fe40OZf%2BVCg25bEEZ%2FcwaU1vBD2VbdyVbx0A5BWjb7xowZ1Akg8EroVH5zCErvmIVA8clUD5F3eLgficoCrsLbW%2BTlCU7E9CO3%2Ffra0fR%2FiX%2BjRNezuUSeCNesHkBCT9reyQe3hKBqIMSOmiljgMuCBOP1mLef35UlivNvL%2Baa5aflCYZYu942%2FPeG3u16U0Cc6ot0E6VSWhsX4qSxxwBRnBiKq%2BcDo12h1oUlicRD14KjG%2FOEuJln%2BC5%2FyB1cXrIa37Oyl5l5hQeAaioO4Ey2j1aLJimmCWW%2BYG1dQ%2F7wF9XfWI5wygv9JNaDHBIeRTmaDF163LzQ0YPw1X%2B288oJBQVmQDN7PXoPF4j5mHHIV1heK6DvzwytofcdSjYiGN0572ZzqjTlqXaWhw4gHNMKXPYR%2FMVTEQP5gNvKrl27wOKbEk0Ka%2BphG4%2BeTDKYpLq2gYuN7R78zD1A9okf%2FyjhVlWflmgod2saNA1E3g2f%2FtBzd8kaz1nroxdYekOqERv%2BnP5tG27jGT5mmxsg4RyZ4PlIOVfIL0qU19Lzl2QqvXpliu7Itkx4AwiajiwgY6pgHPHBvnON%2FNRebgPSYnzVHUXUgBQ%2FZtmNuZiYKj9y0cO1PLNSY8jtRcc8pG3QGjpJhXXdL9vgpPKA%2Bqd2C5yK66T6gJ47zJE9QSi5fTL82iU0GEMbQdhJtKbBLZPA%2BwonctfOEiUQybC5S5%2BOYCkDZh%2B0bYHB%2FmXBCOjOmBG8aS%2Fh%2BDPqkoTxx6sqInCcbEin5FsMFNxXbbzZMkKkH1buqeCWiTgj0P&X-Amz-Signature=81a1fdafad408930dd60bbece67dde2b6155d7314fa0fbc173f4fb5659c24c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
