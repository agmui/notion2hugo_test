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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665FCKUCM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDq3wo8oTaQdXJLM%2BuyaQNkPYLTYMw79yeUX3qS9dvZZAIhAOFOtEa%2BfQbOgfMdyLXXuoAtUpAwXKIKTxkywkHkT4YSKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgk8X7oCrpQMHPDt8q3AN%2F10Qk9oLhQ7zD5amma1MXLUVTMZKbD%2BjbJoEEwXzmBRngF1SyQVByGQEFuiYkthcKj9AgxocifajItQC2IfoXDlsvaf%2B6IlujlhfOUbfsQPbWBoNEUwzMR6H%2BCIrRRecjK6X7s8TGPbDuWwPe7TiIDl%2B0vPjXyguwROcGg3%2F%2BYno7fUJYb9ApORWXo6p%2Bmzm36h7qjT4BBEd0Y12SI2BHkACWjBjAJ7YeE9FQIJMFPx%2Fy3p5UZw0D33NWDhNt7osU9m8sa2DcOSYNPlKsVw2P9bISNn9%2BKhONQ2ZzHk6zqBs4PDVKkmV9ZTpJRzeohJ0FxOKKkT7uCVAIesDvpId7kJR0r6S%2BfREz9w32%2BaR3HwWo1FgfaRllfNIDGskyzSkGQEP6XjJZqvz1T%2FFYUX9yOcUv0JeZVY0z1JGa%2FZud1USIsSKSEqIZwPiLk9CfpJj4Ga9YBGjdsFbR1u8AaCFDnfXhUcNpfiBBxWn5sfA0O9Ng22bxoiyaB%2F4rxGrWVCaueD%2FHNpbIN1Y3fqVDZrdDUN0q8f8on6xs693saGHk78%2Bh1ZlI9AhgHNKeSnoMlAfBopUlS58pzocMdDhVaoYu9VlKvAiXa%2BRpBLBvfG72HaZnSCawbQnsjlE7ITDB6bm%2BBjqkAVrFqYD97l9g1qb52eG2box7hlsVYtVP4aK3caqjh%2FKiEUL96028OYuBIpWF7YlIXGSDHmeOuYvRK%2FKFfudfFnDBmZmImdEH3BIwfOrdh%2B6Mhi%2BvOAs6AJ4d%2FptvsrBpLZsmX%2BkDWQVlf7A4OeDZ2zj4UIzfQfRG1qi4gQzhYR5sznLrnkCJjNxGiOnxdNFZoJG3RmN%2BUNHMGwtUWmexl4BvrYNE&X-Amz-Signature=ef4a598263a589981105732487f942ee8bbb52d1ec072fce86c506ea373f696b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
