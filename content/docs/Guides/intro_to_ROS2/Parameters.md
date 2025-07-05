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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHDPSOK%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDm8kZDPR1mstLbvoS40Yh04Ip3p9v6pPAf652yz0kKPQIhAIByBGDoRf3Cmzpt0kz6lJM7FEQ8woudFg3uS2cVGgstKv8DCEYQABoMNjM3NDIzMTgzODA1IgySzi71qXKeSZMaDj0q3APZ%2F%2FoX2dNGYmRC%2FO%2BW%2BhE9dzb849sipdq5jUO7m3fDqYVvh92acdixRLY7nqy0Jd4Z1H%2FnRwid19qmhEY2ct5%2FhTdjmvM%2B%2B9dXo%2B1XbSWq%2F99nDGqIn7gedvEhVgFkkA08z%2ByJS9RFBeCilFG52Ohgq%2BdOR2q8lbuRczbf%2BsCRYEbGPonXNBTTx3F2pInibkW%2Fb%2F5l3z24DaTsYcENIU%2FP9lpx4%2BZGzWNYZ%2FEhCZiC2yrdoXJZWCU0OiLwZin5WZIjI4g6g%2FDcSXTBMW57PnBbeyzS7EGck6ZJN%2B%2Bkv7CIOT8UQQqSt4ZG2tcUNYwNVlE9f7Tme%2BZfOOxYCnRj4lEVZHuhZ9XEeLjbLgmJcFJ0nLuOwOYtM7VGSqS2495wejUqZKdJFjH50zDfqOhp3tVzpp0N4lMwWXKj8bZ6nctLYMXIQAAY7qjpOSxBL3mPxeMLplwA%2FZy76p9Rm79R%2FN9Aws5PF3T3Rhbm5mOfnStJSvZHbcXvZG0cSBIHjKw45QiNXIdqMZ5Ipf7e369bqDMcdnqEZrQfMZYXPk35EqV7m%2BIIoIv%2FwMOglySPIyq75jptDFDOvsIZeC3%2FiMVgRrby5fdHNT3Ck85A9SFP1V%2Bo%2FmlXvu3pdPbDLMv9BjDlzaTDBjqkAb61lp4l8%2B%2FBSD1B78ow1mw4BewuyN3QeILGBB1ANyCF2gf%2FzME5rnkPAJ0ISBzmLgIeizR2sp8m6kBu9s6%2FsQRBrxmbkbGMMaGOxctZ1JsCoZSkSHtcSxmBZh%2FplHErkOtZPRzOvplavF%2B%2FzhaMpC4syvy32N28PQZQhS6VpjuoEqxHC9VnA%2FW3aQciA4%2Fgtaz74xzGfc4sRgJ8e%2FM0%2FaS6AqPJ&X-Amz-Signature=09daf3a66ee517dd60ca59f3a1630fc4c4649109b33435412790774650afd326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
