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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466364PMMWC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBqQqHSE4LCHUEUKKrqIfQ3tggvMUy1JAYoSLf7a%2FdEqAiEA3lFlMGJbEJ6fmfJBp8SrLSUNOrKjUVncsXTq0skxvSAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFbz8OFwF%2BJNIYLBoCrcA%2BAoa7MwIPu7mF70ywT4XkyEMQpzIEYZU4EaMhRk2o1EWHBIO1PKQmtPo8spILXN2Vu22EKWfbOJwXLnv2prpc3X5ZKbqERG0GtNCRMw1Q%2F3H2De9iETOERKihEF1CAZ1k8HG5FuwA1cl%2Ftahrfaj7aYatnibMTCLJIbgxcdq74608Ec%2FBT7gptr3eG0sgHmWlKCaGdbKD5GEep%2BKgd0UpVG7vklk35CW9CV6Xi7dX%2B0nuB7UjZKRVo7sudYnkFCqexYiA86ZqFPGSPqH%2FyeQxSLBqCmu9s%2BTnH8PVjFo43YNMCTHv5hexjp6SpTv0%2FixnIavzEfJVuCG7ojC1%2BT9Oxaz5WxqifxS0ZSw60FFFqzzYF%2Fme41hgBLx%2BFM4YAs%2FaMIehUANKaClJyq5QgTu7tyqYaoHpFdPGXPI3tJ%2BOLpQwVOtD147GpE8zla43hwv1O%2BZYNivEGUfdV4FzadzTOhVKRrjMKGVW49Pv53yZOYyYyk9%2Bwx4DfEY9Hf3JAmGNVtc20Fjj%2FWFAjKASeKe40VWEkX3a6XeuR78ukyMgdWY8bAR29gEZXeyUQdeK3UWv%2FFQobWsuUfgrY3pj2WzjPueMoen4ozITzAgZ5ZnXK4HJpcrT7Sm8RNFCQdMLufiL0GOqUB0V4BrBD5qyAAOqsfVBgm5RPqI7OWcjhOy9gO9rGxI0PrcEY8F1Dy6DxONxFb28RGq75z9VjpJbTTIGUxAFjzqcfL5sWgqjSICKeRbVsBEa7hmwsCOETIIUfflh%2FnAvXt8yXz%2Fh1mP8fSShTkLOMhjFyIgSE4Fwf%2FUCFfKKiZAmD6%2FcNFEprpiSNjayBW55mfM8Pf%2BEy8TwaC%2F5d0YEVWf21hgkn3&X-Amz-Signature=8f035be1e91ab79967ab0723754090cb4c7c51113d2dca361fbfc2289d9d3167&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
