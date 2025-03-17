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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BXX6DD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAbZFEDR7LOGZ4oirhlHCZ9Q%2FofBZV7RmQoW7Cvo9qEQIgciExSq%2FehmTnMXK50gslrGGl88Fp10eBRfbtxbK61Q8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMIxIMDuB2JuL5qXlyrcA%2FUa0IOjn7QNaOcoMc%2FUhMpXBuogX8wT65OsDk2MlF8FjyQM2%2FHGVQ6Rk3zafTIeIaVO6FqwJqaVOsTy7hR1KBV%2BTdxb5ZZFZ%2FMnbqbwNDOYMxMkQ4NT7bNFPDL0s4rUig%2FSbLwbTa0fUz%2F7rObyI0ZJVwkUV0qtl%2BySZ92S6KRLpwR5Z1RoBlqz2L%2FtGOwm2Ldk4EM5AjE6Xn33RiO7MGRAOk765m2tsqOtScxJiJ2tRNtqQ7oe%2FFIY40L00u7Kl1xr1K2IrJanC0jgUCOjSRMaAxDyB5jmyaJMpi1UH68EJVuJLytO4Ofu7ZjyY7Nyjm1SxPkSgkJLRDREAEGPycCxUJCVussx%2Fe0x8%2BESGUM9m5q0juyl9bQxtaxdovzryz25LEd8a8azNV%2B524H4Nj3SIwKdved5HNiiYDo3WXac3D83eOUreh4MhRLUr0dEzSHqVBer6Qv8v0HeMC2UNHcRU6ZBl9DJAJHfISsHLESjSTu0%2FnStynzmyOZWWcmw8n0%2F1VPRl%2FmHlBKGDB4EJg%2F8COOriYWjARdyMc2o4aLuGua4q%2BWwKPrwjuH1lTbVNJN%2FPHDWCZ%2BxcniZSeZ9cx4Xh%2BRBRqszjC%2BOsumeji2JfoqthSG5DLwLbGtoMJ%2Bd3b4GOqUBKfV95I6QdOLUmJIjquUuoSEBWvGQ%2B12wFpMqKOBBXzsfIl%2BUp%2Fn0%2FlBCotoEIuLvi5VOceQsTB2%2BG4rbpejAGQAEeBS2Ul1BazJzjUF6PzC60vC6tgSJ8v0yFX5P186H1mGk3nypVXMXUdrQNEyY1Nw9SfXOveeFQdAFOMcldN3BzSExlima9kaFTuxOHBAn3pW59M2U%2Fk%2FSZIpbSi0cde6iJbvv&X-Amz-Signature=25c4986e94960363f95f689e4bf22c1d0ddb118f46683400610a83e3da61e080&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
