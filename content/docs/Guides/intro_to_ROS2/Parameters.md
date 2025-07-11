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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDSZHOVO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPNoYikqhzieiX5O1ZH6%2FspL1KNsuLbV1B9L7uVuTjrQIgEb9z%2BpVfuiMwgljlPksuK8QLctNM9MF9VRn6rSfHyNEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIwBvfyHF5uvncadyrcA9GPWZZtsXc1pXN5uYno4QEbtny8zeuZZ0pTsIMP00WqBJW0rHqrfvcroPDvJehukmnKU3K3FqW8LHYPxsUKc4Hdsck6fIuvKKC9XISP8i4RTVTOxOfrp%2B8fyTK6p9q5L5svBa1Bl8sUZ13BoG8%2F1m7%2B8gMQK%2Bet2TDjhZd939aaKMbQZJPCZ5BUdi9ZwRfXQAa27Tl5xa120%2FDeroO6ATBz96uX%2Bov7%2FazOBP2Yj7hp55uOE5TUiZYmagVSM3V4jcpJXy3QLTNp%2F9LiE5l5zyIhsGLRgFp%2FUX%2BsZ3ciKzi7DwNQ99o7Qo1%2Bew5mfAVWNC2lu9q1Ldzcqt5%2BM%2FoGPN%2FARiTuLVGpDukEHUwso7Qi4hlMSE9%2B6KpFwPSy98dNcD0%2FEkI%2FYFAPRVhCztyQAnafsn3OXUu59gRvNCKU9bJEsMe%2FHg7pwpk9Cq4mb0qqapG1nuwvQHgURPHZKFuJpkeSXQHd1Aw39FCTb49abMEbdDGafACrEyzVVasBl2P8NKzudtEGWn9V5BGOqRLeRXTWxF08IRp6cIZWWFf11OQh1SFdFnnxfbWMZhsUn7rGEpHqEoVbwUOp2XSEvPZe6R8g4CktW9uRyBMjI0ATEzdSxREX%2FQzAtSPyURX3MJWDxsMGOqUBb4lHClAVZphGXCUT9qNTdSVBLx%2BTmnhbiyF%2BcMWLzwVJVWXJCFHmPUzUv0Ia1kYxIydo1v%2FhltI66Ws8Mt9S6%2FXRC3mb4QDkJGmP%2B1czzcJngz0Hm8QNO1xmK33s5fBiyZy%2BE11YB%2BefZG6Bbr9MDU5IJaB%2FeKPutIvzvzjLyy%2FT50kD6V5ixai9LR%2BVNhLKe6573JsB8OpwKd06m2NXvNpvof60&X-Amz-Signature=45fb13c630f92f9b43e8e978078480dcd740189919a2f8093aa77dabb93f6c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
