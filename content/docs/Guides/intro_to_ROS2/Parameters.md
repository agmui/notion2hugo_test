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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMKLQVH2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEFBx2vgLLUiI7bKVBtLMwHVMnVqGCM2ko5%2BV%2FbmFc1OAiEAkwz2KB0yDeYVEJQGK20kmBw9XnuJ3YkarOu20rtLyskqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWL1P%2FdeRsSL2SWgircA%2BNlG1Vit7putfY4HfCXf4GkJoDYNgs034x0cvMBhX4PnJ4KItWY2sJFOc%2BPNbUbdPuMKRbNQHb9lWpGvqjDYIsY%2FTlud1Jy8B4mn6lq7HERNrQ4ZRl%2BWYOqUGij4xgTh0pN6EmkTM76098%2FdrSs4%2FzkqaXg9PjjiPuXHN74FUtjSjbCvQykMtDJU7WYNOsR7DqAZw9N5iPTYL%2Fuiff1njPbzO0zp%2FwsYCatElV7cEIAl2Ji9qEZvNwJSOUr33EOO6v%2BeYNtCMuDHl0xKvmg6BARKg7Lb7gv5OOZilDcgCdUHHWXFCxvJMOrO0WJwHAMyLyCCdPu8l%2BMevUB%2F56O9vIkSCd%2FOnEj6UL%2FzSYOUpv5ntnctXQBKpvjXygN4xxPXWnvTPMxhCS2LyUtKmQ9V83rhZBFPIHP12tdg25a6W0I45F4Ne1nHVcxekq2j2kCQUudgW442nRWEpNqya%2Feq9tK20JNzEPFxuZfS1PWQxTQfI9a5xHyx3vXLAqeO6GHL4rgugpsLABnxQ4d33%2FGiEGprvRPy2a8d4%2BTIdldPj2Rfg7wC2zhkn3xj7xrnsaTAJ%2BLtc7W5g8bkYA4RW9oZ2VM7dIJeg0HspMFlJHylirm1WfXNoUw%2FBZVdZYqMPa4rcIGOqUBgisx06PgyvkIbP%2FNwxPz7rPORA3Dd2eV5w4lj18M7nO8JWJAd4zKT8930lTf%2BEzsfapVbAjm4JtX4gVMz%2BPr9sih00%2BD95TkQOSyr9GK4MHZQ%2B9M25BMvWbVHyPAOpS8sP2SRcklLJyHFu6aE1wVze2YEMkXbUll3yXzikGAUPF0PYS3eqkNzNyC5nZxPBXP5iqUkCkzsgPZQ9fCrf69twHjpraH&X-Amz-Signature=3b15a6c9a84c294588578dbe9b831d822c11b2a2c893134466a190cdee4d0f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
