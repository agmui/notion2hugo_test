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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LF33OZU%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPS8%2FYp6gu4B4V0gO4SCxn9DFGrSWHLkhxwU39%2F7H5cgIhAPClG1voAA0uyJ7aT3aaTyAhQTyLmGRJlz8rj8r4%2B99gKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoqGzVaRvP3negeNAq3ANxRAQf%2BR4L6t0fc0FiEOVos8MJRal8aBQLJvo34MRMaNc7lhCTREzd5rp42iJ5ESHo2p8CgBTpF9t7DMZ%2FlocC4tJ%2FF7x56Q%2FkqkriRDHg9QxcuDixLHXCnkPLMQAPQb2%2BSEZRKE0BuZELnmuZ47X6Co%2FV92m60RVctgFaEaKyM0Jc8JigbBwlhHaMKeGLNlrx2wNznW%2FSkbvKEX2nVUHob%2BBhPuAbCo%2FKi8qa9h88uT2sHDDWLJP0QNY1osZYeS2PAkY2vxFJ3rqjaQYZqorWpipGp8sLXBEuIO4f9cBxTHsn4XJGm2j4ANd0SmxS54AfyNdA8Sfpdvs0WsBGqU2W2qadrGGGDxgOPYxCLFFJFT7JD66jWmGDTP%2FrYdcjK2P5mGTkVVm9O%2F6q0MJb0UjuSyclgoeeZLFbMHAmRftXhBa1fy%2F0XjLP4NwkqvWL0IjrUCm0biJSzOeNBvbh5X7d0iVnFCVt5aAWOb%2BkhsqvDlTwTFVegvI13OYDG%2Fq3KoGwzmD1sCwZuVW5karMaih1x8m050wc4JXbRX70lmpJYzD9%2F%2FZ%2B86j8DQzIYbmtZw0%2BbU05XsTyEN0a0QC2UfvGkTeF2XGoYzcWVbJd9BR5CklL%2B6DmRFNWI0cFTDCYsqq9BjqkAUF8cMlkPvpkuzCKTfZM9Sz8kyogGUUbhxXFvp205xr8rP0Lj%2BTKH4JihuJ2qBXku0S7I0FH09jpmd16iv7cv%2BRhWAgpJyZRQ3OS1HsyvEMv07Z7QphMW1joMVDt7Cp6KMdTBikcjQ5ORcERZrei%2BswSz9xvbWaNO%2Frz6YMT6rEnMFdP8kbJyx1iNWZzUzYjN1IphurItT93eisJwaNOyEkERyeh&X-Amz-Signature=5df15239b65eb18ae7b61cf88e84d340ac66d9e97bbc859da84fabd526e133a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
