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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R634F2I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDcZeB%2BwEhcd%2B%2BFAmVBf4Yso%2BHTtPGdUM7NI3BQ%2BeAzJwIhAMHt0LU8NdTu2WWm3yzkmDsTfbXm0SFeXBoNpH12S0NGKv8DCGUQABoMNjM3NDIzMTgzODA1IgwuiWTfim4KumbGg7sq3AOB0sVSrJ04x5SHHwVDK7g4jkgwyJBF%2FRw9zvDK6csyaWX8r6jtf5uUHumB1Jm6EoO0z83WbHPazxTyj2QsZSjtWzDyQGYOYKNftH6RC3dUDPuPWzUNPXWw1LtlRbddczjWArYczXszDrYJmXh5iK2B7%2FZXAG82%2BIrlhfiszABuKmNFieogER3R3MQvH36STl2Qpj%2F9VhPYc1J9CW6sAbPrAeznOEp4olnAwtOnwF4rB%2BfYj%2FEA558twB3og3D16OSTFMu%2F%2BJxEOrvW4G47x1EKUDc85cRvctOiSzRcDzLgOJnStIuv1LvnHq1OnOfKqaj%2BB%2BuqDVvkFiHwrPrQPsXRS%2BxRFClmCLKr%2FqoiKWOtSHbNhD6%2FbFPYnQVBWSUlCihHfe1xRNfyr4do%2BoKIz6M7PGfAuxrQ9OSSi%2BBRR6SxK6LQJQ0io7Q8ZhQn%2FJrAtUVZA%2FFVJw9KV5Ab7Ocere3dh9kmttXIjLfq05be2Oqy5aPgdMSgeSJsmDDL%2BJnG83OBYLE1hDGo2jfGcuiGEX9%2Fp2pye6I%2B77CjRm3wioyXZwAsC4LMDB%2FKYkChdtUhmTWuLYY7sGR6KiwUtf57bADC3BjvYuDyNg36iQTmFWFOjNQZttmeU29Dk4EtMjCIvMnEBjqkASZ0PxqviRnjoPvB%2BGDncd%2FiTijilvlCCtGxTdD2TYQDkGdT5qjHFogTmn1Wbn1FlSBQOEPs4ALCy6Xm%2FieVQ%2Ffdiiyat6ZamDmd1Kw8%2BeabvS6SF2FoTnNPErpXr89mOKDQMN5BDTp4qBhRIvPraa%2F2DSaQc30JrwgTDky6fD747Ms29sO2Bi2ASvf7WbYgvu0EwMs5gf4y8sh01cLC4HhdBsmO&X-Amz-Signature=d7317ea9bc7f0bb05ddfdc59f2702ca327281b80da08b43d2e57a33af5e9e891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
