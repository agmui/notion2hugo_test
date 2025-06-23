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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDMXJCN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAJdkCHn6ertrgw%2FV47%2B1Sko%2BNRiF3XeGCU7Gk6BqnDEAiEAl7n5R44T%2BD5LGwxs9FEBmf179V32NLRmCSYvLPiNXP0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOV5rfQIx3mSYe2S%2BCrcA4BHRm4fKBa9fiSl3lv7qLfnWMi1loZXhCMcr50zQK4TTJ6Kk2LEg1ygo22%2FXByZzV5dGbVmyejpdi7yor%2Be24n6E6GzLE9MfxEnEqNL5l6gO8cuYzu7UddvAbZPY%2BfKkIQyPdWJltvHi23IK3qfD0nWGLLlYrAtUtAB42gUZ8MScX0ib5Mbj6nuz7qEbuuVk2M0u1xnjwnGRiUYzZE8xRG2%2BJncjk7zqYn6gNpEthbRn6x03aDqhepNP3fJf%2FTUN419GvXe38YL6oJT5LoNbVgaL9Lbn8SYhdMdZjgt5rcA5HKOeBhbHCDJ1sUXMP0o8AcR5%2BaC9QM4uyC0APKSiLbDnfBTerlpYzxol2%2BBGo3SAaeyt2rCY3QuqgrwVyw26sfUr6d1zBCHBzU5zYMvOMK8cJoHdk7kOgP0BZklCmQQiIH7tPdYtk3f2%2BKLqpS6EzaxAHjVC7JyccMK8M6%2FnLYN%2FQgpa0QyFAINwFdIAU2s6rd5RzqixqU8yhZRZt8Ub2dTxIVjIUMNECX3j97CxwRQg0czc6gtIVm%2BFyB%2FHIulGlZcVsN661rhOb%2FkL3IntuOnrqg8yMxlz5cdTcdTmEZIMQXhxeA8q0vZnvzY%2BC9BVygdjbBBvkGx8JK%2BMLiq5sIGOqUBWi1%2FjXimM2t3deXZPlJxLbes9H%2FMrIYV3V2PNvgbIYxPITRywkVjewYarpTDLdTVng8Km0U5WATOgtqo5uZd0HWiy%2BU6L2%2BAFxnOKvqrPJK73ZIlPKVqtGHztmbmtJOb09IpMjULPB0f7oINwhY9%2BsvMepysXXW6Pwh4DhyaRyIK9mLqkYv5wm7BGMQUBJxRGRORRuk%2BH2YRiuDpVWCkYjHGNcgK&X-Amz-Signature=43a5c26774b9ba0622c42a75c0acf88983b67cd6ca0cc55e63e69ca22c519eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
