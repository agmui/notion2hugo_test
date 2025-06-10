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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVCFGL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDjvC%2BlkNOhn6gWtf3apEyo8gf0ebR%2BXXdoA%2FhtiKimAiByD8RVu41qwj4nNhXmEgWUZ0eb3pYDbziamJdP10ywIyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzx1R0ucDMFXmC9kKtwDkqApAX7GVsmjx7zXoL7Ru3GMClgl0kaeeuMXIgwO9MWgjZksY18yzHyaJb8lWRJB%2FCGQKuAf8%2FggP93UkoDuZ0CdC%2BrUtEmUE5eZSZaUlDITnDcgGEhXm3j9RfVcJ1oaTKHVh1rvKWz94NsHkdmfgB2AYmCGjP9XDaRlft8pmRNAuNGvKhoC6FHaMAqaBSZpX6KN6rZFx5KdSNLi%2Byw0Wkdj0sgVicvJv4%2Bt0zXwEUo9j5G44ziD%2BV172QkfjzTadPytmVFIA2MJA38ZOMg1CMsmeh8Y93dOv1jwz%2FELOmYzkLB7giwtb9iGZYmG6wVWnrMlomTow1Lub1X3%2BQ7fp0bIuVz0bDrxAPKoEQ5boAkqTYk0R0QIW022RKdsoBxjyUaHWOD5gHfJ3XYkdlZoVGqdp4YmL%2BsNemc2dGbbsWibbe2UF9zPG7nlb%2BEdnrvaCYR%2Fli%2BQ%2Fuj9SzR5hq99Amv6zZVpuSCCKwLK2bQ7drasZNRp%2BBjTvsPppLymE68YC6X35p2snsZUmrz0bwXowG9E3BI66Qz%2BV0qjab0kOP33mb93WD1NKc%2BcQRtMyixDMt4uhy%2Fxaz7%2FU%2FENHC%2FmR72S67eVcelA%2Bo74ZobYg0lVO0K%2Fv2HBqYiwysIwyLKfwgY6pgE8rY6Wh61%2BqIKi2hykIyw6VRlNHqLrUB9AwCcYdYoBhJhmLWIjccGNVqBTVO%2BnI5dJuoOmOQmeuTKjwvVQa5dT9LNnaVVoaYWYI7NH0YIQ986n8k23J1VmfSR6o%2BL4TN407P1%2F9DLu%2BfAifbeal6ONFZHS3LhKaNMD880hSt%2BxijrZsCv%2FvV0GSEYipNGmxP9UPHha1kVKbXOQ7wvUsqBwGaQ2wJD%2F&X-Amz-Signature=0ce57887d64198a079b082d07fb127194db0a924f0a21e22f83d15a3e7929cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
