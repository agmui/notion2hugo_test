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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2743MB%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi55hUO3j5pwu57xbvUETEwGgOmVmEJS%2BbLTzNjQicJwIhALqsP3Hsfi4BCH4U%2FU%2FDVNXArv1hSY%2FY%2BeADBny4PJiOKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbSDOumTs4dIOUTXAq3APj3Jaz0XYgXoU2ep45BnkCxXkqpPMC35GhUt02Uu%2Brz0DXAH33%2BewHARol8UqxQd2%2FNE4CUK2EyCy6dxEoOADOE6u8EkSbNBk%2FjckCQPRtWBl127uWkZBl%2BtL4D%2BxxRLAGazcnjf73h0hZt2fCmxSB5K%2FaP1egMlzyXtSOz5tYBprrAikViHPu7PaUpx3Lq7YDwcus%2FW%2FAmIyJSLuEJ74blWVGWraGMDr7h1ajKeewKWQwq9RrzFoERmVlNMdIF2wqUYV9CLYeOumM%2Br%2Fuf%2FU8M6BZn8jtyb9dO3zRaUmY6kzGToC3ntnklkblLX%2BOFZaHhKqmSQpnMHHwmsk1Kf65u3lHw5TEBducCoF8c1a6O47U%2Bu12QAyyce4f8JAyDNSdZt6ZEzNTSq15zCErhmFJbfvBb7xAZipEnswDkHoeS1Jqf0Lsp9hkgMk5XAhVqM7zf7N6RzVnFeclv9z%2F%2FOmLX%2FbWmfGT9SS3E9rIlu2Wqqd4R5KRepcinTsjlh712zzJHZ1lKoRnuLBtdktY3Zonu0GOdSvTnJAsY3AM5%2BPMQLsu4S85C6wbiZlTEPZ4XAFxOGJ852%2FH18hvdHYj%2BTxzkfR1sd2M5umcnj2I%2FKcb2f%2FY%2BaG5lPu8cl40YzDRmu7BBjqkAQjtfjA0YY9dUt6IUbHac%2FPv8FDQhtmBEi2wb%2FOAh32VdL2W1lcSpsLKFSu8cJKgDU4ZiIzVEZRzrvTXzZzSkZ1zV3NwKftUYZUQraNiNefoZYlCUIwzAGRwUO8aaHsKE7KiRoC1XCm%2BwteIt11HjNii00y3kDmAMhNtAskaCAtGuCJD9OIHp%2FvPKzUbVgYR7ec24OqO2gmkIk27aLL3YRO%2FXggm&X-Amz-Signature=34a879bc5a5fef6843a390545622ff107f1cf20dc68428c79253f0fa027ca4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
