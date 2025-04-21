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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765GGMBU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDDpi5bYiya9kQ2kS2%2F%2F3z8efUgyvk4BhuqhoZg7jnXggIgKJfr1%2FJ0lJGfnYY4g6ZsXfXWQXD7BESluLqVznxpiYcqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHI4e8O%2FzuEVwrxmLircA9s4ovwu0VngJme1oKBILAIFVlL05exjUC1ORQcURSsYUz148O%2BOYH%2FbWzfhzawfFwy5RBsESVwYmmSK3gsdHPefAgG%2BkRTSY%2Bg032VfS1F6C3C1lvWqmQMCxmdZWGofa9QiH%2FTzugab3R45fZJOlkSUKBvxJH1udLbDQjDyhjRafuMn2SZr1ko11fpeNQWlRp5U%2Bqqll%2BCeVpGS00%2BgqOtABiWWr6rvpgErFGi9kzm0XtTASLb0Rk04lwewhLdWIyqH5KSpr%2F7HdhYYX71j39T6l1mB2lS0upOBaTtgnXJ%2FeOwsO7WQvI%2F8axyTLsKCruVc5cn8TWmhU3FpgR0BLkwp%2BfCMQhUndtULE8%2B9pXUHiBcz54%2FKc6B%2BGU7BKKjsTuMkkHXIsF0PcxA2tU1%2Bs%2FlmFv7pf6qn7tiHHk6%2BWneuwGE6FeuU0X8lIAIbKnIgqKAeWj4KWPtqGotR6AwjJAT9cpnsV6A1GGjnmOY2touKvSagYiGebzP92KuKyYb6NiiSRLYR4LnLRCGUYFtR%2BqmuVp4pWd8o%2FFId9%2Fqv9U6tWT7qvjRV9xN6rr2ihu6rMMPSmih7S%2BWPM8uLTc%2FDEkvAWg%2BZHs91qbwV7Sr%2FqJjzY4m1gxIU3M0Ab7j9MNWimMAGOqUBDpaThQI4u5jgPXZUkTa7Emt1hxSd4fetor%2BbH6z1niCuGtZo0D8pUh8K3ST8A9WsEWXa5j3BCeg7Xtt5r9n3ar2UnFwXpvZ8Bl6OVmBEx%2FG1VsEvty85hMdGFwUPMMwK%2B8ZhUantfkjqYWC0asrgLmI83rYMslpVd4SVarnT1Um6f7vc2zAOWoTCunieVrcoDWLRV6AOp3kSEypjanT2hZP6slKx&X-Amz-Signature=8ed4017bdec731da09e602316a8df39c4acc2784d33625dc1219db35985ddc67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
