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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6XYJNF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOYJmEhjTbeSXZfqmMzSoLWNxq2lyNvobLHOEuZ%2FsTUgIhAMIxb%2BsCPzDrnAmIt9BfgoM0TVmdIH9sOf%2F4uzVx4CPaKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy32lNHfkb9ffJqUH4q3AM83dj%2BLV3ykD6d%2F9tQYgV5JMlUxHPfJf6HJr%2FC0M1uVhd1yU0mHe8ix2CBv5B89O4bCGiJ3mFPich74QmtKCKlRG3vAZuzcF%2BUTnXPcv8mvBmHnboEyfj%2Bf9HXJnJSxAGsGhIVZcb9sNfc8N%2BXmiP9amRD6PLKNj07UBcFFBFrFQs%2FPn2GdwpFEU%2BP0mi7qtowGxyoB%2Fdw0vtS1lCuNPDQ311SNc4ArGNIwIewmtS9h%2FBp9o4kCDjoc3GxbA3xDcxd2yy4stbH%2BaM3VGTuEflQmV1Krcgtn8nMx19R7Sz4UrkXg8B5vAwTYV6PiavW%2FGvRIiWzakeFRDe8v7Ymr%2FCfGvWL8gPj4kTglZemPKmSOBZmujSVMVyhCtm1csyRVxpKyg7RWoPTNvVaOU6S8yMpRhrjuuVKpPt%2BGnutQ1kNpXClbS%2FMlemQERBtE6NUJtvZBuu3QWl5k3WV46V3OMSujJtK2TCJXJm3IptgNwAm2WITSezR4vw10D2v19pbuNpXcbbj3BFx3qtd55gCddbqxCOngwaRs4W3hAioKdE%2BG1AqohFSmNZgZHCRwQ3EaJLu6so9BtZW%2FxPWpz6f7mTX5br1S%2BqIp31yp5H9HgLfuLIh0HMfJ8gJfSZsPTCHhOvBBjqkATLurVYhnhEc2eeYfiTJBM8VA51%2F9RKEjkMMBOSJ12hukVS7yZCL%2BUR3vl%2F4s%2B3vAQg8e5Hv9QYFyVZzOysxhS91YP7A4LXbQLv8kRyoPWxhfZsgoOezH5DyRSrNEEnDw86iEjaKqxL4yYkSGkhtqRmOw0eNBP5xvPs8JHKY2L9LRnPY5TcoWrUZpczPnyM%2FLm%2BEh8fGynUjhvyobrzMo7V0iSp0&X-Amz-Signature=bda677d2cd556b9c0ac20674d1ed095cd9b1a9c42dcf0b9735157ed428900700&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
