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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642XNMCT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDsmKwHy3d2UuRwatRL2TKVrnEm62yHlEvh0w30lPelFgIgG%2B%2FHKMtW1Qd6ZV%2FcWJLZZyS%2FQNLzSEKF6%2BuHLEvnbW8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS5QPmfzKLmJN6X0yrcA9YjZxjhyk%2BWjRG2IvJ6%2FF7SDCWXCXkAZUg9Ygkbf7LPyD%2BGpdlSHuCB8AhDEv2mJzYq8kVTltgpQM4YoMwpCKK74122rM2pTr%2F85O8vyqV2A98ui2u%2B0zZEaCM69y0igLNyFHSTZ9BKkpa5WDRsLBlJPAX45mEJGT%2BgftshErYFwNyWVC46GnzXR0XKtMiOvZdpErNjr%2B41%2Bdm6BFxRAIwHi%2FdRiA2%2FfYIZsAyVMv2KaAtaM%2F%2F0pPc3EIOTfovGH6jUZJdhsDdxoC8hw8Vk0ofRKkJ%2B%2FuzGG%2Bcm52bdVnfBcdLxe7NALqdSobqq8sC9Mmg4nC2XgCV9jKo23s0XdNE0TmZeYUvjlJzjucDQWQDSE8dVtTDUEasmxe3iF8kJyz2fFCSY1reI8%2BqWfpAD%2ByKlPj%2Bl2puUnQuyTiolfFKiuZGjhQVs%2FCluhbB4M022I5W4DfSh66bi70XodD2Cp1IdBj5ZWI8P8vXQJXg%2BHEmCyvmejxaenUZYhbCud8UpexaYznDj7B3zh%2BvCAdjmLEAuoHVi%2FqZnmM9hgDKqOXnUF8yxLsisHnu3BcIUGIDlmuo4IaXyN2v7l1Nj3CMn%2F7HewfbkxeaXhbd9HtFKERVMnhJJzACTu9U9dcaWMIqO7b8GOqUBqfSeIY3wTV1Wouc%2Fyf%2BXUM4JJKtbiRUfhuyUY3h%2FJen9YWtc440HDjznJigxM5AQCQ9lHOo9%2BwOaemsrghtAI0wt7zBEjSh2AqhVkb4mHwxWrWwwHZfGgIXRr%2FuBfOhHjy%2Bzew4ehzF22ORFcEzu1Dd3pfbCGy1KzHhm9Jb1zsNVAXEzUrP7xEYIo%2BEgw1zN3m94cjxZMIQCgLSzTlbOvZ9QVXG4&X-Amz-Signature=2636eab18e3623f5c152e1f1e3242fd95d8bf36d108d5749449ec4493688475d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
