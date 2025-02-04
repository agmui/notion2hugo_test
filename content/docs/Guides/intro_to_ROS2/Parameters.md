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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EK3SEUA%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDBd9swiv%2BPKmKv0FQaI5xFNO5zKY5GkGbua5%2Bkj4aSSAIgTLVBR0fRvrGxCrbNUMA9KOylrhH9P8Q145By1DosVzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMer6ck0eZDFFgSo%2BCrcA2PFwX%2Bh%2BbRC4Pa22rEt0lVjv7CwqnfSAUF4M7tj9%2FGYbIl6p7%2FxHkdIIV4f8U6ZotmHvNcmdy3YBTkCtfcHIvSDaIrLRpLx5QEDkWmgnzspa3NPLqgvQPx71bKfHo%2Bx3SvwR4rv4VRJl2eR66fhdPI3qAwAFbny7X%2BfPLo6yDzVfSul%2FewM6IY09ScFQM%2B4VJaoi7zT%2B%2FX%2FvfstOYGIkddThRpQ%2F14%2ByYRd%2B4bduTV%2FAwsZiUlHdTJ95cNa1fq%2BzoWXxD5H8S1WXSA5pSEa1qSuyI5L73K9%2BCQhvrV77yPmowts7lBJNHLTOwR1T5MjWLZ6edRXM7wBBybghuprxSlbITQiCxpX25FK6vFCdzQNXCjNmTjw575ZbG1wxk9JuRadFTPCADPL9WLaTdsIre%2FlcGDwb49WOYphNMEwdKPQm3tCou6X92zPzElZ6BKghZB7lYD67S6dRWQHgB6rILrGYkbFKCj6nHLhnxNpjnyezWB8A46BefbxTIAfX9TqQju5v8QUsnMqhkO2V0fkhF%2FbZBG2RB3OOxJhHyyKqy0h7LVZ93U8i35J%2Bydf1eSu6ujb%2FH4Eijjn4Xglqs6pqVUNCQrdSIDx1sVqo4RvQjfYao5V5RlkrnAOSiyEMNjeib0GOqUBIM2gm9IXKswmYgTMNKtXvio%2FBmJZhDWfsSDOOmqclGnj9ZkNpO0P%2FIcPeuitVHLk%2FL8IHEqMsdPCAqX8vQFNFelbO6%2BjxrpGxFu%2BHUuyKr1aUCg3pT46iZnJLJcZwXOOagvAUafH0H4g%2FoIy1K8TbrEAcKRmtMi6pf%2FlHqbb%2FW1%2FcsBKBPFAgcREosE4KSj2L7PrZE1%2B3XDF2kMDokWm06N96SnS&X-Amz-Signature=30f83503f2dcc9d385ed231e31e4fc15d564981211c4f6d50b4a0e54e3a4855c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
