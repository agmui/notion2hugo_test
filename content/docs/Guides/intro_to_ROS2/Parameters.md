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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SORVWV24%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCZGs4Uj3uId25%2BQtDSOZMG0ia9OcjIZLApE1zT6Gf09gIhAJDbzalGu6x%2FibfGENMo1tzwYkYXUEDtwWwBTauH53S3KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGfB%2BnAmY0scdkjIcq3AOXXkQ4b6ngfN0%2FDTyORKyI%2Beb2%2BbH0xcFS6r%2FBV4CXKnzY46X9ZdURJBS5lIm7KKcZo1kTadov0tALA0vQ%2BYHmxMnQ6aU0UiPw0%2B4gL6d0GThmHsvwbDzjVw2nmK86dldqtwx8jqgyIyIDUBHJjsftaoSLyBVIgD1HcRDqutqbdWmMYXtiD3h3egskn%2B%2F0Smzi8HJFV%2FTXi143%2F0NAUotFumfCDG%2BVu0D0ZtKIqsAkvM8rksDUFPUc6WbFykrU3Jv%2B3SweVfhFyUA7DrHOo2Utq0Wp%2FPGYdz30Kfq8m3vimWBOjOv78gtK0x7%2B3S7UcJyN5cNpPd7VUKoSzsb1%2F8Q7yM9CsqTOEmCuHnHA03YTSs5mk%2F%2FQ7IOIU%2FDEIUjMo7irfhUR6mziQqa%2B45%2FXt3eLi5pXGwLBbGSKwdnLhXNgL2tHjX%2BtUA2CuazNIsYtJFbOFAWRB8bQpQNEhiDRI3127Nrj3MmNEHnGpGscuCEFxchgCnn5g2fx%2Fr9YFgEhTZqKabkjsePxB9toGP4iHH87li2ylA5senK49yPaqElK5Xnr5V4t84CPrM7IlquQjNgO1qKkqw%2F0EmzlkquFx%2BA574JuGr1vPdxGVbhPBSd9bIQv31lDJa%2BVbtjmCzDSzJDABjqkAbEWkbq79kjfeqKaPYdfRbIv3qcUhI%2BlDUOrIF7r2Bvnfke4Hg75Bhwh1xUVS3hduCEC%2B2W1cMWYkDMlnLxvwJ6tK7mP%2Fz%2FQBQ10AGzIyeM%2Fyf1F3Aqp%2B3e6WeTFInO1Wy05KGXKdlcAGDZcqmysca5sMPjQJqH15MT99dhVAujXcu7MwMOsrCstwfFSpbVCUvhcbXQVMM36agHM02V0b7mpxBxI&X-Amz-Signature=7f9fc41494be1f1a300cb4efc2c625694c0be83aff116db3a6a3c83b0ea7d79f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
