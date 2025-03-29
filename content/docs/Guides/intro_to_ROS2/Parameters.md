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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFDB5ZY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID9X0NvgJ1YlrGeVYZR6IXw5d4qdPJ%2BnPeJkOp7%2BHCTbAiAqY00YJRUMAtaII1afcXM9sPt5NfnRFGhBeNd4EhYjySr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMlHtEHw6oDBSSD3MrKtwD8a%2FkaxkBCDOimAtchcuMQhzNf5dcFJgmmm3EIpaW9whPaL%2FvP27skcQr80ja8FaEthigQoEsdD5FSe%2BmN%2BsilzuXcR8VC3o6KdJxlEm5%2Fu0G%2Fhc2L6qVzukfkieZFuE6ndHp8Bhnch0tcaRmPz0XDEplsIfuWJUiBtzlXPUVcPkvYeLErBEksB%2BhT9ozNeDnr54vdZ%2Fr0XQUWk31KF58RlrDUxaK7u0SFhToeGXkTUacpf2jDWK%2FPNkcB%2FJhNkxWoQaDlGp1o5LSltYd8BMH%2BeG9SZUhZC%2BB5m8ZyFhqEQf5KPvgFaG0X2lpQxZ2SpKWNoLsXq%2Bz7CCchwQ3VU7RX%2F2wld2cyogR7Fi9E1f4GLHgxwlM7l%2BbKCYbVbvBtr0WvNS2PbJx4lHmWdfFlfI%2Fp1gB%2FfT25OdM%2Fn0jldeEsrQz1ukCPVLGR9O%2FEr8SZkJqQoXewfK7Sib0JiHqBBYJqZOKB0e9AB%2FZPdEXD9nJnedjVorXkZAyPOX6jlqmIo1O%2BFHZ1SH5qAysXLcY1BKN2aDNbMyfRgpBg7RO%2BV1bZTuyJwMnSiTdpPcqR7EEn0YL2WtnJXQtpjdWs%2BTq9xf9PtLg1Y02Bb1vuVrgTmhBAZChAmZnmmtAZWTb7wUwmLWfvwY6pgG%2BnrUZnQ1DogrzvIBPY799VDECdFdFvgSd%2FW3GeJMV8maSAPBodWlWpAy3XoYE%2B0wXH7GTi5cloa2KbiRBGsoXeYSu8Bg7Ffj28Nz5TSKVdUBAU8t1JNu7xnPLTg2IOvVep2LeAQZ%2F50jrakDy3Zg8ZHXbm6UqxTIIKFyfZ4t3eazMwsWR5Sakx7da0Eyg51WLyNK7XPWyDZV%2B%2F6ZajhNeiFDwoSTI&X-Amz-Signature=cbf87a23006b970abc1907b20592ff010860b6912545ec95e92fe2672bfe69c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
