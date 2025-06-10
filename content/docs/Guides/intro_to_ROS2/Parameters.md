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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVAMXNJS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5W4SbfaswOquAY9oxmQ1Mnw5fpbXrmHQDCPWG5Jy%2FngIhALOv%2FEZPjPFnCnawkC7yF2UehphhIQagw4PHZCyckz%2BsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1XUjMjKmVTAFFsBcq3AOo8i9NsUal%2FJbAeY9XJyvkOyGVv2RRM1aAq3joo7RMhXaNg%2FjVLdzO8cQgYA3rJ%2FzB8w2oGbILEYeAS3%2BhmIOzCFFvGmLPEwYbPWBQYebldmltzxv598NRpjUOE7HoqZwkDEHlAUIQgKGYuBMsawOVSxkuzhPNfVpqfDim6sHuMqiy1rHkr0sZpjZWEOszLUmALCx9Ic1XdbLc8dt3QI2NNzBP%2Bp69ftadrHVADu0kx1ngczuXsZR%2BpDWsdqVCYJmoGCfKawoF3kdO3JTxXCyEttsTQ6emoIbYpa1tMsMsn35N266%2FCwDjbn9rQUl58%2BsbI4jtZDhEsGl%2FWrDAjaSPmsyIPHiATg7G9h0IXpShMqKYhKUkdaZ0%2BqMjFmq3rJLU4JmVQD5S3QGky5OQNTh9ZQghQFh1RB6DiIAYwqL1us1DVxUQm0oaU3cEr24ZA7HyqFI08sPEZtBl8ipppd%2B7tTq70Q8FHo4gB7YXanuP%2F27FckDiM5Jk2Ir4MHkEffMwu3WfxsA0ID5ukNWY2DJHTVKqHYQv63jeV3yE4tZdjwNG%2BUIH5Pc7ZVPr0%2Bo%2FNE6tdFsKjBoBrv74XJu1Hnb%2BxOCF7dDI%2FcEeBRiXXt1NOVKhEjI4iuFrUepDOjCg4aDCBjqkAUOeIjWJO2qRIxkCZRTnO4GvQ401ttin19blPjVxViFYazMfk6VHPZAP2tE1VA6Halyz9QLyUWn8KQVhHAXMrNdc9D9XzWx%2BaMbQc8bAnFKJc0OzNS2d4HNHEqnJTYedfUNGg%2B%2BFir79GCGLjLxrXyI0viZogWCgpkLfailp34IUYmvJ0IB%2BUoLuo%2Fc4dMOxGiAHfdHP310rGrJvUM44%2FsPKe25h&X-Amz-Signature=84d704937d23db1a0bc7bd5103ac1557a6d3953af895182685825fa10484c26d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
