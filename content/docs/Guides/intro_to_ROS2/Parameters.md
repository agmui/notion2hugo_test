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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P37RAAO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD0zTIgqhC7FZRFi0tQHbafa2LtrjC3D6XX1Ibkb%2Fqa4wIgEajfvmmu2KnsPmvD4d%2FwJHgMADN2KuD%2BtA2mO9XUigEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLx4xb8vaQ2s4aXWcyrcA31lq0hItW7gg60KMEVjyh%2B7Ft3m0f8AutzxMPg%2FzuSVr5uWvIKZ1i78ZQD4rVBDzAptR2RJg0vbUmTb1KNjh21yetFNKOpu2Fg3zYnZAQpBzKodQ9rUtoEYkEnDg6RQ6HxkuLtiXO6M5GLxJBjobg6mVQ0AA8LnKqzpjy3VpfyQjPPOePAlXbgBh%2Bp9gmsXTLm5ZRRAQIGQp5WYO5miJv1Sc1vR0jbZIiRsNkqern3uAbGyGn3oEgCANflDWfEznFebMefhItnvOEYM9R97ZiW00r3PP7EprZalEH4wnFP4%2BsK2DHDnGhVp7KsbT4Wu0B61IabZjixGqDGKXaZGon98motyQP4ZmkijAvKJaW8cl0VRRUKBRf8kPGaP3MtNBIJw5sMgcTrul17O6b94Dg7Xe8Ud9rsRo%2FxQGjVH7XBVFjaWhrBHBBQXl7e0IYpuAGRQy7NNqSLR%2FrG843rfCz63l9TEQ5SZIg51xZSI3eLqlWPv28rs%2Bj1yfjxBYmTGlqTfBx9hUeXuWeeUfzfKtrh4RORikR4OfXBSZPF0g0WuyNDWYMHeErfdRV2di5os9ZXcaVEX5K4LvEOl7zcuWhoNl7DxYEzShDNoaoRM2BZI58n5zmr6zn3xlth1MKqS48MGOqUBD6b6xMfS8dyiPjG0dufJVlsKpS5j10mlJI8vrkdstGKyKfmZapsglKtTJ8I96HrQyUus1WhDnzAlqYlp6N%2B7TK2qGs9sv6Bd6Y6%2Ba3af9OZ1mRUhAO34knnvAv1yC5jTSLjD36VWA2HkEnnP%2F9eyO4YpDbDEfd%2B1jqRqjCYuIh0j570BwdlYLi53eisKpk5i0a4Csk7nrIscWaPaACkLw3bwAOla&X-Amz-Signature=fa9efcd90941532ba31c4bf3d5aa94f2554556d71b95f3110f78af8e463443a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
