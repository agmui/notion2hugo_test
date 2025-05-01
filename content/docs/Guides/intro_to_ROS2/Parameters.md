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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRMBCHZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCuMMbQo25xHrHgP6plnTqRCqX0IBEQRLLRjY4zH4S5awIgK6Y05%2FdNaOFsw3Ti1XC8MSVuCBs%2FiiiDNgtANQ4evzUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbjTJ5Abx6Ts53ZMCrcA%2F6P5dL45%2B25sQewUGiQ%2Fqz39x7GwXPAePsO3xeac%2Bh3yZHKhuLUV1Vg%2FR4vVVNqZ3C9dvcaJG3dOu6GEX4pCSS5IbmnDqH6ezZs9wD2oEPhZezy9r1U77ylN2rI8Gr%2Bh7cPQXh7EtbEWHaye2DK4MLFlKlRcIQe8mjFZBdv49r4sHWHmH4kgMhbmNA9AbAlZ2wx68n3YarcZYvABzr2%2FFdwCC5%2Fnyu1DwhARiECh%2BIHLY5RF1oP0TzosvR8xxfC4BsbOFi4LGwXY1EMa46sT3nDHp2MSe0k0hi9pvULx9ksHd8b5%2FMsMkexQH4IghSYcRD%2FYVD%2FIZd%2Bhc%2F%2BmlHRHpqEpUpnBCRhzcvCXwde6M3YN38a0Qqf2AC%2Faepqml72nMRrygCO%2BBZnA0GU%2FP7FMI699kbipRdkcjbo8bqZRLFhfa3c68NJAv0z1WusWoi%2FaNEo0mMEa%2BL7rob0qaEOLVyUrdO3pEqkh7dYOlHHgZPCry0pxe%2Bh5zPSfQBLqhrOyMo57O2%2Bz4TrjHORRlgXrUzQ1yS1DxUjlbY%2F7ZzWFxbtHPVDcj9TRjn29IvnH0h5b9EMQTpj1pDW4Kdci6GHkkcH5sNpjtJYVvRuzfkPjviGZTLczlcm0QMfGO03MLSgy8AGOqUBM2Zsvhh2VBd2kJPhfopZOc8ScY3r%2FpgntpiXCqL%2BSvNNqNYxXzVrRnFvEcVOfmCaXG%2BXhXKPSOWBNICKlg4WdEKVSlccAR73OwhMT6In95%2Fn2EbZB924vHwWr1WpLYKZq2Ofl2UY5tCdC6crfWhVPVhHtHqARFPovDaToBZGNSZw89Iog6vJr9SU9KtRNN9gmAZmjvIigGBSmEOgKTqGK0o%2FwsTo&X-Amz-Signature=37533ba94152a4f5f941d8c95f42ca31f421cbb7f0cb7c48689335eca26e5ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
