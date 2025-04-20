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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7HNGBO5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCFIVA%2BFN0aZMSKFrsOwdJplDaYmyvV6lVCmN0XNhoXsQIgabXf2gsBGpmuunSjefR1Q2i%2Bo7YP35CFZdmPCh%2FaNTYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISnp%2BsbJAsjt%2F0UECrcA7TfrRn1uNJhmB2hxO3kAuFbnbK%2Bk1GeuWUirvNJ2zmxIpJWwLRjcIOY7fNeWtq4ozh7jO2O891uNa70PMpJy%2FTHn7zLvfdZ8v5dCZLbnDSoRZi673m1BIaLlARdN6av4q2Xs84AkbMfPN%2FqTw48y7r1IgAif%2F3J3t2k02zwwfU%2FBmdePA859DYMa9lfj5BmR4Zi2f4QFY9WEkApYRK9MjK6jRNJOE9ERldzfZ%2FDLW28cn%2Fq696%2Bt0OsTn2mUNkJbBd9IJI2tlTyMJdnuXpXtcUugq5yESPeCqqDOMRLA%2Ff4kn4sHExWX7nYicBG7QNnKTAerqEqyhhTF1XQ101y0kUwIuB3ST0MrIzBGNY8IHFz%2F0TCZwEWnh%2Bp4nAP1snhNkzFPt%2BsJpYuYTFI8%2BQ2A88eN0bv%2BqyL9tFG9PItGv%2FzhMNfJOW4hDjlPVitvIABvypP6Wjqpba1hzOOWevCGy4BYMAg%2FPLRhjSASjmkfYfmxOhuhMgKbu8pK978LX49pCYtJTJ8l24bc%2BfzPoc5woQIYQzwD4a1qlB3TUEDxYlqxwwUh%2FQvizPR6gC1RE%2B9AfFwvNctTR45kts9Xm2lu6vW8q5hz9gl7iIjQ%2BReukCPZntaNQWdgYhLNHGIMLPnlMAGOqUB%2BKHRVGNPLtDZETtq8o0V59OdB24Xq7QUwULxmmB1GiVRBiv212ACF40c6cdqrIbwIaIraT%2Fj4xuQRN4KVYwtIjplNk6MmOGfhZ%2Bes1v3rLCjoyEsZS2G1lXORcMTLwuL3yvLFwHlYwSS%2BhDWJ9TiNVXypzjgvF9HfnnOeioNr58hpag5GVrb4idak5GM0agbBk9RXirp5XAJf1W0PrLxerMt2MTM&X-Amz-Signature=9cdb2ac8e4e90b8128a26f6412b39a534545e2c4ea7461b86adfadcc9b8464d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
