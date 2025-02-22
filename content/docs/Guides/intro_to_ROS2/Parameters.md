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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662INAZKTE%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMkDWgJrvI10Q%2BAS1Q5Mu4R7HLELgKgtxAf%2BROMTLL0AiAEI4Y2oIZxh1T%2FgEHNHAfs9PzlT13u0sgqCZLJY3SWuiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzeZ6GKKHSQGYu7UKtwDWX%2Bq0bMH4gPLSUd1rWzC0Z%2FsCmghwV5NdX%2BCaj5yP8XFAayQIe%2BKJ8E8QpKJDii0z7ImraknPMYXBY%2FFmBFLM%2B8Whepr2Pom418M9DMBGVeYc4GXBrzWoxWyvzAeXsm9OOw%2BZqp1sDOVghzNpzrttQwV1gOxMveBlByJWdDG177aNIanp7DfTUACdEAV3MPaF1dOoMbmEOafnRU2ZW1ANm0o892KIon0WIWtD%2FNNK%2F3ILmRAVWPkvAjV3sR2NmPh2u%2FCZ%2BbpOZgmC40HJnWNGupygZWWTURVBsl5TfN%2F4J9jpyh38yhuk9x3tPx6U5gKxM6eeojCXBuoFxJjTHpnGTLQj5qAjbOtoI1vZrt9FSDLWbHqPDU1dAhoMooZGdhpPNs2cyh35iEFpBmcU%2FL1mFILuDa1w%2BGqccG8jm8QM1jjyqaiEW4dAQEBRXIGPa5IaXn2LYg8coXxiPNlNItr2LaNDU9341NRUbkVozHAk1Dbuin%2BFlaDm8r%2BUZ2hWAFAtRmEgLHClkzGQODXLCxhg4Bsc9gFbmjeC79Nu5GKOn%2BSBgP6CCFCLS4DON7B3Ng7n344npB1P%2F08FnKb0hkd9I3kcOdIHnl%2B9gYmA94HlqRm1b9gWM95PK96HIswqrHkvQY6pgH%2FhE42eCrhtFhoPPtTaduxGfFjygnWRi9TEqW8fvmpnKPzx1CZ99reIz012sRihrjaQ5kOTSQSVLhp5%2FnLQFyQzind2kqqR4CxjGFIsMdQh2zIbAqCzvVbLuWOOZjXXjhIGvZ%2BAqJWXXrdu1lm0dVQKqSkT5Q4akbEC%2FjaIPbThnmCuNv9ppRZcKKdxOBfUvBKrpnBNalX2muKQNsRSJIz6hLFyeN5&X-Amz-Signature=fda068fcc72e8f98aa4dcb374944a91fc414e4396f23eb2e79eddf5bdc13ed5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
