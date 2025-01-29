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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJ5LL3I%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvhwNKF%2B987FtI39BqaCrJiV%2FaqZ7pC3DRd7uD5yDTkAiBQV6SBlwmrAOiOEmOlV3L5PEAQ1fsBBzxV%2FfyHzbWKXiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLPL86t4YBBcFDbpKtwD6sjij7nITNBYOxO%2F%2BA90nSe63%2BVyotqng39AUSA4wFemf56p8EICCotcFknAWtj2etpCNf5dN7Kpu9HUHTvTDU7HN5Z08Tkp21hmbwt%2Ff1zuJ2AaqAeOLg48RsuwVME4fAWaeciv%2BW5R9M%2B8rkLFFtLW2giztbpem5dHjfXMXheHHzBRIVK%2BV5eFfh%2FP5%2FFs9N5BdVKcUQJ1HK2ZvxhmCBAhW6yHSRwqueB%2BBnbrMGSwYoLwPZWpxQXoV2h%2FGgvmNmAlRKJ3pPLrig9F75Of1EoeALc0HOp%2FbG8hiZ0j%2FUId7TcXfhnYOXohKHDcZNuTvJg8McMKVbH9D30vgzWM4Z5%2BWZxBX10Xfd7sCmnxqvcIyw0SXn%2BJhIMS1pv2UkcY0S8wM0yfdeLDJkG9UeBoZJ4L3Y%2BTMYaFPX2a9SBLh72KAvqOkwZejAjhw%2BX4%2FyLl6Y8Vt4A7zBZMH8ttb%2F780lffTwkIXstDJ8PKW5raQH2Fd5RBSflpaNXq6AyiB3ubxItb3cVGa%2FQOPHbW7LFZOM1gEe%2BTAbwDSkxUWE5Akp5SUJgIEE8G%2FtMsz3m4V%2B3STArtGPdrAgOaNGB7H9AkMqv%2B5pvyWbuKnQkPRETyT3AtoZ3lXVdf3fK3NE8w8OjovAY6pgHLLrJFuoFbTyJvryMdDgoEyiw6EF0yomQuA7yjbY%2FY1C1wgYzkPIy4%2FvjExuVu39zWw6qyC7fsFywkQWKtLnKcmVg%2FXYB0xNOiVzpsyAHuIVeiPsCpJJ7FC2b1X2k0ogsJ2FPaYsW7N6URZSoWq3CLm5FZo%2Bpq9wbUMMdQ9OnSAd7vekNhk3hX3XtRSEckaMAQiCkV19QsKqZU8y%2FNq3iHzEG0rV7r&X-Amz-Signature=e386e65d3e7db034d0008a9227387499595442f65b7d20f4b117d0e960bd5dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
