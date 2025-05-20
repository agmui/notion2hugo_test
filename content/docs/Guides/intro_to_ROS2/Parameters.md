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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOA2IXR5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVhox9LsVTyeJodnaLBv655qrGC4gesRsam6l7hUBbyAiEAtZbQMTPgv%2F9ZOxYjQweBIyEaC1Ob2iPIKTT01LKlQJ4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTEKEgU%2FfFY4Gp9ZCrcA%2B0krbAZdUarJx5WejBDu6t22utzKB%2BZyiVFSjWHkFvD3OHvWPOZPE0sP%2BLnFfcqnBzEcikLebIqZchWlfk2MjaP3pz3YfN4UONltuDSGa9MygewA3rZ9fYgN5GLfNwfB5qj6WohuWPJAs7fUshyA%2Fas%2BRXi6r6MmywIb8wanm%2FpzF%2FzsXf6bikoXmcYln3LMcCkCC8WaOudqoq60fJkRG0aLMLR8VzituSFPjTOHtdDQNCDAG2QYpkxOLj%2FnKQ%2FAuCBOsSY8mkpvz%2Bxcd0zibaN8hJEYBgRJNQfE%2B5XXX81lQVpI3lAg9pdARnECrS6xGjWxYZa5uZalmVksvsGA0z%2FdaRaRN1TOeUJIwdP0LuooykG2F%2B1%2FI1KhSkcA2%2Fjc0P54K6lmMIppR6bygEAHHtM1GZnwkE4PPLT9wEquZzoKEU7gU0TR49sZlHP7G6ZQUp68%2FC0uHZxUNHMwN8n2ivoxUzm3Kq414ne1Lv55kw4DiAoHy8heGu7pxYfWnMGOe0ZUSJJl1aNMc9hpAyRMk2g1knIY%2Bqzy3aYy3LhLhlrGADuQojOxs6jLsDbUXkO8aK1z0TI%2BQhVk1vijuE4M0ZIqesQchWAOgnpU7cxDA%2BCy9n%2FjiNKntIHN7A2MIOYs8EGOqUBB%2Fm2zdLOvC3%2FKuzsTutrLBacF3yIOp%2FLmOtLvmGEQv9tkOraBHQ85i8PBSMbtC6TUitporkLgstDBLYh3ooHqyYNAcSvJhUXq%2BobC2buy6SI%2B1m7ci%2FudenLQ0JqOOBu8uz09S7vps41c16iJfXzu%2FEcSwoQhAwofVVAG0sdLKpEJo%2FEgTx%2Bcv%2FEjB4AMCzk0quGfEIAz5UN9xnfiMNh7lq7FAXZ&X-Amz-Signature=dbd41e905858c3e38e807df0fa4627680240e6e39102187eaece5b40c574f6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
