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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF72BZ4G%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDheCUB%2F8wZeseIRnflewlS9Uns41FGkv3sMnm4VVeH7AiEAuNzCd9AzcUqyNZg9so7VMc8d3hBJiqVfBRz5DEWKi%2Fwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLPbcfXnl3poEZQp%2BCrcA6%2Fi51HLntLCT2hLp7333nfOAJ8OJar38KwZLuUImgP5Y6xs9XaZM8K0xYWiKNzO7Ko%2B1RaKUyhj00qRuziNW2OpFiPyU6wvUa%2BhrF9JdFjM68jxyb4aDhNO%2FgntVeuywrTil2wU9IVtnsNDXgD0DDBPH9p0e5v8rMLD2g7lZVG7wUSyRgC85aNVSDeZB1bNi4p23vTqdJKXT1hSC2YjwlpYyeLJ5Jz%2FNIqjk6xL3Wt2%2FMs5U3uD4pLR%2FNb2C6uBnRlJA5JYAeNRRSPrXJXZQsnI7ldPQRBiXeT1D7nL1K4xNnmFV8xZYIeuRWSUmsXAa0DadJOO1wiihOQG6JnLJMrv4aumGqxtyqLpeupdSv%2B4Fxh%2BPLMJ%2F0AdUVgPS2POUOuicvtme4VZ6LmcAXbQrPH4byWkN3XMDkWBw9t29Sx1JRBCi%2BnPPyvhv0IY8ab0mhhTFdZOILNLn%2FNthdrfU5ZKvu6oHT8DR2KFlncKJJUGyxMgZfkwIB0m7Tzuvs75kcsVx7Q1RN1MjR%2BGUbMJ%2B%2BghWSRSboxGgu5GmRj89hR4HgmXtClajKyePMJ2l5%2BDtRVnirKJBKlse4%2BBOqGR7D3zDiAswIcZuT570xJmzXBLQ3psGNpT%2F7wIAQE2MLbpwMQGOqUBKaPqHlymw04vOZH9DpIyMGvuzo6EnQVDT%2BfsY%2F2modCHp1S%2BCLwXjeVCY4dK40YRIYgoQqphiNWrD52EjIidB2Od0Ocx2B1FtSqjUC2vFI3aAcZVQPbIbG60jzBJB4JhOz%2B7MC2hDKMT%2FJSPf40SFcgaMkMVzEQMC4GwS7BRR%2BkvlBJJyFgFK1fQ2NNVVLUMArlkwnaN3iknAO1lgU4uWzOacIV9&X-Amz-Signature=75132bdbc3387ba8976fe585203388bfe16f3f51f8f70ef7599715f73124ba26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
