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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GMPQ7R%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCID2ir9X39DqzmGiWLNpjgoXVkibk%2BJ2KByCNNFwfdJx1AiAh32SeYbq3q98e%2Fu0toFKi%2FT2NZtTctHDg3%2BAmnkuWjyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJG2e5djLY4Tp%2FdmiKtwDN4BA%2FdZrlEeodemtLdEfuGtxbVG72lHcsTwUR7j5sSGYsr1zbVGYgRHZ5WNK9gyA0bgGOlYh1ITErkBHkcQhd0MhLtmY9Y514VsaOMKQIJ%2FOX1HDeWBh5yYdA7JZAcxgaokLu8hbeXnybbuof5N5MPQjZ3PJL%2BhtXUYEi4pfQPzAIAgHgYkM%2BtMsED36kSHhvdYtiTrRT36cH7uRSOl3zBrlHuGt4ErMSfs3Hr70OmxPfylX8i4WjM37%2FlcTQgXTOdd1YJsItUhMn%2FGZrb38MuqamD8oF%2FHyLIpHK2eOckBO6CBOTRzyUXNoA0MFCkbZ7HODn6oj0kfPgM8Ym9x9i6Tzxot2NBAMY27Fqnz3cmZLzA57X4iEvDYO6T3DLQd1GFxtSeiiUHqeJYEv9iDaVPBQ7HLN6aeUrr5rIsR0dVP%2BaSEfzDKmYwGBlbrT7N8nJUK8v4vb0m4PBb5wTIkA%2BS4a8DQ%2FQ3OTEaRV19qf0n8ct2TOzyJFUGIadHWybNSK4oRHH%2FBX0hcDAKpOP8KYS3J7U2Y9KmxHYR%2BEOYH3eKe%2FCRT58DGBML5wv4kxPps6UxplPVQegWTqa1qSaXjDFYw3ptL4D9b57NABMkee4phSoMemTVB2mO0MurowgqKqvwY6pgFZv62rCy0n%2BsB4mEbu1ESA5fpOpD4%2BrBqOvkOlU4jdL5H8a5oqTKcrQgUhmsNHtCHF9La3p3wLaea04TmsEzJvWi8YKmWimDN47B%2FZk74DwD5ht6dWUHM%2F%2BUuyvmwfJwNVP4lcfDa%2BAPIyIgLT70DM%2F5yfIu8GA3KqIHFadEl20pmCDFfkrd7Nu8EWRYq5NXpvg8JN%2FbL%2FW2C0ktkXXdH7pzZq4CNv&X-Amz-Signature=0d486b1678bedc1e8c4cdacca7168abcc608e60dc93560607cdc4a1e3746f461&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
