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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627L6WO6D%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHWyqNorT%2FyFgsRiOpK8g%2Ft4S5rCcPwJXnTW3E9DuL1AIhAMIbjSogdwY0bXhBX1xhRmwnxIocDs12UFQVqf8gEQnVKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuD%2FZ%2BlJ0Id8DLx0Aq3AOYsFQGGuCRhRNh6shMny23uoT9lsjUNv9rjckQ8HHQ8QdgES8bgxyNdGpXvutdemZD5egxITakGiDSenEYbpn1qdsxOfgeE%2FahX1WfDpAJCahfMYlL3aSk5%2FnCHRuw6Wrqn%2BVHP6go7EgLSU7ZG0daCHuJnesLE0Zh1vhee8BUealwLFlCa7cvTXP8iS9uJjWvr0z6l8R7U6YGmOYFU1I3c2uNP9teTxnAz9XZ9PnILVryxHQuGvATjUiWEKLFY3Bcg52XQ0xKtwLgpsvEb%2Bobm%2FmoN9uaRNOOc2wC5pcmn0gJiH27Jvm%2BNNlySEQ0chKhWnnJTDYpfEcykXVB1NH%2BXYQVDY2eaQD4R7NXMyOw%2FFVEZjkjD3Zel%2BtYlPbCUEIRkB4zOASkV0Us8IfK0DCtpONuzGlS1dzVUKfSLkgPDSAlIlfP%2BGxtV6EtoC4r16gl08PkzSCzwSwAfYsjRY3ssHYOZ9o26cFUhmN9DXNDs03s1UW6HRsHz7gXCA9dOMRSfrJbvQYst6mzkcMZpww9sryEFE0oIp1arcocJ9%2BNyKrf%2Fh376ClHg9yT1WASNfjYQfW8VdvoG8Lb4SWdGW4LlzxPuY%2B7uK4%2BgJDLE28C%2FN5qSYGwlgnNxhqstjCPyofOBjqkAQ7h6vHm1U6Y4qlHfaVDfFcP0quFbwYE5%2BUlW1IUxjstTn7hhwBtqyGl4Fp4Ne6mrXGsG%2BWNDX18kWCd5Pu77iVXyvS1D0QV7x55H0TcxymE%2BfpASbFL7uhssZwoQCiI%2BQCnPlt7AWss8HOI8nhNJwN9rd7MxOBnegWHhcbGKdaOPCvLKLYjHk3%2FFUx6yDtMlzC44fpq9XU0F9WZBdlImw%2FMYNPZ&X-Amz-Signature=790571aa8184cee33bac49f2aec1dca4046162cef36d5a6ca2f9fde5ed98bfe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
