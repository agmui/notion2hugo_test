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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGW6JYD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhSr%2ByapXeVNgStH306QqmLzgWIv%2BG%2B1vvBW99r4G%2F%2BQIhAK6FzLcwjzE8Fp2%2FfrFtMgsTXJse0SxWlqDnuSqAavQ7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtqce8kbWKkARqOQAq3AMRbALDVenfNDn5rXS450Pv6JUfcaJfGTHQ6%2Ft4c8KZ5Ou%2BmXEcX%2BKJwwRdUqY%2F0KA2U0fpZ0MHpgBuzpdgtVyWdSYi1fFMms2miRAc6gErdxT8Pz9XgY%2B9FpJjsIMFtL3I4uaH3DWxOQYT5Q29QJHsbOXB5uJsnfW%2FxbL9yrt9xD5A4%2BJ9COQrwX0nBilpRdkYUsm89%2FnAtvpWxQSN08K8A0O97FY%2BPuNTMkvoPuAHC6YqXSCv9rg9%2FBQ9pSohg9ijmYFeotCTi5lQXIFUn0QkEQsWeHQDRnY%2B4PQCWt9IfW7IFdCG36FeWgC%2FuAz29%2BJn18Xye0NMbW%2BlfUgV5q1UKdIshi9sTel7DzWcWyzbNBpS7X0tSdf0YNPUnvwaG%2Fkz%2FECZ%2FOUm%2F6ZXT4zIKLqTHPdL6mK5qjjgq9zukZJbdQnScOCUQl8IX0vDiAfBvjcpYqdF86652GUtiULtF488lZmLM92PwwikU5sy0eQU72Lr4Y6yKB5cFN9jTZi3XlbM6Ayo463tXqoU2Fw1ctOpUTiddHtDBi6gqJP1e7vEDrTLXAOWMHrfnatVxDO4tPocyCJWKjRxFyQUWppn4SqbgHT5U33h4vAsJ9GF%2B1UFog3V3CyykhK57va1kTDe0djJBjqkAdGop%2FFa%2FibZbSR3F60fLneMLeaJobApTF2tyhUp1UpV7QRi0HbuEHwC6dYh%2BeAUlkOiJ5xX37iNtZUGpOtADVj4TT4EerEPmaBDWPpDYy%2FDGd9sdlv8fWmjP8r2iYvYTcrwnRoWEI6Xgj0bKFgWiwes%2BK5YdwWW7icBPbU3cG6oS2e0nuyYSKrwcnLMlrXpbJgGcK538u8fPyZ1VTSeRB%2FVSMBb&X-Amz-Signature=cc20c9718c1c1e70c2158f21b120e6239f678de2b1cf5a5593c001ab8c77233e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
