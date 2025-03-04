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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IRKM4X%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXBzS4QFWHjREzuQEXpP3%2BoelEtzOLN8ynEe%2FHO9bGTAiAW61ZWR0GT1uc9021X6e0txa%2BhB1%2FAWkbp2nWoVqD6JiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FpvB%2B8mqJrUa%2BtlYKtwDItsWlyG68SIZp2SwpEzIAqBjiDF4D7ZphDitcPYNnJmjTmxUj5T6sRRoEsvBqTS%2FLMhyIJiEOi1xiuozOVOjw5Kd4bmyOD8m%2BLEGzCup%2B5Y%2FpquMztksWpUww3zeWL5rPRT%2FowAhosy1SYrQVh7KKdaUh%2BYk843DVsTDwb8yjR8EfXfRWsIBURX7b6eeCWjZWa0tY9bn8rWm2kpwQJM3GTXTxTG5FH8Ff8JMO6nxDlDme%2BG%2BO%2BSSxQdbQO1AOM6%2F9rdwWsoRGmz0kf0DuJscRiV6UGBrZrq%2Fote4b10nCU%2BP7IjLfFtMZS%2BWkvAFCcGimaccFCRsV2E8OPU%2FdM%2FYlRRXJE17tR6a98CUoU1MmeJGaAxlOlAuurmBKYkePp9UkOT4uHqw8uonYJeStewW9IHPVMtWpdm9wgv89q2dvt2KTCibvbfFVIddXU%2FZ5KzxLFPlrCxwpmd5uMcP0Hi2%2Fv8JbugH2cbmLGcGgrzGSf3Vw7rYgTB%2F0oeSn3W6%2FuJBdzjV3fi6FqenkSNTrw9h6pr7PMRxAjh4ch1BvTUup%2BeY9o%2FjScUHzU4MZ02d6xvHyaJe9bApA7RzRkXN2Wj5cR3iQ4Tn%2BL9H8thqYlXpSju5o0UbJ9JftFIcEo8wt%2FiYvgY6pgHJiutVYScY%2BtDZxWNBUIDJTOaHaNWkNaZHL%2B5ee%2Be%2B34yMIZpskazF9RcZgeFwkUpxmK2vkEWBG9VXl7QgRFmR5BoLvCJYKH6KYGgkC95v9eComQ3Fw7rdw4XqlSX09PJOqw1gdOFPal%2FchAcPVFHcXeHacoDbx44%2BfsWboN11omkOgrp%2B1Qkz8y%2FDm%2FbokujV5jDNZ9NDW62EUzmQMF0RHoZiTqPK&X-Amz-Signature=deee71200becb38db578f39efae1b6bf4747b8e71055752f1f91f951b2756ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
