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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZ6GLNK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLxEnu5Y5CX1%2FcvB5%2BVTejLLIr49vixPzten9tt1c3mAiBqRkhEVOtvjQl3xprJbgcQ8ANyc%2FJ9oF3JaJcSgyc9iCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMHkDzfkoxXhf4htEVKtwD3awhvsS2Qh0lYOpGNiHeE491ElvbpX9YuqplqTdhSofv%2FdyWjk1zbfoPCAnUVls9paRgh4F6RGxjSH%2Bw4qFh5vCxPQPqAZSG4EC6M%2Fj%2FXOY2feMlQhiTGAlAdOSmDgD8jX8ax8nt%2Fi641DYj4CSs2kd2OO61S5%2Bfi0LzN8f4TgzwUBW6wTUqq%2B3VcFcdb0FSQozVN8NIHthxHF9vEtxnU85IEJGvh3dZBurJMnYT5ZRddvPUbFjk1PKOzAbIyiJFjxJ%2F0BGUNrkUVLGk4dFkFSu4OJgPQtbM9BA3OIPSnutFFnjZU7Z6dWY63wH0M77mZT2g2HRbVxfbvdHFGftkkPzAR%2BfZiTVah2MjYN%2BH6bfmB5Z86O99tylTg2aa20XP%2BQUFd3dJtfSV9bCC7fQZ3Czy3B3ge8kCGCrm8quFxLIEzLoqx%2FLUqvm2HQNCIq9jTDFNj4%2BOdrhBim1DCRFf1bMSZCCdHh7h%2FheQ2HBrmOeaWfpiQ5B6Y97igR4npA2xE3XMaQsu6FfN52ORDzBGtHINTYmFf6uKdYAu10ZXj08%2BOTFwf%2FGvdD8MigCnkR5wg5bsR7MuZ%2BQi9r5dwbtDrUNPwKZA%2FC9TkEuotfE2gX0PKN69v0xXXWFjoawwjt%2F%2FvwY6pgEY0K0Q4qskBc%2FpV1BffZPXMj5tumiUx%2B9OVxz31%2BOS48cxKRmB6VirlLYI2j59vnt3QjIAE7J3EtcZt2hONCITschlLTmORnMZLwBLHX9TQGm2i8%2Br1hXy1%2F88sCioJn%2FKNsyYO24MMyAuUbvd4V8zi7bHxsmCh%2FvGnhbTB%2B%2Fdw%2BhOpZHzb7zBgjvMVscumNx8z2xszlUMAnV%2Fl2%2BEsuQybEtVwga5&X-Amz-Signature=892505a898222d4f7c4c19691a07a7d7f6c2254738531a673cb19b44cce36baa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZ6GLNK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLxEnu5Y5CX1%2FcvB5%2BVTejLLIr49vixPzten9tt1c3mAiBqRkhEVOtvjQl3xprJbgcQ8ANyc%2FJ9oF3JaJcSgyc9iCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMHkDzfkoxXhf4htEVKtwD3awhvsS2Qh0lYOpGNiHeE491ElvbpX9YuqplqTdhSofv%2FdyWjk1zbfoPCAnUVls9paRgh4F6RGxjSH%2Bw4qFh5vCxPQPqAZSG4EC6M%2Fj%2FXOY2feMlQhiTGAlAdOSmDgD8jX8ax8nt%2Fi641DYj4CSs2kd2OO61S5%2Bfi0LzN8f4TgzwUBW6wTUqq%2B3VcFcdb0FSQozVN8NIHthxHF9vEtxnU85IEJGvh3dZBurJMnYT5ZRddvPUbFjk1PKOzAbIyiJFjxJ%2F0BGUNrkUVLGk4dFkFSu4OJgPQtbM9BA3OIPSnutFFnjZU7Z6dWY63wH0M77mZT2g2HRbVxfbvdHFGftkkPzAR%2BfZiTVah2MjYN%2BH6bfmB5Z86O99tylTg2aa20XP%2BQUFd3dJtfSV9bCC7fQZ3Czy3B3ge8kCGCrm8quFxLIEzLoqx%2FLUqvm2HQNCIq9jTDFNj4%2BOdrhBim1DCRFf1bMSZCCdHh7h%2FheQ2HBrmOeaWfpiQ5B6Y97igR4npA2xE3XMaQsu6FfN52ORDzBGtHINTYmFf6uKdYAu10ZXj08%2BOTFwf%2FGvdD8MigCnkR5wg5bsR7MuZ%2BQi9r5dwbtDrUNPwKZA%2FC9TkEuotfE2gX0PKN69v0xXXWFjoawwjt%2F%2FvwY6pgEY0K0Q4qskBc%2FpV1BffZPXMj5tumiUx%2B9OVxz31%2BOS48cxKRmB6VirlLYI2j59vnt3QjIAE7J3EtcZt2hONCITschlLTmORnMZLwBLHX9TQGm2i8%2Br1hXy1%2F88sCioJn%2FKNsyYO24MMyAuUbvd4V8zi7bHxsmCh%2FvGnhbTB%2B%2Fdw%2BhOpZHzb7zBgjvMVscumNx8z2xszlUMAnV%2Fl2%2BEsuQybEtVwga5&X-Amz-Signature=78d1526d32381c7ebdf51b0677745d2b5e8fcb10b409da0166ba70afab940ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZ6GLNK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLxEnu5Y5CX1%2FcvB5%2BVTejLLIr49vixPzten9tt1c3mAiBqRkhEVOtvjQl3xprJbgcQ8ANyc%2FJ9oF3JaJcSgyc9iCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMHkDzfkoxXhf4htEVKtwD3awhvsS2Qh0lYOpGNiHeE491ElvbpX9YuqplqTdhSofv%2FdyWjk1zbfoPCAnUVls9paRgh4F6RGxjSH%2Bw4qFh5vCxPQPqAZSG4EC6M%2Fj%2FXOY2feMlQhiTGAlAdOSmDgD8jX8ax8nt%2Fi641DYj4CSs2kd2OO61S5%2Bfi0LzN8f4TgzwUBW6wTUqq%2B3VcFcdb0FSQozVN8NIHthxHF9vEtxnU85IEJGvh3dZBurJMnYT5ZRddvPUbFjk1PKOzAbIyiJFjxJ%2F0BGUNrkUVLGk4dFkFSu4OJgPQtbM9BA3OIPSnutFFnjZU7Z6dWY63wH0M77mZT2g2HRbVxfbvdHFGftkkPzAR%2BfZiTVah2MjYN%2BH6bfmB5Z86O99tylTg2aa20XP%2BQUFd3dJtfSV9bCC7fQZ3Czy3B3ge8kCGCrm8quFxLIEzLoqx%2FLUqvm2HQNCIq9jTDFNj4%2BOdrhBim1DCRFf1bMSZCCdHh7h%2FheQ2HBrmOeaWfpiQ5B6Y97igR4npA2xE3XMaQsu6FfN52ORDzBGtHINTYmFf6uKdYAu10ZXj08%2BOTFwf%2FGvdD8MigCnkR5wg5bsR7MuZ%2BQi9r5dwbtDrUNPwKZA%2FC9TkEuotfE2gX0PKN69v0xXXWFjoawwjt%2F%2FvwY6pgEY0K0Q4qskBc%2FpV1BffZPXMj5tumiUx%2B9OVxz31%2BOS48cxKRmB6VirlLYI2j59vnt3QjIAE7J3EtcZt2hONCITschlLTmORnMZLwBLHX9TQGm2i8%2Br1hXy1%2F88sCioJn%2FKNsyYO24MMyAuUbvd4V8zi7bHxsmCh%2FvGnhbTB%2B%2Fdw%2BhOpZHzb7zBgjvMVscumNx8z2xszlUMAnV%2Fl2%2BEsuQybEtVwga5&X-Amz-Signature=fbb892149a60556c0958811106dae612c71d76cde72f625e78e55cbef14fcc72&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZ6GLNK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLxEnu5Y5CX1%2FcvB5%2BVTejLLIr49vixPzten9tt1c3mAiBqRkhEVOtvjQl3xprJbgcQ8ANyc%2FJ9oF3JaJcSgyc9iCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMHkDzfkoxXhf4htEVKtwD3awhvsS2Qh0lYOpGNiHeE491ElvbpX9YuqplqTdhSofv%2FdyWjk1zbfoPCAnUVls9paRgh4F6RGxjSH%2Bw4qFh5vCxPQPqAZSG4EC6M%2Fj%2FXOY2feMlQhiTGAlAdOSmDgD8jX8ax8nt%2Fi641DYj4CSs2kd2OO61S5%2Bfi0LzN8f4TgzwUBW6wTUqq%2B3VcFcdb0FSQozVN8NIHthxHF9vEtxnU85IEJGvh3dZBurJMnYT5ZRddvPUbFjk1PKOzAbIyiJFjxJ%2F0BGUNrkUVLGk4dFkFSu4OJgPQtbM9BA3OIPSnutFFnjZU7Z6dWY63wH0M77mZT2g2HRbVxfbvdHFGftkkPzAR%2BfZiTVah2MjYN%2BH6bfmB5Z86O99tylTg2aa20XP%2BQUFd3dJtfSV9bCC7fQZ3Czy3B3ge8kCGCrm8quFxLIEzLoqx%2FLUqvm2HQNCIq9jTDFNj4%2BOdrhBim1DCRFf1bMSZCCdHh7h%2FheQ2HBrmOeaWfpiQ5B6Y97igR4npA2xE3XMaQsu6FfN52ORDzBGtHINTYmFf6uKdYAu10ZXj08%2BOTFwf%2FGvdD8MigCnkR5wg5bsR7MuZ%2BQi9r5dwbtDrUNPwKZA%2FC9TkEuotfE2gX0PKN69v0xXXWFjoawwjt%2F%2FvwY6pgEY0K0Q4qskBc%2FpV1BffZPXMj5tumiUx%2B9OVxz31%2BOS48cxKRmB6VirlLYI2j59vnt3QjIAE7J3EtcZt2hONCITschlLTmORnMZLwBLHX9TQGm2i8%2Br1hXy1%2F88sCioJn%2FKNsyYO24MMyAuUbvd4V8zi7bHxsmCh%2FvGnhbTB%2B%2Fdw%2BhOpZHzb7zBgjvMVscumNx8z2xszlUMAnV%2Fl2%2BEsuQybEtVwga5&X-Amz-Signature=a40bc815aeb0d63a3c4e9bc4d04d70833210429192b826b378aea4880478760b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZ6GLNK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLxEnu5Y5CX1%2FcvB5%2BVTejLLIr49vixPzten9tt1c3mAiBqRkhEVOtvjQl3xprJbgcQ8ANyc%2FJ9oF3JaJcSgyc9iCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMHkDzfkoxXhf4htEVKtwD3awhvsS2Qh0lYOpGNiHeE491ElvbpX9YuqplqTdhSofv%2FdyWjk1zbfoPCAnUVls9paRgh4F6RGxjSH%2Bw4qFh5vCxPQPqAZSG4EC6M%2Fj%2FXOY2feMlQhiTGAlAdOSmDgD8jX8ax8nt%2Fi641DYj4CSs2kd2OO61S5%2Bfi0LzN8f4TgzwUBW6wTUqq%2B3VcFcdb0FSQozVN8NIHthxHF9vEtxnU85IEJGvh3dZBurJMnYT5ZRddvPUbFjk1PKOzAbIyiJFjxJ%2F0BGUNrkUVLGk4dFkFSu4OJgPQtbM9BA3OIPSnutFFnjZU7Z6dWY63wH0M77mZT2g2HRbVxfbvdHFGftkkPzAR%2BfZiTVah2MjYN%2BH6bfmB5Z86O99tylTg2aa20XP%2BQUFd3dJtfSV9bCC7fQZ3Czy3B3ge8kCGCrm8quFxLIEzLoqx%2FLUqvm2HQNCIq9jTDFNj4%2BOdrhBim1DCRFf1bMSZCCdHh7h%2FheQ2HBrmOeaWfpiQ5B6Y97igR4npA2xE3XMaQsu6FfN52ORDzBGtHINTYmFf6uKdYAu10ZXj08%2BOTFwf%2FGvdD8MigCnkR5wg5bsR7MuZ%2BQi9r5dwbtDrUNPwKZA%2FC9TkEuotfE2gX0PKN69v0xXXWFjoawwjt%2F%2FvwY6pgEY0K0Q4qskBc%2FpV1BffZPXMj5tumiUx%2B9OVxz31%2BOS48cxKRmB6VirlLYI2j59vnt3QjIAE7J3EtcZt2hONCITschlLTmORnMZLwBLHX9TQGm2i8%2Br1hXy1%2F88sCioJn%2FKNsyYO24MMyAuUbvd4V8zi7bHxsmCh%2FvGnhbTB%2B%2Fdw%2BhOpZHzb7zBgjvMVscumNx8z2xszlUMAnV%2Fl2%2BEsuQybEtVwga5&X-Amz-Signature=eddc6185ad5db344c0fddc8f01fd4af41ef11920cffe7ebe1d4edddaa7f36254&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZ6GLNK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLxEnu5Y5CX1%2FcvB5%2BVTejLLIr49vixPzten9tt1c3mAiBqRkhEVOtvjQl3xprJbgcQ8ANyc%2FJ9oF3JaJcSgyc9iCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMHkDzfkoxXhf4htEVKtwD3awhvsS2Qh0lYOpGNiHeE491ElvbpX9YuqplqTdhSofv%2FdyWjk1zbfoPCAnUVls9paRgh4F6RGxjSH%2Bw4qFh5vCxPQPqAZSG4EC6M%2Fj%2FXOY2feMlQhiTGAlAdOSmDgD8jX8ax8nt%2Fi641DYj4CSs2kd2OO61S5%2Bfi0LzN8f4TgzwUBW6wTUqq%2B3VcFcdb0FSQozVN8NIHthxHF9vEtxnU85IEJGvh3dZBurJMnYT5ZRddvPUbFjk1PKOzAbIyiJFjxJ%2F0BGUNrkUVLGk4dFkFSu4OJgPQtbM9BA3OIPSnutFFnjZU7Z6dWY63wH0M77mZT2g2HRbVxfbvdHFGftkkPzAR%2BfZiTVah2MjYN%2BH6bfmB5Z86O99tylTg2aa20XP%2BQUFd3dJtfSV9bCC7fQZ3Czy3B3ge8kCGCrm8quFxLIEzLoqx%2FLUqvm2HQNCIq9jTDFNj4%2BOdrhBim1DCRFf1bMSZCCdHh7h%2FheQ2HBrmOeaWfpiQ5B6Y97igR4npA2xE3XMaQsu6FfN52ORDzBGtHINTYmFf6uKdYAu10ZXj08%2BOTFwf%2FGvdD8MigCnkR5wg5bsR7MuZ%2BQi9r5dwbtDrUNPwKZA%2FC9TkEuotfE2gX0PKN69v0xXXWFjoawwjt%2F%2FvwY6pgEY0K0Q4qskBc%2FpV1BffZPXMj5tumiUx%2B9OVxz31%2BOS48cxKRmB6VirlLYI2j59vnt3QjIAE7J3EtcZt2hONCITschlLTmORnMZLwBLHX9TQGm2i8%2Br1hXy1%2F88sCioJn%2FKNsyYO24MMyAuUbvd4V8zi7bHxsmCh%2FvGnhbTB%2B%2Fdw%2BhOpZHzb7zBgjvMVscumNx8z2xszlUMAnV%2Fl2%2BEsuQybEtVwga5&X-Amz-Signature=8a4601b08615f8161839dcf5499f5787425bf903f2639382315d697edd983afa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZ6GLNK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLxEnu5Y5CX1%2FcvB5%2BVTejLLIr49vixPzten9tt1c3mAiBqRkhEVOtvjQl3xprJbgcQ8ANyc%2FJ9oF3JaJcSgyc9iCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMHkDzfkoxXhf4htEVKtwD3awhvsS2Qh0lYOpGNiHeE491ElvbpX9YuqplqTdhSofv%2FdyWjk1zbfoPCAnUVls9paRgh4F6RGxjSH%2Bw4qFh5vCxPQPqAZSG4EC6M%2Fj%2FXOY2feMlQhiTGAlAdOSmDgD8jX8ax8nt%2Fi641DYj4CSs2kd2OO61S5%2Bfi0LzN8f4TgzwUBW6wTUqq%2B3VcFcdb0FSQozVN8NIHthxHF9vEtxnU85IEJGvh3dZBurJMnYT5ZRddvPUbFjk1PKOzAbIyiJFjxJ%2F0BGUNrkUVLGk4dFkFSu4OJgPQtbM9BA3OIPSnutFFnjZU7Z6dWY63wH0M77mZT2g2HRbVxfbvdHFGftkkPzAR%2BfZiTVah2MjYN%2BH6bfmB5Z86O99tylTg2aa20XP%2BQUFd3dJtfSV9bCC7fQZ3Czy3B3ge8kCGCrm8quFxLIEzLoqx%2FLUqvm2HQNCIq9jTDFNj4%2BOdrhBim1DCRFf1bMSZCCdHh7h%2FheQ2HBrmOeaWfpiQ5B6Y97igR4npA2xE3XMaQsu6FfN52ORDzBGtHINTYmFf6uKdYAu10ZXj08%2BOTFwf%2FGvdD8MigCnkR5wg5bsR7MuZ%2BQi9r5dwbtDrUNPwKZA%2FC9TkEuotfE2gX0PKN69v0xXXWFjoawwjt%2F%2FvwY6pgEY0K0Q4qskBc%2FpV1BffZPXMj5tumiUx%2B9OVxz31%2BOS48cxKRmB6VirlLYI2j59vnt3QjIAE7J3EtcZt2hONCITschlLTmORnMZLwBLHX9TQGm2i8%2Br1hXy1%2F88sCioJn%2FKNsyYO24MMyAuUbvd4V8zi7bHxsmCh%2FvGnhbTB%2B%2Fdw%2BhOpZHzb7zBgjvMVscumNx8z2xszlUMAnV%2Fl2%2BEsuQybEtVwga5&X-Amz-Signature=191e4665b37eaadec089f062752b9c408d919210496ced005ace58fac7758882&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZ6GLNK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLxEnu5Y5CX1%2FcvB5%2BVTejLLIr49vixPzten9tt1c3mAiBqRkhEVOtvjQl3xprJbgcQ8ANyc%2FJ9oF3JaJcSgyc9iCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMHkDzfkoxXhf4htEVKtwD3awhvsS2Qh0lYOpGNiHeE491ElvbpX9YuqplqTdhSofv%2FdyWjk1zbfoPCAnUVls9paRgh4F6RGxjSH%2Bw4qFh5vCxPQPqAZSG4EC6M%2Fj%2FXOY2feMlQhiTGAlAdOSmDgD8jX8ax8nt%2Fi641DYj4CSs2kd2OO61S5%2Bfi0LzN8f4TgzwUBW6wTUqq%2B3VcFcdb0FSQozVN8NIHthxHF9vEtxnU85IEJGvh3dZBurJMnYT5ZRddvPUbFjk1PKOzAbIyiJFjxJ%2F0BGUNrkUVLGk4dFkFSu4OJgPQtbM9BA3OIPSnutFFnjZU7Z6dWY63wH0M77mZT2g2HRbVxfbvdHFGftkkPzAR%2BfZiTVah2MjYN%2BH6bfmB5Z86O99tylTg2aa20XP%2BQUFd3dJtfSV9bCC7fQZ3Czy3B3ge8kCGCrm8quFxLIEzLoqx%2FLUqvm2HQNCIq9jTDFNj4%2BOdrhBim1DCRFf1bMSZCCdHh7h%2FheQ2HBrmOeaWfpiQ5B6Y97igR4npA2xE3XMaQsu6FfN52ORDzBGtHINTYmFf6uKdYAu10ZXj08%2BOTFwf%2FGvdD8MigCnkR5wg5bsR7MuZ%2BQi9r5dwbtDrUNPwKZA%2FC9TkEuotfE2gX0PKN69v0xXXWFjoawwjt%2F%2FvwY6pgEY0K0Q4qskBc%2FpV1BffZPXMj5tumiUx%2B9OVxz31%2BOS48cxKRmB6VirlLYI2j59vnt3QjIAE7J3EtcZt2hONCITschlLTmORnMZLwBLHX9TQGm2i8%2Br1hXy1%2F88sCioJn%2FKNsyYO24MMyAuUbvd4V8zi7bHxsmCh%2FvGnhbTB%2B%2Fdw%2BhOpZHzb7zBgjvMVscumNx8z2xszlUMAnV%2Fl2%2BEsuQybEtVwga5&X-Amz-Signature=5079a6413ade579f341ad2eb753c6dcbeacaaeff41344cd29ccd879f2aa85beb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
