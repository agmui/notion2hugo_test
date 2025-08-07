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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EZ5PF6J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGbWytFB7GXezUZicx%2Fpz9r6ezmysfkevX65wmhzITaLAiEAqBgkK8W6Fhf8M24b%2BURBiZq960O0%2BLQm1REG7kDKLkwqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8uJ6OEUzDPskRaRyrcAy%2F3V5eOH6PpglKG%2BD6zmfcG9Whliz74PqEWoWlV4LC16QNgmUlOhowP9q5tCmhI3o4XNrdTHP6CdNbayKLtfhWlWnX1T1bnc1M0DlVemXc%2BPLwTc6Cafv%2FROcBQhcG%2BZqnFNSKDPbDvjSqL%2BbSdxZJKsiC%2F21G%2BsmXSSlBnynM0haV03zcpI1yhdhkE8rwATZLxQ84dwwu6vWQnvx%2BszDXCKBLwPG9p%2Bh%2BNccPPNUEsvTIJXjAz0K4tRTUYmOLiXM%2Fr3PJ64DBfTRqOJ3QtTywfaDFwXCE0Wz845Jnsge%2BPX2fPgH%2FDRoBlkk0hnix0%2FD03q2PIbqxty2y6%2FPf8SRLrVmKjoljf2CI%2BamhnmDvHLLTCTcXzVRk5MhXXbSkQPeef%2BQrXq5IPQ5cELmdO6PDk3lEH8mhaC%2FOG0bZTStY%2BfQkWzaXXeaIOzjtS2Zz7YLiml%2BXuk8j%2BA9kaMGzFT93YVTzlSOZqdXv4Elx3XFC3iERsgjUkZUHrmgu0y8xEQpXeItY77HZI%2Bz6ns2qTBFLQ0gobTWXFhpDT%2FZBeI3OAxumstzRMy8XlK%2BWpLpWaE1xzz%2BHUWVycsto0kJmTViII6E%2FoKTePXRlA%2BoYqT78RAPRdYNa6EcW7C9kKMJqi08QGOqUBBJPrvSbb%2BNYDbMTyW7ukuUvw%2FO3uTFRp1dbwmS6RqFQhS4c18x2KPMDbOLNPi3LN1kCbqkM6wvBVqcDrBj9HwkwCvD%2F%2FeBxkE1NaGhCy6s7H5mrahfTbvhzZ3OBwRAqNjyzPwRK8KGA%2B2deAG52N9PXn%2FFLtumfINICL9Mc94A8Uy5fcbUQbXNIES%2F0rZRNAXeevYk1ozkhXQEIBHVrtMsAlxsRr&X-Amz-Signature=52ddb09a3f9bee799f42535e7dea7786675dfe66aed7af48932355b18f8ddc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
