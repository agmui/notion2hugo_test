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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDBWYKM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg0WSRM99VI30X7ztyU3cMTzCETmKFK2xA4azDbgne3AiEA%2FHcj6Olqe43amSTcWSv7hkIhpY1NefSJsJXv8b5lpmwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBfiHhpS9MiD0xg5dSrcA1ymBzUqAWEbMt3bQjZX%2B6XXiNko8YiGA0n%2BqMQypbDlW1JkMcy3btYKRhlIR6mpUa3TGlaTCn1Hj8UchnDkEW%2F8ZBrsURPlS4jmL%2F3fPwKbMgTb7O7osCrpQYOwp7emA0%2FG2USi61mNck%2Fk2I7lo9jef6l7BFEDVWVGoO7t5pZYTq8NOySU0FAQafp22JQz%2FrZN7r1Scl4VwpNYKWWZGuwsR0PBFKcILv7dwH%2FfRVbE%2BC2qt07E7DxtCTWyUobY4s5ccFAiqYPQSD28FJC5pOvDqR11zNDPM17624EzpnQ6Hw7I%2Fl7U7%2FoWxhiKnKZ3bbzi8yBn3z94BFRzx2JBtuvpBMy94VmeHm0JHeYhJad6q9pCUNs2Wc%2BpYtGDScCXxAG7g11Wl%2Fd99qoLNq9B4odT0%2FG2iTF3y%2FuE6kQSWVGK4MdAEMf%2BmqJqHELagG%2B1kdaEQSsaOjIDekhBMzLbrFxYxGr1ha9wMaLPGLS51LsAXoCAVbYFIKMr2OJn8XYLD27QOeMGlR%2FFFAOf1zD7YNa5GEGtRCSotWJhp6wJxzCy68YSMqMqfBeh%2BOoLLhjD7nYX%2BJojx7QWYMhudtAn%2F4Bt8KYhQmQJnoKC6rheBu8UAFjEsM9hPBQ7z5MiMJbRmr8GOqUBdDbwhjwiMEaDOKGD1DzWOvP28A3rlr7POMAIkAqc%2BwzORToCnWHsYt58UT8YvNJeTLQtQxizbqy9kGRRjPcFMDu3o0qzz7TJIJ9xgp27uOFjW%2BHZ7IbN%2BZ5d6cyW5BYP%2FrvbMUrlkdT3zD4cCPQOHAaX1GvLthaysWkggrhc390aQezIngy3PQ0CpbZtZfP0LzR42gzhOs4y9MgAj66z8XsgJ7gA&X-Amz-Signature=3565d6c1725005e9d1fcdba2db99c858c2623072398e8288f944c63c73a6286f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
