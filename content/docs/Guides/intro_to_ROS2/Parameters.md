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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LVUTP47%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQsbAZZI8ZJN%2BTpp8gfBQ4NBgQq4kPN9wZI8rGTMn8%2BAiAQVHDJ%2BT42RI8oT17alHtWI1YFOyLOdrKok09h7W9NRyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Z0ImEXFcFXxkYGlKtwDhSqiPptME%2FJbgU9lFDeiEV%2FDSZe%2BerW4yCUyFSF%2FSONqrVZKFMAQqpGfimGx8jyuIH6NAy5QUIJRxp%2B6RpX5S3YHlfUzIo%2BXXSrcsQy%2FqRWY%2BytK%2FQlBhreDy5otQZoH41Xq5r%2Fx7GyK1W80wiuSLrHiDGGeygISdRL3SP6lz1eqzuKqKl2PTDB8N%2FW4OrYjRYeIAoVZ3OWc4azGKpUa7bFirb8XJ13xcpy64YlyncWUGpgtxWsjvfpUpnGVqDznqyBDh0JpRDchSp9TcAUNKIufmCc%2FR29sY6EAEqDwekxnxr6M4UOtwZH1NaqYDH%2B8JtmrdwQo9df9YBONBI7GyFCMqc4fRnbna4I51KwKm2%2BlHkuL%2B6uC4JiOOi2GWU7NIAaM0lFmLUl4xfmcRJjKJ1UCnfIF%2Fcd93mursxF8b%2BDSGqFEMpB2r2i2jlK45KFXC9dPjGl26G0Cg73okGuSQxZAr1p2rzrLgnvStCRa%2FdXRj7o%2Bjj4QXHhdsR%2FkxfksvKqhHW6IYobPnTckEnibLb2LFW03H0AY%2F5CUebN2cQmKWINq%2BkVZBtJgS06%2FX%2F2OprkKuwS8DxvcD2lriDh2%2B4XBX9DzfL%2Ff9L8YaTZhZG5JWkWRf2QzEj%2B7kFswzvLmwQY6pgGy7%2Bobnt75VtKTB4ROnj8h8aaWxWzvaqJy2WI3sINhAmPEydJUDKYmT0h%2FoRv3ELx81YkXsGDaexVjx0y%2FM7dUNkDhiEyeqahtRCfTpJcxjOZRiHYzQIb1pL%2B87WUoHktaqTylczR%2FMljLCe4s3MwXGOE7Jjz3u2gFLpGydMxulE6Gepb4kDMpZXdxgG9j093TkYvWL8HIoJz04uxBsvNtRN1NLmn8&X-Amz-Signature=d3abc041319a75a0146ca855a1c3b3a5686ad6480e192e6a7da3baaf0154aa1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
