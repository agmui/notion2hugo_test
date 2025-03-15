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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDA7J2F%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbmC3CGslMIvdmMjxZ7m0IntH0uy3eCM3B0ViEBXnLKAiEAi3MslR3wIAAwbNjzs76XC%2BSGuywSeg25Zegk1LVasPUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKXBqd0aKQamgT3WIyrcA7G%2B9I1xatTVxkVGQ0cXuReqqMiYOhEbZVSPamaBUNbeHEEG4FQtb%2FJqN28jwvFHCkhMqY%2BhRrJbteYK0ktUE4ap8uPJSr9HX2bhsgfQrrb5ubfQvomk2s%2FeSnGx16yVDjlYDv1%2B3LCIvr3EiB27NWUmGWqfAKdrUR%2FwZhh316w6f6ey22BYFNTS6YYNXkuff8ymGK%2FpGAfY5RvVVwN9PWhNrN5YBPEEe0ZGZ5TiNQBtjqDOZETgNLNysZrbRsJ78ZGZbBZ%2BzuP%2FRdv2nCe6f6pQ0ZDRWjOhR8VEZfh6Ec%2F4NDr1p1Pjg70cZy6XkhZbSCxQWzal29odPAqiyCnv4%2BsJuZEsGflmu6STxjyn9wl%2B%2FHQmbFIGXljPvnM7rOOKN3j3fXxSMBkN0J1L0DGpbGiHfoDWNRbjSg45RkAcVwdprQMwfMIz%2FvGHdpwjytOAcFDzMb4TL425udcPzF24Z64nMG%2BWolC2I4fxD3fB3lKhKO7Im7Az3KnBEmduPZHa26usj9mOdkrKv3R%2Ff2FhqC%2BlNupW7MR2cm4N7QjYqTZhckAicoviT%2FXezr5aKCmK%2FQ%2FP6plAg1OgsbxOIPwGyK5W%2FYqMg%2FTSSicl4xdkuaK1MlWuoqpzgTwang5rMKLv1b4GOqUBRSdmLNMjNjvGDMgJEsgd%2FvzopwjozmZriIxTbdRvaxlmQNxQIF9E8BLQ1YiNLObIOQ%2FZ5TaWMmK5F2BYfcx8F218MHQdRrm4MeD51c7FctSysfmOthummxXFnF9tkrspgEX0VCYu6s4%2Fa2EOhf5wfYlvjh2%2FBKRPZEv4kN6uXRQ3uK3zDeWsEhYHyNss1fiMIVgsjSTpXgBCJzxbFgV0nM6wipKK&X-Amz-Signature=68c7c2e8bb33c9c2ede214c2ed6e5e0354c820f6d5d65619a551e177aa058f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
