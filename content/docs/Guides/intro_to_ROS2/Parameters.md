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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ULMX6YC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHVfFNUM1i9JXlv90tOUquLm2VkS5PZZA3NiK4%2BVLMgSAiA0NqB%2FCtknSkD2%2BJZJeOFnzhFGzDmnyWeEB4I5Z31E%2FCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGg%2FpUiTl9k9C2QJEKtwD8nWlnJOYk93Xui43xEvaPCVySp6DvLBN%2F7faRw4kgNXXkYk6hPfZo4Smp0kBxcFyBGkPKT%2FLL%2FZf7SGZeNmhTwVSygYb1zGPyqTgBVik%2FYATTFLec6HL7UN3tur6gEub6PawQKQVMH1OEQjw0XR2Et%2F%2Bxrwnaa0v37bHmjlm6XnVAjOICOQ9xDAmYxtQ82sS7nRABqSnF8JqMUcuYPNfD1N%2FCQvKiOfB0ZIMgNsOObqMWDQVsQTJzByfGLGwLzHqP0lGFCTmldqJ2ISMsis7FCZl6y4Xohj1Vq9QCFNKl%2FCV1ekEr3rNvzpLigycBDCJAow8NuT2Elg5rIVGqFML80K9P5NbBDeVEsGLYBQtad1W0eo%2BSieuJLpb51LsF2zfdeLnGS9TVwPfVvmBIe1WGKOZ%2Bf%2FJO1SdhVbbhraXuDEE9jsFMhpzTGIP3BP4IxYqiqC4HsyxxhiCke5rCApAe9zslfRy0OE4llc%2FOKoxPTUd1MmNcfJ8PjEPgJ%2FAr9AJSTm2Dc1g39cJsZ8kN2QuZ6xjPbBR803o4S%2BNJdeHdLB2Scddb%2FwBF0G%2FgJMk%2FM%2FqiVkjwXf4aKdAlD67mZJs913c3EhPaHRbKqj%2FZJ8LWtEec28sJoye241IFDEw0YzevwY6pgHWwlqxBVNdqQfVZDMtKep03TQpzcPtFonaJBOB8tgXJ4OaEtT6rgSyn3jaIHtKljYBhEhdf9AyIEhuIJXJtSxVDbpSMolCCgUInb2wgLSV6z5KTXwCfp%2BoHp6hGHrzXtjw%2FJCznQPGrFaDdTzs%2FcRH%2FZHcqIgpcZhtLG3yrZtLhWOtUP0zd60UEJTeKFgmCbv2YmDtnoiVUcDu0CS6lHj66kci1Swr&X-Amz-Signature=f344beceb9fd2bcd2bef30cfea788c9e840aefbf616bb167b6e1eaeddf129d89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
