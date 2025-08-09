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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFNBCY4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElYuNgz2ssfANeulnkJPI2dNuGhi7X0Ot2DO7rjk%2BCmAiBwjH12m6s4Xbm74p1iU3Ga8KMPpfrULAoMwvL9soESwyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMce%2FqdE932ZC1qR%2F5KtwDXbfMKCXOmDhosPRTe1EZ25PtPS0GScsIaAUMInw2txfwi8pgJlXVdiVOOCFpymP6W1%2Fuy4nulH985q%2FR%2F8aNRKmt6TqdI0JBveCEQcQ9TcSd1LS2Y7GFuUZ0vfLiQ9m2Khi%2FWVdkSor37wmrjWBft%2FT9ty%2BCB7uHtAgyIuA22XAzuzV4r6F8Ae1pISfNZB9CGDTrs8RZDA%2FxOSNoU6Eat28YZS%2BtNoALGdghBbKOKZYEGbwKXaDHqwjR5iN6A0FGB9GYncz3OW4v21o6qz%2BcoK%2FOaq%2Fo3I6GMSsfeGW3iHZ%2F4zClfwyuffk7bJpa2jM09DO9e3RPMbfDF5%2B0CB0HF6TRq2RSUNKltHDWNXAqinr%2F0%2Bynlq6Gb3Kl9xSDdsNApUtEszTfnaXIXUjiNBUsMQsSg43x4L89KjJlm4xsZjZi5EWytazD5h4VUs%2F4BvR8rRNaaT4e6lV6Ia298P27QSlXUGu9mUmVsP8ZsWmuXvSiWnOmdHu417u9dq8Jf8AFVsc5aSjdCl9o8Qi01E%2FcOfQ1hLTkxz%2FGrAP1RtrY5MgVdoe81KyueNiovI86vJnJlJqWBC7BuoYMaIHgISEnRFo4cty7WufpTVSi%2FQUDq9wnrKNgl9cNOb9j5xcw%2B%2BbcxAY6pgF3mjqEGFBr0fhz2QOOn3ponib0aQm1OhYouFgAtuRI4FZh2RTuwCBbbqR0IyIktd0n6r6ZQ4mdQf0WG%2Fjt9jPv4VOFGQlRuWck2c1O44jzuwg5n5a7MuMK%2BS8MmccuThPsOJvXiRUhDM%2BGdYfENS8HDvQD0Zm4Fj%2Br2GkxtUd51aq0xSslVzG7bwphMLnuTHreCdHwmPg1%2FYyOugJo05YC21xHkDdp&X-Amz-Signature=e3c64d538d5c5120474b1071ac3e9c66834c6156485ca33945b067997a86c2d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
