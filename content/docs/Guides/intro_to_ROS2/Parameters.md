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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C53UT2Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0o6U0%2BlMzKApNrBEKQPfQgs5vaXgropf4Z3%2BmAInuWAiEAw3GLOwedMduE7a1D%2FL1Ko6KOUyM2EsS4j9Qh3OqzSbcq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDD34%2BedP3NTdJyDVtSrcA79Ti83c9uCbMQ4lzRntx1P5PcGsxB4EC%2FRdexjqr3h5m%2BL1PWu6w%2BzAg1w5FrEv3tY%2FuBGqMTY6fAOMy0gaQeaRD5D1Iks%2Bd64PdLlxSlwz8YMFXT86kgJIv8uHVB%2F1NykSK33LzXYs7m2ppe5zHEDvafEJohgy0Q8COrJ6XVEIXtkqZ1rcBp1x0bZV1CRvkjSaUFDx%2BaBWF4yrKhjL1vBP70iZodk50kYLwLBXLn8KGpLWFXDckcREUNI9Q8JgAdGRktNv7BBr%2Bj3ieAW6jcLJ%2F5jm%2Fc2KyjNdEcMf%2F8fT1vOa74RNHLCfORAF65WCaGrGeorx7yFzkoeUi%2BLkSQ%2BU5%2FBLTeHLqoR69KAV2BxYNRsW9gbGzJE9HNIi75tlgRBKt3CpSm5aU3MoKy4NIiOjHWDCJUrp4evZH5LZcEtfOb%2BA%2BuaBlUzDwtxp7t2X53K2ehT8XKKClNT3FHsF0RRwNVjlZKKM%2B85%2BtJLUOCpYA0B%2FhYkL69yyFcQuHzVyGfV0Y7hV7mybJv9V3F17L5AoH6%2F9dnPKplbl63gr4zzJpmzFYHuOlpO%2BYCSFJ7YihlUu7sQwzAJOw7mMoEYHXtPLxDxgyh2bAxVAvJ8bP1UcCjWsNIkwYvGxqEsTMMrKtr0GOqUBnHA1F4thfeGo4y5%2BFSbNR3MMdTgaH5pPdo4RHlu%2BKNHgmylJqUXRsOK%2BfhK2fsreUayrjpS7CBfoHQhbkJKAdHXbM4zs6TlyEl3fX9r3w2A9McRiClBSZFj%2BTyGdQnD4z77jaX2Y5gqiXjYevnWFs%2BMktjpLOh%2FG2S1MUxf41kW%2FK7DIxK8NDwGL%2BsHuhToUo3NYGscMMQts0%2B7n1MwQD6CnHYwR&X-Amz-Signature=fcc5785ce6eb69fd7e8584e225ac6ab62085c32150699ee26d37ea3b25efc768&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
