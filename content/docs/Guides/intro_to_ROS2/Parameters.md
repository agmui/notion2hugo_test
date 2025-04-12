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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC6CALII%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEdsAmgATv3umSwcEFolrzZRPmnz%2FGujq6ALwqSdCpGzAiBFtpOYiwk6IAeGu3XvWhz2agH2Jf%2BPK0uoZrnABJ97jyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOENFvteXRDIyXCGcKtwDsQYrQju2eRtHRYSzymSBPkRal3qC46UZeQBrC2F96m8G9vAleICAOS46rKmVS%2FB2K6dKaKOEVQCSBoDvxRsctqtdd9Fj7K1D6ICpbL9e91ei9sZrrbEmXkEv%2F%2FNt0ByCnwx2bZqKWX%2BIqv3tRzDVwfzkin5CZw05%2BE6RyLaWA6%2BjUlY3CdN7fHhkkke5dCgvz6WDAAgtlLvR5o8jOuEF9A1Jg5jl95CENBCyKUzKCxmMmzzwygMUzz1xg4FJcoSgkTOWapSbpKgGqLQNhA2fnDfOnHJDCZU9wsLt%2BzeXl4ECZNTfJSv5g4rYS%2FphQXFvySeyMgwwi5rbCJMdAJZx4kxLoL014rT9EIgGDfcUgLQbkwrYU8mYSV5%2B4wk708MugIgmYfi%2BCAcK7pWo2wuK7yTv40qCaVyMAMlrYEEnmCsk8KfdVzylTKds%2FlrUZiV8Pbyt1seXpOPmZNgKevXqRBWMs6%2B8OE%2BrKPzjyAVWlTbKmNEfk%2BvyJuXlXao6kL01ezyoIiBCiMTOIMNt4DS%2BCaUfv68aGmmcc3l6LKuTwSpvX1jvsE2YZbtlcwvqimnVsilp9wvBgnM5eho5cWy%2BV7MlEs0GxvaIgUlH1GOgo4hb5DSkrvCELgWJWB8w48HpvwY6pgHz7mdeOC1bYVDuACS8gxHd%2BMuHKWDWqTBRTL2HgqwNGOU%2BD6hIY4FDFbMuaMT9QsAvFW9u2NI%2BVOgcS4yd7RdWxSmzJlednuHmKue7%2BCVH46SWCNRjpywpyC9eM7NP0KSPIqAuyf%2B%2F8XKycooUSQoCzWDlNrREBfBX%2BX1l5rZNmFqkYzwkQux0XPye2ufbGrLqBiqub8zwyN2KxoUmT1brC4RAkZtB&X-Amz-Signature=1247494c70253467cb1f2f8c49b3143af48f62d5173baa5fd60578b41ca73429&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
