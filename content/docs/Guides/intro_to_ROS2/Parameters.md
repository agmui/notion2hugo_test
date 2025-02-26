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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HR2GQQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGt%2B2B4rFsPeNgDAJyZmcF%2FehCekeOQeBRehXh1O1I11AiBl83cke%2Flxt3rz0SYpR85Bf0hio2VEoj7eT1LSK6JTkyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMIIvOvlKWHD3HJgytKtwD3EBld54Pqq7EFoTKbRCDUf9MTNE8X%2BrP%2BE%2Fs1EgeH7DEx4fqvZWQuNlljkPo5YvaYF8I%2BxJ0fWi8yyV4A9oma8zXNM1qVmAwKInSpLN5meU3BoDm%2FLvUOrFW3Zbpq2b%2BzzSNBnB50J9f%2BgB0QUKaXly1cuehn0MEXGt%2BCgX%2BUDdW1SAaFCTSezmL%2BIuENn0UfjVUyaIgVDrVmByaKf4Muy29g4xBJhqO6V3VXu%2Bo23U%2BvJe7fExMABZVoiyXnjUF4sRR2pEncOCcy8ifQL1BTFAqt1UI4OdZpxtXfI6NbHWyfBihujdUcl6dkL0yfgaoP%2BwExmyW9mgpT4BmqVOZ1Ef64v%2BfX08NMZ3l0q7lGpABE7Y63eKwoShV6IarglwmZ%2BQl5s4Fp6OmCkW3XyAc0Ms0%2FSU4fqQtQKrLB1Bdmbos7OAIDv8a4YUm719E47%2FjZKz1q4FL24XzE%2Bb4%2FQQUzHegzHYNI1p%2FvcqqXuIYzMGpQd%2BqmOZqr19kKi8tT%2Bqb4GOQ%2FWg%2FQ0Q2Rdq3c8TjghnyTNayjWGTKUaajm38dXFTpGQjaWyGLxfu8Szap6W8zIRUCTr1FI7FQuJJ21okF6Fnfk4%2FXlVlgedN8jNSA8aAa%2BDca5z%2FV28eWu0woZ%2F%2BvQY6pgE8qKLK%2BPDIS37K7xT0ZZWMeqL%2BmssWvsL1Uql%2BCx0tjvgOYQ8%2Fk%2FD1zOp34LUkEgGq73Yy1EPuBhoWS18EMAeAYb25QiAZGv7KTrTmUEje3FBODy86Uj%2F65yKvqKTVvsq3dfuJwXq6WZ5zZh5Rd3PvKgzREuqADEA%2FPnZPoLTpjXimnGdRZ8oS6bR0UT%2FVOOxnJmGJnDyLIn1pWl48JP%2F%2FhgD1EgqU&X-Amz-Signature=2dc53d8af22155028fe24eab375172369998e34de9b8464b61cd41a7ec07134f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
