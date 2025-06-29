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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV36JXFH%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUBoThgc1rV1ZUWjwUGbnq6RTdDt2ELczqBmbkyKS9WAiB%2BITBQ4kUy8fygWMjysGkayLuqLhw8zyuU1zJPGF6IVSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsijPJXggUK9prrEOKtwD8%2FlPOdcPwMi2Cy0J8AeLEbg0AlRJTklj10NLOb2PuXHVt%2Bag74VxNH7D7qVAiD%2F5JBtHKVcRkAA5SWuPiVob5H%2BGKD%2Bxmj4nANtT9rCglsT%2BydlWX%2BxQrt2ry1SQ3o30tPF6JzmzTP0OcTCZ%2BATtqfYibEOZApoKTEeIb2zF0RKeRZiojjeHNjO77Tm7wv1YyvhWvWWuW2ZykdYYMp4YWA6s%2FuIh8sb4RCzqclywRkI0jvbUEj6Ehm81qNAvJSnbKSId8%2B9b5ynCNumWn%2FaJNfOaADf5YaWBAGkEOaH7zkE3AMQXJemoqDcMMYme9IWuQLxdZkssVmDD90mLdXaM9%2FXNrNqTX%2BMG4ZgNUVMhyNO5AyPJSk42XZP%2B8I6zySgAtgRWd66knKLSiHhc7zmwRsw5rYPO9o0MX4Xm5PN%2B2M3AWGKfKNfXoDef2jlKenvAAeEosxvvZdJZCCXmbQwYjKorIpVCpQwYvNVcmc%2FdeV6ksE4sp8pZkMngHL1bVWgmuQKT5LatdgRQwMlv81SfuXzdM7KvYj8o1EgNd0iu4ddafNnTHxY3GCtpQE2lYE%2FVI2V9pp6VhvRilD0htt76jNegWXeeDUJNjvGKwTwJDO5yypYImG87wv1Q6VMwlryEwwY6pgGGbmdgojY4qSq3vnuDOvpG4ULunTKOyr1atm8gB%2BZ96V9cf%2F3YbUAYHkk6mYkvOzCxDQzeokhJ6pLR3hcFkMcv7jbIT0jcDYRzPZKF45kvJCfjlF3mBfgPU8odnEQ04wf9q%2FwV%2FHJe2JbplrWkT8ncWOLlBn%2F45NgFGxLnUwSS2EZKcYYMwz%2FYtKnEVkieKEuNbTbDvKf%2B7gEkOBEpDJ89daARNhnJ&X-Amz-Signature=b0637821775339df17b317712619bc80ae9599e99437ab1131377e523ea920b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
