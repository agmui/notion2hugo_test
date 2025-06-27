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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSF5SSOV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx20XJUmR6OD2g3%2F1yvx1WxBhWxSA2cGXFFuYdFELErAiAnfefrsJUdnd9GQ1uPcPJdx9d4PfsQBh%2FKjqL%2Br054wir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMg%2BGuyZVxySZUNCNoKtwD3Ck%2FEo9VHBGXTMW0TR5EdGcoRmGZD%2FLqqxzzwPzBaquIwi%2F8Ibn1kj654hfmOBTPxxegtCCkOn%2F7HApIZDviidFc8XkPQ19lBovm%2FKKsvMWjAzlaPAqhgbH%2BlHybqCg%2BenLQL7mTRZVfGgAy%2F91VhoKzrDcFlSXAD1%2FMIpdJSgzSerACsLzv0WLAS5PFp2ph5i4EZ8WBV6Y4PNvy15KP%2Fa%2F8UclM9cyXsKhSrduhVzT8y96yP%2FeEXh6UII%2BxtsetTRGLSD%2FXMPD%2BT0xPLheXMYSqqIEIFDRrmRUsDs%2BY0utJW52zNPVbjdxSAThZ5PHDHx2aCDlGL9nOGIych4EdWne6PFXpZz8SsN0qpy8ypgt9knOo9OkGOLtS24%2BE69rXFV9yJk3XYKUPcDAPMHo1zTTU%2BpySvC2O3lFjGrxNEDpSNngyUxebO0k82FwD%2FYNytsRc1WVDkGY5wwOhfpqR78Wd5Q1cYc2OtDXSizSHufuRHM1EKxLOBQEPsaqcghwrAijQAeuOO2fZLWUFefflp2butWmTX0%2BjdZx9aJKHVVm9llTNGonc01WFKY8rJOlZMnQlycD2AykDB6Iu0ZMwXNL9LE8x6hnkZLx1NeEGJyNkr%2B0Wa%2BFb4Z0uAqAw9ff6wgY6pgE2nZ%2Fl7VZzUHXdYwLdMn43YJWCPtCCGaw0IGNBw1ewp3Vqa4XJRF%2BBfV%2FSKDbTX%2BBjhZuHWXxEjSfxCtAZkenPMDUrCFSmU3Xeng5qsgXEqeUtMw7PdDsluT%2FNQZNej%2BLpwJOQn%2F6jfP1nvhBIFwnt%2F%2Femm1uuYYIMZYV0uzQNg3knFa3If6XUGrTnh%2BEXheZRD68OZiJFt4mIsunf86%2BuYRnZuxB1&X-Amz-Signature=64854cfe2600a94e1085bd726e9e88d84956dc556754c43aabc642473e2640a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
