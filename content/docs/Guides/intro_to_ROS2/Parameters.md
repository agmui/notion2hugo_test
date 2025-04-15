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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKSEHX4%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi%2FkiZBMyDxpDDZRMYW7XRjixvGkGrMQLY2J2CBMP7zgIhAM5CcBQODATGC%2FS%2FfM%2FqhEyizeDBPfynjjd53oK8zQ2YKv8DCCcQABoMNjM3NDIzMTgzODA1Igxy5GGeT9PhVVQ5jiUq3APr2rziBFio5tQdzmSg2eKhdjkCV9x0tjyCCsd%2F5hF7ZDqxL9hLbsMODYlBMb36r0xdyq8rOFlJZXqtlkFOXKe3tXhEtTsepGMuxUwezYFb5ObMEgaQSx69Itmr1f5TVlWi5MgkoSrbP4qX1KabDsKFuUHYRO3p%2F9andRaSO2HfmEFhXqbyuy%2FLSi5wCS5rn6AdupLp6FhRLNJozpHrdbB7MGDknIImU2hq8bZG2TfPQEczWcapuE7lEZmrBlH01E24zAHhkiCpCX3Qya4%2FNkRP0cxpoFBemQXBGd6ST%2B936%2BKTXoOkgA1ntpbPc4R8BAf7M6HxFaEI7c1aU8LGJVLnV0dGX4Nhch6F5JFdgpsk%2BE%2BTglTFNshZz2fivHOwCoawNHU3QfbcoDKV1ju7lgn3W0E02pSltk%2B1B%2BQs2s8noEmkvv3mfSIS7vjXjxe85dT%2Bb28UboFCFZEcECyEzQBMB9k90UHPFL7ZbsAjVlZ64C%2BbR3C1m%2B10LMQPW63DN7%2F8KbWxTs1DXKnAGIpttUeSUmKULMqonwzlKHchyC%2FpqClE669IxF9VJ3OC1FLc%2Fy25xHeelpWeMwhT2zh9mhggqoFaJ3FPBi8AWSrqX58sbC2tIcPgRZlDmOCwSDCz6fe%2FBjqkAX0SASaOq3Z7HOARCxhEivb4%2Bd4oim1asifOu1t3QRj1lzzOjjry89iQESE9sw8Z1ANFOAnVJQpuHtkkQWynnzrwTJp%2FR146%2BjhmluiEbeQ7LEhW6Ft0FZhEE4IQYJy7GsLxukoBTnuBI9v1ZMgHX2OQAROPiGxJ5JJHcc2IRN1DiUi92C%2FLQg2SUrQuePO4oeEuExx1%2F%2BECOR%2FLqa%2FSjdAjjlPo&X-Amz-Signature=a7998b0954fff9ff41a4bbb9de5ce39c1d8d1c0ee68efb6256a9ed25a5a5a6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
