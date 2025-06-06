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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S776BMQ6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZv7UNEklSOo1DstJKcImukxZ5TkPc4F1iroyQdtFj%2BAIgG3JX5zO12dXOEel1%2BJ403gub1iJ%2FsDLowinEyECciUUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOAkGwq2Ijz5c5QkACrcA%2B5qwJ4d4a4SS9uymwGR7Tyzpk0EESIlMgFROlvdvIiFwk8v9sy7F0ScpEKB4c6SRgCfWlik1hPdeCGOoslq%2F4EeK4yFY7loUa8wr4q0eGy0oh0%2B9Ew5ALhXj0QVPaOZpqR8qV7URndtyRi6FOxKZ9YncKFj0twmL%2F2Pl7T9InmUNX2oS63l67THq99CQx8X92xGY80tLDAaNb%2BbVcaW0QbpbcPNt1vJgKHYIsP20jFa22i1zYHqaJe0HBlqscm8wqdm3vUC88EzqhCmr3q4jnA%2Ft4T7R9PizRAsIzVeJCdNP8ng50IJzb9RmVvHqo5CA9duAiaLFCaGinc34IBWds7pWDY2u7eJ4ahvJdtFkMBdaFe9BSDQIdIB5I%2Bziq3ttLQS6ERO2pIFW2cqpELk3WXKIkEw3zs5L3e9pIltwRHpZgrr5xaJas0t%2FVfDQHWrEIj9FsGQunevYAQd2an%2FonJtWdEN3Q%2Fw0pSoXOt9ITBYHJfRWFXiVE2%2BOs9LRtxMqUNqQy6uN%2BZuVJZ0%2BzExeE%2BhCwatQwwIdkez8u1lOenTLMXZJ2%2FU0NYkZtI8d%2FGLBSzCL6lslOYvnDNHfO0s2kO6RS73Doef5AfVMeLHyZKAkKWOFp05nF7z77JeMICijMIGOqUBihmNbn3WrX82gbFbj5Ocr1uG6orUFYL67LJr%2FRYH6lqUHUCA6cCxEQ5ibgFrcbwcoveQEX3xExixgGmFjKCspZ9guUJ%2Fk95kAOLWwkUqI4MqWZ%2FaQbXZZMvOgI%2BIjNN37eoOFyZJtgN8rFygXzwVII6WNpaO5c%2B2gxht6fmCj%2F5eK1pvwT9EsZNw%2Fygat%2F8iHkS4qf0838bg8HYG3yBzv3AsMpuQ&X-Amz-Signature=14be2d0934825ec8114959f893a4fad6a47f68a4fccd684192472f2831744948&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
