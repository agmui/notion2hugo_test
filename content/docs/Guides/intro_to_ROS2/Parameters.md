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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KXCDAD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy2Oh7mDunV4LItlgmk57jScjaou6062ZTgcErFvcn1wIhAJQI1%2BAjs38Z5E0tlL7%2FTkPqKU9Hfzm79MJjgQUBAEhbKv8DCCYQABoMNjM3NDIzMTgzODA1Igx3qfv3WMP4lsHY7Qkq3ANFd8NclvgeAeDjAeP6iXMCnu46Sybp70VNvlX2GFZmFwGXgN9RCTg2AYi9PoKV9E%2FxrffxlrJ6it%2BHLIU88m%2BAIblCn4f17oQTfy7%2FbPqxK7EVW1n3e87Yo7uqpVcKWnLuOHsRbucyc0GaTwsDRwKDmVGyZmctSnhZ7smzKyM%2B3%2Fj3VYKklcUPvMBfefqX7v415lXTAYNREUPTWo6Lco%2BqRWyRM3KlBgoZe4y2N5SHBWE%2BB7%2BQJew%2BMHLVp5y7NmfTDXfqNL%2BvPdGdg88jvS5sjZkpHUZD%2BEzklXtWtqtiMUTVc9wOc8qXpEltDi3yeOBfnx5oiZ1DFqu9LhDBa8bYhRmhx1B8Jr1BFAzffm3iqR%2BwBiW6DNQUgZrm5hIAQcvkx8oWD7FIDQJuWJ0LirfUKVXc%2BreQcqa7R8xmVysGY5otNIi8MtAIQq3EcMJ3wQKsm6enUqfxC3Rf%2Fvx%2FGIn59vgb9gWbI5OS3JruJ337%2F642IDxF7w16YxokliOi9HuoaxsluPPza2LXXLBTaE0fFXScsN9mv9D7RH%2B7BZRqsDVxxL%2BXmUBUheGdi%2FqYCqgk%2FqsbvqNyRAIFCO9Fscayac2GEikZsvlvTZeUqIMsMnbMCM2SD%2F90iFuJ%2BTDA0Pe%2FBjqkAYzGKkWuVYp25p7wprUUqti9RGWyP9SuTPLPTGSVxD9i6NhDIt8gLb0buvvNOfPL7E5WGjXID0WMlr6qNAzyFBG8Kf%2BUrfvUspjZssYhY6RJyxMM%2BCEjZ4t3K3f2jV%2FSVI8ajAmSxlAcIMvTn9aMUaz2jUHUChSVmkXEVwpMso3Hv8HWiujjGHSzrfG2PaT%2F%2FUO10UQo8K3KIvk4JzbD0qy2KCbo&X-Amz-Signature=82039cbc8f9045a9201105673ce0097b2ac27663249a4a41f1b8b2f40a59c36a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
