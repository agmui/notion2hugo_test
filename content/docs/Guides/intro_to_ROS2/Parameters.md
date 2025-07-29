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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPJA3RGE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHmgeKnYYgNXKQ8LNwODwqJ059t2LptLBwC%2BLR3iCzMwIhAI8asDUOiZU9QT2cBUJoZmwh%2FMspWs5RQTjQRdg9Alt7KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcmtS6j4KV4Yextisq3AOYWI%2Fx6t27oBKQOlV2FMOfsh8WX16OuAeIfoIP7vv0SyaEdJC6e%2B2jfT65Ns%2FFVZ1Putrqr9Rchnsnx4jPyNy%2BWU0iJ7zXNBPJ1%2FLTPTha1J7ejTP3aHISqZq987%2F0DqOgvPNi3mieDSZFCoU8TnwA5rM%2BxOjeZCYTVNjohviNmypUqpgpK4apYGulb5J9NOJoz12qtjGphQw0vEKmEKlX%2BfiQkLovVk2iWmfL1iMRLyAQlvJeuv2RJXBZZLOf%2BIG%2FndR2PwNMHyXk2RJsQZ1dkVMTTS1sN6Je0AmYsedpqSh4NsGWpMpoVzLDnuOLJ8VIil45D5Arn1bovZk3AwYd%2FK0yYzV9gjPsBoczGGQthbTbVl0r8KflOef2a5gwXmLnFmGdcZIsqLZmzX2fOlgxkJ3roimOMNMqqy7YLPMN5Tbxe5NAkXF%2FXK1uFGsWtGeDc5ku49dxORuJVm0kbqug9mnwiTmh61pYuBLBaIo65iznjmGmcE7G0mnHit5VTCCaO%2BqvkJdbz3iXRwWMU%2BLfiagtqU79h4UfmIWzL%2FTXRTIAX9Ym1Tfnn3TNU8Le%2FhbNXWDWN9YDFFrFtejsqjYqWK%2BjVlownL4T%2F1nPQ3d3SXlW3AacABzioXb61jCPrqTEBjqkAZk8dh%2BTuNwejnQI21ZglsEsUAVMFyXFFT8kS0F7RphpVd%2Bs1LuabvoJOpZj6ifk2OjVhB8ec7QnO4j9I%2BGetFW0ENwK9FD7AVREgm2HudCRtGu1rikPPFjXslZ3qqlVDoZN8fPbcXWhMGlqrUh8AFVrdW%2BvZqRMlezYSeACxip0xd7hzDOoqmUr%2B5ERpl1DXYD2DmqklEapSIyTPB0klt9z4LS3&X-Amz-Signature=e02d7fd5f36e8d51ee869e672e1859b1da87b47367a4121451f829b65575b4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
