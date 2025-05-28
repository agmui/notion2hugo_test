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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQXQEDI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8zfLSKM5fXjSy4GKps0InqJW2YRiaxIy5nXFRNftPMgIgB79PPVRMIo2i61%2Bb2ZyQCjjN47ZHMiXKgFPR6pOHiIYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJcAM0Q%2FGeSc0dm2aSrcA9vRthAeFs%2Fz5aVUa%2FvrwtJmijtKwAdhWHHf4ckig7l0pAn24qeCR4UmTxDZJST0FngpJSL2wTjR1b0oCQz6KzlCPID7kj4B6eisx1IgnMZPrgO0rPR6MSo5RnLMVOBrNXSar0oddTJaUof3zrZBGhDzxw7BxxD1wpFlMMVSYsnyej4fzPPSBVjpbdYyE0VCJmrQxoQXQbaQ4wlpOkcfe6zh2i%2FOXUEwbBUsZgyYcSJzluKFYg5YFnbZMRN5ERoz1Cu86UQCv5thRgcXFyjET%2FMF9rz1OeGAL7KSWKTwirizzSWHLj9RRABxdfqZbNFHI8wA4x70Otoqh83IZNy9M7SlaekbbVRX%2FFR%2BgUwUpwMTIKWTJidL4JXeacW2KBc%2BqZ3vePh4NmsgJoRwQpjgjYmgNIuWklYgoSLYtKd0Al8i2ylnJEibjsqjdDXghMQLFlQPicP7aEur9uSnvCxT3QmgyeR2pR0BK%2BWbKyLQUpYygf8YtoSu%2B3npqo2%2BorW5kBI01h1QhmXLNG3Hb%2FBYacKE2JqAreHEBDo5mjzxC6lXwZGmm%2Bp2fEUAmD80SsQfS4Iwl9rOhulg%2BBqN8UE15GjLMPfwbQ4kkuTzxTv%2BwKJT2iOOtiqNgfSsmubZMJP22sEGOqUBn4otQFCY1vcxPPJbsoLVe3k6J0wXg73p1EkvQe8IV3k79rsC5Fm8U1JaT5KAgGCjUZCC9zjXE6%2B5CRB%2BTF8V5ZO2STgHLipkRgnD30Vr8KPxpjfZvm3360BCkKep1ICcTHlw3PZPL0zU2VTelyLrdnI4AJFxv%2F80stlkzIxBJ6Ka53OmOJEEjIFR9W8kYlAd4o%2BnGjp%2FUlJjnTgWrESmSHQ0lXhO&X-Amz-Signature=176d125f26836213da3a6cd4164178d596a26de7517fe314be6ba3d30b8f1230&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
