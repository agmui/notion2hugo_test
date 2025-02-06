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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7AQSPO5%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGy1ksS17a%2FunG1jblPOUQvYX9GhMcl62P4WwR%2FrAp1wAiAbsIO2P35Ds5C3iC7U6OGn2wnpi3sj1dwoVfImfeGVXyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMVLLV9PzV6rLeodLYKtwDfFiEw5I4Ub85v8DFrCmAGTyMYoWgqggE1l580E50OEl5YRzCjdtijWNoA%2FdvMEvMhczv7NlEPiHw8TD4TmEjCtzhwa2t4rfYSL5hFQtejNQ0CFHhhD8%2FBmrNKzEK6BVc1Neg3ZlWb4I54QJU7aGe6iqa2UUYGzKWLw2ytPAq2GY9rLld55kApB2PM%2BVdo15w%2F%2Be945TResXfe2eOv4IryfOnOIc1Ig2p5rB2sjWZwZR8uhkQ4WaSss34SA%2BahQ%2FRmrCQe3VM5Zzwafqdi379X6oum4fD%2Fn7e3%2Bd4LUlMNgvX33dl2Vo2R9I2Z3fHFWJ6AHfA5%2FWjbH5%2FflOfSKNf7F3fgv79lS%2FiZ6HLN1v%2FuP4jhMILkUOLifXSUezETpopmEkROkvpNxWHwC5uH1pmNWOp6FJJ4M4dzOo47WCixjN3AK8zprWb8Y62azOFdT6G60nnMXyg2OELXMIKKtgMHY0uHOsMpCQbigbawUx6oyJtOTGy%2Fc0ysYSsDb%2BR6PDfxthIu7KnK7zP3ZOO6r2uKCXh0NVsopvnYbLwJtzoqaWm7NUyPQMbHeztZj22LrHICMALuqb3xWZ9tT5MRDRNy3W%2F6tcVMDRzs29sLRiMyG9aXPv%2BSZ%2FzEtZ%2Bt6Qwt7aRvQY6pgFe3cyVyoXbObtHBDKXs6Fjg0WQmsnJS1Oj6AmCG41q4CBRQapd%2FJYDMAMbAayTFErXV6RqKzjv9xs5i38wX%2FC9FfmxMBfxufIGDITCs6cQlogBUPlx1NKgZypdsNPuaQQDlZGDYp3yWmHBCZwz4XiohFF5%2BmjgYpEC8xEWOI5PyUTLliKji6Eg2kyvmc9iEg7g32GFnHnjix1ftINFVrP5zqKlprw4&X-Amz-Signature=f46c6f369bb752b7f832f4714b97f1bcd5dbed5533da7a81efb25d0b6dde1107&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
