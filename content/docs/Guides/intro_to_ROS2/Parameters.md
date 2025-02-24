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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU72XS3E%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx0Cw%2BYTid0umlbGRYbT%2Bno4seGAId%2FHnsyFD5MwdAUQIhANaOBdGec3ST2zhApiiLv6cldJ1S3%2FV3Ke6PopCxgkEnKv8DCCcQABoMNjM3NDIzMTgzODA1Igw4MLpGnFkHdbLrRxMq3AOmAJsTcnci%2Btg4d1gbxwqGEXsFECOmFfoqF1%2FXPsSWmv%2FBH49PxJRfP2hppkJecIrmW6Tb1lb%2BxJfpthWlCjiCu5k8Bj5jItbTps86wLBcCrMUX7qC%2BAf9edQtd9hrp8Ip38JanZVfEO70gOdXQP4UwCWjDL%2FmVwhB6PRUHVO%2BwyzJ6eOCaaifO4vcBnAvZ3T6RhL%2BWYXZd6Yu9f39u220HLsNJr2uk2az1SqUEQMDmBQMvM%2Bqh8NOrllGu0QkNymHMNDxFR5cA0Z5A85DD6HtNZLPrTkKrpTEBwxKkXzY8KGU6dt8TvhAKcZKPWr3RzGbjTcfYeDGSKQpnTeZ%2BvbVUbYKcbYWHyhfiX6fPcrTIKxaEjSXxD5uWCa9K56m%2F1ekK84b5KGtZrkguLMLo2RWMNI%2F%2BLSnXyagxZ5sWfgg5RtqzWjl1dJoI1VWfJkGlVSz0saP7x1dFjO4XD3OKPnK0uvVq3hK%2FbUXRLlA0DQBHad4aGv%2FGtKrPdpgfstF5E%2B5SaGc0%2Bh1cjAmrM3yUZN6Ag2fIpJXviyghxUBXxc8%2BGq9JXc9YijSZ1rCN6O5K8accLIljNDHs93ns4hfg%2B%2B0UiWhULpTzyUJdZBTzltCYIOnb1Vej3mDpn8cgzC9lPC9BjqkATs3LcDxtAf3XU0AXYObFLJLc%2B8D2huiDWVogEYsusXK79acJwUfdJF8cHyfwfM0vedj7PLt1U0ZXWs8AllIxJwK6LQGQxsf1GgsYA7NWlKBFb2qdPJX2JUAbJhzJoUrcvTWYHru6W5IhMc1Cf5q9wbCd%2FOf3qwCN7QKx%2BwPkC02x6H%2BdgFjkhjeor2UAZh50L%2FPmTo%2FiRC1WCyQSW6ApER60Wg3&X-Amz-Signature=8c22171836c89c50e4101fb4fab7a9e36f07488c852fce8abab516e08a048999&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
