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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W4ZQLJC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDtI6RLG7N2vENcWrX5STXj94RLOirvrx%2BlkZq%2FKmK8egIgLYYsa%2FHFUQ1Sl8Hz2VRa2l0B2WfTJHjB7cvIr6KpjPYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoHnIai7j%2BIQJahtyrcA%2BxR0mgf7pBSHbEl9hnM7riHrhzysWAd32PLF68i1G82lizl995qwPQ58Hr7nAId2Sw%2B6wZfI82uGoHoXJsNhzFlBJ9esPVK3SP1Pjd8D984oq54vZgA6KqWlAFfkH7hzoG1OrSJI6z9UnceOCYlzas%2Fnj2SupHAU64PXhc5H1jF2n2AKfZhoD%2FcpKl9gSnpNCgJ2Tpwejv%2FaMJTISP1VsIVDQTbdxh8A1FJ3GaN%2BcLAt1ZxlxiQHZqNaUUqKc3w%2FUCgaeDQmDNi2sI0336ZTuvWxwrxfjnr9qverx5ZQXRiRQBzBY5YxeFP%2BiUJ8H5uJV%2BUiPGPEm6xH%2FNrXUmoCCLVp780M%2B8QeA2e7lQpAmKfXiv3vorcItwZZqUmNPhIa%2BqKL0lb%2FTEH3%2FcqO3xorK7hu6Ssey76FmId06NndjkPJg8o4BnyMq5XR%2Fi4Q6nhA61yyDwHN0meqsdH%2BtrNiZJZDGWiFiNDI61%2FZzQQrXDaU0tQCQXci4d2NrhMy8FvdRqXn0BG93fr0yMwKIM19%2BZM2PD3Pg4XOpifjDlAZjQWsyO%2B%2FF9Esojkcx82AGSoQGcOzUSOanyrT8bJXzcXsqc2y42sySv%2FaK0F1rn8pEi2D4vkpeQr%2FGZS6FgzMN2v58MGOqUBVGZx8RmyQNW1TKOgpnZWhmLI7kAMSIwfonG75dN2R%2FYrsMGT7xFWK2%2F1dRPtavsKAt5aXPR7dmExKYmy%2FBkFiN2LDhla8K%2F0jGpYmlnfdQBcyRmMUjIjLdcnYaXCWCHZ%2BQoCmVBrWo6gKH%2FU3x6aAwtjmOwpCWuqSeqI5pPhEtfnnEPPXAXBlSOs%2FkJtO%2FCZMvO4zIsu0SILbY8LxB5FpwDwCmt3&X-Amz-Signature=39cd0b96d0149facfe1af9b3aae4459a874efe91af7d47750a978c1855910095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
