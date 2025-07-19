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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHXTBFQW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF7FKSnCJNJf0uTywBF5bJ%2F7sWC2UA8PaAr%2FEbLF%2Fo%2BAiEAnanV2iActA9vgGZtFp%2BHl6R%2BYGb296OhkKSYatGBq%2FcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGj%2BUbNmVy3i5f%2Bk%2ByrcA%2BsRBkkysi8yhTlPG76VusH19gRe%2BzFzah3ib%2BAEncxbZX5rQgpzwEJgYkos8Vz%2FfLLn6FCyHfmbMcBbQ5j%2B24Tg1zad1lQLgaILN9wBwrdCpf9mqZ7%2FsTu%2FHj67yvd76uiC4lHvuv6IESeLEHdKHdlVKOQ%2FvukfUk1xFrfXccjv%2BQZbv4Eezv2TPa1jemhPPj358Gvsqgt05hINYU76Fpglya%2BbixNDP7uLAWaWVDLHa2x%2BBnWvOPAxWYZoRCmVlL3XbYSrqmC8TvX38jnokdA2NFWuLEJk0TD1qDbRSPgenv24d14kB7u%2FVgBfdsd4%2BZlhH43shZOV7QTjT3tdHigbZH5zTFo%2BUa4D4CNo%2BgZJztmYTunk7ii%2FFs2VyOjGQTVhLK1HFWqesnhCBg98A5W9c%2BPHVks2XNu0A5d3FgPJpJTkxTz7J7v3GQvbFWIhTSb9%2Fv0t0mTTj28S9BHsQe0rycUnNBcGO9%2B1DrZMcQkmRvXAfakSgw8aRG5iJYhsmFRibgQWqdOItcjrdhn%2FzAuZE0U%2Fy86y6VqNoUREPkVrpXFUOD2zCIGEPG%2F%2FDyFMgvSw0MWSirEOaS2HoLY5elOjfr9NytftrnH1SbXJu%2FWqqmQNxyMDazwGlHtgMMTF7MMGOqUB0DO7yIy8Hkc0cbFnnj%2BTt3SCtFu93WbLp%2FfDyENpIq%2BhtzreX0b43ydH8JmZl0GQZ7DXcAvQnFt4m7M7WzOojofAjCSmNDNjQg5HHQOnjm30mZv8qaRto7yRXP90UdGbEemY%2FiFofvvkSuh8HvcUWDvc%2F1inHbCDsHFkMvez8Xe3unX09DhhTe%2Bog5kNhNVw0T5k1C6PzfPgJ9Av7PMDGkEmfzok&X-Amz-Signature=95b20af96a77ff0b179779c40c95fd34079a5a776d96aaffbdf9e1895f0fb120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
