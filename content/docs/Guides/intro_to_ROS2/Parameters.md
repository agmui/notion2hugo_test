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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHUHXXB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrKfyJRxaUrn9i9niSuDiufwxulvsO5nH2C9ovqvyGkQIhAM3%2B47%2F0r4mNPI3bjXQlKAKH3QJJzOMjGxZ4YGPrELs7KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlqaNsTGZydrjTJnIq3APxNBL6pR11LfKpxBrAQjtXW2mn%2FQ5WEv9iJOh9jxh%2BGjCwtcwBUurq6gepAmmDFkV%2Bh%2BkI2Zj9PDpg3lL7icW%2BsM8tWO16%2BPJEwAXdv2J%2FEWsD5nc8Mz0KmIV5S%2BRq69YKfdlYzJWf%2BV4Rw7Q%2BG3fx2Ic2LCD9HnZiD5ziBxVluNoXkhq%2BmzGkRhOGT9%2FqJtdscNJw%2FfCqofFDfm4tApk%2Fmh3vdipaNaSXJ9%2F%2BZugljBCP95vN1PaItE0adeTRBibPMTD30tK4DDWES0HUcLM00Pn1%2FBHT0hYGnCNzmtx1Grygl6wT%2FoftSJtpdmwvFpnfdzsq8Wjvg4aaJocWrmk1FPgIZkgujtUxuZDhfIwIvHs%2F1dpKEgl6Qjb5YcEPzClGvc91rVyl6nBvisTiVMfB24jzB6fJyDQNsaTONhA5ShxiBvEwx2MgKdvP6Jg1B1HStBndjQAVpUdS4guWUBnVbTPO4KjClFszpstDM6Lh82P4BPa%2FwPA6M1ysFtLqG5vtGOyGFHxzOL8JR%2BbgF%2FGJMgpvsAj9SU%2FAJiLje1Xo621QxwiYJRDOFy3iMHA2CLcOiMf0rgEQ4UuMiCIZ3EV8smjGuq0mun4Ixv4a3k7Jg82A4Qg8evXJBJexFjCQpve8BjqkAdrl0A6Wc9p0ChOQO3X84H6PMx0qZ4przmwhAN8Vut6bV8UT%2BeFKX2WX5T2Tu24axrT5cOshyv6byThg982VykZtgDjToABUgjTlQAs6L9iCxHSGUEDnMRuM%2FqQ718nOpi%2BmQnD%2F16Bwmcajm4vnH3%2Fd3Zx%2FhCzlfnNdD0wXKO9m5h5i76UxIPUvqziGxsnH03UW12EUmkrLa2CLI9eUPu7Rxoxz&X-Amz-Signature=069ef641504ff346c4688897ec9b3161ca482cc0db50213412703cd9b72d0e62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
