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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIX5SASA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGYkZ2a4BbUW%2BWzDV%2FvbtWYNffhS8K3Na8zbLqrNVe%2F1AiA0c0WbA%2FRfQWoYpOIZh6aNr0j6EC%2FP%2BtDEY%2B7%2FDYQxTiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq0jSGNcxYhgxS1rwKtwDMx%2FRBQU%2BbEu7pA3nEbgfUkQeoaAXrO9bhl5AsXuNkDceJ6FmlTH1ipOjQ8C7jCGgJ3tK4jNgq3sp5Po9HtEnl5bK48%2BhqjcQLkgUGMsEzkPnNH1oCd8R%2F3dTrZlkq%2BAXzKntEcTROR88QMHNbSUrkpSw%2FgHCGgVSetgmRs52wSuRGPTUVv%2BBUYe%2BMpnw41hYYGdy6lWR1O5l8POW5n2NddOGpapb%2FoY5d517J7Qm1l8rd9dDjObIKeHfws%2BIHjLt8iUCiGsHVvpNr%2Fn%2FN5JAxbCAqAU3JKEb6j1WWguInqpZXoO%2BbwuQb7VpSL9DofspKVk4%2BlRAdQba9q5QFr4GmbJzH2ORzdLpt8GMYEqZgAnYXqEi%2FZq983v6Ds%2BchDpWFb%2BVNqXqgRHFszK1MfCw53QxzoDkfYPdt2pp3%2FBfzpwsbuevyJA2OXXLc%2Bzb0weZhys02s5OWcRPcvh0VlVjmIX8oAZmsmK7aWnu4t9p6u%2BWVIwwYpQDLrmkhY4vwEpPq4nsmrihYAoxlelF0oo1fHqX8qvHy13a9wGEmFvNPhPEknb7e5X2THeHOcfmIwnKJYf0oK5veVTqXx07ew5rDiUJJk%2FjqJ2nrdSwnu4zGDkI42wMUyRzpy%2FBjbswho%2BAvwY6pgH%2FC0bWGiGkefIF4wI%2BkBq2HqqovKCWTSt88USMb%2Bj4UjPPi5zK%2F1EZh4ZZfViGin%2FsTdXaIhVljuaqQ4GRZDs8GTdXo7XW953U6dyF%2FyNtoiCXZqchOlxiSzT4UxJOAXhPuuBkRl2kwV%2FPnLE8n73R%2B2JxsjiuQ%2BGBsiPYuiu8Fb%2BfNRLOa0exB4unvxwsccLDfs8Aa6qi764jGX9IRCV7N%2F9wfj%2F7&X-Amz-Signature=b6c25061dc61f2063636662f9f0219593ef3b57c2072ad1be44b57770f045c36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
