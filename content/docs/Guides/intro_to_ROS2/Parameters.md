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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZKKJRT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg5T5DdnWRUc%2FUUivgHfL3dY1xYNLTj3iBrEdQOD5qrAiB0V81onOFm4gXfkqz0o%2FxpiOUhxRUo5JFtWA%2BNThlzuSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM3l6%2FKhCNl1RPa2q9KtwDB3Bhs%2BVHvCVZ3bzIa02997MX%2Fa1BCga3cJDI7gcunndy1Jm8IseHo6Iz0v6qoTx%2FHC5%2B%2BoCBxB2g64vp2wtVB4NJBzftej3pUT2dgE6kspVAo7csDSkTMKF%2B2wgDX2E6JqXeQqiAmV2LLhvLdzigxtSvkDQQfXCHdC5d6VwSNcF%2Fdncxrm%2B06Y7I6byfmLl2yZVUXbv%2FiQK0uj5u5TeZDjoIcKdR0QIqEmDcOZs8IXWKQpIfRQO%2BvJJo%2FcAatp8TLwlTU6hMmQLSrT7sjZHFWE%2BkGd8zZxehNqMVsyAezEImGzaiCwY4Ltnnr2iK5LrLGxZZUcTjZUNcTQ6%2FvWo3%2BlL2hQuu9VislUYPUradn5DWS7Jg0k%2BDMG08CsJgBT0otjx9w4J%2ByFNjPkhUkZkMnsaPTo0YlrAluTqDDwxcfyUCdiOu7JMDXfOFXtFS0HK%2BdmQLCCkclQWC15syEqTTnkApKn3iLZs7R0S4V39E3%2FuRSRBkshFePfzG9egTEj0k9%2B81E1CzE0Ie3RsslJJuzX0KMAUUrYiqFhj2vmfOa5B3Yon7awB7CmuC99xqHBW0nNFsiIlMqWaGuRrd7JVQmWKNYgQTlIqOMJ%2FFUXAk9u7jjze4ffEC5DG%2FKkgw7NvVvgY6pgH2V7R%2Fx9tfefQhvtkKL1m1TUue4QE9DpfvmQUim7d%2B2jUSZi%2FBfGHmbzrYs3PzDtxo066wJgiSK4vp5G6BgccFL5CxUeh9rjm33vX8LkCYROg8OzA7eKeQMBDXbB7syT3reIHYBO3zoJiOLOKqD%2Bp%2FwS8GVjsq1duK7eqRvL7SxKZHB9er6%2B%2FxUC8URC%2BKmZLfOO9nV1SlHGLGM4zgdSyKItv8r9%2Fq&X-Amz-Signature=8619d0d8318e698df8e9d1725fa3857e39cc5fcab927ed898c730c8bf9ce810e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
