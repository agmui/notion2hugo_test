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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIDPCG2K%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkAmY36VPNgVUr9S1MXD12wMPMPEnRMxQA6kdG8rJBiAiA1olCTT6Wghj3pIVqHkbPt0rHclYGxvyVttwXtbZB2Ayr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMT1ZOALxVFU4emwXWKtwDHUB6XErf6%2BO9dPH3er%2BTLa5Ik9RH4ot7cJ2m7e6ba80NKw7n%2FOlpU5yxyyLNHhd0XfgeLEiuZiRs9kBpDLTnlTH6Gzp4uHJ8Js8HtFUJ4Z%2Fbnx6tz0BJ1QdJ7VACMylJl7IeEf98pw9s7ijjy75KGSJXQNAVQZ1UyWLxGDDiAWCeb7GDT7gnvRMVgckWag2Ocz7ryhFkyyl%2B3ROCYzeMip%2FMB09ZAAVpL2Mzxr6WIBrcfchen0RD5NGWE8mrjUU3x7Uz0oEHsyPqTFdl42YeACkb93wtse6jAhYo4rCY%2B9l%2FvRiHfpY%2BgIvkA9ngC5lXYrB5maJXiCyQrWjnsrtpRhusXlEpGsOE5jEdBQsy3tv8ETa9gUyx6ctRRyn1%2BMfk8KP3gQKRFVrD9aGvoUJWUQAV%2BzrtrI33KB4uIMM%2FEYD4egIbiX2%2FZNpxAC0HjoL6aNdnm1MBRcmiJ4g8d1GrrMjAgmgJCvEbMzvJlp2Q4KhP8EQ6BgnE1ThKLqbfsYTLh2Rn5Xu2ZBhHvib2jUtvZ%2B042OhHoGKPHyzzoRQFeDFRj1tBJ3KGDbHYb2ubc1E4avXWWhqnfGTKSJefEH7DZanZWPkBGa0iwlhg6v5r%2FZCJzG5Rl%2FU9itimpbowocb%2FvwY6pgFHMmoJSNZFh9HG9QlCrJAjHN40XQYSyz3gqMMBfJTPkfxSOT38A9XVQCtPJwXW6neD7POQ9Kits8Bx770V3woxGntbbB5WcwODaCNrsLblWkZAAXgMELcXCsZJv4IeZrzxXF%2B20Y24AIjE%2F1%2FB6G39a74Ho51xctS%2B04FtcIo%2FRFGd6ZmzndJgdVvYqi4leZzuBkFoe%2BcDPGmEvNNzZt0rYoJbll%2BD&X-Amz-Signature=e3cc223a28d4c6dfd454fdc8812058daa72bc0a944d1247cc1df5a6c6eba7f97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
