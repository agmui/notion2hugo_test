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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WPUT2L2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0mh9wz4644%2BNBjfxqo9L87NAQh%2Bq1Z%2BvuL0X5Qrl5qAiAimLo2psThyVPL82HsdgBtbYr7aomfjI2l1L3dZqeFkiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FG2Ure8AhY82kXmRKtwDTcXBxNnxX9NXrfSi5Vxj6Fs6Q%2BE4HEXKCLt5pyEkWM0XIBPNCSbf8HwiL%2BrOGfQo7Me0GFCLsqhhFR%2Fz%2BGFwAQWDN%2F50UE4IuJqRuzzFepOxGamrGHnWZfgjJlu3atRhsi9MZksIWhomntLR20LDt2YhB%2Bpq43iW8szC%2BUnwD5nbqCB%2BZiE23zs63xHkRx%2Bo5H7qScc5Fl0Adkr3YpL1VsOv8bTyYP3R9PDASmbXyjEalBgauch4kQVRe0rYjmNLvRxM69XPCr4AwTmTdQHkJwcq38nuDP7eGi8zpBDCED0gm9y1fS91pyfic33xeZ%2FZqB%2BlWku5XHpMpTM%2FXkVkGA1pkPhXXT3gxO4dhPxN%2Bj9P1r6R8O4AGijaye65MblRScHc2pswl4kwrGz03noCQkAiH8pD6mqQdmw0jPjGwOiAbgcaLKvi2O7kvybNlprZOdEYmfrh%2F6YQQfrxEm9g%2F1gdOLeQhHNeuWP%2F%2BisSv2RvGRVhSVCwM%2FbhwOfj88%2BbBIIHcdkhL1N6Ppq29q1Y2qG3ZdpRMCAtSmXC7MDwyFwNWawOzMn22p3AzrLWFLW6LcQKgQnzRhJb2zwVuaEk%2BjL8DIBWwpLRR5cFK194K5vLbgpn4ws3dKPfqxowgt2uxAY6pgFpzsq3iFp%2BSFeMjGha903r0H9b1ytxXmgzzgDfqbX1yEyWlfafQ317mbtTpIkcBq0jXhB3TJyT3rNMa%2BUeGUo%2B0ociD0UxdrSyDZzZ6eY%2BwbtcYARBQR93TcT0Dg%2FH9BOHcjMd2BSaW51iU8TjWrBaaKW0z5FmwLBTUrkUaUZXWiL2I3XSueuA9SAnZScUFEjBNBjyw0HIPrk2aVO1uYuN5FBFcxB%2F&X-Amz-Signature=d95ef7c4f9343a6370823d1b60d4368e6f31a1c7313d5176942cd1bb34488684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
