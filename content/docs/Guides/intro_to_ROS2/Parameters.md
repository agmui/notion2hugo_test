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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDI2JGA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAYpx8uKpYFDdNaaIGkS7ijuaFkpi%2BZW8GAupEaqLS9xAiEAyG0QUmT1Qpdtnt%2FBlJp7%2BShf%2FEwFRM9ergVvyXy5w5cq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDLi2WZh8lhVudFLkSrcAy734qAAS5v2LpSEZLrcUDluR%2B4%2B0yqhnK8o28h4RDweNSFxryZpCJ8vyyqtmcGcLdLoHoucTfQI0uegPrYA5TZAMup7d3hJBCZttGEybVHLD7VY0a4rkemOEP7aU20RN%2FOngRVRmxBfhrDScJJ9l1ZlOateYYl1vOi7%2BRcvg4%2Bz7PVelBTSKOHqT26DYRPa4ONdsPSJm8dskZLmEN5JauDC5AblIIcGP%2FjbHMHgmMBnWSqWP%2Bx%2BBwp%2FERNfCF3QJZoc%2BhN44285XXx7ApFb2R3b%2B8ZEPrv9dCrgnCbOzKxuKtVGL7AmRPrkwNQurrTzzHht07ONpkxtlXaRhlRGe19gU13Ip0idIYvLoTdTg8fm4Vq806D6hrLZO62yf6ERwXa8AOSdEah4FgYF%2FGdlfY%2F6DDYZpFFKQGxfpvqFwH7U2ojiz%2Fwfa8nSXjCF4N3gFsglKJWpxreDxttaw9%2FOy1Xq0fCRDKYdmtFJ%2B6OEijy5NuCVSayhNYmZTcABgmTz48PqsRj0I9jy1kLwMzrRSWhCXOSxy4%2BuiNrrR3R3GzgWQar4lnAYBqSa2aAJopnBNrID54FPmJEYI2UDMex6mIGrQjQukgroqFRzWMmrmcvC5jzVo7yyM2iXMm7fMMi4rsMGOqUBe3CpV6kL3iHiUFhc2uwl4g6ZoGJJHHzuabb8YdAoHEDeMjxnZF6ecaHfa4YKhjtD406igrn7JG33X2BDXW2hMjRubEQbybYdlOzcqdZF1cMgiZTdaU9d%2BbnkIzF6bVlRLGMPQ4gidnRBTzwyeGZnNx%2BEm1JH40%2FMOZUT5iO2oNcf%2BmfbURYVgp%2FNF5pQMvXHDwMzhZdne%2BxS5%2FmtxYu6L34No5EJ&X-Amz-Signature=c3f2174d06582d0a98dbfacd91b8093f55158a790ecbce3b18cef9561effa469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
