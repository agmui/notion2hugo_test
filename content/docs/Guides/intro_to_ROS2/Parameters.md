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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL4FKMVN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICuK7C3GaKZy6rZRhRg2bI2glmY%2B9i8%2BH6MwC6L4GPh5AiAO4VZk3K4gO6JJ2dNtYblNi0ecUTrkF7gbBxC43OmYWyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7IHfxJ4jYItistPgKtwD%2BR3xrb0qQmzjTingCFjGMJIbR3W%2BN15lO0rX%2BslK3bhgjgRkie%2FVlLeBpJXzJg3CDckVZHGe7W278%2BcGkA1TEbN1zuw6WfWA0YNPHsO0IS45IdvoZkJjEgRdG2IbYDwmY%2Fqnl%2B4fbaI3Wrsp0bhQzGL%2BbYQZkiKuEo9WPUq2Ijwg9VBE42jBIeeRFTq4ne0S2pPnYIa%2BLREU%2BBjSQqwwyDbByP0QKr%2FKzM6Gyr%2F6NFlWYIbTHjLkdLvGs%2BKwBb5pG4eMPTWrl8wwUS68Om%2FCQNafZtvzouc14Q1s3WyPvb9JYHXrw4HnohVZ8smd2whBIT8Sh1u5KadOV1i5u58ZABczYvy%2FCD18NW3aElgHRlmoYXE2Ls5uynFhmvouiRbVp9fU%2Fn545vKfE7JbMbG78dLzkTJ51CasRa4nWXEyKufpCE8ScoiwYvHyJXMpGb1VGErMboAGIb7VnXp%2FAYVFl%2BNpagXt7OEoaWPjek0mTEbAqxA%2BbE1wm5%2FLdXqqDXHYVBlsWTjW56G8vHZDLt7q671NIwurVWaETMQLWIoWx9Ap0lwg0Vd0SyZaTzcUltLt4r5v9XV1WkRYJPD8f%2BIikeYA5TSUTULtrcLg9K23IItd%2B1aZI5qk80tTTmQw87L3wQY6pgG7eILoFNWYwG6dql3e23PyNbBsCF5cGXtOqpfSnwdFWSNz3SsU9WfjdzrcIJB64cFu0pj5NkYDhzdVTr4cJask%2B%2F%2BUnN95rFcLsRK49MtBJtYQzmBNHYF3Q6EP6RRD%2BvwKfEZix8sxHiPpkMEdtvgWpRqXo9wdkDXzb4TML6OWIcuUC1onYk%2FA1ZTk0Pimc0F2FbxKFejg13wC6C%2FwbOcWiIRrZazM&X-Amz-Signature=c9bc69e4410fea86535eaa5168f68f1deee11cd9d5f24a65def5bd93d77bcea9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
