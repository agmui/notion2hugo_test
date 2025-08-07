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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUYMZP2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH%2FmrTHFdH0vGvh%2BfYYsuHHecjMD8xdYD6x6rtwMZc8WAiAs0wX0qDisuTgqJF7dFScg%2Bx7CMK69tirUnvJP6t0qICqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6xSomMV2iOhUYSiKtwDlg0A%2F%2BqAwX71dBw3BzgFX27iBhHEKGi%2BPjQwEWJaKTVmR8PDAnrZFfMcN7Eoj6qbgKhfpSbHS6ksopYBhM%2BovOgSSq47ABgWb2jryLKjpacLiNixY21Ct1LvSXumV1XVsQ56xI7a1CVHb%2FjrP7o%2B3eYQ9%2B3QK%2FzM%2B1YWRn%2FEi1kOC3RqcPmUMU1SBQqmnBlzDgmVgzrlSvyQZZpdm%2FYQ12qPr6WC%2B98RM8GUn8l0fIt9HGYISKo39gJGkx0x8EVlLdMQEw%2F3%2BCIrSR%2F2jeTnwlFDa4wVfP0iKSESjnz%2BjIdyEmjvd6AiBaNZHt9t%2Bp31jU9zp2WJQ8A7t6%2F8If9JXk8ws0DqpXmfnRHNaURoNfI%2FGUgbwuDTN29sVRJIckBzjrAp1T4AEb3KT%2F8cAGnc7QdZDIRJakwVn1iTAI7Y8PNvZVXqbTLvwmbv5CMcTQc%2FcESqvxR4igi0tMTuCOWK4h6Dou%2BgoA5HMxjrxvJnN9yJ%2BEIO2QBEsmwVZEtteYmrNVRwj1sNqwMvNRMs5206%2BeDKgWfepy4wyByMimct%2BC25XgbaNl0A0TIsV7n08bOPyYjXjCCVlbAIvrJ9%2FgmgXchqYvSTyPH7ynh6Ct8y7fGkVJrmi4xVSzCKHkkwusrTxAY6pgG9Dko%2BSR96tyNdV7%2BUwYujv2MyL0%2F1vc3Z1IP84o6ZiINO4ETrGumguZoQZealbY2k7XmS5nOrw8vkvtMA%2B126vz6fV8vY%2BlXfIlVdnu%2FKoMKztsDm9sPkdXn5iCySkZQbXUx3JAzWt9tb4%2F2naaAof24BYqIWZDSiwRtAKgWHxpS5MB7Z99NdOdNO8dBa6qeIKX%2FmFxGkpU72dmNQeb8u%2FZlM1EBX&X-Amz-Signature=67c8532c56c30853ce0fc1f7a02bebdc4a0ac83f2e2a731b1b880e07039a987c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
