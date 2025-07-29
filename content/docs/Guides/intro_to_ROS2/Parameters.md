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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTMKNI37%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCfdgbZB44e2P66eQOK%2BpUm4YYJERBV1kkYHePIzcMgGwIhAPC2ewbIwwJuDy1raQeVd1snxiGWvm1rKLIyLwsgkCnLKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwQBaOVDLqDr8QG9Eq3APpbZ4ib9s4jbs73ooHYen8qnqFxj4Hze9zGiKjcieJQiN3M24%2FZvaqpnHKAY%2BWG6x%2FRAFruOJxnzAmToG5xHRp9ElRsCDviNrbdP1LXMgkT%2BtVvQ3w0p0fkr%2FLEIsK8WF%2B%2B%2B3%2BDnp7ryXR9aXNKbHHg%2Bn2K6e6XB6xK4cnK53AhMNP9x7IzaS5XELtQCWJGAjbh88chG2tDgwmH4fzeP3xg2JOq33BZ2sPpqqLTHFG73VxUSx9mCqRTbsvRbjxFQg%2BQhWe3h39nfI1p2OUZ2S2BkOZUpQDVGRqy%2FVTEzoyWa2Q8F%2F%2BKXTKTTmvZVyShgB0JAV0k%2BgemmdwCuncytPJ9U96i2yGaYw7F6MCBxh1pOS7m83grhNS%2B%2FBOjyHKc%2BLGzxy%2FVeTh0aXcV5tsIeC%2B%2BgWCl78nHvYTEbhBeV8MgFONmBDGARqol60%2FR5DGU%2FmWfbjF1D%2FM8EEyE0Aks4dzqmMClXCh%2BRMwwhN81DSAjtCZlBnC%2FWq%2BVWquu6PYgbVS7KQhyPsorhMAPUB7rrRxy3IPQJx6PYXTvUvXtpNbJ4X9Dp0WrQXN0HSyqXgJMCAhPqxfJMB%2Fl7g%2BUCn5L0a6sUBKIVQsZRZbH5yMsTBS8mHPd%2BZWbcbJSY5dwzDty6DEBjqkAT3H%2FCioINvoFF84EzMSk1igE7T3v5pgMAxpHyu3WMhdHJllW111LmjCKaWoPRsn8YVHgYOvMa1OTQ8maeYwNhcrndBIXUCDl%2FHThXh47aHY82BEb9Jh1FPEGeEp4IxD5bt4tCGMh9QQe8sC3tWD5Fq5XupZq1aMMrIGloz2z5dpTn1B5ktOrW0W%2FcgigqJk7KtPN8MWPO3SLT9dd0kRuY3pENt%2F&X-Amz-Signature=2fa8d6138879794e0c78d5333beb3e0534a1b4ebe38ec8325c77ea60248ed54a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
