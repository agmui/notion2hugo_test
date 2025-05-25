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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBDPHZ2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGABJeHczrWy7PXrYFa7ivx7Kd%2BLpPKk3KtvvXY1%2FVdNAiBIMj4HkoGDOuKjWB2mJodxzqgY9P3ijn8njNawH3mzFSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMiX7GX7RdvcbjoSEkKtwDm3WmfYgxC4KCIFbRyQrc45bz7B1IbUnkTKNnXeTP6emhZLpnTojBxm7CGzXkNxtycOYorGYUAWy9MzxeMmnO2h%2F%2FGlsXaq%2BFkPy8pEgP93R9ygBKE9J28g0HA9idVo0ZG1kEIUEBeh3tiFhKprC9fSG1q0lPFoGm8vWBSSEtqwbPnT5RLJz37DD1Fbi8AQqdpEnqEZKkXJk9UMfTUnKSqzHQVPifdbqAiPoetdhuHU3Gqu1YyGC2wYRtd%2B0uOJaD%2FirkAc0f2%2Fgp4TPdXyWSLHmdy9v3gJKlEwJYxzxegjGoHgi5mJpV8ulB41uemHqXPTwUjoSl4U9fSSMlmpTQUB7KSOUU1x4UnEfwXzIgae1YhDVwFGstIHKRgxOqqyrBVkun8GLkuumwJWokii0CJ0q1jxDfxweBay257vZpvPtmp7A0qVy3ydIEx%2B%2B%2BkID1BK30NzFYa1rHG0QKtnnx2KStkVWPqm%2FchMYBCTQHar6UPt327fgq4nY2hECObqHshYyrp7TFBSMPdrE9G1Vrpi2JKDd94i1yDXbi9w5o7slKWxYXOoKwPbtu0Bp8cYrI3jKZLGq0WkR5hoYjTRv4rXO5rXkzxYIj6IkZjlJVRUzr8VZMM4L4pG7aQLkwlvXNwQY6pgF0nDVKDRRmaX5If3DqnEQ4z2%2Fk8OkBSpPibdtYPyiqz2NT466arR2KfbGD7Asi9ks3c2fpq9d2MxIpOtVCWiSoid5D%2FOEdv%2FQb6JePfDpE2SUOJPTyYpz4AzG18uenfF6noGCfqDP1XxQaS2PS5Ggz8imjhNOIZoh6dTKckeytMguwYeB8N9q6cchIBRsu%2Fv%2BQpqDBTCUmcdYuaBxYykBPQhnGgf9p&X-Amz-Signature=718904f3372ef5d49d893a89b919ac025a0a9b63f3f5327c5ad2c05e9cfbc523&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
