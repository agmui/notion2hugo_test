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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX4I7U2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIA5hCXbnPbyQ2v3TJIP0C9BgG0H1bDiuYw2nMYzqouLaAiEA8MUwMFnCjj%2F202Lp5CtKjy9yKaCp%2B0FEfscKx%2FZirRIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDLr2IH7iT9gqF80RaSrcAxEjlZnWrxvvaP6GBEgt4JYqY1dveJp5n8gwxxCushKweuO7LeoqMwd8%2FJnOctdHQUSI%2BbtROQg5cZHWrfxq9oW6JDPdz%2B7qj7OW88Xzs4LkTjOkTjcArrYthwV79HhFLPN3thwpPdf1ipceMLfGX23z6QpM2Ly%2FOwIq99jSuF5C3XVe7kYSEVaeDQFVQIth5hLiqMB90H3iOK5U8AaarFdn95dR3sbxFA9q1wiksEwBs4ZeSc9iyyX2LLJGg807ZEadQ%2F9l%2BV3ws%2BstpUMvAvcKhQGRRs85jAujiib1ua2Cvsnwt5jHP11ucv0sAC25FG5NtBAJYFNwXWMSS4zBpfIhjW0rl6ADJR67qgmHegLoHi7S0pZN5akairH02YL3IIVxcg0g2RgFuKlxs9iV5ePtEatCfTrEt%2BCbzNEMDYpdsnGxGhnXfwTHspX%2Bnm6nc%2BSpAK1ObFvciXDU0WsrCqDmOl6MMitOkjU3LE7CgbjDy%2BurG433a6LpgCzomwVh8Zyov3OIjYoB4a3tHijQZPFmz3Jajh0LJaC8EYps4uzMxbXAsV65WLFuetnYMu16Cobe44qi04nguZyL9sn%2FTIFNP1jBRginCuth%2BJsMWVnrL04oxKxsKPw%2FqJ9mMLailr0GOqUBGDhu4NvNQmiSWY7RLGllZNwpaAYIxcx9yvGrcN0XEv854NWFNF0efO6Mc%2BzbgGBAKd8xDvvJPMyN%2FrnpzHWYjVg%2BVCZLQZjMv1gov06n%2F7BAECXsh%2BEKLZTe56pryfqsAur%2Fvb4Ihlw7oBAr73EiD5OdQQ5gDviz3upVS5Uhk1cwwunEGvHNEfR3nACo0HXp5ME6YzuUXodL7owpr8RJVZOyIRJf&X-Amz-Signature=dd16c8732f225d41ff56348a48ce92c16bc8f7edba660393f7d6205e31b6beff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
