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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DUJUITO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCNH0NWyph8uO0rJa4mLdanhRQtDz9ZXq%2Fd1MAlacUoLgIhAJXCCSMv6hZXfjioVnr7eoITl0wl7vh5HWK4%2BEdxEizWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtVOqO6xCU6EPbB6Eq3AMUkOXY0WFKNkxyB35UCxBmWtlVifDtddDtODzwdasuKen5A3GgwfVu6E1s7b2LMbRYqjU%2FyZPCa8QA9YMF73tiouu3n9%2BmH1m3V0LjmIAhcN7rO9MbWLqbPBM2W4e6Di4LWZ79RnEX7Dk3BhnvZv1NApk9bmayRuj%2BbkMLEabN1jGHE1bnga%2Fp0xSKeCPb2BwvoZO8jCISKYcisFvEn4iI5MCM7YPC6FwTvU6MqYOF3FyezHs0dTsakrAkJlkxbpzsSh44P2ZI09hmyhBuJHXe0qB1ZlWtTTLxcQt1gaMGegO3mFgptf1StC0%2Bn23S9bZ4MAFtqmCIMOrZbzqT9SJkxp0s%2BEli%2BPFbYjkIBcreJ%2FA%2F4TIIW2yOguF%2BPHMPrbvdhZ52%2FD00DypksQAvg1Ly7%2F4ZxG6oYdfbeRw6e%2FpGP2%2FAKxovuN13rWpvte%2B3Dcg7g7LEWlMek7Zu%2BtGMJ%2FLQDV6TMLDEd%2FN9WKWQlpEChRgJwJg80eU9imHdsVw6zetNgDVRr3KPQfs0tncunFE5FMg%2BUd5CIOGgrgG%2F96b3TKYrOAc8ygjzmeD5Yd33FO54i7E0GPEUorlyBddyesDtGxJ0trDZptFdGkrlB%2FxPca3rcMnQr%2F6u5GLcPzD6xorBBjqkAbRMA3Uo288jkYW6wrkiOTWjnybF7JVXTw2pxqbiRkDs7Kc5jWyhXwxMlUw7r01W8hIIkxfmTCcoxCQzxQKVmslc6wI2yABh42OkSrQiLn0DrYbBTx9wGfNmNoy8upwgI6wNy11WNBvAneGC749iBQ1QMzIfGci9VCB%2B%2FNyxl7%2B9wPUToJdwBm3VmOD7PyxdNX6eH8I7ItZDl26UNswcgbHQUlyd&X-Amz-Signature=5eb5e7e46101bd60102778f356cbcf583f4df10f83e656ccc2d0a099349ae8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
