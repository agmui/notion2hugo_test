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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CBIR5LV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0lQXoqLQYUyCOZ2LZgSmYJWY1RDads7KnSf6X7Q9yxAiEAhaElOZ1ZSVoWShqxHIbcMRlru8zfty7FG%2BHSBHQOo3oqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhTMhlY80l1lYZaJSrcA%2FmzqT5Ua3AkuyxVBE6FpIdbg0xBiT2ST0ECRJITPeufdNVTxRDu243aulSVImI6O1I%2F0Cshq9uvJhTxvEFoN7ybO%2BKJemZ3%2FNI%2Fu2fsvWK%2FzVN85oqcl%2FXx0cF1ZfacDU7zX4MtcJRHqIQVSbbtu2L47picXC%2FD%2F%2Bwax484%2FxEjdeqQG%2FxbAoWngkCaob6qIRLfYr31u7QXk8e9qsYe37z6UX3z%2FkjxSna5BswilWBlp%2FZLwSFmGpiron9x%2Bt%2F%2B5c9R8xaTHWmTT33GiRe8gcsz9e%2FdbAfIa%2BStrcTBxXrxLsBunfPbSrJT%2BUcydK4bDMN8WOeXVYYVAJYCBWDMf%2BMHRoQa2ZRYoCVhhanDGNh1g10pPb1MMTkSEFVgnW5zZM8fJavXnyEmgo4WPwSzGDWBMERM%2BygZyWi5V8ilAy9mq%2FflRDrKX%2F5%2BxFYfnLGBUteq%2FtDVFknSicdwrc%2FrbzVY0Wlg6dTOexZkQs%2FPzBJImGagKwYUv3iEq2F7k5UTSSSjhIWqxtDgcsxVQbQ2YSB49HQMtuP1ZCHhXFHjgvZ5DIkLG4YobaMHGaPSSE%2F4xA%2F1uDLGbXiUjB4Griju%2F95gJnWZtk4JZE6z2QEwnR1ucELbUL9u8MjA5twjMJuarMQGOqUB1mlEY0eBtMlBJAGdT%2BPYN4rSq2bhKuXucC3mFK%2BV9um1k30bjWcRXhkqnka3huABUYl%2FMc6S1fcPdi9un2yMe4BRb%2BL6OjPgj1n8ibRyTZeOo6aV6k23r8AEPfZ5Y82YBomsSNJ1bOzh%2BU%2BdhBLXiHv%2BVA6RXt%2FMbCAHjhHfRlTofDjEh32UKhaZmhgt5%2BBoaPyRiIlAna2Hy5MPk13zsymJaMWu&X-Amz-Signature=c8de9cd4feb0625d5e9b878649f125916ac6646fa1450359e2e52ea93927df80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
