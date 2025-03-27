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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMBHDKXC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqNHiWKeWVnyjYJw%2FVHfC2cS5zCs%2BfCsj7Y1VKdqGpZwIhAMCqgwkHqPtVVOZckd6DzgrWB7JJ6aD5MPqYY3yDxx3sKv8DCEEQABoMNjM3NDIzMTgzODA1IgxcatfD00vKfI%2FrdOEq3AP%2BWWnAn08DkA0CMfQe6%2B5QggOmhXrcaHuFyLidTg%2FmpFOGNNrh4vNBFwWz8Ed7K3ycT3%2BGl%2BFDJHQxxUw8mxFsbtF4kxoeEdN6wEbf7mJ8d4t0nfLQ9SSG%2BM3j4PKQDAgVwOZpDaTtrFifpT2BkaTLER2AP0wnpFH3wNAYE3x8UfCBRrgFZzYgwC5iDocVpk3Hbn1SRx6ZOrvZqsIqi0Umi5x2UZlOCQ8%2BQO%2FGb3ZjFelDW%2FWdPCqwgQ2u0jYirIK%2B8jM7X1YDS7WlGbRIRaUM%2Fo8lUgYVnO2pyj72oNRViB4GNQucc7dpqNqzUKNOdPLMb7xZo0sdKjW35kHAQCFGQqXlgkRcB2e3y6aOMV2DzZfJmM%2FKK9xB5gDo0W%2Fo3185a2lJ0PXBPd0yWQAtHjpS%2FZgxUN%2FoWfgDxIQKM6D9ELX34HKf0be6f9ZgCnsxCuEVcIiYDnTlVt9zKQBNGJKP%2FVmv0yBtnAQMk86s9EAHk%2Bp9Zft2%2F%2FISwMgh2ISMJ00OBpxXW%2B2RqX4DmMG4c%2BVyyAxHOty9BIancnMGSN5VJ2tvWsBatKkf20olL9OJEjgXLFxte3p6jfSM5JoWVQnGKdB8zITm2DwEa46Pjmk1gmzt3NuWzQiCOvGv7TCqhpS%2FBjqkASbmV%2BIhswDA%2FqC7CyisjqJsO%2B6GyETEwN5kzMvJLq7n1PK%2F4%2FdwW9hdMdksknbGMPBMDpsKIBsBbGEeP8uVv%2FQAj4PC03CR%2FvKhS5fX1GGiNu9WxpAprcw47Nv0ZgZJlhVhqaogZpmW3ToNjZu06XfiqeVoKFUbsK7DqqHQZsN4SdoRAb94%2B%2BSK3gS3BMgANCSA83Hsw5XSoURUVlhxNye6%2BWOI&X-Amz-Signature=dad912fee2d1f98781ea5789ae3e1e9683d42a000648c7924125967d1f28aa26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
