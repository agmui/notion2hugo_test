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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPPMGKN%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOlDvDhSlccYxx2hx%2FyzSCaAvb8qb2xzcC%2FwEMU4iPqAiEAr9kKf5CmGoVY7P3JUiulexHQSvVXRoN9H1CcXFEgmDgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLYRfVgn8VzIMIpCSrcA2RLuVgFvDxUqJmPxLpPk9pwFClUNgSMrUhlo%2FE1K7gGDzY8GAJsL8gY9TFyVbqMRpXShBKvJ8aia9HB4OAhcl0XfMaZgRgE0z6MRdCbpbSxqqoQ4DBQIYM8rXS6e0%2BuAA%2BcBDF8fCbMBHUQ%2ByC1i8i7VjNjKDBlYtBCTmNRDmeC7fCkrd66Osy%2F4RgPW2ZUspBTzZfwL8RrKb1KXcWwYwTvSq0DJllyZJAIM%2FhsyFCaYsz%2FwGm2i2yBzOBPOXEHLDJubyNnICGqafrjgW3CYnGS7ddyZJdfyVYfyK6HaatN6y%2F6%2BO1Ove1TVW3aaiuY02%2BFVTWFHivM4rmMPrV3pY%2FzkbL9CBQHTREGa5LHIF7v3jOZVx%2FmgUzeCDAYF3yM4r26xy%2BoDPBJPep78gsAK%2Fs1UnqYCIi%2BkWQd%2BaJbhb4OL8OFC%2BkGMCAzBh6%2BSaAkQK7houm1aPOe0ZrwBcB1pnRDibznCeSHhqOPwBloXlxnVPowKr5PHGCbYvEDmplUZKrBrMsj082O5vAAjL%2FPrSYQKFufWC2WAZyFT36esw8ziVENG49TbrssJMHeGqDdChukuwRe7zublo8NMag%2B4sjh4wRq4tkRGDeDsso36nZjL3S1%2BvkNaUvDk1V7MM7Oo8kGOqUB57fwzEm5iSzDtKQX%2BNE0dCLw05CQEJ6akCBQ%2FxnPLwAyRpNhK%2Bu7bSv54RHHDUQYYFFDwgHkKLBM89TIprlDq3vPHD9PSMTyRJrCT4S%2FXGYFdjyU4RvytJkwenEIv3V0xDYUm0FR9taF6PmLPbU66XUuw7MV122AATmnDeJMwpmof5%2FDMkc%2FeT4vmeLSzNOJvPqWak00SfCTDFH1ZDF0n%2Fz9BdJf&X-Amz-Signature=a4f07598e899d2320aa415cc61cd7230de7d47aba0625e6a821370a56ec9d827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
