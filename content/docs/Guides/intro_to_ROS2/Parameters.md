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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJOTUPN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDPfng%2FYG%2FgHvCXKNIT2fU7vdqx9f5T%2Fae4bT3twCWAdgIhANM3LDLHyYJ3bLk3Joo3ZvuC4VhIhLvsfiW8IokNu%2BPgKv8DCCoQABoMNjM3NDIzMTgzODA1IgzcjVGUxeq9%2FpQY8qUq3AN5uIE9HB4WNvZnBEsot60B2zTSCemR4lvC2Z4F5nEaACiNjoO127%2FzZwgva7KDjm5Wo89A8iZJ%2FpLtzo7CCIPRTcQZQBt%2FnwJeMeQLPahMh%2FUB2OiNkt9sBiAFloYELT4yVpFb4ZZDv%2FOht4mT1%2BLVDFtvAxgnneB1Te0aOKpmabTF0FMuyulNUflqZW%2FYr9s%2FnDmk7nt%2Bc6nbZFy6cPedkOVwb3CwUmTFgBJgvX9xdr6MU6H09igkJE4QglGAL%2FYL2REzDcX0Mw1qHtlqoslNQPq%2BQebe%2BnLl8qawTwGNvuFk%2FZFT4L6Ps5xv4if38Hfmq%2FPxV9ANPL9upoINJIxglh5W80yQoXdidoy9Igp6ocoNhv0pE2we9GhuudzsjK%2FcdvthQ%2FuN3jSgtWwhX4Jmp9oZkVUrd8DfWX3hAChIPF9tAYt9GrIL876dxtvvL6HbH6Ah2qwuSt8mmJazEvN1GE%2FXViw37qq40YsLl%2BEU58UViBSwUgLMKeksIRPaHquwCudT7B2h0hNz8gGIxlsZfHLDEQjskhh1PuuPTVjm%2Fl%2FByX99FOMInLp0FfAV1Gdhu1UNSuQPBxn59m%2ByMCB51D31l3EXMQptoFqqfak3ll04noQehS7EjRz9pzDr6ofEBjqkAQhPBMC2kirO7PZmKBCYZbXA4wAYRLMM%2ByZhtqtTBbKlOhzzIHNua9Yx14157VGHTN0rSfQiXajRlp%2BQHJRmnjqhIAFJEx7RaLpxmPfrCTLZAJyENA8kGJFQajOH53XSdCEzD2JG1mnpzqsXvcFuSs43rEv99Xj8dd5Nr2KpKwnaDDqQuc7gtCJa%2FlSVast%2FbfzoLx5lvM4hhnARYIGz5WYL1NOB&X-Amz-Signature=1587dddf9e10ef6a3fdabcc7aad57bfc9690d0a6154af1db3b87b350f2b92b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
