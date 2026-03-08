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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRPOJW5O%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIBrs9vp7W7xz1zor6dc2y%2B7phUcP72So6uH%2FxHOsbaIdAiB917lqgyQY9GiUfObnZN8%2FLCM1Z5IwtwdjobBGFVhEpir%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMSlGF0hVVkygAgDyhKtwDPY6HlMNBF%2F1OG2d3Z5yLWUOLEo8LT9fWBwTXEh7Bz1S2gYiuOTbgq9%2Fw4gJdQe8q%2BJYm6zZM24vZC1nBK7e7GN8XR%2FxVaqqUpPb6Pw%2BwW81b3bVr2s4kSMW7LFE%2Bq2w8Kuo8MarANCTUQdw7yKilfLqKYE1uZGy1hlFNVIjNsbEh41XkY5BhL4zjVYRtZCMy66qzTnTRQ%2FQHGLWAqheGfWPmmzxDvPVoRYsmVpaRYGutRG7oAkLfaGcFBGz8c40Sn9JwgyqU1nAbSpFWDYPONYewlfC9IXg1uY84GfAH9LbVXI2rDe4Svbu3ql%2FNbGSfCmDA%2Fjm5W6vp7%2BsYBSs5zxLiXnSuIzUjdvHb%2F2CP%2F79xKaKcbW4H4%2B8L7oToKjcg2ditb8UfxbN98OA6PynhIVRT6ROUe9npgzkGWOTel%2FlHReE3lvKI%2Fo85gNVC1VNQs5%2Fj3TflMUBIA%2BOWLQYgs0ZoS54DPNA4tNt9bMh9Gj3LuZazdyHqB3O0UhqyB%2FtQ5mo9RKWnH66fqey5Q%2BrL9LjtOopdp8dvFQ20uQdu0A8nVPkNi%2FNdDd1Wp958pq8Ci%2B1MIS9RGh0%2BHBoBr68is1%2FB1sl2jk18cf4MJcH%2B%2FgRfQEZ4M1seS53zjlow3J2zzQY6pgHAwmkGDqvvdxIv6cv0AzkZCnhUP3Tzq85U01RMXcvGK1m8%2B%2FwAh1Xk1rLK3JlOw%2BdTa2dadlcwhM3XWws9mUvIRkbznvb6Th7Gw%2FaFlLW4c%2BIx6kFMJ61N0G3L8dux19mh38j%2BHaVVcTgry7PtGfEZGzOhJj8IimSVgqWGjcp4KmKnIgrg84p4ntzKRMhls%2FYcku4UKSdEskc0ETtWt7ouUOBsBPhQ&X-Amz-Signature=93e61896bebb25a0b651de23fbb689a45edbfefb1f47ed4f46f3fd4c45d81b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
