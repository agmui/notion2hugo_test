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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJMKOXZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIE%2B6AfLGe12CG3A9e%2F3suClh283dgIl9zezDQxwdjCNvAiEA%2Fsk4Uj1CCev2rtd%2FJ3rX%2B4s%2BcVKUcSWXsvMujpfs61kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv%2FTqgkyvnXv97OFyrcA40iYe3%2FXiVDXvbu0Qx4N%2Fv3NQwLHplotmiimBu5wXu2o%2F26pI%2F%2FWRf1rVKhJSrsi5YGRI2dwxltJKe9QcWPcRxobdV%2FOiXvS8W%2FrVCDxwazPkp6tfaQAcIESd6L9H5hMAJ0rk3WlGTVfuVfar65Yl9Hijx4%2FEij872ZPH6%2FBeFNflRv6KU26lY6GWiv5543SX8s2aPDStQvdEbB9mx2KjFXsnd%2F2jL2yOI0QXxUk9ZhP44K%2BSew7YKfar%2B7caXIF%2FpyAjuol6t1HAPSPey8u8dYVLsp%2BZI67yTsv7TMOyCcC2CNEC8S%2Fg7PgXHjBVp3Jb3Uco3IqA5HlzCSF9MMqY0rZQY2YbjvSQUcekiIgUhpSfkxitHxdgBoRwpTqb733yq0yi21VN029JyJm4IvsyNvBqySJjLncF1QAeKJZJzKZnyegHQo2V0WbN7oQ14pCAucLDKMG3EkqHG3jL8vOIQip0h1J2yqKPaGodF5hGaS6Vy%2FxoSksaPPslL8HcQPOE9Ny4b59PGMvdQb26bH5S1Qj98X8Izopc2al5sSvrK8kOMzJ1aPIL4pwmBUSizG3SnodmfQDOmnoOHEKPcHmG2TS33yjqUhNiYQpBg8zPQyIELNQ7rov%2Bs43BqsMIyVjL4GOqUBASClo6SEuQZcfVJENU4NMcpim0Fq5NKqycFdbctx1D5%2F1iWKA7aPcqimzAm2zqwrcxyBxdpcIpoGL5v86uWsKM0POoGSO%2F9F04jl2E1CeL7oZAeUfbDHc3OHX5eE%2BLwZWR%2BE57OPUpNAzMDUyBj76eGM%2BeIvVJGhvSVKxc%2BKsH%2FPJNbSWgDT0Z319pEJKXU%2FcN319vnXPg5hk2%2F2tpxAwyvoL3RJ&X-Amz-Signature=658992cdab3f5986464a453504c9b8f7ec67c9c53628098a63b786cfc637c647&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
