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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7ITTYO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDvtDm%2BuNkQR5bMLqzgdQ0GM1c0XNHYiyBARs7On67ugQIhAIJn2Vqfu9KSL8CJKx3haptgz4%2FFA0si6dl7qq9XUvoUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxljl4S%2F4UG93JGjF4q3ANhRxXUgT%2FXKtSy1blFsJIPP12jrUtXV26ZUIuLp0Q7Olg7o%2F6Sx2RjjvSq%2FVyAOcIZwrNXXhyw4qdLcnW5UbRdlS%2FBxU9vp7LP5cZSslsD5q7PhFZc81XmEZFGc6p7%2FnPTi18MvD1AB52MtELJ1UYvw6CeOVxRG5j9Q68p4rTLY2FXFXuezIW7%2FsNQ5Q7vQvIy4b6yO5HjRJsDsWIPKMWmGxbFvmlEbmZDVJy%2FFJRGz99Y5GRS5u2zIj%2F5d9sYkRI%2F%2FU%2FP%2Bh%2FZdAtSrlgCSLPT4mOjB0s1VJClzN5d7OId4WzmVMCQqrUvLX63X5eGZbHc5oZPsFths%2Fzo%2FJmpjODPhlFTrgJ%2Bul9eKW192Iqwbaowibo0EjclGCk4eRJ9N5RpLvnVu7MQJbMChIMA8RqrQnO25MG5SM6TPBKsVI7oiNObySIg2mXKHioVd%2BVf67gSj9t5SvAay0alXCIfkgCJrBpZ3oS%2B56x%2Bs2D3KNMGH9%2FfTYG9A%2FBqETHgoWYieB9bUvgwiXMqmUm72SQBQ4q1SKytJmR0u52L5%2BaC48NwNeuHEQW%2BOmhKITr7%2FogttKKoi8Lwofcpq2%2BNXMMKDuuybm80fc1%2FdVAAZIzLg3U1ziTA5sg%2FxRgC1e0UkTDErvq%2BBjqkAXm%2FcZ44P5uM9r5ObxArFuk%2FWVWCnLKcQ4BOpUyZeyrrx%2FHU8TRlWBstEmauvRTahXdTc8%2FT4YaGDIV8I03MgpMj7V3%2BUmSSiYxNChoh%2B6XMnGE231buGVdeBjk7CCWGcbyrUhfSiUKuObGwzedofS054eDwwSREtjzNoG6eJtIsiCSd0yVFJeIRd7Uxr7HPB68%2BReI%2BElWpQpEY3WQn0uN%2BV2%2F6&X-Amz-Signature=1a23fcba3c6910890e84d02dd89e618f617e30e2f5db4a9bab91211d72337035&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
