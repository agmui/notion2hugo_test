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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7GWSAN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDh%2FYskamY5BLcKxrrnWAco0lT3DYxECwyyCz1I6%2FPp2AIgXQY9PSDyHswKlzi2mA8vY6eARI6Qom%2BplwzO%2FESX70Uq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOGAl%2FmtLVC8Z45GeyrcA61JDPDIxbuwSDokgUgP5SrIqnAmGYjOrqPqJQPRqZ1qQUL0F6z5HrKGEP5xUZHv7nDlw4uirdBBCxSEzUPJx1Yflg%2BhAkqlfNg9f1deLyH5A37DsS95UUf%2FuEgApJTnX5ERzb%2F9rjPejjqL0W9Z1cPnfOh%2BeB6gMicv3n2K88E6CBbgJJ1h7mOgvrZcmun3aX6s%2BkujiEhs90ZMm9NjFCBDooKDs6QYJI2NMinK%2BCWJIzyVsUKxiTKoj37PArWaTRZ3YAcnB8SPtS%2BRq%2FNKadepd9syya8caAJ6Nei3s%2Bkr%2BbG5%2FQkKqHZ%2FB3XIY0geu3BYewLl3qL7DmEuNXEnwMydR4KqSp6lJvbmIMiFhz0fVK28obtZiBsILBjSOpsJmkmAbAV40mYkC90OqQwkoezg8f8c3FCpJZAhQtm3kprDoetii%2FCb0tObJ3a0runTC4XSo5j5Hl2mb3Cdhqn5hHZLgJ1I1bsSsd8ZTjtVWKn9KyhhMIKUiGaZcek5hVygUiTK7IorGecuuH6N5IWYjy%2BZuDoN%2BKuZoQg%2Bueryoa8V%2F9QQ26sNTrHto36Rw4mmYIm9mrKQ8S1Q9VehQCMOxRPLl0pVqOu164bmxSlVQj6gktigKgNZTbbCTDaOMN6H08MGOqUBqVmu9JUYGPJ1nEQFWtC2%2FUfleGIyHQqmBxaeqCVvugI%2BV9%2FAhZa8nZ2Zc7vO8Mi6gQcx8iB32amfdMC4o%2FBsRfD%2Br9fR913IrR2lMaASKOGmNmgKDuDPXBpduFQC7kis1o457ADjBBPOst0P%2FPXzmTa%2Bgi4Q1LiKLpn67g2HIbESH8Zy9mdGi3d%2BGosssRZsK%2FIOa7BO7qAh3gZx50Xh8JiZ6c6d&X-Amz-Signature=e76d593023a417554f944ab15d17ea50dd9fa509cc8d61b7dc324e11b8a93c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
