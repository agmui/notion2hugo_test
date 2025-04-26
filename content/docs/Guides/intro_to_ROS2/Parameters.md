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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466543WZHF6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw9zNM1Dyt334c%2BVxFApSRIXNZ81M8c9V8B17QEG9DVQIgGiteFveUzaFGA9%2BIxujpLxVgN74loXArjWDSkmonoj4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCrv6sjDOO68n7QpayrcAw47VWGjECmOUr4x61p0lS%2Fk1JTLOACELzQ7f4SF8qwP3plkvUf7Hf%2B9ZxRT19RPW21vTU8yZOMjMILI6lPxvo2UipksDzkM4%2B1wNaF%2BheiBl0mD%2FILCLA747zo%2F%2BdsnauVO7K%2F7cIK2wIm4WrRkaAs9n456OMKJyvVfW%2B3TT6xRwM9UGBBze%2BD4k5yNf6JSt0u1nVZI5JQJRPxsf3MzsyZu5WQONd8d3lLGS2F0%2BIAisOHkXDiAA9ZoyWyzrhB3DkXEDSSq2ltVIbb52jREve3SGbm%2BemvaCugwPrVybMPQ%2BLR7eqYwJLHAgIDPteiduH8wjnN%2FRYj6ETQXvC%2F8jWovEJjRd8uvWgY0vN%2BvbeF9DaJZu%2BcyVQ7qTwzdB8%2FwQMr8MJ5LS8%2FS8e%2BmEm6CMQI%2FKu2NbrXSedrB4amqUoxZVDKZOxv0MsFOx1x6dfFGNGT30oWf4R4%2FqN6o%2FJjVBSP4TNvBIVTUGXW6x9M%2F%2BCpObFgh39Th2IobKSqg%2F0zWIOJ9K19AP%2FRvExwOiD%2FWJXaQUSzqpOj47CC1XiU65serKVKiS38M4yLXQCSUskmpGlB63gZZ8Msb3rBnXGqTXXRZxqecmBF7AUhWKc9ErCoZniMREI09sFonCu%2BGMKXvssAGOqUBIRtYvUGga5%2FtopzstnQRCdlTqzavVSyAIjoKAl9kexLyCJsIDLeyJVRLET2o3s6ajpPEudo%2BuQbl%2B%2BVItDFSNcyaBcJ1JXa3I5Y6Yk3PENgasSQ2wavqjiqtJP%2BxeozraOOhP3MLDuLyZINDo%2FRek8ZqkXfFRDrYgz5%2FbaacqBBKjsYqc2nzastRY4iSSyUz5j574Y%2Bgz6E0Q%2Bp0brOq6UJDVRVI&X-Amz-Signature=79b5f3480ddb939b7afce6641f837bd0cc6f7c3cfdf1f949d25248f49dfe9d50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
