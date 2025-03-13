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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSE4ZL6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMoFGGly3DPoyHTpxamtTIqM6TfENDdMskhjMiKDj1KAiEA0Ag%2FL3BjVT5NWNrnu40PEWp%2FSTFKITKxuv3E1DhLErwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJB4BoA1A40SyMPk0yrcA58UEytzlM3knwdVB4RTlsABBbKvhC1799GhLejAZ3zTa84Ha8ugzncqecs5%2BYHab6njbI1oBl3Q7Ei0yU2RzUKEdkAmmGfouSVJhqsrD8aGHBpAgjQBZMoqAz%2Fj0xdhirram817AqzAzAJdQRPfpYMZE5dFzIrYR7AuqhmhD30vInVrkk1qFILF8cxHjRIGZdpySWS18rXpXBq7uekepfzoxnZKh9%2FjrzcJj4Rq1FFXUbijeL6bdF8b4X9N4nAI%2B5dBuy3%2FCpedajICELNRFRH%2Fipzr83rJYICp8BCBGEi%2Bg4oLzSH4FS%2FfVszTbN0HVUiyA0%2FkpNrnCTK9tVpQg6eGLB5VyuJ0cG2n7enQGtyW4LHbc3n2nu0h3wlDk8OBAce%2BgyTDJG5RmYcUDi%2BSxcnrC6xUCzhWOIjppe74WibdeiJSMhamnU3v8e7JDNh5yiul9mpNpKncD6MeCybvbWuCJkkdq7ltN97VDf7GOmhTrDi0E8Z4ZBhDJMk0er2Q2ANwIaMgaF39kDoDkPOYgExgF3PifblmT0P3ERuo%2F2HjEv9yKhVifTXwIZBDD%2Bq6QvBfsgPJTehCHIH8UVtGqNB5lU6q7XUo1r%2FIGMKs0tPwV2yPBHqt11gis0oHMNa0zL4GOqUBCh9CYyhiRfzt6tjafFTjL4wmkC0q%2FdQoXtsFXOilnaySR%2BB%2Fi3iP0EApNFo6m6lf6AAFnNeRY%2FFmmE2aio8UeIS2Kg53Y3Xr8zj641w6zRtEirpOz7xlkdddZ0slKufCyc34wtKro1oI%2BH5ZTdDo3fUfG8TUtoVe6IoRfhyHbNmy6jAuRAwkilY8yTZiUVfW6mYE5MsYR8NinNgdGGNuI3FLapbK&X-Amz-Signature=22a03a202163c364238da4251c5fc46f5e317fb6a7c2c29393f13649fcfa46d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
