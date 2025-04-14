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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTSG3IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuLmRY6HEjrO2BjNWh7nzhl1vz8XRIqewEMVsB5CbuqAIgHUDUPxCeTdXetFmJYoPSTCsg%2BBTwtJB9z5Js0BuH3e0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHB5cL3fhiTjiEMxKircAxZa2kMvBquXtxNCIVyIPtjgDMYbct1qk%2FGYF5XMaReQssN7qLfviXc2ybAxInKk2duQU%2BJXMQd3zvP1A9e7Y1fOTt94xNYZv113KVrCGc2xHzbACTNUhyA60i6XmG1H1Du50HwUiZrAsGJc82ETthWfUQeZYq74x1TfzHaHBz8GkCo%2Br7rkaj4J4tYHX3j4IDJ6n2ftrMU8BHyNMAbEtJYwQNw85CRQToUyJ9uChaR3ZDYOOZpYFnbPCU3vCDHTyxdkPKCv0RxYhruRfchoc3I1%2B4k4WQXK3UoXWF7zLw0Qlv6GnCO%2BSzXv%2Ba0j2cmwhgKV3sUQ8IkEaivMZio9S0cKaTMMVs85IHlRYGAvnvUvClhNQ6SgYEVoFh9Uf5xWOUzoB3OZEcjI0enReJM2hEOXs0WcYNIYlz6QomOgVj9vSbKXkfz8Jcz3zjobSegexDtNF5dKGxnLuIka30pjlUmEIcXVMIGNSdlX61Q08p6vfY2VoUJadLL2QCNOI1MmiloFCJXTDK6x%2BZ93aTXI2K6cjTycBvFzQ4MnEF5ABSH4Mf3X9JDjtl6dhfOvwAf2hGhPDvM74uiwT7QFYjbpgrRV4fRMLkx88ok66cF4Kw9aOoltfIvUcyNDTeFjMMnj8r8GOqUBP4s6y%2BFfSML5KA520%2B%2F%2Bh4yMlipbCKZFt03VJWz9eBmLgqJpBoAscrqi2Mm9s8ryJDUYUBy6Btlzax0Ww02ofRGlFgntrCzI3lcUBDRH4lVUGNlD4QtjUAG9DsT6oLL8vj0sfd9jwEkqnT%2FgwlIcSMSSfftqxSKAwaGP1T4vujn%2FK6SCkVOQLfqwphLihxeSPfMaxnnZxTMQWgel8qTzl6UIGWyc&X-Amz-Signature=4be8f9e3bbac14c142d95942a5e66115404246529c5716f3ccf48614e0738f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
