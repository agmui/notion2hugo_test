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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDYQTNTN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCgWZKSnFH%2BooIjzPWxZ6E1IgDoYvzn7udX1gWnvFWB5AIgbuNB9jXZqy34q4kjuvai2dtqAvIi4KxoaKO8FMPDU50qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu5pncTeOuTAMHBmCrcA4rmjEF8pahz6IegeriekFRBf2n6SHfDev9U5ziZDtejNspxZKrboffaIKaJB9MsaSSCS5nGdJC3NWm1zjhbtQt4ymTO%2FdwY6qSZOjmlil9hPwvjdXjhWi4dDysfSYpan%2FxZz3VC6LIaNlGi0ftBVa4nKB1GQUHgvWdXCZzNmNCdgdCN3%2BXMbA%2Fc38uSftwnW4EZ4uBko3bkM4ul3Ycq7gCMZrP9B%2FC3VzD%2BoAn%2BChx3wGqCwKKQY68gdo54hLGBx1rGoiJGJ%2F4PJF%2Bxo9HNYWm1uWxcKjCJ%2BuewCEUAK7p7elOfL%2FUz60dkXDAgvmtkWaKVOpyWXYz7OcASPQ7biz2Bf5%2F2xKlFQ48GYWpbIjgL%2BrlTdgFfGHWpyF%2FvG4e6zhcaJkRqXlzgJ2PFOVbJjxNWX27AKVr3FGPJ1kfq1oX6PMVRM01UBICvJWZXGKHrka3IBESBZvOxaGtjVhNCGYzBb21nHPGvbCLXo021V38HUkie%2BEiskjriOhuxURirzI%2FJcd%2BxkYRltzgtUiHZInnB8o8shdTojnSkAj6QEMuii5jt4IujtG4VVk2T%2FYGkQzm2eb8O0AOxHjNPrOYCS0KbqkTooH%2FlfeOQHGQdJXm%2BIL6A4fkZvXIhoSlnMIKkjMEGOqUBp2%2BalKW7v4A32QcxqhtoZB5G9Wf6Ui8sdCPGu4I4YvU%2F6clvx66uzA%2FAl4XFwipD5MusbC7bJ1L9LheCePHbhs3HxXQK9%2F%2FjOC4GSnVVQWvLdvPfUJCP3JPqxZtsJE1Q7lqvj7e92gxQB5wjv9vpo1ZI9F7NztucDl6jQuWL5MBm59MEn5z3ILLdpdwRs3j62RwzpGRpdtIq%2B5s8Eg8X2J7Vkw6w&X-Amz-Signature=93a69353465c01cfa9a32b0871d843fc19c28fa84d0a9f09b0e534b5c6f54724&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
