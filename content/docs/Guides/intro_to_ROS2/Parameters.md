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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUQLROZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfQKI5EVSr57eN62QtffkCqONHS0vV6vMA8b6qCKMRXAIgKicDZZXi8TFbVWwrzbjOzr%2B%2FVzZxo0TONkZg%2BI3H2DYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPNKE4g7hraZwXh5ZCrcA2%2FaJcvIBRYta%2BQBvFsKKFXegl%2BdHgqHnyFZV8GigoxwbqoAa%2BodnaJoQjXZEGI85NB5XQULZlNQTQxzLWSA7cSVJEGOTNu4ngDnDAt2uUxwtJx5t8drK%2BIPTRarUG4z8dSzbS7vNjpDAnrhKV30T%2B%2BPKTeiw8KxFCFjMnZQF4k0wnFRTypuc7rq1hSxoGgvhxvFcB1A%2BBVTwtbquHugDJEGD3IHcvIcRkwi2S%2FgEoWz0Q70Fkbi5v%2ByeflYbdmgS4u2NpzaxfaVCfoN7L%2Fx1PfWTSI5nlsD99ERcrp91X3ajJnKAxkMbawBVOouAjBypoo%2BHLmhy26W4x5ddrhzqt8%2BNT8BcWkAEc%2FHr2EnmBVfNU0JfH%2FpaYqUnlyCaZzxJKBkWbR1JSsXnlAErswRQSjpVK038d7Rk%2BfQilCCq9UTbJQbNzXxGrD1YTqvkA4hbZ0nRXcIKkuMRiNHMAL4uHyPq7fByifC51%2FRanqCNls0%2FYCUHBWY0CtmU0GicT0thZlMfSwffsEg9J4VpcadosNhGanIw3EH5aWOmAILgOzpeW6b4p82fPNwc2zdhbwwdxCJ4T6cenGPQyO8sK1FNHG%2FcAVzRJITCSE3ByD27stkjbE6fOryEwX2yVtDMMubv8AGOqUBgGaMWIiTFIQ5%2B8n4uWg%2FqxaY4jaMh6DtctyGIjODek0LMz5OvqleEn7HWPpoUcHnlZblgJ%2BQjSr0bUhX93Q1%2F84qAtioObbSsz4zYhOjyJR2NPw8x%2Bk5uYcjBGQwztqua4UMYp8LtoFpbbfut%2FZHWdV5pGRdoQ%2FcPfrrwmWWfnsu9F80TDxXeQQuQzox7dAGZyNxi8WY7q4hx9I4w3UxNGhc79Va&X-Amz-Signature=e5f9a6552779cf7b9bcdf921b078fad90126d013494a124731e49d8666b05c87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
