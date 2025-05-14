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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTIFAMOH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEeqa2%2B%2B6bHks90CQ53XZmMtqnxzX4m1Bws%2B%2BAWXcj%2B%2FAiAH2maDQcedtd7ZnAFfV%2Fvqk0XEXsLrS1JpWZgj3zV38ir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMexnNoX6rwpn%2BODnSKtwDGD%2Ft6mRqPEwjtypYL0CxZ7fWBaT%2BMWTX3%2FST7j8FbAWZ%2BkFrJ0W2YPTJEOPzL3iyx0iI2nVuWmVGuagIf9wtYZW6FGkC2j6GcM%2BInpvHBzL2sBjT4i8sDd4GxpqDCEey0IOf5vDvNbkUYLYzF6GpD9fIixr1xir4JPDztpHiPq8faseu5BgBksuM9NCvEQDumdZLzsQI5JHvTk9J0cA4PLajJ6VQig28CnCIdZ5GL6HZjMvibwPvHemJvj%2FPMGBZP0VNS90wJmpeOwDBRAtBuBPzQZ0YTRL7hqV3lLx8fMmht4vcv8fQpNs8I%2F0jWdls5ph1mN7L07EFPL8or51qvb76VSrhIO8sXHt1TXl2THxsOB2rmNFaPGH4bqPvLKUEvyC%2B5rWx4Y7XZGHzlpMgKqrVN07A7XWMezF0b4GfLHeMOI1VbRJl4H9wyh5ywIEDbRTqTbuvk2mDYW1Sf4PCQGBkkXhoKqpo%2BJUHDfMqZiXUIoxTCT9S%2FLeIR4v%2BhFNi7ydCJbVCU6zLfwqrWrHPNJz46LZe7k0QRzzxYW4I0ngQxgGOJWQabNw73A2qXdkAItVleNG7sVeDq7EhXQunieH842x%2B%2Bahq7I%2BnZxFhC3GCaX0ckTkCD7VBM3Mw6tCTwQY6pgERVjODz%2FWzGxT7ocdAzaykjOIFxpBnr9aRDnL2zfc9A8yAjJf7D4UuHhfBN4k5IxfQgKFgiljtgS8jxUzxikkZDXPCP7bVmg6HnmPuCnhg0GIYD1d5t%2Furodc6AOn7Z1lV1RuZQ490T1ebnbt%2BcRqQiw%2BJhA%2F8jbbHrlI3wH%2Ffpcr4z3IrleE7GxX17FPGoLhtNRuxWoKuZW%2FEIEEBve%2F%2F0UJJk53X&X-Amz-Signature=667f291569500f55dd604bf21d83793c1b3b5156c2b4b09f7688abb9c1bf87c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
