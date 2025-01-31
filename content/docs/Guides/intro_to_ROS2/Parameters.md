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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7MSLB5H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDirV3tfBL9%2B4%2FxCW36cjli8kxfWIlobNctvb8ST4bZiAiBkae%2FzDKJAuOJKi7MGuI0SPoW24HDMP%2FNBKYu2IbdVKyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlPxa%2FdaEwelSmM8AKtwDUqwU9Np9M5YuqEkgW%2BiYxMvyXdDF9g0lIPPsGq5G3VlstU7Ap%2FhWa%2FSXap8RRUnzAnhDBM3bykMtF%2FBp8%2FALNLy0lkbHNzcliIFa5W7%2BJ%2FU6vcQ0YuEAI0vGX5bihJIglE29nX6ITEgz0k%2FCYefoEYU0HgUL9TFLX2AsB4WfoGcnq2UuJhBqlbueG91bF3jsr38l0Eehm7Q1fyawTFi62mFOgLcvht27ztebq9mrGa26ZWmFGXrbMAYcG3U6ArauKZx8klZBF0XJSgeoV58mP3zEZUKCyb0TYMH6CNjKspB0CXlnLn%2FVPqQ6zC8csoFuUCMv6v4q6DESered78QU%2FEuAmaq%2BbrOg8OZDfrEE%2FIb4eqTLE%2Fy9a5foL0rKf5lO77AfiHfirbx8d3bmJFE1kE4CcycV5lA2CgwCPCb5Am8l2TqIYTsfVo0feC%2BTyX9278z%2FG0ilA%2F%2BlOtWl7QJFp8Ngg6js%2By2oE6iiNhxq5OC9tKDkj%2FxT0sM1bmM6dvwBtQFGAkZAauD5iJ8sJbOsB337CXkjzqN3lCUXKV9pCScAgC%2FejBwlXUASXqGVkPcRPnk3qQF%2FWyY6mTK5ciPJ0us5ZDro20bNDoMM9AIs5NB%2FvCJp7uhL1Zvex78wlMrzvAY6pgHmdw1FLQmuCaJHEsK%2FzJSlSIqQyZIhr8064LcGglNk2%2BJolPhD3hU3dhgYrNMYBdyIv8mUjjkcJIevvcpcjEFnFI6Gxi1QP%2FpngX%2B1KHCCUQzt7Gty9ZdwrG6wmIhu1R2FTaNZoXHhOkdYzt9HFr%2F5T6nYL0xM99phssOL19jSSj3SAZJsoIiJV%2BFYTWH%2BrCgA%2BDJdt1m2Xk6%2BOVKy297LrUVL2DA%2F&X-Amz-Signature=5c7c3e25bb8ed863a8b72319803cebfb456796cbf08ec083a031c6eecd8c6260&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
