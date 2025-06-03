---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K2KZZPA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAM2%2Bt90Bj5tzfTV0QwmZymxLHlhh4udYwOP5cf1cOJzAiA2JWJt4qJRgVXcDFpnSaCy9AIoX%2BB%2BK3Osfl9Ll8GINir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMm7ReR4V94vQP0iGAKtwDS2%2BIwlhUiIzu4O7dGFyePDuYiYql5u0hBWb8r8ZFQi7kJwC4Q4EvRXXLlW2pCVwi54ob2oU0Apkjk7rBWUfXpAP5HFyTih949JtEPEPYLZNSHxVLwWi2iB50%2B5ywufhPcPi0Xk5JaQcLsuEzhTxZwxAPmCsFmrHmAgwEJTCzUgtLyeAaoup6ioIbVk%2FzTnfShttwc86TIka9ChqyoijwzO7bkL9i%2BiA2t%2FbXZCpcgCZP3sXhOuTWjliu2O9NN8D6d%2FUZhlGx7P8yqSKP8G3AlhYuz6jLcPUQxVxNHfB9ZgBPFuoQPjkPrmJtmValKjm7NGHRF72TbrAFRnMJv1aU2V3nfIeOE1zD%2FaZRw%2BSzTTBtlTbtA0QLEzar4vrHjpkQp33zWY6K9Q9H7MrnQZTMZNga7f9d9nQi67SqvV5bz9Cb75P2PcJzQsNKSHkdSfm2aK6XXSTaEb6IAbH9PUPpPmjWmt7nThh3IPDTf1EcrYZvaltG9Wntv%2Bl9Ro77Sb90rLBQFF3MCiPE4xbV0GvXBhOjCRncCAQ7Pd4LY57L8M%2BAkOcEvR0VJbA%2BjGgqcsr75eZBHY7TGDJCEwXs9aiU8Io4%2BW%2BVlO%2B6oJa0Kvdhw5Lp5SKQREBeYNC6V2IwoqD8wQY6pgGV7GOrnlwDM6DEMgjvR1MsBxSn9BQhNTPxYNoH7tzbGKV4D9iVkpVuUaH2ncbl2pCYZNJwEG3wHCsGZt4L3az65qL8i%2BM7739s0tV%2BvTYKHsprLJlcmHNDBHEdVuBSZj%2FjYq0DiemQp4JvRgB9ll%2B4Z8UtIDj3pf1hUzd1Z8eGJ8rY%2F7I5XRKA%2F0YsgZXwN8GtU9gitJ73XoDn%2FsWkMs6ra%2FGUoaP2&X-Amz-Signature=aecf6d6dc66f2d422387c5b40801d2252ee2d9fe9e5c804da0605f0d382e6f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
