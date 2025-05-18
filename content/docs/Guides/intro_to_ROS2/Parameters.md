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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655YQ3T3U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFzDu7NZx87cc01UzupD2pNqVOKeldnf8XT8ceCbOoxAiBMQ%2FZtbINSmYGYTqnNh0UQ5p4s3x6Sgc0KkWiUZjjROyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMTQ4nOODNkV2nl7P7KtwDEK%2BB5MlcA6NXgpo3xQmRCZQ%2Fbxo0JVl%2B%2FUjuaPYzP6zODuJqbYcvViVVdvbEWHq0j7Q0C%2FDJaCFjKgIkHEokrUaNPbmHTK3D5tJ12Sh%2FjEmmE3KsG0PVW%2FmLJYll2kISWJFrWfofDxrRRYyFuZd5icADSHUUK5OBtcDeAE6vNAomMosXm941WmoZ96SQs%2B6ZURdByVLgNVjFKlphgXPW4ClPWYu36yfbzQc4g3xm4FLi8JzoZp6lUwl1dyO2PIQ%2Frzcvhi2cd7m9TET3NZCq0n5YtrOBmzr1iGprrUR7saHWXoSBQjyHsri4%2BYT5CXZc2ue0PZkiz2ycuoZGrxxR9syCaWGJVYdjHMRfcAv0YDHzZMewvvnrtmXYrzcTv5GWJwiPInUw8eOy7Z5%2BS89NRoQbM1VchgK2thBi4po%2F4TjclwlltmUzwlRifcSrVgLSMjaGOqhH8HJYZqqynmQ%2FtfR4bMzJkvBwBlDP%2BeUiXUiVVPNeNmQvsiy9%2BZMEE2E3kLkN9djB8SdymW1Wrz4VZJGDDHEvGUFSv3sFyD3vaKTuglLbYWQnJVrvteU81jPoGkY5TTpv2ZjldqejPaPYGDTe7rPCY%2FoSbJwHtAgjSxpTf76X32EjSDSwl6EwmZynwQY6pgEkvDdn0cf7jNbwCLuZB%2BtQbishpUOBxtBy9YzgvtoH6wmnQVzIo48gZO1PQ7PL1CtV6YJs9EBWyyjsI7tBkkqoKLE4x0no32QX4mnE7Pu%2BEjiUuWi9K5CSGXZMNVseoaXCs9tZ%2Br%2BcWFf%2F8lG25keMIZhyD1yBXcz3M3Dihnycxt54QuFY31BwGkwUQShxCrn4TTLgyOhR1Ivo2ciTNec%2BBCbW8Zii&X-Amz-Signature=2b59602b1becc68786cf9eebdaa2fd319855d052bf4c7339bea70c47fb8f8df0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
