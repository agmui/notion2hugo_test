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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUJHUMO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqbEK0zGDIgObCjfu7O2hA0jxCrIeo3lWgbHuSmjTB0AiAfY8Qh17v13ViDSr7hpE9eRr7aJ7M3%2FEFg4A%2F2lzrCUiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSB9IVGSOwupO2M16KtwDj1LppjBqkxK32yvQC%2BUUGIDP1EwZZi0TGloyCE%2B5tOVGB5jcSi%2BYkU8d8lrAnpQkHXDu7svDg8fszhz%2BHJ7AAyYfYbbBpy4EZ%2BJ6ALHg9qEhknnupaf4dqpRY8nuD5dg0Ri0NbzFc55X0XDg4dnLsN6sXAJf%2BV5EYh2vzfd9O%2B0hQ1Pw31sn4VsAfOdFItpwoEfKvmfuF23JIStxn5lZwbVmxMsBbwvzFnH6Gpxvw5fLjG7Q0BWBah4Rr1gv2KS89s%2BxPTIQU6GEQ%2Fr5QsjCSDvK8GbgR3isaQtBobNkmdJw8XdBhbW6sE%2BQUuVWR1C92BsYsk6%2FaptX3g%2B9GfdsTOHThtLtdIE977cnRf5wTCWGj7VNHwhWt8vyc%2FJL5RuVYDu0Jx%2FLNAoy%2BM5SN7mZ3%2Fe1aE4ZDq3013K2mckLKiHE1Igqgj%2F4zBexV0Zkdgw7%2F%2FuePmNQUp%2FsOEI2GMdTdx1sxZ%2FyXk22MTIhYsAJGn%2Bp6MriMMe5SNY9UFRnYzU%2FgkN%2BIptKTrL02DIk9AEXWmd2QiIoMwQ321vzHW2%2BeLSsblKWaGhvGHhd0oAtHTjJe4dgn5zkc6%2B0NGtjqWCsIxNbGVFUGBcxQWHwVosd%2FtH6Y4oObNw5ZKfrq6EwnNb7wAY6pgHGGjyQhWeMtY%2B5L%2F3tSJRh3KNlpAOCe5mk%2B%2By6jrSt6FLZAMN12JQyE2gYRfq36B%2BeoFPOBLdUSV1gZisD3X72UMD5lh1iKgF%2F10qO6wFo7JiQUj6TAHq3lXZVL32R1Ofu0GBO3WBZezl3%2FPY6ihM3t2jdrrqhfsjY6bcf6yaeX5VhJHSHxAoaX1kjngEBCKS%2FJ5tSXmYEeofuWP055sPpVZIeSSCL&X-Amz-Signature=7b5abbc972a161cf25db39be80e70992643fc910bbcb7cf2ecd4048d068423d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
