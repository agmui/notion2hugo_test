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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZPNSUHA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD6NpSBFAKrRj8Qz0bTyhuuDeXPOx6eUCwQQVC%2BKLmeYgIhAMnhqn5c1ZCI%2BxGBJlWG27LVmJ3qEqBy7VwogTdE8K%2FlKv8DCHgQABoMNjM3NDIzMTgzODA1IgxzU5ytlOQ55m3b1hsq3AP5C5a3E%2FoSY3TFZTOgeKZs%2Bi4T4J7a5LRD9sPy3S2rNApeiTs8nWdXrAhVgf7TaePqvyycgspyHiFrrbSFLLKBVSiUsNQW1TXCOrTTHhW5gBJbPGfBUMiR%2B9XF1HnF7ZETbNn5c8gUlTfzPJgvKqUhpCB3EbH7z2zUrNuNlHkuD2xWd3FcZukwqckn5LqtcV3n%2FuEsEWFgXje2GBGcTNuQRINH0inHBlXRdre9nIjkJH2RuRhw3Ty9R1CTdeiUDKGCCBODMNHUKoHvPSlZCGDXobfbinEWP8QlH2vr0qCTKel9s2byhdKTIIQFk2OVww%2BdRn41aI2eUZGkFUF7liSQSlN%2BebzhGtM%2BVLvqOc2R1FN66mZ%2BPZkc9CS6Pln79PA5W8f1BBNZFkYFfXs%2FZ1yWEmCGlR7ACTlY37898p7JDU7ce6tgJITEPiODB%2Bz6VY%2BdqwhtRl%2FCmDxtl2wRsBaxLwQK3AsL%2FsVXXJmyR75ZrkJat0oT4Z%2BcT5Mv%2F6%2Fl%2FRHnVWhn8fTHv0bs8htB5RokY2pSz9BQ7q0ykmMBwKiptqnuxVfRtEZynbYKZfdg3M3tgw%2FRYOXKZ15ZqVUkGwm9ow7fVMpo4I4QtNs1W0ZBe9QK5RVYmAZVoggYyzDeuK%2FDBjqkAZJKCoGD8gtu2nLOwXpPWkrOwJ4yDPt2Ulpm7QQ9WVAM2SKsn1l5yDwPY4weMsaAJC1HlRsUz4clCGcyV4342d74k1kE4diVkRDuOZIpbgoH7OIPqB662C98C1yCgC4TE9qKroOcvbwPkiZmQO78rVKOzpddoz5spaEv5qm1Qmflu8x2FdBO7cb25jAy3QmsdNxe1o5fNOLTBTyE5tDzmibbGuix&X-Amz-Signature=02ac2c6ac5b17b0a7420f1c406afd822005b944f53fad3dea4250239bf124809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
