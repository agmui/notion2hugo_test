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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SARBQ3XW%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDj9zNy5RY7ngKiUbNjIqzSg1ZANmfoHSe5VygRIE5hZAIhAN9tkoC6BkAXuhs4FTNWgY9wVKyByA3E88GjeM8fH0JvKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCdLIszx%2FLF4lvfdwq3AOCyE%2Bt3XfJ9xTneKX0kDgyCp8pA3%2Bff900BmRAPmyrzohqg3zC7QPiRI4hzSSJwMOO68rqJYhP5yEPgi2nj5vbS%2FC3TcnMGNgrCNX0OmouH3iJNADnBepPFfe5TXmDAypz4V158AoQhspvB0Uao6e0eIg4VvDvi5LBAH3kgk%2FdqxQF3h%2FvAtygSVOFjLZe70KUtP74Cum9g3D1fw1pXL5mnbJgSoaCvvgoXK5J%2BdXafJJwX0CsnI%2F%2BFZsXZg%2Fn3Pk4H2mxLPMxwrcMfZRRy%2BInSFa5yJBUV60Yu3aFNgaqERBsFBEIvHh270BkpxZG4G%2BkZi7ts4iwvMRPMxlxfQfjZHIVz539uoNuTZjQNwwxzh3Z3YxOWFYrpzZdy7EwPEQ28lT1mVMM8oYiBoGsPeWuO6smxNqVaCTR5d%2FYcFHzZq0HuBo1oUdD0tHjemIk9zpv0c%2FikzP1MSeFVvwdeHnewPxZVJQ%2FBhkks3p5IVCgvGgl7ulAzXgl9qA9ngMp%2B6VX86fFz8B5XNdLyCUPih2z0MmckYq%2BL%2FLt4HGhWydzzkIzpMAbHChr8ChRJFdIfkdu2E%2FgQU1czvbsr4ygbfeGg%2FQU%2FbZIKy6vS2Ydx78Jf8GqgsiIYEg1kcNU%2FjDC%2B7S%2FBjqkAZnng%2FYAeuK%2B3HIH6P%2B0%2B1i02My2GkgGsDrtH44qIPFO98UbSIJWOLTNFcwzJ3PZkaLOyEWBIpJvRjXByzrKGIdv0cvK2ZSm3fatxHsUyBSzWB6xzkcpYZQEK6osTtcA2fQPOZGRVBDa%2FRevOmo5dGHtgWRyW2QOqkIzRt0lx55N96EngoPH0sfom4b8iu93GyVxDIgIlhfX%2BTEA1F8V7Yf5aBll&X-Amz-Signature=46401235974c2fbda0629a70bcb3af2256422c259dc9fde9325720f4b10ac5ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
