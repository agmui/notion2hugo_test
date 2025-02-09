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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWMUWCH2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEIeEuKzMgQeEofHDtjC92Ly1imwxx2gtXKWjWVSwhtAiB6rlVajCp8HeTdm%2BahfKV7TeTYZ530FQCKtqTompDoMCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvdg5qhOXR5V9YkoKtwDuy6PsqbND4Z2i5i6JYHU9wyujc3MLgLXUo3npCf58Hm1lJFNChZ%2BCHE%2BGd8Dc2kH9NT%2FOG7i5dIGEFEwLqW3%2Bnu2eJpeiqa3U284gR8xUslQdh7Pxb3xFNnG3P09a11DlFWEUu47fq%2Fbp8nI2xXjx6CsVS%2BOIq6n4SOGL%2BBYNDH7iYiRhRNEVeXzOFBjTwHstHK0neZYcuUz9Eo%2BmBfnvLrxoIYc8DcaqZ%2BkYdOazcviTDeBkv0v78i17alAt7PvlFJ9QzCXBYc1KX61Fz9jF3DZTrw2IRXH%2Bn%2FrSI6NhAmD9T1Du9ODgIuCT3nrGmA3llzCPwHbs9zgeftnonjIGFL54PeTgBbOsMT6JnZvwo8KHnvFiI6kw0Y%2BHts1MJMav%2FR1rOkjoDAK%2BlvrueECKIxg79qHuSIfmKJeooIa6IS4MrPxy4QRXvrwBbHZGAxB7%2FYSQK%2BJ%2FkNRp5KXRWGBLi6JI%2FaFjNQsWzkuy3VqkWzTVSG7UjlRhl7RfMGI8l3oUwfikpK8l5DFz4xYx%2FOyF%2BFJliHAx7XG47PtHtLDEIYvpBVy6eTs6Dv0gy1sjFMz4NmDpCK6XMtpZE85uBzfSOot5i9cRVqgnIBulOURAtwGm4LTOCbYnBIsc9Uw6r6gvQY6pgGWPGPJYId%2FXyXlmxkZtR%2FdsdukD6nua7JMikmfrl9AlT8A%2Bn1a2DJRMA7LcZvnrtX6RuMFfkJwTFYKJqjbgK1KkhPyalHHMcjFORUQm5jWTZzsH2NMixwgoQ7icyaPz0nqvsMkcaRymBPmB7R3mTcnBWddvbu5WHt9LSVNud%2Bn6mKYNHgoPCi8TUdcLDDN1l6Sme4Gc765LACvEcp5LsXh6V6nmP6s&X-Amz-Signature=ab5bc976654d4042714040f52bcb1456bdfc7bd77bd278ce7b117349e0bc8f60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
