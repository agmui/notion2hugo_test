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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STBHXXLX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCKeV94DjeGWu%2BWHeOAtdljTWaX0BcOBC9FKUhPiOhjgAIhAJy8yKk%2BIV5JmErr1ryc%2BU4hD3sYy4ArD0r8N%2B1g1n%2F0Kv8DCFoQABoMNjM3NDIzMTgzODA1Igzp9BBE3j%2Fp80xH5Osq3AMoiGrBa%2BoA1pqrB60eIVwt0fhP3Qyn5l9Ym3ibr8nviLCw1uRID5pkG%2BMmKAugiYCrn20nQzssjvK2EhSQE3L%2BcmtJn7LBd5V1WbuUl4DjyPSspHVZ%2FC9uxwfukft7Nr1kXrc%2FiVi8tkEfA1hEcRqXdgm6F%2FsZNrbIjjuJ5h%2B3YDp0rpSo67YTn7Y2VwyreO7NBcWoC81OjLojRxvcyT4LxZ50EO6igCyR3Dom8bQs9GQ1%2BCtKQxXzbOKtkYfzVXufkSjKUDPh9A7rURIfNMqxw6ZFLJOO296cgiGM%2BIiTaapiLZ10q2iempeqwH23fLOvxmZZJ4wCNgjXgvPWlzr%2BIzlV%2FyOwsb%2BsmoJr49HcB3kzeONJCoA5dCnkH5t88TBhcyjERSRv7oaZ5sNoyY10%2FQLBOwaHOjGRJ5ooNVHtvtuXoijFwH2idQc%2BN4p1lqTwu1qQQyt0M9K%2Fozzk8j0cnWv32QUnzxZ74fhKCMwpE8m9p5ueCltoKNHDOwrAOyJZ3Ox7C4c9aKSPBVW4Xd0ZNyAX%2FWlg7BRAZMPQP1KAjF9dp4kLrH8wS1i5mnE8x6phu8MgWY74TjNgqQr23o%2Bcs8PmZHsBQ3UopV9n4iopkbtBWoz%2BP9bjdZ2SITDI9uS%2BBjqkAQ1wUO3NElbCauP%2BORrox6l2bGdPacsA7j62dA%2BkFJs0xua%2FRAClGftS%2Feai%2FIhfcWTSPi47xiLHDhqNF4piaiHFmh1khQtrO%2FQ8gaBvkFkQJrluQa4ufD%2BnZx2evceXVMK8I1OKqEE3fNZ6U3IXgVJ%2B0%2B2lJkpNdC1s4UkpmqmzSwPo%2FAH9wikz7eBbWp%2FvJAipe59m1jAi7ZF%2Biu5rHRRt37Vl&X-Amz-Signature=f21800892d81ddd6980c3f887cf60b51916e2a7c5a0bbc1690a8f20be8297e14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
