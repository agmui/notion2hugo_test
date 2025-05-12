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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2WP6ETG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDU7SFDF%2FY0lcFx7gGHvg3GZwUEtDgIDDW5s0JRfSrdOAIgYItsXrxQSgSoqPkzFKJj%2FpKTqqC2lDsqIjpK0lLB1lQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJf9htM0x8thitDjCrcA9bT0f8dRgHIzzWav9ZkVXsjhfm4wITMO7LhPs7bNwmLSRMv01lxQikWaBLYV8ENmshj1TpCWU%2BFtyuuqagBYnVGf%2BVs1mPx8SEwTV7mIsSZd7VC4PwVj7lZDWwdO%2BcPH3TTjb7MkvCicwR6EC8vZ2Z5sLercPHwKeJG9iwjWeuDP6%2Bo23oWv7t4vUAWgIg%2FJNwUAim2qYefz185rpRRkcCW39okCCsBKY6IX5WjHr9dBWidxjFMYhcUCxM%2BUDYlDoxXPAhAUmkPcZzI3QdAQkerwo2s28CXC7YFfDrJr2qaGTuhU4aSHeyZTi1OBiBqlvT9Nfj0veSkvyMij8dZgiwkj0xlrUKnZO4py7vdJTmaLn1ilFMR7Dm6cdyLW4A7Ia3lyc2LrZLd%2FW7fohqSGbuZctL2yG%2BDaH2ly3bFUtgIj2dU5H%2Fw018bJ0aryT68QoQjsmMgMNoq6nEL%2FAs5s5t2sgy9PxDrgwvMysNSaqboSUjE3dt4O2M3UrmHBYmN%2F6s%2BohXn4NEwJ9K9YOCAobFfg%2By1UlDdfkna95mpz1yHGh1KHhmL1UvgSu4BuGJfKmU%2BNN143L8wiq8vm7KoJWnQTF6uEauR2XYAMQu5iA3h57QqlDVbNc2ZutpmMKnZiMEGOqUBTcMUrEGpo17Dn3NvlN2EVkZ4gya27DeYAnJM%2ByqSzzclItyk6U7JeCMW3DG8axjGCZ6ZlmDikBATtLNqbnnmAb1dMbWZuqTmutX2WenMe6JaD1vzRobWTrhiBqxmptks88khVXA5npLDzum2egc3Oubjc%2FZs7pyEiRiTAKy5gvUTSI%2FNUB5UPkdHgPjZNE0tkGQNmNvaZooXnkhFmEyXxHp7aR5K&X-Amz-Signature=41fe57e4219fea3f04d4e5a2253a0fbd700a1ac02aaf540e64a1305a7b47ab0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
