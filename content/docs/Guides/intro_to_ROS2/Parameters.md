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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PEJWT37%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICLO9HXn5boqPTKGttujnH2Vmz3cHXOrTHOai1ZuM3R6AiB7fkjPm2xsLeUnGzjRlLb0nxU0hS3pi58kw5InjuNqGSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMHRrinJm2zshD8RipKtwD3LBO0jU29b1WFOx3kWNBgKSk1hyC8XrLGI7wHsiPjQ8IAgXaLK%2FueV27NALyTM86OLVn0lXZT1ipT3MOzSWhVNXzzqwkD2rtTBEeHEvN0VmyVD%2F7aJm3YY%2FWcDuJ1I9Zmr1xYpGttq9eSQVjcxiChe5eVK2KKIqK9nm%2BCoDEU9HWPfbqKXtCf8cEt2muLdQn7sc4J5g2oFR1dnv4N%2BLHywm3%2BNYBOrhqfNlxe4Othc7pxFc7%2FRSgnY58AVIvOUkZfHlNpqpTy%2FSn7nTT8TFWPbqkqtF%2FFH7CoIc7kr06mak6Lmgl2%2FFv7g4bvXAWGu3yYs21vxGG543IGHq20Ed3PdPHS0Kp64FCjEm6L89w81906vxgTI2nsov1Sotp4rSJDrpuLEMyuPg4AADAX%2BTf2zi%2BoNn3xXajq1plbI0s0re9F4dCHij8sxb2hFZmiaFu10nBKqa%2FolpINOrUpER%2BXja6%2FPezv1JD%2BMLaQjFC0rKlIdQvyjesGAQdr6%2F2aMEUepgYYKgMN9pIK%2BnxaLI9jOsbnEXvGJ6t8KFzwkaPVOtIJsb3fKdblil2YpiAt2okU0xx0JRbKdAjoTDXcQGp%2BNiSaRdl9MNH3PZHmbD17JLwsvbRE65iNgJK%2FnswyLnxwgY6pgGd4Q3GehVqhkk9IiI34o37v%2BlIfwGkRjfxd%2FQfs5EmmUfq%2FJtqDVRSX5S8eAsJ9aNEKAeCb7PhkN115eqgw%2Bbvk4MGI96Ld4wF8wHQgWaEVghyDiw7NmgHC3JfWVq6rSX3ypZ8eC7e1D6wh%2BNpspLIPD4u349p5WAkRilRZwGod8bU0LVJDPUEWChic1EK8%2FxNoDxxrkI6XcVAHCrfS4JLvGo6r7xV&X-Amz-Signature=310ca5aca50280bbf25b9c88941761457c23c00661784394eabf717e4a9d2b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
