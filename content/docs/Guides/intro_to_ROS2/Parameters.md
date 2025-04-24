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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7Y235OQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCHSweHUI8k863%2BLzZhYogUaORDM6scf6UGpPpksdGFewIhAK3CB2eCs9K0QqyKPw68ZMHj4ZFy2OdfoOmlQ568M%2FgWKv8DCBEQABoMNjM3NDIzMTgzODA1IgzLRl6hEKJX2x%2BgF8gq3AO%2F1De%2FeEATNz1vjbbeTIm9jkwcdexo3wAjxAi%2BFv2sFb%2FyGhPnkMaHn7e%2B%2B6IXJLr8MwIg59X%2BbbAAaGrV7P59GdP5FurvaZmgthIK6pajQyiVRhknGRulF9m7gsk8CLzaBv5RopbmI74OmtLIXtWg38JHxUQCq2HFTNUVCNHlcKVkyPhfVvj1ir0I59CLoa0PEqUNEjneUr%2BciR004sIJ%2BzEU98jzplURIp6%2BUwF1Ia%2BdfrMDq%2FhFAYedDySl7maAXoKJk7XrsSdn%2FI%2F7fPz06S3vXHP2CrmoAUjnS8n3fGEpqy50STPoNxLytSdWLVGymXp0qkyszhGN0G3tjLlxAluWElQlpTtNsEypoQhCG5AWPnoYy47ZvrP6Bm6AUobytDgFhd22WBENanDN8WqVuLjnYSG%2BIcAFv6LLA63OU2nRu9pMklAwujaW%2BgWyLJAyfjImEsjaroeVQrehLZsc0jP9R%2Fi43b8C%2F0hWRx02fooUa0wHPmD0GxW%2BJ1NGFORSMtWZirC%2FTaepeegjC0za%2FelVHizgNW8qZ75XXUbahGTcQp0tsCxaC7VzjwB%2FNZ2YUDosIwSF7QqUyxjj9eyhgpbhg%2BzSoQv8kUkYnKVrQUW%2BPBMmf98kOEwFJzDW6KfABjqkAQOdsXctdnOZNSmNP%2B%2F%2Fm2F1uT6MIFDLiwSGJRqgmeeZamRhCvmbmxlKokze4V6vDOA%2Bgqk9FMaQS4NpIUcpZ6B9UI2ClHTjPLv67dzwrp1nEwJe7i3xzcibi9i%2F3JhWwqYhvK4PHkZP%2FDowu602G4xI9TWMXTONHZXQNJAWifX7x92JczAWLN1DuwDU9GT%2FtvwZMrI2QSiQMj7%2FnZIIrgq8QBn5&X-Amz-Signature=bd5b88be3e77eb4b305829537d4c5c703cef7d8849295133e8adfadbd97c6039&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
