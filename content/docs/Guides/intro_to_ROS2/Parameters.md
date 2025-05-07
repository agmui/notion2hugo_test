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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJEHR3E%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY%2FVHI0xHa5NklEPDThxL%2FPHQLH1hwHlHDhVFWBEN3HQIgdZD2Icy3aBEPlbIqSfhLybb3%2B3VN5RUuWMAs6rM%2B2Hgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGPWuHA8T33zPnj5jircA65e%2BlbRIO4TpXQu0kw0L%2BcsRJJia5U5RK1JJbcxlQmwcu2d7xksv2bMEU%2BIPf8zRw0fbjYEIRj3Md3h5%2BsAPwTYfWJA4ZkYElXldFv4O5IS%2Fg%2BFM3jhfvL3dHhIGxbo3c78FgMm%2FY9DxuLXgW7h2avoO%2B%2FP4firNvSpoK%2B8dNufPXZKiV3kMtI%2FSd6zh0ALL1Tma4XiGmxx5rNupBqhCkR6Xb8k4hGKThLUb2iA26JSDPFmPGng1EkYkcEZduTtxNy03L8Yz2RQmMS1P3ezV2cFKwvBYzY9fYctz0gHIIb%2F3f88rnwy6loSf9kfuh42a2QmDw8dCbgBHmZ3sHBG0QJ8kwATmhp%2BiXEh8IvDIsZU1hDp0iPdrE0i7ddJjlnf3WhyEmQqT3BBHqVUdCTM4bIddHp51lLhahHHZYITHE%2FBeCS%2B6P90Fb6yflc%2FdQGsgkm6noKzSHEEVWei9Ocro3tUKUsQ34Puw89s%2BcZaaB5v3wBMPSHz%2FRSOg81jLl5kax%2FF2Bt9YFemuyENZr8UilY4%2FRfUyBeuilFhXb%2F51cqDZZG2WKfi7gZBRWmFeOLzi9rvDe5w6WcBS8PFTjaaRQp3zRex2twdKw0eSJy4pENFyRSBY1%2F2dH1fh8M2MPSw7MAGOqUByX0PDpG3PtXDEFEf0KziBL%2FzvfW%2B51qHmavHnd4ZL96q5D%2F6eFrfwrMHwJoBOOsddYVQwxubdCUR2%2BiB7%2FurSSxZ1AooaGSZB1A8gA6zpMGV6HKCwdf2hYgI9Ov0jPc4LIe8FO%2Byq5xI8OofT2iRTUgTqZ%2FHzj5exszYiT7On7FgKksf7iX5dAa8u0zEyY9uHVZyb5nl4eqVrAOarBeLSkf7sVMI&X-Amz-Signature=e119213749ff37c5db28f260ecf61a86da3c6dafcba1a0764ce82210b9177c82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
