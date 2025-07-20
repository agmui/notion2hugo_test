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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRA5UMU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FKjqrZV4NOkH3XTAgC%2BTUte5hlGR1f6QlBHEWqHYSnwIhAO9j1YtfNr6ofVQjhpgbt%2B9J%2BFtv6vxGOOLdSj47RJlxKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzl4wFJ5kStAGuwSIq3ANTAPUge%2FsWePTtc8WsFoi0obqQcC6j8f8fSHes5DycInrDHRNiAdbggR30bLqtrhjIwIGX11%2FO5xOUqUL8eJj1okvYIwo1ghyj09SDyz4FMePMEJLsA9yEa1nxvPX7PaKyh4A8EN7im7oT7WhL6mwCEaXFzGdtk%2B1Fw0aRMpW39xSCFGJOZMgu2s%2BMbSr12QCvnPPDHPRjyyREpQVzgecgtVnQVvUTjt5vvFBL9yHJF0XF4NWn8qaVY%2FCl4bKE6AFfU1Qdm6G8NxNUZWXIGzBIhQnQOfXH1urEUezOyn7Yl7C4b7BRuiGb5cQs%2ForH8jxy2T7c8vgadBuel%2F06hvoHG1Yd3wJzFEeIT%2F%2B2G6eG9V7VUGrx5sKbMydFpa44EfmXaovwU5r8zXzSeE6nCv%2F3mIFH%2FeqzDGuF%2FHf4UmXtUp5JV28TrJ5qolWWm4vf6xKRZ%2BskHsabz2O7p1g50ghHYeK%2F5KrFpZe2dNhY2njqhYbOitatlDpkV7j1BRIFyiqpPcOW1oOdGDUn3WYI5OSYO1LLcK7mdTa4GQkLe2H%2Be2ylYxL1aKZf09%2B9vR7RtlC%2FA%2F5M9uV5g3%2B0XQCy7nmS8GoND35MwSImqinh3%2F13%2FaO3LI2gx097qS21hzDRt%2FLDBjqkARM795X84I07s3B8EKKh6SMl%2Bs%2FauJwuR%2BJctk5EcDqvRD3cRUqIUi15DyFhUOfWfzOtP0hBtRec%2Bdo30FX9GpjBBbLTztkmgCK0MqcxygOS4%2FGXaWeIkI%2BQgqL7ZtqMNzig8v7vovs%2BC%2BV9deTcVO9BpfIuOEtZOit0BBDReDPbzmIYXUSyrdXk3hCfqrfSP%2B%2FGNEk8W6aIKkNfy5qL6BaLQAy%2F&X-Amz-Signature=e82574b869f311a5a129eb578f4c762dc59e4c57a4bb1be2c3451ada9867dd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
