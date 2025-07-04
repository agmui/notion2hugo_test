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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUVZR7LR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDokbEO2NKO5jCLmforAeFhzEzxDXMm3dMwhL6dx4jQBwIgacmThxeEtiCHp%2Fqij%2FfXdJeSEYItbUYMwwkH71Wd82cq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHPXrb8FUfO1or1pzSrcA14Jc8agsM2oYw9A6WE4iGqi7aBH%2F3HvFoNDIRip3p1KN1G48SYmZ49Oje1H%2Fnjy6W0R2MrrCFZK5T9LtIv4x4spKpCsuKRlmWy42Rfcw9j3aUcpzpp%2F%2BUk1OEy%2ByLSFd6epgrSkV5XIxipdty4%2B4IRqd%2BF5q8%2BGNtrCuh3n8DCnTK5tJd3VL7ve1Hyk0Z6ayXt%2FtELBcSkN3uNcOd54R9l1Uljaspae%2B41a%2BKRP%2FCCfjLfo1Uk7jw%2FA4vqkRG%2BRyCTn3NoN2qTYJ7lnK1JzDV2PJgQdJRMQ4wOI4msOqDGVJFt3bjSKecWEbKUFi%2FO3jzrqo3lqLyFHeqzeuRrNYIieGh35bToNS50v9G9vfBp43Rn2%2BC2B0DvuCZyAvW4CIRqdtT%2B5LuaoznysqPJdVG2FkORvPMkgRK8jxejbEiH6LTx67lxD3Y%2Bon7tG%2FHdhrFw%2FlQNB0Sk2lmlbOxruzHIJQthVwg%2BtQBkXv8R1E7TIFdx4qR7pY3ffGnnwxtl4%2Bx18oFLSBiuGAzXjJ2ViCur6It19l1AKnT0GF81JHab6gqdB8gNPWkjfWM%2Fm4zZul%2Bc5Ym%2BByREvxNEtsoQqGWTLnmrtdx50lV2CQ1EGENWRORUkWB%2F1CD1M3sh%2FMPWNncMGOqUBo7wgdCHgK5ARsavou1AG7A%2FMhvPgESr3FF6hMKnOodOM8MsPkuUJ1hp2Uh9xihgyUqJ6oM%2FukiRbYhWue9bcIcE6poaEeO8HRonpTMvi0eSyfUxuz7x1uuUh31C6FqFQ0m3hvgfQkPTNCIznezcZ05%2F9YTjekxIwQj%2BemsbSue7PCXtgPn%2FI0PT5HoyvYjb3PH7oeVx%2FSyg1kboWmycdDhWZDoMx&X-Amz-Signature=4066fc6b390c67a8ee5cbb5e4f41aa3b3c7625906a3104c7f07c4a8580cd3ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
