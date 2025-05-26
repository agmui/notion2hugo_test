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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4TKRFM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCDg0EMPKvXtulIaCMTKsxR618Pc9VOkSmYZur6zx8ShgIge%2FnYFfIyecKRaaCj%2BFSYopMgmPk22g21BSH1hwAIf%2BEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDIn3yyf%2B4nqT6nldJyrcA1OwitkCelO0wgM0erODSpVNy%2BGq7MByukrl6ooQZo3CmA6fix37OwlHKQ0h3dwR1OSxGmWeyQCyxdw3ykw6fINSqkmFwmTMbvrGpWQzP1tOBfPr93gj90LmnLI%2BPNdfJYd%2FSSqhM4IVCm1JZ6U4Up9okby%2F5DIndNhRHSPLFcpRQ7%2FcM3QbGP8Wd3mA7VKgrIwoMFkZdWnEADqkl07Ciuy%2BSHfAGSghNIWXmktMWDXTZgZtOrLxGFwI4lS4D4vklmUr9vqgSOCr6kBIJjtySfM5%2FEzXWQjifDKFcyiL%2B1LnqUoJXOEcvHXUoRLAEjbLfPYHakKGC1Y%2BMvJklDlWxXtjmtQoRP2TU0WhW3T0xp5h5qJTVi32dEUfTpeS6KJvA5gxKZ9Zbxbl%2FLstk1l6TKvNRcGCphTRRHUwww2opkDnm2R0jkM32P15CbWuCfl8tVEFCiE9xyoVj05BHvh39cBpZAE9AiqBNwGEyCdWDmDwSZf9iLEmCgpgXaKUGm9bUrfo28TF1wc2vfMlUjS3pVsccBVrgh0sv9rBYbxfu27%2FIqg8XokGiWUo9d0uDZc7JC4%2BlcgzGI44rvDxKKyHRTdikZdW5OVmLeD0PndtmnGwjJJh9AQgOqCxx%2BjHMPbn0MEGOqUBUIX%2BI6T9qBUzAO2lGXAwLnY%2BAMFsUOpNyLPRLAV9XEKElkz0ATOGSGmlQdA0mYDYYrYfWgk6FQ1WHVeesm%2FbT8b90fYB7W7HoFmXokpLt5qKjycWUjowB7nG9GiHVzXcZXsQn%2FqvGczZF4VpOp%2Be6V%2FxE6jnsPtSw1R8Xd%2BXFB%2Fd6RPd6%2BBTyBmhVBhAk9PbfB67mhUGrWxs2CNrefLJugaIw9Va&X-Amz-Signature=22e995ffc6ea06be5932556a06db622654432af43e30d5de5d8ec6483fce434b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
