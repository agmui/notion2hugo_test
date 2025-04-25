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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2KLRTQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdPVnAwdJJytKuxfgAzn7cerUq1%2F5amtdwIv0Yohwn5AiEAxMM6aSs6XqzfrJPsbFoM28wGf97Jk3hzUCKejJaTyioq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPn%2BdR0uzy97gahcPircA1eh0Icwyj6RP1Khar3PVAf6QyJ3SPAEKJh%2FXh7ZqnFQBxTTxhYCr%2BguEjv4NNozPCvokg6ZfiQfDEcfYJAtqssaKGQZ4KM%2B9bNSVUId6h97NDGPQbcrIjb5HhiGSNJx0%2FT7oYyPeFdE7DWmLwVqkpQOpR%2F6%2FytH9eUpd0n1x1JjJthWlTPue6WtxoeCmlEgZ56qc7ucM0mlghgzuU5%2FYav1mJdh2FUb3vvqLPJwPxw8GkDhONUJ1crvG8yvWS%2F%2BrE7orhH0MZbNTc7SVanlsdcCBBaRrdiXoNgahxRdnORGosrv%2BbI5YG8gVQi0NeiKauLv1XwG%2BMWhEuQabatv45gxfDUhy81cZIApzfzD83RyhGKnBOx0pdGdLEYiON7pwuSxkfRDVIhB5%2FUjczJ0VfZArmWhM1%2BUFPYaRiefTiPOwTI1%2FGV0hfeLUudE1GyFGxgeinVxjcpQAW6vQyhOuS0X7w7Z%2F9C994T07oq5ycV8tjsUAnwyDskhj9%2B7uotNSRbR%2BFpdHoIwGwQCi9HxZYtsTrDwG8NT2vcd8nV%2BLrBKRhJp5dzksBfoFZVIpZ7OgkpNC2xg7fO7R6E2OkEiU1V1W3%2FktTMy8C%2B6mIGaz7esotJKOyPD4w55toc3MN%2BCrcAGOqUBcz9pgyQFFi322rkI6wb5bfBEo6FRAwRb5FiDJGFOWnF7Sarz9jxOhEh4Q5aSoOOHSnt7%2FVHJn%2FYZvRNVrGhA71zFHEM1LN5EC5a2JiBnPXWdveG8b3l9aVz2fZxJCYh2kKoFulWjLxsKxHRKyTbGmkR0X9P7FZDbwSb24PXr9NH1S9gci5QURwL8D%2B5d0k3jdNhFU2FBD%2BsR9Pyul0295TI4KoOM&X-Amz-Signature=6061921461e7fc2cb33cb752e07e666d50add5772ee9ade1097e4dd7b5078fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
