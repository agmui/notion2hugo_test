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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAJPC6F%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCKnLcURkB4PToNBRF%2FR5%2B3WJT07QWygns5MNwNYBsU2AIgBhxNCZdLfCKadWev46M0zSp6FN5K5XBzz914V8xNIEIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDO8knhJ6esPn5WSelSrcA3TS%2FNf5gW24%2BAIOqt%2F%2BYP2IZXSH1xS9RWbd3QqMRP2Wj%2BguLqrWURpgVT2WNUbudbi0mjM3U5A7JnbzFnUTFF6K%2BgRC%2BJbpPqA%2B4qGfHIMTjo3Ii0TuyMKai%2B8PepNMFmqMkkpbqBE%2BDGBZ%2FG2QuWiAY0CsOPskNby3w33%2BX2DMMaIbfjD%2BEGpH1icP9huDIwfrtHBCsB4r9V%2BEti87tj25Ql%2B62BK%2BEU5Bhv%2FIebafhlvLhm9g%2Bwuz%2BlqzBvUBZQCvph0fvpo6Wfvdgbj8FatDQAjsOYolNV5O08SwYyKzZbo7WaY93%2B1TZ4RoUjl6xDbvPIeCnFB095L6nfJRyuBC8Cp5gD1AJmvDTm%2FCipAHx2xSkf1pYov2jLujzvhXSiiS7Bgxcjxr%2FvbqvW0O6ht1tISMfji4uO77OOWfpZXOmDHU54wvHTCk%2F9HGR8sFic1KRd4tQ5vPEdgBJr%2B2njmDw6A%2BNRMrKqQQ5w4UrQ7DRJ54tsm5UTw11hopvXkeoZorSAu7aiF2btHljm5b%2FwQ10Z9CGVn4Fkrlo%2B%2FWMEJfUhHVMdc8Hi9tAxO%2B%2BeYPVdD4wSjf4oUNc0RuUuwVfP5gB5u%2FGhAsqRVGuguNrR8NueatHlJ56Ds17tSFMOG6lsQGOqUB6OHWZxzxEapXWfyyhP6dxKm4%2BaDWc7a%2FHngv6EJjJurLO1CeG8lWgz5gd6U1wToxgXlGbGVz9dLkqGbqPA03M7Ni314axztvBuX1wPWUUHkQ2KryCxVLiF9%2BpLgMUj0mvEgPEkT2tN88G6rBOvjjBZzM2FEvqOWELm184vYGKYGRcEFUeL3X%2BpvJciEUKU66%2FLGKfF562kNW%2FfXGRBl17epOiQAh&X-Amz-Signature=7684202d4ae935c3690555bf75565191670fce90ca185f1e60e886d43051c9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
