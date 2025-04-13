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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJNFTSI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIB40n6YMpgcH%2BAyQsiO%2BqUDTtws4xZ3KSkreMTSX2deyAiEAzCofCfyK5HKc3x8GDdVbAexAYhizEideqD02PxynjfoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFaNl18brYC3jt%2BuircAx8SN4vATrcj1%2BU4F1nxqpkxCTzxkS1ItlZwEdkY%2Blg1Us7Hil6D3q5%2FaL94XhfiMfsaL1oE%2F3gKOAeGCo59KDlrO8ztqOhyhr5K2VQVOOzmHYi8fG%2BU0AOWZrHyxVTcxa60LDhSFC5okjXemfrOP7sM9EyApa%2Bz6bUHotaJNxJ73892268DLSj6LlI2K%2BYALv3EnWDfe95fsZpo0vZ7HfonkEOkgyKc3yYSw7nybVhivTMOQSWzLW%2BKIPCVggkwDWDiQduX0u8BY6xfRaRAOpqjfdGDHA0Xm1TQ17wkYoQzIWe4TVQaOZ5zFG9NhX5zN0AZd4OlFTdAeVW2OXYg0UWZtDG5%2F56jt5cSGulZxyXqQekT5kRVnmxKC14buqnpw1uv12eeBiaAdUnXijMH%2BN8J0OPQahFevuY%2BsDluwCOQGgUwTA0xlm%2BEMGwBMIzjv%2BfqTTtBtYnyLACrBzedLIiE2hyGktz5Ao5czPabDWYHUCHcDXgWaUA%2FfKZp1J2uobnnhFWJjYXRw8cZXz7458RWkyzgjwShnqsmnBqcBeKMmFBLRZpU43rkLPf%2F60f8XJTFuJVdeEU3Rg1M5wyT5JdTz%2B8fyW02EKD%2Bvb0GK9hI60PLfYz0BofKFFJfMNXg7b8GOqUBty9TYJYSvTllIYQMQiH0WmXpATE%2BsD0sgXcacZhImmzISW1AqD9Clwy%2BFKxhUrjpTbhjLavdOpFvQhKkWqA35pvBMGymf2a%2Fgen5apXNRw99znM6BgXsY0vnsRNMLR7acl0O5z4uy5ukR0ReQNrw%2BeYAf8gnmOUiMqJuXKURFpEGIbJnqlsoc0A2nFM0vYQM97SfvPWFaa4YTKPkCgdhV%2BXUWGBL&X-Amz-Signature=81ee5d444908946c1d5a2e999372db85a876fa0746526fda50ab2191268664d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
