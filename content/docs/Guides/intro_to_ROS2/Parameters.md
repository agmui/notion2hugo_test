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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LPS7T5B%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD1kNwpO001vybQdZY4012e%2BWyN70hmSdAzdPlYJxcHtAIgKPmDjhn5nYzn7C02dQmiCsonjzGZioEia8ZpSHvZYyQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjPRXpwQYtPTUnhHCrcA8w4Au05ZNUMGmlx6F49FmYCuQGD7iPAz83rAwkei4Tl9B%2Fzgai3MP6yug964Qt0u4BPLh98n6fDr%2FAfu1yAzEFzarxfHTjr2XtjOJ8cYTdpcnjoNUIgKd7AjitPMZrE7ApUDRsHzX9UyVLnvyVbENyVPatsX4cLbbOKbEPZgvz%2B808YCF%2BF7ABzI1HPrYwecc5LwppQLGjFhdbJZXQGbjniadPK5lP%2BRnllICvT4wv4y2wcF1Q5iJX5usYaqUSQFsrMt5wkv7XTsbW5koh%2Fh2i4wH51D84qtyztLsdWEz7eX1162IiiOgPfNP4yA6V6%2ByAfdQryMpu7nDvuHerHPCV4zOY%2FmfCGRomc1NMbDpy3esRM%2FxdXCmCKsc4E7Dy3GMyX7EGdakL9cIeQMHrpSgUUW4o7m%2BcqmKnn9cC5Rcc9UEPfBICttwRmHfcJCgbDBTa%2BF2YgVbcXYCQn6yUwVTX6%2FrO3js9t0UNDOz3ruFcvXp1qMO0d2RcCXDeWCQsU0Y3Hl%2FlD0%2BaeN0hj%2B%2FcphYmBcdcIlsJ7OSQurVr0eYJp3v92hkGi5fScXhB%2Fgjn9eMyYUAxkIezKHd3FgleuW0vEHsX6mS71qDa3mw8PcquGHs3g1rMBhtr2NDfCMOukrb8GOqUBl33%2FuOP%2ByTYxD5vESGPA7qGjgY0W0X7XDROCi6WaFGX8rVEjEUXyPbbOjpflV%2BXqFmqW4FxJi5e17MO8b9bNEXciWR6lcdfTpiPIHN5u2hg3GhIAedTRybec0mD2NTM99l9PrYulX56qZ2pep0sN6nICrZIT40LkAiLVen2wwBul3smAxeLlfQE10fDwkgR%2Bc5dLSaFUYBkVkOWZAQPvJjeP1Jdc&X-Amz-Signature=fed5d917d28c488a2f2bd873b2f14f34fe4b5f8bb2185dc1815746af0a492664&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
