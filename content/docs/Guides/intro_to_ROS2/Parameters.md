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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ENEX5AJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHTtNDMv9KfNblUFiihIZi1k7XHNjnXC%2FAwBwc%2B%2F3U0SAiEA74Uxc7B3u%2BAn3yyI5mZQHeSmrCEHGr8Bzza%2FnOqyqPEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKT23ZIIowLbjNBEFircA%2BYC6fnmomoS8ZqNJ8vbFG3Yf4PsZnr%2BxR7xXKs31sX4azrqkRlTnvpgdrFvmBEIxXBBlSDQ6wXEMv0II2xhzbx6k7RqLU%2Fw3KDvKk3A1zlpbU8TBF%2BcFR87ymvBDe1j%2B27x3VvDR4x%2FHRhKlaXEbMgkYW8SqXZIRG81lzFMUopNyxO5oDCGQ0AHZyvzp2WxeubGYVGfrXnhMunypu8GdDHPVOhF4x7VHrX0vVb%2Bvh3%2FDYLEiYk825OnTGAaoQiRb%2FHP00eND2kptlMus%2Bs%2FFGAlCt6EdKUdf6dh17ViS41KHvMpP6gKlcQ7s2j7tKQCW6WpmH2pO3zW276%2BQCrcqPXh6elsA%2BH4%2BS71cGB5TqEG3FJ4IWD%2ByMjid7qDYVkR%2BXJCnXRAHqDMFsze9p9UZWSD%2FFN9StNWC0um1r5mV2WewUoI%2Fqlzy66Cygk99praeqrWCP7yhJbmj2Wfv%2F4ImO5itT6RTaNR6zMIHj5vhWvBH%2BoiW2Rxwg2cq3kzGczTy9nAPVFf3DOkD0yJSB%2BFEUrDIvLXvoQZKGAdGgg2lYWkqt4v8%2B96r5pElIbzQbzcgAfe6nZJ2EwuFrLnyYobr7C8yR27E33gw4MSqeROJfx4lOF%2BVfJNBZFpF4sgMNXsr78GOqUBlRInS5GG4vojKWTMUNYqdTucTLtVrAwxWbEL%2BVRESxMAqV8moxjQf8%2Bik44tXpF7QDt58FaeqLzae9%2Br94Wpz2iHUoS2kr5NZgFJHxiUL%2FUPQYCTpmIMtt4mE4WdoXHVD1fPOb9oNrPnKM5Z9vOeoSZLOGNpBDc7jg0F5T3tLbli5TEDglMV%2Bv4KYlj7rzhViLL4D%2Fm4d1BRMzuJXnbrv8ToauDN&X-Amz-Signature=99df503f9c57cf0b0a70286bd3c1210417703f4fbc247e2f3613909fbd2ffe22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
