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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAVRZ42%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAFF2L3Am6mR%2BCcRXWmtv3hE0Ci9DFo97wzZnE9OP0jAAiEAq6Mij3nPBNSRkffz1v%2Bwmb9dGal5D%2F11zb4KCF6psI0q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDHCkJZ22ssWEQPIugircA8TJ%2BM0aKFpjYP62eiKfOn6l1HpeenIRV%2BG%2Fog1J2blm4oRw9Bon%2Br9jHjDVVuNnsygsq2bpeSwXLquBFeJMHvQgL1nt7qKxEp%2BEXZsT2dH%2BL%2FWUgn3lCdcqBt9O2ht4CN4y1DWqITtw9doXUCZGmIReYDBd6VPaYL9Wb6HxNcTZbnHOU92%2FUkljbIS9h8fblqsQkfjRFi8e0wguMq5V4r12hJxZtdQhjezvZ7Z0%2F3HC13IsoS%2FRya7cmHe%2BeJuZfrn3Ls0H3d4g2pmXCTl4zLMKdBSOJ7%2Fdq5dot2JvCz%2FBbwT2BUGJjHHl78NEARNSmzNkSUHNhv4%2Bcshg9QUAHZpHrTXkK2hsOD%2BmO%2BMkg6FlZ64y%2Fm4KRl1tsMupX%2F8FfuD2Muthx5lED8Vqxw%2BLR3mi1Blt%2F%2F20E6lj1gBeNWTbKXm8fykvJI060d49cS72DiaaUoIfg2Bq4rhd%2FE%2BHVFVsEavKAzsjKto4XXn39iq8FHo%2F%2FnXWowsmKNoqeRQsc9zBqJn7Pceh5VyGpF%2FhPuOo%2B0b1GYWUpPlITTsRdLqFmDPw%2FF4uscmvfPXrgHnNGoZ8qkr0u5x5McigCBkwTlzSMAVvwFX8ovCZTk4szFXZFWI19Lcwh3KSRbqjMP6D%2BcwGOqUBd%2B3FqrWor5NtrKwrI9QROxcoLq0hFdcsNcoZR77uqk6Srp26GEuHgf7mm5WBL%2F7fF9wcxAStOH081GAGB9gdo%2B%2BgYiz%2FWAQRvvwteBmjP6388UW21N5lyqBmPr50ehV4IFeB6J1DcfhEhlfyqyG0xci3N%2FFGls19sDO41EKKSl7dvxU%2FR8w%2Beoa57%2FZzFsd3%2BaSWfmX1C4W2CfM7X5VVmb%2FbZ4EM&X-Amz-Signature=ba2c41afdc91c344e77bde765a38af3e6f2a81ed1423e4a8a7c6152435bd00fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
