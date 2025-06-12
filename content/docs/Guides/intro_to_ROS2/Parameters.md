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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T66VHWLC%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIH4O9GihR4F5nHt3jRI6eNOyy%2FVNdnt%2F2rBoYU4iIQMpAiEAjtKTgEI0%2FGIcAQsAiBKFAcMkoOytGQWqZwXkDqSKaQQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqrUh3f%2BV2T6i63SrcA8O7MGI8gkYpPes%2F5ZRmmQgfkZK5Ox3FyCgkJhUEnrCVF0TlUpEJ7WodD2kV%2FPwaI13DyK9yh9NgswdiEqCoexGufYFEw1T748iMTxah7aNbQmr0lKIcs%2B2aoCzm10yaxGYlX01D4CMPyE9TQ5nE%2FVcK09uC1xnHsF5W63ATjpV0ecHWRFgtE1mjwphpPbOuB0RtMNOBfAkf3bQGUgIC4o1kFrRMba2BNC4lQk8dPo%2FkAKielccte3%2BNkvgMNmgPTj3mq7VEwLbGxYlQD%2BcwtIbHz598X%2Fy%2FX7eiyibgWLQFEZUILtkpIX2BbRnhWMRQb0bZBXgIDWPIZ80soCtZgCSc2A5s%2FGILkSt3pgcVmeeK1L3yUX9hozXIKhR2UeViweGvRCocHZ9OdPmfRrTcNKF7u4oV0X5EcLxf6gEn0UhXQVPzc3AX4BiLGZSabAXPrC%2FBDYoOql5NFErp%2BvbDc%2F%2Bn9S4maA0OIeyeddIp2NnS%2FYToBXGCOq3vWJS3Y%2BdaGEEk1n7NIIkNYHsbF%2FonhNhMb0ekZcwOwEEE37MMoRis2VZ4n7k8dNPZqdW6azp1pCcF8%2FebAwWH4dNQ1a8uS4Hmrfqv8sZXl9zqUHl6ZEE5z%2Bupc9B813BOpXCMMLnDqcIGOqUBzB2U7lDhlIIKE200%2FEZ6R6hzwPYswBBWZVdI%2FjjSEHfrkbfMorVTJ4M3VDjCLzA%2BKVfmNjos6VmtqagtjndtZRI0Q%2FEmBKXx9R3OYjYTJq0WzUpsftgvH20fD%2BCwkFO8Lqefkr3nIlwPxbZfD%2F62Z57A%2BZfwN1PVn4GfQAkijMXBlJlFlYHYrsZ8wVUu8FrAGMoIP4364Jwm%2FoppPZ1m033eOz0H&X-Amz-Signature=261e40359b84b4534b16946d521bd33c85bfb6530b5609f8e65a2830d2ae0e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
