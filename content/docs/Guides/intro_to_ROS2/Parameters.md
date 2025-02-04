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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6PXB5O%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIApzD9StenfF2Wf25RW1QYsu3MZfIieeSODI1yoDDvd%2FAiEAka66ZzPQE90BxOMGu3q1SaHKFnWliRuYjCBMB0id9L8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCvBwfmil8HVd3WXZCrcA1CjwLxW580EZeD6lnQ0XM7UPYht4HjjDu%2BUP0X%2BfA9zN%2BS5TaBYheLQPwUEBIRxztu60o0P1bd%2BFAVLJlf%2B98WQFtZnId4v3Tc6GdKtPEMQmlWugmP9e4e9KYtqKcRrOLL5wKP%2FwAkGnzTmxNalmh%2Bq%2BbPgcKz%2FpQUMLy%2BB840roQV3CSQbEZMbmOZJVLTgCBamrlY0HmlxRaO6CTzLHgrvqQlMpXCLeyjJiGyjopT7AIa72TSO0kVywckPsEkzIPE5Ff8CbvnYmsEBKodFkAjsavLxiD1xXU1vh9uiLJ4CCrNq0Bde0IiTobS%2B1LbW%2FLCAYvlnB60iaz2Knq8QQPa%2Bsj9rag%2Fb0ey0Sy0lbNSg2A6NCW9%2B5NZTuBtGXhw6ZNPNO7UYJg%2BLD94Y5HXAd0nrDNv%2F3sRZOrgJ0TNNP0RuTukB7Wen7lZU5bhe1MYYIjE3lpz63q%2Feiufs1ZS9tKAnywmFgOzOtsmyjkSlL0i535OL0mcBd1d8x8KocFf%2BSq8aSGA3PCD7upIjpNChVu1h%2B4J2bY2PD%2FmMQmyW53b7gNQFZtCDCi4VBaupGQ8MB2I507Ai7jUbBcurKijFa9AtbOnup4mpl49ttZM272Td4DBw3XhkVxrloAaDMJWwh70GOqUBzHfcVN%2Fxv%2FfmQTuqFwQ74kz%2BIqMkge%2BBqyligJzcXfeLCe98LFHr%2BwZ7R3bdot9njPcQt0L85%2BogkEtXeZSLjXjjnMyL6uGfABlpt2Hpajal9NyyKVB5WzaDfLpUj9%2FX43MpVAaYW4fT0nYcZuJhOzV4AmyrKg6gQAKNUbRxHYybQ%2BBgahyetK8r0LLVxbXrH1wPoKeTt7a1wnmRc3meagt4WCCS&X-Amz-Signature=e3221f119e466fcd984a2086981e5f8f86c440d37728b47202541208ba949f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
