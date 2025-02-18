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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ4WOKZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIB3GSqT4nF2A1gugMMagqiFdwxJFIZg3RRUJnB18q5EuAiEAnAIyZx%2B0LcvUoFZvBQDWiUpsAOUnzF7%2FE7E00kv6guQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJsfHrkC0sLhPJQLCrcA1MjGcnXtWq1Uo%2BUdxDcjzI%2F0i1KWiALNZZgFdjzjwa9EWqD7MEkfvovdL6RZOciMwwFEqAkDeFKIWqo6aU6x3U2H6P3sjZA5%2FavuyAG8KUhLW6zuD1ekfJ69A6Vh72dcWAwwefQgKaaxp0a4DhAKuppxhCoBABrNBSySnnVEK9I7Tq4sYga3Y%2FkUXKk7umeZDudSkq2cIPAKTOfDMS7VhuUoojmEt%2ByzlFavF4B%2FtgDgaPKEXkYJpTHBa60sf0xd1R4xOIkrl1r1bdL%2BJae1SvCufLFsrILmHq%2FXtHyDIbtJX0o29Pt5ZP2lQOX9tKOkcJxK9oSyZWStROl1CSaczA55kL8HNm52Yo2YCbcdIHVv61X3rlJruoYV5nmJ6%2FwEx8RkycEKWl7GC7GRfHIhcPcAh6yqyLVaCbY5LoM4aIaQUjx3vUKdUPuMXXIPfNxfqcBf9POe%2FsvoH6YrYRTn6yvdNohn1NTJDT2fHTM3CrJ9E9oVh2zWP5diPtZCU5r7Otx8%2Fqb%2BVypFE1HBOuxBJeVkKvsnoJgmtn1rD8bLUQVFGoDT%2BIZUZgcCtJHFEgV3DuwrUhZ6%2FLnuGQzR1wRXhqxb1UL2luuYNe5XWmkc44UeibDn4qWytMaDWXpMNui0b0GOqUBnxB7sCXHzLPrmHNnL163mNyTmIWbDXGtONpz5AZtt2E9f62qqyR2yaFeEdwCKbFDnTonwTIxiVgu0CbZjHg5SoZd%2BDMRG5hnFumJYut%2B%2B6iD2A5OIZngppG1Y%2BMBDoV%2B55LuPApkPcFHYqFMSR%2B%2FFOwi1A5rLa4JbCKn4YVRcpabGTr53gbrcjCDDuAe%2BqfnrhS4IvyXQxw3akhXvHvoM9JRWnVN&X-Amz-Signature=df16dbc0d6b40d9a43cc1e66c810f78f47d8643dade7781d0a18a2ad8d0cffd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
