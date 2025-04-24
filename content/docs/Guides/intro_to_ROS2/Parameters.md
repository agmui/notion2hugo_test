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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YATB3RZL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDltEZpPEZkbIf8a40J2BFptImlraxwtN5UHgw12qVYHgIhAJaTNz%2BDWLr1gWicxdsiJhY9itJjfOxN%2B9Oz0YSzB5YGKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQtF0ShxgFJTQG00Aq3AMeGIm6LcB5NZdsp%2B8kniJ1NV6Ir5vJxIxi3EefmTYrRYhAW%2FV3oLmjK0WIp5pv3Lu25HF3pZBRnJkDH%2F8j84lKnzNy56vICtuSQ%2BFS4uz%2FumtT7imA4oS2lHm1VJE3dwuBtHksa7JA%2BVeya88Hvn%2BSmze%2Fmc9jEPBL2N%2FqUnp6M6K7nnhu5k1mJisejJkOw6%2Fd2hI6hvSODbJsvRldS0xT65MRxjwXwCgZjlHQD9msdu3Fu3ICVTe0qIzSvzMID%2BxFN1sh%2FBUONiUqKcC36Mr9RWjfLyK8ifdlkUK16LUiHXpZ6Fqlk3zSfYSw8XR33ItrTOSBBfeqz6LtLvtbbZni9rWSP83iyz3ug0FBIdJRhoy%2FvHBgP9VHsk3q0MD2AJcyq5b%2F03ypYbWo3PbiHprE7kSiIGdILnHgPy3R1sFJfP37tnvEX0%2BRSdtVE0A4Sjf1r5zKGWFqzglP0hzQHcqHZa6Hpqee3mtz9spks25bwnTp9Th0ljedrQblWO1RXOUna%2FKXSU8TfpTGKcm7STgfIU4hgz2vLN37EusRF3WZ1g7LYKY5E8suwuZt1uvK%2Br4YcjSdCQ05em7spdfgiztVynlNw8uuCpzG566Bd6QCtXh58S3iJAXj8Nwg%2FTC6zKbABjqkAchdfOHG1foG89cHzzynCvZOjdIWz4h3dSBPTYRQcmJPF7oo2h7AKV37bXOlVzRhlpt%2BB0VR2oIWZt%2Foc1H%2BzZr4CBK6u%2BJX4gHgGNvbheXohzDfnyeJ5dwIxEOr4oFw2%2Bj4aQ70n4IqsVZp5nUaqbqlaTkoyG9LFFZKXJM7%2FVWz3J7gsUMVGUmmcsVZ026s0LutOoNTaLpsZ0%2FPlebamtv87Kus&X-Amz-Signature=066c649fcfce483df1dd66680d4ad66d86ad125b0128a1d971e5e0e86d356c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
