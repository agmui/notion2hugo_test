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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRY42KK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDmRsvGyuh23FNpEf4NuzzkT1TZLHHRrVGpwF%2Bv5ksaiAiEA9Rk69oblHPP8WyTi688um3N%2F8ZoFDi5wzwDUkHxQtPwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDG%2FHAdNnrJIQjhAgayrcA0QZruKnxpwn%2FiZWcdqJ9dbcc3jaeUM0vqtLaXqc9ZJ2r8SfL%2Fsh8Z2lzZLQFXailmM9NzkKu3YChvWrxOpvJDJQOh5q2zy9AmgxidI123biz%2Bwag8Ck5v0e7Jv89TCami4XnSq3%2BGMXN6Up2bRjA43jmCuKk4LDMJKGyX48%2BLzXeZ27Pg9jwWG9W6PrznE7fDpQpzIMDH0%2BId0DIi6796TtcWhJEL7c9LGfYUrX5ljWSzn4VuLVTAxEoDhw1r4O2x2CwlmC7p5zHVWfihFagwf5QCVdLB6yV08R3m2W52oOSryCtDnra1ifvWtpNX6AfkanwrYB75jjUD8iFzaegN42FLFK1XoVjx07HQYaMyX%2B0TYbyLXWv2z8zRNpkQ8wu9I14fGXpP5EvCqH96Cnev20X%2FDIA%2BMuoleOA%2Bl7c3aKcG4dDbQMJ9fFOIYvk5AqO8xiutwA6ZdBHXnMkn%2BUQJTQSyWMSR531n2jrOYANP32T8y4PKHnxEP%2BHkVlwg%2FGAb2ad7BSttZLp%2FXuaEIB4cSyIy8X%2FLRMDCLYHUwvabhcfTVMsh%2BGRR7%2BJ9zfN8%2BI%2F2mlLgIT%2Bb7AlVSSgO9rOTNELLQncZMs7nQbhVRqIx4yTSbE7MXk2LT0WZGqMLuI%2F8EGOqUBkBhnBlexamDCBHRaHIRIKh1UHPZkBz2AJO0d1nQ%2BWYwWKwRISdCzHEkN%2BZ6Ylpnve8MnixwKv2Kc3wIeT6xhrMbt%2BoatDr6cDz8CqzMBjKXCxdMY%2FBNrRROwrXLlswETPlgzX2kxNb54ScNIg1aDQRXTivHtQ6brzeVKZIxX8VQtp7YEJe%2F%2F54hIzWNaYuebx4TYR9s794gJmLqGppi5nseZH1IF&X-Amz-Signature=a9f3eea4758122865890e795becaf8bba27eace8e5f1d69c9aa089501fd39fda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
