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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUXCNHU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXEfdcnFckjZVbUV1b1K6TkBx7CWrSjcuCZaHbCYLrVAiEArkwo3HZJY%2B%2Ba4KD%2FWO4aXTcu%2BpFAJoV0ZMLN3smnWvYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtwdza2d1kPOhPLpyrcA3Slor%2FhLwQSoSva7qQLkVYYO%2FppjWOSeJkcu8pFzL%2BqXVBdO06B8CAi4uQFjq%2F5VIG8Sn0MP%2BJ4J%2FSp9eP1C2fAe6ULFjITUeDBgt4YfH1a%2Fj40WKzZeZUTFbT42BVx4%2BwqjzTUu7LjC8sYzWGXq9CT4VEA7qPc6fTp4MORGKVH%2BpdOOikNa%2BUtj%2BXR4xvjsJ6VFjLQWobtmdg8Ofhu3Jsvb4DAJ3AqTF%2F%2FuT1YwfRGkzoQSiwffBuoymBD1u6YaRp%2Bk7S3T8BUAU%2BRu3Bqdy5cJnSErLRXoM9eymBswNa7Z9odIjwCKN%2F1ax4yRnU4OyR2B%2F85lFnbktiECn3ivWZj4BHLy2dvOwmxTizmW9L94WdTU%2F6FJK4yiGKEgjxE8xkProbZ%2FKX5IRbXizQuTnFOdsuZ6cytYm0kjwbkMtaTAgqIE%2F9QUZs4ROVUI89SjjMnf7bzyLY2K2ueRpyynMNbJjFemxbf2dr320Zq2datspvt1jitDDaoH986Ab0p5gLjr5FbisEatGXdafbwhl9qoGR%2FccAdsu1LOYgQqNPyO1i0wveq9WfGeluIdNMiNxEFOOlaDu6taBfoMnnPqx2d8sxG4Rlkht%2FuXm0kZCHiVBeK7qtf8IFL%2FyCkMOelk74GOqUBsBoseeZA6rmSfeHbT6z0rxiX9IXoxPug8AfFXLDpmfmfo5%2BqgmtzIoL0WPRLTsTS%2B7axo%2BRXXXZ%2FflUFnwPARI88vJ%2FjMokqDetkzqPC8jGj9CC9Mnlrmo%2BzwVHtVzSaFkZeFcnwYTGQ%2B5DI3R%2B1lTlIOaKfQ13z%2FREvFsY9UXUiBf2AQQil7661%2B6cK0derdChlpalCQqKIm92qC0FoO5rHvrzk&X-Amz-Signature=ebfae9fd1fe8180145975ce4e87ed7869c6b470ae9956b33c3f7facaf505f28d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
