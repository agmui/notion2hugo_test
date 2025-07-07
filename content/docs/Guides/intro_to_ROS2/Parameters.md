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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRDU6CY%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCsuy98WBn49UEl1P1AnwDo55rwRHkubfCJ4RnOjSRi5QIgHtB3qoiz7yOenvaCkKZh44JLpq%2BhMqpNmvzF1kXOQkcq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDP%2BYdGesmAWxPhSZXSrcAyXasumutZdGnedUYJ%2BPaRzOEHCAChjeiEm%2BqM1GxM7Tk%2FmXE%2BE6rcku%2FVHvM6eNa%2Fb4G8kaMK3i49YlRR8o4FsyBv%2BlcNla4YknNJbKGU1btlCqLiRCgTMtojMbpsKDs0I49c8KysxGM0f3PzrE3z5Zb2BlnAsMRiF%2FWJ2aRWOUvY%2B2rtt%2BxKVcXAw88stQEcfH9t1nhJqHWikt6eaSrHpauKEFwrRdDYvZxdSVczayWmeTDJOCki2icorHYh3ZVFRtBoAyh3eNL2%2FeNJQwpAYPkBC1ZJy0vnSbtFUcxcLglXFLHa4EEpOWnh66DRov3zkDgtMVQAcktfTHa4vHp5ZeeU1BCKE4zn78tIVvMxOpnXmzssYkCM8GBRkbm%2BgJ6v4BIu8Q4ZXaZF%2FL6fq8g0Qv7AsPmVodissWVTUHVkBAXaWBVlWnBwVhFgkhyAoUTmdmFFkQpoNSz4eKW2IQ2IA%2BR%2ByXuTykCGoPMi%2FEJlLhEGy5c2HPDmiQnK8leEgkT2X4MDjGV6ebzIke3pHjC%2FN1dwJDa2C7H8tL%2BVysYpuUyKlzSSL0IR2JfCNx0LSLl1S7L5Wd4BWZhyhuOKQFnGngtDlnQUC%2FxORugh1IdVGM%2FBRNUhNIKNqKcA7nMOe3rcMGOqUBP2c3sqzKwUdhkbCiwbaR1HNagvIqkKaetvX857u6WeEP66d8kkz1CVo2nTNqvWvhdUgIeA4PMThVBiZI%2B1vo98K5fSKNou6mH5RbEjKUXPUvh%2BTfsZfiY8Li4enCfkn1dIlzrHHhyD9lw7QLtSpujD4nKfwaPXIr1ucGyUhsEjedGNDRjklXTI1%2F1oTsHpUSMBdvgd%2FpobgUzyHKThN4oj10ifUn&X-Amz-Signature=ebb928c4f86e7d0217e7149fb9e3a6addcfcd5338c57783ec33cf15a77437b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
