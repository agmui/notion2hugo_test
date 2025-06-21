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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VICK6RPT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl04EEFEbSVTAkbRy6xihItKNf0Ky%2BlJRAoR%2B3uIybgwIgbyDsskWr8D34Wys5RcZE7fu52URZN%2FsHryzQb%2Bg%2BuNMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAY%2FEaYactlzp7GJircA3CxrgseRMiImijTkfp5aXolzxYRFnUIAJKIACqFmzXeSCPvfJCm3zHsOoT7pd0sZjAyzTU%2FkL3XhrbvXpDm3NcILaD0UZjjSm0YG3aOrUphnOcotO9DlixexR7101JDdbpQYeYHJ5gsimNlhqUAAF0%2BS%2BuFpxUEYQSt9wU4Jr7zrcWlRi1iRXoocU7UNtzJalpKE36Z3GvFiHeVceKYbPh7o1Y%2B%2FHOWifq8On6Hy0VzdJq3NcV14ehfLez7znKLp7E%2FsdOVXnjg4RcsY3oIOIPv5QTYcWoqUJKMXssYlQsbmAk2Ubmx137fgcjbKGcz1ru212If8VtBmSaC3KICJasX9N4IJHlGDO%2BLFf8HqNKOPEzVKVR%2FvRynGlsyWSBbIH6hG9Kk1Jhjy35Dw7%2FFiF6mKmgAn7MREbuIft8sFO1UwEPAFtH7eUvlgg6lJERtUVgKcDgVrkbqADyrJnPrlAdULYLsLbXAE0J9b8AWtPPIuz2fXSxfYwa09aY9zG81LkIs%2F0XHUpPqij%2BTQ0ypFpfEmWs%2BVfQDVchhnGNMt8j62bOhXpvupjLwIk7xNB%2BaqlHMkub4bng%2Bx%2BbVe8AezjnIF3qmAxMnvGgsE8g0xjuDpmETNjExvrIz6EARMMmP28IGOqUBGsfCsSJuFPWtHgXIIG93p7ie7VAV8PlXIltesTpFBHZHzIH5NWDuDNxnNKGXpV28TMTCWDPik3D4EPOd7y8IRSHh7Xy5FhHi26C6TolZbT2zMf0bDkr%2B6X53ebCsNLMOPG5dvRuutPeKG44kd3g5M2tvamdDlS9F%2BRJKuGevqzsr5YpJ4cyax1oCiyfGqo96aLL6mKSqhFrkInFNas4l7w%2BGLCUV&X-Amz-Signature=606572f7bb988eb4e2003150527c6e3a81fe803e0f85d2c65637686b252d471f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
