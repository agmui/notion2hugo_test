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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T67BADMA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDxmZMaFSrwEg9Eycn67xpMk71ZraqqUm2AVS0gcPp34AiEAsG9bsrYyINqDk0JXot4L2ZPPF%2FrabBtnhMWrlE8G2bEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNwzCoEtm8FgiedTxyrcA3vNcmM6y%2FzYevXrk8zS77Chyyc6HpWyGjErWUvwdu4BmKzc3WXReXfNk6kvaiHxh1pdFrQoTM7eTbIXql2qLtMZ%2FAWNGGb9cpp96nsfhrDWga6a5Ij3T5HkNS1q4S5SfhoX00RlP%2FeugVMLK486Tn3%2FP4Sre2R42NkT0IG3bgVcvFO9701CwUd%2BEp6S8XzKDqaiwW1vyhQCsu%2FzftoIToWLykRd69H9Jd3OPtfiCv6U4qJWfIOr%2FGJcoXkvDSKQvwwslY3%2BPmcjfMvhFtWH%2FvuHDkE%2BU56i25qsRmVflfpzraCKRB9C18j%2BW8kNjIhiXkxklQnaQRZ1%2FKBdSQS%2FfKbeBfHF5OFw%2BcUPvJF5lOhLgNwYnvsMbnJ4%2BJiH9kZZeT7vb2mFrvwuBjslbVSTA4goSMcsPVtYGoMtzP9JvDtkS5jRTD9jw0ulEOD3Ks3VOSAellCZD5pUg%2BwGmRQ99sUkex2dVK7J2a9v1o0%2BK7EySvFdHRGr6coSkif5QQuuLSerbpNjbtXFXNVU5yIajcm4Tn7xur6bdJCpKiS88NgfYDKt4V%2FFMhFO4NXXAgjL%2Fm0eN3yma5osPDzZfzamcyLDCFqWI7WShnXF38V9ZLjTsTtwIlqAvEqUaUOEMNrkjb0GOqUBrBWGl%2Bbq5098sjcfbFKYOFT266sb6QliTK%2Fsh3aKUjTtmVKoNVIGTEKn%2Fb3d4RE1q36Ns%2FT3ywLg0fi46%2B%2FP%2FNpqpsfOi9AaV9tufjW5m0pzXCIY8OiROArpKtNq4cslNZMDl7aP5mJnJvvRdooAoLKBGIE3f3UYWbk8KirTHIWdYbPU8sM6S1iSokdeSTOG7xmiNPNnCa4yaOAtqrbOqtoMp6IP&X-Amz-Signature=711f7bd4c3d6d5f05321c7acca6ca15bb65ad732aefbc88a7d652046f0d487a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
