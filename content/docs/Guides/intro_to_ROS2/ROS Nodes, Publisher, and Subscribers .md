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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHKICJQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDKIz6bzOnlADPSBCin8VIlulZNxf1ROw1GLoFzyZFNawIhAK0X4couemwzRhj2agdBssxx0RXSWwi7DXHp7ZfsS0ExKv8DCHgQABoMNjM3NDIzMTgzODA1Igz3ywrYegQSKSfZOvQq3ANxXY79OOWVCutmOtZvkq9XOkMxnWkqomkJFM3XClK7Gs4zuIaXdVWABgWgA7KcUe3aOwe7AXXDcOsrWwlFjtr%2BvsJe%2BV6MRGIj71Hn2yWfByQwegqODQR3xTThZJxvcIaC1%2FIGtrPlXFgVFPNcx49xi0OIZU7EsSlLLHGQ%2FnDq%2BXdtbNkufC96slbLh9qT%2FXJYgpu9ZKJ%2FnkQc9avnTCxE3fEW5hKRpcPgGOoiBc5uv18vuHama975Q%2F29jkE17isXZz4uH8mKuQILga%2BKUqyyTTn7hZi817NtHMPBI%2BnVkcu9Vn2P9aa8RGYKhcWvAEm2LhzIXizCMJOnkU%2Bev65UsAdLBW9bwcmjbini95SIjQK18CCaNDy80ZetPZ%2FhxvK5rLc11gNFbp2NT6zLAxs84TQaGElEULlE75tS8jJx6TcMKdps27PJOSp2HrQltpKkjAfecsSz9PJFGt%2BmGS1fNZFSgo15hfVcMexVGnEQnmJy7xOVDSb%2FXnquDXZ7ZxFIx954v82AwwfKu4uwI3Ko%2BIovngmw97fxOjMOPDU2h5qubUjm0RT7A3ztv4qwC6yPfL%2BnMmeg7KPd5F6O%2FmppFTyFsEoGk9rRz4UmWXWJdFGsndcpRRda0J0u%2BzC2uK%2FDBjqkAQgGG7yeb6Il%2F6mlMgfJKiZ%2F4Tmtl%2BX%2FhJpbMNjErw5UfHSzJn00oFvyROCJbLdVqkqyhSbbtk9Sp3po6W7zA40IksWAdF%2FHFBbPVy2PHUzGPd6eLRCsG66EVYWU0Ck9adCelUfOa4vy0S%2FHpO5gaf7ihGqzUqxRYvDeppTl24wZcsUSw0MdltWZi54N%2BOAjEyDducBFurWywtaR%2FND4QttzMKTU&X-Amz-Signature=3796c270a70c0f436d58a13f83648f12de34a1999b5841df1b5ebf41d6f7e2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHKICJQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDKIz6bzOnlADPSBCin8VIlulZNxf1ROw1GLoFzyZFNawIhAK0X4couemwzRhj2agdBssxx0RXSWwi7DXHp7ZfsS0ExKv8DCHgQABoMNjM3NDIzMTgzODA1Igz3ywrYegQSKSfZOvQq3ANxXY79OOWVCutmOtZvkq9XOkMxnWkqomkJFM3XClK7Gs4zuIaXdVWABgWgA7KcUe3aOwe7AXXDcOsrWwlFjtr%2BvsJe%2BV6MRGIj71Hn2yWfByQwegqODQR3xTThZJxvcIaC1%2FIGtrPlXFgVFPNcx49xi0OIZU7EsSlLLHGQ%2FnDq%2BXdtbNkufC96slbLh9qT%2FXJYgpu9ZKJ%2FnkQc9avnTCxE3fEW5hKRpcPgGOoiBc5uv18vuHama975Q%2F29jkE17isXZz4uH8mKuQILga%2BKUqyyTTn7hZi817NtHMPBI%2BnVkcu9Vn2P9aa8RGYKhcWvAEm2LhzIXizCMJOnkU%2Bev65UsAdLBW9bwcmjbini95SIjQK18CCaNDy80ZetPZ%2FhxvK5rLc11gNFbp2NT6zLAxs84TQaGElEULlE75tS8jJx6TcMKdps27PJOSp2HrQltpKkjAfecsSz9PJFGt%2BmGS1fNZFSgo15hfVcMexVGnEQnmJy7xOVDSb%2FXnquDXZ7ZxFIx954v82AwwfKu4uwI3Ko%2BIovngmw97fxOjMOPDU2h5qubUjm0RT7A3ztv4qwC6yPfL%2BnMmeg7KPd5F6O%2FmppFTyFsEoGk9rRz4UmWXWJdFGsndcpRRda0J0u%2BzC2uK%2FDBjqkAQgGG7yeb6Il%2F6mlMgfJKiZ%2F4Tmtl%2BX%2FhJpbMNjErw5UfHSzJn00oFvyROCJbLdVqkqyhSbbtk9Sp3po6W7zA40IksWAdF%2FHFBbPVy2PHUzGPd6eLRCsG66EVYWU0Ck9adCelUfOa4vy0S%2FHpO5gaf7ihGqzUqxRYvDeppTl24wZcsUSw0MdltWZi54N%2BOAjEyDducBFurWywtaR%2FND4QttzMKTU&X-Amz-Signature=2fed7f5842c5a6d2c1376b7d9f7ae8275692080435bf92d8c0a4632fb9eebd7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHKICJQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDKIz6bzOnlADPSBCin8VIlulZNxf1ROw1GLoFzyZFNawIhAK0X4couemwzRhj2agdBssxx0RXSWwi7DXHp7ZfsS0ExKv8DCHgQABoMNjM3NDIzMTgzODA1Igz3ywrYegQSKSfZOvQq3ANxXY79OOWVCutmOtZvkq9XOkMxnWkqomkJFM3XClK7Gs4zuIaXdVWABgWgA7KcUe3aOwe7AXXDcOsrWwlFjtr%2BvsJe%2BV6MRGIj71Hn2yWfByQwegqODQR3xTThZJxvcIaC1%2FIGtrPlXFgVFPNcx49xi0OIZU7EsSlLLHGQ%2FnDq%2BXdtbNkufC96slbLh9qT%2FXJYgpu9ZKJ%2FnkQc9avnTCxE3fEW5hKRpcPgGOoiBc5uv18vuHama975Q%2F29jkE17isXZz4uH8mKuQILga%2BKUqyyTTn7hZi817NtHMPBI%2BnVkcu9Vn2P9aa8RGYKhcWvAEm2LhzIXizCMJOnkU%2Bev65UsAdLBW9bwcmjbini95SIjQK18CCaNDy80ZetPZ%2FhxvK5rLc11gNFbp2NT6zLAxs84TQaGElEULlE75tS8jJx6TcMKdps27PJOSp2HrQltpKkjAfecsSz9PJFGt%2BmGS1fNZFSgo15hfVcMexVGnEQnmJy7xOVDSb%2FXnquDXZ7ZxFIx954v82AwwfKu4uwI3Ko%2BIovngmw97fxOjMOPDU2h5qubUjm0RT7A3ztv4qwC6yPfL%2BnMmeg7KPd5F6O%2FmppFTyFsEoGk9rRz4UmWXWJdFGsndcpRRda0J0u%2BzC2uK%2FDBjqkAQgGG7yeb6Il%2F6mlMgfJKiZ%2F4Tmtl%2BX%2FhJpbMNjErw5UfHSzJn00oFvyROCJbLdVqkqyhSbbtk9Sp3po6W7zA40IksWAdF%2FHFBbPVy2PHUzGPd6eLRCsG66EVYWU0Ck9adCelUfOa4vy0S%2FHpO5gaf7ihGqzUqxRYvDeppTl24wZcsUSw0MdltWZi54N%2BOAjEyDducBFurWywtaR%2FND4QttzMKTU&X-Amz-Signature=a1e0ede194e23e827fec1358a1af9e8a1ac053b5744c371a8e90ca1becb66838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHKICJQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDKIz6bzOnlADPSBCin8VIlulZNxf1ROw1GLoFzyZFNawIhAK0X4couemwzRhj2agdBssxx0RXSWwi7DXHp7ZfsS0ExKv8DCHgQABoMNjM3NDIzMTgzODA1Igz3ywrYegQSKSfZOvQq3ANxXY79OOWVCutmOtZvkq9XOkMxnWkqomkJFM3XClK7Gs4zuIaXdVWABgWgA7KcUe3aOwe7AXXDcOsrWwlFjtr%2BvsJe%2BV6MRGIj71Hn2yWfByQwegqODQR3xTThZJxvcIaC1%2FIGtrPlXFgVFPNcx49xi0OIZU7EsSlLLHGQ%2FnDq%2BXdtbNkufC96slbLh9qT%2FXJYgpu9ZKJ%2FnkQc9avnTCxE3fEW5hKRpcPgGOoiBc5uv18vuHama975Q%2F29jkE17isXZz4uH8mKuQILga%2BKUqyyTTn7hZi817NtHMPBI%2BnVkcu9Vn2P9aa8RGYKhcWvAEm2LhzIXizCMJOnkU%2Bev65UsAdLBW9bwcmjbini95SIjQK18CCaNDy80ZetPZ%2FhxvK5rLc11gNFbp2NT6zLAxs84TQaGElEULlE75tS8jJx6TcMKdps27PJOSp2HrQltpKkjAfecsSz9PJFGt%2BmGS1fNZFSgo15hfVcMexVGnEQnmJy7xOVDSb%2FXnquDXZ7ZxFIx954v82AwwfKu4uwI3Ko%2BIovngmw97fxOjMOPDU2h5qubUjm0RT7A3ztv4qwC6yPfL%2BnMmeg7KPd5F6O%2FmppFTyFsEoGk9rRz4UmWXWJdFGsndcpRRda0J0u%2BzC2uK%2FDBjqkAQgGG7yeb6Il%2F6mlMgfJKiZ%2F4Tmtl%2BX%2FhJpbMNjErw5UfHSzJn00oFvyROCJbLdVqkqyhSbbtk9Sp3po6W7zA40IksWAdF%2FHFBbPVy2PHUzGPd6eLRCsG66EVYWU0Ck9adCelUfOa4vy0S%2FHpO5gaf7ihGqzUqxRYvDeppTl24wZcsUSw0MdltWZi54N%2BOAjEyDducBFurWywtaR%2FND4QttzMKTU&X-Amz-Signature=f7404732e3e55b2ba76ea10a8a2a092aecf9d5e4189481880be1d7264b34a9ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHKICJQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDKIz6bzOnlADPSBCin8VIlulZNxf1ROw1GLoFzyZFNawIhAK0X4couemwzRhj2agdBssxx0RXSWwi7DXHp7ZfsS0ExKv8DCHgQABoMNjM3NDIzMTgzODA1Igz3ywrYegQSKSfZOvQq3ANxXY79OOWVCutmOtZvkq9XOkMxnWkqomkJFM3XClK7Gs4zuIaXdVWABgWgA7KcUe3aOwe7AXXDcOsrWwlFjtr%2BvsJe%2BV6MRGIj71Hn2yWfByQwegqODQR3xTThZJxvcIaC1%2FIGtrPlXFgVFPNcx49xi0OIZU7EsSlLLHGQ%2FnDq%2BXdtbNkufC96slbLh9qT%2FXJYgpu9ZKJ%2FnkQc9avnTCxE3fEW5hKRpcPgGOoiBc5uv18vuHama975Q%2F29jkE17isXZz4uH8mKuQILga%2BKUqyyTTn7hZi817NtHMPBI%2BnVkcu9Vn2P9aa8RGYKhcWvAEm2LhzIXizCMJOnkU%2Bev65UsAdLBW9bwcmjbini95SIjQK18CCaNDy80ZetPZ%2FhxvK5rLc11gNFbp2NT6zLAxs84TQaGElEULlE75tS8jJx6TcMKdps27PJOSp2HrQltpKkjAfecsSz9PJFGt%2BmGS1fNZFSgo15hfVcMexVGnEQnmJy7xOVDSb%2FXnquDXZ7ZxFIx954v82AwwfKu4uwI3Ko%2BIovngmw97fxOjMOPDU2h5qubUjm0RT7A3ztv4qwC6yPfL%2BnMmeg7KPd5F6O%2FmppFTyFsEoGk9rRz4UmWXWJdFGsndcpRRda0J0u%2BzC2uK%2FDBjqkAQgGG7yeb6Il%2F6mlMgfJKiZ%2F4Tmtl%2BX%2FhJpbMNjErw5UfHSzJn00oFvyROCJbLdVqkqyhSbbtk9Sp3po6W7zA40IksWAdF%2FHFBbPVy2PHUzGPd6eLRCsG66EVYWU0Ck9adCelUfOa4vy0S%2FHpO5gaf7ihGqzUqxRYvDeppTl24wZcsUSw0MdltWZi54N%2BOAjEyDducBFurWywtaR%2FND4QttzMKTU&X-Amz-Signature=f89b89e31b03b620700e9a27c35db0e9f185411ec9089e88f119fe6fc3d572b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHKICJQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDKIz6bzOnlADPSBCin8VIlulZNxf1ROw1GLoFzyZFNawIhAK0X4couemwzRhj2agdBssxx0RXSWwi7DXHp7ZfsS0ExKv8DCHgQABoMNjM3NDIzMTgzODA1Igz3ywrYegQSKSfZOvQq3ANxXY79OOWVCutmOtZvkq9XOkMxnWkqomkJFM3XClK7Gs4zuIaXdVWABgWgA7KcUe3aOwe7AXXDcOsrWwlFjtr%2BvsJe%2BV6MRGIj71Hn2yWfByQwegqODQR3xTThZJxvcIaC1%2FIGtrPlXFgVFPNcx49xi0OIZU7EsSlLLHGQ%2FnDq%2BXdtbNkufC96slbLh9qT%2FXJYgpu9ZKJ%2FnkQc9avnTCxE3fEW5hKRpcPgGOoiBc5uv18vuHama975Q%2F29jkE17isXZz4uH8mKuQILga%2BKUqyyTTn7hZi817NtHMPBI%2BnVkcu9Vn2P9aa8RGYKhcWvAEm2LhzIXizCMJOnkU%2Bev65UsAdLBW9bwcmjbini95SIjQK18CCaNDy80ZetPZ%2FhxvK5rLc11gNFbp2NT6zLAxs84TQaGElEULlE75tS8jJx6TcMKdps27PJOSp2HrQltpKkjAfecsSz9PJFGt%2BmGS1fNZFSgo15hfVcMexVGnEQnmJy7xOVDSb%2FXnquDXZ7ZxFIx954v82AwwfKu4uwI3Ko%2BIovngmw97fxOjMOPDU2h5qubUjm0RT7A3ztv4qwC6yPfL%2BnMmeg7KPd5F6O%2FmppFTyFsEoGk9rRz4UmWXWJdFGsndcpRRda0J0u%2BzC2uK%2FDBjqkAQgGG7yeb6Il%2F6mlMgfJKiZ%2F4Tmtl%2BX%2FhJpbMNjErw5UfHSzJn00oFvyROCJbLdVqkqyhSbbtk9Sp3po6W7zA40IksWAdF%2FHFBbPVy2PHUzGPd6eLRCsG66EVYWU0Ck9adCelUfOa4vy0S%2FHpO5gaf7ihGqzUqxRYvDeppTl24wZcsUSw0MdltWZi54N%2BOAjEyDducBFurWywtaR%2FND4QttzMKTU&X-Amz-Signature=a1a465a2d3bbc13170341e73ec2838b3543895b7d024988b20ad5715c916003e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHKICJQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDKIz6bzOnlADPSBCin8VIlulZNxf1ROw1GLoFzyZFNawIhAK0X4couemwzRhj2agdBssxx0RXSWwi7DXHp7ZfsS0ExKv8DCHgQABoMNjM3NDIzMTgzODA1Igz3ywrYegQSKSfZOvQq3ANxXY79OOWVCutmOtZvkq9XOkMxnWkqomkJFM3XClK7Gs4zuIaXdVWABgWgA7KcUe3aOwe7AXXDcOsrWwlFjtr%2BvsJe%2BV6MRGIj71Hn2yWfByQwegqODQR3xTThZJxvcIaC1%2FIGtrPlXFgVFPNcx49xi0OIZU7EsSlLLHGQ%2FnDq%2BXdtbNkufC96slbLh9qT%2FXJYgpu9ZKJ%2FnkQc9avnTCxE3fEW5hKRpcPgGOoiBc5uv18vuHama975Q%2F29jkE17isXZz4uH8mKuQILga%2BKUqyyTTn7hZi817NtHMPBI%2BnVkcu9Vn2P9aa8RGYKhcWvAEm2LhzIXizCMJOnkU%2Bev65UsAdLBW9bwcmjbini95SIjQK18CCaNDy80ZetPZ%2FhxvK5rLc11gNFbp2NT6zLAxs84TQaGElEULlE75tS8jJx6TcMKdps27PJOSp2HrQltpKkjAfecsSz9PJFGt%2BmGS1fNZFSgo15hfVcMexVGnEQnmJy7xOVDSb%2FXnquDXZ7ZxFIx954v82AwwfKu4uwI3Ko%2BIovngmw97fxOjMOPDU2h5qubUjm0RT7A3ztv4qwC6yPfL%2BnMmeg7KPd5F6O%2FmppFTyFsEoGk9rRz4UmWXWJdFGsndcpRRda0J0u%2BzC2uK%2FDBjqkAQgGG7yeb6Il%2F6mlMgfJKiZ%2F4Tmtl%2BX%2FhJpbMNjErw5UfHSzJn00oFvyROCJbLdVqkqyhSbbtk9Sp3po6W7zA40IksWAdF%2FHFBbPVy2PHUzGPd6eLRCsG66EVYWU0Ck9adCelUfOa4vy0S%2FHpO5gaf7ihGqzUqxRYvDeppTl24wZcsUSw0MdltWZi54N%2BOAjEyDducBFurWywtaR%2FND4QttzMKTU&X-Amz-Signature=67bbd201a2bbe9d0e52d8bb29a49172e1057509d74e5e7a022d73e6458cb48da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHKICJQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDKIz6bzOnlADPSBCin8VIlulZNxf1ROw1GLoFzyZFNawIhAK0X4couemwzRhj2agdBssxx0RXSWwi7DXHp7ZfsS0ExKv8DCHgQABoMNjM3NDIzMTgzODA1Igz3ywrYegQSKSfZOvQq3ANxXY79OOWVCutmOtZvkq9XOkMxnWkqomkJFM3XClK7Gs4zuIaXdVWABgWgA7KcUe3aOwe7AXXDcOsrWwlFjtr%2BvsJe%2BV6MRGIj71Hn2yWfByQwegqODQR3xTThZJxvcIaC1%2FIGtrPlXFgVFPNcx49xi0OIZU7EsSlLLHGQ%2FnDq%2BXdtbNkufC96slbLh9qT%2FXJYgpu9ZKJ%2FnkQc9avnTCxE3fEW5hKRpcPgGOoiBc5uv18vuHama975Q%2F29jkE17isXZz4uH8mKuQILga%2BKUqyyTTn7hZi817NtHMPBI%2BnVkcu9Vn2P9aa8RGYKhcWvAEm2LhzIXizCMJOnkU%2Bev65UsAdLBW9bwcmjbini95SIjQK18CCaNDy80ZetPZ%2FhxvK5rLc11gNFbp2NT6zLAxs84TQaGElEULlE75tS8jJx6TcMKdps27PJOSp2HrQltpKkjAfecsSz9PJFGt%2BmGS1fNZFSgo15hfVcMexVGnEQnmJy7xOVDSb%2FXnquDXZ7ZxFIx954v82AwwfKu4uwI3Ko%2BIovngmw97fxOjMOPDU2h5qubUjm0RT7A3ztv4qwC6yPfL%2BnMmeg7KPd5F6O%2FmppFTyFsEoGk9rRz4UmWXWJdFGsndcpRRda0J0u%2BzC2uK%2FDBjqkAQgGG7yeb6Il%2F6mlMgfJKiZ%2F4Tmtl%2BX%2FhJpbMNjErw5UfHSzJn00oFvyROCJbLdVqkqyhSbbtk9Sp3po6W7zA40IksWAdF%2FHFBbPVy2PHUzGPd6eLRCsG66EVYWU0Ck9adCelUfOa4vy0S%2FHpO5gaf7ihGqzUqxRYvDeppTl24wZcsUSw0MdltWZi54N%2BOAjEyDducBFurWywtaR%2FND4QttzMKTU&X-Amz-Signature=9bf3009bc0bc15d88f6ba0626f7ecce63e7da0fa84ec37e9c79a0198cb2a8a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
