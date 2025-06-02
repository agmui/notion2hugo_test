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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWLWXQ3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCjKqEdq6SqW7Cq8Ej8N1TZdYHN1wdgt6u8NSukVP4MnwIgZPZ%2FmP7ZYEuZOD9ZnMNdEbUKGeRczSniLuDK%2B7fm4W4qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnYURBqHSQRa0wajSrcA3SKL5HDsK4DXSxqNjvY%2FG6KwNluXqR6Fj270WyF9WkekLmGaSqINRW2NeV7kuBdOYqmNlSD5QGLjUvHYkZOTXfOXb%2FkGunLwlSyvYopoFxWSjLEuTml61pXEu%2B4XbH3gSo%2FDL0s40HJy49DgoTdZ%2FsGnQVA1m%2BosagXHNI%2FAJNNe6tIn1A8ftqsSs1liseGt0RaVHN242ZoBHdIwhAEd23HZ%2BFg6gFbhcz4V6dTN8UBghXQlDEHm4kZMLHnriuh7hnlbfvyOuTJ7CONQKE6WWd8DdX%2B0wvW4UiSntBU4miYzUeKbyApCu0TGlGvmm2cqfjUi%2BDnLDUaPcLH%2BJ5YvWdtVG%2BtpbstyioUFGQaKMhdWJpu2ClDPxKXLXxSn59DbvxXZ6DhsuYu%2FxUo94szzRbVA6hZQPgTZWSaJ5L1wcrqD2w%2FjyLZa%2FWB7rb5j8j6Tlhjnwiz%2FYndw6mXtD6khnGrCsHwmHElWSTn56ium8TZmeGiVQz2wu2tDtMFIfyma%2F0m%2FPaC3hds%2BhvwuAItpJWrupDWnhRrgAXuWw89J3HOes5OXz%2B8Pkv0rLSPcniUJrroRqgEP3iUGV7g96Y0q1N5euv5FVsOO9Uyy4lf5wWliCsnxtYWzj%2FsYV9KMIP99sEGOqUBZXu9pvyydrRnNOtqvLfIFz%2BsHWuhTFBuBLAaRKo0EKPDN6D%2BTODaGVJdL%2F6mT4dwket0LnW9HMDyYMgGYDHKRXRZ4JMbwC1sGRy4lYGZMPjAlifr34P65GvmwzNnzZ9qjSN8O%2BVOi4RvbKcOP86i61prZD551%2F9hp24FCAdtUC9l4QGAh3y8Z4ftNriQuBDi7CTyO%2FM2Rd%2Bp58EOhUICZaW9wD%2F3&X-Amz-Signature=ead9aa4adf4e82a95d35497649d300d4ae4d21c86cab2362b3823430af1253f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
