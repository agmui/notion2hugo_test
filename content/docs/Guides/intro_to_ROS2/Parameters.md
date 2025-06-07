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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W44DIT4B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBk4EaJS1FYEZTqW3iauLQDqdCeV7WtszrlDd9igp74AiEA8z44gdaDzlXKPRazM2CEjecrvwnCw%2BQK%2FLjZ9%2B9XD5Qq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBTrvPIu%2BP3WAkf2WyrcA3%2BFtDyRIOZ14RJWAVt95zqu2oFSLCrLVWEO7y35rAMuxQTaqJFaN%2FZlswDFLojuIm27af583%2FBhOt1VvSDzKCTqjwGbwQnnVOX5a6i19gAd76T7yR9GELzTyCC%2FnzdNq7x1dISuL%2BBE4tZbsmGfnSTeTYDxhiLpF7dNlhAduoP1eEBp6zVNxNIwiWAE3EGOEwCadKvW2vOYQFV5wF%2FTvjYy6vVb5V7DUCS9FmHrJ4YbcHMZ5tSrJKYVL1SqhaUVBs6OuX%2FAVuWQKFcorWq1gNXJggWe%2BcRw8gqJOQ5IkqM8WutUP2HmGCbzoKGvMLKvNFe%2F7y10Wvr4KDFxYjOBOn5JD7ZjP94qOsnw5mrwBbSWr5EvBJ%2F%2F8mfsjfpG4ND1Kv6ZJSZ8GM1HElsYw77HZ%2FY7%2FOz4ZszvPZtUWq9f9nylSrMOCUHJEuwFAv6saPXILvmPPeAk03MLp8Fka%2BoJZMft0xxuZJWVC%2FxmdLMkfpIA%2BZml6NPKQvQn7KSJJ95gLtipxMTLROnpXtEqWP9F7bNnaaMgtu4uJ1p0IcWRX8i1lkRuWY79q81l1SlpS9n1AgHF7GEvZd0NyqZxm57zFvnsMv%2Fdo%2Fzks1tv9%2FFtOrrqkka0SBKVasC8SYo9MJf9jsIGOqUBFMNpOW0d4hKV3%2B17w07QHZ46M9YjKUw0wRX6DCCTljlFjI11bJ6QRto5ZsNrzB5vFSQWgEq%2F0iZ02pG%2Fo8QRh5bCVgNdj6%2BiKl7ArZ39xv4HaaljA7kk8U8mY5Dk2Ajp24kgNrx389LTk5gx7Nw12Wgj3FQlEwYqUM6qKdsl5nUzPSCOZrgjkEBLxOTc4c9MpDtBtVgkrPnnG7OxlWXM396Y7Gmt&X-Amz-Signature=615246c99d31e4202ca45a8042d36228f5fe8a1ef452d6386479493420cadcf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
