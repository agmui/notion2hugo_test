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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AWITNL%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8jnYVjEma8n3YfCZt%2BZuy4Er6n2RYoTvHIXd2R1n6HwIgWrwC6TrdZ3qO4rHl3hCUPCTgjaYh5f9MONvi4EE4NrUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLot8Nd6Ah%2BhexvSCircA4chtFsoEj4yV0FXjNURT%2BUPlmiuYPvzxf1fLDasdSZ71c5xgLJ9p0D4ECLb%2BteW%2BLuM227U2O9tj%2FoYJxxijEN4HFy0YJIs5csO1oa%2BrjouCrNkAASHII%2FyGP6cDyAqF9T3zAErCsyxqoJW2IstfR8DT5iMK4PFtTTFB%2FEgTsIEbj0QU6c9kGXyjU4XIGSSWAHBsIPXXQm0EEgtncmH8y1ugm3tdmRtsB9vSVSL002WwGrDixZXK25rnnNb0YFDBpsyG2ekxc5MSitRPl%2BmDzu%2BzOWIJY9jCt5%2Bb9gdSz2A9R2Ru2N5kJ%2B1DIALsJ9tgh97qv3x6SzvOkxf9knkvq5Z59qt3Qc3oTwMKZ4WrA0Kt%2FgRnZFm7ZCc2LznIRVZxcoPUp2WAX%2FDaCmcpnLpkP6J3ZlNM1odWucR3vT5bXPyf8VNpODC9ohZJnWgyUI3dSdVmTLto6D7kBGrpnaYo5qFgKehpzH%2B%2FyR3oJJwCK%2FZLgv477%2FmdsZ9%2FgJEt7YmB7SWX3LKd5O3aLMdMSkU92j%2BwHpvjGObRsyKW0d8xP81%2FO8sjNRPujqW4UQMjvONpNDtEVQdEFC2lxBEIb4nEZNO%2FuhRUbpAyQOLfILft6JgHX4eqFcab%2BvA%2Bf92MJCfzb8GOqUBpcdmpF3aWeKYO7scOV8OMkQaxYYxXUxWYKMQof%2BlvM%2FwT1RJTpdBMcqUZ6xxo4Sf3Y%2FybBUSEw4qxRZOJIv53bNjn0QjozS0w%2BWBkobsqtw88b882QGI2liLWormlnQ0AuPjLrlY6fRR56XTjNCwjsjteMR8WlfrWmVJx1nxVnZnTAUC2BRTeobzWmO1suuoJadgRPYamYAHIFZ6XWU2p9scKLbl&X-Amz-Signature=87c463fa517931f71feb5f7c5251fe7d4979f5209679800b8c7416a9e8ef842b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
