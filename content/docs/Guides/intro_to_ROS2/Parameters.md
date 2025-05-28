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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642CIICOU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV1blZM%2B5cQKf1CXGTlp9jZ3Pl0ZD5ojzP5uVZn4D7mAiBYdCc8ne3FRXBovgsEPQt4%2Fha2%2FPO76KILD7tSZpHHBSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZpIkMp%2B05H6HhLVtKtwDGQrGoifg1DteOv6fr%2BATKmEm9mJUgE27uEnOcSB0xqDJCqgwucVBiYA0jHHD%2BBgUDtNG3v5zNdvKEu6OzurcJm7iQ%2FAByMalWr8f0Riu%2F2LVbwsSxwNXLnRoA2dVpXgydH6x6tTcWZIWDyLIkF8%2Bq4qvsnHr9dBXe1WwNLpWGW5IFNywdBQ7yTE2NQ8yEIAzludhTNBVA0IYDsPvGDyBo9SqgOfQ%2BDpYcPN9DXfhQ49BfAI%2FFNi2ay4lHF%2BusECxGHuZmGkWGxcgE6nXswtCheeDKsHFgUmIaM05UbK5q6ea3nTCw9FmXVWWeFtDO5qQ4iVIdPv2hBFaN35Qnim4EvGUh2wU4DAs7hbmzKaIKaN%2FvqXWeKAcvD3Ld7qvq3Vf9CJ3NLlt3Ppr09nfRJLWhony6Q8KqfcmtCXpdPWhJKpgJP%2Bd4yALoE3iNWfa9Jrn%2Fv%2F%2F74ia0xYw1iRdgelSJiHw0z0eDYO8U%2F%2BA1ejYFAJbuU9twNrK3gefzfolA46UAmMEO3oh2BjcFyu673UMx1n4cKf8Kf3tLsenvymskfayRCr0Iz%2BiOBmU5NXLJ2qGzrednnP5vcZXTSH2NLURngjEdEhxMgyASaS65qyxibeUW3D1%2B0zEjAD1ndMwq%2BbdwQY6pgFgh%2BqMSGZNVYtI4E93HJEUOgP6o0FiH1CrNjI5YPzulXH9ayknkvZcz%2Fuy%2B9lRscaUP726y%2FqCNPTCWlyFfjEChWjIVmRAdow9Dyf6v%2BULZDo2rL8AtBv22NBqXELzSA55TkK7aT53%2BngDhpk3vkuWK%2Fvb9qyHF71p7NLUrqUAk6M2nxF9ovzNAo1C50mShsHbPFtOmuYES0oGiprxE1BbjGOXTn5h&X-Amz-Signature=21142ca63fdd5864ce369f98f773bd1e0a04e32e29f595b41e60fdd7b9da55db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
