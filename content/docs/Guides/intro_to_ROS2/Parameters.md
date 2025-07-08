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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMD7KPAI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD5HdrHObIeYhEKhuyYXg3Sw%2BDBILlRAk20C%2Fc34so6aQIgedox3LZgVBFHsO4ku4UAHTthYCT%2F%2FVVw9tGwSK%2FzFtUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHesrpFIk5LfMa1TmyrcA0ND9YE46w7J4rgqB1MNVUckNKf7Bhh5RzF7OVL75Eilv3XucZpbRXWkfO2LNkmqPxvUvZFdLBXGeIkIxvE6Xw9qthTzNdPP506%2FVEapCIeH2iPGCftlB03NtlPnruD9Ni410i6DhVYZiC4x%2BcyD%2BxJCJJkgoDJMGhXbgyxEczG0hK3U1MCI3505uii3n1ZvX90FnFS%2F87whZo92CFu2r9NcrmSXVDnim6XrLchyW8cbgcVqOoGibEpEkpWWmroc2Wt9Q3m9e9sZGLetg4pBm%2FxArjA8AdFcquAwnHjFZzv%2BnOoAgTB3VZsgq72tkGivOTLL3FVzsGhfdnKmtyKq130L%2BWWHzfQc5fvGW6pt5rJu8XgWJnKT1Ewq9ZmD4BI%2FvtQRM8EaooofoQgMX0czDiqu%2BP1sLsoaUGd8NgMVoDEW3%2BG9aYIaS4gYz4rTumX2LZ6p3lclTVJsGij46wA3btQjeRz3xolopbHgHWBvAf19bv588%2B8Bz7VrpPIe3njBZHmrwHfypEIzFL1JcVhIdHr7u7er8f%2FS5I%2Fs%2BJe2zpetY5B4GH8HoEaO8A1BjHNjQHGk66FyYxFkXJygs5Jvgs9KZ2v6vVth7XJupf7MIiPfZAUeKC1SkS7zdlU0MPvKscMGOqUBNjpf3rJ1cccH27t%2FFBAmxiNBJmlr2c1bh0siABuIEJZZhUnXZ0DhVp1ASPwsb6bSz4GgLqxPXAmxRRqJu2Zw9vLGlWM0alLKeGqLS1x07BsTvTqqw88diIPTp9yGkr20n%2BbBxVZQ5lfpZuxPWFC8m45mw8tbH3UVN%2F1fkBVvXCD3Qw%2B3s99FJ%2BzdxkahXgbvuN2GqBRhbbXzMMkJzxDtbpNflI%2Bc&X-Amz-Signature=35b8d2223c03a8c56cc8548da4be25ee9e3b4e52c077c04780f38a501bf7eb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
