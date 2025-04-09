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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TXVRCL5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCW3cFOLfbe23SOcWs330boczii2FKRG8JS%2FVee1O3NcAIgMbMDyg2XRt%2FEca6qOJXy0QLMdwLq9tdT8QT9ir1jbo8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGbS0bGmQNacH6v7CrcA3MO5JTaD%2BZF3%2BWnd6lTS3qhd0xdffRuWdMFnawVHFvKeF6NtUs7F22ZvRr2XkF%2BYNHNxP%2B1tuGj3BkOn9JXgONY16y6Mhr%2F0s3TRH00mTlgJVsrGuqs6vLhk4ljwK1AKdTvaGR5KvuEPk0Cs3C5V%2BRfhndaZB6PQd7n1v3ai%2F2RgK%2F13KESWVo37G1w1C7po3YR0X8EHRMxAqzy8NtGdIQ6%2FEOGZDvyloW8ktH36Aty5aTCyM2dJI6AULMl8I9FaMNUOy9kQieulX3ceivL2nM%2Fd9OPCspHHwuSIeKziHHbdexrSbK4PmYH5luYW28pmMPrQ0iFF5dcTR6i5UeVsF2KUIVJSbjeEXAv%2FyawJsLcu3UtG2YWDB06%2Fh1q27vXBnE6DdKjWf4cCzXFzS7Wa%2FiLscSkAD%2BnhzZFhFX2bLP5lCe0hj238VVzw9NtqUomtgCuI5%2F1eqcpmE1WwqucrMioIMfLyIrtCO7y0IrymDIpBVUvXxYkDbx%2Fwx0zXI0Wab21h1Y1u57u6L34INIQhrapwkDNvYAe1%2Fogu66rLRZXlS7w465c1kHkWxd6%2FIpJXtywwE9lPAE1AI%2FLO9FJIvivBpmcq%2FbW7jqhAxLv2X8f%2FBdTYGoj7U104Z41MMr62r8GOqUBJ2JiuJaPQqf%2FJH%2FPDwTLkxHRbTEdr%2BJGfKTjQhyYo4PRFf3AmhplqKW9FI1rfzVhAz2UfoF0pF1J8QrD79%2FGQ5gTeLCUifO3xXeEUlFbVsqs3ALXwF035VMaf%2BFoaZeKKyom91rxS5yTA4OolkZ%2BuYP3enIY2Rx4D%2BNfAEyDwh1To1lRMlvhfl1birRXyUNrS3szfyHPXd10YJU6sDS7hgTj7Jwn&X-Amz-Signature=9ec6c8f32fffc7e523a833087a7000ce5e63089ab1d2fb7d4c70ef83cebd7ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
