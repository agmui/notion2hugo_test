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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKMN3UEL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDeN%2BFqq7Evq%2B3rgZIdd8Y1CjvvZKcI%2F6vqz2BiW7pamAIgYeNiFKqDCgWQBsxWBhUvEGQcP7LNFm5fBwqsxWMpITIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJHJNpYeygX5ypr%2BKircAyflR9887xJFB%2B10FVs08aGPMfAvK%2FI1rlIebOJ2r4bCWOCH%2FVNdgMuQkCW6VKw6zi4m3oSrp%2F71S4kYn0e6ko74bsV2V3atvdNRX7BKD3h5fb92wvEawoaB9yukuDF06y7nDKWVMYSRPV4eiVT5Phl53Y4BszhlOtfGkkMu1o5blnSGEmODFqXxFLjC78TRwcAuFZ3x7a55HI38FKwSC3%2FRRJq%2FgVDnDjLD0FNRydN%2FZWGu%2B930UF7YGqTomunc4vNN8WqXsr1Hx9MEovVkvVaDYtb4U4Up%2Ffny5pPPBB8YKmR6hzLzSQR01dLnt0wGasy9MAMeptwXhB5SR0cWIdxVBLGSwJB%2FtvDr2CqBLTvQV4jHrEAmuTXq0nrYHZmM5HJJTafHAn39m8Um7bow3q%2BMsFXY5ncc2ERL2VZQfwlsrXfkNWWHSVOy91sGypBe%2F%2FCZlbVZCVmM9eHQgu3HChRDLz96Tc4h7QRrIkDzGiQ8V0bryBGN5g9x216zmyWOGHo4uUdqNPsTCV0k8tQpdPkP2fOEM%2F8ASWid8ZuWmqvXtQUQiShmQOaNlCD05w6L9JO9rsvQPzZfJ3%2FnZDLssGg%2Bhh1z3Ql48HrYd7yoUPvgXVPmBd7algRwklH0MOGtzcQGOqUBtg0JUPGLmLgk5SVvgDZVYFVCGFm4kq7HbLbyCpxuJXZGGK2d702lf7teHEr38YDRXLYUSE3oMIWRtWQ9n3Lv8k%2FbKOypEQ0d4VAy3GmTRrpuXj3gRFK29vwkgUZPTVMWRuv%2BOJ9QnA4hJt9m3gCcw3EWNt%2BD%2BhBieaOwuQqC7OKSr%2BnPaBvYihhRUdtYi7Cy4eHfA%2Fr9j5oVYxV3cODf3FrUPYxG&X-Amz-Signature=69d4500db58a495073a2580f1f9857a3a6eb94b55e2fc59a90abffb928638fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
