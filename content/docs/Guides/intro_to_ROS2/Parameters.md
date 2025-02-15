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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OSUVXKX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCJgXahV7J1XoUwpsxfnePy%2F0QDN9fyXvg2WjofO5ll3gIgb6VR9nINhJcDdUyymtaiGNY5Hjk4JFfQWVxRolrQUakq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLAuDFcjB1sQI%2FZ06SrcAzMMsyXNy3y0ShtDQLG0XMsrXYW7Lc34uizYYv6AHWIYDc4k6gGfjRIK4r806fEjEq73bGnac1VIfQtwiODurxlXSUuuMkMdM7eAPI3ytP9hu7%2BX2IKOrR2ko2M3A0z7ud8MahXMIN%2FcTzjMn%2BcHA3v1luHuZ4sukZ37s9EhHJNZ%2FmsLOHkXxJZcVBF15YHd3jlk%2BzNp4MrwaVULeXgYLOCd59PEkRmqfMF%2BtR7w6LLWQW8wH1cD%2B2ecZ1IgnrRgUG9fAmeu6FK%2FPH5t18EQjM12hrJE8Egv7FmDpPxO8asuPlfv979uZaGIh5Qzg%2F5oTA8d24G3Ii3387cGX6UmZ4V64zBm3FwPS3i6cjDTzFikZ9IdgXM1NAYL9iqJ8OcmKhbI9XRaH5YYajOGSNtwlQVo2dimE7WuRoHXp%2Bs3MzW7H76kBp3090mkrEFvpwELbQWpyIJcBUT1VsUG8VA5fYcH8J0fWWY%2FES%2FJJD2V7ZsB%2F4XGQZTrIOuQu2%2F1iSgbHdhERG6nksXyx1C1RqQrrHcye3IErl1VlElLjEORHNITpA%2FSSmLS6Hihj%2BmFnZz8sE5ocGD1C8aQ8NqoEZDwLWj3oR0qBw%2FQvPbWS0n1MYG8yBLG29bZeQKKGgWQMLLGwr0GOqUBIiLZGTTPPLt3IIH4bhzR%2F24B9GrnIaLTxRVWkxcZweh3lBHLizOh5kTb7Mso7YQuW%2FALRpdDH6fGBRzccRUt6PejAuXgcgNAUIFoLQWdq5tQEEUyhj3lIFItKtxrxoSXcgtpoL6LmcqenMd%2FReO5EA65EvLYW5eUe%2F3o1DhfcI%2Fezuytok7TgoZKePozjg3ZuwPvg9ogufuHF80KHzAWRgJWX5vH&X-Amz-Signature=74095a8a47ef13e4e30716db43b182fb2ac6745a9cc5d3378c64051ec42248c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
