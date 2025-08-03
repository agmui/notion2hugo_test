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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN6FNUMU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1UglNPqcUpfweCEiwr2oz0m26obA0%2F6mEV4uIjN9ReAiEAmHk2WypDCADn2Y9sUgMaRsGUcfspt1CnowHVJSxjWGMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBF4LhuJVZaO1FtHzSrcA0f8UNlyXQVuT5FPSYqz%2FR53w95RlNkZOmjEloe6POuv%2F2yPsBlARWy65N01eeuGnh%2BL9U0j0fDlxjNLHNLg5MVq2%2ByDuC39m5QuZZ8rbXAlB8Wqdyk8z85%2F2znwFUdszolxIbwRX1fqLLrZ4qkTEQ%2BvDRtCFOVJEL7VlD8MMFZVL1A5ti0XH4J6UKVZG7A7p9pBmpZOoLmmivI7ch%2FXF3HGi%2BKevKOs4CAcQj9A9e%2FieDPg9IrVAGKhBoyh6zVRFlV4WGi9V39DBx7LtpHMLYD3Z0QTNs89euVV1DZnqAkHN8ePmhYiQ%2FO8lznqFzRUPz6WQYVtAN8juRdXP9xHlrQiviD3XkdZBKYbS4fHGwlA90Yish6LiAZ2ddiPF%2BN1iRCVh2evJySBhfui3r2PHU8Yf44urdRQfAlDwbIL5XxKMISYlWNtyKIXezs%2Bid5c9Wdjw4tBf8k1mhyofsceSrN9jzv0v7D5OBNKniPcgr%2F3x1wlESnXaEzpLvq7cGlwJuetQvKDZrNRS%2FPJ955N0DELj4F4BFT9bUI09XO3uEix4HgYP3R%2BtKnF3dZGsWDGg%2BEMpLj9S%2FY58q7f63mJLup4V%2B%2F%2BWvvPHrRS99cmX7j7AoYul99bjFyYjqf1MLDZvsQGOqUBPH%2FmSny5err9Ay%2BrQbl2S6uVkulI%2BRtgxjwR1eC%2BKvW%2FAkOM1mJIugqWOXrTxfBEchhTP08%2Bg44tQq%2F7c479d2ANtN1EhI4ZdLzI4%2FktM3JT4JAFPc2yOGfF1O4HlFg55xMTZxmm2Fd5%2F8Myn2K72nZmdDh1oLgp3%2BJh7UH%2BDKBGOAOQN8lAo4y3eTV%2FLpv8Os1wdlPBp9ZKgMH864CnXUKyXcpK&X-Amz-Signature=4a6af51fa9b01d7d98971688f268110033cad1fb475d83be64daf5985d8083be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
