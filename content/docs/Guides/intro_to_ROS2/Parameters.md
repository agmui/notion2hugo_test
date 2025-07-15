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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3PMWRQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCVezU%2FNDOZiQLaTrdGox0OCf5bYE7otB6zHN%2B%2FGeO76wIhALhFwIocZakaYrCiyRjgh4i%2FokuvPCJ2hBF0XyE2%2BoQkKv8DCEgQABoMNjM3NDIzMTgzODA1IgwLimSW%2F2nMfkXJURQq3AOMv36orEfqy03C53jK60SBVKvPXaC46YP9nPvGB7o8SsHF%2Fdw7KfWMoEaO0eFxQ6UYsfKdQXVUR0V65jvLc1vMDFx9LxwamR3t1DHlYEzESO%2By78fKX4y7XJCOgh2C7sx2BFciov9Q5P9Ln5sIW3%2BOm3mdQsvPVFaRzPTHxHsLmmsmUCCL9G076xzDKaY%2Bc1UMa6NpBXHiW5H627rM6HvQlsoXch%2BFgzOov0cOF36M7bI5fbXQFAE%2FxKQieWIFWQIfTvRYgtQaUdYAAmWd7UYfy5K97jO7lUIRx4x380ie4TbNp4WgcXN%2Fy2CdymnGbL3Nuxf89jPZMFfw%2FqDG91mkvVmqAtnqZCAHn4N9uL7PW%2BNIgnO5k14ChovosJ2oLPxOyI2QXq5ewUfkL5PSMiPbssVbzc5tMYkirmTx3jUiOISMb14tBO4BcLEfk1KEXHyKtxDnQrI4zNzkxlB9AHQwwQusGRN0XDm2uXx%2BYoIIjyBPUnmRZikWXulB%2F6EWhAHTaV%2Bgc1mlJtEeqjGvkXuBbfz2%2Bho%2BwXjHrRcvQC6Y0iXS1kHigkeRGJfhd%2B%2FanOv3O%2F1ZPmt1%2FUH%2FEF4wfpKphtYnAoaL1MuKbbPL5jcDy2dy8aKSnyXKSuug%2BTDU2tnDBjqkASreHtRwqPaegf%2FvXOqsylNQ70CkSjwJ0eMeWFr69mjqAhVmXsZPkgrXGsGP5%2FAfMbfz20c4q%2BZ9LPpkEccpSLhUy3d5mrtxA%2Fx5tdEHZawEq8O4YCAFvcQiiXfp9dkJNll%2FfNHKjIKovjem3i7HQ9YCL8c3YkMKOy43XRt0TYRpYxzQubxT%2BEN%2FNsuUfSWjqw%2BNt6ZbBJxASXrseWZ8MiGNh%2FrL&X-Amz-Signature=6252f54b416e477fe8485c6bf6bb62e5df5d7a4731482d7b24d532f92f0a5f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
