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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSKMTQQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAAv8CDDGpjy38R5Nl%2BmFkrrAx0nwnCdj15%2FjTWtfzBAiEA5YrJ6HhlBNUBqnbURZLqd9FYjKHEtL6iDLo0%2BjE%2F73oqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfk1GujXuDNOv5H6CrcA47aYoo6Zg9zm2aj19eqkkmF6GfZW74rv5x%2B3oeifqjYmHX6hoqyk9%2FKW4Dd51BptkLg0gN%2BSfE%2B1MA9GKQLW8SMhNiwtYJRpoVgVPGZp0x%2BRr%2FhlUUojO60Ue%2BfAH2xSfhqrNs8A4GnTGm9N7HWziH5NC8J8YSzMmlxEkRY5zE0oh87Bo1uO1fq4t5zYjFGkRqE8mmC3bce4Tbk30tS0vhIia8e%2F%2Bhl8o1v2yyjGbDuBCxw3VM6Mr59w3z%2FVcosiEeRE3UpY05xawiutK5015o4W86%2F57BgPX59TGk4z7%2FBmhva33434sxKjOvoNQBimk3HgVvpgl1m8ak9yrFXYPOsJVaD7pkLOAEJAdkpw9oquRmDS2qVOun7AjQq963XXabXj9ScHQPdHacG5n09GNd3ED8O9eD8cOeH3Qa3Chgxt0IqqF3XoZ5FhYDvkB5vadbvU6RgrYxRQN%2F5o%2Be6bk0sGNIfWIzDYeC4sw%2FyUrlUFo0MzH8fOiRkxTC%2FkI9O9sQNTCn8Ahvdu7SwxpfFTULDh7Y9dJ8HX2CTPd2xK66Sh6Alv1E7BX8xAwo92WmDEzIlNk6sjDsGZP4GaZsbutLjUXGoNY%2Fqd6iAYeYiCvSl0wgL%2B5hBIYF7YFcBMPfr87wGOqUBX1epY53ExGmD1KF46zadmuJ3nZykFXWUQO3vXzda%2FAhRXqCnoSAGbyiMbf%2FaUmJxDz8k4ew6GP%2BqOIKzQcMC5MFO0F2yyUeLJmGFbYC5zDwyltG2nOnQhJo8Z1%2F8vaJld8pJ7SXYnBs%2BD4ea%2FSMEref%2FyECI0PxVCxSycYGdlZ9H9j6UTWWK8Ai%2BLSmOHzS5Id98I%2BqzdnLhmyFQWBUm%2B1%2BXXDIf&X-Amz-Signature=cb55389389fd6619ad24af504bae9d30977992f7a40910054bb543d2d145aeb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
