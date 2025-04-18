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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGMH5H2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnlXfgkQl2ZLOnb3RkLzJMEAWk3aZaKsHhvT1CPR2UsAiEAirt2M1F2Im9R6HEQfKkoEL9keLxvAYmXP%2FFzYX3CSD0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB3h63lnWvi8DP60OircA0Yqh9sEHs1rdcfOuL9KUTw2snKgacSw79XSUbslwXnHVvWRZ2T3lzUDUYtBrTvWNb8gubGEUv%2FWjhmQOd3PbzymG%2BhUqojT7UxCD%2FLWoUF3HaiR37xduiZS3nPvAwWP1KH%2FBgfb6n5N0f2PZ9eIpXEzInQZjfqgTEJUXc5tEcXzmx8q9Un39jB%2FL4B%2BT2YwnqssI8ua8ppAJJFSAryynI7HXH14eVLflV3ztjzXZByW2HKcY3ornq72W1z1qG3%2BpABowP1DD8SmMstAmLlFus4lkZ1o3PgnM92LGYqIi9x6Tdw9EpTFi%2Bv001sWegQgUcTYsSe7UNG9orFsCMKDBc2s8GaFJCP%2BCMDrYlM7CBE5eZ4NfQSyX11BM5x3BQDwtgxop6hxIY%2BJAJNmXgPYpgr2cEUsbJCACIUvfX4Y49THQLiDcRVXk47VrmWsCvRMVnFDUdB%2BtB3W3%2B5d1tivcLJ74yEAoIP3LHqzcPi%2F1lU7yQ0MEZcYp%2FKgLWmj3zzR328GY8ItnvME4vVC8F4tWcHuoATq6ZBQ8L3ZYvvoZaIQIb0BEYTdsqfoO%2BlMKkXHGGmmDrjkK5CMkRLvCQJ42xsU8P9CzSCVcfOq8ZL58vYaC3Sl0Hb5%2FKbnm2mqML%2BSiMAGOqUB1ue8GrAQed%2Bv%2B709hVQRb3kX%2BTgUuaiMhgVGJIHf%2BSDUdkABvhK4BaxVVSYci0cNoYaPt5Ts%2FUD7nJkNq29kgEYh%2FsV89EG1lzBx3965ZOBuSbRViG0AmtWMck78iBNEgeqA2s%2BI2i%2BvOBBmSoEtJB%2BTglx68FTlGbdJ5oxKhpqVy0SJry4o6Zwt0uxt9sPmCVq0XDQ676tJ36oyD3Tw3HjpI8TP&X-Amz-Signature=4110895c241b2de0b45444d321b930ffe70d476e0716b4e0eb080053ec9c89ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
