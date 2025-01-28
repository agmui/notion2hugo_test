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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPT3FIH5%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIE8p6nWWQAUijDN8VEHPRmILGd5efxBXBTSYnuy2oXNuAiEA0eqqppZ9znWu3nXGnIdJ45Z005%2FOcuiXagWiPry%2B1xYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDF7h1fb7opQfOlGVKSrcA6UJ6uiFJmHeOuqEaihG9w000CeCsDVrV4FRK2WJAaT4UP%2FZEbnltRkxVhWd1bGEvkWaBX9XMi3Xq9F11KUi4pz0xNEDtZ0UTp9lR7LCzfeN%2BuWGa9s2lS1LB%2BZJSH100H2N2z0l0JCwDcMhiHTIh65hpAttB%2BpYJWbIxGAtlYVBxvbZaJ%2BxSBgnlmEkRXt6q69c6ZQNCTqYwnrr7Annyk%2BMnID%2FozePVsj18pRFaHPgB98mj%2FPibawFuWE%2FNyFXcT%2FQ8%2B2QmJEnHsiLuguew5auvivYq%2FgnwfVEwds8ghX0HEkSrh1xZRe0eKUvsLLY1Pmp%2FlEzFUaNYWLv8dqhnEblGVguFl%2BnpGpyZ1M64Yud6r49Te4%2Ff60TO7M%2B12e7udbfAm7%2FZ7j72toH%2BXfoVjlnM0JByJsD0Sh9AETzEaeSuwN%2BILFqFZ1sP9Kv9m2OSnBzqHi2MN4QnZeE7mayT7fiDF1d%2FzqtZe0HRIxzI7EQZTWJJEHJUmsFlfr7y7Lsxmc4BZVEx4wFQULhTmSkQUdw7xOQd6k%2B0Iya9hO2MIKql4lelaRpGLr399oBU6nidQmsxp2Pe9WfOrnAIOsfoj9cC9hbPMrAWZzEmKT8Nt5XqwhDmDj0%2Ftpd2wmZMJH85LwGOqUBbKNz1eWWqc3p51yrc15yLNo671FVibV7riYisPWyZoYk6rsOW45S5zV8j7Kjv2530QWFhyyHSmypE8DGA1y2WNHClrH%2B9TFpDNnTvOVnR7JhYAtqcOywHOoPs3O9sLnsknJmESE4kBwIacfL9dFWQvrP%2BgFE%2B%2BN6YFC%2BTY3yj8fJAuxOPaKsks88HhF60WU9GTukS4tgg3DlU2QtG3lxZkLpzUXg&X-Amz-Signature=e8716d7caeb37c1816700d574e9b99c59d0cb48e1b5c515e460cf61e6d803efa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
