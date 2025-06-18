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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OL7TLC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqpgJocpKaSLdCgA5BHwNGMGE6UBnKWEA%2BxgL3OQGHgAiAUs%2Fy%2BdIkXqSObH5UiOEXjv5SgdDm5i%2FHd64AW6YID8iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3L2GyvL7mqaTNN2KtwD8X3XRRFAsY2N8Q6y%2Bby0G7j%2Fj5cDt8a16o90Mm5oNMorEd7tSRK8U0%2FI0ALJcJ8d9U4gPao7Aarfj2yFHHBcoweZc838DjVJwxFLImNSY85Eb%2FMSrojU4zUJ2MH4%2BYv50cnpCCssEkjDuzOpfkfSy5sREQ8lz74%2B48rb%2FXyAOps%2BR4m95pN1%2FTmLyaXRRn0tiQLJtTwmj9v01KCqztegff274fvQTs4Cc%2FPSqUkEoFMc5SFS80j18GEbUk0%2FFhYNjE4C6ZcZo9rb2lTwmpFOVzUWZjmGbwUlZONb6Vs7mlNprtljz%2Fh0uF6lrh3cn2eMJPe1mbIG1Tp9FueueBJDEg6dFGydfp7RufQx%2BV3qsx7Deebxl9N8lS9slx3DdGpMMePy%2BBuc0RupOLUFzZjzqPYft%2FO%2F00LoEc7Ds%2BaLW7ew7cdxvcNJxrKGy%2BY9q7o1izwxli%2FkupbunrqDzEa88e0nb1MmVAZgwguwkYmeb2Wo3Upar28DPOVnDXiJirgyZBpHSA6iLjxSIyzEmrhiwty1zmACamfqNxhzeZO5Dg6RLG85nKBzJOsaptIOhqSCSIX77RU8OVNCi8go%2Fx7%2BrLjlj6EyMfeGVQKjXLK%2Bp4456cZOdTvwJqcJx1swpY3KwgY6pgGVy3fMUr5nquamBeSxTPXR5AwXUaOucNkYbc7bgpSJxQkmgTq%2FhIqLuLqrjBxMTJhViKFb%2FheUn08JZVHx41wa7279lPQEux%2BVovNIjnLYQaRApejM%2B9E%2B%2B8pu3xXeqVJC46Ftd7gmhDhBXsPvASr8yQbmjFtooJXd2CBCdPMuug6bsQJV5RXG5tjuuCK57IoRseI6xNTUs3rPfAZG3Ys7f6gQRY2a&X-Amz-Signature=1f7c7c5fdfda8e6695ff026254ade720aba5203311b0164d4aa3d5d9f22127dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
