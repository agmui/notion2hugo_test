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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLQANTL%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDG2Oh8xXZe1Zn%2BiG3DkwtvLsZhqR79SIvs6Xm2rZ9lSAIgIfW60qOa9f5DPnKtSH6%2FcKxulP81dzdvx5dnQaylmlcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAfRTJWx2dUChQWuQSrcA2ayePGs4E7c1h8t3ldJwwKSyNTQOMvSFt7XRdmeigLFr1JXVwHMwGgArd6HUDzvU2FVeDs%2Ft8wxWO7bwnZzZROHC1%2F%2BQupWE8bW2IZjOjLN%2FWBcyRG88g3hA2BTRjQxHsObMynbzQeX99A%2BAYiBZ%2BaMeGI7IcBg2wpwEZwEItHjpIjEr7rz423SzNyuNmymDCpTfwTRPIRNTQR7tDSgDJbvDX2pRbOYVGezHvS46MUodNNHJStl6%2Fr%2FZ9cjwgP%2B4EuiNCz3jQN%2Fmp89%2B9SFdHERzBchn7cz0JWavocSuorO35wb2zgWox5Hl%2BsuMxXN4XZuucJQrXv8wZB3qcctHd2du5PuLxrzjS86rOW1sjm%2BKFPNst6ppj5WPSsQh36WjqcpkXNYnwRrlMAyTIWg6TsDTkrLXy5jo5qgiRpr2kdeQDbrTTR1dTypQBUgPLPDyGKbpBrItFsv%2BGIHSE7sh1TpzIe0VPvDb264ADtwDaQmXie3PovvLPbfVTdethK%2FhSZk4orNFUcQ6YYUK5DfHdTEWQDIer%2BTZMaVs9hyxWdZPzjT%2FiUMFzNP8%2FYqeXWxY%2Bs%2Fu0ZrkXXlP3W5YWFdg3I9sa7qSlqzfMH20X%2BQJAp1oDTrWapljDzXBABiMO6a4cAGOqUBxjFyOvopxrz9bbQWHDRo6I5O1Ji9mv4IPg6HSe44lw%2Fzu4Xa6G2yZeyIDoVH9JZ740hTqRThCAPvAxLJBJC%2BLOYx%2BbDXzMytFwxrxcPGCSQsfM2WMesB%2FUZeVuYfQqx3fePtAPoV%2B0YStSaAVrbB%2F%2FGwo7wqJkvDpSVpXckJX2T9uY6yw7TpIZ%2Bm%2F7BtZ%2FIiuXzzZyoJM42tx4EqkF1cordNw8Oa&X-Amz-Signature=a3f50c1bb5ca1208134d16867fda6ab34262acb00a6e6b9c15429b759fbbf636&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
