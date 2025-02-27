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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOFBKZN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIE%2FGRWMlotmRB1fMP1ryRKT655ey8Adque7Ws9Ffc96oAiEAps%2FhaRecmf44Nu6gNqTNqFeslPpurTIwrk%2Fir0hbgMMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEfgNZl6D0cNWHwRlSrcA2xafIqbxffYbUWMyII7Oj6ebdUVaU8M8%2FsCV9KyuyZo5ir37DzcXmUrHbEqb%2BjEgvJCAbyIYLa5iea2x1nYElt5XB3ucnVEdYhDU22kxiiqk3WyHsRL0wk09F057aESXMR0zs97FlayZYVIRjRT7RQuInzn3LyN3H5ZwisCkox17utAHaGodASz%2FQxJaR3WCkDnKKjtKEfgunqwspthniqztK3CY4MzIprJtvimOcSWSG37EVFpEbtbzlX3lcObct7EdZEDsr2hC27XSFoLG6eMQSFEjpsLqHT05LDhH3E2BtfcVjqvEX1I9Jk%2FlXXbtZtiK21UKDABSp%2B%2B6mfauPUhqO%2F4K16zoCriNWWr8wewtCYDJiThJeHAILHUZ1ulbvxD6%2BxZrcsK3FL%2BLrzHiD6%2BWIbIk5RlnGtyzCL99zttoJmkRAUm3G98y9YZ1wQraw5LKTsvirmZdwLq2FMYs4Fsolg4CFtNIxgeQOf6ILyhNEnKhxSgpumaqFPr9BX1Zl9X6H9REX9TdmZ0VuhjvcN0j8DMPi4s5sB1IYxserwAGnnSaUStNrfqyitUPw%2FIY7YMpB1Gb2hzY63zVi6vX6ug5VfsSzu8%2B0PbiX9RKKrXNF4FqezHFPZ9uZhEMNjwgr4GOqUB9UBW2OSTHHxkqc0ii4Ui8D3FPVBBikwVDO4Pue12PFPFLTNq8pp1w%2BYS7guxFSDQpaL6j6HJra01HfO60aJt2GCQYHe3ebFEDNW1SfioLTR%2BZveOmvmi%2Byq7sw01PW%2BXFjec3q%2Fn3KO65hJrlLgwxUzK4akHcEnLmRpZ8xpd7hR0OkhE2JrvFPrQVcvyCmXvQzCE%2BYXSKErfvmKp11zO5mmckXDq&X-Amz-Signature=d8373404509f2d271a40d3a73125e7338cfd5a1fb8264194cf66b28ae76e4096&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
