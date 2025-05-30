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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPPAYG7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFLvhZv0zOpbECzeAO3r0kXcZcl6zqnWnUMn5lbbK8wIhAJY%2FtW%2Fex6Dgei1NPhSxLSAFOOqkVm7rjx9P3D3DxdglKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw08wxKDc0Iqq3%2F96Mq3AP%2FIQqntB%2Bmu7zJiZEXisgoCo93dx6xOGm1zSq4vk5eFXHjqCiSh1x5nGwFlba8nMguFC8y4var6h%2F%2FqKxt0lOFhYM7LsweHDWuFExB8WYhCr16HfhJhk50cjO%2B0cyvHYXmAkG6wDSzJFDPHKX62Yulv%2FmzcAPsrz%2B8Rk3VkDbggAmEQmJRkrtRMxdYkQfHkHTNz8fQJ1F7PNQMk%2Fl%2BNBSP6tJZ5uEFnTr3EL0IczGv3BjOCAXUYONlI%2BUNumDmP%2BFliEINpQNGwDQE0RjsUXZ0xLbEEnQ3o6%2BVRxov2eE%2FJQMftxLj7xq544dteRv1cFSplm4SdMGAVwRO4sGbwDpGDUsQhCP7jrvVavQhrCCRoF18I5gRRLke03JB9dVr6Wd6tOeukn5q4QLxi67wWDSBfI3JKyPRvFYVfRiVWpf%2BQVCk9NkxEpeSZ%2BU5JTG%2Bt0R7Sp8meDyEBq6XUwgO4kf0YL1tnBnReZuFfMiE4Q2%2FjcjKkuYnMtz3QuHqOJRFMsYXPW5U7drmMj95omqZ4O2mTQdOVoacVgl3aa4Qk6EJGJXHb91WF5qawRSP1C1uaxSiTf6fZ6wLyL69XLEngjxYqE8PDEUjtw3feJ6m5ytopVgZZKPzLDv9XBiAPDD%2FxuTBBjqkAejCep7VsRVaWO6gN3SLG7dJIkH81%2Fij8IFOa9MJtKPma8eVt0TRH6HBVCSr%2Buecm6nbtWM%2FtBV4%2BObHRs5ZOGvrUnJ26jZEIbsk8pT6wrRBQBsLAYNiQmIyfXjT4L3Sd9AQBcH9pxKB7A6d%2FJ5rPJ8wLUy2Ixs2iUufKuHWx2SDClq2ifCZWStYYvin1JUTidCWyWJv4%2Fw%2FNvTijG%2BRXbUG2Cy%2B&X-Amz-Signature=cefdce943afad57f00daf771c3583b36281df421c7443ce08d668af06e796e59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPPAYG7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFLvhZv0zOpbECzeAO3r0kXcZcl6zqnWnUMn5lbbK8wIhAJY%2FtW%2Fex6Dgei1NPhSxLSAFOOqkVm7rjx9P3D3DxdglKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw08wxKDc0Iqq3%2F96Mq3AP%2FIQqntB%2Bmu7zJiZEXisgoCo93dx6xOGm1zSq4vk5eFXHjqCiSh1x5nGwFlba8nMguFC8y4var6h%2F%2FqKxt0lOFhYM7LsweHDWuFExB8WYhCr16HfhJhk50cjO%2B0cyvHYXmAkG6wDSzJFDPHKX62Yulv%2FmzcAPsrz%2B8Rk3VkDbggAmEQmJRkrtRMxdYkQfHkHTNz8fQJ1F7PNQMk%2Fl%2BNBSP6tJZ5uEFnTr3EL0IczGv3BjOCAXUYONlI%2BUNumDmP%2BFliEINpQNGwDQE0RjsUXZ0xLbEEnQ3o6%2BVRxov2eE%2FJQMftxLj7xq544dteRv1cFSplm4SdMGAVwRO4sGbwDpGDUsQhCP7jrvVavQhrCCRoF18I5gRRLke03JB9dVr6Wd6tOeukn5q4QLxi67wWDSBfI3JKyPRvFYVfRiVWpf%2BQVCk9NkxEpeSZ%2BU5JTG%2Bt0R7Sp8meDyEBq6XUwgO4kf0YL1tnBnReZuFfMiE4Q2%2FjcjKkuYnMtz3QuHqOJRFMsYXPW5U7drmMj95omqZ4O2mTQdOVoacVgl3aa4Qk6EJGJXHb91WF5qawRSP1C1uaxSiTf6fZ6wLyL69XLEngjxYqE8PDEUjtw3feJ6m5ytopVgZZKPzLDv9XBiAPDD%2FxuTBBjqkAejCep7VsRVaWO6gN3SLG7dJIkH81%2Fij8IFOa9MJtKPma8eVt0TRH6HBVCSr%2Buecm6nbtWM%2FtBV4%2BObHRs5ZOGvrUnJ26jZEIbsk8pT6wrRBQBsLAYNiQmIyfXjT4L3Sd9AQBcH9pxKB7A6d%2FJ5rPJ8wLUy2Ixs2iUufKuHWx2SDClq2ifCZWStYYvin1JUTidCWyWJv4%2Fw%2FNvTijG%2BRXbUG2Cy%2B&X-Amz-Signature=0374ffd085cbcfcd66852fd762fc9dc47d3ae686f850d0bfe6092b1dd7be58f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPPAYG7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFLvhZv0zOpbECzeAO3r0kXcZcl6zqnWnUMn5lbbK8wIhAJY%2FtW%2Fex6Dgei1NPhSxLSAFOOqkVm7rjx9P3D3DxdglKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw08wxKDc0Iqq3%2F96Mq3AP%2FIQqntB%2Bmu7zJiZEXisgoCo93dx6xOGm1zSq4vk5eFXHjqCiSh1x5nGwFlba8nMguFC8y4var6h%2F%2FqKxt0lOFhYM7LsweHDWuFExB8WYhCr16HfhJhk50cjO%2B0cyvHYXmAkG6wDSzJFDPHKX62Yulv%2FmzcAPsrz%2B8Rk3VkDbggAmEQmJRkrtRMxdYkQfHkHTNz8fQJ1F7PNQMk%2Fl%2BNBSP6tJZ5uEFnTr3EL0IczGv3BjOCAXUYONlI%2BUNumDmP%2BFliEINpQNGwDQE0RjsUXZ0xLbEEnQ3o6%2BVRxov2eE%2FJQMftxLj7xq544dteRv1cFSplm4SdMGAVwRO4sGbwDpGDUsQhCP7jrvVavQhrCCRoF18I5gRRLke03JB9dVr6Wd6tOeukn5q4QLxi67wWDSBfI3JKyPRvFYVfRiVWpf%2BQVCk9NkxEpeSZ%2BU5JTG%2Bt0R7Sp8meDyEBq6XUwgO4kf0YL1tnBnReZuFfMiE4Q2%2FjcjKkuYnMtz3QuHqOJRFMsYXPW5U7drmMj95omqZ4O2mTQdOVoacVgl3aa4Qk6EJGJXHb91WF5qawRSP1C1uaxSiTf6fZ6wLyL69XLEngjxYqE8PDEUjtw3feJ6m5ytopVgZZKPzLDv9XBiAPDD%2FxuTBBjqkAejCep7VsRVaWO6gN3SLG7dJIkH81%2Fij8IFOa9MJtKPma8eVt0TRH6HBVCSr%2Buecm6nbtWM%2FtBV4%2BObHRs5ZOGvrUnJ26jZEIbsk8pT6wrRBQBsLAYNiQmIyfXjT4L3Sd9AQBcH9pxKB7A6d%2FJ5rPJ8wLUy2Ixs2iUufKuHWx2SDClq2ifCZWStYYvin1JUTidCWyWJv4%2Fw%2FNvTijG%2BRXbUG2Cy%2B&X-Amz-Signature=8f90ac906c524370d7b5a02b250523cd423131401682422898c0785457ee5ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPPAYG7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFLvhZv0zOpbECzeAO3r0kXcZcl6zqnWnUMn5lbbK8wIhAJY%2FtW%2Fex6Dgei1NPhSxLSAFOOqkVm7rjx9P3D3DxdglKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw08wxKDc0Iqq3%2F96Mq3AP%2FIQqntB%2Bmu7zJiZEXisgoCo93dx6xOGm1zSq4vk5eFXHjqCiSh1x5nGwFlba8nMguFC8y4var6h%2F%2FqKxt0lOFhYM7LsweHDWuFExB8WYhCr16HfhJhk50cjO%2B0cyvHYXmAkG6wDSzJFDPHKX62Yulv%2FmzcAPsrz%2B8Rk3VkDbggAmEQmJRkrtRMxdYkQfHkHTNz8fQJ1F7PNQMk%2Fl%2BNBSP6tJZ5uEFnTr3EL0IczGv3BjOCAXUYONlI%2BUNumDmP%2BFliEINpQNGwDQE0RjsUXZ0xLbEEnQ3o6%2BVRxov2eE%2FJQMftxLj7xq544dteRv1cFSplm4SdMGAVwRO4sGbwDpGDUsQhCP7jrvVavQhrCCRoF18I5gRRLke03JB9dVr6Wd6tOeukn5q4QLxi67wWDSBfI3JKyPRvFYVfRiVWpf%2BQVCk9NkxEpeSZ%2BU5JTG%2Bt0R7Sp8meDyEBq6XUwgO4kf0YL1tnBnReZuFfMiE4Q2%2FjcjKkuYnMtz3QuHqOJRFMsYXPW5U7drmMj95omqZ4O2mTQdOVoacVgl3aa4Qk6EJGJXHb91WF5qawRSP1C1uaxSiTf6fZ6wLyL69XLEngjxYqE8PDEUjtw3feJ6m5ytopVgZZKPzLDv9XBiAPDD%2FxuTBBjqkAejCep7VsRVaWO6gN3SLG7dJIkH81%2Fij8IFOa9MJtKPma8eVt0TRH6HBVCSr%2Buecm6nbtWM%2FtBV4%2BObHRs5ZOGvrUnJ26jZEIbsk8pT6wrRBQBsLAYNiQmIyfXjT4L3Sd9AQBcH9pxKB7A6d%2FJ5rPJ8wLUy2Ixs2iUufKuHWx2SDClq2ifCZWStYYvin1JUTidCWyWJv4%2Fw%2FNvTijG%2BRXbUG2Cy%2B&X-Amz-Signature=fc80484680319044324b8bd02cb1a264f359c0ae39d974eae1ee8e70c0533828&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPPAYG7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFLvhZv0zOpbECzeAO3r0kXcZcl6zqnWnUMn5lbbK8wIhAJY%2FtW%2Fex6Dgei1NPhSxLSAFOOqkVm7rjx9P3D3DxdglKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw08wxKDc0Iqq3%2F96Mq3AP%2FIQqntB%2Bmu7zJiZEXisgoCo93dx6xOGm1zSq4vk5eFXHjqCiSh1x5nGwFlba8nMguFC8y4var6h%2F%2FqKxt0lOFhYM7LsweHDWuFExB8WYhCr16HfhJhk50cjO%2B0cyvHYXmAkG6wDSzJFDPHKX62Yulv%2FmzcAPsrz%2B8Rk3VkDbggAmEQmJRkrtRMxdYkQfHkHTNz8fQJ1F7PNQMk%2Fl%2BNBSP6tJZ5uEFnTr3EL0IczGv3BjOCAXUYONlI%2BUNumDmP%2BFliEINpQNGwDQE0RjsUXZ0xLbEEnQ3o6%2BVRxov2eE%2FJQMftxLj7xq544dteRv1cFSplm4SdMGAVwRO4sGbwDpGDUsQhCP7jrvVavQhrCCRoF18I5gRRLke03JB9dVr6Wd6tOeukn5q4QLxi67wWDSBfI3JKyPRvFYVfRiVWpf%2BQVCk9NkxEpeSZ%2BU5JTG%2Bt0R7Sp8meDyEBq6XUwgO4kf0YL1tnBnReZuFfMiE4Q2%2FjcjKkuYnMtz3QuHqOJRFMsYXPW5U7drmMj95omqZ4O2mTQdOVoacVgl3aa4Qk6EJGJXHb91WF5qawRSP1C1uaxSiTf6fZ6wLyL69XLEngjxYqE8PDEUjtw3feJ6m5ytopVgZZKPzLDv9XBiAPDD%2FxuTBBjqkAejCep7VsRVaWO6gN3SLG7dJIkH81%2Fij8IFOa9MJtKPma8eVt0TRH6HBVCSr%2Buecm6nbtWM%2FtBV4%2BObHRs5ZOGvrUnJ26jZEIbsk8pT6wrRBQBsLAYNiQmIyfXjT4L3Sd9AQBcH9pxKB7A6d%2FJ5rPJ8wLUy2Ixs2iUufKuHWx2SDClq2ifCZWStYYvin1JUTidCWyWJv4%2Fw%2FNvTijG%2BRXbUG2Cy%2B&X-Amz-Signature=0b0f9df3f555b4f1dee35634661fdbbd7366b9bc756a58f46b7ffcac38664fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPPAYG7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFLvhZv0zOpbECzeAO3r0kXcZcl6zqnWnUMn5lbbK8wIhAJY%2FtW%2Fex6Dgei1NPhSxLSAFOOqkVm7rjx9P3D3DxdglKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw08wxKDc0Iqq3%2F96Mq3AP%2FIQqntB%2Bmu7zJiZEXisgoCo93dx6xOGm1zSq4vk5eFXHjqCiSh1x5nGwFlba8nMguFC8y4var6h%2F%2FqKxt0lOFhYM7LsweHDWuFExB8WYhCr16HfhJhk50cjO%2B0cyvHYXmAkG6wDSzJFDPHKX62Yulv%2FmzcAPsrz%2B8Rk3VkDbggAmEQmJRkrtRMxdYkQfHkHTNz8fQJ1F7PNQMk%2Fl%2BNBSP6tJZ5uEFnTr3EL0IczGv3BjOCAXUYONlI%2BUNumDmP%2BFliEINpQNGwDQE0RjsUXZ0xLbEEnQ3o6%2BVRxov2eE%2FJQMftxLj7xq544dteRv1cFSplm4SdMGAVwRO4sGbwDpGDUsQhCP7jrvVavQhrCCRoF18I5gRRLke03JB9dVr6Wd6tOeukn5q4QLxi67wWDSBfI3JKyPRvFYVfRiVWpf%2BQVCk9NkxEpeSZ%2BU5JTG%2Bt0R7Sp8meDyEBq6XUwgO4kf0YL1tnBnReZuFfMiE4Q2%2FjcjKkuYnMtz3QuHqOJRFMsYXPW5U7drmMj95omqZ4O2mTQdOVoacVgl3aa4Qk6EJGJXHb91WF5qawRSP1C1uaxSiTf6fZ6wLyL69XLEngjxYqE8PDEUjtw3feJ6m5ytopVgZZKPzLDv9XBiAPDD%2FxuTBBjqkAejCep7VsRVaWO6gN3SLG7dJIkH81%2Fij8IFOa9MJtKPma8eVt0TRH6HBVCSr%2Buecm6nbtWM%2FtBV4%2BObHRs5ZOGvrUnJ26jZEIbsk8pT6wrRBQBsLAYNiQmIyfXjT4L3Sd9AQBcH9pxKB7A6d%2FJ5rPJ8wLUy2Ixs2iUufKuHWx2SDClq2ifCZWStYYvin1JUTidCWyWJv4%2Fw%2FNvTijG%2BRXbUG2Cy%2B&X-Amz-Signature=29f550f1c7e9fda5f5c28f7706687d762a1af860825eaac6f1890bd90b55c884&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPPAYG7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFLvhZv0zOpbECzeAO3r0kXcZcl6zqnWnUMn5lbbK8wIhAJY%2FtW%2Fex6Dgei1NPhSxLSAFOOqkVm7rjx9P3D3DxdglKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw08wxKDc0Iqq3%2F96Mq3AP%2FIQqntB%2Bmu7zJiZEXisgoCo93dx6xOGm1zSq4vk5eFXHjqCiSh1x5nGwFlba8nMguFC8y4var6h%2F%2FqKxt0lOFhYM7LsweHDWuFExB8WYhCr16HfhJhk50cjO%2B0cyvHYXmAkG6wDSzJFDPHKX62Yulv%2FmzcAPsrz%2B8Rk3VkDbggAmEQmJRkrtRMxdYkQfHkHTNz8fQJ1F7PNQMk%2Fl%2BNBSP6tJZ5uEFnTr3EL0IczGv3BjOCAXUYONlI%2BUNumDmP%2BFliEINpQNGwDQE0RjsUXZ0xLbEEnQ3o6%2BVRxov2eE%2FJQMftxLj7xq544dteRv1cFSplm4SdMGAVwRO4sGbwDpGDUsQhCP7jrvVavQhrCCRoF18I5gRRLke03JB9dVr6Wd6tOeukn5q4QLxi67wWDSBfI3JKyPRvFYVfRiVWpf%2BQVCk9NkxEpeSZ%2BU5JTG%2Bt0R7Sp8meDyEBq6XUwgO4kf0YL1tnBnReZuFfMiE4Q2%2FjcjKkuYnMtz3QuHqOJRFMsYXPW5U7drmMj95omqZ4O2mTQdOVoacVgl3aa4Qk6EJGJXHb91WF5qawRSP1C1uaxSiTf6fZ6wLyL69XLEngjxYqE8PDEUjtw3feJ6m5ytopVgZZKPzLDv9XBiAPDD%2FxuTBBjqkAejCep7VsRVaWO6gN3SLG7dJIkH81%2Fij8IFOa9MJtKPma8eVt0TRH6HBVCSr%2Buecm6nbtWM%2FtBV4%2BObHRs5ZOGvrUnJ26jZEIbsk8pT6wrRBQBsLAYNiQmIyfXjT4L3Sd9AQBcH9pxKB7A6d%2FJ5rPJ8wLUy2Ixs2iUufKuHWx2SDClq2ifCZWStYYvin1JUTidCWyWJv4%2Fw%2FNvTijG%2BRXbUG2Cy%2B&X-Amz-Signature=cd33fe727b3d0b5ce992d7dc9eedf0d6a7c247aa1b438eccc0c59d709eac79df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPPAYG7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFLvhZv0zOpbECzeAO3r0kXcZcl6zqnWnUMn5lbbK8wIhAJY%2FtW%2Fex6Dgei1NPhSxLSAFOOqkVm7rjx9P3D3DxdglKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw08wxKDc0Iqq3%2F96Mq3AP%2FIQqntB%2Bmu7zJiZEXisgoCo93dx6xOGm1zSq4vk5eFXHjqCiSh1x5nGwFlba8nMguFC8y4var6h%2F%2FqKxt0lOFhYM7LsweHDWuFExB8WYhCr16HfhJhk50cjO%2B0cyvHYXmAkG6wDSzJFDPHKX62Yulv%2FmzcAPsrz%2B8Rk3VkDbggAmEQmJRkrtRMxdYkQfHkHTNz8fQJ1F7PNQMk%2Fl%2BNBSP6tJZ5uEFnTr3EL0IczGv3BjOCAXUYONlI%2BUNumDmP%2BFliEINpQNGwDQE0RjsUXZ0xLbEEnQ3o6%2BVRxov2eE%2FJQMftxLj7xq544dteRv1cFSplm4SdMGAVwRO4sGbwDpGDUsQhCP7jrvVavQhrCCRoF18I5gRRLke03JB9dVr6Wd6tOeukn5q4QLxi67wWDSBfI3JKyPRvFYVfRiVWpf%2BQVCk9NkxEpeSZ%2BU5JTG%2Bt0R7Sp8meDyEBq6XUwgO4kf0YL1tnBnReZuFfMiE4Q2%2FjcjKkuYnMtz3QuHqOJRFMsYXPW5U7drmMj95omqZ4O2mTQdOVoacVgl3aa4Qk6EJGJXHb91WF5qawRSP1C1uaxSiTf6fZ6wLyL69XLEngjxYqE8PDEUjtw3feJ6m5ytopVgZZKPzLDv9XBiAPDD%2FxuTBBjqkAejCep7VsRVaWO6gN3SLG7dJIkH81%2Fij8IFOa9MJtKPma8eVt0TRH6HBVCSr%2Buecm6nbtWM%2FtBV4%2BObHRs5ZOGvrUnJ26jZEIbsk8pT6wrRBQBsLAYNiQmIyfXjT4L3Sd9AQBcH9pxKB7A6d%2FJ5rPJ8wLUy2Ixs2iUufKuHWx2SDClq2ifCZWStYYvin1JUTidCWyWJv4%2Fw%2FNvTijG%2BRXbUG2Cy%2B&X-Amz-Signature=33f2888ea01f07a6050a9f5e4b67685389d225496c4547ac5f9e2281f976e104&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
