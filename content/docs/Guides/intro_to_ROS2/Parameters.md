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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ67M2IT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0JfyEF%2FWvuLa%2BlUZLkNPLjKNy7IM2KDnzE9mdSb5UAAiEAzvLqUg5WzsYV%2BtIzd59Nyu%2FUbGw2tDtC47W41xyTLYYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwzLhX2E7b3kFVVpyrcA0KNCMgUdPfTZH8PqgMziZh63ZRPZWPaRabrGWsx5eS2zv6Kjhr0i4%2FwtKYL5ZEyBo27gwefRmb%2FwXm5daTiuy5NAMUbBmoDMgtpmqm%2BD6asr%2BTnco7%2BbgYwcHrrMN%2BIBPbZALq5%2FKj7lzoxx2eHa6DQPatyADIeRZkP21RBvcjHjFQR2RyzrU63sLN9j26IajSuwaXnPoJSsuBhtfMkLv2WGFPjCQd7%2BKR2Ut9Dbmj2WRJazuWsnSwVZvHeijoj1NA%2FJyeXm4OnDoXeyVypzYHShJb5I7K64BPB9SYclkRn6MshSE03ZMR0O4oV7KvZzQXl%2BnoU89beMGWb8aYkMTmDWndTXPWXO1Km49D%2B9xHVy%2BzFJJ6BOw1dwbQnl9huttPkPW3liBBOPCIG1n%2BA6TPR01AVXor5gWKsewXsQxqJDxGEWfF%2FD4kC0EaWYbryjsHB9GezWSv%2BMpUp45W5ZHgBpSXmpVEMRus2HppY8romWuAYv2rZ%2FAAsXmIGDKqPbk5wyk6clupHt4R%2F1LsCw%2Bj7EXBzuC40zC7biTnBZel1bRUMyqJuAy%2BGKWjoRTItMKq9IS1keTfTw%2BuK2qddxzm1rbrBIDRgGHvJNNVnhfihiLu8V%2F%2FcUhmBfZt3MOelrb0GOqUBIBmNYMh9MmRl0v%2Bhi6TNP7WQZsf3iT8%2F31OaBcJhDT0MbJVupmHp8qM0MuPUIOENa86h3xsd51mAulwrwwak04KjfaWhP2pTYG0VVMpCBj%2FmDUfh5313IwusnhZ4OHfYBxQeaHCrUnPQzEEZNfLIXxDwCjY%2FeMfm6pbczJZR6pElkALrMexrrGTB2m1Icz8ZB0YRMk81EwaXZcUpGWStwCDA%2F7Tl&X-Amz-Signature=eee0031800e624ec7e4ba02c7eb6808de51f9d17d3ad82db1027cc69e29d4485&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
