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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QXQQ3WE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICA%2FtsPUmhhcsltD7k6NlpB21F2AE8QD8mO1zEN9Fh2XAiEAkGDgNyAXxUd34G3Y7xf8iN8Wn3doIz1RSgrpqHKjwfgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHw0QB%2Bx5CbNUYRw4CrcAw%2F9WpVVYHcus2U484kP2gV%2FDoxFs9V0fDYxKhSy0YpKeq8jQpjGxX8dzMX37x9OTdgiwlnDI3X8zvr4HtgD75r%2F0HV3PdY0L4ba5l89ESZnPXvbr%2FCpn1LD%2FYnz%2FfXFb4vaiY3TKL2rQvWTCX2wYM3EhhXurK7KEy5davyvHO2iaqeMzP2vf%2BTV986F865O8oEUMIUJ4QucKNoj%2F%2BMNMacM0%2BPtEZ9yAmdwfNHOdmPuD5JQi%2FKmnf9L0VMOCeCZ4i%2B7UnEv%2FfXby0DDDdFItGFw7%2F%2FjkbqxKgWxsSBq%2FFyH%2F7yAO%2BQcfrViW7tAzGPOjp61UIJh5zUg%2B8hBGOfyfjgklNHxKBJsHQW%2BWqpLLyBSODOwb7GLRI%2BC%2FoQ%2B3q5Nw6AbKTlV2kmKaSqqf%2FfCnNNaZjzZFcjs3rJajvwHU77T1GPYYlCsQ8zseOubw%2FiNrt47wMl2xiCtYvRYkuSXPCXHYP2uzYZ9liw%2B7yuKlt98L9LcBjYlJbSF7H6WmFEKRJ7tEG4Fz78nFj8XmSCAZ9%2FHdNHDlbaI5bal2%2Fc95%2F44jMPwpcfvOV7UEGOHZL0IqWsmyRMxhL%2FZddvtzaEuqfDRi6J9W2U1KOttC1v0YnjQV%2BGQDSmcCHlmC9JWMMuEor4GOqUB3oKZBDbqvTz90voQ53378Z8q6jE%2B5RbEbMrOKDC1PQdu3Nvloo1Usg6C8NeMPEVhdvjcp7MpDVgYBW5A3A5ddnhqBPSNMuDbmZU2MKlWzjq4iK2LVAxvHHIeR%2BFWCWJYFcsp11jelah%2BcYXTNt9UtNFbJK02wxDAu1Ck0pb4qBQQ7RmldBT8Axyz4Tu9wDwEEqXyV7INjlFiVVfumCTiHnux8nuw&X-Amz-Signature=cb88aae2ab7341e1ab33c62215682fd5a1b630ffcc08dbbaf98b4513dc88e0ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
