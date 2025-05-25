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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQN27HW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGX95Ac5813VjPeutEisAY76iOnHnOH4opmO1VvYkpTGAiAODdkBtBLY1ukTACTJ%2BTQr%2FU4BSWa6QMtk3Q0Jauykpir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMCAab1JdonLcTPyD0KtwD8vI8rPLJYgrgg6%2Fa%2Fmk15gOyy%2F3dSMluu1djY7Art9ZgVcjAnkk3E3unI%2Fsld3RncTUNJ09PIYdd8Tfvk73s6Yp6kMuxgu1%2BvuSv10FQBlmu1ee1A7Z4tPqOBJ3aKpJtMcv5DbWuRbVCe7Ba9obc0iKlDESVgYK6QZmiHChw%2BGlSGCzrm%2B18gx770wzbyf2hqQhYADuRT%2FcxxYVs0GeCCfOHISQ0i%2BmEl7eQnD%2Fp100mumAGLyT5pzS569mRdX08AXtHAtsGUz1p%2FsvsVcfoC%2FQd3z%2Bhuv%2FnxrDBYab6ce3c%2F3NFIBg4VqYrxtPJVl4nhiRtMF%2B7yiqhY3QH5zk6qVJt8EjWNgWvsbkMku8IWF5O%2BY5H8YFWs8%2Fk2lWn2egwbn2MTlyc6UGUIigzL7gFR89CO59rPgQymIWYlpS1gEZukcoIXOnYGopSBlPyoiGZHH%2FWEIX216iCSO6RxhRJattDIWmZXPOR1m6eGPIXZ8Hy3hs6bOA1a%2Fqh8jdMNbrCV5GyVJ0KfSyjbcnfySGPhQV5lfvmPugOV5p2m6mrt5E0fLLCBd%2BSrACe0oP3lQPKpKrqXskDMpK3tNlBVbQtrcFuRf1QyL2hgTS0UN0xJsuxXF6qpowfAyKPLJcwwtbLwQY6pgH88OAmDaffBres8B%2BvfirBdMun0MLLN%2F%2Fgwi%2FqB64RmESqKlq4Q3qHPBJnnswzJxSxIuwpTBamh1xMTrIQY%2FoBkL5GRdHe2lgZfwNQt4%2BMqnvZCPtCA3MAJGXS7KhhYYtSjEfxuf0NBSQKmcg%2FuHLga9HPKEohf5VkcpZM4COxsEDWKHZkRuUU1kX2hUSrrjdpsFEhdvZ1QlcvYPTo76DaSFXVfw5t&X-Amz-Signature=8330975df066c360f892c75ba4b4d0223642a71419785710b00fd0829dd6a7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
