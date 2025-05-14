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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHMLF7R%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCc%2FsSCrRRxyD3vufqpnL2v3x0w1FrB7OqnIv7knRiQkgIgSgnnKkTKTjEb0SS49q9RpoIBTULCYrzZhUsxRIq4QMAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0w7n268Ea%2FPqFMMSrcA3qG%2FqROc1jy2Y5AQSP4Ehsd1f%2FOkHdoo3HlhiRCiVxEIiTL%2FlsgewUmAiXPMrlebBDGnYPYnKF1ljBnaVPAoFs9SZP%2Bvlsd3PjT3cb0kmpgXZf2N%2FPZfA6PuDfpt9C4Ox88WCAYRB5BaNNEnbieuNH2r1Lzmx1qKU%2FWSItoH3iN0%2F%2FgClno%2BHh6r5WTIp%2FdyGhwltJHecXpZEkoB604xFfr5f8H1Dhca1AeXNwVQFao2kFJGBNcCzg%2BkysyIuYtQt0o6sRFnXjtzpZf5sA2h8N%2B6qa2ePda1SPEqZ81Y%2B%2FMYgCbkYS9wXBnTzE6TnLvmbvw5mPQm6T3YCztRArCe%2F3o2gelaMSVyTanV43vj4kyNm0ndBQ52bKTB4ATNdcnvuRC0M1I5Ahb0b8x6MLCxQVul8klc%2BcvssNROENQeRTQFOOVSdS3eU0PGl6RU%2Fbob3XKfCUkMAdQH4EEP4ANWbYlduvX6REXK9T6HMxpg0l1D%2FQEt8Iayh0cVmLGPKX%2FTU8GF9nWjuQGp%2BCzzoNx1pu3jK8RuvAZhHhgqoyaqsXssUPPaChO0s1VVXtFNV4vv%2Br5XhQbiGjC790afYMTkLjRUPjGeMjk7R%2FSmAEX%2Fmxrmx70yEbyxWTNTyOEMLqgkMEGOqUB6rf%2BrIjd4Xw0mz1UUIRMa4UkBGhjNEDnyWTycRFsiufSHUky0%2FBMjd%2F5123ft4%2B%2F%2BWlA4Jhwr1zYHoq6qH0uGUoCJ39ajvsDfy1ptLY9VNDuUsNXUZ2IPTe1hPoSse6nFBMTGSb3f8Iur7mrOHk4Q9sWd18qCKnsutkyG3UHWWmhXIEJGO95X%2Fw4uZBt3mObYYu7QRfdsdqQ01h7gI6FWLNYaLLI&X-Amz-Signature=4fd094165540bac474c0681512893a59249f1229271a7c9807b78c86c7652d21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
