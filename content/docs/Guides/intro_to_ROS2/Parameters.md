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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DZTQ62W%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf3oPID6oJgM0Re8cxvzN9vEKROAyQS4fZkSEFcd28NAIhAJkuXosk%2BsXqOZ9db17g3kkxVlt7THo0vKIUUZmmha40KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP2XWfV0THFd1wVC8q3ANjQEfejrHuT%2FqgKJreG5uCmEjsUD5mXwjUX1S7reqNo80L2FO0%2FeYFEQoIJLyuQazQvzYPLLkxs2h3iuz9G3%2F5VRiTvOjBdiyuEQixEBpEDRp7RBKJE3bb2HvQaKpkJItdO%2BldLpd%2B0RxrTPQmT8xImMNIpjDQtJ3tLFdN8mtZ2AnJENV3ErZVNgixPmokHh5lHpbHoXUQoaF1aBk5TLY3Fe8bhi%2Bkj7kJoNHd6X6kijkIIQqpZv4fr8PZ2l81kQcG43oWEI9j4xJIRbY0S%2BtawSxjQQcMfyT%2BL0Yc9O6qFkltf4nWRdzU0XWii1lp1uZdTXpAx6lqmdRFpLgTx%2FH6JsZXEDf6z4OwFaUiRnAoHRlZhKW98jKDeFemhaTHGN7c1Oy83TU1C626pparDRgDBbib6x93h4J4ADdOy8u9cUC%2FtDCh9raE%2FpG3WZvtqoMujFVe%2BwyRgop2uRo51PkecG%2F5N39EhF82Ctpgk05cNxrVmD%2F9gdbw7YReJ2TZCaeD0gNEPY4K%2FtEYUcPiJ2iKZKjc2aoOI2zvHj76vV6Wd%2FE3gOIZkBaecf6wYnoc4yTExyCWs%2BnkBaHhJLFL0azyeeaO0QwZGf8HaIQd0RsC3OUgScwuFwNoK%2F0KzzCx7pjCBjqkAXom46bmSeRF8ylxQKyXvJm1QXOmX7%2B3cpATJ%2Fij99U8QSVOLhQRzRVDsBZCnj%2BKEhao9NmNd5eroTaP2%2BXgVg9k%2BACcJ2qKMAgpHf8DoO%2F4HWbEPTjHLrsll4trUl9F6DYXaF0t6my4IJ9gD%2FihiaLlVKojLhhWSnV240X8mUo%2FuyYEFFFZRZImuSv5DhD%2FbEL6oLvrZS7QaNC9Vg0PLoHNNcx2&X-Amz-Signature=890ebcffbf07900b106827e4e7a4d23f99a2707be9a1fc78018eba1b3e5f1c91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
