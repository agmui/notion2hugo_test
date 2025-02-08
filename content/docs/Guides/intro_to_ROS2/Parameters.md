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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDBCA2Y%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDC6VAUZQc3D0615AYgfnqNxRHprVoGKGS%2FnDGR21zK0QIhAKbutLCFEM52rwEQZMPvlgHZzZY6ZrHzHPd98pprKU2QKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhBOrFGLEOjRTABfEq3APpZltYQhX0USYJIFKZo9T3gKROXH1pZEWBobscEEt%2BkUjT9H%2FYECYABJjfjDEpKhWJMyczZzwet3dhh6NHfC92lCgWdmUrYetKtn8F45Vc0PILAjB5XgL1SG6vCBxDRWF9E2vWJ1pDK0kKNCVTb95txDpX76Sv7KufXo5HzUHpGJWCJJGjWBNokZ0alca0SPZMDTiSfVTVVryFWjVeFro8mwW5YM03wzAeyYRN1WEYBSFs%2FNLhTSCyPvqX1sWoSutWcgHfwZ8DUtHYXQ1W%2BZ3ksS2U%2F8%2FSTcV7w5C1E%2FB0iLeXpfrt2MY3g7WkO8WYeGeU%2F3hjZMD4yJE%2B0thK7X0TG0c4DeTAUA1VSMxt1MObGwp1tNO%2FzRSzETrSbAqW%2Byr031cOskpupUSxSBUCqo0fGq6vCdSBQDg3%2FzDIeDVyyjkH9sk3vAAeQCEZ%2FuI6dvF37NU%2Fr2PMkVmoDYtswFbdHz7ZBSKn3JuaiDlWLzJLvFFn20ulci2hHArxsPfCrSJc5jR4SGJ%2FTIozNwVqebbV7QMHlbSo%2Fu%2FiZNLeAYnPvPAcd1hVOfqeuepWWeYJKQ4oYYY9rwsjng3McCDfAJzBLZe1A11UtSvx7qj69t0RoAnQ2V%2BrphiBX0%2FSczCz4J69BjqkAcLGGSFuPp0lC0H8QSPnuH5lbk5O%2Fw%2FVHxgyV0lq9Sm382BMplvg0faxUmQRfX%2F8yFq2KQ4924UXcwLFXn3g%2FvYgoJvhhfp8GrXSwYR5PGjubM5OmQVphw%2Bcn%2BbAl%2FKQcRB4swCdJT%2Fmk6UzA%2BzzazOuTZqH4MTcHTDU0BbkZOby8NqpL0%2FNGrqDeSDuxIndbLYWxAksD6%2FFzJ%2F26YxKDQz1Ja8M&X-Amz-Signature=ba7d419d8205b2abeb0f3b6a65a81418f4e6ebcef13cb0ed040895576fabe376&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
