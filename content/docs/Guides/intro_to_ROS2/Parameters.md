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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P42R4F%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJO8M71fND73qaWGGHnImw7UBsQKVWyHAJS%2BCfXp%2BpbQIgLmQNqWpEDt%2BKdOmpSiVVzcql%2BUS%2Fv8itbtPS6AMkxkAq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOuWuqgsrBjfP7yU0ircA9m5XYOLcPeJ0HHFLIG0AOLwjEhBjmVJG2AQ9h2fEmkTH6Y1byYCXLKw%2BufZO7JRcmFtnqmnRAZSmr4INDu1Vd3nnCxPv6wwMrdL5b4jVJUckI8247aCo4QrRKKwXw1zL01WC6eOONDKQ0VpygIIOqDJel9DZQiF%2FCmh3PSJHr82jm37t9LYKG4BGZZgAjiePZgpkD5YRH%2FMui4pu3pRWuLnoVgeL9CY7mmDu%2F%2ByTcMZAHMNoN2NleapYUd3qC4YFCU5yme5KZU4%2BPiyEaQajIRTwvysVs8SkzLUyLFoNZiuAKtixNi7%2BBxY7WJ7UVdZQpCgTs0OFF4la1mUMIsMFaLPq%2FdsZ0N00Snz4o3IVM3hGnYEiG0LZO%2Fjhra6nCtkgjf18Qpv41XW7Ch8iFequ4bH3YlmhgY%2BTkHZUITRx5bWwjygYRoyylWsJ1ISsh43dl%2BgOTZ756gsT3fIcOE2bYB%2BDHvklKOJp6gRRer4GRhqIwpqTIdr7hJyNAne%2Bk1uXC6Rg3S1Js3YAfQOiw5uE7JqMWhTieMwwluuF02RJTTkkD6c5T9hGUR3P6wnLhA%2Fx%2Fvagd1xLKtaF8bb7YrmGcdj4r3Ammxt9X5d6J9G0lUsUe%2FEUJCdS5o%2F8eBsMOr1t8IGOqUBFKmf04jjqRwaH%2FinrBcE9bNM%2B%2B%2ByFQBDrhRxoAsSB2qCpXe8C%2FdP7b3z7Wx8kzUM8Oh7b2tdInzC7tLiPw3ESXQSXQ27pU5%2FUghi9EPEhqlgy5kPddSjJ6f3bTSjmi5%2Bh%2Bx73iC1hR76M1M4TbaXky0U4x%2Bv3vTysP5OBsdYpBzJT%2BQTNXQ5q4KuzfIZGY2WclDkqQt9IPG2EGAVFMpavvPXm%2FxI&X-Amz-Signature=62d21bfd8369f639cfe912b98d73aa08e599de1a65d4f32aa78d7d0cdfe68906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
