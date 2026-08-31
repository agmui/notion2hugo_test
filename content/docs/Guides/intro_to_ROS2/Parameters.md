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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVIAIKM2%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BpBlwnmwwr4V%2FtnzEJ%2Bf%2BoCluEjL0QjLOIEAPFXlypwIga87YUseIpIl4S7kxqimnDWzU%2Fd9IkxqFL8Pr0KmAsZ4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSM7PZoCufafkVs%2FCrcA7c1Tj6JwfHqs9PxbWz6d1li6nhHrEbC9G68AtYa0QMHy2dqkKoAFHSz9MzgJggFjT%2BELiVlhSuMpuZVkqn1jIMxP8Sl5OtPvFiqbpu6zv1t%2Bz7ofhd3qKY4qXiHNhUFdg2NMjy9WZmMyj6aDckzokenT9fCDTKTIn9Nj9TsLGpuTwoi1jABOHEisCHpAwNuC7qjO4z%2F2Awu0Kolc%2F4EoGTjUVJHA9MM1gNiac29anW0YUicH07Qw0SYbG1jLEsNuf9NXLiDJAEehKU9TZPPs5RGHAWNVraDKxhsMb4jW9TNZig5C54C2G%2FfuQdowaCkR6NdnHr94vf3SqR4%2B801giQJjoe2lDxPNzEHbwazUZG6ysYMqSPuXvbWlx5LLVwaNgIxzx7WF9gJ1HLRoQ2DJPcOtyB0f1xf%2BcSHO4abmH1qYV%2FMg1bs5TlZgiKu%2Bh6gH%2B%2FUB%2BaNd6cgL0lSdf34eNFdAmC0JU%2Bm%2FpzNrf7%2BplZPXINtHcrdqDG73wnOZeeINvGYkhejWr%2FOQgRNr8HQrfLnfXv7zEi3mQRzYmwP1RvJ7shHlevLko2sSKQDHw5GC6TxFHuurE6Y63p75S2jvB8hd%2BL6bgW4cCOYofCbe6dQQE1aV6mdL05jIlroMO7d09QGOqUBZR0R%2B8mXDpCbtT9kQKvRal26bs1Xn7zhvsUSmeNc6OtJbXtdBvI%2B%2BxmoF0EuVEkgu9fovDfkCqvoJ0r4dv35UPq3%2BE%2Bv9c2yZZJs%2FYF2CSGNVdNO%2BLxy3BwV9OPVm2Br7Q06PrjuFIamJyetkGbDar1KZ2%2FDG8Hq3d2u7%2FKg8inzOguPQe4JsygbhcBbp9qmvvEiJbZHCgMkKiOxVy8HqaICAVJt&X-Amz-Signature=200e48407481dba23f8a76d14952ecbd5382a9c1ef1cbacd58e5e8913f48bd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
