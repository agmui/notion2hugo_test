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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXTG6RLI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFCSwNXp9ANBirGS4a4vvdpt%2F2FwRE1eWt8EzIft5zA1AiEAvmLAM%2F%2FpuDKDdh7%2B5%2B%2Bb61JimFD4pzgl0HBy1iarEHAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdMxZ8JWtLqiuQxGSrcA7U2Gi%2BoNxU%2FHSla9uLeb7FyIPqDrNTnk50qpXVZZf%2FUFvHCc53H%2BShBowphAaIQzQAsKMQoDLwHv8ayDK3POdHnIeg5vGAXtQDw1004iXnnU5Q1QQ8N8Yevvf7Oyl%2B0%2FppimgOujAkcwpW5d8irjy89pbUmnbXDuEzd8GJiF6x%2BQdq0mg5zV5cEdJyR4DwbDg9JsZh%2B4tXRnd6xjDbJj2L1GmOTyzqgtuQCVyhdxm%2FSFCen6G%2FO%2Fpv7oLi8uDfT1R%2FMLRPEUzm%2FUm4NzO9zQ7QQZKMASIJRxUxss7Vo0OhWL7%2BnXogFc78uRKaf4F%2F37uvqvegmykqjM5swzMqlq68MeQwbLWTgEon42eLiav8l3GsGPNx5eqbkiXIZ0HPiiaePu3Yl0LDuh2M1WCFWONCfwDX83R61JIOoh0LKAk%2Fv31eMy1yry%2BbsF2jnYhtcjpqBdum9lFWtLlkOe2bvgD5QEqDEtB491CEpyf83pc5dPoIaUKRDS5sBVr19TErnhGtDqaOu6rDmOxv8UbxFqqW1DbzUUVbTAeE%2BZ%2BaX7%2BvPZGBoPQlYeulFoY838mww2O72D8Ej%2BxiifUOMTIad9B4hLCVPS6jJiYForAYPtxYmgXvPVKi2PXkHT%2BzBMPeM5b8GOqUB9C8xU3%2BFkvvGD21a9fUKgEjTtyzHOQN2UKs15xsp7nWB0yaU6tmw%2Byv4BW4JvwHiWb1ilgrO2WkUZjxKFGzN4FL%2BJgw2MJZr5eVaD1XHhvs93fcFpUubCp3VgJWtv%2FIz21zjp7EZb1cCslNqFRPQVcisK014EwNkQocQvna8PsDpNRjRnWwEi2Y6F7BSXXKccICcVNVg9e2fJQJsRnAUKMQzIFyO&X-Amz-Signature=4766f1bee3127bfa2fc6c80c6e1aeb59d7342806a7ae42003dfd597693bcbd06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
