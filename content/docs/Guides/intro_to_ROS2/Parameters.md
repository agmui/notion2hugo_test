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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU3TUMQY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4gtOOQ9JdvS92tCZ1g3bpaHgaQ2Jfbx%2FxBBdvQ9MG9AIhAIDaNgIgdAAnS5uf8R95ybZ2FSQUnVrHCYoIDvT0iCUDKv8DCFoQABoMNjM3NDIzMTgzODA1Igw8%2FOdScFvaHRm3S2Qq3ANRUxbY6xkXgluPeyBFT781YC4acTP0Y%2B%2FBXQpRvaBB6DcnVFkewJ58UK4R89jUllgfPEDWJ9muTU8iPhCuq4DtTQsF%2FTSQBmOKOxd6A0l8rd3%2F5ySLAkL2CRZjw6GG42Iv%2FNrSsE3J1dAYZQIz1sVwG032xz8NWfVT%2BUMctYxmZoJe0Kbo50Nh4L05e83GJBp5aIyL9XBzTLfDd2Ahcu3usasXF0Ii1d6z%2BZ3%2BDxl8ziHF55tRavml8drhYX5EMPoUDK26TQBF3m3ioldgL0ie34rY3Aj73Rg8gcU20WanMJ7NjIQrELM3t6fq9HFO%2FdeA3nY9tXAYCoNoNg%2BxtY8qBpH9DiCHwOlKmqFzyheA6iiJWp3SJxXKNYz2NSIiJvKD7Kzw2RSi1TYuXT0tebrCT3n2N86hUUye3fd%2BFynNtxAY3z2v%2BiroHuVJ5M6cfKTP3hvnFTLt2ekAfFI6fi61MN2QRh6DMluGOIxnud1pCpqY8poxpGY40XUckROO6BmI2H1O3ls7sVdbqzTQiKiNF3OGhd4zJtUflsAf90%2FLtr4uzn24aw0trK6mi3L8ALBEmMYKkHDrMks%2BNewIHd%2FLjteU9OQyTdCDUukWaJqlfXL9krXMfJhFKG0GLjDH7LfABjqkAS1btQhLuzjKIZSw0UlXTvPpm0peQMBGKCjgih0SggklyILKY1Oh7AHrdkV1gXK8yWpAbOrFsaEK0Os%2BAJLR3nrPf%2F0g9xydl2hBWwdo5sawaRWuIrtgViTMHBDM8djgZbhmHE5gcQj2oW32uOPbTvo0%2FZbBnV%2BW1%2FuD2v9oTvtkra4NDCEOKsMXH1KrCmqHdJG3wXHGUeZXt%2F9SmMX5hZGLW3C5&X-Amz-Signature=94f8e88785db352423058414a548cd469be5e76e1859d1ac9530f73700c32ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
