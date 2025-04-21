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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q65V3KUO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC5PQr58P0enb0racVSTvUfJYGLORgUt0znJx91ZOvmoQIgXG50Ktv2dDSkuJp0TJmb5W64frAdkDVvD1K%2BSfE%2FDSEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvgfzAKRpDla5KATSrcA74gRkYNrui1JVg2MT2gwrcQlBzMySWnYe%2Fu81mlCU9mUuQd%2BTHcCdZE443cf0DSYBdSSTH2FzfSWcXLjFwqrgSgt74ohepUQxj2NXrGNL7LC91UK6s1xf1HCU3Y%2FaSpAcxk7LOani2%2BoSbeDw7yZYw1%2Fr2QV1qzYFzqd%2BOOt3CnVexPuBPZIfdXcjZQ1FkX2uogh2lKsMVfPlruVjJ52pCoGawqmLxrTLOts%2FlfRujd3yULdrRh56GCnFPJhuMyQ8zZykmM8ldTWtSa22ED5%2BmwxkZBoadCSappJJsCdP%2FoXh4UEzUx1%2FQ6n0f997l9QUlIijGu09bIV3Rb%2B3DykZmMjok3IAdCVJ6CHq6%2BuhggajJ1QiD%2FNJZBfcMGer0nDxu%2B4%2FWjh3M3tU5fYNhVFMLQVsPsenYteTdjETUNxwYes%2Fd7Nw3o52GsiUmlg3iKaqaPwhLcWcX2iWm7FeyRQpZZwnsmRT%2F1snyWyJ7TxB6lncLIl3YBdp4JTJonERMOTuNkINx2t8mveeW0XRrCA7Y%2Fc18bKUJOk0ANhSpIvRZGsPf6vHz20CNUvj9sIdcuBN5i4eN5b7PEHTnkUA%2BOxlTGGUzVl%2FIxTFvyfKCtSc%2FqBMzVv4vDmk3yD4THMJO8mMAGOqUBaQXXB4ZEOHCx9nPZutgXZ1jxgfSqfHBq9PLNeFtHyT7oS90rKmUuyuoZdQCj5Hc90M2kldITxCWhACyTsB9RfnwMz1bo0Y1dS%2BfmmOUukGlMaQfTYUsSDkddbi9CN%2FpnyNJ7gHXPTuILAa7VlZpmTgPSAqL7pr5SXIXPuj6kIiGCFNoMmIAOAqYuYlGtQlqPCxTcWEqP%2BNiDnb9QQuk5TkEskYZL&X-Amz-Signature=f99e4585e40b5b6227cc8f109bf16ba048d1cb104c8c83af3f34cc59504207d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
