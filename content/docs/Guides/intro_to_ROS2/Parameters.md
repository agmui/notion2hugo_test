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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y6K7USV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFJ%2B8oPGR72ibF72P8OeRYQCIsrybGxq2lSa3oa%2BiTa3AiAOrW7cspsZ9on5wE2jWaQvnGfXt%2BpKlnqIImFQLQRPwSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMq%2FN77U6cSdFXLc%2B4KtwDU35xbg1sZ59m%2Fd8wfxNvCeMT8re48UPh0yTS2%2BVZgvPM0h1bb5hJTOFTvAbMSx3vOPRu2zyDOS4%2BFAAxu7PLrj6x5dCENDwam6J%2FUma%2BR2XzCmz935ui8sEtZ0OWCvBRidGSmm5V7mkdX%2FwOierYW%2FnYp4UxepTTkxI0WqD%2BdXLN%2BsUUb4DvvEhfIDXLxzd3fsHTGSUHemV7R2nCXYgiArJfWYYgcS%2F6BDePTIG5N7F286IwPGo7oGD0FZ%2BqnhsiLot7sq%2FL5YaMFujn2QlrBQt%2B%2FMXob9%2F2H59UlMC%2BwAEg7DGhHp2n6cmyxFRV6C5%2FSJKRLw8ftFpKlV730vlGgQ4Rgd%2BkTfMgXSC%2BkEgVukdQZj1KzkfYi4Q2XzM6MOn%2BsZq3FROaFj%2FZc%2BBpN3jwO10myFkbyzEKOme5cjHMc4wKlV9c6FOXDAJkNVOpbSVYfY2phVL0nMnbzk3dBPvzZiEUeXy2NOspvqTXoQHwh5vcBnrcR4%2FAHz42y9s6IjmayvKj8C9ze1nVJgw1uGoh%2BAPvHeajL9c%2BFKSGTHyrs6cSLDzEVb%2F6p1C7CpMsnyzvLlljUt8FjGMmiNxPEbpkjrxL0B4NNXNgBN96cEPbb54mnWg7uniALUcqGaww7uaHvQY6pgHasRkZWkEd8Mk0AJPG%2FnOZAmiJpV3EIwn4HJ8bTeSCOi5Cfh57WGDM1W72OBTqsprFUT9Vk8lRhyi62QE5KyI9CzFZrPdLYH82yRIX0G09WKt97Y%2F1nN3qfNAptjY%2F84xKS3T9L3IJaA8e9MRx0LcMZDbJ%2Bugh4nwyQ2isM0gAa6TJT7gabmj%2FoJATUy3ZAuy6pux%2B%2FrwZqpol9T8K%2B1GU%2FowANAqC&X-Amz-Signature=d2a46cbd302bd1b8e54ae5d4faacf96768d2e8f099c28eddfe225f175bd9c515&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
