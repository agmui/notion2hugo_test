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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKTKV23%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYLt%2BsG8dRZoifGPb3xJwO88sWAe%2BcZh4sjKRHhtIiQgIgaDQtgUuAo8OP0Sn2%2F9km2%2FrdyVHPaF%2B4MbziZrYoHU8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMP%2BtpErn7GyZtRtircAw9UKqn%2BqUmH7inF6ANP0r59R8kPKmoRA8CuDciKqUng6F2YuP4x%2FhQpJmER3mD7YMFWUXa%2Fw1LitaPAKzilnj1tD2yzhBqmY%2B9rpYdlq6Lc%2F%2FMF4aMMJloi7YlAVGZcB1X2F48jD2FdW7oqH%2BNwePbst3cLEBBikmPnLg02apF2IjlmSI61nhdU0pV1LDjewtpzPOd%2FKR3S473sJU%2Fp4P0leT1amhFsyTuMWYasGtnf%2BcrpxvQXFoDZy7V9svZh1Hwszfe7c8jWwZHaM3PL9VHfural79%2B9Xr4ynOS5zDMhKZAjT1gI19pBkj%2FgNg%2BC%2FKICJF84ZKvZrIfUWhBMW5qkCf02FM85KOr%2FAtUf808t56foRE%2FWGkIYVp0LcIMIICUX3q0uMqdFJVDuATaOGDt199UbmSEc6S7KURQRjmEwN0BWmzwointd5DqWAc2WOxyYz%2FRQb5YNv%2BdJpRMbyPrpgUnRgncxDLG8YpsYDVu0HBu52D%2B4GEHMOfgO9A%2BNMR9SrQcMr8ZZCCSKhF%2Fftuk4bdCZKMN6Xj3uw8d%2FjRZWDtQ74iJGUJoPOJlg%2Bx6Zql%2BAaDPnxIgbP%2B%2FaDmKTJRDELBGv6nv32vk8UoC8PWNf%2Bwgh0tm6u9eqjj7xMPGrvb8GOqUBCZZQMh4SU%2Fb8XjLTFXNDuEb%2FIExg%2Fph7xU46AirsYNFruTXiGy3C%2BUZQhhCiqfuIR7n2k7HrDCVPAv5UAfle4KJIzzEhOCWIbP%2BZlIZHCx7rU6fgetwNE%2B6aSQv1expsmp5i%2BJMRgkoylKo2yYGZZeQfhsD7xhtpqz9OWInzKm7ZS%2Bdyj6E56felUbnR0xe%2B6VrJBFyxiwdALv9s6xFbiEDiU8RO&X-Amz-Signature=3a1d96e876f4795e5e55b7c663d30ac7a8e4903a202bc44a8ec89911a19a457e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
