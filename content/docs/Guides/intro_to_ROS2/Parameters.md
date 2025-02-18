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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2XDGXO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID4PYE3dPyIq49NZIcJWgERYowI5Ncz2PVYCCzce8j8wAiB8UXGU2lAhJG0imjj81QGHIG6p%2B9q39xruibhW%2FtZvnyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG723XrFM9g%2B2jeSqKtwDOM%2BRYTOe%2Bhli6G4YJC6FAPxLJE5Lsq0Rv8tDVDoOICSS8t8JQXdVP7rTEDJ%2Bo33vxjOrwwThmQqQrrqIYvVya6qO8stDuOWmLs%2BeY7vyHp5Wbs1odvveXQ6Ts2MRq8eLnXl0mC2%2BVpH7aJWwOtB8yzJ4%2BOikFIdIxvYUU8j1hgyFBGzpuJnafyzOj0ck6NTeBZwbj8V4n3Q9mpo7i5RIiy4Aiv03NuoXTN0FX5swEy6vU6%2F0Rxm2xOgvNxZgzrHOKSNfnn3pdseiYtIVyZkUCC%2BVYuKMet5xx5no84adcX4x%2FCi8qw%2BvgQXWmFbUTQ0MV%2BvkxRgKcFYI9Cx1%2Bm75qQRDh0IqpbLm14jLRxaL%2BMi8ZMaEsJhOVDVXxTRQDkFX43Od3inQigo%2BqcqXT4viRhPpzgYIoO7COBVqumOSUw9ibgpHd3YHnv4%2BMPLb5cHf%2BtCHL80qIqTNYGhKKjpQCnPWwAHEqERMdP7QspOcGWNYSAx6kMSUJHDTwTWrt%2FNcva5vwdeJ5waQVB%2BgkROlLjRRr6SccVSyhhb5AcGWs0FbNQ9zoC%2FJNOPSTgTRf0N0yOlsxz8I%2FEbh7BCPPmybKU8PkOqapYl61bF5xnVIXYo4eV9l2ZPOKQggMTkw%2BbHSvQY6pgEJenRWTyBZwZdTN6yIZ7rqZEhPCvSGWfX4HEg3N8OxU2A%2F3%2BuCk1z3Jqyr9hM%2FUFBbx%2FgKe%2BrMSpGQCIlRR%2B%2FfRYv8OnAX2krvJ7IyHz1baqrqKFlzJv%2BhcFLoW5irNhTuoRUVhvigEqcT17IWKTYmi98h1X3OSYVCCCC9iPNYKaX2hkqVkf8Uym9ji4x56nwJGuJsYmS6GZltrvomoS0pY3K3XqOj&X-Amz-Signature=fad984e4a09d7f4e71fe3c88f1ff8f0250212a721a8d6e762b150418d7f7c58d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
