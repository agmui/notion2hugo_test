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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAF4JWGS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC63bMWE4VBatc1l1DF3IjCcqunNMQ6q1xHgO2TR9BoAwIhAPa3x%2F%2F4BjyZyUS7Mu26pEkv5SBb15RQqj4IxQvovC1iKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyDEyM9Yw58rSS1fsq3AMKPBo7ZhPEkBObjtU9luiKWO0Tw0gNoTnACPcGj9zrlY4ORlZQMdVWbnPd%2B5%2FbflFiromwKk%2Btjp3ITj1GGEpUQc%2F6UiF5FHfnrImViq2KlhKos2ePcI6nt2PSbQy4se4d21bV3n1VYiVuSYkFHcn%2FtECXek56%2F2yLQrS1AYKn5GwppHJDFqKp12MVaW2tP2CN9Cm0EkMuQYiyMnhM5Apss1TMUx2x1X367HtUJWRl4qjFvdnHkf3wqRvbgszGDWcySZiO%2Frf0sMPrVy5H%2FfY%2BowQBlyamiuWgQS2jq7veGebn%2BdJiCooTIIUn3W6p%2BJSJkscw0xyffSSAAtgrir06vou3Vs8ifH4MbBLjLWKMkFBqY6PvYOmFJl8iRUZytFb6OpPIrRQIF1z1%2FNYJqxJLrhcpR4E55KjNtE31I%2FNkGbuLp3BhzSbiwDM3CiK4a0JKhdWDiqU2K46ocbUBbv2Sm%2BiOd%2F5OR03uetPDYcxPTu%2FayXdNS5KaZKwkpNCNAH%2Ffn3dmq8FPgVJeDbytVahjr9TIxaVzt4YH27S%2B52KtIhkoDWPMYnRXhQ9oXA7w2Y1RpPcUk9XwwbsQvkO7KhxmprA8uHxapLJOvsgY63tPskb55hfVKsDDbTz3mzCzoNvEBjqkAbNTK9rej%2BNz3tWa660%2BsonuEZhZ4UYP34gMKA479MctXVKyrMIm248yteoWTGKVLdejxnTUjmhlL9EMWYG3f%2FGEqxgC1QGuc0DHioIoNrGexQzp7mgvilQKdus2baaJ%2FIHldIGEgjAyhU%2FCuS4I9deKc7D8iJ1f1d6XmhCRqdvoAXJZTs0%2Bcmo%2FKKv1UhXLPkZnMP3APeC7P5TgRH2VUF3Zes56&X-Amz-Signature=112bd858f54c02f519d939005471713d6f8b59259df981c23a17547620bdbe9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
