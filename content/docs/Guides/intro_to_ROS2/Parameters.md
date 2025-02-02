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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFKSAFU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyilpWymfJiC1VyXrp7UrNXg1bbyQA83DzTIt8AgjT7AiBBXVhNjMq8DgLl2rvupc%2BWGb2O74s4CYAxT5HMRLwv8SqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv1jKsvmqOK57DBh0KtwDUxms8gllp5XQiYNHuU3boLbtP8890VD%2FtfXCVCrr%2FSdLu%2BoryfCw9MGyJV1p0NBWkRS0soshZ9PR7ydykZDMzNoFH8ih15l%2BfuddhPb9gGzVkY5RV5hqF7%2FonxTTB0ez9Mlqb0lVRiFWEtoXXN%2FYwqO6vJkXAzdD3xKpd8LFakQFYHUsvMArPX919yEYkSJh3EUqij2dr8PccESvtip%2FiqC22Aw9tIpq42I2WjBdxBBP0k8FsMiNhKB82LRuefNOdzbuJV4esFGf1O9TGqFxmL52zEv6nQlYJRfGQjB0KY4rxeMWkPlzUrlI%2FQkTmUf4Al%2FB8mkfYjIaPNUK0PBYXotPAEC6odhOpA2xUkZu1NCBy0agwrhOn5KZESU6i7fZyjQ0filiXB9FPUU6d0x%2BlyX0P%2BEBINlT%2FBdsULuX3S0IVbfJdtT%2Fh1V%2BAKK3ADQJQ%2BefflB%2BSRkGPvwAkA%2BcavCaInMqLU%2BAJYHQfgvTR1DP0cp3LlBRK1%2BJG%2F0aIe43Fr%2FDHnVghKIZSV4O4xUG5yeLxO29DQyVK0b%2BHPAHN3GZJKp3ritArtZLARUluip74RbetItdtG0zIFUt%2BJI%2BWLiz8nsIw2nA4cl%2F%2F5IxDcP05XiqZPZmYpjrcPAwseP7vAY6pgGQhm0Q%2BOscz92Kgex11YhB9LjPy3gtX0%2FYPh7wQNIVCvbPjs9iaau5eAHxLA9eQDzWTG5WR2yM9mD0YIqqd4H0%2F62cwsIx4gfO2m3S4Zvv2aFk34F3e5wCRTLPWvf166zcBkzxdS9o9NikmKqwxTUrArtGnj4iQyjVllLIgh%2Fj28HSqjTveXLyodapwN0fDYEdDRmXFf3KL45OhwnIjqyFN1%2BxAXLp&X-Amz-Signature=fab684b22d0e9f2a43169e9b02a26c40f756ea2e16b845f61432b2f9535eb77e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
