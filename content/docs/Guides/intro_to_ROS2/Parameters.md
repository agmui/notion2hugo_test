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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVCZXEY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIAJgmGB1lq72sqsDkuykPSWZtlo%2BO%2B3gRcWkCGzcJkD4AiA5vYtzJZTysRiASfE5JXXYaZOEkj%2FPgxOsclD4ZVFyCiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOmPSpnKaGCpIj6IKtwDxqMLP%2BuUHDpJwtdwLmMGB8EY1GMYeiD4umrw5OSC8wjZcTmdDkhvOHvTm1aF58fCemQI2k9%2F6K7L6NlmihXVAnhf3DF6bksTvP4H02TGo0bfmmlZaej%2FnbfPrbHlYOKWQzFV11In51YymNvXkxDoGW4wFx4%2BYveABGBNeEj0LmMdR75zHr10QGYGGXTepOrYOD878hkNzyreEmNBOpFbySa6a24iEDCP9DyaaCVu5K6jKb7MlTMYCHQ3Qq9e1OHahFrFKYZuHxEOZ5oZ8rMe6ZwCc34j0UR1SSVPS1sUpry4%2FzAKGmz1YAxMFsm114qAOxSXccNXcWUFDR7PvayxyfaKUqUaQynVrjFSSngQBpBcqXzb9aAETwxVSr8Bgq90ENe8UDDaQrcOtGjD110SRODQVNDhBP3JMgel2dXyLSp8bmk81Rl45as%2B333w6xrJaqBlROj8SnfPaycpScwUo9HeSSYrCVNpnXaXmhXeOAhvMZR9RF6E5NlakNkpYr5TkkhhXNV%2FbApbgYmHeVx%2BjeB%2FZ348nf%2BNiX1HpvWPVdKsyCtphx9oW1k61Mz46G1WOH6SjLg2PbUsgy9isWddDuejlcG2pGK7onjk%2BJui70W3qonyOL7H5aqzThQw79SEwQY6pgGm0QjFGzvN94k67cNRA6n4xPSv5MoUHDXykXYAwEJI55VmjFwRLa5wlZkTgc35Lpmdk9CWw2ywT%2B6NXqjl1BFlsYHgSVjQFa7gDMXMyIk10T3IzN60t%2BuJ%2FMIP2GFmeQMRUYxvBZwggAip8MHDykutd1gYRoJKgkma6EPSFVkWIqHhVdwMKQzkxmVC94czsSqpdWp7vBvNIAP7nB2AwtGGsI%2FD1EKx&X-Amz-Signature=c75b60e14572fb2e7c27b3d7df0604afc09a3e82ccd207a030d101be6e6ce366&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
