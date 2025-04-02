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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFESSSZ7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHT70k1hgw80yh3WVUPT6rMij8abJUYnZyMEBvI%2Fi1llAiEA5NA1CqU4NrL7mWlMzIBx5WCNZFn4NpaNSRMq%2FQhB3WgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD89yW5SYDv5DqFjCrcA4QWovl3QU0POMtFrpB9NiqN2l7qBYAVyCk4J7QHvnDCiB3E2btcmF82O3EeL3%2Bn96p6P6lusmH9FPLjJ86R9W%2BxjwhGX%2BOU2yp4%2B5BQklXotWPKJ0XuioYvHO7v%2FuZJgNBC76hoqT2Goi5wbmwznDnJEXqTrTaWMxyLxBlQVrt7EGp4RGpjuVGMzg6u54Q1SAmVC%2BkskjPR%2FyHBSoX%2FWhuEFm%2FPwLN2Asv%2BOUbU9YqJY0pPJULqJo26nufT5b9swV1fuYm%2BxFTzsr9K2AEJjkvi5w5FBjzySZZT%2Bt1a%2B27UVA0hUzYbnxl3esgxEDOWLv8GflpiipRM4reRF11j1ZzYkbQuf2IIek6pRhmCzdVgERybseOMYGFXiSY9tClX6aa9gW8b6anbWcXAElMu%2FFLznuqeNdy0lKUBL%2BGDaGLIzxAyY8E%2BfgVyjgjrYWMOcpR1QiD7nRYFNX6eXGz7fQ7YZwxgr64TC07kjQPTaARcIa2YEqbAZBDEwG0E5FcEdUq2k%2FTHm%2BCDLaH%2FAYSTSS3O2gd9xR4h%2BBgTbz%2F4itEDFQSaVBsfUcgDoWCgDdANfvem8o%2BRFnAcub7BaL7%2FPYxr8ue4%2BMGp5VYbPP9SRBmf8201iXuXxEAQjr8DMIngtL8GOqUBGH51bsI5cBgPQO9SN5RI1cSrf%2BLNnivasGuDpKBEI8f%2FfFG6fSCHV6KIF0Qok42THLOjdqWhmKPKdUvtv%2F393Y2fNjcm248%2BjQZ9FDn9zlvjzb2NUwKFABMzBIIKZibWyYY9YRN9aS7cx6WlHvW%2Br4Q9NlYpyRQsbkrXeq%2FefSwAy4f4ks%2Bp0hmQZHMhCUDdrHNHpFRRH9gfzOfH8G4C6vef9NeO&X-Amz-Signature=57ca9c688a9ee719b2d9dd2af6aa20191fb3bc1a4cdceb1e52182aa93580366c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
