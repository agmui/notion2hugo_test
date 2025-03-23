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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNIRJEB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAT1jp86FSAS839P0hpG3HXIaG6I%2BzLN0a0o7z%2FIujBkAiEAkOmpRl1Upj16Be%2FZzmTH5OcZHtpiaDcyPA2oKCDlOm8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4qQ9kgrmdELf3HYSrcA6vX%2FdeyjNTzBsvA9MvPTH8UOmelfuosoCYabwg%2FPGn9CYZcuuL3WgMAd2XXF5OlWtJAmEZ9DwpsaslWvwdHsXU9YtJ0FFgJxW5o5OP8gvulPFpCizqytHGNLcs95%2B75Q%2FU%2BiTwpcvKcc7vI9kYtzz1Z6eDEqg1d5vo%2BwNKW88AmpxT6gn6DGkqONBA%2BIFVKBQNGpCe%2BItmW1TZg3pE00ryRtYrKVaDz2AF8D21Y6mTwG3%2FtDU8B6uxEr18oNCTuYaI41dRp44hWKtuKOd%2F4mlL46ZvEufcX1dKzlWS0fNWQsPQUdYl9ubLfm9yd4Te%2Ftz2Ky%2BufwW2RY4grYE2QaKogGV76jVfJR7HkY09%2FHQJvw0BgToDF0kXdB9BaUTM0eW0R11KoMosjKJALgOaKRRWhCHTnD%2F3u%2BKz0Fp%2FDCNgUOJCS%2Bwj62P8MQBDNLqRKHVIJ5C5L%2B8KyiauZupWRXyqHMOCKFJPWmBEX2nQ2ryi3BEoWEIsfxmYThUWmN1dmv6AyFeeA%2FVZ%2B5MEjvhprYG%2BIx03OynP4p2cr%2BxKnT7jUaDoT5df3iAj0pCwpgb%2BZkkMCdKxQR52VuxdwISTo6%2FKTuV%2BD4ydrNT%2FJVHW%2FXysyW9Spmqx0Ns3n5MoZMJ7j%2Fb4GOqUBnCGlGxDqYVOP7wJlnN%2FEgAXiIIbH0Olr2xYQ9aN1mJqTQIAuOykkuEmg4XfAiu4UsTdafV0S97WYE5cp2pzBuZ2tcQHXdL7PGNIIDW8L068J%2BWe4jrpq95zmRCKctoSJ7lSd0kXKt25RrHtBYdo%2FVZclzN5Ql9TQa916xrYp6LwCyqvq3fHArwnUgORduIT7S6kWhjZyDnrASlKfAUKjndC%2FhGY4&X-Amz-Signature=9180241ca9bcbc544a916f282a6d9328adf6a6d5170690ef5df4dfa15717efdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
