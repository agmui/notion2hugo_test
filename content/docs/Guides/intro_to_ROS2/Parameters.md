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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPHH2ZLC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDXddsUzdblfVgwkSQOqQIwH%2B1lE%2BGfh97iHMvzT3CK%2FQIhALh0xv%2FIXfc3JVOumHf4y1U3m6sPO0fo0%2FbHsuoGgTN0Kv8DCHkQABoMNjM3NDIzMTgzODA1IgzDys%2BdwudtrVJM%2F6Mq3APkqGEAuKLnKabv4cK1tZxtt51hhnyEvKB0lUUZowkI4CRGZKtkfo2OW6bGFwMtDmwQeipx2%2B6mxwPntgEdHPu3fwqkSnjD7TyGr0vC6jb5ohzaPCazr9LZ6%2B2YEftcSiBbmG3zezJ7FgsDDn%2B%2BoKa5eClMrIvQbtoEDLlaLsg%2F4N6i6rJHwQ5HD9dqMAOmCRra1vOKIx4k4N%2B1SO41aRbxIu1DOsu%2FSCnZS%2B9Quy4krd%2FvZzn%2BakkfjiOGAqq4A85QUpUxLl6QbXCAQCPeT%2F2YRXASUL8nx6%2BXofs05XFKvmAKHpckmT8hZLIaBLyztMN51Qvaavf8LiRNw9V6%2Bgzoj3JyUGpc%2Fi%2FdIPjk8f1TL%2FaeeNn81UxHNrHiIlBWS%2BWbGr87aorXdTEddRhIUl2gjilKJ7m4STDbEffCtUiTGITlYKUOnrHEAESm03l3trBRpmHEYCiMKj3uL7eGheXQPoqY1pm%2BLwzjL5ePq83i1HlYwaDyCDZzgFBvdgv4wqgKo%2FRrijAF7Itlj3FuALo6TYJHhKZ5ajH89%2F%2FVIRphZYwUnpNK0PTBLfH7PnstDqATc8rIw%2FuhuEt9H8aSyZ5z3TmeDkoJa3uI5uTfTBlle%2B%2B%2BsJOu%2BEi0tRXzbDDJjYK%2BBjqkAW0Pk5fGYHP7jgjQctqMbdXi7zgfEKJ1WL%2F3Avq3ZwEZ4Ldo%2BIhMh0e3SVLL%2FPDOlFUgmEIqkX90j68mCu68DzyOrlHhyOpXBmfAv0VqwuU4QLX7oCvSlPnoJAbev9K9BgRsQzjo7jOK4%2BPaZIbeMZKSYa%2FoikCDP41c9eumRtwQxeMaYdTPw25IXig3S2m225%2Bw7ykXM17bAYHUhLwyiVfbe3N0&X-Amz-Signature=1ef95502f69f4af83dd6146db2e66f5ebf950f173a9100c7405eb82a05fc9674&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
