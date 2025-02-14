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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRUNQMZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGbrueNivNQSgVAKFl5ytjtwjTAvELu5GlggXfXn5ek7AiEAp06DeNitw1XcfwyGfELci41NuAqe50Scrj%2BewpIBI0cq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDE2OGxRrjG58eSuv0ircA0a9ZaTEXtEHFDWAM%2FO2OB%2BobN1OlfmJDkphxCLY%2FCbz0i69XdrfhQZj9YXQ2aVV%2Baah4XTlYJcZOce%2BiI%2BW7at9YAZO9lbvcQ%2BBnWNRLf2vFwaQOQfFkMPvSTLazhqBQDhFLa05%2FswzAl26oHkTNbvz%2BjPxDF8MnjNSPhifsDmWhnYXBPW%2BOyJvEvm8AD9cHhrpdlsX%2FV6Q9r1dX2H0XbobUMGLZaMvDV5Lfx%2BcSVCIebjNBPUqcg0DLQPQH8uJYcUEKJsEKt56xhEK%2B59%2BjnevZ%2FDSQu%2Fn63uFsRabddH152bPODLHQtbZF8hHjbDebplwUNH%2FMUsGoCAtcPcCU2c3SrlXl6OdHWIK48KLTUI%2FojevboSYMC%2BuYL7ZRey6RloPaCCNIrWWgEefh%2Fgfyly0chsCCldEwQXkFQhIrc2vDWMkss0Q1AMPbVIa6KWSG3LPff4DX3iYUhghgbihMLReubppThkiCiOFBxL3P2DXXN%2B%2BbYYQ2R9oCUDLEmchvFJvtaBvQd%2FnmjqVaTscNKVelH7NMllyZI8xwcI8NgV9IlDqFGk9%2FL2dVjkhDnf8StcoRNns682CKB4Jmdv5VkupfkMRLO5SgkTEZPuPuAzXjYk7Baqla2N%2FCAK%2BMIzSvr0GOqUBOEsRK%2BCkEshLGA6QrXofKSkL976V8B%2FQSng7aQS2m%2BEXPZJ3ymsEdBoCGb7O0DCugSTsQPSLez%2BM6XtJNyhFieMDeqdB9WgcMe9%2BWdlbSW%2BVY%2BS8DDDq5%2FZ3%2BK1psI9BVmmUdHwVYc2ztHkE%2BRtaA2DhSfoP%2B1jEsLjkF7SDpxsTJ%2B8OuF3ItdYP%2F81aARx2AYdy9VbBwPS06uiVeTfCKiwc02Lg&X-Amz-Signature=e7f606a6e0977ab7e070dc5d05a296905659687d943827400db2dbda2bae63cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
