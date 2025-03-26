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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG6IVAYM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEld2qxK4qb%2FHJIeXUPG4I9HmCOCvXua3QIwzlTsHDM7AiBnOWO1RXChOYCN0gS%2Fa8kiopSo%2BX69rhIDrc5f7Hcqqir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMvKAfO68C8v6ZxzzDKtwDTtYFLaJm%2Fm7Y5B8EMnRsIghA5BsZ24UcayljDq1FFQycN9Onx4qLjtuUGTIQmPOvAZci24lkAIi6b4GDZwuJW9i7GPOLtftgBb9Og3Q6fPzUtu6PaAA7lpZp0cIQtodSipAc6znkG%2BfHKjsxR0HWS5qshxACHXKyanNgzrmjGYvbwaxdFWDncYC%2F4NdW%2BFTAtANjEaMxXkcnBE21sj8tAKrGD%2Fc%2FLInM4XOPeyQfXWkSJ%2Bli0LgZeNtByzyiGPpgbME88OTsS0aXgAsidnFHxjQeCE%2Bb0J7kUTsgCTYpc8pHsDmTNYNtD9NkzrHclJ%2FBnku4olCaHXUzwjHbJ7Ca1UykDTc6ltTBACGTgmUbF9h4vkbfPdZjS%2BlY4Y2XVis%2F9KZic%2BG7mxWDBjNowzb7ivGSnLwn7mnPpQoADV0eh9QsvUrqeHgnab4u5g12sWvWvlZVg8spxhUIXn3CLheX3ecuhKuxQ8SiyyuYnMPSyIDd1HGBFPeYu5iYOeHnK8IU14Yshabb97qcjEvr%2Bt68y0IvltNfWE3BBaiQgn%2BC6ExOpIsdC7Mhuh4m4uVHsrDPnUgoarfZSdyGS%2BQ59cdzpRhFbdyF5PFH9%2F%2Fv4zKOt6F7KfUA3hK3%2FKoFDOownZqQvwY6pgHjyhyyqQHycXCtWfvdJKPJakjJn3GUQifKeAd233FNksc5MoVyvWtParBhyR0lC8VXUkmug7zBOc7cKiXzTdIyj5%2FhCmog6c2ZkQV3QqQBRhq0DdC0VzeV7o3GHAE0r1eVzi9T53nuqvRD7iUvgQauXEU3VRTeLgZjaUjvMIuCPXypTbMd7JSr96bGxDQUTQ9JP%2BwZKu2J5ejKHQ9ea3S%2F4F0Lh5Vq&X-Amz-Signature=345110962d08a9b629fbe63b258b8292803facf56dadc79bb7d228246852e79a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
