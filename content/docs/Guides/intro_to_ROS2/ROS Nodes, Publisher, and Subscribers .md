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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NFA3Z3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD41hNBdf2JW3axdgxUVqGmGpAhNq8KRAsls6%2FDUyQciAIhAKz2pr%2FzKjJKKZfP9820T%2BeGjNKZsxc4%2FU09EW2CqJzSKv8DCDkQABoMNjM3NDIzMTgzODA1IgySr4Cddq4PFSitExUq3AMFerZhBWjj7J12STUoVWNaCjy0hN64VgSEGqpmAQmjoVxz8yLVT7Sbxn%2FCeZ6knO%2BhnejFptv4OvVzE%2BnprTXBWSbPH1Q6nxG1Haqa6xGC6ywgWbI4rcrNxcHcijsiteClc6993o99ZuobmCZDR3USg1pV0UhYZP8ZejGCzf9ja8C45VjeZgxz6g7YEdT%2F%2FiMN8sB3NcFrmN%2B8sNT%2BXYvXIHDZVK%2B2ocoM1wiiEYKbV%2Fn%2BbyJnpNhKhvCgX052C6RG8HR0VaZkG2K49kNNrUCZWToERN10yOmD9WoMW3Fmne8EZyjq%2B0qlysPblhRDpKxdKDxNGqyhdNwF1n7Cum9l5ZOgHg7KntX1TPvUgmmnhoyjuc4dbCJuf3pjJnzm3I%2BQvV13xUN8RBnzMRD%2BfmOeLi%2Fe%2FcN0DvxiWd%2BOvehr0Cohga02c5LfPK9q8XkFadyGF5lUHoIv7IO6azea4k1ivvYfT2665%2BJpT36yBGlvCIRc00bO7E1VzHeMshSPEpp5Nd%2FgNxuWE%2BFqeVKFduhW%2FXnVTQnZ1f%2FU4Fef3BksuAMj8MXFYDsb5Xv8jQOkZZIusFLW2BCXlQDDvYn08QCKbD4O%2BKtz%2Fp1lM0tFS0HGS4y5hue33O8aodMnzTCRiovEBjqkAY0K6z%2B4DPbVd7o1tyKBvapPzka%2Bg3ZawgAvsyej68%2BG%2ByRM1elD%2B%2Fj8sqxCKOloGKaPsbKjzRgvXa3PNnVik9j0oD4IgQ93ncJi3Q0uX9aqw8ftOw8bSZ%2Bi9WF8UI8%2FfB%2FEDR%2BcD25eOm8EKw2Paeu2l25JvXe5Srs5iOt%2BX%2B6WI4No3%2FZRZR0Z8qbTxDoXWaTpDBDeuV6Zp5l%2FFgJ%2BeWCwL6I%2B&X-Amz-Signature=8b58ad7b986f28b689f487a88d831934acb172e0755422ca83b3f5a1e862b698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NFA3Z3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD41hNBdf2JW3axdgxUVqGmGpAhNq8KRAsls6%2FDUyQciAIhAKz2pr%2FzKjJKKZfP9820T%2BeGjNKZsxc4%2FU09EW2CqJzSKv8DCDkQABoMNjM3NDIzMTgzODA1IgySr4Cddq4PFSitExUq3AMFerZhBWjj7J12STUoVWNaCjy0hN64VgSEGqpmAQmjoVxz8yLVT7Sbxn%2FCeZ6knO%2BhnejFptv4OvVzE%2BnprTXBWSbPH1Q6nxG1Haqa6xGC6ywgWbI4rcrNxcHcijsiteClc6993o99ZuobmCZDR3USg1pV0UhYZP8ZejGCzf9ja8C45VjeZgxz6g7YEdT%2F%2FiMN8sB3NcFrmN%2B8sNT%2BXYvXIHDZVK%2B2ocoM1wiiEYKbV%2Fn%2BbyJnpNhKhvCgX052C6RG8HR0VaZkG2K49kNNrUCZWToERN10yOmD9WoMW3Fmne8EZyjq%2B0qlysPblhRDpKxdKDxNGqyhdNwF1n7Cum9l5ZOgHg7KntX1TPvUgmmnhoyjuc4dbCJuf3pjJnzm3I%2BQvV13xUN8RBnzMRD%2BfmOeLi%2Fe%2FcN0DvxiWd%2BOvehr0Cohga02c5LfPK9q8XkFadyGF5lUHoIv7IO6azea4k1ivvYfT2665%2BJpT36yBGlvCIRc00bO7E1VzHeMshSPEpp5Nd%2FgNxuWE%2BFqeVKFduhW%2FXnVTQnZ1f%2FU4Fef3BksuAMj8MXFYDsb5Xv8jQOkZZIusFLW2BCXlQDDvYn08QCKbD4O%2BKtz%2Fp1lM0tFS0HGS4y5hue33O8aodMnzTCRiovEBjqkAY0K6z%2B4DPbVd7o1tyKBvapPzka%2Bg3ZawgAvsyej68%2BG%2ByRM1elD%2B%2Fj8sqxCKOloGKaPsbKjzRgvXa3PNnVik9j0oD4IgQ93ncJi3Q0uX9aqw8ftOw8bSZ%2Bi9WF8UI8%2FfB%2FEDR%2BcD25eOm8EKw2Paeu2l25JvXe5Srs5iOt%2BX%2B6WI4No3%2FZRZR0Z8qbTxDoXWaTpDBDeuV6Zp5l%2FFgJ%2BeWCwL6I%2B&X-Amz-Signature=cb403f491e6f14bb3b09450ec62021ff2a5d7420937bac4a059ad8dac21b2720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NFA3Z3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD41hNBdf2JW3axdgxUVqGmGpAhNq8KRAsls6%2FDUyQciAIhAKz2pr%2FzKjJKKZfP9820T%2BeGjNKZsxc4%2FU09EW2CqJzSKv8DCDkQABoMNjM3NDIzMTgzODA1IgySr4Cddq4PFSitExUq3AMFerZhBWjj7J12STUoVWNaCjy0hN64VgSEGqpmAQmjoVxz8yLVT7Sbxn%2FCeZ6knO%2BhnejFptv4OvVzE%2BnprTXBWSbPH1Q6nxG1Haqa6xGC6ywgWbI4rcrNxcHcijsiteClc6993o99ZuobmCZDR3USg1pV0UhYZP8ZejGCzf9ja8C45VjeZgxz6g7YEdT%2F%2FiMN8sB3NcFrmN%2B8sNT%2BXYvXIHDZVK%2B2ocoM1wiiEYKbV%2Fn%2BbyJnpNhKhvCgX052C6RG8HR0VaZkG2K49kNNrUCZWToERN10yOmD9WoMW3Fmne8EZyjq%2B0qlysPblhRDpKxdKDxNGqyhdNwF1n7Cum9l5ZOgHg7KntX1TPvUgmmnhoyjuc4dbCJuf3pjJnzm3I%2BQvV13xUN8RBnzMRD%2BfmOeLi%2Fe%2FcN0DvxiWd%2BOvehr0Cohga02c5LfPK9q8XkFadyGF5lUHoIv7IO6azea4k1ivvYfT2665%2BJpT36yBGlvCIRc00bO7E1VzHeMshSPEpp5Nd%2FgNxuWE%2BFqeVKFduhW%2FXnVTQnZ1f%2FU4Fef3BksuAMj8MXFYDsb5Xv8jQOkZZIusFLW2BCXlQDDvYn08QCKbD4O%2BKtz%2Fp1lM0tFS0HGS4y5hue33O8aodMnzTCRiovEBjqkAY0K6z%2B4DPbVd7o1tyKBvapPzka%2Bg3ZawgAvsyej68%2BG%2ByRM1elD%2B%2Fj8sqxCKOloGKaPsbKjzRgvXa3PNnVik9j0oD4IgQ93ncJi3Q0uX9aqw8ftOw8bSZ%2Bi9WF8UI8%2FfB%2FEDR%2BcD25eOm8EKw2Paeu2l25JvXe5Srs5iOt%2BX%2B6WI4No3%2FZRZR0Z8qbTxDoXWaTpDBDeuV6Zp5l%2FFgJ%2BeWCwL6I%2B&X-Amz-Signature=3135a2d1976c33d0073f25b6766f919514240288eb1ea4eb50c309ca7518d107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NFA3Z3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD41hNBdf2JW3axdgxUVqGmGpAhNq8KRAsls6%2FDUyQciAIhAKz2pr%2FzKjJKKZfP9820T%2BeGjNKZsxc4%2FU09EW2CqJzSKv8DCDkQABoMNjM3NDIzMTgzODA1IgySr4Cddq4PFSitExUq3AMFerZhBWjj7J12STUoVWNaCjy0hN64VgSEGqpmAQmjoVxz8yLVT7Sbxn%2FCeZ6knO%2BhnejFptv4OvVzE%2BnprTXBWSbPH1Q6nxG1Haqa6xGC6ywgWbI4rcrNxcHcijsiteClc6993o99ZuobmCZDR3USg1pV0UhYZP8ZejGCzf9ja8C45VjeZgxz6g7YEdT%2F%2FiMN8sB3NcFrmN%2B8sNT%2BXYvXIHDZVK%2B2ocoM1wiiEYKbV%2Fn%2BbyJnpNhKhvCgX052C6RG8HR0VaZkG2K49kNNrUCZWToERN10yOmD9WoMW3Fmne8EZyjq%2B0qlysPblhRDpKxdKDxNGqyhdNwF1n7Cum9l5ZOgHg7KntX1TPvUgmmnhoyjuc4dbCJuf3pjJnzm3I%2BQvV13xUN8RBnzMRD%2BfmOeLi%2Fe%2FcN0DvxiWd%2BOvehr0Cohga02c5LfPK9q8XkFadyGF5lUHoIv7IO6azea4k1ivvYfT2665%2BJpT36yBGlvCIRc00bO7E1VzHeMshSPEpp5Nd%2FgNxuWE%2BFqeVKFduhW%2FXnVTQnZ1f%2FU4Fef3BksuAMj8MXFYDsb5Xv8jQOkZZIusFLW2BCXlQDDvYn08QCKbD4O%2BKtz%2Fp1lM0tFS0HGS4y5hue33O8aodMnzTCRiovEBjqkAY0K6z%2B4DPbVd7o1tyKBvapPzka%2Bg3ZawgAvsyej68%2BG%2ByRM1elD%2B%2Fj8sqxCKOloGKaPsbKjzRgvXa3PNnVik9j0oD4IgQ93ncJi3Q0uX9aqw8ftOw8bSZ%2Bi9WF8UI8%2FfB%2FEDR%2BcD25eOm8EKw2Paeu2l25JvXe5Srs5iOt%2BX%2B6WI4No3%2FZRZR0Z8qbTxDoXWaTpDBDeuV6Zp5l%2FFgJ%2BeWCwL6I%2B&X-Amz-Signature=02d2416cdbcf4d985b12ace32491fc54c0bd3310d256b8049ae5cd4d5273fc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NFA3Z3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD41hNBdf2JW3axdgxUVqGmGpAhNq8KRAsls6%2FDUyQciAIhAKz2pr%2FzKjJKKZfP9820T%2BeGjNKZsxc4%2FU09EW2CqJzSKv8DCDkQABoMNjM3NDIzMTgzODA1IgySr4Cddq4PFSitExUq3AMFerZhBWjj7J12STUoVWNaCjy0hN64VgSEGqpmAQmjoVxz8yLVT7Sbxn%2FCeZ6knO%2BhnejFptv4OvVzE%2BnprTXBWSbPH1Q6nxG1Haqa6xGC6ywgWbI4rcrNxcHcijsiteClc6993o99ZuobmCZDR3USg1pV0UhYZP8ZejGCzf9ja8C45VjeZgxz6g7YEdT%2F%2FiMN8sB3NcFrmN%2B8sNT%2BXYvXIHDZVK%2B2ocoM1wiiEYKbV%2Fn%2BbyJnpNhKhvCgX052C6RG8HR0VaZkG2K49kNNrUCZWToERN10yOmD9WoMW3Fmne8EZyjq%2B0qlysPblhRDpKxdKDxNGqyhdNwF1n7Cum9l5ZOgHg7KntX1TPvUgmmnhoyjuc4dbCJuf3pjJnzm3I%2BQvV13xUN8RBnzMRD%2BfmOeLi%2Fe%2FcN0DvxiWd%2BOvehr0Cohga02c5LfPK9q8XkFadyGF5lUHoIv7IO6azea4k1ivvYfT2665%2BJpT36yBGlvCIRc00bO7E1VzHeMshSPEpp5Nd%2FgNxuWE%2BFqeVKFduhW%2FXnVTQnZ1f%2FU4Fef3BksuAMj8MXFYDsb5Xv8jQOkZZIusFLW2BCXlQDDvYn08QCKbD4O%2BKtz%2Fp1lM0tFS0HGS4y5hue33O8aodMnzTCRiovEBjqkAY0K6z%2B4DPbVd7o1tyKBvapPzka%2Bg3ZawgAvsyej68%2BG%2ByRM1elD%2B%2Fj8sqxCKOloGKaPsbKjzRgvXa3PNnVik9j0oD4IgQ93ncJi3Q0uX9aqw8ftOw8bSZ%2Bi9WF8UI8%2FfB%2FEDR%2BcD25eOm8EKw2Paeu2l25JvXe5Srs5iOt%2BX%2B6WI4No3%2FZRZR0Z8qbTxDoXWaTpDBDeuV6Zp5l%2FFgJ%2BeWCwL6I%2B&X-Amz-Signature=518fe9f1fa068f5f2ff706e9bb8fad6c8b5f419ff3d0374a6b4f37f28987edc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NFA3Z3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD41hNBdf2JW3axdgxUVqGmGpAhNq8KRAsls6%2FDUyQciAIhAKz2pr%2FzKjJKKZfP9820T%2BeGjNKZsxc4%2FU09EW2CqJzSKv8DCDkQABoMNjM3NDIzMTgzODA1IgySr4Cddq4PFSitExUq3AMFerZhBWjj7J12STUoVWNaCjy0hN64VgSEGqpmAQmjoVxz8yLVT7Sbxn%2FCeZ6knO%2BhnejFptv4OvVzE%2BnprTXBWSbPH1Q6nxG1Haqa6xGC6ywgWbI4rcrNxcHcijsiteClc6993o99ZuobmCZDR3USg1pV0UhYZP8ZejGCzf9ja8C45VjeZgxz6g7YEdT%2F%2FiMN8sB3NcFrmN%2B8sNT%2BXYvXIHDZVK%2B2ocoM1wiiEYKbV%2Fn%2BbyJnpNhKhvCgX052C6RG8HR0VaZkG2K49kNNrUCZWToERN10yOmD9WoMW3Fmne8EZyjq%2B0qlysPblhRDpKxdKDxNGqyhdNwF1n7Cum9l5ZOgHg7KntX1TPvUgmmnhoyjuc4dbCJuf3pjJnzm3I%2BQvV13xUN8RBnzMRD%2BfmOeLi%2Fe%2FcN0DvxiWd%2BOvehr0Cohga02c5LfPK9q8XkFadyGF5lUHoIv7IO6azea4k1ivvYfT2665%2BJpT36yBGlvCIRc00bO7E1VzHeMshSPEpp5Nd%2FgNxuWE%2BFqeVKFduhW%2FXnVTQnZ1f%2FU4Fef3BksuAMj8MXFYDsb5Xv8jQOkZZIusFLW2BCXlQDDvYn08QCKbD4O%2BKtz%2Fp1lM0tFS0HGS4y5hue33O8aodMnzTCRiovEBjqkAY0K6z%2B4DPbVd7o1tyKBvapPzka%2Bg3ZawgAvsyej68%2BG%2ByRM1elD%2B%2Fj8sqxCKOloGKaPsbKjzRgvXa3PNnVik9j0oD4IgQ93ncJi3Q0uX9aqw8ftOw8bSZ%2Bi9WF8UI8%2FfB%2FEDR%2BcD25eOm8EKw2Paeu2l25JvXe5Srs5iOt%2BX%2B6WI4No3%2FZRZR0Z8qbTxDoXWaTpDBDeuV6Zp5l%2FFgJ%2BeWCwL6I%2B&X-Amz-Signature=c272d9e2ed38b6724b12d23d42a41b3ffc7c05c0f24550709c90b79c6f6b017b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NFA3Z3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD41hNBdf2JW3axdgxUVqGmGpAhNq8KRAsls6%2FDUyQciAIhAKz2pr%2FzKjJKKZfP9820T%2BeGjNKZsxc4%2FU09EW2CqJzSKv8DCDkQABoMNjM3NDIzMTgzODA1IgySr4Cddq4PFSitExUq3AMFerZhBWjj7J12STUoVWNaCjy0hN64VgSEGqpmAQmjoVxz8yLVT7Sbxn%2FCeZ6knO%2BhnejFptv4OvVzE%2BnprTXBWSbPH1Q6nxG1Haqa6xGC6ywgWbI4rcrNxcHcijsiteClc6993o99ZuobmCZDR3USg1pV0UhYZP8ZejGCzf9ja8C45VjeZgxz6g7YEdT%2F%2FiMN8sB3NcFrmN%2B8sNT%2BXYvXIHDZVK%2B2ocoM1wiiEYKbV%2Fn%2BbyJnpNhKhvCgX052C6RG8HR0VaZkG2K49kNNrUCZWToERN10yOmD9WoMW3Fmne8EZyjq%2B0qlysPblhRDpKxdKDxNGqyhdNwF1n7Cum9l5ZOgHg7KntX1TPvUgmmnhoyjuc4dbCJuf3pjJnzm3I%2BQvV13xUN8RBnzMRD%2BfmOeLi%2Fe%2FcN0DvxiWd%2BOvehr0Cohga02c5LfPK9q8XkFadyGF5lUHoIv7IO6azea4k1ivvYfT2665%2BJpT36yBGlvCIRc00bO7E1VzHeMshSPEpp5Nd%2FgNxuWE%2BFqeVKFduhW%2FXnVTQnZ1f%2FU4Fef3BksuAMj8MXFYDsb5Xv8jQOkZZIusFLW2BCXlQDDvYn08QCKbD4O%2BKtz%2Fp1lM0tFS0HGS4y5hue33O8aodMnzTCRiovEBjqkAY0K6z%2B4DPbVd7o1tyKBvapPzka%2Bg3ZawgAvsyej68%2BG%2ByRM1elD%2B%2Fj8sqxCKOloGKaPsbKjzRgvXa3PNnVik9j0oD4IgQ93ncJi3Q0uX9aqw8ftOw8bSZ%2Bi9WF8UI8%2FfB%2FEDR%2BcD25eOm8EKw2Paeu2l25JvXe5Srs5iOt%2BX%2B6WI4No3%2FZRZR0Z8qbTxDoXWaTpDBDeuV6Zp5l%2FFgJ%2BeWCwL6I%2B&X-Amz-Signature=51a9e9abf798e13da1541eb1fdd40f9c67ec9181a9bac455dbf1b6094792ea89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NFA3Z3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD41hNBdf2JW3axdgxUVqGmGpAhNq8KRAsls6%2FDUyQciAIhAKz2pr%2FzKjJKKZfP9820T%2BeGjNKZsxc4%2FU09EW2CqJzSKv8DCDkQABoMNjM3NDIzMTgzODA1IgySr4Cddq4PFSitExUq3AMFerZhBWjj7J12STUoVWNaCjy0hN64VgSEGqpmAQmjoVxz8yLVT7Sbxn%2FCeZ6knO%2BhnejFptv4OvVzE%2BnprTXBWSbPH1Q6nxG1Haqa6xGC6ywgWbI4rcrNxcHcijsiteClc6993o99ZuobmCZDR3USg1pV0UhYZP8ZejGCzf9ja8C45VjeZgxz6g7YEdT%2F%2FiMN8sB3NcFrmN%2B8sNT%2BXYvXIHDZVK%2B2ocoM1wiiEYKbV%2Fn%2BbyJnpNhKhvCgX052C6RG8HR0VaZkG2K49kNNrUCZWToERN10yOmD9WoMW3Fmne8EZyjq%2B0qlysPblhRDpKxdKDxNGqyhdNwF1n7Cum9l5ZOgHg7KntX1TPvUgmmnhoyjuc4dbCJuf3pjJnzm3I%2BQvV13xUN8RBnzMRD%2BfmOeLi%2Fe%2FcN0DvxiWd%2BOvehr0Cohga02c5LfPK9q8XkFadyGF5lUHoIv7IO6azea4k1ivvYfT2665%2BJpT36yBGlvCIRc00bO7E1VzHeMshSPEpp5Nd%2FgNxuWE%2BFqeVKFduhW%2FXnVTQnZ1f%2FU4Fef3BksuAMj8MXFYDsb5Xv8jQOkZZIusFLW2BCXlQDDvYn08QCKbD4O%2BKtz%2Fp1lM0tFS0HGS4y5hue33O8aodMnzTCRiovEBjqkAY0K6z%2B4DPbVd7o1tyKBvapPzka%2Bg3ZawgAvsyej68%2BG%2ByRM1elD%2B%2Fj8sqxCKOloGKaPsbKjzRgvXa3PNnVik9j0oD4IgQ93ncJi3Q0uX9aqw8ftOw8bSZ%2Bi9WF8UI8%2FfB%2FEDR%2BcD25eOm8EKw2Paeu2l25JvXe5Srs5iOt%2BX%2B6WI4No3%2FZRZR0Z8qbTxDoXWaTpDBDeuV6Zp5l%2FFgJ%2BeWCwL6I%2B&X-Amz-Signature=bcc7253380113352cc49499dcca7c3908575fe30e617bab01b6a78578314b46d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
