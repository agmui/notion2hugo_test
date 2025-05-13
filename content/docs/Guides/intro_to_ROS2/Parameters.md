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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KZ633C%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDXjZjhsF3zltP4Su7pDx2rvWXlOQpXl1DWQ0E6ZOT0RgIhAJxxstedR%2BNR8%2FvO5F9eOX92Z3roWH65PVuWA1mX6VEWKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr5ijST10TLe5M46kq3AMGEf3UpqSMAvMU0%2B5d07ibpKvgSnSItLEAPLUQek1TXcdPphjg0KlRCq7iA%2B9SWvCZo8t2WA5IWmu7SG%2BzzONrP%2BeNClinImqhM5%2FjvMLT10%2BExL%2BbjuL%2Bmy76mYP3fe14PvrHtSmjfco%2Bd1SlMwl%2BcZhilIISuWlICP4hJ8zTU9EtRHEnGijfinFzuu5HZKVYzlR9EIfUkrHR6k4hpXbaKoqLQ60TrvvW0DXjYBDNP83v5Y2pn7IE7a3jgEwRBkR8xyNvRkiEax%2BRge2EdLKa%2Bn6osNl%2F7gikpo%2FAZkTzRRuVZqYgtkWD71T9zabvncKtc2XXC5k2rrOwFqrCrU7yEtJpyCz0piUrKKvJnoZxvV%2B5dlm%2BfsQ8tbV0Dto%2BJ1%2BxhV7de0otwVXUAvPjklp36eDavGqcmBdSDGTi7rRjTT9v%2BCpBE6VvVhENqLEuR7v9QVkrCZRi7MLHeCtV2D3X6DuIyRkvkhixehwNUIY1PJdkRpAa3rq82Ka%2FgVSVm46j3yqJdRc5J6IfxwpfRVtzzSWQTTZuAf8alwyavAsQayehw2SCUkZGD9qfuzRrVAaJwb2BEYg7K%2Be9hIJwbo9zJfFEiFvkvI0mJZXHfiqifvA5ZulPrA%2FvmHUGcDDH9I3BBjqkAdQP7vahzceJ3AaFuQ7M952eSukeTrLzZXfh9HXzs0whbNjGfR4f%2FQhKXTRH7WodUPfyDcTF0lO18P3xuUMkAtnPjkU3fKN%2FgoYs9T4Y1QhTiagtBo2N55TL4Uyuaw7pd6Tt%2BjQg8jzswzfmaV2H0oeWKl3Ui507wnbkfWhobjd9ipI8RN1bq54saADDtBOhNpbeEsRfY%2F5LsASTt%2FKD8fi4j7Pj&X-Amz-Signature=ffc43bf7fc5843353fdd3aa62c8c1573730d891fc8bad02b9bee2b0dd08d3ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
