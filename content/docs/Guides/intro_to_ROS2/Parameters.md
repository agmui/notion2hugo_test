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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4EVZHDC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD9BvL6vM5GNPbASoHshUwjvHc54KiHsIyMHJtjBjbzXgIhAPUB7OL%2B2fAJ37gU66oeKF96y%2BHUCn0e5V375h%2BCPMwTKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKxXzRldE2KDuWJnUq3AMhYqPB74GhHbgqH109ZiTbaCYYlzyPyTts5Y5yzbg3FDiI3Qoh4ATHFB3frr2b6QHJxJBM%2FWMbEUr3xEnReNfvlyw9QhcKSDmXXru%2BQzShmdDPzycYPewuxB4P5UrE0KHXtGRhyKowSv679rWJqXvXYTCDGHQwnlTlhwoBUZw0kVEqD6EGDb1qpaJmULGrBHKwxI29ogxD5N8VDQOKm%2FrK%2BrLFAC5%2F2QcJgX%2Fo69rct3T4P51guGcd4QYFe2QRDeLPwPaeko5buA1g5Wo9IPzQNlOAI9HYb4%2BwsgCEY%2BDVelUfQR38SN54x0wmvaXAO1CNmZuukHgf3fMxsfMYfRWxIsrM5PiCSgRsFWOIKUgrSyGLKnSl6fGT1C4VP%2F8R95okcvSqK1UPh3zPNjVYiX74TDaawuAtRFtQA3zgnPSjri65rHBkFtTuhavlNg4kJvnwGlyE6ajDmWn7b2a4qXPP1vNFi9QY%2BAzDD4izUwL%2FWa8ToYkHABzOJtIo1bZNMBQa0UYlMhFaVPojk4SrmgwrRrv2prxCRoNRJ%2BwQ8dh9KEgvw5KKKLOH0DZ3iA4zCOXLy4WXhGXiCA5Hzf3EtMAgbhztQMft%2BTEUEk0l1qcj1vGRuMMUmkPrSO%2BJkzDvhrnBBjqkAYJk6VGzC62pYyO%2BBrnlaFhjAd0%2B0KO%2BcS%2Fvc49NVefDkBLnlOb4gQjk5PyeuQyq516ZNybzPIxe1V8UjO6bJ8JyjATlMdtZ9EX1%2FmUvgUmMy%2FYYorZHGy6U2YwGMRcW71niN0CVZqAoGkZBiFnfNrgoTe7jasZy33ErtgOO9OGBBx4oSD8R0K4bSi8whXHiQw63asrvPBe2Efn4SXRE7fPrvDCr&X-Amz-Signature=2f0b309fc514942a43da4251f028275f99caee652bea81daa222a37377e9158a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
