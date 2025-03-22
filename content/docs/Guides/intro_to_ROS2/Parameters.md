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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KJBFPK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBQFltduw2TjlGPlAl2aIBl1W0M5eyfCpF%2Bq6lj0K%2FHLAiA3QU27OkGYgOVY00hSvIObz4zqx5D01Sv772rxuo5C5CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbd2tujNIzaMqDgB5KtwDTpj3%2Fw%2F2iFZvVZ66q63sq%2FlaUR9x1HFcKvAa3SKXeHE7eoSHB5zODGGDXrtXvJy4mSjwFLpp2FIT8bCuu6n2sUeRwnrpML9hl1KIrQHdTBhNn5P2cV0JDrtCu2d8%2FcLUC4ySShnTlRnUyqsqTvVgORzhBtPAlbOkSPiTMKXYKkOxgPZzmN3mO5UPuVDV7b%2Fop8TyeRpbz3AXzerdGCLYNacyS8egQ7Z6GXUlgnMWo7dA2VJEGCDRCYnznKHV%2F%2FEbp1FVaujHqnZnACxNt6f935c%2BXQfx7bNUzaVO%2Bjw57CXYWlBXRB5zqOzZsnNy7JfrCyGg1MOYVjdMCSGwSDSgFFF%2FgGLF%2Fo8Ws4nqumwmEt2%2FsuRdBtLdqXAAtn%2BWG5XTFIkEnJnX4ndhbBqO8NRM0R%2Bugn6Zs%2BBDGx%2BBxqZxQE9C9zQ4ZJ6VlLWUQdWjNdXTFTOAt5YIc8UWr1OLRejTWe0aKeDoKBpCWrgPFzjIaSb4%2BZE2UL1xVn69hNmgHfyFhZ4d%2BiwjqhdT0dKcFjA8yFUOq8iTUKT4Drugjm2QS0cwbfquBDL6NFAUBD6oGcI%2FexjzYZZxesRR9Xfvei1ElB5a7r0ee0q3BifHKmsb3XePIyG73EO7LAlWA5Qw%2Fuf4vgY6pgHSlUPfOupQFlAFLZ3y%2F2w5V5N2pY4tWhzwYiyyiM1Qb1WmIrArwbJ0h5mlLnka%2BRf1Zzm0GHAADtGZYW5xzaYhQfkpSo%2FUEZwT7svcuyS%2ByONap2Esgib9Iqjltbc0nDDjF5jzFB1w0H4v5p1cq6aMD21vBZKKwqAXNvVGErlC828Ipzr%2FCMnJ%2BdtGdUKORZq5gu1T9LK8ETSDVoeopR%2BjpXHbfv6M&X-Amz-Signature=e3e1471e6e7898e3857aba7b505aa35487fabf27436aa39b045c5c07e62e63db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
