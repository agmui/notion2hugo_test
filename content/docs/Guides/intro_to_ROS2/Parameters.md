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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQJIGQ2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOniPUYmQ5F2Q%2Be6ZyaWEQZKuwH76h7TiQ43c4mOVCSAiBoBQ7B6Am%2FUfrojbJwaM12zX%2B7YdlznJ6EYV7f%2BYa1FCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNK9hGO3hAxq0rq1ZKtwDcc5WNM2W02kBQZwrHFvgSy6fRWAvW2kYA1WJD5JKmVhhqHN6mV%2FV2uNNPYGql8zc%2BhO3uipTQt5fALbmjB%2Bmt3aQadIrZy8WizuHNsAGb42tdHm7Oqd7LRWWrmEnAJTrfeiZN%2F1P8bJyfat%2Be5KPrmVZaC9XISHtG0%2B8lnQUeKS8EYh4h7EhhyK4jy5ADHLZxnFjoOkm6azmGInbay2LJCzf61sJZd3nOq%2FyoK7h5FChDISXY3zrwQDr9Kwbvx3y%2BDXLloOe1NWYAM%2B1bG5b9X8uM4KK6MgGjvAWdalS6Jeq4YDzGBrg6KH%2BadnY2hHbjfekT%2BTry5Mx%2Fiy6t3UkPY2KD1q0nBeT%2FFGQq3zrVWw4nzHQyp7DE0WSZkLcNHk24A5%2BikndLrzs6zcV%2FpB4FwbSuwmkZb1g3JQ0bFBXzVlnYlvv9plhCLUIz1ISHDJGhfLssHbbd8nT3i2b8h2Lar4zwQCG60Rd5C68lZaWhnAVq4%2F37MZU8FPO2j03EKWm9jMzn76Fx6llUYP1kvYlr7wwigy9Tkep51Sj3SU8y1qk1snpDpV4ADweWVe9HahgPIZyeJgtZW%2FsetxDHg3NN%2BuduPX8Ggv2D79yKmHuCdpj8AXLSyL%2BURbGMwMwl9bzwwY6pgG4ZYZHez0QpZCz6MyarF9TTSNWyh%2BtELIlXPXUgtpRU5WqP4naY9wh2WNJVSxMSwNZxCwzne2fM8uclT%2BrysjKIPHi6mfsdzGdwlFi829UbAr%2FmqqZzfp1U2ONzOVkvgMKpB0HAhqKyQZkWjqkmvTSbx6lb7urCRrQyYau%2FklrqazGI8mlIjMxAXKrCQuYa%2BtAtlbUBgZsK%2Br9xgAl9xWmtVH%2BXO%2BN&X-Amz-Signature=14e1386d225593b22e574ff7e3340c831b1771f1bc4b4ce690121f3fd2abee5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
