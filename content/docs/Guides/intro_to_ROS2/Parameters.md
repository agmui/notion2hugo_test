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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJEQAHU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUzsGr6w8anBt4%2BVfuPEEPLGTgc5dw0IRRz5jSS%2F1HBAiA6oCenoRgVvLiS1RfEeylPcCZEdo8hRYGa972K16kG7CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5PUMHFQKaHSNynw3KtwDxiuGv6bzbJKILPjxsAJaVpQ7diKKXWh9DjohP1srUIuvWRu3orqRWl5aLB0AjNvNq3kJLO8wfMGKvE3Kz5SLui7ckmH4rH7jbrbKI6Dti3bIZMTBPbDNe37Dojc547JRDAKk54oE9KVyu51pU2GDEjznaYLyBz3UPIQb%2BYlVbxCfa0jLPEJvbHO%2BsF6QEYXk%2Bs%2FjtonOb8kr8UHnEREXEWAtTxOCLgJC9FUllmF6isY3PABW%2BuEdNPH9B1OG%2FLA6ilKlS5K3o9I7jqi1bn29f%2FPdUjwHMWoebY%2FKzCmH1EHxgzN5k5p6Nh6E%2F9w9DPCqp62paZ%2Fy1FFt6%2BivjHH5qLDo7pVQla3r0%2Fb893eGtkW5EY1VNnLUgOEZlUOxTFe8FHhTOjM7GJMmEe2c82LAvxOlpRbVqZBLNI8VPLvhuEMdJrLN6%2BemNpmbouFPDH1tVHmytqp0nH%2B%2FNl4fvUPhylDN8jcs7ZcsawAz%2BHLli%2BZS3EdTTu65NIpKL4RqvQCc4cr52rOrlun0yp0%2BHNBNv1MX70Lzt4FleV89QfuTzsRe9Xcto3bEHmManJLrUIqmYlVZydUeXpk%2BQQxVN2H7ww2%2BN1A%2BgvmWd8sC4jnzL%2F2iP%2BluIX6H0w%2BOCGgwxsa9vwY6pgFyQlAC2blqqjDvb1ZvfVXXm3y9C21Nb%2BJiFJtmcz6wixpPQUPxk6%2FZc2yqNiN9IL6Mhy9iBW0EBGgakxVE9VtQ6W0J6nZUGh0KUgyI8YCMxG5A5IKlZzvd8JcCeCEig%2B213%2Be2GGuJw6TBjJ9u1mB%2FFTTqcwzhAy3d7HJKTDQ5eOAArKG3EL8UawET0o6mbm229NAL50SUXhN8tqRHnEDTJpy0stja&X-Amz-Signature=6d4d8af58669d2cb4b79a5a7b1360bdc7ef7573d58a6f4df21ed6c6e00664fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
