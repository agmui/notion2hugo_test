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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWH6HY2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDNcycrOVWJeemmwRW3t0jQRSOqm%2FMl5L6LzxkUnScDNgIhAJrOlrkkOK%2FoSrGERJEQRiuccCHl3ZnhRHo116Qtlxj5Kv8DCEcQABoMNjM3NDIzMTgzODA1Igy%2Bvgq5TeZtqVHCYYEq3ANnnbybO3YUMC0L213mdE%2B9j0pHCFqNX%2FnJNU2j2ao5HAsmY%2BUIl8OlwfCebdQ7cIxdZ8jezD8S6kxOYAAsDtSYL1Z28fBoi0wcUVcMgEtnqNFODiVOK0749HMIIISFB9dZbfpKZudSx6nxEtJDV9nA1o2nQGZ%2FyoF9rpzgY2q0P%2FlpwsUs0%2F2ryZPgfmk9AwEX%2F5iOSjq6wBsxDldPFFZ0sloyS10E32Eg%2BI%2FLtcoRDRvKMvkSvKoUAtrdaavHuL2ZPZTP%2FjGKu1xux4HA1DI7%2F2ShcFcS%2B%2FVJdfpiqmvhdEeaUeqNuHNnyKVt3lJoNFZDiNDv2TTGzE6947XMKFE1V6yXzv3joFyZFAkfT7%2FG%2BpgUhVob7T8VqZffWT3B5qIPg9ORTgZMII4z5PvO8oGua4pOgzPyD9iyPL%2BONGdBPL571rNC1TvCrjGSYtogin2cZLDOp0JItOUn8qzJyshU%2Bh8A7S4oqcvx4xNY0r8jOF1z0K6TsFudfSHHtJlLC7ckymeKBOh7ltBL9vJRNMnsiEB4rd1i%2BqfXt1CjcrjrDUPxij2ydSxEW%2BADz240%2Bo%2FjdyJhHjpTSxoIgJqDb2WkFvgaKbBcJb7ogWJFFyKjRarAsk%2FHP8nyXqweeDCdxIbCBjqkATXkpoXuZkGffBjQjiSX91vU4twSR6QmM9svnQNxjGR8OzWwJ0fc9e682rhv1lLUT9eW0VaO4tt3CRQfayNnLgphGDxPRYdlmY4gh616Ir1YotPieVtR4oNKmEU%2FDYUob9CCozGhVmxQoAvqres34D07NOGC3WtL30lObZsr7ZTRq%2FZI56SmPaTSxK9yVdOY3ap%2BlnCam%2FWzcYt508thK4WkkOFP&X-Amz-Signature=63dd1688402809efe357d89d9f73fc4e3432919168da21fbc339cac2d1e0a40f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
