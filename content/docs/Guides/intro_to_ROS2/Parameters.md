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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7T6MIM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC4Kv7R4T1elOJt4FSiNyC6lsgGvTsmABSbFbgtIBzhcAIgCqJSL1m9VmnnZSdTOn%2Fz7%2FR%2BScufnCSayIgzLn%2BD0d0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIYpNlndGTyw4DqQVSrcA4pNLP9GEFOgdeKtWK5IV3praVQQVenB7MQmYMmbBt3rZ%2FWK%2FnYNuW5wNZTzc5WLspEjb4Pb7cfJ2eSt5FfFrB8LbfvCmeVsDh9BEWcoDIj5ExzdafNIMG6DX%2Fn0Dbptt9bp4mIikqNSM%2FpMvTL0dVcQCgrZwWcFmFR07fxG5aeEiHhoQpOxXN92MwQ6ogvecMzIuTf1tbwkqtufSxLjG6Id%2FqzQnXW7VZZeVMqqbF2nl3%2B2kRmFdv3uVuJMRhfUNrL2BnKOzl59tBvH7Bh6gTTsiO8y40qywVDSTOwzJnNIwAzBMJaTu%2F84PRPhzR4oanfmfMbYzkBsXLBVN3HH4E9XftFhEGrBgHA%2FRI1EuowhMERnhHBRH7NsE5Sw9C1K4%2FyKAaIHI%2Fjts3%2Bli3BrZqCXCANTjuMm0Xscmx58KYmruZZCQcNAPlFRs905OW1tOMO5Z28DoNwv0rdwXJgTj%2BL6HpMQAb%2Ffraw3As1ETeRr4yda1%2FO5VfxMryvzwGTnwkgSsNCJeZWV028lzfcpr89CAEy1eFYX%2Fyukhuhi0jxMEZEyDNgy3VRBuatvAa1CpAsQCxQX79U1XvIh9IS6Qz7iBhGFLocunVqd%2BVHPg6ugfUsq7gRNltRlNDdIMMWOwsIGOqUBnFPGzd0h6Dbbezc8BbTJ0usU5GWkXlDXkxKACGpjxAqpuLa%2Bi1CSEu5ZPDVTFTEWS1j5rNfYQ9c%2BmmSwh02%2FdFkwhHGLJdxFYEQAwZm4xsaJDkK1gHDmLsJXPx71TF0Zd2RLm6gqytKMssW1Au%2B0ZKCIM4FWpgx1Bay7k9I6eh5SCnvMgWDX7Lgy18Ek6WwMZTC98gdZPQS3nfBfKtBOg2Ws9mrU&X-Amz-Signature=4b7c53eb14e9b084dd66b815ab7e84b015328f379893a88e45e58c3a5d284695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
