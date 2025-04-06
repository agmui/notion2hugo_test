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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMRST6AX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMt95vaS549MdPYRRGpzTazWQNAHf32Pa03eFX2A1s8AiAZJavlzWt6w2hDqDlb%2BPUiJbyLfUlEr7fx8H2EW6QLkyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM3Lox113N94fk3nMBKtwD2mtHLv5bZCST1lz22shU%2BVzM2g%2FVMcrSr%2F3PMnZQgtcG7mmR4QbGYcU6bAWgg7jTrx1tfVNabANPLJ4HbGSuYeUuTqBWTQ4%2B8Ydpmz%2FTml4H2I2yBQCovaRcsNV9xSous1%2FfPvN5bT1cThJzDkuc4UGFqFHtX7wAd06ivu8zDzg%2FG7EwOPDyx4%2FsYehEoHLakIrSjhmxGllqRh%2B98gP8EocpjWCz%2Fn%2FBJNxtBChQBcr17w8eP78Zc%2FFF7jJYQBnT5rAnvMCHyT%2BYZEzc7sJlebTWQaXfY%2Fm7zoA82UG2hj5fMrvD0bQq7es%2BVupUr%2FLRrw7DuwV5boWijN6LXwtPLSylpzXdXo3kMg9XcUcjTbAWbFNY%2BAtbuTuXQwjp8EFccguY5MyQMXlBsXZFSqva8ezGlN1lwrJd5%2FxgDuDAbwD9GLtfoxcf1w7cwCchNTBZ7L3OYLr7xFeYBH%2FIT2frowgasG67g8Lo8vqQI5cuiPZIqdhPJvRvdaSeGjNtzUwxSGOaVc8lpoXtIj%2BgmmXTbXcsDufRG8JNwopJ%2FiuWcl%2B7TESpObC49zfHG%2FmahPfjJbWp3mxcF8XlAAaMr67L1r9WXRsvSasEptjflYOwQZOODc1lof%2BBMrmP5XYw7%2F7IvwY6pgG5JPcIlA5L%2FHrDZw5YNBi%2Fp5Dd9F6jT%2BFKMrnfreXhwD7L99R6vlJsmzBZKVguIAcSnFCxhko67egEOMD1VF4%2BXZogT5dwzfnZEupHvnXP8N2wBBy3MDVH3eYvxbQB%2FYWKmwnL1I1O8quuHTiyxaf5equ85p%2Fevl%2FWyj8DBY%2FIWtCpgVPrn5e8%2BtMmW84avBJUGqQmIi2oLERS%2B%2FP7vluHEnmHvkbA&X-Amz-Signature=777f8bab57e543a3f94d966724029ebb359ba9fc234a143404760b81fe87ce57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
