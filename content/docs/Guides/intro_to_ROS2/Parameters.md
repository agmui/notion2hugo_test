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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA55EEZN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIAqUOTKTLHkaIDFtMml7JgPX2GIFzk0SVr6F%2Fss%2F%2BpsuAiAI5Ti66CqQQwjvFgO7pOcd44y1HNuSr%2FiixCugzMuIkSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMn0R70eE09ZGBS7kDKtwDudoS1KpeETkP%2FNTP8ISh0qJFWDNx5t3XzdipgIT20JtcaZrgURCNjFDTp50%2BqNLV501nnUnsXDZBmXdAgF3p1bzFtO2OOBMTeo%2BMtjLT8SQEvCwqOwGJLAG%2BncpZ91F33fSXt0yAjs%2BosGXrAENvBSRNkQFW3%2B6zk9%2BYgo12wQ%2BVuW%2FXnJsZwC4vDSXuTDy1O6GNmdsSf%2FCtvVT%2FJQEvv%2BdjPN7EfA9wkgm6gbWVdt%2B9DVceMtjh6h6tv9j8dMB67NLmcFUk7daPM24KODk63HrCaU08Ee32AUUA9L4Yj7v6FKzT9YIUEJfzRRvENXj8S3i2mQK08zhb00ZQTLEG1O7l7iu%2Bse0ymH62BvOyAzIL%2F1ullDHkPxNsPBgvXWVjO1SvNfplJmxfmGQIdFVp2gy1YBQoI0NRQ%2FGANb3pUIN4ijOnIRsffA5RTYDiqdpIqWu8Lfe%2FsiV8AECu2y6MFX9pY0XAo%2BCeYh42W%2BGZtYortuPHowpDSQmdkSbimJionuvsufg5IAmUyxz6Vx6GWrel1aG6QzmInJO9jKvGPQG%2FJmfNRKN6NitS%2FFILMFzOv20xjLQk8Z3JkRcRPk5HVpBiJIiGDWZD7BrU8USOYpmfBqsnlXJu5227BkQwpZC2vgY6pgE8EB%2BXTswdS1zAN5ME3Fa2tYFdr2biNwnSILeSarqIXs5%2FZ34yAKtjxib96Vkbo9YoVZNcna%2Fff2c2%2BaOHBRXEhyGbIIOGnArvpjxPvmuSlIljeq4GLwilAa6LwQPnlxGYZ4zNJWHNG6Ljl%2FWIHGPS6Pc4w4Ejpo8%2BWxZpmJeVI67GIzlT8iGos%2FBX19UP9EC7pIANeOSJsJZtBpF6laR%2BYlQWEiLp&X-Amz-Signature=cd764d2cbf64c12f89ae8f12016bef046da04e959a9b3b3621d37686777be837&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
