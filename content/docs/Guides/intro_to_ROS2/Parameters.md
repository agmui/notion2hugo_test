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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUJCH3Q%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCXkmV3G4LumVbKaMuSW4vyh7%2F7KKqkgC%2FDL4ujIujl9gIhAOEEzP3wx6EiH2fZeOfPeydMWrviNWA1aLeTavHoXy1CKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B6J6aUiihg3xP5vsq3APA6Mg7byCBCFZmJE9BzmV9pL4%2BEAOAv7VICnIHT5OzlyAk0u93ScdJdbTdqIgEYEi%2FWRp%2B%2Bp57QPzbGRjY%2BaxCM84MsaWvDHXFizqSU%2Bd0UVu6w6b1987g6fAbWXhZjqhbJaqP2hJixm7GJmzqv41rUWyveEMvM0RcIs8FtyvCTa5gboXUoQ%2F0usESmhDXTOd0jEiHoV8u0KW6bjC7MFgf%2BrAQ%2BBQRcfFiA62pkmSvedpEg0QMv8xtEi0tGSyOOOua2Ol7mfLP6PfQguffnZM0ENNE5L7laqmXIYkQVsn24Zdgl02jbuCysf18D3hviO7hmgysB0rIaOk8%2FvVvt0ZRHwy7KQ8GgSp9AImeCvvszjyjMNQRkGKdjJYQ80L%2F6vB5%2FT%2Frx1ymGmC%2B%2F%2BFVBjyJ0Xwj0E4IZ4l7FukDnFVYtoTETHTBBwmQ45ak7a21kgA5gfl0OTI94cmKORhwn1YsZgu2vfyE5zNLVkVo%2F9P6WUM%2BSkjnudOpipPuoott0szUsuXyslg4JY5ZV4AhFUxfsNqYtejV9weZ1argZmsATtCLU1yphZDY%2Bv8iTG6VCvOrROhGxzKnBLFcYH%2FBKfGtI7HLOrDprlpKqiY07W151q5bp5IlXaOeduaA3zCfxLfBBjqkAbViYugA0QAic0lqnQsnqOVx1IvLO7ELA3DqLq4uhBhyuesLo69TPsrv%2Fjb8FG9ezmgOCUEL3KKL1sbhDEezQcbGoYcZb5xy%2FXS5dAfaozeA6Ps2NSBpxwZQkCIrez8PAF0y%2Fn8JXSNm%2Fk1lre%2FBXqWuUyJdpmJHdpBKXnQsociua5AE4pIXIpNcbgECayopqtbZd1jOsmdNfxE%2BFFsJy7nGZywz&X-Amz-Signature=0f02d5566bea3296e1e824967826384b9e7e356762ddef50ce933a51ef4d94be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
