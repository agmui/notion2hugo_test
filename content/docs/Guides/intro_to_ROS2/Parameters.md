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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647YWGV47%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGSOWjTjyP5ypznnHG4SNwbrvU2Yh7vefq6bnSFhSMySAiEAymV0eqVSiZGOAtEZH4i2qpEcy9hj5oARdoKy6%2FevPSUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKYOEMyAfBC8QpoiLyrcA%2FTOkRhpOTrRpPVco72W6bwPOW4K70BlMVQN1wW5OyZsIkt3Y0EP25YgHEGHW7FnhTsFfzcmThF0sOmHfL3p3mGjkKvtMiGED4rU7vg%2BkEHQsDs%2FqBWBBvOBsXgPcl%2BqL5HIMu7WzQVZsur%2FLzH2o2VlKv09tC1Ib63Q8q%2Fl5LTEV5XfkopO76d2fEvInpTWfe2JOMYAzOlT7%2FTJlj1LvvFluZQCF%2Fd8%2FHSEfBh5haak0MqRoAfZ20m%2FS0TF%2FP2WPSR1KF6ODAKaFzFiHWAPeY4zUtSBoHSGZH%2FXXvOgmC%2BnJBxo%2B2ktK5Ldl1FH9xHAU1c8FQaOdVxL3N%2FBWhgk%2Bu%2F3GOF1XHLWpx88HKi7bxe7ELIdnP7czGFdVYXqTgVfvtO%2BAQtonwEUKZQz6SryZhdM5K4To%2FpEi6xGszm7Ou%2B8xZgGN1UUo%2FnB5sig6JOIUmpc6Q0%2BET6AuPxCCUJTK1fW8LMDPrmyVPr6I50VzZ%2FdlbPm0L5mtajUkQAA7AWJCLyeMbP3x%2Bcj3Rrd1zt2kEp3dq52l9sBasyMotvaesJLAAp1mBTJNhKfU6OKBsn4%2F3fuJ8kHssHg5ChbfBEq6OMj1pg7BVlPYOYRgVIiwHUL1K4EG045%2Fgi37Op%2FMN6A%2Fr0GOqUBtSF8hY0wPO9YB9uveeH9kljVqbVhs8mbP6OFRhdBadUqzrUGOzYvPPJcEaCPcIl%2FqJUpxEicOemFm6yJnn1KseSmhWG9Am6NO8bgS3B2aZc19e6G0L9ZY%2Bv69HYmycUsTN5%2FbytA19fvquktDK1lKALljAh0L1sPRbjRJV%2FAwVM%2BCkTaGGqJ4MQJhR01GH13EkXBHb6VmTLuQ3VdRsGghvurRzSU&X-Amz-Signature=0f9df9e0c6c49b0677995ef1b2ed0978248e2ee5315fdf9b57db6129108373d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
