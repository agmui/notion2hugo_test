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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZMWSVJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpuYhDVR7NOpQmO%2FGwQTYjUdDzbK3td1r%2BrLyWmviFnAiBwjhlcDphZKT2l3dfoV2xD4%2BAqVw5X44Kuik9LmL6PrCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM4ytZZIVK%2BGMaYRDbKtwDkiUSOjsj2hylkxbrA%2FesyMaQJQtTxHdudIgDtbfQFlra5%2FpO4E80MiVbSTgnplHYGL0odvHqSxu%2FG115GWK00mIy6SG5GldCRrHPaX1fZLluF1%2F1gPVDkKrdx57i3mLZtkYjsRwMQ0TQYtLOsy211rvp3DAfwNb5VpmnbTK4gof%2BSN84%2BIZbEn6UcOMqgb1aRhp5LaEWK%2FwVuzR2lU%2BV0%2B549LusJaduE8P8BwYq079XWnpLAS4C1SgZA%2BolPpjKWT8giO8tDiNI6tNAa07AoXt7uwAQ5Y%2FDdoMpUR6Jf8ddYkppa1b8s%2BERi6m6l1mGhqlo%2BKTtqrlzLkHXAgU6vrmnpfcmwpgdrI2qeNgY8I05QidQA8MJJws1yzD%2FDG6c7LvnJLtoLE6m7aNuof05KTfBcsotXF3L2IM7wCUhIWRHDdyyVrt2%2Bde1pEm4Hraa%2BsZeXiUIWVI%2FexzesZbStrYNB9IQyHCsHDwPKG8MfcK7djeuTzkg4rTo6%2Fi1uj6IUnT4oBYz5tbotgSWn1UwuW5S%2FrN4HOzDZU1j90DSWCkxqdRYZ%2FDQIkwapeAk3w8z1%2BM5yxV1Lli510IKaKm2g9x6HPkR%2Bzrx4%2BS2d%2F4LgnVTmRmdtjX7dZJwDRwwkqTQvwY6pgHixccT8tPI%2Bl2YAJYmZsUjxrARugtxmlNTjLrxiHjkQa9Q6D%2BSP%2BnCx72uABbkN67B7EuFyBHvOZ%2BHMi%2F4T4DMKnDG3IWMutpCx1uWR7atQJtqkoOnpEoDbli33%2BkvhDplf0XGBY9j7tK77rIEuC43%2FurhsfACKqilq25B%2BjmectJ3aTn8zw9Rom0VYX5Bb1awPYvisEJw0b%2BgxLpmH4mqVDo1HgN5&X-Amz-Signature=29fc269e4bc14511b96db852738c3a6338075ad916845b19130cf69b089fee95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
