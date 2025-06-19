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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKCKYKR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7OCH%2BTPqpEJvmgQusgHrcPx3ia6MKP4jdbYlqUncVdQIgQKHnQ2RvXpdIO1ZmEEep4Ek3HTDI7%2BalFj3lU7srBTkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjIY%2Fo6sP9fNKx0FircAxt8yVsUfyD%2Fxub4HtPyD9UuBe01MasdvI0O%2BzJAKZM4NkjA1%2FJXd2o4mH6KhkGNCS%2Bp6TPXfAGOZa5nwCLluLvCx36B%2BFcqKxWNNfJnMq%2BqL6CEt8hBgAKdZC7OOzPy%2BQELItQecruQ7ZZaK4U4ZW4rEZzUlghMbVn6WRjd%2BlSA3AIiMS3YCgRI6Q7SYNuoTckpTpVb%2Brc6yFLLt0smadh9N1mkhR621dCo2lZOE7MEHupeOgVWLJdKTPCe4GxcPKBVKncXSiLZnCVVwbErmJSfg7IK%2FXrtNkPme7xewfDkAmhdtaJ2MuVH5bVv8epw9E1Ry6i1q%2BdgdL2CBMxCDxlV715tWYDkTLxHTaC6GoO8%2BPl05BVbb9d4frzc6M99k6944z4AH14difkYxGoJup%2BexZpGIfy93%2BqnMQZLv9KBre1pqdJCH9vonFjT0r5gsi%2FViVmEiE1eFSvHH5DMrbhRAcZLA%2B0lLhyfAkSC8pvpfrEt1%2BLGfWWByjeP5dYRm%2FihUk60s7aBENYR0D4AGnx3gFivqTmFMfOvF072rB%2BX%2FrqQXON%2BUo%2BetIyd7nyG9j7omMAIB%2FGObUqJf88zZaUc%2FtvbPw6QvV4DaZ2nCFoMf%2FMq9%2BPy3zG2AU8ZMIWRz8IGOqUBAkP8UGrEUeDJlYiCDERVp3Z6yyLLXbJCos2soLk79tw3uZtAHgGL5lsipnF6F%2BKW1onYN2dIO6ZWBWZm1c8mqx4%2BvJOLtbYQBHsgyps9n%2FARPEaFhd6W9tZgWL0Z1rhuiGJKJGy3GEVssFWgr20O1QoyYgRCaOEfmefffSuyaDBUofZY3ginJZc8cfHMGs89rmQnf00uHB%2BpDWeZSIgWiO0FPpP8&X-Amz-Signature=d5e2e1481cabc24c73733b1b7d23740bd9a30f8dbafd050150f1dc71b14e56aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
