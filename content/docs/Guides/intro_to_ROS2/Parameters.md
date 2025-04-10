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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXMLSR4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIEYCwmyIbcvCQu%2FlTqtQJYNsqXk6KA%2BMQ2jPZ0%2FVAAudAiEA9vpl2eG1u71STf6fm2Gxup7JsZj7%2BP11I3uaIP%2FqIyAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK53%2FERNkuXY8ntLNircA1NFqtviE0tI9qTRZVLvldAE%2FPhUFSjOnclifRR4sH%2BToE1euol2cSyyML30SQgrpJV12EKpnEp3ilgcGeChzLh0AYV1%2F6euWEDZ3eMVZ5Cm2ZV19FnTdhLzwLT0G%2FSkryrTxLmkGdWbELTJ6q3CtMm1aNCcKUyYbUrIZkqgBqFa%2B4cC%2BO9isMyLer%2FBL%2BSegSu6Zg8oQUlhJo5IlhPkE93c8eyjx8gAEWP%2BOYB4Eu6YDdg8lPVVUq1ih9F8%2BQmc%2FG9tTThYxSIbB4mh8OxZpkNIbjf1SnTpQlBwkMO7OXIjIcg9FhwI1HmMOMF04s6NXHbfz9by9nfX6FCK8FzcRNg3M2fMhQVdGaJ%2BTPdzq2E2c9V7%2Bx7Q0L%2FDeWshJ8t0Tdm2B3Ot982TuH0nE96mvQTBNJV9NTuK2n4K3Vx1Zeby1dDqRjWQ3HHeTq9SCr8vV41IjkGiMERjp%2Bwshnvz%2F1P2%2BzVdPGbjfDxHJdXtqV5Iv7unklrlN8%2FXwv2ijjijO45FSo%2FLeEtVKdR%2FUo%2BEgc4MyCJxTJEh52JzOTyZ7OAMLA3sRD5x8vTGPIbnYp4h8TAy4BbBvYJMmrd59Tidr1liscvw%2Fo8EsrKkylmfJAbKFsNsrC9IKcNCl%2FVRMLzF3L8GOqUBhFMHh6btS4%2FzlmeQhszFGZ4pbbcVjo7JOQNr2rMZKrIMuLB8dGYeO8b%2B7cIALWsoNHuc0RKkTeUBtiDJwdGWfBBa%2BiNKoEkCX805G8jQMi4TP51gMge3dvHCgQ22VPPAQSRLWMHSKBdHtBu4AY%2FYrxIJ4zypY6q8Gb%2FUIuHimvCtFBktsMj6LE6cDM9RMuo2gA7iKvRaArFh0bpCfYecsWTyIO6a&X-Amz-Signature=f34ec68d52284377a05eee3228ffa3506eb6aa76f812ce1ceb62f9ab48d9413d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
