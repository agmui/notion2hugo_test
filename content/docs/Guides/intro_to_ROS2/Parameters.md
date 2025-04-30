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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSORAN3C%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICTagh%2B6rw0F9C5x08M9GPKejlNx47LlSKxsV9OmyYJ8AiBAqcUvPKS57ZMRWUUSN8KMvkQkhZN%2BaZY3Cyy1t8JSGSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYBWqsd6t9kOe0abBKtwDDPywXikWyR8rgct6wQNaAGI0qX7s6ofd4cSjUagjoMpqWKc3C5xI67fbPRnLIsgAuqwFv5DLH4euuRWvmzZVrvDRAB81UmkRs0OI3pYzPT0I45Ulz0qCErnmGqQY2tZ2b6oIVGUU2Qa6dH1XtnWN5yV8cXfEIIlZ2vjfLeHmQeR4z28Y1wdb0siZsNTsoLNTuZcBV3gAQlm7Wibhwbs3RgLzh3W4gTQT5LMNTLIJk1QXxh8qApW17lPUvxWjH%2FBvaR4pbhcyioS7lRlQze%2FEozKOxtjSEv47z95JVo4hH9IRUP6aXcgSNLwAedt1M%2FqSCVOObBo53M%2Fw0yWQByHHyT%2BjNomQJiEii0B4gZkwxJhSiS0zMJ22WRujfjblE1xwtw1L2F4iYr%2F%2FbAjTnAotfkVqOEwntQ%2FnbfTaZ7buuoElEjiCq2%2FyBQzJVHNXlCHlkVNmeQ5MziWFKWGti%2F4tOr4wCvKO%2Fd1uH75L%2FRAp2oP36PzBLBpzgPRm%2BiCjpkgNWqLZFG5mgkFJaKDz0fsuJrZPIa5eC8PvI2yMMmqmEoG59Cw3yCGzkeIQocwKCvGJ2F27zcXsnFNSAxqR1QJkmFeu5rht2YQU3T00PwLugADP%2F0Y3hQUqul4oLYYwxcvKwAY6pgG26%2FBANB4PBJP%2BGmidYtK2Gzn0akCtx%2BegG%2F5hIsKAUdllGruPIOhx9XywvT0tPyVe3A9YgJ%2BlSDf%2BGKRt4U%2Bkb91RdQskylze%2FOM%2FNYBx6%2Fsh2cpCWLgIMx5CnhXN8qu35B910x9856eDAW6OcxmNYwNzOuCeRGVpDjSmqgO7s5B1juBremD6uaMSTq671Ueev2CdFoA34yyW%2F7vWr1WDCSEUAAV2&X-Amz-Signature=ec94db7840dac82f99155f3cac65cfa449af2e37c12779f2711997961941cae1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
