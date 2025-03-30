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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI3TT6PL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDIcr06SR%2Fpm5TVNA3n4ZEWZQwwtwr9nYcI5oJB19QX6QIgCfsUQh4FN9WKYws3K1PAnwcp0SVB%2BNdrjCVbY9LFZu0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDParuvBCtI5zMohqJircA6dciVblbB9QgbV7eRNTD4qBm03fmX5L77qy8gTO13Y1IBiVl8z6FnPkNNqctP6Ho%2FuFUYG1ZgNHOfoiv31E4lf5Am%2BjTPABQWo%2FxXuRtPtOTf2R1OKdjmxsMJS7PZ9jvZ1l607xS%2B0XiUZlVjuHOMVcVUKJenuWK0gbJpdd6pBbCTT3rqUKDmy48c0n6CgSKCfvxEOKzRXzVpCkQa4ACI04nLzKeWvtjbZ0vD7g8Ulgpni%2Be2zdB%2F3TELqeNx29hDX9JPuILIcngSYfupIkvewTAGBo3%2F8BKvv6TBhidrI%2BfvKHWLUp5%2FoFy1Ks%2Fwbv4BX7k8t5GiZegte%2Fpam5fIBEsJ2SUghO%2F9OkNU4xPEoQKYGR7YSBI8AWa3jFz2kGWNXbUiC7k1NaV%2BLtwV0lJ7tEg9Xyt6cNuSW%2F03Kj%2BIsIkWQNKW%2FlAYGMC76x97OIa1rGxuVCzWTR9eAR7g9Qpttzx3JRdl2%2Fd%2Bc9q%2Fo2gjWMHJN3Q9BYbriqY5VJ%2FPbx9NevwhVdCywEj3g2UWdAVGgS7a8RcBASgfpJpMvsmyBAQT7gl5az9iPKQp%2Fd2vBNmwG%2BTpOuYOfMG1iNQTs1pvjVNToz%2BgP9HbnCb8VrpZUXxtTsDs%2F2qJOW7SvcMIbspL8GOqUBCc9uKloeuXzmr0Sdw7PKwRI8ntIMXyDsSkybSDMKVh57vYYqeTm%2BNUPAb%2FaEIoqKlWPHmCtkw0BZQCgV%2FTkpfJW%2BmRmwtSBk9q5EupKAqkNH1PZGoUZFXHv9ek35ZaGWRyO%2FZtW1yJSuGn8MMyi068FnIe5MkmKHgFLAXPxT1NPHx4rSpg27WvqzXO4ItOqL2s2hzjCyy9dCqjKyKAhcALtDv2fn&X-Amz-Signature=9b564e7e6d39bd8f09b56c9bc4f3027dee2e4ac054209eb008c834f9c8cffe34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
