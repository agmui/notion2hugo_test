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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W24XSBH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuF5XMtLybeLnxH%2FTcdTdlq%2BBGzqk%2FRIn6XgzwOuo0aAIhALuWcEgHTh%2FM4Na7j4PmrXDABYUzwSm2JX6A2ha1ooUOKv8DCDcQABoMNjM3NDIzMTgzODA1IgyQq9lDLAU1cttoUGkq3AO53vv%2F3MyjJxHHqXtiA0iB8%2BkEJ1t5OLRRyaF%2Bwpy%2BPkV60AzOuwP0%2B41NdgOtu0wFSWqGOWxvXwY7ooXmjOkYmAaoGy8voIyCn1yAhzbXC4w00W6jAfzzwNKxCqqJ%2BHIMNGJG6Nq%2BsfpTqRpII7s1%2Fx7DdnCGVN4jR9qtG2rRb26oQTD3uTOCV15mw1jou67hU99Nz2Z2dawg005JMI%2FKPdM4LB4Prr3Sv9qoEqELKCpCi4J1jJE9QIR%2FR1oikJX9ITOyG2y9XW7QMjJV2dz4%2FMWAqnj3w39JqXHdOqRbvSkzjsB2f0VpQUcLUsqsS6u6AFLmE1ZNk71ACOTXfppl443gAR3JykI00soh6r%2FpfCpd1PltJ5mItsGXCCWJkZpfVETbTmXkrzptapMpkaAsKc4lUM%2Ft35WGDeCZ7jLsA1OsoIYsus7VZXH1FazOHj9Qzc6n3fFA7U6xP5r57K26jeRd5CbrUCIC9caJYrvrWUjK8VO7tlo9GVktV9NaPvO7GgxLZGH51VueE4wxCTJO%2F9Cy135K31%2FfrDEbunXi7dW%2Bm6lULwn7bVDfr2FjW4J2S8P2F3RGm2jbJQw1PPvpnNKqLy9h0WGbkSlikm0ET1eRFI4lEb58zbVlcjC9wsa%2FBjqkAWdZOQKMhzYp8TirNECydA9m3AgWQ8QjJfOuVB%2F0TmsB4t%2Bbrfu%2FIPOqgFPIfHNUUNFL8NM44rVUeklyB5DBqUux%2BRvq%2Bm6s7OdITW%2BGK0pbLLZZM95c5Va0Ad%2B4LQYsmUGK1ASDNkHj8DbPC2FM7Qyjq22sj%2BDTcNsI0RsTXvcxaTnPZZ8MzQMSCUyfvRNXZbB301RBqVmXvM8kYTJrnKSpE27y&X-Amz-Signature=963c0041fddcb74a23c12d77b88173c805ffcc734d748f7526e5ed7e8418596e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
