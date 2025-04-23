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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMVBVYL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICcCTsdXZbuX3%2ByiIMnKOkVTkhLqNAvyi8qhyAC9Jc6MAiEAi0OKdjvj6NplGjx60AxtDPVwgdDDxqG9MWM9x3uhWgYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWCqYAlrmDCXJ4IKCrcA1yodqhJ%2FGUFZrhTBZ%2FyNHh63SOiDXPbXyevb7YA0LLeuCKohhkHB93eEWGekGKeO42iOWqnki2B3x0xtyC8lbY4CIVcIyep6m%2BLskVy3vvGeysYnwqrKS%2FGfy8uHu09FC8n%2FP7fVhKeDzhgctgMYk1O1jWlRnjuNXSeEccILbQvXO4cLqtZqpgHHlasI0Pf8OCqG4yXaTwRCEloeEuFZ2CRdZXnAO4XffwF408ESuNdbeAbVKzdZYjova4TRRqI59yl2njWv5LwmIVuKP127vkU65E9CmTPHsUy5SY5eoaFnKRY4si4bt%2BJ2%2BjdYX7FWkA0yFKfypodXMlq4chRS2B9MLUfW1D%2F%2FxtbBMVGeXoLWxjqHRK0QkuQPeKIqG3buZ6n7HrO%2F3%2FNJu2QOFUKfGOKdOw6veD%2BRyYvESIMeBwEjXPdnjlJc38cCTgOs2DLLEoL3jde5vNnCZc7Y8ru9MAJZzMCNVIJqFTCm28ygAhQ%2B6CumUaTsbbdTMuJmJaqE1x%2FFklfxQEpStG8j3edmLwBXRIDV%2FjxCRwzgmP6YraqWa2s0XSZi4ZQzDoxp1%2BxQXUFQsjpAQqmzsHHOSvR7nYvJfWN%2Fdi11Lr%2FIQY1FwA0%2BPKf%2BexNa%2BIu%2BfUFMNiNpcAGOqUBY3JMvmm77lRrx82H4F0q9PYMh0DVJsg46lwZWRURR67cL6ez8StQphDbxffPRM5tTgPvSBZGs5Jq0hMKERiuhq7DEgXPtPTVZgGFhJvvRux6g%2B1nCtuDC8V%2BmCdXitM9MKBW%2FkcpNEVipL4ILmRl9nLEbpZpuyrUUj47WWJd5ImNJkIVA3dt4qaEJpY%2BPEkrb1Ujl%2FjvajuZxdryHSBXLfuULt7E&X-Amz-Signature=b06e4264139bf696f379b08c58fb2f6f6d6936e94c99507a70ae00ce90972a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
