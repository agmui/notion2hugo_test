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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJL5W3K%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWJ7m%2FV4SsKIbBYbQMK0Q%2FUXyKjcffw4hF1Q%2B8Q2FNcAiA8S8YWX9Mh116B9kiRnP3JY2NcqnF5k7iDbYUmgdW62iqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknNzIHqAfW0Mz5CpKtwD0s%2Bc%2BfPkzu8cLW39AV%2B0WhabgCaZBe67nqogPgDyZbLTnq7BtD5OL41XKYkB%2BkB%2B0LcvWXdrxhdxLyyPbbbpG5b101z2HagzAccOLqkZlNtQ2dmtkplP2%2F6iHQO3puRIZmz80gd9wGQBr9%2BpPcNKqBNu%2BCIa6N7OtlaIi%2BerDm4WIfN2HqB9tIhGVjDIXLGQLvQJywOvTBKSGFl2XTNNHFV4fccU%2F3cWMOPwci9ugVejJmsAdXbgdPho3LQgfGmG1aQ3CDAt4JLkkqj7fX0x22MwMLt%2BcmvIn8rKtryLGbRXmn6TFqFv%2BWEwJsX6lyhLvPsjjVH%2BF0gRxBsqTJJaDtWsx2dl%2BUu1u8GXYR7XULO4CxQHXxov9l2x49GsT6aiMOhmGvkzJck5%2BeVaTdFMvLYcv7w4BU%2BGC2Buo6JMkWJTr%2FsRqQrh%2BL054cMSReto8HjENjhET1O042sKuo6tL4HpY%2BvDZGRGHjauuel4Qex%2F5cAxS4%2FaH9NcON4g%2F0OwBMKhEi3MNfX2feR6frQk3u1kVRQEAu%2F7lIi9u%2FavXouigWlxJOKGDxJ5h1n3Kv62abjPasfbYYBdcjJQ6XezvOeRgeFEev78TVLIoYayMaQTCFfqQpnfWgeijI0w16LRvgY6pgGKO55%2BI9a1eIcQy2zC7xIyW0bfEQabNL4ldwknVWuAmcNpq7ngySWa%2FtL00TjC3MXi4IO1Eai0B7kkzolq7b7dMy0MPlvUyMIZyOERfmf8xCGWR%2BBWHGHMAJt%2F53r%2BvbP%2FC5jnvUkN%2BjJF4xB897wcOCclnKYOrioP8gkRGgAwETvYAX2B6qugp8lcjOmJcrq1afulwRawczRZJpcAhlICveWE4RYB&X-Amz-Signature=f19477a01350a6f4d91b5869706203f505c5b326308e9bfb8f690bf3ce1a9535&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
