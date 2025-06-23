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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6KIEWH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEmKSk%2BecYUt5RmA5nLgRhGGdLDloysDnyHhphqz%2BKK2AiAuMH9nU1B%2FMFpq0MAeQx6XzVsevztuBHy4V4HnQaFSUCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMJiYlIrbRO0Z2zN9LKtwD4MxnWA5xJW%2Fpr06kYL7VCf78Tz1rUgGxkHXEQe5rjA%2FgCdMGWi3DNHI0ShT178p03N%2FGsMIc2tiBBHSNhhi6CrFSejoQahu0PCdWzNa6TEfZfDOBSyZ%2Fh2YKhBo1KP%2F%2F0lR9oGjf%2B%2BkGb65%2BmTVMx1c1WDOMX9uTlgtBXxjeYOytDYG566sdYVMpZNIYmYR55P9Qcc8g%2FGAs0y%2FykiEDlv0dO0dzggwvg7AiqCOqrGYN9TJcqym4chN0UCNzFIYNSLUMh8EE1WAvi0jE7AnsFztbRm0YbyXzTIZlpYjqwwATsxzHuxacQ7pL0f6qIiuVUrhiR9hztHm9qnDaKaYx3cjiTqIxD1HiqLlwgdwte0CgdG4mzUGWMNrM0W0%2BTbmVGpKhjqWq3Yb1ywzBqyGORYkQKNBzROCeEgoMLKFbOCwbSOi7VZwXzh6uIdjnjS3doCpDh6YqubhGD5siRkdUPO%2FT5ZcNOlcOzwNd9zJ%2F9ztYm%2B54CUllQnIKT9Yku3PpoluiwTG5V0iE5%2FPNUFx0QYU6AOyjmf3v1lCeXtVE8Uo53SHWIVTXClM2K3awwDmCLS25vL5EMtQrEAwpadBZ%2Fi%2F8RDkUlGdxX6np7JbTwExAwkRx0MO9ZSu9Kaow1LDkwgY6pgFG3bSz5XBbkNeghd0CnHsBHGvweuaSlGMPl7pG61Uqru5sBHACFU66LJLgw9DP1VhW8x73MlrRKMhmkvL86QVncw4su1LkTlIy7qyp8L7RCBr3cVjG1NsI9%2BZiYCAh2ywSbiIXzemdM6NoAXvAqEAZp1mlanbOPWio5myQ1rMrPqqSy9tT6FpPmntKI4d6TdQ3vkpnPV3utzqytV1h1sTm8%2FLX380s&X-Amz-Signature=19fabfd1f78070291c2b37cc24ae3d1e4702e9283fa952c8819896679c45ee7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
