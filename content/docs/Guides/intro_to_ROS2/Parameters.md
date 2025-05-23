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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL75XAFY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDKOp1a8CZObGVOMCKK%2B7Uu6Xa%2B6fboYw%2Btq5lWDOll8AiBplWhDJPvQDuhaW2QSaELertREAzU2n6glQJO%2FHT4rCCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhBrf7VfRsuiPPpIKtwDN%2BjdP%2Fu2qeNq7XuBPojpY9V0KsaEVXwzJf56MSKBwBEpi%2Bc4dbU%2FlkMdVwvqhqnVTC4mq%2FeU4Y3uF4a4dIQHeyO6rcMkOxQE0qM%2FMMMWoyTastuBf6OgdA36e5Qhe8nGDTHZ5uQeqetjfpmNmhPIcRiAuKqMUeltqF%2BUnW6Mbz2Z49YD1LvOSUb6Pn9kZ%2F1J75J90mx9goWMSf5No3jtR2cAMzTVYRvEpSI7UJ20XWCVF14uxgxL967ZisYQEXoxdvN4h5YjNJS7LGworClun9DuB7z6eNmzO5plAja7qt%2FoECMknpDyLxCXCsFtODIeh%2FpuUvejYh5x6%2FQETE6kXz%2BNUjaId1jA9T%2FLwkMXUckKrDinOSrYVBF5v5Dz0rs8nPqfi8jFNfX5B4lza0YWhmMdCWno8ZqMjS0t69hryDkx90otmhIO3X0XCw6SOKKsha%2BMotSpur7vr%2FPMd3XZqrAQ2sFnPXXE1tS27QcP99zU6XZRF7WCD%2BhX%2F5sbQJxbnAfm2JaZ%2B77zn6X2Bs3qhDcc5BCb36MjPbKY%2FJ0tzR2FXhQw3aSilkjjaXAbSkl4i602K%2B8E6EEXAeMcXbRbSMr23pXKXHuhbBZwZMGbmSEJrXI%2F%2BTu7QQvef%2F8w6qi%2FwQY6pgEYnxXDULRVMJxN0D2J%2FTMShGhXE1h0aai5w%2B85MJRua%2Bw2HgH9W%2BLJjtsLzgEWVky99pMO03zrfX41deiD1c2JoBqjHjMUkPoV6C0MMO2aSUlhje3ePjKCCOiOyVYQcQimYrTOlWiyMTqo3kC%2BqM6hBhX1dEY5bzZ8zBIKW2dod75pdKb%2BnEBmHRY5YPhWdl9gwFMaqnCdnZNCx7yDTwj6BfpiGIor&X-Amz-Signature=cba135b04baf545b0126c23015afebbba0492909cc6b4edecd1da3bbc3304bae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
