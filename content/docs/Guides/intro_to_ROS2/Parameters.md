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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKYEBDI%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFisCN9vjyyxLMwv2rYfhH0Z1K%2FZljPzkneng4h%2B7tvhAiAPO9K0MG5zuC6%2Bs8cr44KdVLStsmibWqCaCy2z%2BAcEayqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9uAdRBUNF%2FF42ET3KtwDJrsqbDpp2pQuC%2Fbz5%2BY3Rlt8glXQ6AQHsa05Bp4rbdH%2BrtL6pFIfc0yo9DdnMgsn5pyGPe6dQsA4RFDzpYgikYU4fc7dsS3nz8x%2BiUU38G0Rub6bvL9GqJGBpMnHDYcuuRccVtqcPkBSRPrSmCx7Uo9Sl2kyWgiqaMg4%2B8R8TSojTcZs91Y65tfJNEiYe51PQ3EWOJWQgnV54Oc8DhIxN4CTBtIJcDG6KlfU%2BOh2yaU%2B%2B8AyBJSumQ3aHa%2BtL1KDJrdaRP8QG%2BplW1do%2BCZUbRBb0VsD%2BN%2FkaM5oidleKo6NsWl8odtKaJDlwTE6pJ2XySkimfrRGeMp%2BcSvCjyPXBx1OfrYm2Od%2FRgFm01q4yb7QxODn8pHcT9MAV7ODNFWP3g%2BrxCix1S5ndNdYdQtFREyDUNecZJDkI4VwjoJsZr4ZsH44JS%2FaCbAa%2BIl1QVpJ8sRIW3x4AQsjGMHNlFuq2NjTgxI5FQaZW139qcHW3RQQgtdQPWghOqKAHQCe3lo4f2vPLWyqmZojH856LWto6bTrn2k308Vkx%2FiQR7hjQq8hVGIBk1SSyevBoUB6HN%2FWoamKOs9WYjeT3cn7xB3COYY8MtEMWj4Oz174j9W1ellEc848fPDuGHg7nww9aaWxQY6pgHHIUUSzher%2F2hFDa6oftqUQbHuOvnWone%2FFOsGW71c7WGpEv6CFj2dBqW7TPwlEa%2BQm1uxjGkrY2lE8EtTn44kwht4E02aBTb%2FoVQFaJVgEjBYy1KlOMl3n6EjEEPEGJC26F6jYekhRv7tsWZ6ZtZ63Y1dD1AvHFnZdyMH4%2FbOIUrZP1cBJ%2FjEnabzHEXW2XVcLTV%2BTBHBnLINB89MWkuf9oWCkG3R&X-Amz-Signature=ef163303243f9f0efa1034fdf187616519b754affc32d04d83fb6dd34844b25f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
