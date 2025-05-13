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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4AGFAMF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD%2Bjsub4%2Br3UiiJUFbq%2FTv1K%2Fpl2xH0QuP63ByS%2F3Z3dAIgO8z6mVGM6Fu4QRXyzHFhWVgEbCkfxVS2M2950b%2BHwkYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Foe82QZjFGMW2qQircA9TkA0alX36uyFgYnZFivZKxwwYaKUpIwKK1UuHLmaKwS1wTZkdcvdaJCwoaXNFZsfUzrRcDhjoNnjkXH8TGfTRuJ4eNWfhCpkKySBAE%2FDt7Xn41MOxe0gxVjEjvyVfo710t0EUm063Ih%2FYy3ciwpMM7%2Flr2pae7CHkB8izS2Ca3cmaS8okPzmtCiSaAaQEcRi%2FoJIvVzcrHcx3jKdeV0aspp3w9HRNsZclPYCaIcwvPozrwA4pLpvCXaY1rygl%2FobG8o336MynSY6%2B6wOCXckzVJaoZcfXxxyoGsXCgY2mHYaG8sHVzKDxQ%2BaQrU0V%2F3HuMe5yQ1S32fZ%2Fi72xidm1baD6J1uglHn9wjyrzvPv4keXyi6PGGp7HWDirwM3yUransdKi0gL8E5ZJqrqwLZWn4oJHqN610I3drTg9VfCG3dhx3oWqEUy5u%2BdoNCzd8hsGJW4abjbvfAYIF8RI6RqQ7GmX%2Fmake9dWp9rk42%2F8SaLa1UbG7Xye%2Bmlnm7zE1Bx%2Bjtnxm5LUHMlgIy6aEbSu0115mjep5k7%2B0L7vdpp0XHtP7SMed0Q6JGiYWjlficzdbDHNtASSLvhIKw1hQ7t07j29KJd8tU5McntwWuJuptsU1BBBfmJfTm17ML2oi8EGOqUBeQafa5i5YvqdlL88bw%2Bx8z2duB7ZNWCVUnyK9IQM8xMt37fUbET4m138LtL6lbTqpwCtq4wKyHoaMzQgKp%2FWCiAIu%2BhTNWYnqVpVWtDg9n95v%2BsIG1CaWwETeDMGRy91Ot%2FV5MRi3qLNo9FaWsxEMrvIP6BCkGrzyL9qIjkkLuaBJmt3cs0nABczFAaBSU1nbzVg3qm7727Nbm2v13rIXpSu5v36&X-Amz-Signature=75b37fdb468a9ff9e7c7c47649b83e8dc039c66adc922d1ceeb5f1553999f712&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
