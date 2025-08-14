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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVOPAVY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDQLKZKbkcwZ9CSX2mRk6SrKDyQRGDdUTeGfwzjGrkdfgIgbC%2FwYdxardE%2BeEus2mafblNlvAaSiqCcJ%2F9w6U741V4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHVOyC%2FrHGzUJwtAGCrcA8MUyVIFAtspHwKeYiT6oeEQW%2FUbylrbhqyd1ZqiMF3EjTCZbsLb2JsMNMCuMh8mveB36Y2YyeMSETZn%2FMJ6G4HMf%2Bp6eKpIO0oSoFh4Yzz4ujiAJS2bU2Xlg8XMNrH0JfOnF4MwavC1N%2BiP1V4sJgJRbe%2BafFV26PsWeSBIfy8RGICEA1X8cQOuPnbJypEcwS2X9VybHP2wuj6x6piTMy3e9LkMpKeNOSYL2HOvYGwhapr%2FXzjmt0qdAPkF7LGeFt0oYkJEhgD7TtUrL3%2F0v7Uw6F1Pv7M%2FwEznvMvYRRyqwvQgtNoQA9gxsC64gV50%2BP%2BYiTNsT5XjmYQM5a2jPvIaAmmUH0LWSPLwypD44PIcGq51jEXwmZBbbEE45mhtDGDb1%2FJCgPHhMttqh%2FW4WMclWV%2FUblezr9iR2ZoVCTFz0S5xAOhY9TTSaL50QrOEYrDIItl7%2BZeeBam1VHg3xKTfa4foNdh748WFJOgeHSS4T5gOVMPkgXtWkmscfRavqtPh8H6LX%2Fl9eTlx%2FRmGIky4uzfuS65p4pacf2ZUCLZleu%2BbmyY03yDu3pFESrKZF7Y2F1lL%2FShPFoLXuulb8bp1sYwiaf%2BzYLX0X05EsnUnHF3Fw%2F27f6o52Zv%2BMKCN%2BcQGOqUBjfD6Zxc4opIZOvBJIyB3qC6RTEQ6FDURzT%2B3VFqAfbTiR4cphmI6PkSfMV7ou8gaH9%2FgLHFwU68Pi5M%2FIvH%2BgHJOHyYdm5ffy6Mzr9RuIMW%2BOBOS%2B0JsrhbHBC%2FIuJVuB5XaLfKIGqM52InJDcrojXkqTRGY%2F16P47WOs2%2FEUcOE9PQEt530CmVgqmJbcsx6QvIm5qP5bXjwBdqY6Kh%2FbfaLuuH%2F&X-Amz-Signature=e27415d635fcd18dcb07a0f8618564a879e3c977ce1d83d4cc8c3e802fe17f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
