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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W345JFCR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd17wbeBAX2j5rvvRkafu2CBEn8leRLmsVEKcccmGqVAiEAtULuHVujka1IIg2r9Ub4MvKf14juETqxkvhzTOU7gR0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOT5f1q6HGT4debLRCrcA4j3EjMcNdYWzqWQDcdcwEblXLrwZWyjgHBx4wob4cU%2Bb1yhXe58Hy76lfq%2F3MgSPhnajLrskDc%2F87206R3YAgkMIFXY%2FclVk7Wc%2FNkomE6IZ2TCJ3tB4vmg%2FnqHIuJn4dUpCvnnhwvcm%2B66c7TemX%2F1g8VQRma%2F7ZWGTCiQgS0DcwICdWsZ9ysYxc8mRCRLt0QrfS5%2BJONh8sVQlhwnNBDwDCv4ZNjh3vl47FZqYT868y6ELW33pPbj2XBhT%2BAEchEnm%2B1sysTA%2Bxeoc74esUBEWQQXDMDSjDIT1wMQbHIUCLbMayJ5Y79Ci9PnoFgq1OecnGLCxme%2FeM4lqOurscq07DiabMHvf4%2F0lBu1ETQiPLXn24w3l8i0a%2FAaj%2FvzccCfvm9DeSoHmjep8epVVmtjizd7HOySltY%2FJvz2jcySUsWnmI6R90z%2Fu%2FyqRR2ugnNDaLWh0oQn03iT4bv3kcJQXZ7MJDayJ9CgWH1f5Gdg0T87RKC%2Fm98kZQ46drafHkltR7YgEdKHxnea5HWe0wJ3VTO0U8jSSClDPQTvpYD2f%2BfS0ofwdfePnjIsA0rXPgvc0DEkZ9G%2BgcFQ2j%2BN1jerVou03oNTUfKJf2vVWVPXs%2B091f2JJmdwysquMK%2BMuMAGOqUB93O4X4aoHmnELyzjQAn%2Fca7uIRVk8mubq0kLSTMMPigrhb1EmPuXmmedTEnsmN1LR3DyN2rhbK%2B3poBaoaHCSEU3tRfRoUxY6AX83yPN%2BjJpw52moWzIZy4dVnYXdnuNzM0sCVqCt9XZaOtybFpoIkP93l0CAwOqpRNwDOGyWIkL6AWx0q4QCUvsAGcQv77%2FaMoTvDokHx6fDDdG7C1f5na%2B%2FdUo&X-Amz-Signature=963322b8534f0e902bb416a12634a4fe2460f436757df8c032563b79cb4c4fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
