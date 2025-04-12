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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOLEW5P%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIF7QuGKAQKRBDZHJ7fllm9TUK4REwKXPK2KaHo7RwGCTAiEAtKL8wx0Ym%2F9ef7t7xm9sTfN0zhCGgaGRrKkdKRKRRUYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECTrBoUWqCOi6SYLyrcA65SNjlEPlsemQKSmWAPGsrWuN25QWMm0Cy0ACbDv0vaXZVcOTE0c25SdJshg7h02e2XNtkx0YPkHbXz5SDEHi0LCrlVCdEeZSwzo1dTkv9yKfGWwpPw0Ix6wPm1Pxjg7z4bySyfV6SBeTltAz8oXi06my6ZyJot1UB1Vc7fUSKuuUFg4WX%2BWFpBW7fCXe%2FYMFrOSlStYKh%2F8fMydB3lGhJUbXdZHNeR8way%2Foz2AovM9HGW4WeEegoBhif5zXo7%2FKlFkx3HyxpJ%2BVqRLuHR381qGnIUS%2BMDNNIKc%2BAYQLT%2FiVJiixhT8y0iMGOdBfa1Qvi1Hiy33HthkNafDk48oYB%2BeYGeU7r%2FrC18KuPw5XnZAhMXrKSAOVmc7GE%2FVHlUTame70X2l24VMCfrEm%2FwDCcfe%2BrobmOqlLOpnhTz0NppJk8lUZUXNT8j0nEGUDyz8Tmikt5nFeK9%2B%2BBueKPoEOr%2FVvLMRCHbxKpHx1ZrNLscqv2meqYMcy4ghIfHRVDMMT7mvvPmSkfhUDRdYcvAVhFe%2FPWzsjemDHWKvVRGbWYHt%2F5dm0syTa0Ok3zbnv%2BySKHkUiROMf%2BHt01Yy%2BlX%2FlwxJSbi5h%2BVO0pTa5L0Nmk20oFm3BFgMe%2BkkYuYMOb66b8GOqUBv11aV2MrexlB1I6koH%2B0OYcbB8qyh06p8MGMcSNOahgC0nkGJ8WqQiWCb6oheXFAuSPsvhI390tI2ZGao4GYxyZmY68hVv%2FEnAwmefR0nTXSbRMTunTcmCMAA%2Bje3v2lr094hClntMt9seOz0YCGz9ySH1pAi1grY0GvHvX57zmyp84xeWtzLLwV%2BnQkV%2B6LuUf6WrAzy%2F8M4%2FGm9FyHRa0meYh%2B&X-Amz-Signature=f31dfe08f5b8514b41f03b33c500276c8b48624dc9da9760099b1bcf6f8834b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
