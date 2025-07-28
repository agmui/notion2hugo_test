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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOC6O5L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCl7axRQbW%2BOfXea3%2FaNxr4DUiNhx3pr8iCaMni2xY0MQIgRkJ2PgU8kRzWLzuT0frZoek3sky8fisTXoJWrjK7%2BLMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzqDn9zV1Rsn4Sb%2FSrcA9tzTDr0yagKidKKvAO23UvsFDrXGzvmVj%2BN%2FSz3j3%2FmKcJqpppQJ2ICRWtEtT4auLg4%2FM2HVkmmCEdFaLsH%2FF9CyjHd1uQrtlaBUW9MLn%2Fl7jNVmDebR%2FiVg9qmwEa3ljwsj%2FDK2mEolU931uhDDA1rplKIrTMaElTLhyuCb15T%2FCPBE0%2B%2BAXVODwo5gRfy3pp0ZKM%2FtuQlG3O7nvKZmMUcSXDf08fAOsh6An1f%2FGNzQwxmNXVrzF8zTQPvxNUhK0UykLEX0Y2BPL0svc3vVDFnRNH6EkR29anXWDg%2Bya3W9A5ggvEr7VJS%2B8HUQ1BS9x2Lz%2BBT8Ig2SAFjhf%2Fnm%2FBB3ItMsl0d%2FxF6umUMxqkfFMAsYs5pHZV0pd8a%2F%2FekktAsZWXbG7ZtcoSSsf8a0mlbFSq2IBeHbhC6u%2F0Ufi%2B7I8QvPAZFvdnOi5xNrtg0nsXwrHkgeovPPOkkcW0GWzD%2FvURDlClrO0IQFU9EgWH8HAo6UJSZPNApbq1L9woqxNDmBBQsVfQhm%2BOzON4wM0h%2BsAC%2BzVoBsaFEHgJodhgpv8vwrEpd8bfI295ECJ0hqgaxZpCbv3nhWcQpbLYwRUF3l52hJvbvtQFdiPXGBSGn%2F04nmYYjlJ28Oa7KMMLumsQGOqUBNHxu5Mccv4ZzOCVJobQI8j8qu03jfslgsfMdK%2BSaLL9pzeLSruQr8Ef5QFxtm3IgCSZ%2Fm9IfEBrU306Vzf3hiOLswAHsedUVMNvYoz76ay0MSuj2TcnUem7yi%2BA%2FqvDXAxi1tfaS%2BOUv%2BlU2TAZyiV%2B5UOMn11L%2Boacd9n4w%2BzhLW%2FhS0%2BIygO4Ix5ZAl5a20aKqiosumssOZzuw%2FedXyuYLsgdB&X-Amz-Signature=ba1d1efbe19bf81e7d58479b834d207fee95990b9719f3e3802c539bdeee4c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
