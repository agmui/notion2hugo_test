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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIXM2WSL%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDBZE9d%2FpbMukFeFUxitLX7yHAkeP300TLCEJuYqk9IjQIgE0Kn0%2FVGsM06B4wcxTUrw8oYhayo%2FyzOI4dC2EYEre4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZuCN2UaPNatFDZlCrcAy2mHEFyDDFfroWc8mEf3AGrAkA%2FpadQb0RBPxAgL2gTgABLUv5o6JeI7%2FFqaUQGr9RWZiIFpJsQEBgZBoCGz2R0%2FX7K6eOlfi642fLkucvWxieQ61JwxS%2B2%2B5dMb6OhHBc4sDQK6PD4Ud9FoL%2FEkTPm1Yn%2FaJF3gwaDAwE2B6oUgNiyl%2BB8YigadoNsy3XYqRp4sgUzCTBQqsPCyGEHHJ%2BOO6X5n3INFVu3lWP5U85fDrcYXv1LfWD3jT3%2BF%2FYMZed1mf3aRVOLqw%2B7RFP72zg8pzI8AunvgENbgPrK6KAq6OQArAJBhc05AQFLOk4aAuO9t9D3s5YpEKJIicUdgrMWnypVKdmCVANvlqT8CWXNCPiTbYrYxUt%2Bhgy%2FB98ddkx0qYyRHx9zqQPbod5mK4OKUKzXr3oIrh7RAXBhmfSDBkdi4JRmdG9ube1WNN4lSU3HHBSHbRW3XJXGRwP9LegqCY7MxbbaLwbQt%2B2seHNutkmThPSe%2FX73hLVOVtM6EOvvbOYnU5sV%2FMF5oItzdTPWk4URqBT%2Br2QSbb2er3vCX9Ylcxn6gy3L3P%2Fu5D4R9w8k8OcIl1oOHzdElH8yHDyzGmScBDbTe5iOMR%2BHD4w3rCFow0rv%2B9hGo%2BCSMM%2BlwM8GOqUB5lwJhVkRDTWXrDFHEOX%2FbBqJ%2B4IvhvmTvCzzDrEWXtMgc3FP2sww3yFLH8UaIU7n%2BJ%2FHzHOHUGXEZbuNbXX4NwJH2Hfqi9qg2EsLGv1lYqdUjz1579kP1Oo3eo9LKoSioKudZCbp3fdSJX9GVy%2F0NqSXpkxitezMOvRImtl0Ux0vyw7%2Frmbhu0j3x5IId777KJUiBhbajNpf2J8VF1nJf2fGpkaA&X-Amz-Signature=d13d61b34477c71845fcac336c8ab4ed7a4a9194d36735d258d0692ddb08c6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
