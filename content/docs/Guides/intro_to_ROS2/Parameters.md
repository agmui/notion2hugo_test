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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NMYI5XQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDO0fL0i4s35QgFA7Gq5SAcvqS4%2BMB4Tuoqlg3ZOIIL7AIhAIfUPLoUfI9JQCfZYrvAErRGzw3u6pUR1cF%2BgCdugXLEKv8DCBcQABoMNjM3NDIzMTgzODA1IgzCwmA%2F50Z1zPKZFcsq3AOkKzXsEXKHnI%2FjTVj%2B0bCtUYaLfRnO3gGYgYSbv9yT1GZgiH4cwtiP%2Bgr4%2FrVXdQaLy6AvbCw%2FLQZx7A8aZ5ZtrGeIDc46molVZzvdP1rvBOrpivB7NCo%2BYKn9xPv6jUak7z8IE3uOYpKxX9aj%2BYZrwTyvdHm2WuQI3SeZfsGBYyFeeWOXjDOaY67XXPlvtLUnO6T5TPWFbj%2BmYfhnnLjImODTYS5%2FkWcZEpdlQWc7WnzaBgRsCtrLJ1EeDcnve2Mv%2F6wGnJJ7%2FqzojYU8QmVSfqRyGhPwF7gefa67MJxs2qBLWU56PTkVTP16PCjVVDvr1B0TDyKktUTmjHpHcaOrrGRWe7BJm6QFJDj400gt77uUiAW%2BLdY63a0fyX0Aw1fCbiiIu2XDzESNmVasCELZVcLaitZ9GWEDFdGIQWifUQSQS%2BNERkipPErFvbIoITn2PibfA%2BOW%2BOfkhgd7Pdw0DNaKPZ8eRtKloSz6H0%2BCfPh9n0Bsb%2F7MtXTdO3a6d6HnROtrurkHhLSCtQ68N5eH9eVJN%2Ba3JdymcfbwP%2Be1KlyMnO1mfGRH3BkR3KFxjr1TetvFzIobDmhrilZs3LlJogFRaDSFS2J2b3sAnfA3xy6vuz%2FKY9C8WUkgOzCBjprDBjqkATyVpMhe6cz%2BaGlhh72Ae8sM7SFPW%2BZPZw2NQXLdwhTEXtjOqRZ2jQ5ff9QvBEMFRJKFNw2pu8XqLYCOPy%2FBqEjMLnSaz%2BmzpNcwNMAjC9BHm33xy0wBCqAoNrBVuWjhc0qnob7fUYAb21jbeS7ay2IFid0Yf04LDC8d%2FxTcyEHcjTEf1X93N%2BoH8nbpbRZrt%2BSC3EwpGRSwjphwTToq%2Fo8oMLyX&X-Amz-Signature=993af2d2af47ff16f62e72d39953573380ed48366be67f577c892ea6154bc953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
