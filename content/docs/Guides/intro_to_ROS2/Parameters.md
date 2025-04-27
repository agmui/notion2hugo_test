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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GPIHSFO%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUFJ8MPTVstzBrvTncl%2Bqez3Nkg95UhTuQxn%2F2of59iAiEA9GadPsnLyY7Ihy8QYxIYcBrMKbVbX3BOj%2F9I2CltBFoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLxwD1AwdpJ0%2FIQsaCrcA289Vuhu3KbWcK6mKqdLR4YSjElWcsXD4n2dx2HV550UY78jexLMh7r5qoNnPuElK3rK2tvYsX1Qa14LjPIh%2F9Gojx6OZMd%2Fe%2F2ggH8utwKplFEOthTaXBuCojv7EuACr%2FxhscJi%2F3kRh%2BekdPHccFtpnDS7w6ZypMyEt4pZf1828JqTHg3TV807nubvbfYe7XtBwwM9Y%2B9OPZEaOljX7yTHnxVGibesIlah3XO9f%2F5%2F9Dsklo18nAm54%2BkucwMCfgVJri8OhTqBTC5xozC9MUmBkUhk0RHHErIckNOG6RklOV71Bs9KCJoUYwUryrA34ba350gFrGGnCyNa99zhdmqBHeOzJLy%2BDL9ybZ%2FcyG%2BrwTOyccsnaAwugmQAR8uvtp2XDHVhQnIDXYV3T45%2F9%2BZFuDMdCKxOHuJszCOj5HPEXVI%2F9G1fiSutufMXkyYsxyZ3DbWgm7CKZXEZ4j9%2FBGc%2B24JiPi0ISh8DlyVwDExKdE%2FuKkJe16TOgHB%2BcbOsXvmoa4zvWIa6sYmGL%2Ffcp9Yh%2BQi%2Fl4PVPhCz1BgK6EqDWcBXLyu8Q53PnsmUrWBevNyPCztep1OvxEoOuAECjPEBbjZ%2B7Te6yYz0dXrEI2%2B1UQQHVSP%2FukR2U92fMJDttsAGOqUBH2%2FQEIFURI4ItA0bd%2FkSmpQhRDsM%2BsYyXluy8gd5hrY2AU9l9P2lUQjgGPNWFLIWnqsfaTpQxRk7jecpc8GVketrq1jyOdbFUSljC9hCHJChrbGVM53PUgXUEjq6T4CI5yMzHKCYDnbU58cmXfIgec0ySdcn%2BMOUtyjEUvXzcAJSmU0jhYbU0VsWnwXwy9eUVBlXkI3qAWgy0bcMPNKQqbVJdQR2&X-Amz-Signature=c0c40b6c8332cc5f1ae9056a6bb06be1a8f5779618e3e694621670fc0f7e56a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
