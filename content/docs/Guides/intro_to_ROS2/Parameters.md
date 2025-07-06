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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCVDJMFU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBkqQ8fAtoW6uyW4GXXHw2e4Qkl7mK6qr9pUPwvGBaUSAiA2fVFxUK70foYP1J7%2FoMHQeum3Y%2BAWZ5i4048NbgKkSCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM%2BGC%2BdW9h5Fq%2BcmjfKtwDtDCC4afrf%2F0ksLF2cu%2F47nsnHZXnBR9hD6MM%2Bfpkthn5jusaPWwsYUufmYW9JTEPdUVQBHbcdDvyAthgvQrYQbD8PM9%2FO1aLChrcK3Evc4IpBjEVjrqdu%2FG%2FUx7LSBUxiQ9tjF8fXUbggKdinVMKm9Ne%2FxXa1lqYkDvho1G70%2FSLjFx9HotcrgAB85ydc1ds9jQTMsi1%2FBJGD0gZVQuJfPVfvt1sKj%2B4u8l8YyJ7UjuDWH2JHkSOiHiCfRnphtchVSenaBm5ie823jVH%2FAoW0%2Bn%2BQ8lxLozXY3PCV9kV8dwvqbplW%2FI0Gcqh2RIiFEzRdOCfIMNfvweRY3mxrwEBZAySf4YN5PHUsvXR%2BjxImMt9iZuKw4M1rZu4fTwx6LCGC1mLuMoHFx4ne77%2FbB4d5TEYKY3MSmisKlOHl5WN8kVOF37uyAEpdYSawoSZAzlEOKlBGKLo2th0cZPaQLvON2wYf7Jp%2Ft62wrZgpbVLO18dvFkfKmz2gEKdofMcZtBeOIFm7ldMpLoEcioAxdEjCR1xYowW07U90CvxTxM5Jgbz7lqLXxe0ZuMrQwErVnnWMSNOMVZEgE3L4%2Foqj039U49BPYfvazftKhQTbopk9ESgi%2F1%2FlM%2FQm6uIb%2FswuJGnwwY6pgHcf3x5xU%2BsDj0hAEJYvDGAV8JZc4gDU93OccTsHpB6dKH%2BBf68P82BdviS0sWCdFYhAqpY859GFKfXcTB1B86ZmGmRAS%2B0ubsXD11BE0mi6c8DF4%2B1KgETyuJGNrMQVKBEz3to%2FiZHxSwSV%2BklyNrjdR84FhoHOfpIKbY%2BnlyOD6g3aeKrq%2F3KtWUTsZP0fmRlEDLoH01%2Bxa9uxRgJOdfWhbtRywsn&X-Amz-Signature=158e337ebb88a9823683cc6569d23ac4ec9b600ef3a7035e7f87f893acc3a898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
