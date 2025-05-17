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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLRTY4WN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbt2p4LFrGgG%2F%2BgsObZHJZGRF9y%2B8BE1vp7iw9knNfvAIgBbqca6kXGgz4dsQDLqzoE2pvkcptIh2ngSQHW213TCEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHzA7QY9qDE0RQIsQyrcA2cyUtnWniKKuPz2MSXAfkZ1Rj5OjVdMa45AQEMwLzgsDcoX2%2Fq67DvXHCkNCYVhMiCUVE%2B9ClvXsOXhctjXR75%2BmAgytT87C%2BNbo7E%2FLh9GyfYeXP1dVgIYUwLZspD6W2AxxDUtLlG4%2BDxwTbGY7Gd0TAt20IxLOJKm1NEb%2Fs8y242lFDfsdgYoT7qc6Fc9JedqUyp1Oh4NDAQKJHe3SwFOnmhisUDShjpVUIuroIE%2BMivrcQnU%2BfAhiesQv4xubCpNwgoooYkXGuAwmqXmbMoj4I4mRbyvw2n5Hzq5aX8V2YJvZqKcwJIX%2FT8mAR5jSrhgaQHXxvnU8HC9PX2rXgPrXmslnBTIs3pLwksRSTeGTmyUxWUrouZYvyLrSvPlHnzj1KtfB238OigjIit%2FUhQD3n8nucdiXzVRXFoRNMTIkZtGFytk%2FH8mAIm5q8c1ARTXyotQMwmWrfJJeM9aVW9iTN9p6ff6IcW%2Bw3dLdlvsPdVENGr00HqFUK3ORqVJI6lGRTE4p4YREh%2BsbBhVNaRDv7BQcyJhjqwqEgR8RpLRxjmxtCzzAzE2jPgjrLOUqSEgvdCyjRQgZ7rbLE4syFkaoX2vxsDxDZzw7143QPNW%2FQx%2Bv78ozthX4VN1MND3n8EGOqUBl34cIDnOBC1ylhpxsEsXC8h6ddegl%2FHYRpxi76PFK3JVIb03pqj34e9A4ROu%2Bc0cd%2F159KOQefogTb%2FB3UKy%2F1iW1ebJFJXD5uKroOTluZ2jTh0vtZQ2xJ%2Byd8DFScBYHDWrv9HOmjcag%2BCvg%2FLbaiJF26Pgu4T6hWOCRYBiSXtYuWAtrEhjcRiAEFAJnQM0U5asBNflNcgiCnSPAaxOwqvZ2nDJ&X-Amz-Signature=86796456ffdd10ccb3fcd0e25b82a25668d66296b5b5ea6b3a107a17a125b3ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
