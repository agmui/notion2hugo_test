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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDKXUA6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDM2k0VczEfKjFioE%2B%2Fr8JIPbWd3uh36uOkRG6uuMh7pAIgX52w1CJoKhgiTTZ9MbilAWUS3ydkeLE5Axh2eLgF8ewqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9Y%2FANQEmJBttuvNyrcA0wrhRXXqQiYNqrVIYQOoZljMoinHHC1NX%2B8hT7L0Jm%2Bb3NFXTukIoivpkvxFCwWBobrwVdu9RGF04wTkOE606N5RUkHA9d1gSikT%2B2uPLc195nzGl4Gi58R%2BDkCmaq%2F1muCmsFzSLC%2F%2BLSzP0nxlx0zwaJofSAIsxkodMtAdOvr%2B7SGQ350NC%2FKv1Om3KIkLnu5JYC1Z4ejDWP0S6SxXR%2FIE833t3t1i6h%2BHHkIeK1te3GSHUWuxUqyIg2i6yGyQGVicJE2Y7781Pm4eAyVqIzkvQn56Au%2BxqJba6OdQtmhafCHl4TsHO%2FzZQLIyR%2FZdZS7pDW2QXPvMZ74irjreRYcEvgnFx1%2Fmy3dOjIyPWIimWpyKACt6Fn0EytLxrY8AwSEuYQt%2FU0gLiX7HOmeb%2BJoBpOXPIUMMixzaf%2Fb0mnO9wx0cwqfgnFx8Pi1lHzbl0%2BbYR%2BxFdSnsM0R6YWXIWkN8GWsrZR2Hac4Gc3ejMDRShWmVj1Ws4TJkxW9%2ByEmHBVlIhi5Q%2F6fVuXdRYzoUhLxs1Qea7Q7qH5XNpUpYj%2BjVtNSo%2B9eO6fNedgXXWEisDHLB0n1zBL3UVhsVNXXflCwt2bBAgreh%2Bz5hTsYoiEyEXPXh92EeRyHMprpMPTXj74GOqUB0WK83ng37MJz7jzUU5PyG1MovkGwptoMJtbwqO7hz%2BnWoO7%2BLbOD0XTY0NhsjF3q0woyPBNDoaUit6VL0q0Q%2BjgG7J7fcD0Rus4fx36C0gZ6AyOcPXlrF9cENZNafCu3ntqYd6cREMB1zLZuucAkJof9uU8tUUQyMqnXoayiKPHfk6Pgp%2BD9hHkqtWZpe4yypNB5HgO1iJFV9KOxdhfcgcDxNpGw&X-Amz-Signature=9de14c97610b5047577000757c857f693fe13fd2f46284ab088ae12c0b60046b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
