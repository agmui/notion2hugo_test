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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T673PAA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICB1NaeuA4nRjsVHd769kfKUdB0%2B2kjeAsl5bkIgLYTMAiA%2F8D1mpzpLwdvwFpwAtx9JDrWlt6pegOhrOh9BM5CAPir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMj8UZKV3vBuGTJwglKtwD73tO05k8hPUbsEAWL7sBNaVe7Co%2Bg2TjhvESrcKVg5APWH30qo4jShwo27oz%2F6ROVKp%2BKcUYvDhxXZkoE6l5dvMUiXWqYJQCAhTeVGUDxgIl%2BE0pqm%2Bz4fQ60MCTy8%2Br0NpHAqkx9jbQjy6m5ceqMr7EVyeWPUlckSFnt2uLIaQyoXHshyprIJh4MEQEqKPG8Yo4YNc5pQRi0zuySewDvAxXSv5kzmiWzUDf958GVoglZZjOGGPAt4tfwM2Z0PKH3rVuNIIi4AwzMDipDAfjOaLAKPhm4wBmpkzr3o%2F%2FJrMzyCkNId5zQhT%2BdvLjX2LQJdgDxn3O73K3zyp%2FeMPtmW4aBnZwZsk%2B0ApHbWZ5qMyLejPd5nHQB6NKvvb49N8e0kpbhZyfdOnV%2BZ4er8gJn42yDIt9q4RXu4vqZt%2FcK4eLSKGbeSMaUbHRb1g77jCY4fKeoUE4m2kZFr54j4uZIyU3WwpgbO%2FboiZXviimXDw8%2B557r%2Fyufdb8hI9xgisvz3A8vQ%2FLLZqWQazUgLKUe65lhSLYeNK4KCzCuiwWvWT8kvE32%2Bfxkk%2BDGatNJAUnukGQGFpWcxHM4Xn5AemL7jN4dqjv4X%2FvuB9MmfQChhd3mgDHWQDfnOUVWiIwyurOvQY6pgHQTey2bXHNywbogjXIa49WRzyiRwP%2FJ1ljjQB6%2FgHoM8w470%2F1VcbkXi0DGmv9LRzTTA7f6Y1UJCKXOXgR8%2F82CNamo0CSsj8jcjgqAY44cuY1uxUhYfrd1oVWfI2hSZAvJpm9Y7aGPOIFBA%2BzijNGxpOw79fz8SMRIXB61QqHsDDw1t3ALfwCb%2FoWq%2FdwZ5%2BIOKluHoxMDXEZoAFjPlkUg2MOgbnx&X-Amz-Signature=73169610fbbd1d77f959242a9995b0317dd454019663c061c7a3a638fa31616b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
