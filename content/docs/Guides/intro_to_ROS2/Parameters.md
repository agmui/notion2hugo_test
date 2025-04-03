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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7KEBTE%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B4gBi0ZCA2jPQI7%2FNjrDAtKu8USHV%2BNeTLT47yyn0jAiA1eMOOSFtMaXBvKCmdYA5Soj45X5InIjXVsJQl0pouqyqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp0uuMpe3ju7cc1cuKtwDzRWbj8uDiGQgvHunObfvqbbCI0pdPwkYjQZ%2BzKsWSVCZGo9pUZ6pS5uihP5fe%2BX5eHmyY%2B6T9gIiRAcwPBZTkuio6eD4KQrYdlwAyftLQexcEaFgv%2F%2BgLYvQNgwnfULEZrAHqe6l3%2BfiTMOhk9bfTgPErkfdX8Bc%2BZsYBw%2F5hdw9bU6C0o3amC4IWe%2BBDH8bwC0s51QB2G0tomQCxqebmHx%2BcXTlXhi%2FNCzHbzYRVveD0MK8NRORYl3IFD%2B4xLc7PpzK8Qvm4BV4XTGmnk8yL0dAD2UUw6qdkzCnlmi%2BOzOLuR0SQBwd6QpvmACBLpa507%2BqrDXhggOPsBfEZaPXLNBF1DlpO65P0iAQ542DQ8InHdtfzVlWV3hzUwrs9onTVR%2F2wATYpW9Be2zGmKmD19wBrRFiKXmiTHFPA63UYxPxBeS4Xkx%2ByQLS4f48kqi29Tq31IBQH0InRcYIsGTXDBMbZYBHFGgpOK5sB%2FBmnZAVrDWujTVMtC6nrsY0jX%2Fsqi54WSqGLoQjVT52Ho3gIw1WyMkKWbetCScr5H4fq%2BstRlq8WS8XWplLUCgn4tKLYp2r7THN55umb6sFocJSYCNBe2CGZjn6mm3CUKGFnNodlzXDywBSaQId2kgwhOu7vwY6pgE5vGJFliA35fv39hZgvyHpXTmqJEhm0G7%2BP9Fpdu3YJaJEko3i0q4YLWksJ0L1D14zExOrpdzM5is88P9FOgVon18HdFuzl8YZcuFWi7QBDTErjPcdfga8P6UF9dnbjtW0l35cYkqBM%2FtrLL041sX2YC1mSA4NzBLFPaYKbN1m3VgwTsyH2j9d0BusBt7UM06ophcvOP5SF6J%2F%2FBt6rfWVGZgP%2BI%2FH&X-Amz-Signature=1a9b26e0c8abe08d3f56f473ce10d082c86061203a81c7cf35e7031d00006d05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
