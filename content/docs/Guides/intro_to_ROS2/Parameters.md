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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LUXZ325%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICL7nXvYpNgONetfLRKzQkI%2FgiiyJL1aN06SbWPvSZ9xAiBPEjeylMwPSfg5keBh8Q7sHPcZ0CnbAq0cxs4rzoJmeyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlKV6z4YUTn3h9C9YKtwDpNJmR0fAVbKDlhtCVOEPmYwUJneHgQzo0T2zQDOquEj%2Ba9RqCrPTgPs3NzhJ%2F%2F%2FyAGieOr%2FyIEsEyXgIenfDs6Ow1nY9w5grc%2B6Hx6Z70Jh80NhIPHz%2FNkg1CWQf5cnOD5Zb%2B%2FYVLfnfQvA%2FHjrJnKpPkHAWAGRSnJ23%2F1lVVZZV3x7IYwRtzc7PKUDyV2tbZm8phjqZG2cy7mvXlPCYT8wtCma7Li5455Or4M7I90zH6ZHfv5ebhXbRMk5duI%2FBYakrj3XzWOr3FUWbrRZUlFAlAUByXOLCQfAoa1ZxNQ66VW26B6UpBOPGgfElo5gwxIFlKMOHcEmRn9P%2FwMRSxDIUaGHw%2FLAft0zDIDYBFADnJWBlqTwJTGZNGlfLZNsiCfuH1sH4UNdKJodJOOAUEUTxqxhsXyqkA7yLbN4GJWU10o%2FId%2BnIWTcIkucreSAzMXUAvHVJvY%2BdVSW4N7v854A5qoKMj3X2AlLGVWoH2ur6OnN523NxRtzrbFY330Kt397fUa0mK%2FIr8mUoSBIcGMGhLsByUTe241iY%2FHHJo0YgDLamM360S4D3rxe5zF%2FSNYU4hG4usQWeSLXW%2BjcWzId3BKik9uzrF8rU0TppXNwSAsfHaCMHACUl258w44%2BewAY6pgFS9ngV757f2iRfoIHRmyqqFIiLa2fsZpqM0WZ%2Fl257l5mnJM5mxEnQtF7aaNoeAjokeYakVyjwY0GOLz0P7ETw86fQgm%2FUkcICOrbFmcB5VyZqTjE%2F3EJPYpf%2BmtRUh5NntVsv4WWKbkdtToY9Hby7GG%2FAWo3HDtzqkzvYMJG8viKYgTNOHCv4fvk%2B53MXQeR1l%2FxQMdM6dCav2UjpQDQCrf93S6nD&X-Amz-Signature=07e105c1330dc1f06658de926df8b22538395205d7e667f440afec3b1d5931da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
