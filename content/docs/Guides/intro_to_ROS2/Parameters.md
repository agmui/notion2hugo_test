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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QZEU7DQ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCj9PP6T%2F5r6VwA0tmEvh9xoXX3kkkFmXjWnSkXJe6gBAIgPIJn4DZ1cE7M7q6IvoK5A8J4k8vjqFnTf8zFkl6Jk1kq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEIbbXqwWMRpnTp6WCrcA4t4YUHayFD25H7UuW3eo0v7tQdzawc7qsS7zscuSYHabUv6yOkUtLLMyQS57Ju9VVaxzV4EZqKrRz8IhgvUekzAI9XHbafvEhoB8fhtC4hHb97jXShprYAAd9eYo9Dp%2F3rg%2FAY5iF3XaXjIVn04yWc2zxL9qEtQmpYG4iPDwwsmmvY1ZCw8JEJMbJuxeCGHinCBI9ca7oWkAg1Kv1FUprOf5Sdi9O6pmBauox%2BX39UA6w8MeFVm0lzXldlQEL1HR4BnwPvQpfGIkriDWoTal%2BC9Qnr4mzpRaK6sYVY987FUime467W%2Fk8jVbjFBG%2F%2Fxj2ntAetZOrE6rpAbyEh8O2zfxE9aHMpwNxiSDfmR9Z4Nuw8rSh3APkGvCx3xxtHNdp1qTa8DBG2QBC%2B7dmQpdSTn3k013x%2BuF24b37J%2BNcnsuIpdOnTUodH8fsu2Aww6LT5Rpk87JTTYi6eVnSzI5F8fce7UUz3%2BBmaAZ8FS8o3SWZGsotXDAWXmKY%2FMz8gx7VSlTP%2BDKzJRa42Vni7Eoo8A16wu2jkgMQKGtTqftD7KSOZ7mDvM90LKcDyrAC5WIbGbbEyK4vdn14QAtApq2b3vjJ37Cu1izQsOm1aZHx%2FUMcsjlD6lxznAglQNMJ%2BE9sIGOqUBSManW6rznkFrFuy1egTn8Dpc4nokLBaCxrVstq8Oaf4SukS0zqfyz8RFLszgUb%2FswcBNJhDmoMPzV6zixEaAnrRpxv5W0DVPjTAmjGe%2F%2BhLhV8NNY87L71EMNalIVy1jy8JpMcvS0Z5DXI%2Fqnj6fjtTAh5LYjqzi1JUmHdIYnho5fC8V5skOmX98zlMOwi0YhJ2vuiWUQnP9dGPSUpVSdQqx7O%2FO&X-Amz-Signature=252875434a913fa817e2cd00da49070bd450054aa302a77ff128f9b16f22579a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
