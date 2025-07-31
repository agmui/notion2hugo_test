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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFFYLZH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGSM%2BW1Zmu9nJTaz6Ef%2FB1AWNcbpTTdYTgd%2B3CR2oozAiBZhU9hn4%2FGX5htnuyVSbqVlrlsqNm9a9axfDcYZV%2BgfCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqoUdzLEpQKb2tKoqKtwDYmC1luQP030Ir4o6GmdjS4QHvemEC3S%2Fo3GNObD8DR6%2BxGqMKFlgmy2MTwHsjQukQMT8UFYgrmhu0e%2BBf2EJwl2M0RZHycMsELzNmjuJPoO93RGO4EHPZ8%2BisjkSLvbMtNSaagR%2BZS%2BuAntXxvAhkSzYZ2BYFyEbLSKEyhtPM7mdEMVNqVd5Eynhpfje%2FSZSvehjuejKlvHmt0hKuz67HrIM8hZxh1lbP%2FXzRDZfP7gNWx55NjTzqudMj0%2Fz5rGdp92rhy0WTi%2FIN7joBx3as6h1oravFv7d1zJROfkw4DgBhQr31h2%2BBB3c8WtYCy0N5717HuEliYn19rOULSlni0DTeNlQ24qRnh3f8TdXxt7LpKox5HB7enJBkQw25QF1wCamMw7TleK%2BbpiGSGIGO5zp8hTBkAY71q1l%2F3iLQuGMD7iwOYXOEk4Ggahug1LXOJiw6i%2BLoFb1FM59COVa49HvCW8SejUbp0PmtPNt5wm%2F%2B2cdSiAOETbwwlMKQ65EeJIo4A%2BmTa%2BSRGGFM2LQQZ2L3aGiIHFl6%2BhNzw6rkYhyfT6YTramsHf0ANUo6McTu7XsOvuq8MIx4%2BydFQZEigdZwIHvXGcGapAMes%2BSTkCo%2B1MPcCfrQR%2FePF8w0YGvxAY6pgEjAANu1C8IAzUzUKo1nhS4%2BQEMMQkQOA4fjo%2BWbC9n6ilxlyZG0RYOpvfgP73jIPhgL3I99Z9i1NJ0zDe1P8f6rtuuqwB%2BpmThXGh42FRmBwVosOhNWKiFqen6X1XwJ9qPJkB8qp9S3evi%2FEXpvHFCU%2FHAZMj93tS1typt7YBeiJK%2Fsiqe8Ck2OuGpB%2B24KR6K7bjhrA1pZVPP3qgyc%2FLpY7cXSulQ&X-Amz-Signature=19a886f54488af84a1a74b96c2e3c63c4d780938f2bfb15178949ef1890b2d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
