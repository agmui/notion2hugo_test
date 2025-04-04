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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEX77WH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICktoftiVgrj%2FYO9s0LxUFwjPUHiTri%2FRyDMpREjfwpMAiAxT%2FRC0umE1qyF6uhWVf0CPuea9vHxLEjoi6M3yCFroSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMCg3OBWn4oP2aeW75KtwDNqR9aZEY%2Fl1njxdzde4BZRfZ3VegznWcmHNg1yOoYLgkxNaB%2FroXqBC1SP6dJwW4M3zMcgRV4AQyzkEyAs2jEOObun1t%2Bq9tNYIS1eV83d5zFG9VNsQRSsi%2FT6%2FfKYKPdacSXs4Lano78NOq2YZDMvFbX75WLQ1WP3DHmsZch7V0gGNc%2F36yQm733wZVjNblKqsNF1tMfpilNNHWd453j1xsjwoaYeetjMowOZKFNHFT390k9ejw%2F3tkIzJ1Qy9ySHQUMEaguUXmQgsIWGq%2BvRd4mIsbPdxMg0cAQlTxOzQeeMm2LHiqHdUjx1C5BttRgtDqeQwSSGEyX%2BchvxNcXYRhQzfeipYECwnhpd%2F2igM4RY4u2XM1f%2BAxr4FcQTtBHq%2B%2B6YwTYquj2t1iJVW20irdRWv2zoj8lmu68LPw53ln5qfuLio3lvKPHWe0oOlb3yG0VXXnCgDp65jJfEMuDEjayjc8vVjhkdVCuyhzmmOjo2PMiGhQnCKKjM3bA10zOZTx9Q5gRqoVP4nPqC6T84cijmng7FGeMZqb39GB1EwOL7gCyVSrKGNI4J8bR94vWPSb%2ByLVqgV6FiwbAwv%2F1nOaWxOBzRZ1A8ADwb7mXji%2BAvCnOVD%2B2sY99CMw0cy%2FvwY6pgFdFKUX6%2F3aRrY4kYDckoGoI0qgv4ThcExfuxtI%2Fa8sU20nHaFa8rZwOcGhxK39zFsKZJdJeavSEb8Ka7kAVpf4fEPEsH1lWkTijo1wsZhcKbm5cI5gH5PyC2lnYQ41yX6Sk8YVpUoiIJymayCiYaXk7ZlFl7WA127G1Dc%2Bsfq%2F1kOAQmwRmC0A8UxJVEDHJfeLpRm9%2BT62KXruz2hnzgLwwBoLslvI&X-Amz-Signature=e240687b7837f3732c319d7586baed0e169427a1a20c69b2ec9deed3a36dd237&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
