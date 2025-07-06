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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QIOHMI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDU3IVxSyEAfDt1aAEJyg4AdTAaGRfSourXV4KxZ4ARTwIgR81TjmUznKSwLvfIORzLOVwsVrYJ%2BCzRlfwDH7UHEWYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDKngm6c1ev99vOLpircAy3yufGMaJhc4to5krTOWsmbXi%2FbPupI%2FUZo%2Fy3PBB4lbNdLk6mwYvVnOkKCGNCaVJ1sLcGrAgixXJaWJbIK5iz52XXspYycV%2BUTX8UpBj4uC2F%2BTJvYpU2jjC8iFCjYgt4Vy4WsrJUBmVkci%2FsTkhXbyQPVVSUo18TqfRWrrJAi5NpP5JugogszdBzeWMjvau4XmzJgbPQ22n5BLQ0hZsZvlIPVHUFY48CftbX%2Fp1hvq22c6ARnde%2BAYjDkISw6LZTYETurXW4ViBjYbhm8vow45oeRoPvePYCOhUYXSK0eGwY0DoZ%2F334Dd3oHnllyzEpDlpac%2BiAqmR38cggV2ieAQfEW5fkqQzKX8myC1SNwYhRI2VSx7ELDsuoDHknPUfwzV8H4sEpO%2FZ4CjopJDT%2F5XSsKkvwSsEKvNvK%2FSEFoNVGjYYplhCImAM8BErOZcbTcsR%2B9CwiRch%2FQaVyMIoNXAe5s3W5oEQE99LZLUoabmlscbppVXtPpaby10ygUJkcj7VGWHpNF%2FBh4gLgKJkJoatya1OCaV%2FRNJVwsk5mQIcabRJBugnhv92krMdq8T9Aw0zDBYfwGl%2F3vx9q4Zlxgngq9VXOnVLhe69Bn4a0aorbYlSaHs9MEaMjwMJWAp8MGOqUB0Wl%2B%2B1BoOkyqk%2FJvLf1SM6xiB8eLIHCbREJVXITgA0L9uVPgHP339jRsJ%2FwdYx9LM1aEe3hEzDdeQxOPs%2BBiv2hgycZhBSJIT3newsPu6sRC7n8YMK6qRd8NQFjde18YvmZ%2BQjWXgwp6Gz8sbidoxq4ZceFr1%2BvtuZB0VpSdxNViSgRbOZSWKQr7q0plev11Ey52DzQaULM3JpKrrwXT2x1GTpgD&X-Amz-Signature=e35627f794ca87b46c0e3be1793f6af864806265314f49050f8d8af732234bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
