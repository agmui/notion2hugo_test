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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQISY3TU%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC3Slt%2BPKg%2Bed1iJBRj07WMyLHi7Qug9pdwJ3k3AAymAiByjXDbcrG9oBETC6G%2FA00yAMjGhi6gxaXQKlY%2BRrIo%2FiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5QdhmfE9BETANQvKtwDa24igwbajsbfuCKnxwoq85QfX1X4rdYqCWFYctJqRUbcVCz3rT4K%2FgjBZwzpdwbQgZ9JjrqoK35HTYVinSC9Qgx20V0qgBWbnXDru3l09w%2FfA2HHuadBuv1MrqRvj9rduwWVqY9u3nketZgOBp9VIFkGOKoeIz8hh25%2Bfie%2FY7h1n9rZubhJoFq4Ngbv8pPNvRhIuc0sJg0CQD13jqimVvJMJOWvLkmqn8vIyjuQfkvP%2B2pv%2F6x5T8eaQTFNnWw3mOh9XdIvHvCNlo7ZZhLk%2FtJof7y541oPm9jymMjKNpwHFCYFuWm2%2FYFCmjWdJIe1B70xEkd%2BbEO3XON21idtAKCWKaZYpTZhqRvK9GfWBaHQZCZ7Dcd59Khh8OXjadf4brpW%2BRWoKHn2X06OQrcgJlFBtE%2FdkjO9JU8%2Bina69stK9DfcWp6bQe4BhvsKmmDU7XRXaO1djy%2FaU6%2FEcYOIxm3fPFh3f1H1ZrTZXek9vItPUMVv9Z%2FNd66ECfV%2Far6cOGldi8r3yPKFyRReP3MPtv9TOF7uuTaJ%2BSvoKRtugtXUcPAJrpJblOshJnKoS%2FcwlW4lUe478bNbTUQID2HcHJz%2BfGAMW0S5uBGAWvlscxwvwscwJbijrtZQz9EwgJm1vQY6pgHkuZPXtl2bLlh3bew1VDh0Ons%2BoMJl%2B%2BByAnLwvkLqMW3kFLqNws7fumEcRxlDLbm7RvTLO32Y7ET7DSFRlX7OZ%2Fh7bnf9rzTluvYf5QbvOwlWRbB%2FUOeTHMp05b3pOIBktGGaEyOAhqofRBD1TBa%2BKGysBTYBS8oX%2F0dyMrZnAgspbVi74aoOGBBfv0iRfw2lQVfYLCmCdQANNWoKRgySYY8gp7IG&X-Amz-Signature=e72fcef90445edc14a45480575c6b36e2e67481e3bd26cf28e4fcb1b35bca8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
