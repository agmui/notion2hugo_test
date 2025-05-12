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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV37ITGZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDQOt3trVEHtSils2%2BVynZlMq1nes9vT2U2XyQZy0XdzAIhAIAZwBa5v7SsWU1DvEArMEp9EeRFk2DSDxoJl%2Fow9ev%2FKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykCRYxzCn0PksR7iQq3AMTnh%2BkG%2BY%2FtoFY%2FHH84I0pg77xt1yVVoCTc%2FDZnX0ktAbFblgjCuSiSfGAex5H6vOGAYwZhZuMT%2BSkAlG4H0CSlMmZpN7KViKIEZ9T91RhkZFuWQG37ng5P7tuf%2Bld8bBwKM6wuhAnZEG%2BCrSvh1EzXTbrt1iDAsMZIbCBWpUlKvBwZtzeMZAK1EMOhOBNW%2FIPJ8yuf8lu8fy4vGP%2BgZq0x6Yq1yBinCAqxxvYViaOC02fn4M8zt1pWxptmKswd1hJ0a1nrbgzdu68VXh8rTT04QtqVKHeeJxKGr4B2JPdt%2FLoFw2A2gECiZOwH%2BbZgSLXjpfEEr4NeP%2FL2KLTlB990Mgzi%2BYwii61%2BfR0dJ4vx8gjexRuDWss3GyiWBpn0BOb6F2qXRa%2Bd6QwoMP%2B9g9zoc%2BQ8Xee4cgo76dqWaIDWj5gVNacvqNYnJ%2FPm4v9X%2FiqCIY9TRgdKoZvMs7CieVfejzhDGqUQZT3BIlAKtIzkx11VAgzQyoz3UYspKOQuX%2FT%2BsPKjl%2FdGCyKZXCYpMR61ASq3y6AhZQ2EY1hKf4C37%2F9%2Fqthe7FYyzcXmYkC%2BgUCW7iGpYZJ2D0CU2S56E%2BtbngTW8g6JDyPXOYE5j82s0sik3C822wo%2Br1DTzCwnYjBBjqkAfVCIKLkvqopXFNMQtdbd3jQIWZsJ5WTynpqmBgMmD7EJvKyfPHolbTBfIYILNpttN1XdSdoVUtKaICxm7TKpbEk0lF6zQKYHtwzpiXH%2FNNN6DwbYmvDmVKspDOoJ0NeQO4AbbtvWd%2BOROFJewdK0ERQCfxiHVR98Sbw7sxWUySme%2BNeEObfE5tAVnwNCFsFe5lOAnmkYIG5lfbvsKSlrE8xprE1&X-Amz-Signature=7477b1b1ad8197b1c8958fd56e0a5369f0f4c78ff06652a5ec4baef327c9af1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
