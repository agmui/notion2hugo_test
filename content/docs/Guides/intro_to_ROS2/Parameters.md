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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMKT76HW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCw0ACSFIrqxXtK58bBVwa%2BTsVpPUYEGIMBTkgDPRkb1QIgVnGieNbV9ZuY5frykrdhBvqybQD091GYDkZvTVgKe%2FwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9Cb7BpM7BUw4xMeSrcA9CINnhTzwxnHqXvqhYNK1h4QYTaRw0v5LW54gaxxjGNsIz6iamTlSmi9wOgmIQmET94VUUFxbJKz%2BGtghsjbbPWvzmu2f3HuuBMSU36ciafVsVMjnxuTHL7H0E3HO6BBM%2BYrj3imLFYL6MXQIqhHV1YCWF2mwQPTGt8aQtJUDlCxaQ0H4%2BuFCGBSbnqIpsdYLwyedUPg%2Bvm7aEFJs4nyrMaQAEea3Q564ytYrWJJ3bSounZV4iZ0Moi4%2Bhv0ae8d8FX3EEKDiGQe7H4n0VqVN4P7l6Crz0OMK%2FcxFREvFAOnq%2FB7rVFoRs%2FdIR5pRnFHXBiE76SGVJ4ijGk2sQME22QYbuIjYCDDgICf8AvqAXQZj0pVQAbfsAf5bptE5wMyQGQVRCv1jenNjdK%2B%2B05OCE6FQ0aaPZD%2BT%2BwN1Svl2dsuRb%2BV%2FVYfoxNZMpzh3WKhdV3oEWI6sELNNX5gMCSpSSnulVSCzlifK3RyystQ0HPFnSVfyiClarbA%2FSxoRYThpv%2BK8NcOILLncYVj32u%2FL5sx0z4%2BZqH5TBiOPyaR0Ff4SBOx9RJxZQmirBYPA%2BfKksUI6coUyZZGfbozceEyzYUV7L2CMFZGFC16b4DM4q89sGCZM0SD1i1K86EMNv%2Bob8GOqUB82hq6cwNoDbRerC7QOkPlUY1hN98Rw3lGHv%2FNWVI1BCeld%2F%2B8r1j7yEgrase6ydV5lo0%2FC%2B4yC2HO%2BCjop9MnNHGugYEHzSR3xw2pXW24Wu%2FYVRnWhXY1HmGCzXfB4LrTIp6qlx6jf3ysJbZG%2FiVHzVVTXDoPZagSB%2FW3ruqh%2BQ0E%2FLbJIa%2BxPviBfoBOGoxvRTj95yRJMxZE%2BIF4vEqmzOkJx3y&X-Amz-Signature=75492cff973b5afe57153139131b9b4be686beb75f5d70e19b0b17183d0b8eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
