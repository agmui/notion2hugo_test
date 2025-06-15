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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQBXATWO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQC3PYbkrshe9C%2BAiCt3fBYPeg1UToogZnUWUi5PKMlS9QIgDVC%2F3FD31uFdQB6D6WcS7FIYCFFY4KrJ7j7tv7dGkwIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEAT%2Fex%2BKbEtCDxrOircA7ZnnS2IC8AWXo7OR1MltXhTHcqIb4vV7NBMBkY%2BlCF3oWAXNazj4VkZ8o2gwmBdeQkce%2F6zAzM%2FsZNJ3MAEiDnkxXmoCE4cOpxXe3Amyi4rbf%2BrAoqMALKbXkLKJUi9Vk2HYNu93ImhSHA%2Bv5mVyu3oG2X%2BC7cIJnTT7Wa3Spql1qC1cWqcZh1YtRJTtlCZev3iS8mHzgOuc4Ab2Wi6KQr2jNK%2FapP%2BNm1cKcg4wkcB3Hq2CHohhQdJFIrcikkwGf10vQsjoBcgcv4WKEOfwxJ7GKdda%2FMcecdQkyjxGiMu6fEM%2FexI3AEVUc%2FkwUxKsBo%2BPq7jOwpTQxW%2FTdhMECswmjcscvo6PbrEWocdT5MM1WFRn%2BpXM9Lwh%2B%2BI%2FMhAZ3H5OIVsPdJ0oNusyvGMyxMVuUJRjeC1TCRbv1IrlkmNuf3xlLBwYGfcCA96HbIxzNYPGurDLrzN7HcVmojBpAldph40UHRZlL9jC9NFcQ1zeq%2B6WmlCw6S99Wvs%2Fw1uMOjGUkE24FoTSUeF5cPlaYMRw1%2BrMwiQeNrDtUSDtC6rkd3gv96PDwhgjeCkB6TBEzw5iY%2BBFrVtewwAAN1n1hShQjKJwISnWzd7a98d%2FOL7YvN2bnE1X4c%2BpKlOMIL%2FuMIGOqUBJr9IVOHb12Kg0RUy1RlKtzmUUy%2FoQTTZS5lLnAAF2JNIPLtm19DnHZ5WplvIVAnHkOBVa0w%2FZsHLbaYERUM9BeHhcRrOAEspSegU9DANo1Hmu2s8PqpmwW9al8Hpfa1ik0wGz7fhOJiw9oBhT4tSKTeVxU%2FGoBmoH69CuOXD1I7IDUklECcchuOpUkjs6HLuGu4s1bp6z8NehvQFzgF1DIPC7Wtp&X-Amz-Signature=1c06e6f37c833d5c17b5cb0581c4dc6e0421125eb299954c1ac343627c3edf40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
