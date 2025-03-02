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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K2B4T5P%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALgS%2BI2eEAT66yuNNpfUFPR8BTEDfzkOysVu6pZWFjSAiBDM65lS5WqxqcuCqvZBZoJws9fTwSOYLk4mj6AJi59WSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDgDpgY%2B2CnRdglMzKtwDYpqZF%2BPOsPQs%2FyZ7z1g%2BKwls5obpgGwnI1fZ%2FGySUm8%2FKq8ZAxhlkgwPy%2BK3dc%2BM724eW3%2BFy3DoE3IYXihos08vPSbWcwJpPml59IMrEEo3MiAuSOyGsV30uR%2FwJ2gzCYwUVTFCjZ%2BAXilpqy3ZRXMq6HUQAWetPHPc4miFGgmXIFUxF3Ka%2BUjwun1aIEZvhzmp%2FMr7RqPw2ct%2BG7J%2FG80H%2BN7C6Y6YLPVQFrgtPnWPtoYxwQ6TTXBDO5vBPHAk2qNpx8x5nkW70Y9mbWBrBshTE2GGO%2FVxedigdK5r8zka7aRqgRfpQddajMtL3jDTYOq7tA%2FrhMvp%2BK2mAxaXtLbwUOkIw4GhR6I38IW9S7ZgW%2FNM%2BOAMgNlUxFfdJ4QY%2BEIxa5txjDshRFibBvxODCLlpdThrfiSJxS0R7wphBCeJLQL9nilHRClSIkngz0T%2FrxTHcGE%2BWbKEnsrCcUh0OVKwRiWQwU8xm4CA3inUTQ3gVyyrlaC3zm7Dgw84WPuc5AOdiUxWFd2zuto96SxxIKPg8oxsN072ljsUpqrGRwFwU9EG%2BhfaAeN9g0WDJAgOwim%2BmveiC3jkZcSEB%2F0OOmKeqizDx%2FtBbv2qQmj9gihGbMPUenaedOF5IMwuP2QvgY6pgGdgRvW3HEIymWRT4BeXkOBNgyl6Z73y6Qcd3%2F4JVTapheJDPc27a3XvNykDD8DwqgaI7rUPDoe8MvdL4Eb5vf6q9b2n4tDhnSVwC1ozTSWojCrRJDn1XbAJu5iIkzeFuOkGuD1zfxg8xVuLUVDsjHt8bELp%2FxR9%2Fwfje8I9%2BMXP%2FFEydPoNPPeCXQawHKqGVKZrGPheN7Vf%2FPb9BncP9uMkMVHNd9u&X-Amz-Signature=95ff4b90fd5b8eab874d19c23532624a990098a08c7139d1400bf6aa8cba515e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
