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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XER2GWY%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs2SnSX7sgXqUmNjyjeMw9teDgtXx7euYLhmvB3UgAcAIgLocqagSPJNMMXf%2BAEeSOiKZ3c9fKP7hnIubn9A4qCk4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAMZIt2QmUTcsXoVSrcA5HszE2tbmXIslRoIk9KBdLNAQy2SBG3Zyc4rOXmbCQhO3zX%2FTcPa1MwGiI%2Bru30UxBWZkeUyiM3eojl1mT9UWHBsvYTsjTSr3bEVRL6FsE2aD44AZt2Jbi9f%2F%2FQe5y6hUQZj9tGBvCOwnol%2BdvVBwq5Bzk%2B3cUX3uRQDB31WJApNvGxdkHvpfm0McNlfoDRpYFKY9n3ChqiYh9QiaZmOG7Ki0Jpwz4f9pe%2B%2FFUgP1jg5f%2FJkhA7gy3dEOGJpcTwPpzvZm4rEOM6WtDhkSoePg3GJ2IzgW3hK9Z3jp9w1tKkN6q5RbrS7BS%2FzOjxjEjEXwTyIFbCKgPv8gNWaa8k%2BAJ2b2JQJbjbhVRVQzMlG3q61aUhJQumgBiR8Hu%2Fvy0vyYhJ4gp%2BbuP7wnCPk5hDiK8OtNP9zUo5HSp2DHym7T3luD7n5%2BHzzFeT88W%2F0nTlWBdgN%2BtNfusIIGaCF86JacidwXo2dTSsYAB3CiIshrIdciRzdqJA1vLQ%2BNovg9EWrPpn6GkhVKWVkeUtvn9yLjbQQUKG5jUq6uFwzB64SAvDKd4cP4dw99kossAtVThPi3LXaIpcjd%2B%2Bp1K6bZKiWZUImDxb%2BmSFSHgSL9jW%2F%2Bo6OW%2BCyn673Ut0o04LMKzRysIGOqUBQQ0SGZ6HXQwivWxeoNOJ2T1qkBl6HKEEUI%2B9VHU%2FzD5miMoJdbh5WWIl4XPbFwhBB13cIOS%2BvONzccFn5mr72I2yTZBvAdPq%2FkBxZkenPffkFQo8dXRky9eJzfeVn3vpKtjLtOF5c8zyxUDoPT%2FRnb5HUpdueQeq%2BTeqEtiW8sYUWpG1nC7gZJ2g7Xmp9ARetedoGQNNw615zZ8Hjs2oG2lMt1Gs&X-Amz-Signature=2f71348d5dc59462a7dd7621c1b522373d41cc6add9a1b62a483ba91e75484b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
