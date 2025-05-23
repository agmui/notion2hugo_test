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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWY33EUZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIE6r2rssUIfOI3lHlHlKsG%2BjrlXN3ZGzBsLkbuGk0zpiAiA21HHvclfdUkWXlxTayocNFKL245kkVx%2B6MtCad7zSdyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9MUrK8lMzCJf6gPKtwDmr5zufAkWo1ovYc2jzM5VerYdd8wzxf5f6jOoXtzlnMxNHeFMMxzzG7l9441SihXTqkozGlPvfnc89RdExtilkb1HwVT01mztIkPbPczQY%2Fm7vGpmjSfGGDB6N7GIo9iX1Zk0g1SHOXlgJKW18GT5aWwzDPXBFLKWbyd12rn05MAFprXVk3FT8OUp5BcOeNWxY56c08A3X1TBQmFX9z%2BMfjtXNXFayHb5iTcuOlrEA6bT0gvvrI5c0rlQlYH7hbKo5lRE8JFpzpBUZTmR3IJVZyDFS%2B8u0sthLL0qauQUF2Clr9ZzFKZwXHqurWacQyyaay7oJN0scePAuM0%2FxTt5BNhdzCaWWtb55gPCHAWOxIT75bI%2Byf0rMCn%2F8gfymLZVUgW23Jprzwb6gT0fptCOdKJgwxZGn1HipiovkmWvU%2B5PtVlt4DVIiaMwcPHJ8nF182A2QRP9oG8V6ISN%2FjG8BKanKion4ZzVfxn3%2BV1kmk9Prba1MCaj1TnwXItp4STSed6BQBOfOzTh1ArVGzPw%2FvoBcRmmR1w3WZ9jImPwX7gEn1UXGwpeqbeXzBoUvNisntFzd%2Bfo3BeipHPdjqs5uJeyasrpg1gLhI9hYwBxvsJl854cgcH0hSoqj4wjNjCwQY6pgFj2RFB%2FSATU%2FmjtozZ%2Fsk0tImFhHcfegctJMVQHHwgjlPf8Ppdu55QNbOBQ2EbtnuQMWhv8ToP87kL1uj%2FjpqqWLl9upAcszVQVJFNTi4f%2FAGp78VFOHQti9G01JgwwnX9mHVwajOQtuDDgpakjnbf6ZUjrsYwRtnX1GnkF6%2BRrGuLupaTYVrH7ktPKsnjC5XX2Nv%2FXQZEY69WJNaGn5EBjgv0t2HC&X-Amz-Signature=0033a8c2f5a5edc93f274f66f9010bc1c621ceb8831d8cf5335235299efdac82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
