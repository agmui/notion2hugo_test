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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYLFP7J%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE10jEvEdFrDrlch9fWXMXzDje0NzDJk1GywTP6lK7pwIhAMoqrxck1pbmhtk%2FWUK9AQ0Jg%2FYtQt%2BmnFHdpW8VcFQnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBp4fwXcpbCXpC2%2B4q3AMYop5WFy%2F69bTrrsuDBYPJeTzsNdqNi2%2FjpyergxIlSTXoE9rc84vjf3EAzbB%2F0BDcL30wn0Xcda5PZuLQP1HjBqbiC44eYD1x7a4WKd9QuRT%2FFWjBf0xW307OCiOWCOB0IeTf6wCZVyQM%2FJbb9pA8oSwv32rtT8wZGnzncpv1Th7DmNS6%2BptPmEg6mTQILAWXuFzNp1Jq7tmE0rFILyyXkU4gjlwjIVCaZ9voOtl8XscHs5sgH9ANiNdx0XcAuejgh3FkVk57rw0IVsRO3ZzaDY%2FymP7%2F9bSsB3lxl%2FgnaCmSuvk8mQCsvXVt8HHwuFTT00oYmL8v9BuySb7yuYOucCI5Y6aFJi1G8TBuq4pErMx8rH6u1%2B6W8ZT%2BVZmejDX30EyQ25bPl3y6YqLNsTSCT7qNuJvCCjSpPYqYBp6YWAD19Wj%2FwX4axa78m6JoB%2BcIg3wYK88GEikAK4cmsD51cV5O8wraDvccfTw8bgOA2sR9IWV8HMVWcI8zxoqmKztxR7RUa4qgUebS%2BrbH7xjMBbqRB7lmzgNPlisCcmjgSVxH7Puk%2FNMMt4dgUsCgpTeYPcclgaa2xYhI%2F1lb%2Bvz7nartBpKUhEiQmhw7ULZoQUpTM3DnXUfMG8fQcDD3uO7DBjqkAZJEKHKxa%2Bj5cZjkkDQA%2BKXCKE0u0VNuSKDwWq4zkF%2BnhCnR%2Baxk%2Fsmol%2BynYnDOB1j9k5pgAAX66%2BhQrwFvWRc8Q0jlGFwmGSKNBKMdMI4kUe76Uev4xF2tpq%2BsUBFXwJ4IXuU1qyDk33fDpbPAAO%2FXZ7RuktCVjVkS816LJkY5SIktsC9ax8IeeqD0gqjM1uYFjLyYcRd9%2BfyMDVmyG3EKxuiP&X-Amz-Signature=dd8f1b7a9ab9e3508c7d8d4d4855c06bd3c2188525215d87f06cc3fe68494d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYLFP7J%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE10jEvEdFrDrlch9fWXMXzDje0NzDJk1GywTP6lK7pwIhAMoqrxck1pbmhtk%2FWUK9AQ0Jg%2FYtQt%2BmnFHdpW8VcFQnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBp4fwXcpbCXpC2%2B4q3AMYop5WFy%2F69bTrrsuDBYPJeTzsNdqNi2%2FjpyergxIlSTXoE9rc84vjf3EAzbB%2F0BDcL30wn0Xcda5PZuLQP1HjBqbiC44eYD1x7a4WKd9QuRT%2FFWjBf0xW307OCiOWCOB0IeTf6wCZVyQM%2FJbb9pA8oSwv32rtT8wZGnzncpv1Th7DmNS6%2BptPmEg6mTQILAWXuFzNp1Jq7tmE0rFILyyXkU4gjlwjIVCaZ9voOtl8XscHs5sgH9ANiNdx0XcAuejgh3FkVk57rw0IVsRO3ZzaDY%2FymP7%2F9bSsB3lxl%2FgnaCmSuvk8mQCsvXVt8HHwuFTT00oYmL8v9BuySb7yuYOucCI5Y6aFJi1G8TBuq4pErMx8rH6u1%2B6W8ZT%2BVZmejDX30EyQ25bPl3y6YqLNsTSCT7qNuJvCCjSpPYqYBp6YWAD19Wj%2FwX4axa78m6JoB%2BcIg3wYK88GEikAK4cmsD51cV5O8wraDvccfTw8bgOA2sR9IWV8HMVWcI8zxoqmKztxR7RUa4qgUebS%2BrbH7xjMBbqRB7lmzgNPlisCcmjgSVxH7Puk%2FNMMt4dgUsCgpTeYPcclgaa2xYhI%2F1lb%2Bvz7nartBpKUhEiQmhw7ULZoQUpTM3DnXUfMG8fQcDD3uO7DBjqkAZJEKHKxa%2Bj5cZjkkDQA%2BKXCKE0u0VNuSKDwWq4zkF%2BnhCnR%2Baxk%2Fsmol%2BynYnDOB1j9k5pgAAX66%2BhQrwFvWRc8Q0jlGFwmGSKNBKMdMI4kUe76Uev4xF2tpq%2BsUBFXwJ4IXuU1qyDk33fDpbPAAO%2FXZ7RuktCVjVkS816LJkY5SIktsC9ax8IeeqD0gqjM1uYFjLyYcRd9%2BfyMDVmyG3EKxuiP&X-Amz-Signature=3b9580a17f6b8c4c88b112cdf6700189d4ff0bfc600335afb39b1ab12ceafe67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYLFP7J%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE10jEvEdFrDrlch9fWXMXzDje0NzDJk1GywTP6lK7pwIhAMoqrxck1pbmhtk%2FWUK9AQ0Jg%2FYtQt%2BmnFHdpW8VcFQnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBp4fwXcpbCXpC2%2B4q3AMYop5WFy%2F69bTrrsuDBYPJeTzsNdqNi2%2FjpyergxIlSTXoE9rc84vjf3EAzbB%2F0BDcL30wn0Xcda5PZuLQP1HjBqbiC44eYD1x7a4WKd9QuRT%2FFWjBf0xW307OCiOWCOB0IeTf6wCZVyQM%2FJbb9pA8oSwv32rtT8wZGnzncpv1Th7DmNS6%2BptPmEg6mTQILAWXuFzNp1Jq7tmE0rFILyyXkU4gjlwjIVCaZ9voOtl8XscHs5sgH9ANiNdx0XcAuejgh3FkVk57rw0IVsRO3ZzaDY%2FymP7%2F9bSsB3lxl%2FgnaCmSuvk8mQCsvXVt8HHwuFTT00oYmL8v9BuySb7yuYOucCI5Y6aFJi1G8TBuq4pErMx8rH6u1%2B6W8ZT%2BVZmejDX30EyQ25bPl3y6YqLNsTSCT7qNuJvCCjSpPYqYBp6YWAD19Wj%2FwX4axa78m6JoB%2BcIg3wYK88GEikAK4cmsD51cV5O8wraDvccfTw8bgOA2sR9IWV8HMVWcI8zxoqmKztxR7RUa4qgUebS%2BrbH7xjMBbqRB7lmzgNPlisCcmjgSVxH7Puk%2FNMMt4dgUsCgpTeYPcclgaa2xYhI%2F1lb%2Bvz7nartBpKUhEiQmhw7ULZoQUpTM3DnXUfMG8fQcDD3uO7DBjqkAZJEKHKxa%2Bj5cZjkkDQA%2BKXCKE0u0VNuSKDwWq4zkF%2BnhCnR%2Baxk%2Fsmol%2BynYnDOB1j9k5pgAAX66%2BhQrwFvWRc8Q0jlGFwmGSKNBKMdMI4kUe76Uev4xF2tpq%2BsUBFXwJ4IXuU1qyDk33fDpbPAAO%2FXZ7RuktCVjVkS816LJkY5SIktsC9ax8IeeqD0gqjM1uYFjLyYcRd9%2BfyMDVmyG3EKxuiP&X-Amz-Signature=b5c1d32008ddc81c0cb1e2c55057394ae823cebf4948bafa4e5d13d26b9669dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYLFP7J%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE10jEvEdFrDrlch9fWXMXzDje0NzDJk1GywTP6lK7pwIhAMoqrxck1pbmhtk%2FWUK9AQ0Jg%2FYtQt%2BmnFHdpW8VcFQnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBp4fwXcpbCXpC2%2B4q3AMYop5WFy%2F69bTrrsuDBYPJeTzsNdqNi2%2FjpyergxIlSTXoE9rc84vjf3EAzbB%2F0BDcL30wn0Xcda5PZuLQP1HjBqbiC44eYD1x7a4WKd9QuRT%2FFWjBf0xW307OCiOWCOB0IeTf6wCZVyQM%2FJbb9pA8oSwv32rtT8wZGnzncpv1Th7DmNS6%2BptPmEg6mTQILAWXuFzNp1Jq7tmE0rFILyyXkU4gjlwjIVCaZ9voOtl8XscHs5sgH9ANiNdx0XcAuejgh3FkVk57rw0IVsRO3ZzaDY%2FymP7%2F9bSsB3lxl%2FgnaCmSuvk8mQCsvXVt8HHwuFTT00oYmL8v9BuySb7yuYOucCI5Y6aFJi1G8TBuq4pErMx8rH6u1%2B6W8ZT%2BVZmejDX30EyQ25bPl3y6YqLNsTSCT7qNuJvCCjSpPYqYBp6YWAD19Wj%2FwX4axa78m6JoB%2BcIg3wYK88GEikAK4cmsD51cV5O8wraDvccfTw8bgOA2sR9IWV8HMVWcI8zxoqmKztxR7RUa4qgUebS%2BrbH7xjMBbqRB7lmzgNPlisCcmjgSVxH7Puk%2FNMMt4dgUsCgpTeYPcclgaa2xYhI%2F1lb%2Bvz7nartBpKUhEiQmhw7ULZoQUpTM3DnXUfMG8fQcDD3uO7DBjqkAZJEKHKxa%2Bj5cZjkkDQA%2BKXCKE0u0VNuSKDwWq4zkF%2BnhCnR%2Baxk%2Fsmol%2BynYnDOB1j9k5pgAAX66%2BhQrwFvWRc8Q0jlGFwmGSKNBKMdMI4kUe76Uev4xF2tpq%2BsUBFXwJ4IXuU1qyDk33fDpbPAAO%2FXZ7RuktCVjVkS816LJkY5SIktsC9ax8IeeqD0gqjM1uYFjLyYcRd9%2BfyMDVmyG3EKxuiP&X-Amz-Signature=7e562e5e25065640bfa9064a4a18e44df0181ea6a3e3b8cd32ed2f77c60659d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYLFP7J%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE10jEvEdFrDrlch9fWXMXzDje0NzDJk1GywTP6lK7pwIhAMoqrxck1pbmhtk%2FWUK9AQ0Jg%2FYtQt%2BmnFHdpW8VcFQnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBp4fwXcpbCXpC2%2B4q3AMYop5WFy%2F69bTrrsuDBYPJeTzsNdqNi2%2FjpyergxIlSTXoE9rc84vjf3EAzbB%2F0BDcL30wn0Xcda5PZuLQP1HjBqbiC44eYD1x7a4WKd9QuRT%2FFWjBf0xW307OCiOWCOB0IeTf6wCZVyQM%2FJbb9pA8oSwv32rtT8wZGnzncpv1Th7DmNS6%2BptPmEg6mTQILAWXuFzNp1Jq7tmE0rFILyyXkU4gjlwjIVCaZ9voOtl8XscHs5sgH9ANiNdx0XcAuejgh3FkVk57rw0IVsRO3ZzaDY%2FymP7%2F9bSsB3lxl%2FgnaCmSuvk8mQCsvXVt8HHwuFTT00oYmL8v9BuySb7yuYOucCI5Y6aFJi1G8TBuq4pErMx8rH6u1%2B6W8ZT%2BVZmejDX30EyQ25bPl3y6YqLNsTSCT7qNuJvCCjSpPYqYBp6YWAD19Wj%2FwX4axa78m6JoB%2BcIg3wYK88GEikAK4cmsD51cV5O8wraDvccfTw8bgOA2sR9IWV8HMVWcI8zxoqmKztxR7RUa4qgUebS%2BrbH7xjMBbqRB7lmzgNPlisCcmjgSVxH7Puk%2FNMMt4dgUsCgpTeYPcclgaa2xYhI%2F1lb%2Bvz7nartBpKUhEiQmhw7ULZoQUpTM3DnXUfMG8fQcDD3uO7DBjqkAZJEKHKxa%2Bj5cZjkkDQA%2BKXCKE0u0VNuSKDwWq4zkF%2BnhCnR%2Baxk%2Fsmol%2BynYnDOB1j9k5pgAAX66%2BhQrwFvWRc8Q0jlGFwmGSKNBKMdMI4kUe76Uev4xF2tpq%2BsUBFXwJ4IXuU1qyDk33fDpbPAAO%2FXZ7RuktCVjVkS816LJkY5SIktsC9ax8IeeqD0gqjM1uYFjLyYcRd9%2BfyMDVmyG3EKxuiP&X-Amz-Signature=3660d290365c35537d559a1c26f54a7500171f2e862a57f433b2a9a8107100d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYLFP7J%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE10jEvEdFrDrlch9fWXMXzDje0NzDJk1GywTP6lK7pwIhAMoqrxck1pbmhtk%2FWUK9AQ0Jg%2FYtQt%2BmnFHdpW8VcFQnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBp4fwXcpbCXpC2%2B4q3AMYop5WFy%2F69bTrrsuDBYPJeTzsNdqNi2%2FjpyergxIlSTXoE9rc84vjf3EAzbB%2F0BDcL30wn0Xcda5PZuLQP1HjBqbiC44eYD1x7a4WKd9QuRT%2FFWjBf0xW307OCiOWCOB0IeTf6wCZVyQM%2FJbb9pA8oSwv32rtT8wZGnzncpv1Th7DmNS6%2BptPmEg6mTQILAWXuFzNp1Jq7tmE0rFILyyXkU4gjlwjIVCaZ9voOtl8XscHs5sgH9ANiNdx0XcAuejgh3FkVk57rw0IVsRO3ZzaDY%2FymP7%2F9bSsB3lxl%2FgnaCmSuvk8mQCsvXVt8HHwuFTT00oYmL8v9BuySb7yuYOucCI5Y6aFJi1G8TBuq4pErMx8rH6u1%2B6W8ZT%2BVZmejDX30EyQ25bPl3y6YqLNsTSCT7qNuJvCCjSpPYqYBp6YWAD19Wj%2FwX4axa78m6JoB%2BcIg3wYK88GEikAK4cmsD51cV5O8wraDvccfTw8bgOA2sR9IWV8HMVWcI8zxoqmKztxR7RUa4qgUebS%2BrbH7xjMBbqRB7lmzgNPlisCcmjgSVxH7Puk%2FNMMt4dgUsCgpTeYPcclgaa2xYhI%2F1lb%2Bvz7nartBpKUhEiQmhw7ULZoQUpTM3DnXUfMG8fQcDD3uO7DBjqkAZJEKHKxa%2Bj5cZjkkDQA%2BKXCKE0u0VNuSKDwWq4zkF%2BnhCnR%2Baxk%2Fsmol%2BynYnDOB1j9k5pgAAX66%2BhQrwFvWRc8Q0jlGFwmGSKNBKMdMI4kUe76Uev4xF2tpq%2BsUBFXwJ4IXuU1qyDk33fDpbPAAO%2FXZ7RuktCVjVkS816LJkY5SIktsC9ax8IeeqD0gqjM1uYFjLyYcRd9%2BfyMDVmyG3EKxuiP&X-Amz-Signature=fe1a780ad2ba67101fe6bee55a2d84d4849b3d12b3952180e1a4b1b6e27ec2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYLFP7J%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE10jEvEdFrDrlch9fWXMXzDje0NzDJk1GywTP6lK7pwIhAMoqrxck1pbmhtk%2FWUK9AQ0Jg%2FYtQt%2BmnFHdpW8VcFQnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBp4fwXcpbCXpC2%2B4q3AMYop5WFy%2F69bTrrsuDBYPJeTzsNdqNi2%2FjpyergxIlSTXoE9rc84vjf3EAzbB%2F0BDcL30wn0Xcda5PZuLQP1HjBqbiC44eYD1x7a4WKd9QuRT%2FFWjBf0xW307OCiOWCOB0IeTf6wCZVyQM%2FJbb9pA8oSwv32rtT8wZGnzncpv1Th7DmNS6%2BptPmEg6mTQILAWXuFzNp1Jq7tmE0rFILyyXkU4gjlwjIVCaZ9voOtl8XscHs5sgH9ANiNdx0XcAuejgh3FkVk57rw0IVsRO3ZzaDY%2FymP7%2F9bSsB3lxl%2FgnaCmSuvk8mQCsvXVt8HHwuFTT00oYmL8v9BuySb7yuYOucCI5Y6aFJi1G8TBuq4pErMx8rH6u1%2B6W8ZT%2BVZmejDX30EyQ25bPl3y6YqLNsTSCT7qNuJvCCjSpPYqYBp6YWAD19Wj%2FwX4axa78m6JoB%2BcIg3wYK88GEikAK4cmsD51cV5O8wraDvccfTw8bgOA2sR9IWV8HMVWcI8zxoqmKztxR7RUa4qgUebS%2BrbH7xjMBbqRB7lmzgNPlisCcmjgSVxH7Puk%2FNMMt4dgUsCgpTeYPcclgaa2xYhI%2F1lb%2Bvz7nartBpKUhEiQmhw7ULZoQUpTM3DnXUfMG8fQcDD3uO7DBjqkAZJEKHKxa%2Bj5cZjkkDQA%2BKXCKE0u0VNuSKDwWq4zkF%2BnhCnR%2Baxk%2Fsmol%2BynYnDOB1j9k5pgAAX66%2BhQrwFvWRc8Q0jlGFwmGSKNBKMdMI4kUe76Uev4xF2tpq%2BsUBFXwJ4IXuU1qyDk33fDpbPAAO%2FXZ7RuktCVjVkS816LJkY5SIktsC9ax8IeeqD0gqjM1uYFjLyYcRd9%2BfyMDVmyG3EKxuiP&X-Amz-Signature=b1edca5f64889944921aa7be8f7c8988fcb2222dc64745a964abd5fc19990c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYLFP7J%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE10jEvEdFrDrlch9fWXMXzDje0NzDJk1GywTP6lK7pwIhAMoqrxck1pbmhtk%2FWUK9AQ0Jg%2FYtQt%2BmnFHdpW8VcFQnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBp4fwXcpbCXpC2%2B4q3AMYop5WFy%2F69bTrrsuDBYPJeTzsNdqNi2%2FjpyergxIlSTXoE9rc84vjf3EAzbB%2F0BDcL30wn0Xcda5PZuLQP1HjBqbiC44eYD1x7a4WKd9QuRT%2FFWjBf0xW307OCiOWCOB0IeTf6wCZVyQM%2FJbb9pA8oSwv32rtT8wZGnzncpv1Th7DmNS6%2BptPmEg6mTQILAWXuFzNp1Jq7tmE0rFILyyXkU4gjlwjIVCaZ9voOtl8XscHs5sgH9ANiNdx0XcAuejgh3FkVk57rw0IVsRO3ZzaDY%2FymP7%2F9bSsB3lxl%2FgnaCmSuvk8mQCsvXVt8HHwuFTT00oYmL8v9BuySb7yuYOucCI5Y6aFJi1G8TBuq4pErMx8rH6u1%2B6W8ZT%2BVZmejDX30EyQ25bPl3y6YqLNsTSCT7qNuJvCCjSpPYqYBp6YWAD19Wj%2FwX4axa78m6JoB%2BcIg3wYK88GEikAK4cmsD51cV5O8wraDvccfTw8bgOA2sR9IWV8HMVWcI8zxoqmKztxR7RUa4qgUebS%2BrbH7xjMBbqRB7lmzgNPlisCcmjgSVxH7Puk%2FNMMt4dgUsCgpTeYPcclgaa2xYhI%2F1lb%2Bvz7nartBpKUhEiQmhw7ULZoQUpTM3DnXUfMG8fQcDD3uO7DBjqkAZJEKHKxa%2Bj5cZjkkDQA%2BKXCKE0u0VNuSKDwWq4zkF%2BnhCnR%2Baxk%2Fsmol%2BynYnDOB1j9k5pgAAX66%2BhQrwFvWRc8Q0jlGFwmGSKNBKMdMI4kUe76Uev4xF2tpq%2BsUBFXwJ4IXuU1qyDk33fDpbPAAO%2FXZ7RuktCVjVkS816LJkY5SIktsC9ax8IeeqD0gqjM1uYFjLyYcRd9%2BfyMDVmyG3EKxuiP&X-Amz-Signature=22f786fcf4bf78ce0d9d9e3835494369b53ff0db84aae2ba288ab016ad2371be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
