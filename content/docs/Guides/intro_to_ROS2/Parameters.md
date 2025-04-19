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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3556GGT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfr54OuoIEbhqCC1RhW5LTqh%2BDWQO5vyXg5XDsIQsxnAiA%2B3oKaMG7NsUfcdI%2F9HMp0HJy%2FVbjhGIBC5IbsDWLXkyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Vws3ImYe%2BQMfja5KtwD3OdFyqkKXCqSMF91pr8jYUfmm4G%2FtD9RhmjhBGCgxPydIR1lyfGAaytft6oIVQdRfMEep0Ow6YtTFqCBi%2FfOxEQzaBMkjlYhIixvFJ71pFWXFZ%2FEneJXsvlUnuP9hoX1jI2IG4dRJX1wYvSJYt0wVnOheDOGTOQkCQ4XoXomECrU1fglDyHCX2HjKKrCawGd1jdChqEttxLXAcZc%2FZboMqV80g7bgr3ljM%2BCwS9pE%2F8BKHBDTaB5v3Wlm2HLrQy58XFAjUCt9bCGXx7d9qYlCvuye1Gus%2Fp5djyxrtZltryeSkjsPm20Q5YYer7ssHc5KlDTZlPNv12haagVksKyBBJorT4N6nMXFBuE5ljBV90q8ubY%2B4y9JajkSgXsgPvXENHAszjAOwqaE2o%2FYbz1zGB%2FcZebfCAKSeokCj%2FadEDTR8cihSgT%2Fhw45vwze8OJNNVqDqAK3O8T2cue64OTEDyzKLJJrfWiyKbe5atBmjzPx3S8MsxSHjMP5ecaY1VcsaIB4%2FRTJDa996CXFj0zJWAG3CAyP%2FRh1P3wron5VsvobpBYEjROHiv5vK6XA4QCgQLzcAeJN5%2Fva4rwX%2BIh95%2FUxE9g%2Blzi%2FePurLWc026RwdAIFjyZ46j42egw6vuMwAY6pgEVObdNhXwgFX8oSCBKLpfc4TNVodfi%2BDZprb2sg12E0eyhAe3PZqrc5cO8Kw5jKBsDJ4K36Gis6bh%2FzyeGHO8RemJasT4fEdCJBMkKuRShbR7L0Rt6ubIQESJXnCqKs0IC9pOO8sV2xZBA%2FOH%2FWbebMcta%2FoxN5vBh741ou9vafy0nZRWj1kbnTUr4inuRCV%2FZR5blKf7E7WAodOhOGJ2sDj3xJmOy&X-Amz-Signature=ecf35e5d7dd37e76e85da4eb516adff68bec2b01960760f9a7ff68effb2b22da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
