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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SGNJVM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHGdGVSal5qqKWvMfbB%2B2nXP1ljzVtTPhaCewFMJcsf4AiBLVR0P3EVCNlGVvO4ZOgwsYIarBnUo7JEBFrd5z4y6fir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMfVJEn6BmnaZmIUy2KtwDYMATBYMNSARrQ0O7cBN9hYGKZujo%2BXpoIiLpIHB7U%2F4wpYjTbZaD6B8sGxgrZjr%2BZ4ft8ARgeu5fFnVJu4yf7XmqX9XoW8cdJ5LvZVYdx60Eaz3Mo56KJ%2FcTcbMKIWaE%2FFs100rOHSu0MLjtJDtKr1MCpI4XPfWC8Byaa7gnqIvlWzaRB3uA1eBGdR6auAwUCsFlZv%2BzxqvDhw9CLZgTzS95KWxf7BLSgLTIQloWJubNfc7H3DYY7HjDn%2B1hpJaStN9MmtatJMPbmkxyungRmzqllFJrXeQaTF%2Bs8HbUmO%2BcUvK5grRU7%2BK%2F57pPWMtTAUmy5wPkCcJfrqDPh9Em5vNlPP1oU6emT4SSQjLCO8h%2FM7AA1IjSFYL6p8Y38D1bpUULl%2BoX5vMfDdLFSIAUKKX%2BmYy4Ka5HMykc5lzN4P3dBAAKAHRucQhcK5L56foc3nx8YUkH4x9ynUQU7fsCcyxX3d3ThJABrY%2BNYnb96VS%2Fzwe0SDe5QijfothfLfNGcwFLTpc%2BBiDW7QITNls55wexArDVkd%2FZs1JcekLdobnAF28RJVSspHkYWNn18ah2mhx7tC8Ii%2BfAqQLdLoFd9zB%2BqW%2B%2FJNnnDJkCOwpZrIYpnUm6CWspct4MzIswzrflwwY6pgHRCsNzlF7SFrQzft83YxJoRaz8NW4m7kScqj48y%2FmOUruWsrk8SpxFyA7I7MsbeDdsths%2BGPWZun4sSVKv6ub8YREjA1%2Bv00xyPP4nvIDlqtrwXBg%2BbCUNvhL8N2BymLGl5fE9jU1Bfhatb1sXUA7SVdkox5rgANkq9BPyVpqHTU7ZCbeErwIQotPKu7BEJwGSrBcz15jT5dnbBRUAo472BTMpR%2BDn&X-Amz-Signature=3453ed588f9f60addfe97c4c622edcfa5f93583111ade00057aef14a288e21a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
