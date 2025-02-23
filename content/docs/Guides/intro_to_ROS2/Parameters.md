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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672SV2OKQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC80YQRNi8afyUx1DdH%2Bjnv%2BM2hep9v12wLoqCYa2HFrwIhAO0HifQacmuONI4taqwXHkAokee%2FkE4n6I8AO%2F47jOFKKv8DCBEQABoMNjM3NDIzMTgzODA1IgzuyVQebxfURQ3SoB8q3AO7kF7Pk0aQWMta6R%2FUbKhI%2BADUoVfE1eI%2FL%2F75QvfAGSZcfoYi3%2B6x9ws5%2Bxka2KX9dQWbSZ%2FDOgwunakR2bJIZnUp0I2yCCVCBciJxNDPZ45g4OKopToIT15B97XjlqLkQEE497lhR1Hal26%2BzeGLVe71iWALNbDK%2B0uyEPkN4%2Bu8e5E9a5WY%2ByQdbWuJYKKgot1bgaBWqZQSBJa%2BVLrpMU1ERm98tEQngL0i5e3aisEzWE0qxQAxyvymBDqrEEm9ZLw6ySWFzBGjoTFnwiHj8aMuCVtzvlDMC7xS1G11PH5Zpg6DOpjOJA95PaY7%2BANL8U3NIR4X4QKnwSLaxyCGTzGill9vKTvzYQUxA0FLq34XW3%2BqJtdVrHvWaVtxVO9ei%2BHj2xyzBN1PekKibELcb2kEuQs0KatuEfbtAo4Va1qQL1i8nMVBkqRaSVwxCBHhIf7IutE3va%2BNQcvoGFROTpIlmT6ansPYHjYjv5sbvhMlOHn5Q%2BjdKyRb90QbuYNQX6QaiBkxsYzt5360w7Bttpy9zdzqL9JRNO3tzJgJdy%2BopjfzS6GzzIlJ9YoZ%2BlkSNQWgT3gTbQOSE4OYkkKQ4eDj4GHQTTU1SppyiHa0Qa%2FfPmgyI4IG0z8G0zCnnOu9BjqkAVOUMjOw8ALxEHKwcQubAghpIDxQjcREzNg5WtJtN9XfErC3UdLYM9NbHKpfZWShBFGvYW8r6q23WHAu%2FjAz7DMlahQuL%2BFaZbNiDMWsAGUWaYVx9VRp6qS2D8YCNJ12LMYYnTokspFwG0euBLpXW4S8AgR1Jw1dMxIEy%2FWqLM%2FZhk4a%2BjiKxAShcJdCfsYSuN9rsEYjnwQOF0YURmteJahRay8X&X-Amz-Signature=595eee8e335aaee16d645951c011b739775728a2d555a9bed69edcb521435b24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
