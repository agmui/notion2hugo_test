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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJRDXP3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDk5FKSsGiuIfmAxDkiIzRv3qlHglDr4iQuqVwRZKKWiQIhAMxGRhV2FLVu%2FIfnGCb2Eb1rUpqsOWMuaoZikDq%2FUfP5Kv8DCHkQABoMNjM3NDIzMTgzODA1IgxKUDMVcUy7rhzlWPoq3AMRzIpTUKBuBN0B6rQwILFA4BF0qPQ3QWJ7I0hIfj7FqbMl6ZtDFRt7rGWUslJWooQ%2FvHqrbu1pNIJC5OxMDdyxKCcTu9OKQGX4CLwKxpCr%2FuNTGB8wVI5bVWRQGvU7Yh1E3urUmJb3dZCbqjj2b%2FC3h9jjKnS8lDhUshia73w6AWQJ7LW7AbjEAs0AYMzjs0B%2FmkEJr3y%2FRvvfpg6VWDBnyP9zR10vkpvklu2bSzm85YQVakBdcdt1wgqq0YLwJ%2FZZulOL6Z9xhrbhfMVkbzbrv2bza1R%2Frlg3JKseWGS5t9SIgwKZmFoRHG2VHqcjR88ULThpDiYbcAbR0KUGjjQbxUXXNU5gFYMeel9PQ6Gg0VeAZn0G%2BqgYBZe%2BYrc8VjebsmNWP6kNI6c2yry22Mgq0YmKQ5lRYPfZYVJWreJUgnKR7VRR7vxfRazU%2FpN6t32XzM%2BB8fEM5%2FuB4M%2BB2SALUuGYfqSuUQ4QWNifG%2FAsb6neDJhmemQGnbKFYh7dis4e3pMAr4qq9Qwihuqf9a8paGGb1ZA%2FQY39OSzPMAzauHDB6s2kJ7woxVnoTk3J8lw6HgeOtSbx96IbQO2RssPZf3tObby2YMbRYYFProzyWWeA3gKk3spoCXWsRDCjw829BjqkAUamg%2FJvl%2FwDsSo52l74AhXWsjBFWX5SW%2Fg0RtJerH0bRDzhZ20aG1jsNxeP1Tm4869m5v1bp57CPxB1Qaih2IE2%2BTZYvhzt0FdI%2BsG%2FyEAVpDreGaKniwrrIkhcvpNZ2RYToFlHY120LW%2BS31JGxQrXqvz3t5CiE%2FGxnQqZqcgUMQDa8GkLtFOkA7PPATpC2bz0ukdFgNce1QDGP1x34IpJKnIb&X-Amz-Signature=c761127b2b180eedcd6d1f7c2b4e45922d9f609ba23c36bf27f165e40185a7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
