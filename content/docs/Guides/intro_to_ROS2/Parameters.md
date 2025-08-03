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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXWLTLK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNnWxXEZK9PMcIdToblqPscz3U7CIZ6amnL15xLjY3QwIgC1B1HtXQv%2BVkSBk%2BZDfNxTlJ8NCPlHwXyxvTKyw93Jgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIZ8yGltSV9dVwSQQircA9ls6r0XDRLX6%2BbsyJb24Sd18qXeMkEsN3KkOcNKLCByWBYBdIt796NNqWrznBXYmpFJjul34Hsv2Tp5CNqqzxCvv6L85F%2F3TH0ZaFF2X%2Fqi9QSSgHGAmCz172jXXeGuhZ175c2Tz3RXCvioiSXXCdtnmiU2rzzq%2F3mJ4RHzMOgkY5Xl85bwBftffR%2BTM227IKQYpDn1X%2FPrXy7LvfX2PbcMnaPrNuH4D9sVjBC9%2BSVhR%2BSnsF5wihBdQatnt7ngCl5C0vN%2B7HSdoRBMf3Q5GGVFq6Y9AYHKPWwgC4AZWwHcRMRzLjBy5keb3ydCE6D5BGpdFgXY24%2FOsniIDXlj00a4ynaQpBSKV9NpiYMnn2i35C82Q%2FZQl4fWxqm9ZqqO4mWS9Hmwsy%2FDNrf2s%2FsDQggf1zaqA4N6JPVJ2GwMNRL0QpWTr19bS6pCCXTKO0jBKx3kWagwD9K7KdjWeiZntm%2BKx1Ml9%2FjrU52SF%2B%2FBeJgz0zt1DHlVjGgQShs7X7kQH9pqihb23e6BGkOkodyygInRMvLxUXGD9HgeyXp22HeXg2BBi%2FKzyj6VJ7%2Fk2%2F8L%2BMoWYE%2BDK8EnbwYXeN4Kb78nEpsVQgWqvyWp9L41soJzAzR%2FbU6kK4KiRliYMLm%2BvMQGOqUBLtUjR%2B4FFoni0dVXFNUFFETpqDh4xO5GYvIYDvXRFfEFjPb9bBk5m9OvRRmsQpZk3LjwDK8hMM%2BBTq5xoFkowHdOpnvEjJ79kv4KBjijwIN8DmKcOjvI2ETWNjWedod%2BdW5QdFBqdSaMCuDBPYNoIoTXSsTKbcMLbrUr2TtazKASNLTFguvLcR7xaadO8FqFIV%2Bpkjfgh51%2BnCFa4S1IPxKqJJl8&X-Amz-Signature=0947ad494068e51dd4f32f295b21736a60c6daab5dccaf5eb136366f7f384744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
