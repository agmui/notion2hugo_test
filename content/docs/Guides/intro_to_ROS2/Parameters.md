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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDINA3Q7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZtUsP6%2F3seuvIcsHUGgTa7CZCMPA4NeZ97W%2BrwB4XAiBbe5iG1dWCIcfjWthkvLRoPMs4RzsFdD6yuFOn533D8SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj4Kjlo4zvV3sX4UyKtwDWQbUFGlafFs%2FoYvXrz8VEGH4e83uyFt7I%2BZNuaEyaOY2eE9UvyOM7OmEWDa9nmCEuFKZai9ylZrZRaLXUWoML7ljQEKf4kisEqFMbdI1xDP%2FLsTpM%2Fo%2B%2BKPuUyCTetldN29UZgN2wPbm6eaCsoCikdUOZzv5TLHn%2F0tgcI%2BibRM7yc5N9cJezg1xKPslubhnM2ZL6eFxrfoNzzCLab0wB5M6DMg9%2BV6%2B6AmFY3gabxh2cqsL9fl5clIScsPGY%2FrS00f0N2BX3AWRj21YOTGznMAbR7QfI8MDLt9i%2Boz1X3tez7U%2BfGStnnlXutSoFPnSG2emI%2BTDPHDeftFxHRWsZZAjPfw5U5fClof5Jfsb%2FkMTHT56FJ4KwaPKS1ldSbI8EyAHF%2F%2BQEabAfLtiS4ihgeYv9otoOlJXoR0oJ3EMqS1Jo2HxhaxIGUDrDe%2ByhuU0ubG3qxTKsxxg2b7YZpEKtQT%2BUrfJ2MKwQ0zRiuZmZ7FXmvf4SCHN0fZs33nSwI0V%2BXP%2BVfRjj1Cow5aTz3MFOsRGTi71Mu5EVWN0F9SGYLTaBySDWuCK%2FNe0B3Eg8RygL0guwfK%2FY7vwRucRg0s48Vac8mwodPvNvoryFLD8XS3Z1ctzarkpq55%2Fo2ow5d2ZwgY6pgFE9TaaPX4XaCz6GWp7wjObQDNogFtya9gCuxpUdR50gkXv8MGekZLQuZW7rJnvPSQ0zxxzWEjtI2RsX6%2FjvIIN5x9gSwRss4UT9ex7D%2FPND7bTAiqG%2BcQerL7FvKcM7A3MPYhXCprk7cUkj49Dio4N6xZHKgWPWGKC4J12uvLn4vpSmRCBoWYOmIq6NOSogcHI9d7cNZaP55Jhz3CNdY6I7vbESQ41&X-Amz-Signature=ed9ee1a9fb6bb729f14df167b7aaee9dff436bf3efd5c782a78c633771f920cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
