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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BM5PT7S%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkT3hbjRwdbB3r8NKpB9trMSEm1hnP958TIEu0eUsZiAiEAxsuwk49tNaMQrQAQgWVunSQF9rSnTI5gzaAnEaZz4UIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJBQPaS60quzG6WvDCrcA0ZhIMTjEPMrSSyr0O79a4a7%2Bgoy0hHX0CjbvGr9%2FAFVJeBK69eQ62nQI7gD9iJW%2FYlOVvUBSyu5dCDcpQ5J2MuVvSWXDugPkU3j7vrr%2BCpu8xT%2BypxH%2BjkeDQGTgvHWApqsGvm7qNp8OTipSHm4Nvly3uvVtJpJDE6lIk%2FiPWwuslTRalRCyE2g0TH1iJjO2lGNb0rqv6VfQuCUmD%2FwWrrN%2BgwR2p%2FGw%2Fsp39kfPUDG2VI1yip5iB94uXkAJBDlV82BswpCCq3JOl2BdDlUkZ%2FIoKyRxDt3SARWOgFTeY1TZiyeHSB1sV7NE7U5wc1x9Z9ZRxp3YhfsZuhsl4DCRj8s3xpYgFaJclOjVyT0vL8acp21D5ENOndGv3LsCjSqlWrlz29r%2BIcUOp8ieznsV2uWVRiftM%2FEbbnj0HzUwu5AKlgsL7mZRTwkk4%2BjjPGiIMiaEvU2XRm40j4jiwGGSRdfDIAP2htsEn8sVa0%2B%2BsWXasGYuTGCrdxP2%2BgHX6YvmW1wCEr8z4OQnwV3JZ5cG1cp9KUKfkD1ajrMOFGV%2BJiohw4vqaPGqqves993oL8MsimJpnn9900SrTjlDlqdXSEUuxd558Jp4QuUaP%2FcTl2RGJL1tc%2FsvpROcqjMMN66zr8GOqUBQIdG9un0gOmKrUKSl1JoCdI%2BZdXsmhLk8iBovhOwHBwJVXu%2Bha1%2Fk4Um%2FC1DfCRXkUMXvKPmG%2FKynSBD%2FYDWed7RugBEU%2FdmUn0574I%2B2W11fXbby7UhCXTB%2B78PdY9D8%2Bhal%2FpgqRWgcZ1twoLA%2FVcTNxz2BQ%2B%2FtJTOLlswdAe9Wi9%2BppUhVWj7BE7eKXB%2FNW6M0Nt3SiHEHwGGbOTBMqpd2DOy&X-Amz-Signature=727ea3d27537bfe875b1a83cd4f1aeea5157e7d769ed63a63e2500f4f8138c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
