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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQS7ZBY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDqicR8%2FHM2huPMLo3mf8phlD6JZABid4YqY2ueIpvkygIhALmbKUW5l%2FNPLBY2gdrtTAaEuLP2o3WUivKfvu%2BfE4TbKv8DCFAQABoMNjM3NDIzMTgzODA1Igzvul7%2B7gziQgsDsxMq3APD1b9eM85SfBTIb%2Fes%2B6DlqqxGoLJ76KUsAd%2Fj10mPE2cQOZQQEDPlK5sBBYAIwCyRyC%2F15Ab2y0yizRmy9b4LBP2Y3rTp4yTQl0JlKu4gJwRrvsGgjRRo7IsNFJ3V84Vxx935ZPJl62hmGOXGZ0Zukk2BaCP0pR%2B%2F%2FVxpJNb2c0HCvTHWN%2FvSL33vUfZZCMysZUoN1n2dcCJ%2BRjxUrkmG9PHOvniT4f%2FrImm8rjwlFVP4LbCKO%2FZuDTmCOAyIqqmrR59ole7OVNp4sRbZSwd5lsr5%2BPNjZrkyA%2Fq1NJQM6xC26z6Wl3sdEJRTSbuqbhpZPZzJ3ygr%2F8BKUbyLYwOSXlBndQo5KtMSgV4brFfMeQlLYSJ5ZUu46ems3MuNRQYnzwUhcWX70sq5eFRk0v4JKB7DvCBxZTzVKrDvG3xm1X1wfXfEjq7yagD6kMLv1kmOWwER3lHZidsG8krPVvcaGHSTh4p3pjCbX59GAeclKkuriRWA63rabprTXjTYWqW58Q8csKTNTOzn17d3HIimLkanoZDwP7VQgRyMLm%2BKJu5dwR4vanBiW83Jselv%2BAi9jjhxYHoIoQxKNwhQ5fhhYnpOZr9TunKoqpF3%2BB0AOWa1jzYMJzxzPtel3jCj%2Fq2%2BBjqkAbri8znRuwBl3ClVM%2BWO0z2wlsFvaYzAL5sYCwZVI%2B49jJdG0VeAFJJJEAdiYeQOIE1IWwjeEr%2FKuU7y4FT1M2sFMskX0jr%2BQFLjWPJQECdj44laKzgymRFDnTBwoVo4LU5VqED5Oy3w62NwnPOtBStQ3LqHtaKtudkmGP%2FxOv18LFdSx6S%2Bm2NBwK19dpLUHteNB9vfNqKSsV8ahhdSduPTnrbH&X-Amz-Signature=a816a21882d20bbb9e05ddc6ca61dff7d59bbc0024743e41b1dc28905b7c7168&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
