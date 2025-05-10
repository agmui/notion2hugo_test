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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6AWQICR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPStBMCnDcMLfHvP0eoYc%2F1NG%2BFbM%2BuaCcb4YrIdPozAiAxYtKfW1uusJB9tidRV4ojgbGSJdmo%2BZx1pPhtDxx%2FNyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM49XuDHwRU7%2FmNu%2BKKtwDbPEUSFRp6MHXy7DkOH%2FWNQ8Q4R2N75ZtJkE1mxOCCE8Y2VTBJzRfQHg66WdvxoEkhdeKkP0tnxGwllcAWFeoKrPsqBzfRJuUGzptm3AhOS%2B9rWP5tgKQ%2BPFom7lalWflN19rfBBSDxygdVKsmNMKimeGFUsV5z6fEI%2BOJEeVusAwOvypUZN6DskWAs8i7B8eJIQS53mHitw0R57FI6K1VUmlWtmg%2Fr5ef5INo2VWViTTDbizOXNwlKZz3b634BGNM%2BW8GXN6pbb4yieUOhToGRkuqYw8TL65rRKxQ%2BRxoNoEJ2VAtgLorx%2B2vSPe2tM2q%2BxIY5YzjYbYZxa3rG6kmY69BtxV5ld0HLKLsSix9P%2FXKbwtsZKS%2FC6uwAjUatSzpRnZT0gxiCRJpio8lShtv%2BXCM9rw8m7swxnBBXjIiJDPScuDJZibM7DzPOjoel08DfyWPJy8jcoxoeOlVW0EDxtki8iRKMe2Y9ibBpLl2ltobCvoIyZTIX1HjjJefE9luFeARvNaeVaZ%2BaZ78atCIo9zAH8Byt4o%2FsjqQxt7ex5Hg9Z6FQTkrxE8wlsGiXeVvEBFzt1MfgzJssWp9JVY4qsyrL01a87vvBonp2tg55r1piQMwMqdRoYEr0kwz%2Bv6wAY6pgG3ajAYuPqzobkQLAa5AeSVAcitZjf0RvxXydlx0%2FZ2LCNPYhvkiWP1oOxRO0PaV8tOMuOlh%2FelPZgaE7ZA23lhxp5hauNbGkG1V76wGJN0rdGxr2zzcwoCwIitK45XZDSwqBGyzRajoxy0lmeF90A0m3hG3zQpOk%2FgZS91PdXLpEvR4hSZYeITgsYY2Zt6WxsiUDat2p1DDKRHqc4dGlC5Gx%2F7VH7r&X-Amz-Signature=b8f080cea92f80d586a1dde2a92e03ed30e928008c773da8b2996d34ea19b81d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
