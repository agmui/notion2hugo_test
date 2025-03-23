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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I3JCPH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFx0WXDpYfADTz509IhMY9Nhs3523iE2xC1mI9JbFj51AiEAnpimk5XrEAkoitSOZqEQ4Ir9pvqOt8TzYtb%2BYWN43BQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBOq%2BOAA9hkw8ybwSrcA6rVyHQkFM79Q7HGjD9jAN1rRbuaERtuGYvMbsKSBIzjWI36yVPTWOa8sEOcFnKtoFDb%2B0P7hU1PHoDTJ2s6eR%2FcuLHFePUovbqShe6zwvLyVQPT985qh9nHMSHfoyRdQGWUiOk6luhgfKFD%2FZVp4WhLtA5ECQG1GQuf%2F2oop9swrlObNs0UVxM0Evm4%2B69rlr6Jp%2BJharo4Brg283sgsAHPNpuGdfvMhF5ypvuIggbq%2Bp1RTHDnu5gmVKzn9YzCgHmwY0Lx8wKHwn5p6iLwZlq1hPXPBLUvbHgpDeCkLStwNYWh%2B905euS31EV4gYDFofMwff%2FJXyScQSWIYKP%2B2BM0YUTRCB6BIr06XmsE2ZbBHSl4MepOo67AAQNcrQKoc0k32F4wFFL5fnWIrbncy3SefZT66wB9mtpf7FyJYMWXB9bjDHWsLENhnle74KqbAq17szdTomF6lPj2Tx8abidvfdGmJYGKQri%2BWkgBJ%2BhNMLsck77veoVoMx%2BedDpnzmS41PFSjeVjnxRRQaYHXTArNeiWfyoENj4t3g9cdPfPbOoN8heX8ZB6vGKKdUSMbI38DprURDSgcBTX5BaziUgfesZbSSXgN8LOOPd2jV0qWEezO4yMRf9TvqrlMLfy%2Fr4GOqUBR74k7rVt9p9%2BbA7gCFNEUJQ1bZQvm6EWkcFd5ki88p25EwkbEkMrag7C6RPIC6o%2F50lCI72r73S%2Fp6ZvDxM5J4tGUXb5xtidoSTe9HOs6F%2FJKC063Uzkv2mzs2sliaTk4HRW3WtKFS%2FnwU34%2Fvh9visiUyzJMyLfqgmUrDfKm86798fJEg4F1ED7SiaK9NuKgBqtfG42aLQjnvuwViCuYVtW9a1M&X-Amz-Signature=f97416137ca9aed96a3420ea2d3bde13e14aec6b6a9cdfd914a76ffbe67c12a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
