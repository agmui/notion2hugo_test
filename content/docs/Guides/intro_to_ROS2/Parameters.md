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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRDM2E3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzdwwB1%2FjCBV2GjIxKFjqXmWphsCYvmqdJ1zT0gXqE%2FAiAHk2QC3zNUtYc8Wl4QFU7ortr%2F1sZC1azR4MuOE%2FeZNir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMp3N%2Fr0IXrl9YxN0JKtwDBT7wH4oi%2Fr%2BkW3xZJZeEelRJ16MsA%2FPYeIxLGvnc79nXeVJqem3AlZaU6XWxsQRcFzNA5myqMFbp9Io6s4CgfE5MqrYKVibtJRsa2GHox8a8i4I%2FiJouflzGdCbiiweKObHgLCSrimjlD63NQtn7KFolYxm8wTRmwWNjDvqa6VCV2i9uOqPdLyn%2FSoLsiP4h2y6oYm0GB1M9OfGZsoAHXXP9buDeXHZmmkmNrtQUHoNCjoMujWF8Q8Np%2FP1QU1MU8SIvJEgY6bvA0z6GpfJnzMJSxcc7D%2BJqLLNntZZkjF0TJYncWy3rxWEUdNJCRB6zXxNxpMEZnSX8yTnuIH7gIgx5Yy24T%2Bp3Xs0BOJeedxQFrXv3EV0umyHnZ9d7On9ITxKvz7EDS7avMrlPf9O8%2BN45owWqNJd%2Bf7HfY90JjeZIfsgQcFznfkhZz8muozEIa7DAugBYN38GbwV5GqtFleEfxVsR1EG482r7%2FRwGTZgnkItWEUusvuc9%2BNrgxxzcx%2FWN0bBBtLgG1IE7zv%2BNcZ16Zh4XChl%2BwEf%2ByUD%2Ba4TvWX4X2VzOu%2F1BLwA1t%2BSoRimbWqSlnme%2BhqCfmO38kQ2nQrVXYwIdVi%2Fjk9XkoWrymiJgCGqruwI%2FgAkwsKqcvwY6pgEYqVkOSOjqE94Ox50u5WfxJHsQihLquocEDnTWR7asMCtyEdHNx3Ydz3phEYd9evR0W3lV59ooAkBK8Hr%2FmEM%2BvUfRncXYAM12Cc5ndCK%2FIunRl6awhyCB2CYhW3gGN1d6u6sX4I46%2FwIIiyGpGLn%2FLRbNuCbbDQ8hXab33AazAwldKpuAb5RJ7gv8YgjOD%2BIDdZKj60zrucizYHcDhJ3SOO%2FDLXbs&X-Amz-Signature=f047b15f4f3e38234206a7403bb5b13ee9207124d57b0f9fe0a3f3b9fd1ccbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
