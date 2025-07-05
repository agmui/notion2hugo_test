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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENN6ZLY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCMySzeIuk9pfFamMFuaYbq96GPchMpyGij%2F4xxf0hxJQIgARFH1%2Fi1e8qcG1cOaN92xsJ8N19qNtQ5IPuX7KjTsugq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJiHiXCYGswTaFmOPCrcA76VW0qbEcY9YfihROHCY3Hm0iu16z8wZcukEwsFS9sZeVCxHQigcOM0fjsXfhwACqH1eaHMcOr6vlkWfTQhAsgJVnPQrfxW%2FGvi74ytderoUAk7q5ptxLfjtm4jtKnwPPTlwMHtU58WX%2B%2FtI2K6LapXKh69wh0N8do00ICWe5uJA%2FAivhzXkZfQBXOiyHs%2Fo7m5yVINc34vnMXc17FfiiiTVzI1BE6EuXsiJOpRAUgBkQTxofGZbHrgkokfXMemwA2HP00tASJu7nujKxbr0I6MBtxTZsm4MTaMFfylZfbK5REWu8iBxzmbvJo25W8B4KNcshP0OAyr9y3GN5oGRHYu4AGhZgTbqqkXjNlsXHzFuVI6z0zKDKvlH6beilDKw6kNVn6FX8PezJCLoerLJ2dZpyAwqJipZ8G8s%2FoM9ORTkwp6JOhOifPEzUntd1BM9GWmRnaILgS9iSLOkQeLyNy3SO7jZiuVktCEFSvaGMjJOkt0qlKUVZf8dTyHXj4sVq7ASPrhYTM1WMMF4DNg4uO4KWaKfh2VdRoU4fasMIFXLLSHdVwdXDsR0QwgFIfMtVlRNJ%2BvrmH5bfaRpO8mniTF9KDXjLhUWI9ED4fgurDqO5U5CkNtjEIVhoelMJeGosMGOqUBhyuoEvvuawhR854TboD0eC9tbeYaP%2Fq3l43tR0ByaRDOafnzo73DvQPIsqgbAdIsg1QTiOiReSTlzElR9pU2p5bLbWlhdAUOChQpfaVKKnDQ8cQ1rDOCg8ONW7%2BTp1LtyAtfL2JAF78Xz5wpPVvdJzaAUjeMI14v4YASoTMJy25Jmx6qod7uDmSZpr1YVz9QPcexglV6xoTpy%2BdObY5sVEacoTc2&X-Amz-Signature=49e3564f78ff299bb38b641854c7d814e36fd2052b08cf741ad8297d0bfedd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
