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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFS3DJZB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIIrOM0kGhZwabOiGF5BqwsjzyJ3gCNaRNMA2FUkPWMAiEAq6r0DZ9CqBtDfE10zR3fr6wdbb63iGUqJthFy4x4nMQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL%2BbNNuceTEq%2FS35ryrcA0B7M%2FG7qJ3rk%2FIBPHLyVf0MWxAfQjZPoU%2FKlhqwPYzjCRQBaCcTGkPOUik1lLbyJ3lZs%2BkWETTWXXsJb8LQrNOTTa70J%2FcdpYPiFZYK6NmnxRsBMwBXHxtkJWeBfeWxszMsr5Ja6EmkzXzBAEVfcqAlhCLhMYYGxsqd1nD4QykAxypRDpMvvLbSvZ5qqlIFd7xVPFD4o6Bu8BuSMBZJSxdhFuJPqmobu8uMGqJCwoF%2Btn9%2BpeImbJCrGIYtgqlWzpynk4KnQzoTZbQm6IXvaTOY2S6tD7QObFkqbzVGkh8HmEgT%2BbMZ%2BmVn%2BRhSl52KBVXhcKyfL0a3qvYDp%2BeQS%2BONYdmmbEsMb19kE%2FD7zGe5BsCc4t75JA%2FVtxoHQxYIh%2B2KtzMpa3MFsHLs7ncWw3tUh5AKeLWo3xRwQ4hWAO69JLu5OFHq2HOQsMgRDiu6dwjKLrLhN7R95ixwy3CLg4W5%2BzWPSMX29rXWGFvwUMJy%2Bdvu%2Bs5KHnyfLutCG%2FaphfCMChy7cP2Oay7VpScy6FAic8tBppv1trm%2F%2FU7Zbgm8wkH7V9zr07iGPJtd%2Bi%2Bjtab%2FlDgrpghAFCJ1tpXfORbcgWZH2%2FY8YhBSI8XhWlhb4KADrSLgVbRNJ0uGMOPDp8EGOqUBPl9W4WANDV2W36jyeHSeZHtK%2BThvJRpt7bd%2FW7y6lS6l6vPW%2FwKT2ZZ54oDjgAy%2B5948QcTsp%2BD0KWYDac9ajQUR7RJQIM1zGVlP3l2vB3TFjedKUA8t1EKNo5qS4L2%2BAl%2BNW0BUNgjrqZlgzLHE%2BFDcLiGJt3brUzYldbnLgiilta5fvZRrT2bQGpQ%2B1IS0IHr6Ugu25xuv9QNSoS0Z4aa3fxd%2F&X-Amz-Signature=54f49d9a245729502b63b6b4e5638e7643aec19bba0d7df1a1268bdd56846117&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
