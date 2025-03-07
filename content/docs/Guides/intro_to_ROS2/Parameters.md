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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFWA2QG%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHS5dkOV9MtUXsV%2BfDGyltKIJj0EsVMpGVQXQdu%2F1NJmAiEArhk5TLAPDj2pshY%2B4%2B9ZgkAHy%2FMMfSZwB%2FOcZdl8j1gq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGycs7i0EJo4%2BLwoxircA6L%2BKF4y5P5tdqDZdoO3dqwhp78N1wxX0OPqEk%2Fhm1%2B9Qro9yfliu2dNfidfYY0iCmKjEEBAmuEzInmWzTvKDsuTggh5RHTG4tKfx6NJ%2BX3tDUTn3qA6ZtDdx46dbQr0kdx2ba7CmoBitc6m35VjlZdEETocBnJMHtJb9SOjtzYzsCOP7pVxfYkyQBdY%2FAq14KSUYHmnz81NAT%2F1gixJwUnkC9dnOzipK1n1VZcay1wPcNzTL4dfMb7u%2BbGd%2FF1JYmZ7seqFFFnkrlZLq0KcUq%2BCnLp7dznkf%2FmW6%2Fe%2BKEgISSsjTsIut4FFK5omO%2BbOUnul4RItTPCp7pTAf4H0GKoXqf3yLHkaDAwviqkH68CAodiRSjTUxcedMKPXaUTQkIYIDN4Jva2Ok3U%2BICeUAigCHRH6H6%2FvYQNSSg9jyLHbbYWfZU7aiV4pwbSUYXVReLAKD2QZ18EPAd%2BkTVqaxCuBNu62%2BjM8%2FpTEMqamtqyxoOwBTnKYdYKOk6El5E3oGrvv1tLC%2FonQaWfNXOdpDRxjFggNvAzNzpNOzAoQlf%2FgbPwDUBEmsSTMYWkui3T3pUKRh1%2FM2Q%2BRXCIn6du37bXw8gCz7kkHfEQm%2BbBvuirpEZj6RMYc9pxeTxc3MPaIq74GOqUBbZkbczGpfF0XXKX%2BpwFIoKE%2FJ%2FPMNnykSQLGfByxwlubgD4vpkQz3gB5UF4xXHuEjRlxiA2as15K8LCGyeyHDiv%2BilpgeIv51TSZ3aSKlUmCjVZw9aXenVz3bF55yzC08nxsw%2Fz1m1gsMEcu5aDL2H38DZhBovNgI8yhROZW%2FCNgxzAxKEQTbFIAXO%2BDzpsQn3y94Lh9xRl3zUfB6RnCHaVyR0Qu&X-Amz-Signature=c5a2517393a21b58ab1a7e5cf23642189cbf464829fcbc1ea7af67c1446f2c26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
