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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBX2IMP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHA3TdIOBSkXBNAfKfJFQwwYF5EN68vKIOCeAke%2FEurFAiEAxn6n2GF5PMJ03daahY8or3I5lJtwPM2rYocF1nEFlqUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVeR3nb3sTT4jH%2BjCrcA3GQUSSV1iPVkGSYkwbdauVGWX5TdYUdffzXHEuow85N%2FV%2Bh38I0STRKDS2fjoi54jj9VNkYkSNINKPqf%2FWyIPeGJqM8j2N86O%2F42uFi6sKOJfG2RzfAi5PjukG%2FR70WAjc2%2BGaSykOz2y0FhZKry%2BSruPjOiC9atWFofkzp2a7gN5TEGiZS%2BBAUS8Ru0o1LYivI1pPQKLtMnjRsUUrdkk8SMJZLn7QRsneNXGQjS0%2FPh91GoES3Rr%2B3%2F65IX%2BRhhkq9CQD4ym%2FDiXG9cOiJ3T1jEBkQ86FH0zfPuSLYhJo7U3hOfKyP0EsWCCnCwMHEBUMuoP5wqVg7IIITsgc51oJQtXjKIpjeiwFvC5JI6QVfs4H5BoVDVeR3T7CjbkIcirILZQUoqTFcEqpF2U%2Ft6iwrvDCBwljBQT7B6XGoMvoHKedjCtfJV6KOe0DOErPpaewVV09%2FVXinD28uoP7xlNUFVyAF8flCCthHSAkXygsqYihzIEkiY1Z%2FnKtPO4QBm5ObNT0HytCUJ6gWH75846Nh%2FlSG1iHkvAyLi5AiPj8TqZ7Lun55TW6zKL%2BnPEA5fgr2dimh39tvyrknrFpdHgtcbpPKbF9ZEY77X%2BVOo%2F1QWdI259VewjYairKdMIK0z8QGOqUBoQxqx7%2FP2kRRmv%2BpI25guVmlh91OCBznIZCQPOF5wV06qMGY3%2Bt79CidyaQ97eEaqQh8aw4IntxauuEQ8KKRz%2F7KCv6uhhZjJVtK7DKJY9ib%2BwqMvmOmysnBjJWddzKZtG7i41kBaVy0wmsv2OgKjaAwNvpni4se3Os6lTpcH5ZO0WxIYvs9Y0WkNNVE6svjMOHEcle2x02xKpgSJqXHnlOvMgLj&X-Amz-Signature=6e94d5aa0ea727b702a249527c29820932fa4181cd1038feadc2ac851483fff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
