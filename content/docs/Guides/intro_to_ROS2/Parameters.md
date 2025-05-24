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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEAAMUY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCCtAJndNQDowoCCW1YSkW6qEcOU%2FtX%2F4Nzn3obnZiChgIhAILlxYpNGIZQfUPyRsgZIxkkX1mifzad9ETcOO%2BC6sfeKv8DCBAQABoMNjM3NDIzMTgzODA1Igx58IpP1BblgCA75v8q3ANqi1NG0Q171tbrYQNPK5Msz16oYbXlHVdSFLZaLWFkyjys0qUNEiEbuKjtuYhGn3PCGQ9xyrewNJWIqf5IIDU5Kup%2FYWXQDvg8a5TWNAGUVQ5SpwLphI4qe9k5Zj6Etry3rqHUtjKW54yPG9Yj0C9uKJxDXZnqgJ%2BVdqJwLrkS2stDV8isEB55Rpr90J7613dq1Bjz2jVFvcttxnwuf7xC6nMNMsUiHkC3ZKoFCC21u8n1fLRLOx3G9ZCujMrUlym7fDUBpDFcLkypaoEP%2FSjmaUQFW7CcPLeeW%2B402IJc9oOjBcKv6bP3aoCTNWB7838vL%2Bj5W0bX3LnFQl9igGTkKt62fCadFNR0GQvVuPRuvSmCkQFw5jRWbs5%2B16bpTsDyAYuhC5th8cwVxa8L%2FTKowmrhpUkVz2JZrN9kres4CmYwyQ0dhsUiJZ%2Br8PeBsVuyGof8e3%2FLzloG5MDoBvHCxFIaLkHSqt5zu%2BNZEOg4DxTvn2RCGpQSdS%2FQVnmly9beF%2FmBfIcfSMnqCzPTOjGroOig2yecWNhKBlxkGKkBLGPaTyXZvbfadUcGDgVmNik91sq93jnZvxZuP3ZrlXugSJPbpxBWtAIsfsGue2zkNjI9iDs4BYYFEY0hRDDl0cXBBjqkAVxseYXAAz%2F7wavK4qiN%2FwQSST%2FBvyp27BCDnCfHe6WQnu72N0hzP5Q6CLh5mv6pb1K9iU8FsIqvTzkbBIeUi3BDnCotLc%2BPocoH6RM2%2FGnxjlEsMXvBnC58p7kT%2FUWzWd6mQ%2FTjPDW62IdDuCULW8Kyo4fJt2MRRLwxW0aMbXGgq3jyrrf9nT51ynIIlAn%2BTP%2BKtE7s0lYbXRAhzgbtWSE3Ao8O&X-Amz-Signature=274d49a6de6b2f0d6b0bfc7a51c93e275a15e008f4307ba988e3f6a3ede8bddc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
