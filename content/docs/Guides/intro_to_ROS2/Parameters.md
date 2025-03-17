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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBGYTTG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKkmtSps6YyHVaArgTC1UvQaneCnG3zSJ6ubFyDh5IgIhAJi5a8fK5rCl14gZ75EErX2vmSvPXrGzRqTtaEEK9GFXKv8DCD4QABoMNjM3NDIzMTgzODA1Igyr%2FQaZejuDJnzhFeoq3AObw7SxaVQxOU2vlPIyugncqXgXMjqIFhNGue76CQA%2FOdBi4Icb2yhnEXc5%2FKAKyde2eL7vxtXvIF3VRuY7DGyQN9o7%2B%2FRqM9DQQmYs5ELMSpcLfJSAEbZqIC44sgAm8Qqv3hns%2F10SwdE8LpW%2B%2FwzRf4hTwCHN2CMTMnpUReYFLCfl%2F295XLk7yUAX7HftuMI%2FpbYLpms109xCed7G4O1ReJQt5DP9%2FocZYk75DFL7O3pLQDEQE43ASk7UoecxvKotHclHfuDzYIb5ekzuE1UydglNtbfveVV8lpFXcMjPZPhxqSvYz7F07sD9GTevSp2Bk2E8dWFhpFWyMKQ%2BjsImYZHtN%2FWhv5j%2BcJfRPwAOc5IDrJsCsHW1tizQpmF5VJ%2BEQxr1VatC5dUdDBjSCh%2BRxZucm2ow9V5V2oYdDdgWn21%2Br1vlaq%2FbZnlEnqtqkVIvlf554EUCmDvt6V45udwUcVpM8stiVmHj8gkPYhVRpx5uPxibOnHZP9e2GwvyNYDxRh02c2xhtGZFv3ENerX5t7FgCJQ3hOXV5tV0e2Wn4aU6ano%2Bpj4Di4FG4xRQQiFAb21dQMiXGkpc2WtPNhIw3M177QQkJfCcsuZzGYzo2jjBJmpJQR%2FFy0NQQzDN296%2BBjqkAbwKT9D%2FwIgLRzTrlAAOXpheShsxSLmAwDE5roeq9KKUOZ9mtW1OsDhr89wqnbRi2hVORCgifWB5IDzGggk4UJrTB3Rj3YRCyLgkrNc2%2Fa9WsPU0jT83f2WJu81TTW0ZEwiIpASubiccnUxpI%2B3tgxwdcIlQfN%2Bc2Cm2w0N0bKZLY%2FvqeLFf3dXdsOoJPW6FG3XpVJXK2VrCZL44Or3n3ZfF9mdH&X-Amz-Signature=4fd12e810681c13ac9cc510d3c5dc8300997cf06cf7c097d3af082b85df7ded4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
