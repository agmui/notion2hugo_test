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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37F2FLF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIC%2B%2FrtCcveB4aTCjuB35GOmLUxlL%2FnD4eC%2FkMndWvM8UAiEAiaRB%2By8F7JvnWc0wRLxiqNOtRM2MgY2XwVm00jRT758qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD0aCSdoIajmcWedCrcA7vIoMwzjKF8VToxWizpP7va41bQCQk0cAqhl9%2FpODi6sfLWor14RrpHVTAE6lJVeEWPsm2SKd4ThaAPRolvIXWbPnqsZypoTKb8i73Q59MuCZK2Gm2LHWkzo52r4TdorcOL6RWBmNf4MnwNopl0N8qHCneOm2PHPlV5feqU36J5f2GELpZXqlvgxJZR3%2FqC%2BvVBhKxRCtrrBh%2FJiYt1r0pC7HtET7b9%2B6exoCX6ldkjj7wY4W9L3yVJMvmBeLz8iwSzamw1r%2FNwM%2B%2FVdi9QaWXwRAnPQEKa17YpolEIArCnGkDicG0pGzWQ5bJfk3xJpUBuE7Y9uP4u%2FCRc9Awf93IVy0O0tU7BMRTaxWg1XTRGBx3X%2F9MKmJkbgQDJoovZ3SyEehcvI9WoJUTMFuoWm0TLUUAG4jssraXeFSyxZ0jbcfelzMoizTl5yZWh%2FGZh3SPwRNgqUWpkp%2B6%2FKsSvu6DvxUIUWNHb9c%2BQ%2FwN8Xblzr9Y5lSNWYlUkznwt0Pra3aiI%2Fh18XFkRaAN9eEo3c%2Bz1hX9mUqiyCmdl99hMydO5UXgeASz5CgADfx%2B6kOgZKkTVHHXP3VLx10y0I9TilxkQUOoqQiBiXd0yv%2BwL%2FTikGHcw9iAGVyigq1eIMOqwpsAGOqUBANEjKjcCrwhZ4g16ubtAypzf9Bcv77f3yJ9yXUEqbr18Sx3iL071LoTRubh06EZYGHst3oJz2wTR%2BCagFhqmakQKo9cxURPGXCBVL6I8V6ntHQYG4132Hn1WMvnyw6LdCUFyXACfbA8v8eMv05womtx7rurGCzFB29wTqLrDElWzfu1VB7GrZkQpGJ%2BqyIlEvG3npH0emAJJFs3q%2BWVgd3Y%2FyBF7&X-Amz-Signature=bf0ba56981a307c21056051c9f57a9773be523846be25e5e63406656cf82ab02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
