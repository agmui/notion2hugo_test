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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TEWBS76%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1f1yoAZxjvBwOxuuV%2BknpNjbZ%2Blh%2FXf37wmURK0J8TwIhAPswQJyrYgRozT1VgVFLJ5G49V%2FH2d4DOfYlNc69KOryKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeoM4HLpplUlleO2Yq3APgSj9C3k1O%2BFg4PO7AiLvQedoc4TJmglWVv7Z3TW4aRZP%2F8BMlBr7QlGOi2uTIYf1caWl%2FeOoX350fP5f6pPLPggNPX2AvgjuIli9wb0fmRsmeBivk94ACJIgIoe5NMGmLgocHiwleCYXeDGDixHdhAtP%2BUy127QN1BkA1%2FBUpCSa6Irl3kfJ0n87k4g3tIFKZSpHzkRl5%2FRnC%2FVnDcMZApCCZmnSxFBydoyb3U1KiWlVZEwLpH6aBJSwbSy1mWhWv5jGOhNj%2BNsWtzQyfVlaGMgAz5%2FGNQWJ0FY1HGCb%2BXGwBnJZGZQdzZE8E%2B1SiWxUAirNXuTSh1Uiou7CqZ2UmAJyvrst%2BsVvp9agvP%2BywcYRNzB%2B53lp1Xcjx8um9pX3EXb7pOOiw0XZCCy491iyX%2Bao5hb8qLxl5GTdkbObeAZ5%2BWFNO3UhNck%2F%2Fnh0yY5dLJ6fBIkzFdb%2FfmhBkjqfj034IdBEuM9%2Ff08PGyzzl8qfNAWJN7E0%2B7GmQgKNx0wlFPVBQ4mdLGcQduDnMSPsEFV2n%2B4EcWpESDLa0zC4Ftj5fkusxp2qbPKqqfIqQ2uP4NiEc4LyhPWz0Ypa9tPevUTrQnxqGvN2PeK4lHq5zZ%2FQ%2FEvgee%2FeqLoF4eDD5%2Bva8BjqkAZyQLHXZR4wu3zkfOgiGj5wDScE1s8p9MdMohwygY%2FtPDiyed1KN25kA1YtGP%2BHik5c7KB8%2B6LLIVEkKA3tPkvy3p9kimVhTUMA7xaobE1rDui4%2BLjbuMZHvxmgV3oqk3xp78xwmzcFerfetsC6ZU%2FxZa%2FM0y%2F19Z%2Fqn0TaYnwTIu6iYE64w%2B2HGIUfreY%2BlHEozMC%2FeZQA9IWgMeC%2B0jlIKd33o&X-Amz-Signature=4ec3aea8d41b6a8bd799dc6ff5fd24c9c610d1a89466d844382aa64d3f32d239&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
