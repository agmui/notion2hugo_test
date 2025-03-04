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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQQPDEFS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRx4%2FEp1xZOO5sH6jQtKGrgOueixpXmIBDyHC7or2nMQIgPp2pMSRjHUBKPPgMd1IjRy0MzxxvCeQMdnNB3leIhx0qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEX8riXsULsgnxcuZSrcA1unOxSJqNI0S2AyOfDYz%2FZplZNyDN3mhIUka%2FFwSModyIPnqZPE5DZeB11gBIa8mj69Kcn4yODkTD558kimhqntXSWZRnujClcQ7OWziFN8X0hZamp5N62cbaftTRH96qr6aI9haxmuiq1yOrDriBPyjZLbIEMP4dqN6f%2BvwOUg0V8chzAthKoaks4wSfvretTyWLxi3rYjGwwDQpGt%2FhCxP9NVvgcbwpMhGE%2BCwjaC3Ewy2oBAdmBdBsUIbjmAHFAUFpfjZByDHVfcZgXWim6YihtwSHHC84Vc3AschT2T%2B%2BfpwzALc7Tp17jZdbd%2BYWkbKkj0OYyPqmWIcXaQJzAZniTiq8jSbWpMDszbGWn8pRAvIqhdRK3LH0j%2FalzspuFFMsFFF4fQ%2BdND9%2BSBNaR%2B%2FtKcVxtRdIvYUdmrev9BPzTwyxigXr%2F6qOloILbiUSXo4N4J2cw4QaBKZ2JnK9R90z6WxgtOs3OPMiCZSWOXvsm%2BuKwpgwevBPK%2B0lxIaN5vz%2Bv9JcAtCFsRiTm6QL0nzHnwN3EvOhrUIg0b0KF7oD88e0Xn7K2F2r9QSrsZo4yGJeW1oVlze4GqJyJpQetQirqTfw79Gd2%2F4ELHbwB2jGlF%2FzSjcR276M5mMLi6nb4GOqUBAPkkLaiPvUFrwfMKPkziVxKmKhTERuZzt580OiCS%2Bwfd3iM2y3lXQWDgX3QaVCmhrUi8pWIedqefqX3onYBH2cUfobMmdTaeZxxQ2ekXzSTfCLDEj5XsQ4L8%2F21OlUlvkaycOTY2UaXjXMoxjcxlDQ3xK8T9tu22qvKPcmvzEgZd48mLCJsLzEVhOAU01T%2Fj7BknHZNK9CIZ%2FgR3RH1bUHb3rVZ6&X-Amz-Signature=f4288fc60dcb1353a61f9b178881d5ff18ffca77403cb41513b0cdf3b4610e47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
