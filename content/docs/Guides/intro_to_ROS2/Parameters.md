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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDSAN2ZU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDTDdNueHfPNQNeSS8%2FNXOIXaH2Fbq8p03s8f0lzxgyNAIgFYB%2FVYC88gFLWQlvlQq1yoSnLVu%2FeniGP%2FdCIaZrCeEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAghzxYqLsvnNpWa0SrcAwMW%2FLBaFuIDFH87TORPLoSlI6CH7yNFYkWkgzsB%2FsRJZZT1Ybbtd%2BsFlNIeAmZdur9%2Bh81WDRKbxnPWjQpfbHx8XNlXGezpt6fJ3lzrZEqkTIDS%2FjSvL6HsvAOoJNmjfRLd2E9gQUnTWgV38KMZwUJZi6luNgtDMNC9Ilg4XqaFbL3WbKuyFN136MyUxPaIWJt1GF0IoKx4yml4U5c%2BMfyN7khWwd3yz1KdqP6KcSp0B7%2FPd6MJ57%2BKvVQ5hcIFkpuyLXslxur5quDZ80y5DgxEHOxIXmChoFpHhntzV0QPqCR9jH0il8mvD%2FTSSg2kifQKe0XqgwzkZmiNzZY0a7jpCuv2rM0ukDncLgyZ6CJJ3%2FfxrBQiBHmbz8kQmmYKRkjU26VkfsS5klfAvk8An2AplZtGT2An9uT2yBtAAzRVowu6gMhSKt3JssvKdiNOXzLYYPy0GlpvJGjyN%2FgXRWrO65zMZTw3w3Giy74O4l1Jbvqjkzg27maykgpIazbNwcTK2my9qWvTIrF%2FVYz8gQ8duhV3XvUXZ5W4YLQgcSbVwgtHZzIGEJt3SnDyyrZ9tPPB0Jm7QRDGD1pQUJqHCQ1fuELsISE9xJvDxgMFpwW%2BZ79F9%2FyRbf5tNqb%2FMPatgsIGOqUByQb9pJHyQSS3VUClvXlag06Cqh9qSg6Qno7zzlQ7oo8ciJNCIFKe6x%2FzmAt0vrM1OZEJIGebQiA7CB2qv69YgHltYszg9sy9U%2FY2Op2SYdUnQii%2Fgk5NfPa3mX0kCtU%2BLAPXmD%2BckMMNKnpfs8qYlk%2FzMjVJa93BaAn3tqK%2FZAhxtYzHDXddzQFAYmz6pTebQppZJcOH8esgjTTtrlWkV0UHiQMJ&X-Amz-Signature=049ed505174af1a7f432d90b0097eedda6b918a4d71a0b9689953428de5c6bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
