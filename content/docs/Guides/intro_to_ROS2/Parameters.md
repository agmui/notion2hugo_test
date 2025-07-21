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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665253BRIQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T005000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcc%2BREKCBDWZj2BEoT9eNIALXleRfBFoCJwIcfeRBtkAiEAyvSPU%2F%2Fy1nMQsxN29p%2FuHAB7OCbozuZzhbUt5vXvyYIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4vjcavtQzKAfS2UircA4NoYSq62PvQIY9NKLfnE%2BLwgS2Qfk0mR5kr9fFLBFagrQ1i72RtuE4B79dVdSzL5%2FNSzmJARGcIlNpCa%2BNaErEzhmo7i1mNHVqK%2FxKNG6uV8EoDb16Ee7yJq%2F30pSdNw1%2BT3O8sr2je%2FuMYRl7Ua274NROVEVM5Zn7j7RXUZG4UZhANIt5zC5zzUxCt%2B4PbuNsl4p3d%2FPQdloFELVgEFKY%2FDAV5MTL6n6v7R2dgG%2BBOEvP8Yd7JPwYBmAnGTuaMoO604VBCIBzZFfNR5XND83H7KA3uuYrMqV5V18vve6TMEO4M2kVTwqakvKWQrOPDaUZo2qO0Jw%2B%2FfhsSkT%2BjeZIwkaNwELB%2BeS%2BDJf71xAxX2Y8%2F8bfa3VBw0%2F7ToDZzv0qhB8d0rf%2Fz2tyc%2BTkvl2wn4aVd%2FacHHdJ4DFINXn3lT1NsUnFLCQNxZT4iFU370fuokR%2FE91FNcEQ6rvLLFRCevG95eTSukcT32HiLllWfMzB9VzIpYrERbxnaTHSp%2FMR%2FLximI%2BK9779kJ8asjROYMDSQISfRGQg6%2FtF0bLSS88%2BAm451RVcWNpLg2Y2c98TPyLIplR42GDw27IQfPM40e06m22Kc5EzsJ88%2BnrjEp%2Fz6ZBQCT23cejgZMO2X9sMGOqUB8cfauM6UxdzLaeujVktDu4%2BoRemSYuWpNzwn3ZVE18zJKk0MAFTa1Ox09dnb4djdPy84WCausprIVCeCU86aOksuqe8hzZen1u49BubXNOlesqNX9F3y4%2BLWCtVq8TrDyMXNqe2dEwkKbs%2FLbm%2Be6W7yGRiwGX02IqRbmIvMPKItElU2FsyN57yZhjuvODkTT9TOdf8hcqJ1qZtpByhgmk9KB0Rp&X-Amz-Signature=68781a79f6e0331f3ae71ca9b9a10feb87585433a36ec96537705447b15bde2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
