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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LPSPKHU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOXAWlm%2FqI4j4AwYikqmzY0ZZeZNaF3sBYZGYSJ51HXAiEA6s1sUvvRwyGXtJSbkrlEmYQed7C0dsBHTXToPXJbwUsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDLGaWfX71BijLNYCfCrcA64FCHWHa4HNi56HETBj%2FVikDO9twlSZUwLPS7jjSstk4NMh7H%2B68SkQOihdoipYnnKn9IWPDdBAi4kIyFG6mHkFP0AhEb7wjM%2B5ehiuG1cflu9brgZ5JCRVqOle%2FwTjE%2FNCT%2FNHyvMreRk%2BSrEyQuUbUBEDhvdxNtpegogJUdOAracV%2BMgPkUfQBMG9oI3GeS56V%2BYIa%2F1KzXfOMV4dhzuDjRyvw%2F3nSAaGxjGkNhwDBb8qyO1UA6Jm%2FptMRqhEhla1ZbsKGiYlL0CdLohyEEDgzKM64Jm9XlHEgIi61kbEM7tei2CkCCKyPy62RKcJyNuOajDvzlI5h3pW3BXZB2FXPeIYr3%2BWJxOHlx71QRr0GP7YU3dZy5Cu02Cd%2B94NnX4DUQphyjYmuOCR2P%2BM90cBI%2B3foo6Rl98cpC%2BHTQFuXPX8GhlB5mmhoSOR8YdeVux2J0XzGVfJuHx5SemgAjAcqmQoi5Wa1gE5vlUpZMPjH8AUFTk%2BwSWQ6Z9%2F69qcKjN%2FmpcFYTwgtilNm85%2B%2BRlx4VPhcb26LqGMJ0QpkwVZsbp2HtbE92NoPVCvaF90izsDgidsm%2BozxcOLCZovZ5Rl88uV6SG6CdsYRu7WgVQP4pG%2FvilO0mbBf3QoMObT0r8GOqUBypbIeER1Y7MaTFdJPw%2F86ZGEO0PxhqRmJfI2DBI0Eusks%2FOeVxDL19JsfdyytaE5qHOwJinA2oRjleVrC64yiaWyj%2BbX29bgeQyBhNYTziTXCxr5swBKvDMf%2B0sqAFT5h5Q9TR6Qr6qyBpzmJaFKyuBoixtKScEr6IyBewh00eGQ9GQ79RCAwAT4iah3kBfPvY1jJBIYPwFv1neK4nZarfy%2BlCMf&X-Amz-Signature=bf8bd2e6fbf72ff19edae97bc4747edff47abebbf804ee0d719f8b63c678fa33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
