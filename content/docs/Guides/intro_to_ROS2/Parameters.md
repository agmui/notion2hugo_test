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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6G5FY5Q%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFAdaEDiea0yGg3avvrAy%2BIhT%2B4Je5nahhqAsm7BMOX2AiBD%2BjyA8YnaCwLw7U%2FnBrjFk3LUnkCCQEDv4q0zuW%2BhTSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMBLIZ69WUNZgFlV%2FmKtwDa4XLH92zbCM5dgKqJO8%2F1fgkK8lIQVEkrmYxG17ZJTwBpvHB56fiDKmrK9%2B1mkfeioLnQydc4dY0XbCyY8zZD9PBEYPCdfuDUFP%2FMK8opsG3T09YINwdy1INH7rBPYRsG4G2%2BOgytdAv9PoRDvR2FIFpoWvtJ%2BrbA5YuqXFCn67yuGiz7VnE3dPkx3wqWukTi3RU17VYO%2BK0Hj%2BXV6zWA5hOI9MKkyUnAqfKX5JuChnstGb0LEx64S9iLy7aSgtObYBlaoSEB7%2BwXpK7pjKPVVg%2Fy02mz5Se29tGMSG8No2u99QpAPCputPO1AympZ3AxBQ50J24UEEoms9c96sBCMK6c2j2sLv3Djo3N3m%2F6yN8bilRcL9CFHEXKL80JwQ4lJ2WV%2BYfZElunRXEcx8AZvOnu%2F3wIFqmZjEbzYm0QJdbXkx1aGtuprVPKHbmWecc0lE3h1jFLObvrwFGp80WCXKsUKNyFOgqIqmraewLjNgeVK4J6m4HAfBAQ6zAD4AHxWaWyXpHR7iNCe8ntWQW3bvG92WZOKjoU9j5DlU7akmoVw6jsBV%2Fbdx3DIjqtk44A4yxrjKEhQ5gxPh%2Bj0g1GtQhCMW%2BoF9YQnusGsdEnyDlICtMiM%2BvZNGvTscw86zHxAY6pgEsHsRHxJMmyIOAE73seDy8FUByHHU8tw5h1%2FKGYnG%2FlqXwdNq4J35jW6v%2BTvJFbidmFco%2FEKh3kIt6rKLvayvv1rSJKPFRaosVk5H4JKwVMQVTnGrpqyCA%2FZ5ipO5cjdgnCYOCUd5fLTihGU3VrCIpIR45dRyRdFR2F4V%2BbTlZjVdMq0u9JD0wGj2xARIT3rwYeOZtsaA7ZSn%2F4CUipQQIMpPdWq3F&X-Amz-Signature=50a7f3ac7709b5a8756c232ef15334f3a0de8a4acafd089c300a16b41f828d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
