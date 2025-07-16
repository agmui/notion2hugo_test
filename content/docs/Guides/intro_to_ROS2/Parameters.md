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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGQCLOAN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC4KBV1yrjHeSuIZetH5gXq22twt8gaQE1lyrUWA%2FAJ2wIhAN0onfBNlJi5GMD1k80cC2k58vcgmiAwOUqpoY%2FDPRAwKv8DCFsQABoMNjM3NDIzMTgzODA1IgwlGDopiEYIb1mt1WYq3AP3AlIfv4Zqg0vm4CggShj9GV9LP1BDCnty4Lsdb9OnvnjSPQPMh0u5gXkSVhVE5w79x4zBHDWQUyakWdamDy0yHVoZiO%2FNbjnMLXu5N1NJ9QxhKsA7GorM1bPjTm0e9hDyMZd%2BDRW1uFETTVs9RMUjmZRhgszwA%2BbktLrvgLis9BZllwh%2B6Ksa642yoocuHfQoQhxx%2BbpRyeyTmeaW8L9G%2B0sy%2Ft8PAH%2BKIO9V0jYjrZyH3xNjvzvWdAEqi45AG2pEwjwsJcSljE7LBGnG2vReurVfAI5PykyHzX3NSE32shzJaedL57%2B8FUgU7NLej6wHepvujUQfC6fqY30CafHVSUF6uSHjeraxp%2BDcT%2FKna2sSESPHK7lAmUxIxVadv0ElUHSo6pk48JTOXtCxeoDdnLqBZ6VjlSJ9wP7u15Y49CZU12wY8nFJnr6xEVZKrp8JvnfpTCCekmWTPupXruv7t8OlicZSc4mA0Uu8cQSN24bjNiRRB20jpn69AD9U0YagetnBGeqiE58Gn%2B0XKrUXT%2BJn775SJeu7Q%2BDtaZXLGt8y%2FgjKoFku%2BQe1EWxb6T3S0lExcFthW8fZRWlYVEUk8ObEgJwL%2Bxq5KkWH%2FYOrD4%2FSQBTdHl%2Bm8FMTGTCp593DBjqkAQnaYIUChKjAWmicL%2BeDx1dZP6jgRybRvHMCNNmnV8XEBAu6%2BttO3Mjv%2F53DTciW5HO1ZhqNs766eYcyoE102rMNQh7ry6y8Riu6CP9R93RHCf2Yn0%2FdSWdNmL9%2FKcYP6rcE5lAZPQUSCYZOSIjC%2FjPRhBgy8juYdmn3wStTAv5j6YWcqPC9g11eUhZRvMEmf9Ozisc%2F%2BSd%2BYTb3Rls8D38zDT0x&X-Amz-Signature=46ca8083fe9a5b5d6f1c054c5433d7413d54c129b7efb4e99e168a28ebdef445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
