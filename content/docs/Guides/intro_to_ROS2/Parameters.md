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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYRMIWH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXZQHcUqDwaE2J3M7AEQUS4wo8DvlzUzhq1EEyG1DnzAiBkK6CSKctagTztBlc9rq%2FNPc08vrL2QrtMf2cb5kEmSSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDfwoSYTxfc5kPnE9KtwDD%2BAnD8E4MV5qcgOFaTnoZMoRR38om%2FzoN%2F8CRDcI2DrEiOo2MXzxUJI55AUL7zX9Iz0xRL7ogu4IjnGluPzObqKtqX22PLTeHkwOujhD5m90%2Fb4yK%2BSbULyGssvdUFQr9n7TTatmElbbovKK0qqSnWSikdHh62j9ab72vx9r1oROJXYXXuApE48e0N%2FBqD5P7djx3RQE8sdKKTACe%2BA0Gp%2FcA3zxxzMHtoNBJbnr4XPfVGtSVKycPHgIzt%2FyKoxV0qFXxqDNW7EgyTkMtAn6M7PkpzZcMjQC5NGFQT%2FfJKgq8ylFbcfiOHaVI91sT1c1yUP6OcR4vfwRmYkt69UiXu%2B0hiSwKLP91YB1AvzbfNtcslWcWrtPgBRqfkk6CnxK0T6AjLwuJJs6oSLyXS9p%2BKcGXFr3H9Po2pDAMjUqCXVUeKk4pvlBlRvhD6RkusaRa24QJgXi%2FvrTi6rY1gggUavugQi4cvdMagJW524aLGCfnUYJvaBCFQa5%2BiZBaE1viwEhVB5bzFY3CvUodciMRIY0ep545mSNN2wSgLgZ7NMMKisu9pNnAD6Aw1sLVFlumW6ghouh%2FLnTzihLVq42SUJAZQrmYlvGT6HSMPjBRGB1yolE6cxY2Uvd4y8wiPX9vwY6pgFnB%2FxSOlN7jgsQsDxt44meMsjPABVVc5GxJKv3uYMLfqHOTxiX7wCoTJvkZefenfE6G2YEnWmIUBsxGHBuwbdt8XZ%2BNMgr5QC%2BJYYclOcX9xkSGYuqN69ckg6lxI4WggkaEWrp4bSCfD1uHCVpvHzXM4XGAcHExx73DowV5EQp%2B6E1qmovwGknXLLTOXMFZaNVv%2BIc1%2BQPYuGhLllRZLQUM9NHT9Nd&X-Amz-Signature=aa2719b3d33f02091b00db477f3f074ceeec071ffe58ed4889894934fa530ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
