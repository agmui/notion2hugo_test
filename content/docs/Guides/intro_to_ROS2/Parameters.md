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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZFT7LO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH%2Bnth1AhBOMNX%2BKJYnS2SA%2B2TQMnG93jtq1cP0a9vm2AiA11a2t1EbBoVvbEq6R21sUjfl3zeYpTw4FDba88YZEHiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe9qICD2uoBwyLsB4KtwDsrz071s9l9CQK5T17wpbQRxyheh3XKqxzcal9Y4FHQqP%2FNtElwdUth%2BUPK%2FgAXWNsf9%2FSK6JYY8dBOqC7B%2F1MXLDz%2F%2FXJQNIDD6jzAJrGybnlLQLwPSdBx7bST0qZ6m95QM%2Bby6IqKL6mxlIgQDYVz3gtNsl1DK%2BYW8z6xyJB0WkWxiXRh762pgdH4rIAFvA7Hw%2FGtBGdtaU5IM9wj26lUk6lpYlGRVcePUIh0ilomleROnR7BxkJObI9TkfKsQik1oB7VVSeAEBCMYaDHFm83tVqMcymdHePlGPKcxO78o5iwfUZYX96rFBjTuW8kPoJ%2BPHUAVOA9BOBcOBgWeLCKAZbP72yMaWfrej7uhLmZLPiGCU9MaxN9KUoKEf0cYPe%2FqODVRQXlpdgdr9THdG%2Fu9jiDcuxiJ1c34nckVpxtZhHT%2B7C63GoRmjGo9ly41XTfYpqC08GeIcenGIAOydZo8hlJG4HHJxMXYyF1ZwC58pDZLxGWT024F8NfeIsvXdLPlC44%2F3XNHiBPWsiuOM%2FfQgAj9yNUKxaILEdHs%2FzoyNgtHkyy3d8FEJsqgUNIRXxd4MnLFCyrwRN02NvwWlOMeDIJG%2BRWIcY2qK7FlSUHzZPGmJxCAhddPes4Aw6p3NwAY6pgHNsNUcEyYdyDi%2FRe4pyO%2BdPD1fxW3lYmup0WtkHogBaTBS6eQv0WBdD3s1VdWtwyrf552bPV65ZHPlpPpcUIglJqpkeMMMyPoLamPLlkLprkE917DculdWOQi46g4j%2BCHcM8WCd%2B9Bfrn5WDGb0Bu%2Bg29PTD%2BRVqK1NZxPCEsoZNbzvv2EndST5AYU2Eov9TyHdZmHTyDphWI0bDQ84ZPlpExe46Th&X-Amz-Signature=9cb914079b0e3696cedd281dbe10f42fb212035106f51642d5e0669f49992dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
