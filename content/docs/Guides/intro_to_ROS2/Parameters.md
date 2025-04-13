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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZLNOVN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1GUDTKhGee2Ux9a%2FjeLx%2FQij5rX8JelMPwTiP0MTuwQIgM%2BqgpdoTVfhy4GAPsM7Resxg8Qij%2BFRhXintbJxS1V0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Fg3Flk%2FNPw0ceaCyrcA6dHnX1S%2B7fUFEKfk2LWb9R2oX%2FuTLvVTqk29JIFb0UDRxneDwOakEO45RTeXnjvREzYuTQtMBfHDP37GIkVDtZkmqZCbVoaQf1fIF7vQr8dsXe83SndrkJFrqQ65I7l2g8EZLsOGkWfkoqCHbLNMFug03V17G44csFOBdmv1D%2Fq8ijrdnMQ7yP8LVGiFD92hvaww3nmISAMsdmsA0ihth2Yd7tqB8eMwtSd4UuXHfnPHtsGbpAMRkUO%2FHFYAvkZlajMVa1SDOOGjPYl8cN2%2FvKVjbT10LljhyuDjufM20LQ0mtm9yL7vxmxdAkyO68%2BVi9%2FqRz55vViD%2F4YNRATXqLQUQTTBBXr3yI8RwdcpOv7PlKlOeGB%2F5cFiSlwn9Mc31lhfUr4GyxuXcG%2FModYLnWrsUxcfWqEY1kcviepRJr7f1ELapqL3sh2Pn%2F9AImJc5seZlJEVANoURXo6YrCXSaW8%2BtyVdZgY00SQItI2tachR%2Ftx0odtOI1FlgQGCQ3wRsr0cW6w5YuXpC%2FGe%2BUcFdEywhbVea0U0ZXE4m1VJwdQWYMzkca%2BL6NXjdG8t41nryJjXMwOY3VhYxE7nuLI%2FyojYy8%2Fy0PG24uHP4XiJalify3%2FWX3lDUEKvWNMN%2B97r8GOqUBSKfeG1xGMVUM03SmuE9jWd1NgzVE6DM9WtG8T%2FiGy14bgQtS3G4GS68OWRBq5PUwhU5Fgw16NCnwiYo4Sl4ncWmJS9Lf4wSq9mZtqIXTFk1x4BiRCTJe58DQl6RGboVJsSxVMdVzkUgJyoZ58%2FS7RPIGUL%2BNtRJ%2BtTSSz%2FPEWMyPcc2vlHGQQl4kRXAw7hLbV6WlSelKH0GwYaVE9ik53kSeEnUC&X-Amz-Signature=30dbd5eac9dd328e15cee9433787e50e1985091dc9e1d75c84350aef4ab45f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
