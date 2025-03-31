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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUGF7VL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBXv0OnllpIQtWeCGfLWDtCrKhxjL%2BCad%2BD11iv7eef6AiBOUBSEy2NffPD7EKiczEI3XlnI5Lv3Wrt%2Bb%2Fn60RMNYCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LPrWxjkQi%2BhAMk3KtwDBPjqjKWpYvdpdrdf%2BOXgDWFhMwWlCPpL8nLSHo2zCOpvzsM1sEL%2F0ZJSyxwJZAjJ7REkztEemVefSdt1etr5IAr%2FAkqqF1t74sh4CwViJXZK1ZenULDNE6PMILzummzbakTs%2B5MSPUdeVWoKc1vT4S9VIm1%2Fr8ypOfMKiMqv%2Fs1YVPH3ef5m24lxQRFQvBcsbSIOC9srz42Wm%2B1Ir%2Bvof%2Bkjh56QEhUK4PNempiU2KcpedBQwmzlFNvOeuBn9XuGdZaNZw7earJ4gW%2BAgc9ucnwvQRBeKBwjcLZJ8CQeudLqqjYMPivcDk5K2G1unfNLOOR7tN5CEIcnY%2Fi0lpUz6EwY9U8SRpz8urSm4%2FNnNr53Pms3%2BHmc59QJTS4l0873sC3pPYyz1esnwtk%2BtYnFFwjjcPvym7hValIoiKIhN2hB0Oekk9G0cGLL9JRoTWdh4itoPJPBjYXgW3R5GpmOLu7ZcHiSTpuCQwmk1wJG4oyeexw8pvyMZjcXmJWvkMao8eBtnQ88gqW1%2BfO7XXBuena8YHta%2BHMyIriYrCtgMm63L8YDEep1FAAQ4YUWinJclUzWRp%2FknU8Zw%2BaCEcX7ix%2Fnvn8ZgjSkWtwbUdaBCwRjPBnZn4zOIw9uQa4wneWovwY6pgFpYbJuDst%2Be32bnvDXFLkVj9ZwGPno6iV%2FDtJrgWFgRKUSh1zIElhDhChha%2Bqox3RbaOCuX55VOHtqOKwYwebgc5cank5nptLj1mT2clJmu4FTgqgVaBZyFU09rHmJudqBaKCzJrwJaXokiVnD8T08GYUUoZdJKH2gzcRZTAPHbLx52PzQtQinuPpTfOmyXvR6f29a8jOYPqFKndX8DoJgXmMujTWN&X-Amz-Signature=99d619587219cb3ef0147c58fa74661d81f4ed06926a8384a918b5eb03440b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
