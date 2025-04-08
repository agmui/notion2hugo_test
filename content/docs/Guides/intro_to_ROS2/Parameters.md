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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV24PU4K%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjra2hUpBy0NHhLKmG%2FSDzTog001xyCWXuJIy5pb1CcAiBo575VfLW12IvyMJ2XJrffYJpkBCJOylwXMvsQQ17fVir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM7f5UXUhGTOzEcW1ZKtwDBs9MieTl1nngPoT%2BY81PL%2Fvv8WLoyFSNKjYzDrUeXoRyAEn7smlv27plFhlj9yX1uX1OPlv4THK%2B7fKrXrIqiciYtYzFCvVrMoHGjbzALetD4XbR0RacrJf%2Bsj5gM0tzdmyqSpbrLL3XMk5VkMi94TTTZ2EzD25HFZqUgv89f9l2ZRvcL0zhObeU4S9y2aub8ZhQcLK6dIvx%2B6hlI78Myvd9pNKJHrhv0EgVuyBFn0wWmXrYlQGPRBhnskRNx2P1qMD9KVjOrFvE8vyyjUtXkPQLYMeHmXoEWzVFDPEwnczUhQ084QhkVe9Oa6xju7Wuf3mA2oNl%2BQuhKL%2FJdVWxX2dxQJUZoBcovR153j5pd1dbzqVs%2FL0V4HdlH7E1KQ6EX0elUXxwMUIYu7lm3jvvjgHFelC1ZF%2FHoHJQaINubmy4fjPLu%2FwWs03Oc7EnLkjac7ge5BNJgavQdQ0Q4IYAQiopEx4n83c5%2FfkEk5VUvkgUGo6Ly%2FSgypVGr%2BaFl85j1aJb54%2B3RLSD1yTqWgm18RlLfQo1pU9vhzLRhOmjTrk5lhSHGrTu4gr1aQcQB1hWWteBFLVWl7P3GAtXO4LaH2rsPKHzXOs3HedWboAXemi9%2BheWfuTzURbG2AAwwYTSvwY6pgEri3%2BOH5otWcX%2BT5pgHbFr87DVYT9kaAS7sLMuRZq0lOsNi4h0%2B1LDUKyVb2OqCkEVeUTd2Qj2PZ1GN6XuVj2GwA0IAb%2FmoZ%2FslpwRMdqiDd445eHawfhsP0jDcICIvExdzy717O%2FNHl42ZtC6lf71ZNWmKOG%2FuWBH%2B6yK1ns6ZTBihKPVBKNM2QE1%2BDcs4GQ0k%2FzmHnCxgDqO0WdcGeHyPhe86bk2&X-Amz-Signature=58de1abf282263a039c4dc6791d5526d08f380c97c0b051d477efe59a06e2f11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
