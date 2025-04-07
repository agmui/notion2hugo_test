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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FZBRJ7%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtgrGkxtARKtGltHu5wJvnZZMfLvjCxL%2B6mHutQf37EgIhAOYx59ZcH539njSZrDfg6sO3V6RW4TuZ4gexu9elP0BVKv8DCF4QABoMNjM3NDIzMTgzODA1IgwM03qTkJqRPMyf7Qwq3AMIU7y6urw4PNfMBK3schwmm9l3VvSDieVVD2FbIhXgrjnmOdPpPvNOdH0R3hXponTEjc3nwdbyVbDKPuCWa2GS%2BHBvV795J6wY13j68cHmOEHn2wQ%2FQAEsl0xAY4Q47zS%2BsfA0eN%2B9dl%2Bfd%2FIHbH7pmW9V2qm8xUm6BYKp78Vfi8PZ5LV5ivCe%2BOwmyZ3yBXQWtOZNs7uR2XuZO8EyQsL21O9NwI0O8c8Lx93iDbeOp0MonOSxq%2BoetnQ5xbbuq0y9EVlQUCYEmu2Mdu5zIewDnc9VeaPBoULzodP8gYL%2F1GqE7G%2Fq265x1NFJhdU5saS1QBk%2FzDNJi%2BLzLrDUivNqeUK982SdzkDz5o%2B9xVbSd%2Fs9lFgThQNdZSGzBG%2FdWkKTk5NfdP3j%2BmDNnJCdJqSi4OkH6CpAOH1AW%2FRmLocxkbBqPiNYIkuxi4%2BOUfRKrRosdZt79NqjpuxGxV76OFKYYVz7nR6GgdXw2cgqhxN%2BOoCU4Cw7xYlbsFDqnvLzTuoWW4TtslrGHCROOMWAO5jppWIIfYMVI91%2F2UXFycnWxDXKqvKU1nBIVPpNTTEa0eASBDPz%2F6zPderBnDGD2Ih557hPyaHC%2BTX1fnDXs2GCSTbVMlGx1WJB00WCDTDCnM%2B%2FBjqkAaoECRvqiferi66Df1uH%2F%2BkW%2B1PPYNgk7oHkpNqMf1adJwxr3GApeZh41Ku1Ct4Axu20Mw62HMI5z3g9ZP05YerSg2q5ywcxqWvqj5fBddFSs6%2FF19LQAGYNEfEZLuK1G1dHZ%2FCNIwWn43W6Nsftlets67DmUog9n1RTi0Px%2FSF%2FIwzTEsZOQWguurn%2BnadRK1JV%2FLga2vlr16CR35Oej5lv0Gn%2F&X-Amz-Signature=88567d1c33a01cce9d03f89269567eea18a27c5ab5970ff60d2ec26fe424a91a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
