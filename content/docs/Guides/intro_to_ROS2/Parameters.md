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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M7BXCF6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsMYyLusJoULTPp%2F6DGS3ASmN%2BLOPFFVsVhfLsSAhD2gIhAPSyL88ogbPOA1ManAOFPH2URpS4M0btqE4lEO4RqVtYKv8DCBoQABoMNjM3NDIzMTgzODA1Igwyccl4jRKriQF1kRwq3AP5YeMsm90eAlcE5yXC9piqelMFMBNWKIkZxXw5ghQG0tPOYKU96ePlLXZbti2paTWbCkdBV%2F7R9%2BCY9v5s2tlnrQyng6bRooH4xK1WEAxn79GUDPRJTwXCRsx%2FomQR8x%2B%2BWaj9RBfaFqPdglOe92nyuTskFezxTDb9awYgaLLEPcLXGvUx2BK5l2UcPIkCRatAVWIu%2BuZqTtEhAHwLUj3QnoC6%2B4L18n10WD8Y09rlDR8JBUQ3g9X5zOk9wIEcY3d6E5boG5UyRhRLhhwVJsKPNy0VSvVmMuKNSAtTcpaWm8a%2Fv4cZZqgzMOj9i7o422f3vDOXbHvIDPd5gAQuTHm04aYp53qsiT5DAZWc3YRr%2FJbQa4LByLc%2Fy5zpjEGvRzkbizIPo6Gp18QdcMk1dXEa4RBdOqb77bL%2FoMvgGEgzNqq93dZhefv%2BHVbZ7ZgW4WcCn7e6GVg9HW74YlyU54WJhU50DwSegzBsSAPe%2BpHRMKOcuPHK0m6PFB%2FSv36lJj3x0SGTndySWNmUeVxrXcinztOwxHWy9rOSeVgZIzWBKwBcCr%2F%2Bg%2Fxrc%2B8SISaYY1GiNv75Dy1v7N5NGZGt6PovLiy26RGObJ2nx2XYqOkUyAyE4UJSzi4J5GlRpDCCv7i9BjqkAcQM6XA3qY5elXwbGrGraO%2Bh8RQ6fjZNJNtlQ%2BN9IMlWqmq99t%2FwLizmJaWCBqUJGPqk73lB3zrytz34QLQP1tAf%2B7KnbWTLZkOB3GWfNKnO5CTisl%2Fof7gJQrZCcSwaQiw2Rx82k0YHuAU2Alg%2B65ClIKSpcG5RDjSOI%2BS4NY0QugR0P8SZ6KZMxu5ZaUTrfm4RAwrYF0Neg%2BKmzqWa3KAbpgSe&X-Amz-Signature=4dcfa74c9d3f07bf14d77eb306e36f981dbd9eebc91e995b68d48560d3884754&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
