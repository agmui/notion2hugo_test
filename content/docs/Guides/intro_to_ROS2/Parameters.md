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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUY66HMX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDSNezubk8UksPYHyjAQ7LGCrxBSZ0nmwIiQTaNDMGiZgIgbGIsTp7tmGf7ExieeBmJPFGwLqLH%2F%2BGgD2SQ6IBlvZAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD99tfSF5kOQOdEYEyrcA4Y2K52teztldfYtCy9l6orPGt3s%2B0A66uyppN9LJpW9i8JuCM9dQX%2F7KXvw%2BzqJiSd%2Fp1uOfl9bJQvN8ThAmAU%2BeoJfimzqSHhP%2BURG%2BnTjWk1iazU9DtPk8GQUngItoHONUJaetK9f3IZH1dMW7C00OROK37t4s5UIHm6i8u3YlJCsCREWcJTcE2dEXqlV8Mcca6by6XQGs7CUjncWjO2%2FepBZuXf8YeZaNXZGGhYtTZGdHj%2FNQVdJ6cPzT2KHVywbloHRthmLpGM%2BDqB7aldWZgJs3qr24GjMeEBwU3Jv98RSgirhiIp3mk31RBrnmNN%2F2kPr1Eo%2FoDPqyMXAp0IqijrJcVPvKI1oZFFhhgGnmim%2BI9LaotPPGE3L3pZQhKmvBd%2F2qEVoOD6dMn39dFsdnXaMqE5iN0nLPAa%2BdPVcQ2MkGGyMZ452Mv6HEK%2F3DAm1GVk5b%2FHuDr5%2B3bjDd%2B10%2B6M7s0zIgHE93u2euS%2F7ArflwnmJhzZteqL2DbMw6XnSxZ0mf%2FqimfhO89zL4jKoUll82KlgSuUW7NPlfZoEO4bWZuOc8i3KXvxf9U4BsZN158Hdtgtoxvw5%2F%2BVxZS95e6JxhReqa1pzjXPOak3KZnEBOi1J9GoftHgqMOezsL4GOqUBqQuTpT%2BkKZz9Qi%2BjX7CIeKJtA8%2Fn7paeeoTFGWs9WDEBlllEJZgt7h%2F90bIKR6CyjTo5%2BLPPNERKLeeDjgVYfe1OZRqF28YS5dymmYbHUnY6XKT617vYyBr%2FYfK5JKo%2BN0VHN%2BxYDORCitLWoYm7aSXCi%2FK0o%2Fw%2BfmLOOju9oTQlyj2cPfr4urAqH7CfTaOwOWdV%2F1uVOJG%2B6h2iUQ1LQ6rXblHJ&X-Amz-Signature=a7b52451b2aa205d1399d8b0d81d575e2e41f519d2f19c7bdd1df8c7522d78a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
