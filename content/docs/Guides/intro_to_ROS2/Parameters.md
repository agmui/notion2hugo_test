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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCGC3KXX%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtqZ1HM2lGxl%2FtCcUAZp1dOXEZl%2BdIdLFHMyXBGQR6SAIgfMiyA8a8CzqF%2BdaTSyXNBgqfW%2BjIGVlHopuxWng6GbUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3Gok3%2BpCffs4h9LSrcAzpwzA5qiHxpL8zA5p9yd%2F%2BbR9jKt%2BIHLuF1rbMGYdibgrKxLvEVgzoTKmWvIFGPAJSQzPDQIpQHfObYt1poLYoivIpPksaiDRR7ueTorud7NBP5WzjG7I3MFoIgOxr9LZ08PNb5CnUITGWYwBwrpI4H72pUD0f7%2BrGc6sN5m1wIN53FdQgFoWpNfXUhQ7Y8Dr6KeCfQUymcmCdV%2BS%2BEO%2Bt7QvrWHn5yrzI3sPD5IzLEctbsMFTMHuTXiTW%2BKeDIpwxN5rdwIBabgY5WZhxm0CD6ByGtc6CrYk01ctkJS23emNp8%2BOyvZn1Ogeh0pSL0ZJG4S9mSJ1kjQHTm1HWIdxfnprECU2noGbxhRudkBngCk83rKDTzabHag4%2FPGRHRtPmJGWFlV3pVtC1k63UG8Uk1kPyJZ8wci85R4k8PJNW6j3ANi3N%2BIIr%2Fn7M%2FrmIByjVayKUYGeNLB7drTVF%2BczHCQBSX7CwJnUJS2Zx3DtuOW7eA6gv5gmqYKyNMavCk6cMDbZGLnNd61JlgyVVcMuzXHXQFpkMckzpJIx0CjKt01P7FGtQ1QHdmBTpUP0hQKnxsXb3UUOBOPJGk270VE5k44ILl5jMwdaWDa4JalUfix4xca7Sl55NGPxX3MODD4skGOqUBvwkbdXF%2FRGZ6RbOGQQ%2FVvmjQSAWiN5zExTtU1DKrXuTAS0r1HTAKW4LBuKdD8OtIwJDhT%2FAfnxBXFHfqHK7uhiYiRetM4XH%2B8ItM4Dm1tYhSBZPXgC%2BfvLzRL%2FnKZ%2By9UOFQy0GR7nvicutLS1jkuqw6gyeznPSflUF4CZuNx97OuHtU7xvk6nswHmV%2BAIu6cxFlEVOHCgupn5Jt%2Fgwz%2FMHuSoQ1&X-Amz-Signature=268c78d8fe63ea3227f6753066266617bc6483a07a68ecee1272a2edb92b3cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
