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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UPER5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD7073K71vMulgEaGPwhnaSidajVIeya39BgFDmyHIJGAIhAIFi6w5c8QCBzJlWi6hMJfTAuqOF1Pbc6W79QL5cHCKwKv8DCBoQABoMNjM3NDIzMTgzODA1IgzQhRofMpLrCLlQuVMq3AOpK7DwjWHQwrCD5WxjwcgN9Fp9O12wbPyN9EiDil2%2FqQKEybSqjq4SV1zx35seFq59EsVDA8qulu6e5BsYfI8MutgVUiuDD9m6aaL4qZaTTZXrKMaWjSFn3YBYXxzl0%2Byzyaw0lnBljVW9%2BBjzzMyLvsNIrs7Sa1ZyKwigmkjq9bAV%2BDAoXXRceSTlWVeBuqL8JaavRUy1V7c4DDwgMX7CDCiF6yMeXN1HNJHXGtPWV79poc7s%2BzlZHftXYJtPJOkMmbtlnxP3biH503N%2FXU9qyPnzUjS%2BCEGICd%2Bdb%2BVsfE4DSIFZo%2B33jenwPmicvWyQeCYW7ajukuNpy%2B4gSGSh6xnXTjxkFCisC29T6ei%2BPcVYj%2FzuZp%2FW0FnT0pIXjEkdiPbW30wYuDpqDhjJKWwXbwTPeHc%2BkiVJO4UNqvFpwacdO75xQ3C7Ol4IdhmOteYJdA2eRsPy8JvvjxyDQGAMhQDOPk%2B2fQzVKJlyNr6jthrCnX833xfhGT4dg5VH8RJNQXiIlSzATrg5lytIhJvhN261XrRrvcU3um9Mtj8xI8KzMWi%2BTwcsaCzQ8MxP%2Bsdg7x5IQRMwb1luzeOB0lQDpiLUfjZDx4WD84FjuNJsROHwED%2BQAV8m2A0z%2FjD4ut7ABjqkAThCnF%2BgPpbmpVKmnTL10w%2BRIl80vF6iB3hEIpEm%2Bw6MIyruznMkjWWdf3qVEwoDx0Mrvhwh4LVMIEblx6lOghqNMHzuI6vGs4%2BZrvrlzOZcxzs9Vye4I9hRMKKPXP%2FygP8fGA%2B4DMrH7onpW82Qhi16tp8FHDLyoF2OFDQpy82jqA0Q8Q4wgK6p6YNbZbYkUPjNM10h1Bfx61FGjpwpkoZHuFyl&X-Amz-Signature=7d98fc287585bc61e5109e7a3a72ba2b0ac4120fc90b19dc4bbfffdb565dd1e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
