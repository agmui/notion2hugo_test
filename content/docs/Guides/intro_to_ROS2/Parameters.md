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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJER5R6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGY93oejiIcaevW3%2Bg0wyVwT%2B9Od4jVf6%2BYoM0%2F21AjtAiA9IdZ9izuEPt%2BQf6k7aFs8oQBAPYsioqzj1n89TzrIiCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKUXUCWSzhkgOAYLeKtwDBnK3kZQ5o%2B3ttx%2F2PNGYk611VfX2UOzCjUREGb%2F0soSvMNkBff%2FEXrejLZrm1XBpfhVWawLhdZoRvObYK3ttCffIE6vkPy6E3Uoo%2FkxfBjedhj7Nno9JecOoFs2AFglbSlvCc37KF%2F5WcYEMKpGJtnduhoT1xoakwu6Qf6CXoY2NzwMrsJGx3DuIuMVlSqSqu3jARkDIJaQZHYLK%2FdBpGsVw6QFqma1mp0wC8dArJcwvdnKzImchUgKFZiL9YpCGYXrVMFK7S3td8ME6EeL11cQi4JIA8vYY7iEJHCHMtXPODpu3sn3XMru5W3iMq6zauEOt3z9cGv8xFw8SHG4LPZSWaTfSLk4oC4UhvHTpeXcPuTFZd72A%2FTfMmg%2B2VIj7hZU%2FzczjuThF5U9v9cPEr9LK0P%2Ffv7r9ynHX96J0Mhl5yzwIPtybminafxn4mBrgFjtzNSL0MPdKJbGy3EqMIcCGVItHYQ0VdEz7VWauuP%2BH%2B9X%2BGSwJpXkFOc8AAzz%2FQYqN%2F9biQtDCcZiRZRuCuudFj7zXh6GPaeeZ17XmIs8WeLifEcBOMaQ9gfTPLB99ulqdUeMbSS%2F0F3EiQwfsmhjAEqrTFUIajzVdGcCbks1wUM7yq4c1fQhMeV4w%2Bcy5vgY6pgGVlWMz%2FWjuxZsQZQCo%2FBmcEhz988Fb7CQBrIc2MCP8vHTYgH7tc1ZlniFcw2LYzGdJE9O8ySFqqO%2FOnSe%2BtrD75hRqk3%2B1fAkUuMD28sip2UZqibPFoqltGG3Auxl9QnqHJqeGdP6eBFvVKQc4M8Pwmt%2FRVggrYW4NIJxwo8Op7mpxGbNdn0t95LIK26JuIhxWXImYWXnttPfWmL86GRY%2FWJyNydlJ&X-Amz-Signature=76b785393e5fa63c7260d16b61047b985d4913b3b33b51b2982fbde7b0926ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
