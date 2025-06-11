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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUFG6K6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAqmabnNwPEfKRHS%2F0yHDW39WsPKq7TVcyTgDfarNYdZAiEA8JCJn3a0heBiO3oL5pEby4tc%2FR4ml6iJudQDikVD%2FXcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPh4a0rrkI%2F05%2FGl0CrcAyPFyh3E0bRENLtZzkp2RsWdUfggF7VHE7ai2EWIppYWkdNgxKa%2FQlL9RRNoU24cNtUTIVNLJB%2FXrPA7zKhPAgFG9VoFqSU1t7MmV08a9e%2FQqdADcFTUuE2aAGnjKeXNihYJNtejuGoEDpXqlKL6vlYM3EqDXFJNW6ycGunezQuY9MIYiNUzsaN1rBXtwYPtLCqd%2FNUERZteDqJX4VJtH4tq3iEGSGqt6umsB%2F6Y%2FvVXEwsZwdGum4FNRoVrhRVx9MHjufPrn8N29Dq74YrBJvq2oH%2F8%2FPOZUBu%2FfgrN9YEWdLyMX0Xo7kwpdlccP%2B5Q952DBj83KTvPGVFn8ypDbup%2B5WdgVgv%2B7w6ShKgvS4l%2F55C6lPl4AH2h6V79jy2A55f%2FMUX1Kqwiy%2FFuOi%2B56uBBvsRaY2rzWqVV1reDXmCkVolhBi1fSI0EkIOF%2BMgPdre%2BafCZXKjPmxdiBLgK4yWOQJBCRhYFlfWOc7WHi%2B8Cbsj2flGkapQLqBOqw5BhruSrSBKjtAqv6goD5sO5C0hDc6zDyESG13VXsPzQaho28%2F0o9HqOQY%2BGERnmJ5GGLXyjk80RSEQmrU%2BJmVd3X9Eu30waPiUxzlskJSIOQynto2vc0CFHuUApsYNAMMzIp8IGOqUBLuvzAl32kf6N9SuAqtQ3NxYWgB6oxodLXO1RpH4%2FNG5r6uKH1Dv6auImxEfgRzxzGi1LupVKGx0Mbq75lwy4UFUZVoeuKtQMt%2FXSVUyRsUvQAjD60idDIc7JUh47ZqPJW6FiXbXIUTqPnH85aBu108LigTXU2tvm07XkEtaiSgODqq20aSOBwKZiuEmcd0sEVza6T9aYcuX9TZC9w58rDOcCaiVH&X-Amz-Signature=d215b3b29a5c190019eed3c8270ef0078505c68b2740df22a2a4987da9bfe5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
