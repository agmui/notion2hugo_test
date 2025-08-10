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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINUGIRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoZbUBofWyHC1125YA7K9G6oC%2FNt5SgB71oohV4%2F7tVAIhAMHgGe%2BS8UEuzw5kvtsPmrCUTHxFRitSpi6U8V%2FlGfqsKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5ZIRRaX3Pu6sl5Cwq3AO6CVxT6SnZp3a8YzdC1%2FRObQyDOsGlieXrZzFcVtTrPpvSWHjkH6vVWEqrxWJY7OA6dx%2BDZqavnuWubmIxJXMFdlgSnFjzofuxGa%2FMa6ZHlElykcrt5a%2FOaPyacxg1Tc32VRTxm4tVk1CiW7DLVoFxqgTxDyaCquj7M522OU5%2BIgxQqpmXvDyXLeba8Jo4gjXnpo%2Fisz10Oruu0zs%2BXtKbML03bcyAyRYwyVPWTADkPS9WV%2ByW%2BYjW%2FtnKP7MP1VEEQPZgLx3u6%2BdOiB3OhjRc%2F5B9nOg2FG%2FG7MAFzPkLO%2BqsMc4zbkkjDo0fDPMfadRaRHiGMbw6S8ZtVea%2FYppho10iWCY7KydhAIH%2BTzHiuvVaxeB7OPot4mq%2FlPCc1RKqafqO8eBXKsJuwChQtfZHwoG%2BgOBL%2BDqEBTdp%2BnYkcy7pvWyjqkppLCTX0GWoSDefPf3OnQw0QqtxS0LHy0tb%2FYJhBo8ZtGJgAMWQ2FfdptfH6M1liCadTOHTRgdzJcXEDuIss3l8kp3PCbCfMSOx904IrK5i30k3va6TUXkvBfYQT9X5oF4lC8mdWzMb%2FgBFRIapabTnNaerE0FfVpLPVjQ55gyam63EWTM5kwXBh70HuEz8svfS5J9SZTC7uuPEBjqkAc95%2BnPECPKWAS2TjiLIHXm39z7QXxKnizprHjwRg13SIlVG5LENxqlzd7wh3Ol9ksOIQsv4bpjm7OHp7ojk15pxCujmQsQ%2B099DuFojLe6SM8mE2fMp6h%2Bm%2BSDPKw5lo%2Fv%2F6OxKCipN7aEFpWB%2B7N6rxsp8Na3ZjWCD4yh%2FuIfXvJOGt%2F98J7Z89uj%2Bhy4AP%2F%2FJUNWWUUZZ2sXvgOlzDm7ulPjl&X-Amz-Signature=45a50b64c642929bc255ad1b83333d404c45d7003536cd1a9b45e24c131eb8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
