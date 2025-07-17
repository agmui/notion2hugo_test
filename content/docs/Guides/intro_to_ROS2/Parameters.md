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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEZGMKJ3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCLMNJcDqR%2F7s6Orv0CiFx%2BPLltDt6xnmY57BV0tBl%2B8wIhAPw6p6gLhgthHPvHan3aDO19xT%2B92%2BsKkANuQlzTSuOGKv8DCHYQABoMNjM3NDIzMTgzODA1IgxgxT8mcL%2FYBEWCc%2FIq3APKlOUCON6Ym9t7%2Fa8CD9ncDZyx%2F5rD2EyfdgEJ8wzkVSot1Cksy621M%2BHF50jojUTd1WO9wcOVLFfdyzT%2Bee%2FgXjQimhkX0%2FM3HxolQu26ReeJmt6S8Hs2NVO0z29prTGrlKMT4a%2BVD9P6uL%2FDgttdsmZj327Hnfdio2jHNUutbb01ohjCBbfaf0KIe9oNSP8nWw2sshHRryS%2B5AdOlaUnsI9%2F%2FUw0Uo%2F6I4JcdxZ9JQ8LgFqVXemMvLjdyLYLYeg4nhT0SsrsYqRb8Rkc7vEPfN0liObT1bxektcMoKMDua%2FzIY4P4OdP7qu41TlrqkOjqkh1EDftMEL1I5AjM3CGacB%2Bt%2Fw7uy0%2BFrIUeNWxiPWw%2Buo8jCO5UNjPy%2BvqH%2B5tHCdvsuT92d%2BiddievF%2BuyFC8UcLJn0KCO6lP2VKDLkJVeusfbBAZkj8u6qOWJMvP3lXTBJKQbrhlkfUFhQmFkBxYD9HtZUqMVbuGoQHtmY2YpjStNTB6cEHsvSObzI7PdCpkJq%2BVeUSX1eAKo9Sxu6QC2ShG%2FlcCg86TK1cKvLUancrcIAwhs6dg8wUqVq5nqCNiUlYimCH5ARvFeL2gTYo4aO%2BnGa6EHEEDLBjbBqhEcOFjodDZEqJVCDDE4uPDBjqkAQk2c2owYqMEbxK5a5nKHhty0BG%2BielB1aycEjlZV1NYW%2FoN%2Bm6Vc2SRYjvdng5PhnNGf4aeqYxDmUe5jdwV6cQfe81iNfTWUrpFWDpcSiYdYCJRaB9gXHjbQIJ0JWIrAe%2BHTHcSMJVaB%2FvhPWo7w0ULd%2F0iVvvc3b864stUDF4lfIELMyZ%2FCtwnYFoGTqPBgNwTJX3cA3j4aIC%2Ft9NWBJtm9bu5&X-Amz-Signature=95df1fee04034f9920f7739bb7f8852be20ada9c2d863fbefc996bf32bbcfe8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
