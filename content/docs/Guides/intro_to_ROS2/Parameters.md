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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCF4TYZ3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXWqpFd6PSoG%2Bstk3LTQxLVziJcxZZlCs7Grx6g70XqwIgSLtVFaClyLInXTN1y4ZPNKfSiDOx6mB%2BhINaUFJGv0EqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOXZdxRaYuhOcBOISrcA1Me8%2BP8XbGBcJmWydKXXtXxl54ZKuVH53ff%2FHf1Cj2l86jBpAD93Y0Ig2MGp9RGaqPES7OV%2BkAl%2FWgxIdrYK45W7aSpJpbFZ2NCWZ8JFExPG5A%2FwO65GcwBuuw7b4N6JfS81jWZfWLuYjqc601bI%2FN%2FTB26OdtCDu8oNKfkG0aadKk4GMkkY6qb5cmbTE5dSRXEYjpeFyDK7USOyuGkLcDK54O0%2FebeQ7Yr8QqH5ZrpCvL8ShsCS1l51UTEI4c9G%2Bpc4wwtMR9IezlPKNF2Nm4MIZyfalrYHQLnMJlpOTh4XlgTRHxuuI8Y%2FVk9dMdA89e7AJ8FSpsi4YOi1%2FcEkve5N7xDYkI9Dcz1AuTB%2FThwxqeNSfPDWZ0sTuqXpZQGS9%2BrbQQpXev7l0VzvUgxQ%2FjdI9wyoz6UB4dBn12BHNZrkft8nZuUGFt8coc8DhU0hpWOQxTS8SbTYo7eS%2Fgr7k8xwmf6z0lXmwkSiaUTPdYVx1Vj1cGDplD88jE0uSzL6up7Hsl6g9SnpN14aOv3GCulzYovBx5S71SZribtE%2FxsVFYzonS1JwUr1VIJ7REsayq%2BdOokbKZSYPXAFkn4aWFCHyEhJn9EbtXtuaXZRnquQq97xpVIJRO768JOMNDo370GOqUBhEzFTcz2ek9RsX9%2FCZhP15pVrmoKySzqw0FM3iSpoE1a%2BzKfJVTm%2B5TrVukKm0OKtvuUd0mMocvyE1inqrGNA0PNq4RVNmOXHdiK20Z0lUv6Rg%2BCQ9NJK1t9hA6%2FDbOxSIJ4FOcfmUhvn7tI2SyVU7uvH7D%2F6KvPqt1OQGnNYd17Tx6ZAVj50JY0Ft5rd82qhfys%2B1as%2FjrUcp2TXd8kvRMZQhSD&X-Amz-Signature=de9b869e63355d5afc5799d3a1e92629e5e7da0564084239482dcb0c5fdcedcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
