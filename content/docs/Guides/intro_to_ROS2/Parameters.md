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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7SWH7W%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd80RWoqcNDqjPTLnE0pixzQWipH3QcC3H%2B9Ev6%2FRNlgIgSNnsg3M6U1OL1XN%2BER%2FkaromDsAdEd81n9hIV4pgyFwq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHQu5vY4AB%2F7NZjlbyrcA1Ah75VY0b23dyV3qhCTOCx%2B4nqIE%2FPEKkpYOqFur0vG%2BR2Zqne4QjUIGBZRf1vSAIbJcmMyV04UXIZ6gq9mhnR8Q3LozCHBk1FqL15JT4MH8igmBkg97TrytIJWxw%2Fwh%2BV%2BiQ8FjJAVVKyutIzUpIzZezzCN11RtecrnAQq0Wrmfmayb5WBnqKoZGQa0gUc0OywmdMoEwzzU7wx634o1Jqyi3TYdHYHqHRpxSABrA%2BDxblE4cd4klVf6Nb3v56f1oRZG%2FTT3JWfkyZf4ZOTOKghOrGJFn06kUEk0y5BoeDQe%2BghclzWOkfvGRc9oCagxINoP2mivAe%2BtMataWRl4qIJ3VM1Ni37wQHW9HWayiTTsr5lKqZchEuABvvqMtCNjuQ9%2FJ8l3bK6dvdVYtNSV6lMRH6CPG89DCRbuL179eW2%2BHKQVXXxyaEU3qTdSypummuZgR906Pr3%2BNu3PIdIgOjKLGMh1WKPQ%2FeYdgnSNWCCK8fjMDthZXzSKZMtM%2BHeoHJVGq52%2BFP2cGzJXjQ%2FaPUsLnmEo23etJZCU1OcR8rH7Kr40zyX1GqNkLYiCO4zCgT8vfNLbrjfK%2BksH15cg8Hv%2F080bMMtYzMQ6T5akgGoobD%2BSrNFopNGWLXiMIm6qcAGOqUBFR4NWazYnAMlzJ5ycgMIpOaAA08LDxpviVftBBXiVuN8YoEQpidcUitywEzBn6Ny5l4Z3Cj4xn4w4ZdejTkg%2ByajgGrSAAKj%2F%2FXt%2FpU7fbDh4fj%2BQl4sVlwTw4p7i2fLxIehyimzLWZDjfoUOHUccKRTDaZEqz12GtBEtSQElKy4lKipVNTXPk%2FmBCfxFy6CMw5jh%2F8lzjogfCBrE5QeON8jMgoT&X-Amz-Signature=8c9c898bef974ca98c813fa8cbbb9c65f085a75e372972b025f54c80f3ede419&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
