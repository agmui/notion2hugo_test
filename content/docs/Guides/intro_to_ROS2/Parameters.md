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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3UHCMR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDjSEju1YSsbo7wsNy4mUOA8BJnkw0CdzYJ40%2BHdHIZTAiBIF2mG%2FRXLeVfssE1UhUBGNbpjdzE4c3i4vY%2FJ3Z0n9yr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMmxN7WLRxctOVGH4DKtwDNRVm58riehB6QvZYzVghNnmmZpGR3bm%2BqbBz%2FLa2FHo%2FHqKsOwjys%2FNjvDTBTBkpapBajnR2pWnwbRn6WkBhVSBpv8O8CMSldxNI9ggmQ4lvDmhOMYB8SGBFIWC1xx9HOPweAoZ4t%2BCV3YEYT5llpI8M6bgBN5PhwYpBh9bSq4XgtNqPjRlaAX60yL%2BLZHsXflC%2FLPqxOSpLCNMXdtU321j%2BHTzFpyYJTkx6PhD9%2FfY1dY%2BCYesuFQZut1LOnfuOh3eDpf6X8qa3lkVa2XXGcBIZ%2FlGPMMaZ4FhKJsGLWYk3OQHXRFGJMi3p6cw9x11X0%2FgCmVAp%2FDSCsSihqjTfDyVZOyhqf0dfVyb1dWyILYbohIJv0AJx7Lxg35b%2FQD3MG8nB%2FvnT92hdbSZLsQIZfsNG8FIzmuk%2FVxLgKCIe%2FDmXnYbyb1%2B35R9tZEpi%2BY8N2P3L0QHypS45Q9JP4ANYOwijYUoNjUh%2BhU5xg2MZHrGB6OFT64c5YcV6KNlAn53qkk1siFwuwZY7ROdDr%2FWGg6jjHJHYa4r9sWVBcylyFrd6trsagbzUzMOjj%2BJk%2FRjxFY33U0RAEdTK9um4Z1p4TQF9XpH6BKmB8U9xHVPrGl7ziosjDthdfcENpQIwu%2ByPvQY6pgEPh%2Fo7Y4aV4IVsfJC6nYDk7P1Z7G8WvhNKo2XC%2BB50Q6L1pCFWBwBfG%2BCb5P11igJMnRT52XdTEqkr8Z6EKLGAXRa9c92ETFd8n6o0lXtR%2BVW4TDhDDzNRSpP1KFprCDkQ%2BZMdJx%2B4eLeoB8PRMSHNpDzu92Yxw%2FMjYMctdPtVVHJ79rryoJw1lN3m9S2rI8B79Do4K6KxioHEKuoWBVhSqoaTCkQ3&X-Amz-Signature=72109395e5103a61d1f0b16e7065bdcea6e34c9b775b2e0785ab6a44808c95c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
