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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W23BJJ33%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFzYl1jqcygRuE0hHXe%2BG1wra0MUnkey0R7Nvu%2BJzId7AiB7hiA%2Bs5t5ZY4qgBkGOFGxKPUY2itZ6olw10866UN%2BgSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjHXB%2Fr6LuoC2Pe4sKtwDga4dhTcbl24CjP75kuV%2F%2Fl%2F4Y7U4Df8AfqcDaGC3vqVIOQJkOqXFdrNqcbDgAykic5Dwy5yZo2K5w1IiEWRPk8ylPom41gn%2Bl7si5wvDchqD3ZKiER3mfYitZG58UIvapCUd1I34Z7smVISpuCz8vOwF%2BDs51bIGlrWiJvVLJcskG5CA8zPFNe12VSPIlbrioRx2G9F7Kl8dLpwRXUFj6ls0Ubo6%2BgPm6srKGpouo%2BcDbuv9WRvS4Jqya8Ttcd14czV17cyfwwDK%2FOe4rz3mlsiG%2Bld84wdYRwUjgB%2FcMJiYbueDOM6kaTsCNDRZCPq3FzS7BiFMyreVJ6Hk8KOmBTrJs5GIcvvUte8XoJ%2F2dYWKKYDN2uv9wXgdvdqgNVtIg5NOuf%2BQtA7nbudJyjfM200%2BglXaC46OjdeLVVm9NC%2BcfFkv%2FjAS%2FgeCyic8ApbNJPJqZrNyvCVYFE3EoNQjQOrGcsRv9bf0rYVC1kNjFHhJMLf83Bw4oZz8DZoGEp0UTSv3qvjYrsjZRUgGsvYwcO%2BxutKu4%2FE%2F5S65Z6%2BqZccHWoZ2p%2Fid4aROHawtkDesyMKeXJRMm5mtPYoH2XUMZSllEOHhh1BKNToY9BLAjU%2FV2uZzgxcXN8ocxzMw6pLXxAY6pgF2%2F0ARlUML5gU%2F4wiPd1dlRnWfkLI4pM4XDZCDBqbqbd58XF5WEh72K%2BdpJexRmkIC2uHM7opbwZFwFyf8QIw4YybJPDQfvnMwVal%2F4UST6W%2FIxwgPM9odlUIIqiKMZT2WrxUvRK3Jj6hCqcVogeUnKj5pYJ3ptocDEIf%2BoumRuyJ0BJeL7Hmq5XqOIETQV5ahH3yisz0hbkkBggha%2Bm1sMC2%2FxYEg&X-Amz-Signature=28574cc05002d95ead6517ca88e5b379b1954c015150a9a395e16046667f864b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
