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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4TCVJT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGSY8LsXarr27ZIOenw8U9TXZbH1KT7e1%2BbJnAw33UacAiEAndu4n%2Bj9YZBmG3Z%2F0XdUlGzlXlA0USWU1jh7Gc5HVt0q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLgnzK33cJ09Zl5u0SrcA0MExED6MDsjtoqOE8zmKjhNIEbtnu%2B6zuCYOw3VgeDh6LVFkAwWTz4cPQCudC%2BGD4Ox8tT0exBDvEbpiITEhpvRu533d98juV61GKV094JwSD0nfLgLyx3oMgA%2BQADJJYiSZagsN8ilvFhRpW78EURWsLczyYbzwH8w6fmVIRSWsM72bjlBZHM7XAyy9nUI%2Fs8GjkgcrVvziZU%2FpqNrZGEBjc0jeMVy4gz8Y09OeewMmTVgtrGUXK6wq4KaDS6Qr3WQ2crqJGvkanE9hEGRdYn2HvEjVDjQvJkh7JHWl4VV%2FG%2FUyW677VPlx8goF%2FQ7aConkMZ1i%2Fwjqy9zCksSekRyNsZc6w52QP1j3NCsbnOHl52y0BS9SHAKZFlO6y%2FxihFsw6LkQUy8Sk1C4VLzjrQTzZI5y08XRt9aq1AMh2gldeTtHjOxa7%2BUFT5WBjVPPsVpvcR7%2F%2Fj22yhBai278BdqZBxnAHr40fjFasv5VYxTzFIL3Vd1iw84oWfrHyxyzgaeOCmb00fdiSVva68HhkeUdk2Zle1CvxS4021etePekqGGhOr9wvks%2FHiAKkP5n53qbVprolBnwJcdb%2BO8Xb6gcgdRI2fp102rOivvaz8MxpkR2tOyiQADVsSqMMyE1MMGOqUB9%2BavQBTjxfmdWninGcw%2Fcg69%2BUCOzWDoWToAcXiiI7OeLK2ckZ8vo0FWbOvXXAnYOoDXKxE9PSeYoqUtJGF9aG%2Fe63lKebD2fXbn%2B9ngEmnyNwnuur5vc3tM6dARDZ3T2CvoIKRuRjQng5CzPDGRy%2BQESyMfTEVOk5z57SGuy32hy9%2BSI%2BqvMt4X%2FVHsMZ9pxKbkYGGJwGcFDOHjr%2BVSwTVvuP4j&X-Amz-Signature=b58e03ada74e863f3f761058117713825e09d4040700e2aba1ccaba78e98960b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
