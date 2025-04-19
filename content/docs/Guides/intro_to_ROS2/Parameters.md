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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYD5H5HQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAsBcp%2BkF0YD%2F2seUifKG5V8Bv89HVd%2BbMBX4lH9bF1GAiB26tVMZgXOlSeNZLrvio2t7gQJwLRCLShFivefGstLyiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv%2FlTgDqsxaSzgfluKtwDm3QwJQmOumDtexPQ8oVbSHQAC%2F8Cgh8pZ7aiLdevbZSwBxcJGJ%2BWGZ6cwMM87%2BXDBPAAaPNy%2FX%2FBeZyc98W1zL4t7lQGBZ1ODpJ9ml2VTKcszIgBRZelyQd9is7sfW%2B%2B5xWK3PMbJfh95QRot1uJtyReVTrj0%2FGHSt%2FXZbuAneqScrmH%2Bq8hvfGl5M2x7eo5vh9PBVJkLUbBd7DFkwF1FXjiVZwfPLd8U4NvtvwEp7X%2FCDW%2FRmzGq9wcaJOxwROSM73JnxKqOCkV3dzAQRJjXXJ0Y7UXevAGvCtPNhnfPwrn1euhstFc1yQBihGX1SRjKMZ0hSIY3%2F%2B4hvgB1E0KPV5oFUMFDx%2Fol29MxSOHUrAxfAlr0mDn6fjrCzby77GMF36AI1rRBX4MNNb4ZOC6791dKUhF5ywobwalYVuyZmEGxM8Sr7elsmw7kXFLwnMGFoOGglNzyMjWCLe1vrDdW3cRpQfGQ7MnKdvYS9r2nY%2BDk12IS1qvrkImc1tGZAR4%2FBlno41nR4xuNskVBcgdCjC06%2Bu7HfLdP0YPijjdGV7XcJVqEJK65Cr2B1Igfs2gPj8tYoeWiz9zimLwOBJSF5EqeaSYzuTNnhJgKUxLWksbUfO%2Fhat3%2BMNdjjQwz6CPwAY6pgGPJ%2BlHlz%2B2HhDNzqGp5cjgJS%2BJ9Vbh8oBv%2BAZuQvZ7KDB%2Bijwoperu3QF%2Bf90hiQJxv8f5SbMZERtTargPoRPAiwC1GSP687s673MLw9rXPx6qvVHzrKp9nfPQVK4ZB25PE4Qy83JprGx28o9KttzVPackKzfl71nFdrjOjzFy2qe6ae24n%2FVJZvJqQLjD0p5O6kfjUV3VP72AzkN4ZXxtTu15D%2BWw&X-Amz-Signature=c3ffc5cd2678e0486e4c81ce018e818f1ba7ea37a08c5ada9cffaeb5c98c403f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
