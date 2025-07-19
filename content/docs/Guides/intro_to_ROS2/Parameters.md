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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQ4VV4Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD02iO0VdX1d4dj6P6cVIiCiDelZz1viDk9txFCSkQ0jAIgGdfq8AlTlX3MHpLKhDoy1jTXugUe7zeJ70aR1sHtUU4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ6WTDhBiuspad6VyrcAwSEnFJgLD4cskyIJGBacDsqy7gkqB%2FJBRv3D%2FH7Dob%2F8O12Tgj1P8u0NeUc0cYFIowl1jVPTbnenCEUmDzIVzwUZOTt0drVD0NQFEV7dD6uFS5iw71DwvoGUjp4m%2BIRBAYA%2Bpg1zA%2Fvd6%2B2yb5pvAV6sUJhwlQ37A1aMfpkQ9Pw0EmGhA8gO8tdIIGi5ji6TWiJ60PeFe%2BG%2FpETyX1Bp4iJyHK2%2BNAQE7Sb7ekqLNAud6awfNv3qFsm3oGC727%2FT4tapJhkVH4XnljXpFKKdekrsOVmc%2FQDRMLDsHMwh0%2B697JAJ%2FTNTUEL%2BFg9mGcP1ktIfiX2Oj%2BwyZRySzIjK9OmFYEJaWyK8bK3O2Vin0HUDYliqxi%2F8qNG%2BGKxub7CYdsVzoDB2UAJGBrb%2FpvW57as4IFmk7IsZz%2FPflmwURoCgBdL3nOv%2FRcGm%2F%2FoEAh09Of7KcREM6HIovsefDWTlrCbAEJ8h5uzjVZEgv1UzFlN4J2HxcP02Q6XzDZf3eK2qXu%2B1YBSlBOeLRhd5Dbj7MmnG782P9PDp5q4GeG2TT4HwZ3hH6mj0cD%2FUEOOa8WGqdEuhc3FY0Au4Zr%2Fnl20BdkO2gIdaosg%2Btrwz7zmrMbudwhml8gY%2FFI6QKueMKnF7MMGOqUBklGf%2BHYKUBtCiWZDEtDb2uJug7BhOJMmq2uTJ7hRr9OKrfdXQW2tnk%2B00vGaL%2FIpomWmbICQg%2FOZAFtTQk1ahbDiEZGJ9HGtQ7fPmbzgyv41Iu6%2BZe7p5%2F%2BdS%2Br3UPT5gcEUNqnoRIi%2B%2BJVeOp4g6%2F%2BIJvdRbwXObpPL77IO23T71X9Jc%2BzTORq9dJHgc0NmT3ze0jTHmA4gjr2c74woL%2FU1Y8S2&X-Amz-Signature=5bdd8321dbe92a3470a5797252d5e8eb9442a78ab21e075ce17e4952ca945044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
