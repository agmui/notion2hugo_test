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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4AEW2A%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCnv3DYBW0axVl%2FRy6gt1RO%2Bsf%2BMpRXJdQ8Ay2MT4Xh7wIhAIwV7dL3zU9u0hMdms%2BE5RyoypXF32HZtZ0NPjk8tkcQKv8DCFoQABoMNjM3NDIzMTgzODA1IgxsbXEfdKut3JRW14Uq3APZkTV0Gtutk4ZVyAM34hVCtPJ9yYi3zIaleG0WEP4kXZz5CVzJF9S69hQn2jG9Fj9ctx%2BuBygieYet7NY7U5ciefwugfSOoJ7xv%2FkbiuSPY6ED8ZYDt40pZ1GJJI5Yi6kHYqU6e99ORUuitmOE%2FyG58yRidj6f%2BLfOJlrFM7fq0CHBuopidRqmg1%2Bf8FX2iQG5p2ug6uGfCwJyneWHMsY1F1%2FlxaBKSch%2BlTSUZgVEguzwGQesl70wcEzp1AfK%2F23osTkMw9rYYM%2F%2F14EPP0gzToULTnI4nxfcdmF4X8T9nYqa207jV3KPNQ14VOvut41buw%2Bzc4dGSrrwltYRJJ0T2WLaWniS9skMwgE9E3cAoi1iM3tHb%2FZrx4SZfcr1Pv%2BMp%2Fxfq%2B6j0ZM6IQKojbxprx5esaacA9QL8PG3YCVYiNZ04j5tbKXN8GLeWD3ybpJgCcISQCItTPzPf00JcG9%2F6Pw7K2TMgCRAthry%2B6pfshGylIxKhm%2FbunUabCpnEi%2BuVc9rJY0%2B7Dr7FMz%2F%2BI3x0T4QXtOlmgJfrKIs5Su6ntRwWVX4RUp3HGIo9FCUeF04cMhCQbphCv4XGhKF41d8dL3boydl7S9hgIPNSjmTN9y2u8CiHksZkxXstzDRs7%2FCBjqkAWrd2hav4kSWftB2QlVxpvT24hVXkcq87kCgKGbWeH24F2Kl5CVaPZb96b00IldWdkupZ5V6tV7iAZ8%2FVXjRdxnurIYujg0nBwTV1ior%2B14i3nQzwDNLpr8UlJYakWK1fm%2FBCnqim1Z4%2FdRXkeejUKAMO1vyFrxysj1AtHZFCG6%2B79u5kcAHRw3%2BCBJ0VpATgTSCR%2BZrvuNvbL%2BGCWqBANPUmUMf&X-Amz-Signature=1bb879587dcc8af8257f68c6eec812ee1e8a5f7ac404e8c3d92f7a06d2bb37fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
