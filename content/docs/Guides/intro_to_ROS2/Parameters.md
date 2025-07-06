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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HM2FVEN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCp21rxja77Bdplt%2F1CAKOrkasxa4fP2cFx4SBaV6MR9AIgdjcFborQSmGpqsTRVF0mxrxLpZ77tV2m%2BG6JCUS2lLIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPJLAswBak7PKiG4SSrcA3qeE%2B8O2MxkDz7O4X4EI0EhtMV7qTjZe5%2Br%2B2oL7XVI%2BTHoo0Kml6dMA%2F4A9bwECLefRa27tlP%2BZkLB%2FxvgIQ8z0kdiTUoOakMBu11lE%2FT1641dy5bLTObT34ZK2WE6kR2ebo1t9OjvyqpMFFEvmbdNDK66WKzv1SnwT2GkgO9PjZe0xdAMKjgzD%2B3Giq%2FXDHrzPBFmvwQcPO6zLH8ZH1e4kPX5ae%2FlndB3%2FdSJHQgvjO5ChKpMD%2Bmdgp3EP0fTZ8U7D6JbqE2mryC6449X9MxQA%2BfuL%2F%2FjngepuAjxjP0ZcHY%2B5dJBQWxwpWRZlIPARq4wG5L3sL4nsHWNSttIcVzek5SgrP3n23ai2paQSyHW0KhQw8mwB%2B8IABqtKYUDZ7YIGQ%2F126Qd4kAijcO4inf7YNu01RK%2BoVPzlcua1TPBV%2BH%2FPw3CPVr0w7OaHDdE76vuBVaACXw9HlnRjZijxC%2Bhycsv8VCW7T6OneTYJnNokGxK2homUcfT9poh5j9yQR6dAu%2B%2BE%2FrU20FL6zvkjWj8fjsqXxV9Egz9uNh6dEXJnchL%2Bqmi2gg3v%2F4QPx82vRaNr0qHLeZKtfhkCCc%2BKkjOl4U%2Fex164Z4aoE7HB6CqWUO%2FLGVIzy0Vtli2MJGbqMMGOqUBAUr2qasd0eSu97guE1BeXnVJvhNr9s2YMRo6jqQMgaXdEJ%2FkEPrizZn9o88%2B8TKNxjXHsS1QQ1D2FSr3%2Fy0wa5aO15xl27Jd6mqp78zFNbZ%2B%2FSmgURLJ0eBXx4ma3Ty7skM9DT0f2%2FT5M5DLPouOlgyM2xatipywCwAQWkSqC9SOnPhqDWtl%2BIbqsCoXboTwrh%2F0HxDzZDNnUuFy6uYY3F61cO%2Fv&X-Amz-Signature=cfc22ccf13070698047adf610a558cd342e6429c4206ca1b436ff08008f8ab2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
