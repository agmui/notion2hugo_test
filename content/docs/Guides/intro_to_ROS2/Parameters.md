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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6SWVNKJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCURD3LFY%2Bqr5ZX5utttVwH3ddGkpc0BUSfCNllF6Q1bgIhALDmuLopB%2BVgjgaK4som2Yb%2F%2BT3L8VAaeivjA3DY9zzsKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8LiHl2OjcFaPFMGkq3AMbkm3MOpVnuAG%2FdVW5hdnjwI0SeSrOX1QwEkFf1uCvji2w3sYHm0xh0ZKkUwKVj1Ky4k025Bf4xOXPFJ52pzM%2Fa25zzvtj%2BqbkbHvAfsi0Qze12t6QXSX1iDGpekIwj1RBuDhpUr%2FwzXFQtfdtdEScoMu4BQ%2BbXu%2BPFFct6wEEzS1dwURMcYoPEPlQh8vrAzFMrli2WBrzebJHMi%2BynfMC7l76tzZQ1QmPqoSSpYImWKGrOCr%2Bl1M9rqLtIOGndGURKlXMR8xpDpgUjF0BvCItOx%2FmiBdOFsGaeQhYtD7ie2DIt4p9wPvW16RqM7vjByOJugDT8PHN8L3ZweavfqRGPg2kk1h67%2F0yBMaBeXUnl5BNxxO4xiJHi8wL6Es2E1%2FqRyWoTlFSZZ5Qv01i3Ne3wBpwwgztkZMcBYkbv2h7C9Ck3%2FEY90gqVsE1me5jpPxivE%2BxbHHv8pw423OprF6DChzqOqTqtXlx8M05ogeN8St7c2lejfWPkzdAr5kCB1%2FTfQ3DNILJX7U9c23lUjTbCAo4YKFYb4MZNIqJ74Wmf%2BVXOJ4hsbhWMzLuHO0vEYOkNHegF%2FgP5Jiv09PYNfAFA%2BvcovUp3mlNMFp7I9C0njEaz%2BYUs7sOVIrvCjDP1vrDBjqkAZSXDjYmjboBkLOSbbtYxNaRrGh40yZO9Cl0Wf8TqLNlAimTaUgueJoUhVW5%2BjGgy8Ifjj47pa23QVB0D6NElGwHzxq5Ut2LbTBk3tFUg0Uak9%2BERnto%2F24O%2ByLrmVv6x11DtI%2BaebqH7G1kQWBDK3IJa0Z6FUuknvNPSSf%2FcSd9SHFdrXc0LCOQJIQ9qh5V3TWbnLyy%2FzEje8V1w4El%2F%2BYy3nh4&X-Amz-Signature=a56b600ed37066f3e81d08cd04386e9c8783b7ea9d2bc4dd7b621185fc63e42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
