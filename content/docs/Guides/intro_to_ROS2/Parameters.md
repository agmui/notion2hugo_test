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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJFMNTU%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBHlHAI7mhFo%2BmQP0y11uIW8VLMbUMgDC7QY0Vi5dohyAiA3D5zV7%2Bx9Fv%2FeCegwQbQzhhUqmGIVwYSyoP%2F%2Bl%2B%2BwqSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMcFhgHwmIUW7Qu%2BQgKtwDlC1s1mE4sinMIqoux%2F5Dpjy1wT3WTN6EtN%2FZbRBNe3%2FIPyynFHiKNQvhfFvuTCFzACHzZjELOK5y8LUgbs6JFGvVbGWjpqEiWQtSCj%2Fwr8aa1ez3SJFNFJX7ZLQbmD%2B6hkx%2F64LbPxVwbbhEcy9MRL82etuIdOOKHPO2hOhAdvdipH1RMgBBg2D6vvLZI%2FTS1V1Eibuey%2Fbh%2FL2LGlDjMGC6H3yXsuenE6ee%2B5jLOlu76yF4wRK4P%2BZMPJPipPSMyeHjtmNjDuF8LHbAoFUVe1Ba8Tto2zwcE3dhrstVVL3hATYZ4JGo0jyapn6R5obxBZkG9e0DmOfLamr%2BrKqoAMxgSrpN85P2lE%2FABqmJtG6I5RiaHkIVSFA11C76aZVo83z6jcYiQQfXy23seM6YP6CMJ9HSxyK6Mn0hLYv11lmN7qOrk0LdbGPdpehJWiQCfLNvEBcc6lLT31tGDVShs7WtP5MbSPwyh%2FnsB%2BIwvOGbIWNgjhFIvggZK0KaLMLIeA61xOpMH1MIeD0cXmIe5w4spbDY7WYhU0414nOzGnRCQQcRvo3Sud3uz6GdgHf6r736edPEwCYPWjcXdt10gwAuNJMPpmlvHCsiXH6v69IZ8KRU0PlX16rWJuYw%2BfiEvQY6pgGs2vcMxNBgYS8uuxKIL9FL%2FVD1OURk3FQ6CMB%2BUeDsj0J2CiZYchCJVZOI1iRE3gy2QBYLJI%2BIqh6hIqiDngfzKKNB2IK0Z2YA0LdAhxp7GYRL2%2BZv6b7WNSHCtNfBiZrrMKeNMoMMTLyvigzH3QvaNwcrmcqhvrPBmh781bZKWCvoOvXaD%2FLUm5vDj%2BMBLxwkQ53YrDqaePaax5uxvpq%2BmmfTEqhS&X-Amz-Signature=8084410860c352f462bac9caa8901f08a567e4fa946e179f9468ff1335bb0e99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
