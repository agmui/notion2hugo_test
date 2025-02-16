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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N32KYHT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDbsnAuCtnoqcCH5WUizTIMTuDTsRm5ew9BzmAJX6hwwAIhAPgo8TDNP72KqBnEPShroozpPDICfpb7ejNArB9S8FUGKv8DCFcQABoMNjM3NDIzMTgzODA1IgyvS52HXvr7LQ%2B8XfMq3AMrWQ4EP7VcjfWbvnkwbwboqQAcS1jGqU2YQgjVJIhNb5TM6La47HyBxtDn6LQN3CUuoBk7A8Mg0ChoCgd5aMxzy%2FnVWFqBLjcHONVP%2FOzcMHaAe8IulXz%2F%2FlJ8N9sgvEIlsRblpOZnAQwdOsz2zRS5Di2IALDlECiqOSXohGPgldyfzSrmme8ebiKGxOK3pcD6tJy%2FkRYWIk2mf0ed%2FiReFwdPdSu5O0kfK%2Bn2ZsqPmhPL25m8yD7dAWmr7MbBDVFEfhqj8FJhuIBMc9wdk03C5xRDN7hQ10%2FgGMDTOnDNQYb8DlKvYkZCHPP9WAJMgt0cKlHFTBNuRZBTF7Lc%2FA0wgHLjPz%2Bw%2FYm728BOQ9CTpcho0B3CsdBe2GEEEnuWo4COCKYLIzrWK0kUStYEFuZsOozuUbBlaMpGRg5t7vt%2BCRqWzfRthfsxjyvpv6for6gBYMdlZQlCjUpxoriNBq3MBYgQXjXfGpD9biunAeTh4oHU62J2KUtK4PZ5sp%2BIjXQ6I%2FT3ydRklipgj3FjooenwVzGUJh%2FPqr0EYLKyA9LTDTuwE%2BTbGeMFdI3n5zFaluvCINYzpjVTM1xc78bypnXqb8%2B9teYFCID8xFUUGNb7GzXuZ%2FheO1WFu7GOjDV%2FcW9BjqkAfDl%2BwrKsnTvZ%2FaqK20zIZZHs%2BtCoyvsQXt4RvSgYHm0hw%2BQq0lH4rk0ZrylHgJSdgnq3b6%2BuVxQIIOBLTXLzkH5y6G%2FFRmr45A3hWLwiTTrYW7muj4h%2FvwV6EjdjPvPCfjQaRIeSVbkucF%2B%2FPhmTppqaNiPc9%2FPZsj5ewUfycRhMqFlFHOi2WZEHTSr1TzYn11%2BpGoVsMaZlOQyB9egTikFZkGZ&X-Amz-Signature=7cac6a1b29153f4c38e8e2b5cecc63061970fccee3a7a167ce20ba54795e9a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
