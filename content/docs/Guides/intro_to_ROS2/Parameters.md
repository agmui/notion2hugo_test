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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEMBLYEJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIDjrvV7PQWYqO6UvHmnpTgZLXomwcdBqXtyr4SRsMZBAAiBDG12NcpKAsUhrkqa0Vr3gYAgalkYa5UIKwfy99Eq4eCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMVBn8Q%2BDTLGQVgR84KtwDjXPqkK2toywnaf7NhykVgBtUve1IW2dxh1cdOWRmOuyIcihrgGjDdojUvQ%2BieygCrpMjg8YhYF%2FcUZ0Pg%2FBRmNwvHfP2uVYHhiDFiBq6yrWZSl4MAI3mgykUtsUV%2BWxw7jKTNc1fnBgJ34BAzYQ8OJfJTnRUG7St2SOJlfLjDxOehGlLHiZVk72L7aoglONmYUtLdfnqII5C47%2BAN%2FItUqFug%2BAHjYZTDawibITB71LYCJtJUUVXonSmN87nUa57SuGzXLFvMF7PuVUdiUr%2BUytjZYTs3D4h6rNItdb0gaTQAYreRvPaTvHhqBEQ7q1KPgRGj4FGlm7SsPtSpmO1yPt16RseryGEt%2BZHf4GP5%2FgFOXhBHe2Hh%2B2fLZzyTULjyuqRwwK0IQVMs5xft65zc9xt1lHwy%2FN5MlSwwzXADx%2FosTumYF6bKFHg336oUvD9AEStS1nm8jcaHaMAqnN1KsAUzSBVoRj3CB21YrKKRBcdGLozTn1hSh%2BLco8qrLOFuCCd7W7YWQKExXBaJiuZnYqmIRSSFbHmF1TJ2Y%2FACCRnT9ZSo5ZfWqTPKQZQAOpvETBpdZUht%2Bjl0AesId0qgjRRDwbxDq%2BguMX5Cai4e3jCKD%2BbCSToI0G2ggQwi7yOvQY6pgERtv89LV5vKaaSbptYXqPd9V9CmdmLbaYxH3bCGPvIj%2BlaFVmehcQD0jdnaeDn1gIIPHJty7ze5Hhifaoni7k%2FhKsLSsuWHzSDW6mQZCmTV60xd729Co1FD8QqQP6Ai97WoH0dQfK805%2B4JEdXipFq8i3A3Ha%2B4QRzN8X4V2krqSS7uGrhkviuNAaCOs2PoR7mugTvJSGjPF%2BHbANwWYoorCO5Mm3Q&X-Amz-Signature=dfed8e9bdb2c2c9422c478af9961ac0376fc01544289038eae727b9bdb5d0ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
