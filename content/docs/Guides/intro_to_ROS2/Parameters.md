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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMX2APWV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDnKIPZYCvNRIIqMKsDsjHRnoza2pbRJ2Or%2F2BZeW7FwwIgFpTG5KjvmU5R3pW4ymnGBsyxAASTSRzqbO%2F1n437POYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMTzNGtfnN5YQ1Y28SrcA0EhwRDwOzYBMgKIxKOZbGkXv%2B8nJvwdcBuhmi%2FpYJwvG13dGmvbWbaJlnYAQIF7f3XS3Qt49kTbI6K7a2npV7k31ISiR80pajoV7swq2lazV9hjmo%2B4fhwYupdP0C4hwOH2cAyHltKJMuFqKI0eH5hlVnL7LStAXrF6GWzU6oHOFihnhrYaUJrF9bOiqZsA%2BkHKt4PfmN7J96PUviC1UHwvi3SNxtObGQn41jbC%2FUC7LohscnI6MQeqHzPynX%2FaGqyCCWOiPywUSpkmEO93FWRaAR9eRvRkTfzCE1ji%2Fi%2B0Gj%2BS4Y%2FelcH82Gb6tMaBlJOfcppqMYwhYLcSywNJt9%2B5HM%2BxkXf6QdxtUeBWZhN29iNYla1ChEiOFIkNszBaZMmLbGx0JSjoYAMEjt%2BwrTqkquhN3OLimslB10glUTeFp98RXY02wso9MSN6392isMi9onFQSUqGxJeCXyczawLQs5NZ%2FvbVwfWOhp8Itx4s7bTerjkgcrP3kIPI6NVRe2BP5cZ8YXpnkQVFiA9krIytE9B%2F6bvxmZJKPHU1bTXcshe9Q63cy4GYtj36RIua0Uks0y2msOAM7XBd%2FkQf%2Fsv87cXrWTqGBeimXsfwnK%2FChBTnD8FugoKXn3XiMPi86L4GOqUBbiAshE%2FkyNfKmw4H6p6Wah0BPqlluEexAahfwSE6Wxfspz1%2BpRkuQ%2FT%2FcduvnH0PtT5bTCJEB%2BOFsCGX%2BWhfbGQFMPDziMypzJDkDIPcOQYBqzwjYCsZaD%2FPHQgX0%2FnXssh%2BXcPbb8Kn7trz3nWnXS7DFrscgLYWZync5dpFaLlE5lbEWru0zBmqg0Hw6PBTSUB1pG1%2FHuVqFVHLuAiQ8%2BthzawM&X-Amz-Signature=638a301b78aa9016f74076251d8aba977bfdfc4b811f59d30123b789587ae39c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
