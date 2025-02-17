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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJOLBI7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCID39TuBr9JnGk19RXx4FR94%2FVG8CwW8LaZIk1oums%2B%2F%2FAiAvkNS2xPO0xvaXaztEdf3%2FfQvy0bhMIYPR0IKmXk8Rgyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMfdJybly1Pg6vqX16KtwDR3Kb56u4%2Bx6JrN6LFt%2B3HrvNp0IAswuD2o%2Bv7MvMpSvzIdMPeOFuEQw2wbouMImoh%2BjlnF3NigpG%2BRQADYWXsGMwlsnqz79cSqFC4zYi0YajQtuIg3Un3mfDOMdnZIUnbxbnAtpBtMCd9PRjOB7zn1w5xnXlxSGuU8IHi3jVD%2BCmDLv8oclLgp%2Bznl2lKi41OzwiweywIvEPDdJai%2FTZb0X9536j0PayPQNOH7einoZUxoqi%2BMr8UMuscmvZM9MVtDPvFZLIcWfgMOEUlIRYEc7rvmAlCdRzZpzMvGVSaEO8jNpU3Ox8n7QGY2HuEhQ7Kz1KL66ZibJk5RGG04q1pwEtNndikMBwzKGCHKoZpxkZC4VnXtRX4%2B2YX9ECd1o771NX%2FG6bivU92285k7yQssAAr5k0kv2AaDxrW9Fd5hPNoZV42El5qeuiHSCAW8Je5KwFxIXW3mTNDpCGTj4MMyX%2FjuL77uoMakVwRcDD8tZIdyIPTssRee5JCcwDDESVJ%2B8iHa%2BGkSPYclU8WwK2mO6qcpmYMWohrAkE8j%2FRblbbKEl7RVghjlq3C%2FFPop%2BHz865d2DMUWQfQ0V4RrN%2FIPFLoe%2FGFt%2Fm8vKblJeHFce4d%2BJLHgVW0U9QHdQwk5bNvQY6pgElAjBly27vjJTF%2F%2BB%2BljOdstL1AxzbOo5vI3WEtLhz8ja1W%2FtGiCJhcryL2OL9HoNa8P74NOZJU7jKbRDYX8v8NsCITdGAMcFO%2FMk1enySq4n2Hh%2BPJ%2BJPaRq8pYw9%2FPD9xKpylT2rno6GB%2FniDEKo%2F0TqYdcdNfLp6VZJOSojpi4%2BClLP5DT0RZO8QjlSvx%2BlwI%2BNNCi5eldA7cIwnbCHbkR5PPVo&X-Amz-Signature=1bb406c53db23ea0ff3262ae78754ba3dd6970b7963c055d9e98526d6b2b3737&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
