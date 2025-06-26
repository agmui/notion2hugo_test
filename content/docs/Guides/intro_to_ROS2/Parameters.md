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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657H2MBAT%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIE21nnfjWEcnVD6K%2Bj45AcZqzAh0OoJyCwTRCzPbwFEoAiAjGZR0ybgv9yTdYd6lyTsD4ICyh9UybZp1SWHM35QALir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMwOfEr3HctzkHsRnIKtwDzs1AUX39eVUsba0e6Ho4Iao6yAUBYBTXPasxR8pTy94BvH2BPngcp91kIKYkHc5iDiUO3If6bY09DwZIPgtlxxiOtUW9uVN68LC4w3wOqyM3mrmk6JwFrWq04iye7NGCI%2BtjeM%2Foo1CzqIbiaRHZ2qV3IEdrobV74nhfwF0USvDuotKoscvfSrE0J6IgmI0D2hNvhd2eI50rhslzD5lpBzG7goK2b65Dmva5STPuj9aYasuJ3CG%2BDwm7gdLOcD0vyAx0xkPxW3QyJsVeo13%2FKFeZl5TSt5hHpvqqdBxdqZxSb5imrCiBOXRrA4IW%2FsymtYwGBEzBmCaCzYmpIR%2FdJKW%2Bl47dDnDB6TCIDZ2RuR%2FqJtWGA6GfjLUF7dyjvCvlQRFfAY059k5aZ3wR3ZpRVVafGQu8F7gykZ%2FwDEWFHB8MO7V3CxUYd0k7K5OKNPAhl8cZcrd5Dxe2UjT9JqkvzRVi8CyedjE%2FMdGgpHGlslfENsMSzDPnjTL9ir2zdm2alpKzLo16SwxzhUe40amMlXGdgxqL8vGBXZ5gae8c8es0tqsfOAKueR%2BIb0MFPiM1v9I%2FB2YeY41%2FxbX%2FGZsURIyRzSMyfHvCHtEW6%2BILGBwXh66SncGgAnYotdcwuanywgY6pgHZymtnWfJae9ZCXEz1L5Jdp%2ByLXySIgsvA5wKg9QmJzxIFur3R6Sew1%2FAHmoobLZNAWMyzrs6DBM2gPhLdJ5xIBJczYi1z%2F89k1TLrPeQ7WhvrtC%2BxA%2Fo8slrCjaXP7UA1wONL%2FTN6PwLpfwjQ0qdiwFMUG0yVhE3rO46T7jCwspJi2cESkC4pbpMEg%2F3dxtjYMLo3WGLCABhTxQ%2F%2F5chK1K7%2BvH46&X-Amz-Signature=5db157f91b892a32b454fa8c4855daf252eb92c54a8ca84effa4c9b4019c8fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
