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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMDJUQKA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFRmNCBKFBI2IGkx5BPwwtg1JML%2FglrWgf%2FqjSFeqQKsAiBRM0EorjUuuwwZJ3tr4PA3NrkO%2BLLiTiWjYsnyl21K3ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMA8Z7nz4%2BcanETDCpKtwD67U9cgmv9zfaVruGhdLH6iiyZgJkKSNq0nlLKB6ys7KwAo8P9Bn%2FlK7uK3DZML7DDu56qrZ9vZohVKoz4FVEWMqVRBnCK%2B247kvonxHksoLZQ3noyT0P5snTCjrlM%2FMN%2Bw5pcvKQpi%2FPpCZNH8n5hN7%2B%2B0niPp6n32eC4x6qAIqa9HcRa7VrL4B4KBjQ8OCh7f78mpytcMejVJw%2F5gGAjVTNulCsLN%2BpI0anB6vZgBnnBvFYM6%2BBwX0Jbs7a1EKilWENrznvOdcl9xMNZ1Oa3rD2ysIxhbV5jVGoJ3UwYKXdYTtoLwcPoTFRrP6tx8VspXu8i2GXwZo6uxCZ2OUKRNVDG1tC18U3lQlNu6yszE5rWMOk1MW17HVjbCzK%2F%2FNW%2F8Je1%2BDOkYshWwmD3wyZ82d26o9q2I9YXjV%2F6jeC31Z%2F7bkDdXFwRbJ2HdAMV4hIbOAQuFDN%2B5V72tu1evE2Z6oLL2cDAQpc1qI3%2B%2Fu1ML2K%2FkujskfkuA3Xgq6u9AQm%2B9W3Pq3U%2F2ZpPO6fVGBUsQZZQx3liz8xgkDqURD5Drxag%2BmT19y23DU0whXShU6Z0oNAYYD1L7Qa58PStsl0WIuQR%2BnrISXZYwYxwehDsjjIemC1RN7Wc9IZdccwjOu0vgY6pgF3GFEeShsOQy9iPZUI%2FzkvvIIB%2B31KGij%2F7wDXPReo%2F%2B9KtLo%2B6L6Id6ggOVog2PqzOK4LGPFlAYCaWU4K%2BucInemiQy2WjoB1fRdAVLe1YwGVC%2Bk400zB0UlphBxtucWZRItRpeDdZRsiDFcV3wfQtjO09Yvxw2%2F2ooFHNrE8a4hB0MyV%2FxuSIlT7C1Zyw2B5JFvGhGhhKMyFhBRm5%2F0BhyQsJ6Mk&X-Amz-Signature=7c8bd8e69b23abb70c05e77f60e1177e6c8d0d27f5fd12b9daf62e419b6c045f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
