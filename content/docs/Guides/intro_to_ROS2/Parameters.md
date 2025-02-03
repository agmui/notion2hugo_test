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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635XZLTBD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuvsspzMM89JkgXM76vjkI%2BQ75UPSfuA%2FePf4CRg8kSgIhAMQSQd%2BpbqzSX6iJKPb%2FTQHWVE%2FKqxv2sANAhndyH%2FNtKv8DCBcQABoMNjM3NDIzMTgzODA1Igy9jxH7%2FZ7%2B0sd8eVMq3APPqFQJv5IXA4YKGAKUQE%2BKdsryAK3v82aMSeP6t47JSSJUXmrovglGirZyv4pzR9lh1WN%2Fcuy5F%2BmW1D0ERuc3rQ3yPo%2Fz90SC08zHWPvob3HpSFDnOKsSAUKBayzXELIu9Ll1Fp5IotbsBMUHPug0xnFcYUvT6fC1NdzbYcjedfQWPzNa0M8LAjnCWk5FjHAmV%2B%2BwqUTUWCpP6RmVMd3cWmObfSarwjJpZfV0YbbUOZEdmxo1CcWHe8yMpMXy971HI17CuXXrbD%2B%2BlKCNprCPrkNQ6EJ2Z3pFbQkwOwUtXqIj2CjX27hEQy687h2BcGGv4%2FbXrNkMTEI81Rzo62wudoaddiXIw%2Fgod4fDqcJ1hMagcZbuTBHgKnF7X98nJjUuzHzaLs79M9GNLKQtVFqKbHfWyjW6BbfinK3P2m0mBf1LNWi0YBysIvynJyNBR%2BY8OvhPanTdAmYY04G8GHdCaIQgplBxp9z21Q4YB408nf25SbJDHELDeoajAneLxCfID3jPnDvWMMSDLonnurCgIwWGXwhA5461wuuzgrtlFMaYu5uOYspIOgZpVI5kBr6dEfDpuW49rufR45bSCQpt8pzTGhPjWEqwPGScd%2BZ0wra5DxoDjGQr28NuFDCHj4O9BjqkAVm51gO3%2FCIC0EAqTlggrNvQ%2BxcV48DqnvLBLn%2BNaLpZNAHOL54ZvXH%2B%2BvHvORfICnmLWpFIkx0I9WVlhiJ6G0qys2Jhy8DEryO8ouf1SQIdqOn4RTYoUXeBHkrI6Q7vzkvYjw%2F%2FAHGVtXt%2BV0o6TqdDZusv%2FPtsJ%2BTEEJ2TOJXIbIjSS9PjzgHq7nV5qp7ob0byT5Y%2FwAZ2PhzPzGehPgv1oHka&X-Amz-Signature=b4846b48e2eddfce98a41c052ca17d516525f2b45170ef02d4e93495569caa56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
