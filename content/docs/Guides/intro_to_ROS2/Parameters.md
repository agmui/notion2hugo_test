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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSGWGK3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDZZgyIbKzY4p8AQok7HZkcmUlT0hGTJWrzpdVSB0kKxAiEAuIOATz0k%2F2U3gfspXJFBPGMkDhAjoAZa0E1rCrXejisq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD70rJYPEYvONtlJLSrcA5%2BK%2FnByC%2Fez8vaftX6RJsTDVfsj4C7Q9g7%2F4qEZxeHzYJtXcZz%2FSpbA8ElaVdR%2BmLvpDUya0W2rNyRquAC%2BVpUj90bRsCB%2Fnvm18Z2edg7%2FKYaQ%2B6Z5Q8ahkCJ2wuyLVZGf3jJY4%2FBROOvUrU6vqGkNL1D31SrZoegZZZFLbXIiumSDULW3VjcDq%2B9Ge2vgFZXVJxJzrAyNg4wKMJN99LmRdhbdkMuTwaNePJuxzmuLy8PyNduskLTv2m5uveezcCgP1ApxtxzgBNU6v6VPDXTVXEA8GK33bmnszG%2BM9%2BxjcZX4rfmmGY4itTJRrHJunpOtKro4%2BkoQELPYNxOuPv0ptEaYzQd%2Fn%2FL45wAYD1K%2FRmQgz8jNvH1ZDwsGxv83Z8TigJSb%2B10d1%2FS2MToaRSs3FpB%2Bvr9bw1DxSdFQgInR%2F%2BSz6cAamwGEnVYPjNABU9zqAzSAhdIEEdlBd0CGpnTc2FDK7nYyrAzQulUJSRTPC2FnkOZ4PcYFwSem73BRlUCMnDWHX0Ol%2FEJv%2F0pctVUSyE87H9%2BJK4qzWDoFM%2FQ7PCd8JzyHVQtLkEtbv38E95AJn91TpthHNcL7EinZFJYTnruysNoNB%2Bz0sXFQ6K3CBnklMulqwgbbDOPfMKL4gMUGOqUBNPDEBh%2BCKg%2Fg%2FyxeQr%2FNey%2FMVNchFRgjE4CeHyJwRzcIyLxxLU2sbrv6sGqLnjjgMasAVpCQPvXb9aR9vBnxZuQmQlcuPxkfX3YX5UQ%2FZVyZGyO2cKnB9fTKjWxf5l7ATihG3FJUMPAThzWcj8WATMRPVpwMv1zxorFSaaDThkRWhzqo7xDD6LfvhUzFaxN%2Fi0GNtP0BOFbthk8PMwZ9poVslY0b&X-Amz-Signature=7e801ca9c46aa1a079711ddfcd636fe239e481843f9190d0ed169fff848e8b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
