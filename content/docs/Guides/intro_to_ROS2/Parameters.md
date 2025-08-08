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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5P4TES%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAoDjEsPZd9SVdiV4uGlZPOeBvRQo9Tj7Agw%2BEr5Z0XyAiEAlp1OovcBGCiJ9fOmIx4yc4y1CG6sX3hFg4icTe2m1rsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWxFI88t8NXwFPpySrcA%2BXVmPC7ktMRlNUW4WXKMjzG7jcIq1gyhGt0ZwdXUYEKYQBHgoB028EEW1XRr5ZH5Nh9JaqY0ZgDHRRE3VVSp2yBfGr%2BLT7xu46U1tkpvt4R520b0VHO8P4mSK%2FJSX0z9x3c9m1zH4rGqFg%2BODWkuaUetzHY9bR7MInM22ROoIBZ4hePqPx9zXEjObU3%2F9adkWU3XunrrRf6lvG46C85R5Z%2FdV1kANR7beQThHKDayUduRi%2BiPblzfzDvWaAvOmEp77nzkPike%2FYQLSvdyp55wPB0umJrDtNnnkC9PzYmGBmN5ReCd%2F5oglM7A61b0OJSmEJUNmrZ1FaODQ%2FHp41SYfbRklyHw8EpVl68B5zRdCQtBlWTbRbqhbtTyxmcp%2B8PY6l96L2RaSxf4SyTukwWuNNYgBLQNyurgmHXGgaPQenUHEC52E6spZavjmWvcnORLRNq9TvF45o3SwEg0WQp%2BWQf1cgTg5m4iNnJmFib3JOwhSckkhQYtKQgtGZOfAedoLBeFBeRygBu12hBFnh2rJm0YfOmSHYJS3O2Z3O3QOfHcUjs%2Bm%2FokOcBp34ArDu9Od%2B9%2FShRkEYyZiPZqAtmjFukslK%2FmSloLHPH1kd5MTnVy01M6OA3258a%2Fl%2FMJ%2B318QGOqUBwFgqzRWoH7H0DaqJt2LWtFj2NMDreG9Nrl46aqJI4vYPqm0xkfsVPRDL%2BlLEifaKVGsnylxDwqYlPv3FKuvhXPDjcUMt13TcdbapzFna7B4ISOcwedpb36S5SHiVQiXCBee1ckwpxIDL6kQUbMGChW4a93VzssvQ9sgjhXUoduBCPvZxehYEiZuQx2ylwH8TEjfl%2BWehKdSvPupMavGi6oudi18d&X-Amz-Signature=9294b69bdf5c0cbfe49807307f939bba6c78d6360cad5191bbcad664cf808c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
