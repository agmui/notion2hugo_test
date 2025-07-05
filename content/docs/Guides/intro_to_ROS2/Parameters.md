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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXCW4LE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCQLQLNlLgZBKH6sOzfSNU4VHZdPloVWbR3%2BbER1jdTwgIhALpxPSWRgZTnZ7TrcCt%2FbhbgdFR%2BTHjFDrmz9AkvnQ5bKv8DCEYQABoMNjM3NDIzMTgzODA1Igwl0S%2F7fRUwFbfVM%2B8q3ANem0WooRXNY3NT0u26o3UJRbmIN2axphdcVhXbdt0%2B01Cot4bJdFEn47EBddNoE%2FXfu4aScv1m3Mqpod2yeWlnH7k2Jam1ktqmfsw8nojZ0dSh0SKTasv20Ab%2BKGunq6YNjdtsuokXvIaPjN3XwiO7iWt%2BGNbDQjFIYBlAceyDUtWjMnkPWcMj2ig9%2Byl8JmjETGtSShpM%2BDg20gCBTO%2BgrkSAKV%2FscTxM1Xls8zH2OpGieXbwHelPmjzhSbZV6e4rvsaijZPn2TITYP3YqsOG0MqqD3bs%2FuhoUkgdUgR9rQQnkOYN4mrviSyrM%2BJkemoI4hqw%2F%2Ft3yaLPQ3qKZ8hjhESkrRy8Df%2FsgrtzpyuJQTwvIQAC%2BhnvGDniyG%2BAqlVQDnKxwBezfd%2BFkY%2BoMLX%2BpI4uND1iX1ctTzQQzsoae0%2FXERhZOgQtLFEPdtEL76uKEK9V1nP%2F84D2GbBbj0yI3mTy%2Fh%2BclyZ04mQo6gV7GXwkbsROfsPoNxxzlhnkNYSsBcFK5gXMX4l7Q%2FvpCCJQYuX4YF1K1i8jYdgWVLhi8IsIfdkZHaptD3XdtpGUZn333DZQHlZtFX7%2F7qkxj3aGsLUA0brZsAcYbLWV%2B8UbUow%2Bu1wo%2FSVCQKVRMDC%2BxqTDBjqkAXDihaUf91zlIP0ZrNPBMgYWcKlTyUXYppxhf3Py1a6Fxh80IQZSZq%2Bbc4XI%2FSV1EtEN9kEHeDp1kqgEok%2BvFoduENn9HHn21SDe1jpXTIIe0gHeO%2B8Ptonlk1U%2BJJoUraLIh1w9jK6kCPrduYS%2BUNCqyxwBRh9gOMVWm22MMI1B3RtPyeeJO%2BGxKiEJRY%2BNoyArVTjo8JtPviNDhr7QqqGxZR5%2F&X-Amz-Signature=883a520a09a28be6d212f53cf5af2b51ec64c6817121aa44f4de4cfcdeb95a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
