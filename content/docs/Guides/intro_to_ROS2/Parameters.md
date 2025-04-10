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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPL6FHN%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDJi%2Fn35R6Y92AbrPDShWvsLmJJZa0XmJiipK9w6SL%2FOQIhAJEwN2r2Qnmu8L%2FCGuNeZ5oPi82FRLVovpSn6BU9eadLKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy38uHFP0ZoRA8Gf7Iq3AP03KWr8ZUG4gsk6uqIH0mnV3Q5GZomU%2BJagzh%2FdFS8iO2XsrMZ%2Fd0KjpmtJpo7FgcuA4KJ0rcznKrAU8fuBWZCL0AyJVZgLpFkIG%2F7YmhQMM2jPPwpmzQsy98zedLl9JE3VQnaPT10rPEDmxsRnEMVw5EZajkLZN6VLmcfoKwPZWUm4CYlXNdLQ6yAJqpN%2BBmxo3VSVXmXCcoaeE%2BmbbzcHb9m%2BxJxTFugG8N%2BpX%2FMMJF4YnwLAsAkDi%2Fe4dalYuoa0aqQ1Rm5lt458K%2FQf2LqL3hzooTmlgz%2FJMPih5GwZKq%2B%2BjK000KIzqk%2Bspa%2FtM2VP72b1hMlqg4zlcNiwYZPmrJ51FkPw24MT85AJ3DcLroR4RXOmL2kfWgrDQgIQcGvYvIkBlN0KSTuFm%2Fg9ejLPZ49uWTZTPZQZe7GeQgmYhM1tj0t4mT4OT3%2FXM%2BJNz9DjyNMFK0Oam1dRVSnSy1ofuwwWnUlIJKtGuT6Ldit6CAtT80F8lRyocYLOs7M2W43kBKvrP%2F5uNDqdMpzkdG5ZNI4Rq9JUtor1MV0%2FpxsFrIluue2IT1Sr2x0pqt4eorlPGXVXNnAVQ1fIRER%2BG1E4%2BbALbqvPWyUtJREY59fjtDHtxqFG1hvjfmvXzCi1N%2B%2FBjqkAVFakrsVgrpitqo%2F5QcQDFy16YTosVLeTdlR%2BAZyKYcGmkgKSfq4YL%2FoJ9h9nVXGPASsSjBorxdmzRTXgO1Nzutx%2BA9iRQ4p9GcIX83ZeVo%2BhD7cSq6RmiN9f133DzZTm3qZkJOyARyAeIYlSQqeigteRkb9TIGXchQkvc80B%2BiczdZ1ebNiCpfdrw4yqisHIYmkeENx1adRlniXjy3m%2FqYY%2FUYv&X-Amz-Signature=3413f816bf12f19572b04869f1c0b25bd31daf0ea6ac017873f111f5c1c49e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
