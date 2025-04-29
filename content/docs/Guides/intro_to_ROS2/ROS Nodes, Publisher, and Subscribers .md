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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFUJYWS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcD%2FtkEEKnxDO3K66t0JRlcqvFPe1q05TqiDOzcimncgIgPlvdq0%2FV6saCeIMsF9Py6qWAh7oPVAMDk0kNQlcz1J8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7RdnnqTdXlbvsenCrcA849HpiFWyDAvyuK0%2B8aMIxqgbSBdmLw3xt9F5no0iMU6jZMWm5wNMZhpB3b8HkdiVp%2FUjMqfoL%2F5ZZJRdMPU%2BWXvxcLGzjowMY38ZSMiIlkKKKX5j5VOsk6ejAc0%2BIYzI53gAsf7OUQFksY90wquErFxnjC4k%2F509Lb%2BsXzIy62RYMeq7XQlLglgIo8T9WVZ246%2BmmuUHsvrN%2FbUYyKL8S93X%2B6AvRPpMKGQweMf2ssf%2FZr7yrV3%2Fp1iFvsHUEEJS5DKRMOC5bS6S3CeyTqKxjTVvguwvFKN56dY9zVLYRjT0qqMFadx3%2Fcl6FmdlM9H85FrmLuZWFMzIBFya5LTdA0r1NhsOlBttHiT9aTQ%2FW%2BjjfUpfq43ktaI2C2C518Y3QcHtKsczIdyZpWD%2F%2BY2vhDi7KwPhljcfB2r7vqKFXjHFewjKbU9WsOZrO%2FLljQ%2F%2BsqP3PB%2B6gmBopaQ9R4IsbA7puzd5pCd%2FOQWRYl9djoaNs6fb9eZ4FrX1IkKv3E1STu5H55%2FUTAn8UImUAXT9sJ2xqYPvD9OumigLaqjAgjnBztia4AY6slGk%2FPcOOXuaF0OQCV8ij1uUceS2mUPy5bgVr9JtMMQyFQig3X7ozxyz2PShv4D0wbdC3JMLGixcAGOqUBLf1MaAq2DQ3IqlxV6GPJ9tigHwJCBpIVSd%2FHCbR7GwHcjdWHO0Eiz6iJ0spdut6vvOtmDtBLlfaeF3DT8s3k1seJkAXLX9msqCYkzSMjFzKnMXzTGtZT3CABCyDjpqNj%2Fhcp7Kpz5MQp19Eq7YyLmZ2I6WyNRirh31fJKc%2BiowdoYM5WqDV15hpZA40Cj9aIPLzafuSEBy29iBex1eA5rkNGZ5E7&X-Amz-Signature=a52a8021c7876412db91a5acd6eccd1a49a3c9d21c8de64faea4e0b11a61c350&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFUJYWS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcD%2FtkEEKnxDO3K66t0JRlcqvFPe1q05TqiDOzcimncgIgPlvdq0%2FV6saCeIMsF9Py6qWAh7oPVAMDk0kNQlcz1J8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7RdnnqTdXlbvsenCrcA849HpiFWyDAvyuK0%2B8aMIxqgbSBdmLw3xt9F5no0iMU6jZMWm5wNMZhpB3b8HkdiVp%2FUjMqfoL%2F5ZZJRdMPU%2BWXvxcLGzjowMY38ZSMiIlkKKKX5j5VOsk6ejAc0%2BIYzI53gAsf7OUQFksY90wquErFxnjC4k%2F509Lb%2BsXzIy62RYMeq7XQlLglgIo8T9WVZ246%2BmmuUHsvrN%2FbUYyKL8S93X%2B6AvRPpMKGQweMf2ssf%2FZr7yrV3%2Fp1iFvsHUEEJS5DKRMOC5bS6S3CeyTqKxjTVvguwvFKN56dY9zVLYRjT0qqMFadx3%2Fcl6FmdlM9H85FrmLuZWFMzIBFya5LTdA0r1NhsOlBttHiT9aTQ%2FW%2BjjfUpfq43ktaI2C2C518Y3QcHtKsczIdyZpWD%2F%2BY2vhDi7KwPhljcfB2r7vqKFXjHFewjKbU9WsOZrO%2FLljQ%2F%2BsqP3PB%2B6gmBopaQ9R4IsbA7puzd5pCd%2FOQWRYl9djoaNs6fb9eZ4FrX1IkKv3E1STu5H55%2FUTAn8UImUAXT9sJ2xqYPvD9OumigLaqjAgjnBztia4AY6slGk%2FPcOOXuaF0OQCV8ij1uUceS2mUPy5bgVr9JtMMQyFQig3X7ozxyz2PShv4D0wbdC3JMLGixcAGOqUBLf1MaAq2DQ3IqlxV6GPJ9tigHwJCBpIVSd%2FHCbR7GwHcjdWHO0Eiz6iJ0spdut6vvOtmDtBLlfaeF3DT8s3k1seJkAXLX9msqCYkzSMjFzKnMXzTGtZT3CABCyDjpqNj%2Fhcp7Kpz5MQp19Eq7YyLmZ2I6WyNRirh31fJKc%2BiowdoYM5WqDV15hpZA40Cj9aIPLzafuSEBy29iBex1eA5rkNGZ5E7&X-Amz-Signature=8fc960daa4a89738db6a55755747e1497e27799576f756c91282bc7bde40784c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFUJYWS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcD%2FtkEEKnxDO3K66t0JRlcqvFPe1q05TqiDOzcimncgIgPlvdq0%2FV6saCeIMsF9Py6qWAh7oPVAMDk0kNQlcz1J8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7RdnnqTdXlbvsenCrcA849HpiFWyDAvyuK0%2B8aMIxqgbSBdmLw3xt9F5no0iMU6jZMWm5wNMZhpB3b8HkdiVp%2FUjMqfoL%2F5ZZJRdMPU%2BWXvxcLGzjowMY38ZSMiIlkKKKX5j5VOsk6ejAc0%2BIYzI53gAsf7OUQFksY90wquErFxnjC4k%2F509Lb%2BsXzIy62RYMeq7XQlLglgIo8T9WVZ246%2BmmuUHsvrN%2FbUYyKL8S93X%2B6AvRPpMKGQweMf2ssf%2FZr7yrV3%2Fp1iFvsHUEEJS5DKRMOC5bS6S3CeyTqKxjTVvguwvFKN56dY9zVLYRjT0qqMFadx3%2Fcl6FmdlM9H85FrmLuZWFMzIBFya5LTdA0r1NhsOlBttHiT9aTQ%2FW%2BjjfUpfq43ktaI2C2C518Y3QcHtKsczIdyZpWD%2F%2BY2vhDi7KwPhljcfB2r7vqKFXjHFewjKbU9WsOZrO%2FLljQ%2F%2BsqP3PB%2B6gmBopaQ9R4IsbA7puzd5pCd%2FOQWRYl9djoaNs6fb9eZ4FrX1IkKv3E1STu5H55%2FUTAn8UImUAXT9sJ2xqYPvD9OumigLaqjAgjnBztia4AY6slGk%2FPcOOXuaF0OQCV8ij1uUceS2mUPy5bgVr9JtMMQyFQig3X7ozxyz2PShv4D0wbdC3JMLGixcAGOqUBLf1MaAq2DQ3IqlxV6GPJ9tigHwJCBpIVSd%2FHCbR7GwHcjdWHO0Eiz6iJ0spdut6vvOtmDtBLlfaeF3DT8s3k1seJkAXLX9msqCYkzSMjFzKnMXzTGtZT3CABCyDjpqNj%2Fhcp7Kpz5MQp19Eq7YyLmZ2I6WyNRirh31fJKc%2BiowdoYM5WqDV15hpZA40Cj9aIPLzafuSEBy29iBex1eA5rkNGZ5E7&X-Amz-Signature=036262111619c5f6b1ab84abd46995b9c7d73376aad7c89953e1acbab2d69c36&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFUJYWS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcD%2FtkEEKnxDO3K66t0JRlcqvFPe1q05TqiDOzcimncgIgPlvdq0%2FV6saCeIMsF9Py6qWAh7oPVAMDk0kNQlcz1J8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7RdnnqTdXlbvsenCrcA849HpiFWyDAvyuK0%2B8aMIxqgbSBdmLw3xt9F5no0iMU6jZMWm5wNMZhpB3b8HkdiVp%2FUjMqfoL%2F5ZZJRdMPU%2BWXvxcLGzjowMY38ZSMiIlkKKKX5j5VOsk6ejAc0%2BIYzI53gAsf7OUQFksY90wquErFxnjC4k%2F509Lb%2BsXzIy62RYMeq7XQlLglgIo8T9WVZ246%2BmmuUHsvrN%2FbUYyKL8S93X%2B6AvRPpMKGQweMf2ssf%2FZr7yrV3%2Fp1iFvsHUEEJS5DKRMOC5bS6S3CeyTqKxjTVvguwvFKN56dY9zVLYRjT0qqMFadx3%2Fcl6FmdlM9H85FrmLuZWFMzIBFya5LTdA0r1NhsOlBttHiT9aTQ%2FW%2BjjfUpfq43ktaI2C2C518Y3QcHtKsczIdyZpWD%2F%2BY2vhDi7KwPhljcfB2r7vqKFXjHFewjKbU9WsOZrO%2FLljQ%2F%2BsqP3PB%2B6gmBopaQ9R4IsbA7puzd5pCd%2FOQWRYl9djoaNs6fb9eZ4FrX1IkKv3E1STu5H55%2FUTAn8UImUAXT9sJ2xqYPvD9OumigLaqjAgjnBztia4AY6slGk%2FPcOOXuaF0OQCV8ij1uUceS2mUPy5bgVr9JtMMQyFQig3X7ozxyz2PShv4D0wbdC3JMLGixcAGOqUBLf1MaAq2DQ3IqlxV6GPJ9tigHwJCBpIVSd%2FHCbR7GwHcjdWHO0Eiz6iJ0spdut6vvOtmDtBLlfaeF3DT8s3k1seJkAXLX9msqCYkzSMjFzKnMXzTGtZT3CABCyDjpqNj%2Fhcp7Kpz5MQp19Eq7YyLmZ2I6WyNRirh31fJKc%2BiowdoYM5WqDV15hpZA40Cj9aIPLzafuSEBy29iBex1eA5rkNGZ5E7&X-Amz-Signature=e8f1909178ea2d742742a08b688ef780c724e42434574cc86e71f18f002158df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFUJYWS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcD%2FtkEEKnxDO3K66t0JRlcqvFPe1q05TqiDOzcimncgIgPlvdq0%2FV6saCeIMsF9Py6qWAh7oPVAMDk0kNQlcz1J8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7RdnnqTdXlbvsenCrcA849HpiFWyDAvyuK0%2B8aMIxqgbSBdmLw3xt9F5no0iMU6jZMWm5wNMZhpB3b8HkdiVp%2FUjMqfoL%2F5ZZJRdMPU%2BWXvxcLGzjowMY38ZSMiIlkKKKX5j5VOsk6ejAc0%2BIYzI53gAsf7OUQFksY90wquErFxnjC4k%2F509Lb%2BsXzIy62RYMeq7XQlLglgIo8T9WVZ246%2BmmuUHsvrN%2FbUYyKL8S93X%2B6AvRPpMKGQweMf2ssf%2FZr7yrV3%2Fp1iFvsHUEEJS5DKRMOC5bS6S3CeyTqKxjTVvguwvFKN56dY9zVLYRjT0qqMFadx3%2Fcl6FmdlM9H85FrmLuZWFMzIBFya5LTdA0r1NhsOlBttHiT9aTQ%2FW%2BjjfUpfq43ktaI2C2C518Y3QcHtKsczIdyZpWD%2F%2BY2vhDi7KwPhljcfB2r7vqKFXjHFewjKbU9WsOZrO%2FLljQ%2F%2BsqP3PB%2B6gmBopaQ9R4IsbA7puzd5pCd%2FOQWRYl9djoaNs6fb9eZ4FrX1IkKv3E1STu5H55%2FUTAn8UImUAXT9sJ2xqYPvD9OumigLaqjAgjnBztia4AY6slGk%2FPcOOXuaF0OQCV8ij1uUceS2mUPy5bgVr9JtMMQyFQig3X7ozxyz2PShv4D0wbdC3JMLGixcAGOqUBLf1MaAq2DQ3IqlxV6GPJ9tigHwJCBpIVSd%2FHCbR7GwHcjdWHO0Eiz6iJ0spdut6vvOtmDtBLlfaeF3DT8s3k1seJkAXLX9msqCYkzSMjFzKnMXzTGtZT3CABCyDjpqNj%2Fhcp7Kpz5MQp19Eq7YyLmZ2I6WyNRirh31fJKc%2BiowdoYM5WqDV15hpZA40Cj9aIPLzafuSEBy29iBex1eA5rkNGZ5E7&X-Amz-Signature=cfcf312a0bbaf3e427db5acc91605142f57d70c41a8d76b1496528d7b82d610e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFUJYWS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcD%2FtkEEKnxDO3K66t0JRlcqvFPe1q05TqiDOzcimncgIgPlvdq0%2FV6saCeIMsF9Py6qWAh7oPVAMDk0kNQlcz1J8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7RdnnqTdXlbvsenCrcA849HpiFWyDAvyuK0%2B8aMIxqgbSBdmLw3xt9F5no0iMU6jZMWm5wNMZhpB3b8HkdiVp%2FUjMqfoL%2F5ZZJRdMPU%2BWXvxcLGzjowMY38ZSMiIlkKKKX5j5VOsk6ejAc0%2BIYzI53gAsf7OUQFksY90wquErFxnjC4k%2F509Lb%2BsXzIy62RYMeq7XQlLglgIo8T9WVZ246%2BmmuUHsvrN%2FbUYyKL8S93X%2B6AvRPpMKGQweMf2ssf%2FZr7yrV3%2Fp1iFvsHUEEJS5DKRMOC5bS6S3CeyTqKxjTVvguwvFKN56dY9zVLYRjT0qqMFadx3%2Fcl6FmdlM9H85FrmLuZWFMzIBFya5LTdA0r1NhsOlBttHiT9aTQ%2FW%2BjjfUpfq43ktaI2C2C518Y3QcHtKsczIdyZpWD%2F%2BY2vhDi7KwPhljcfB2r7vqKFXjHFewjKbU9WsOZrO%2FLljQ%2F%2BsqP3PB%2B6gmBopaQ9R4IsbA7puzd5pCd%2FOQWRYl9djoaNs6fb9eZ4FrX1IkKv3E1STu5H55%2FUTAn8UImUAXT9sJ2xqYPvD9OumigLaqjAgjnBztia4AY6slGk%2FPcOOXuaF0OQCV8ij1uUceS2mUPy5bgVr9JtMMQyFQig3X7ozxyz2PShv4D0wbdC3JMLGixcAGOqUBLf1MaAq2DQ3IqlxV6GPJ9tigHwJCBpIVSd%2FHCbR7GwHcjdWHO0Eiz6iJ0spdut6vvOtmDtBLlfaeF3DT8s3k1seJkAXLX9msqCYkzSMjFzKnMXzTGtZT3CABCyDjpqNj%2Fhcp7Kpz5MQp19Eq7YyLmZ2I6WyNRirh31fJKc%2BiowdoYM5WqDV15hpZA40Cj9aIPLzafuSEBy29iBex1eA5rkNGZ5E7&X-Amz-Signature=770ae627b7d44341bb40239f404672daa1d063af4afab59089407d773cac028f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFUJYWS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcD%2FtkEEKnxDO3K66t0JRlcqvFPe1q05TqiDOzcimncgIgPlvdq0%2FV6saCeIMsF9Py6qWAh7oPVAMDk0kNQlcz1J8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7RdnnqTdXlbvsenCrcA849HpiFWyDAvyuK0%2B8aMIxqgbSBdmLw3xt9F5no0iMU6jZMWm5wNMZhpB3b8HkdiVp%2FUjMqfoL%2F5ZZJRdMPU%2BWXvxcLGzjowMY38ZSMiIlkKKKX5j5VOsk6ejAc0%2BIYzI53gAsf7OUQFksY90wquErFxnjC4k%2F509Lb%2BsXzIy62RYMeq7XQlLglgIo8T9WVZ246%2BmmuUHsvrN%2FbUYyKL8S93X%2B6AvRPpMKGQweMf2ssf%2FZr7yrV3%2Fp1iFvsHUEEJS5DKRMOC5bS6S3CeyTqKxjTVvguwvFKN56dY9zVLYRjT0qqMFadx3%2Fcl6FmdlM9H85FrmLuZWFMzIBFya5LTdA0r1NhsOlBttHiT9aTQ%2FW%2BjjfUpfq43ktaI2C2C518Y3QcHtKsczIdyZpWD%2F%2BY2vhDi7KwPhljcfB2r7vqKFXjHFewjKbU9WsOZrO%2FLljQ%2F%2BsqP3PB%2B6gmBopaQ9R4IsbA7puzd5pCd%2FOQWRYl9djoaNs6fb9eZ4FrX1IkKv3E1STu5H55%2FUTAn8UImUAXT9sJ2xqYPvD9OumigLaqjAgjnBztia4AY6slGk%2FPcOOXuaF0OQCV8ij1uUceS2mUPy5bgVr9JtMMQyFQig3X7ozxyz2PShv4D0wbdC3JMLGixcAGOqUBLf1MaAq2DQ3IqlxV6GPJ9tigHwJCBpIVSd%2FHCbR7GwHcjdWHO0Eiz6iJ0spdut6vvOtmDtBLlfaeF3DT8s3k1seJkAXLX9msqCYkzSMjFzKnMXzTGtZT3CABCyDjpqNj%2Fhcp7Kpz5MQp19Eq7YyLmZ2I6WyNRirh31fJKc%2BiowdoYM5WqDV15hpZA40Cj9aIPLzafuSEBy29iBex1eA5rkNGZ5E7&X-Amz-Signature=69b7f193715c26eff198657f9970656b7ed3507c6abfeb391f1ff2ce10a723c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVFUJYWS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcD%2FtkEEKnxDO3K66t0JRlcqvFPe1q05TqiDOzcimncgIgPlvdq0%2FV6saCeIMsF9Py6qWAh7oPVAMDk0kNQlcz1J8qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7RdnnqTdXlbvsenCrcA849HpiFWyDAvyuK0%2B8aMIxqgbSBdmLw3xt9F5no0iMU6jZMWm5wNMZhpB3b8HkdiVp%2FUjMqfoL%2F5ZZJRdMPU%2BWXvxcLGzjowMY38ZSMiIlkKKKX5j5VOsk6ejAc0%2BIYzI53gAsf7OUQFksY90wquErFxnjC4k%2F509Lb%2BsXzIy62RYMeq7XQlLglgIo8T9WVZ246%2BmmuUHsvrN%2FbUYyKL8S93X%2B6AvRPpMKGQweMf2ssf%2FZr7yrV3%2Fp1iFvsHUEEJS5DKRMOC5bS6S3CeyTqKxjTVvguwvFKN56dY9zVLYRjT0qqMFadx3%2Fcl6FmdlM9H85FrmLuZWFMzIBFya5LTdA0r1NhsOlBttHiT9aTQ%2FW%2BjjfUpfq43ktaI2C2C518Y3QcHtKsczIdyZpWD%2F%2BY2vhDi7KwPhljcfB2r7vqKFXjHFewjKbU9WsOZrO%2FLljQ%2F%2BsqP3PB%2B6gmBopaQ9R4IsbA7puzd5pCd%2FOQWRYl9djoaNs6fb9eZ4FrX1IkKv3E1STu5H55%2FUTAn8UImUAXT9sJ2xqYPvD9OumigLaqjAgjnBztia4AY6slGk%2FPcOOXuaF0OQCV8ij1uUceS2mUPy5bgVr9JtMMQyFQig3X7ozxyz2PShv4D0wbdC3JMLGixcAGOqUBLf1MaAq2DQ3IqlxV6GPJ9tigHwJCBpIVSd%2FHCbR7GwHcjdWHO0Eiz6iJ0spdut6vvOtmDtBLlfaeF3DT8s3k1seJkAXLX9msqCYkzSMjFzKnMXzTGtZT3CABCyDjpqNj%2Fhcp7Kpz5MQp19Eq7YyLmZ2I6WyNRirh31fJKc%2BiowdoYM5WqDV15hpZA40Cj9aIPLzafuSEBy29iBex1eA5rkNGZ5E7&X-Amz-Signature=a2f2c75c4b4eeb75005ec4417d18bfa59f98759f98519c7c9b496b64d0273bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
