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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JGWBNF2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGi2xPgIKrxh%2FcydAJAjlgQUMX9cu0WnC94Z%2FVcBXe3AiByp3XrEoyCTsAa6iGPpJ91mi8DRYI9TAvpfs4PW78FgCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMULx74ar%2FoNO2L8enKtwDOIF6SNegrnz%2FevPJjZWl7Z2b6crLA0CGIsRvcPQRo%2F9tUrpJj8IS7NfcLo02tgm5Ik9mlqH%2BSWncRHhM26UuJY9PY0Re%2BJoY6FnVvygM45kMbnc75hPK6KN9WjB0GjiMnzaIrzeyXfzFwHOkHRTLNUUXGbPI9YOGlTx8M4XTeJWXqctwmuNHqWjHicUSybJ8PwjTDRaMMB9dBwfUFKyyfUosw9dfRNzuJKuiNl8zoWJ6qEHu3WXjBuzAGfx0ZyZhMyzEQgiO7YkfPewFL%2B9gHy%2B1R1kGiXjAn0Gpbt1Szo5olu%2FgcRzjPQVuxXoJ48fBs55cED39hzNwsePhKGAChNj57aodp4sTPqQUA0rhnJkOLkB68UMpTbuAjq1bAyKTj%2FoD%2BJMGf%2BR3WvlM5QhCL3qr9rxljLqKeP2rBg4TkXQDZ3OC7slAwuZGzkOiELFjOoAPqLP9Wg4ai6WzNKujVyqA1YqtBZIxPtVPNw9CBIVIM1uKeZo30Om9sVlBbCLm47oabzToYFjN4OQOHiJdvYRjX0elz81SDAb4sYjhUSWkQXidHoJEksVWnDgj%2Bh6avfT6V7GCJeAQplbM28qlkvB78%2BVF4YGY2UozDyDrpT6%2BETaEQtSkHX2HfV8wtq6nvQY6pgHLHPQNVR0XgnzpjU%2BD1pB%2FaD2%2B36rVo4kL7zWOyI5gU4t2EzCmSUIn58Sc4ZNPLgqvipepTsLfexUxqtHaB1ssTuksz6sQxD1DAF5FmzNt71nwI2GNZ1oiny%2BnLEa0Pu0Ie45i5T82XjEanY%2BWCuFCkg%2FoIdBsZCJLnOGkq2fVp%2BPwn%2BvFMWqp3dAdwWzcJoNVPqoSVHpnLjxaE%2FNArvPNhAN9tK5G&X-Amz-Signature=330a48796437ab37836a70f40ed5df5eed93a5f9a02cfd74a0338bedaf771332&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
