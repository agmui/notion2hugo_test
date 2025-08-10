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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHF5PNH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3rM4qVNzcknROZRZz7rcmlUPwcdhqCFB44K%2FrmsjiRQIgDgS1qoHIdx0v3mZL4%2FTZwt1ractQnz2ftWJ7qp4fUpwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIhjIoLtO0z85Sh6SrcA0e8jHlfbU2PwNRezywTUgWbRXQGD6%2BqSTx%2FNejVBNbV%2Blqufdo6CyBE0tHIkNqPlhvOeqpP5XdJ4%2FvsHVRYLcW6ztMSzjvA56asID7Pt62yCq4KuKxJJi7kgt4ozDtzUYGucMh5ZD3sgZuqFAMeqYKvOPTOzgxu8DUXY%2FSYvaX%2BYg0sDDu6feBKCVzqhkjdP0Sqw6oq3NhgiBo7Vzd6fhvVqEzG2Rvbp5NOiHYsBZ1ElrDXzqGksMhO3MYLkA%2FOpxtN6%2B8DMusfPjzO9LUDhE28qAuhZgMo7ir6vpdh8hkiVT9pBj%2Brk1BAsPE9nMaZoV8LtKfYRKJfprhm3BLw32Q6%2FgeUx8AliWmSUuEEt1I2aR0bRAW%2BvnWAMC5Le1Z3NPmYf4TtjwXnd9W%2Bczs%2BsW4K6%2BxPQ%2BFv40aS1KRYOdfk%2FF4HHQLf9zNl5nVnVAhZqNLP0BkyJxErap%2FNIrbWpeMrqoTsNKSImie089n%2By0Bd%2F5C24wt3nHCUV3GWB1IjXBC1eIVzGCE4QSWRCCSw2qEJQbF1MxGJqn%2BMiijCXKHZ95ahlcoAXyyTryilKOP4mji%2Br6kZbmF%2BIH4NDVgexNwasc%2BiCZBaRcRfMbkNeeHdcJyrrg4yplw7%2BxpAMO6648QGOqUB6NGELGIqe43By2gHVIzhF%2BFAi6pu4zf1gJbovvPJyfNP1unwl0Z9MWRODMCFIGycv0GPNnqvWWhl3Zw%2BPTqYNRwrssy6B3p58evyo0LyxPYQM3Kpp8%2FA1hW7WgbkcYTfb0%2B7uHkpnTSCPoGeoUH4o7UlXlmcq6BTWu7NYotxriFYg7IhZoknYyxvrYI6WkyWiH4YsGvAj068mYn1oz2VhUQ1xcaU&X-Amz-Signature=7f64da56fd700008bbfbafd53b5db1003d31b5188609518dc89262c9f9ec65de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
