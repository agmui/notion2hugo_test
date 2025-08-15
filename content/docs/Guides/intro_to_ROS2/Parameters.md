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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZYNCPC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFQPOj4A4hZUYPFfhK2GCR5Lq8OynZXdOUwvLKeenmGAAiAqj4VACLHj9IaufayzSg%2Frsgqo9tzQQFmbbke3eb36zir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMON3yzwVzSxk2fJ1hKtwDw0bwaP%2Fh9ebcBPKeH8o6GEvmbU2LUz6AQ9aG3Fc90LEBk1oFO5pfkOSn%2Bu%2FNI4ijIeZkBZzVy1BbEnfEkWYSNiZ3xEqZk5knawEkuSj3%2F7HVSfj83tMHylaQdJjcZlNdjulZUaMHOSn%2BzOR8iyN5Na%2Bxxpyaiy8r5i7pPMMDSkE7KWe1vwp4dbeHTafMypXDdhWgopC8CgELfM2jMGRIVFhJ%2BzP7HujiuL%2F62Lfur6O%2BxGpYZABjRmHCDsZuf%2BE%2Bb2FbKEHxcU8yAHC4zYuIY%2Bxrk3aiEsUmfgLEjx9F%2BmkthMVs8o7GpQffKgBTvgQ5srhbYDZcJhpzgj65VNzrN4dDSulMX6HOdmAaFQFh3Cp8RKNy1e%2BVRgJdNuRxIC%2B7Rz1FNt6cl06nc4XReJTrI5AD5qhVnBeojtmQJfhQZGXu2TS7v6mxmo8TmFIS8mXWlTQKnt9JFYXRzMCeHrOB7kQiSYrr%2F3LJtDsKaNUGYvuUIQiAaHiaWIHntWgmmrn5OAAQsBo5Ys2atC5HE7uu9fPrS1dFzYHtvP5vuRXd6vuAjui5h2EE3MB1k1HlQvRnfB%2FPBRTB3wHVMrlOXL0FfpXXYVBlJZseyHmRezqWw8MCMGK%2BXrugqOFIFuUw%2Ffz5xAY6pgGqweg22PkEcnH2BGAKgkEQdUHDwpXUsNUK3zdavCgoTZD9FaVYc0mNs8qJMXb%2Fep5irAm5jobsQhBPxvMGBP%2F7HpvlGwPe2VDEGQMxiBedadPX9B%2BL2Zi1BMtAp7TWLovAEGecw7JzuL0MMf4sW5Cd2Y1Qe1oCDeTfoM0MnXhC6M6alI2LveupIvDPnSwojdPJB5kuxxxFoBQtQaTXw8fwx0ojFCGp&X-Amz-Signature=b1ba861a2e5030877b36a2106ef39388bba5d0dd76f0c14f50b9f6b665b92900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
