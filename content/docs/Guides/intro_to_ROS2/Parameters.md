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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULU2S25V%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBv7Vk%2F2LZrt%2BwivjhQWEGDTBzgFPWseoOzCbx9uVOLoAiEAz0w%2BYvwW6Vc9N7PdyTm6GSoILbqfG7Yz6DVLIUjUa4kqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbIBVg54p2%2FgMZcwyrcA%2FTf2XBuvTsXp00mZrLmcPd6m5zp2mBZZnCuZ%2Bxo69bOAfQBb4%2B3JsWjI%2FPE46%2BNIx98rg6J9AI1avi6WaPPKTNhI2eo5lSwnW3ZUhFr%2BPKurSPH9bTXWAZPzzz%2FlkDN3yy4Y21X66M5TCHsRaIv0QgyfCLRvt9dz%2B8Ne2mtaKYQqSH0bxBW2Titp5ogo2xfnJohq1djOjUxN45VnLT6JG5jHiXHg8c%2BRgkUkRsKpmdAbcEwkAsPy7pJVDVJ1SPENx8dFcL6N5vw%2F8rs6A5WQQkqG0s3JNx4D6%2FBKoLn5Cdu8tPYbW6plzXnvTjwtbe4Cprw8B4P570ANtvwOFHrpeh%2FPLVgs74xlr%2BnszKzw9pOWmMEdsCNvME9OnPpfB4aep%2FOrbhFAdlp7OtgkMP%2FRuFpzutmVxmcdqVjfnYvdwIdQSXTkaEdR4YICEbWdnJapr1KbaEPHz049qo1qTLF9uVicV1CfXvJkuFt2%2F31sxhVHeA44UmqC2O3M%2FmJB2BtdNkWNWk3LhH3MznITorwQDMsSCGDIVZhsgjc4qpvnn4e30zGxhNPzf%2BBkKJ6JQsDJFgKGFAQEDHXeXC3UVO1j6%2B%2BMPF%2BWHeep4hlGXm41ZL4i7u3LXEOFQ9NejkxMKXE%2BcAGOqUBJIiFkWC1B6b4Q58CTyysUzVEYJ%2Bhva93Lc9v3q4n1hCdI0Mn0hzrJ2aH%2FdEb27h6MkOUjRkYonSzkM3QloicphCRIF2vdAVp%2FiIXIWBg18v6DHUlkTNCY9Q0LOk4ssO6iwRtJjDj2yL8BOX3tykvC8Fqu3VhoNfsq%2BBqj3Eaq5x1Nft%2BjCLk4LEXpzm9DC7JeMpGqRDkGXP9p69DIC3E1TIKvur%2B&X-Amz-Signature=881645d7eb5fc7ff1429c77c6164754e77e43bc9e107cff539bbb9716b4f7c12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
