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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMXOWGZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDkr22QNWDdLGIomYBfaQBVBtiPVsy8hIIs2%2FDbJViLMAiB7eE9sO7hffAa2z8IoBpvKyRsdST1PxJrfi4EJXZlyhyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMCUVA6vUSmTuz3hxpKtwDNmo%2Fsh4gtJkAjqtJINqV%2Fv%2B6H%2BdDhYWjIuN2UzV90r8TRoqvDdse%2BVQmP1scHd%2FNNtg%2FdWID1RAV%2FkYQOYNT0W5YIx0VJ2nyYAnF0s9w5ox2b3omByxWRLiTsnlxu%2Fb1tnfw94lvFO6dRBFXDZRfMezWvG1PIhB%2FHA55Pn%2FtloqDmIo4QKIVSCJDKgbz87maCXCn1mU1uHRhkcmCLm4XsX51LRC3HNwegzmD0UFlNdbENhTsVWMsW1ggoIQdfwXL3P7IPeF5zZJk9VRQ3VZJXAoKeL89ZnbZE68ZVAO0fhwSTatTqjeg1dr%2F8oP9Mh3WeGrBafb36eDAXz8YimFUC2uFZo3bygq5aI4lJLeHtCeCk4uxWHXyDbAT7lGXYhiiIosUYUULi6k3d7L2G1EaeE48VZp5F5K8rUlFCTaSnPw2vx8odN%2BXEp4BAZAk%2Bs%2FPs9wsNpVIWmYQ7qLp3sJfy3zLUxl8BbgBE2Ctuhp7OFthUIeRkzrdEIgkWWItBTcg%2F9i1oJGACPsKDzf0VsQjDUqwLYv9iSEVaYph7BaYRG1dVhl1saRRWPyyeXwoHk8chQ8KBh25AZ1MaMy7FsUc%2B%2Fn4uUJC8g7fI3Tzgz3DuwrUxAzJImMAe5RLhkkwyeilwwY6pgEw6neez%2Ft6zQDrOaN98jwISYMNZL2JUqWnVppMOyG4edNXZ3OruyVJIkxm2Jvd0MipzAgYZULaYyMEdr3x6OcWAAERlKf9Zyh%2FK5A%2FMYvOlYG1iADAPMugJtCAij8C6qCsjG2laDfz%2F%2FRSVZ5Sgk5jxKA1n7f7yLWlW9DRHlB5J5XbEP3O%2BoHFrdl0JDy3FzsH8kZ25WCuIJH7j%2FgSColSrTLfotdf&X-Amz-Signature=f0f537fdad74c81568ba86804e23d0ac2209efc7896a53e31bb0f37fc6139c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
