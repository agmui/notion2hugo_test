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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5VFUDP%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIB4SIrG57ywatChonp8htQ6wh5OE4dTIev39ChsTIXPMAiEApONnfH9aMG1S8MpMXrPO3AR20jAF2sEDdB5jgcEvqb8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDiVP78NwjYH6CcmyrcA3UaRB4CONPGaZRnLbeMNwkdc9clxkQcto4KuvVsiS3Z5NKwiv5Kr7ycp6yWpHvWYzAmaTIYereEYAFm9KlKBnL9JTiCWAZVDKz40lF4sBHX3Lq8JHJjKk1%2BOjZiJ%2FtpXQgdsDbm%2BHwI2fnMmCEVSBG88g0fyzocnuzI9w%2FqDqrW8TDBskyeiILeZr2JE4kxru7%2BESkGpGXfIhX5gTB9CcU0WCuiP2zgD3p1pvlAHOck3SA0IDNjWSC5k%2BbrszB4aENCgwonB72n5e%2B%2BixGqHuMT%2Bgtkaqtw3YOFFBr5ObE%2Fhr96Ln4u8Gg6olVbYpPI%2F%2BS57c%2FQ4CjpuWiYrAO5tGeB1TVM7pgtDxJR5wC0NqugR2CqeeRxsH5fp9DJePcVKJkLgPzVwdeiR19cHkVQ02snmRAGm6DVWUVwIgjc47RUnMiqJd2JSgYLUZdb7JfUwcpyLUKcAHj15EhR8GKhs1n1iUhXLZKzNIp%2FXiFVbmIlzhq0awbHbWSHaUlEVolpkpjFr8Awl7%2FhrqRQ2qkTtxKfS7sl0TjCZMeWu3qUCZRhqGcD3xlO%2FJoyLFBaTOcVDsY3zWYtXK1egAoT1mYgyU9YAssjAQIN4hRDC1A7cDrYmWrU6BKgMbfMJUXLMLOfmsAGOqUBYSVINWKxt%2FO4Q6tO0%2B8%2F7JBqnViHjswYpvo5nNI%2FEWrHcLUOy%2BtRiJ8RGgQ%2BvDxx7MpnZvelEcMm%2FNa1IoXeNl6Q%2Bu8m0I5YdAgaZO5JMOsYdBOtg1SwIF8mtgKdyK16bvm3vNGzZOKlPq%2FN3Vlj5bknTXszfSyYbJf3Dvfrxs6yWwyVPI%2FcF6de6OaiJX3advjuw8UYyCKEujl%2FqMrkNvuBkqRz&X-Amz-Signature=e40389edfb635a978d19315be342bcd7f228934c52fa5c5b878b9625d9441e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
