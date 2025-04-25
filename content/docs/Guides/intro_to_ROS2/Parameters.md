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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FRETMB%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWC2INEiEn9bmJJtS%2FbNm9wJKXaazEW2ILZBMPcHAx1QIgMGLCCibdsY2QD4WuKerkDyFkbkWp6belmBwP6C2ZfrUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGsKd57YSTBPrIuqoSrcA30QuIG4TAxr8DidTk9pJoTXvD9fkQjyATJaPxMiRku2OkVsNqQA91wPSwTbgf3F2UV%2FJBWgibkLgsuou4kRD%2B49AG9%2FfEqjlg0tLtd3zNpAxZMGTa91emWOIfZQoc80f9M4U%2BEOKWKVO4mj3n8nPZ7kAn046hCcUhDR%2FCkZpaiCtEiPcgtqpV1Rcq%2Faol7cXqrbB%2FO6emjip2NUl6BGxCa%2B3hrs2E8C6p86q5I%2BSLVKMl0ZkHg4JI1UNS%2Fc6R%2FzpI6UYl8n%2FRPSUKZiw7vmxcp0h%2FbU5PeXwo71QY9A2BSeoJlmN2rHNrYdCm5lBgT203IqpYhnE%2FbfyYk8zwpRFVy8TFac92Gw%2BWnpYnY0SFZm66RQKPRWB93rZZWhWGRDRHDjZaXFHAsTV0gr7d9kelU2RC13FdRYpBuQUPbZbqzwdwvaKsRWRIvwXNuYmp0h%2BxF3WLXP0i6%2Fhk51LU6xglmARHaEewyA2gzAkRyi39%2BMbSz92Mti6MRfILnBEDO6RDCSjX%2Fj3e5m%2Fjv8BD2wC34eh72TAKNzKE8Kc3hF7ORSEJvhuQ3bwj56DzdE4XHJY2JVYnkl2M2OvLtghBHYbO2%2BSbDxfKZqr%2BsZAv%2BDaE%2FheKDzyTR0QqXw1FrNMP%2FlrMAGOqUBpZ6JTV2BQasJuYmp04pwEV8JuygYqobvEpzCIMtcjqU0RoZKxvUiPcNaTZDM6RwoENsHkqHmeXCi2jr%2FGJhjMyCLuQZ2UXrVpRD59mxdHOlMtriiQ5qFxrK7ScWE2PuV9X9XQuU%2FFwXVjO0MR%2FFIcIJU9A4%2BfDgh48EUzQki7gMXV44OMwvsiOzhRy1vcAim%2Fx%2BJ0NB8xweL%2FNjNhvBCVdlthULF&X-Amz-Signature=4364d028e1dbc9ef9563feb83f4b7d6468e3af3aabad247cd43bed9e0efab7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
