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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI6YJVGE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAivn%2FDvnyN%2Bm9T8xI75xKF7Mqv3QEIoHVb%2FlHX6lk2JAiEA8mid59czVujnuMFc8KUQ%2BRd14VkATH0W6OPqthDneNcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDABhi%2BGAf8fIyZ0wPCrcA1tKC6fRzzXCcoXY2YR9SaI4q1mzvzoHv0aGVEdGYoiEqSt7D47w5pBQ%2Bc3KPe7%2FgF04aoEPIVeu6I1YzO%2FwUlNalpfSjHJ03hafjrKu0GBCvk8VLedU21peZ01gNPfVsuxz6mQFPtlERqdyvnDhc%2B6pI1Mwfc9sXb2t6Qhpbibq%2FsEw35WMGQ1Uq1rhR%2BKTeJwMb9Hcxl652mqF%2FI4aYxa5J%2BS3Jk2WjMiNDA47ouaaUDHPwsbQH9J%2FRgQ8gcabRkk6RXTAaz%2FHPzuO5X8bRrnOCO9E%2FZxXrjjTnFhrLnbS1vVzYoGFIV6l20pH7rVXMON4oTFNcMdy%2F%2FEHi7WPHkvcSBk3sF9YwMUdpJeuVzd3H6hC7lO8%2F7FxHPUrCEymdi5lYmmHcFuaePHosDt9PoW9aU311Pft9AfReLXeK0WqoUUlkYelHdlTqfP1eJAXXpRCImPs5YNOYYrVweP%2FZflDOGsug%2F%2FINVQ4xU3DnCOnflVX1k2ybh63w2EA4q6co9adf1R%2BqhgQXntIVFrgTgwPDs86Gz5fLK5RHJ56WDyOCBDPyWE%2BUaRW6bkYfbVbKFFyc8b%2FVdewfkAQUE9CeEejfuip8d3fSqOOx2hwBj8i7ycyON%2BtnDtJldojMI%2F41cMGOqUBA23SjkoI6XwxY%2Fj%2F121QOK8kDXyu%2BcCXDKfEeBfaTj0jQQjXBYm8HmnR96BNtGWn8w0nSkpGPuTRHMznHG%2BRqSSNWMtY9Rbl9QOeuH0ZJ5QtNhUTPuUW%2Fg%2FeN6ocJqp1g37d6%2FdTeEdb%2BvRQuhG8fNQ7%2BSF5rN2F8Q6bXk1cCUIs3TdZZkHrZC3zweZFyILDPyDkmnELMY8chRnDQqcwWt%2FeqMi0&X-Amz-Signature=acbfa1c0f481a0647ab6e002bd195b196161a2b5208c588a195cad8ab12f0b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
