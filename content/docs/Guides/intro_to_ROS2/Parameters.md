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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKU7UCTU%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCVEbxCnIUlgRpGov7rGV%2FdzLIMh100p1M1a%2BaOU8WZdgIgbEjEVdTe74dMUuccU7pSC8TveZljnh4q%2FXYKzqwL66sqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBjhMmcUBwl9E7yTCrcA%2BeBPdiANzEE2Tl6SlTDXj5v6P%2FjGDYK1ITPajx%2B%2B1BHAf5FIZXmK9dtmy0zflETPa9abzlPY5XLgFta3D4VHs5IrO%2BO23QkIQku8ki2U3hNu6%2BMw6rn1Gxq2yurXP1F7Nbpr8DYbPrQKX%2BbHwZ%2B7WBMx8Wx%2FT%2B2356aIkI557FdElDp18gtVtIyWF02VxPNNE7lYrZ1jtucGf8mimnixaR0RXp9LET1yfodlwb5D9un1xT9wtVMUA57%2By%2BrgO%2FnOhoRah4BJpbdw5K6ds0zI0UV2uCfgxMsHXVBetu1kstdC085kfiVN7waCHbW3yOHm2BC4uvbXU%2F18ESMR9hXUHdC%2Bi4qIbqTjB5Hi0wVJuSYbCKiOCbJVJg9%2BqtHV%2FAqaX99jzhZ2wbsZc8rcqFh0X%2Fr4Lj0VYpdiz3yfc7gENCBdhllbleQbGmrbLjwl3PJ84LFaSOfMigVn4vv3UBc%2BjvanBmBHzrucz59E40vgCkPvInyyw0yAngsoBRTHHvavVl7TsDmiDPBd4REXgdFzughoGmM7svF2S5j0nF0Ha46OBXV1RMG9310Wqxwx%2BXbuETq%2BU4T%2B4NFSrVh2X4D4ktROm9EmUH2P53xo1vGjKUjquNq%2Fct5S1FlwrhVMNy85rwGOqUBt4k1UajbYrshR%2FlLSvxo8hE0E65DbJik%2F1wrCktjVjTpDg%2BhWNgvmy9OqV6KrgCAyaYXSW5kDsK2ngr7F0ueXEkM9lKvRH0QCgwg2uWscYgqlD3ZjYf7fbdN935CYT%2BiW1lG0jCBStgCh9pZdj3F2w3hmjiLXORTmSWLVg7x7DswUmY6HDfIArSIZYs6ww6U8biru0T%2BBDoji8PH7ivbXVvOOdl5&X-Amz-Signature=8fb071b44c76e1a1565f22992bd298b5fe5bb23e1b8dc66219ff3d09dac2759b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
