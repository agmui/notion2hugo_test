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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLV6EG4Z%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCxC5K2uN2If0Z0iXWVbrXnwLm%2FBjVqNoiu9mxR87Qc7wIgI5BPZHIhPTzCHRo5hiYux66vB%2BUy5cwWR%2FT%2BCJIrowAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGXLLLK9cxtQpY3PsCrcA5Zf%2BY5smmGH6w0Uv5Kwp6Qa0pz9v9WxoGE1Z3vqwe75oQNZ0vwL%2FukiYc24LukOBjLgRccHoMAvYeLs689WSiNfwoN%2FBiLkjm3JU93WXX3hRXU2F7WWrnjjjSeiPje4md8Fk0%2BmrDl5Y1ggjvJ%2FDcKGngNmStMpKHCVY7e%2BQGFyB4%2FFqQ2JDY3IOnUWv35xxJSh1XkJhg%2FvEPuyPQK1oROHO7%2FYrHUN55M%2FfowOIkSlUEluKu1XBqo3VyFRELRyveqTRV8V2EtQ7lOK76ieTQR7n7aoTLxmglmtywpPRc5ftHpbBgKibN6aZt2RKQHst4H4Z1DelboxtrpD%2FIM%2Bcp9vIj95f5321QeRvqTvUxqwMAuQqI2RDdQ5ikGYRx3Bhu1iCyZbGXDz%2BjB6DHaPd42CcOznhXVcF1sfS84tyx5%2B6SQVPBSGsj8ggcOr3u7f%2FDeVh1TqUmM7%2Bj0WmU8FjCiYOBCpyDyJmcV5mODSxRYql7YfCxPk1V73VglC3SMxG23XXWc51h%2BjADXKbWQfZMyL2FSV3BGJOw3jj8SeZT%2BnSiqIvnHh%2Fql9%2FQtAVlzoDREXc4%2F7V4UNFLUNF30uk2OWgywpFiYTXg3y6UB3R3SCwzqkaqd2cv2yKrIQMKbqu70GOqUBUZfXnKYGvWU1n6sAmPub2hCXoVt7ktoLD7icZEO3Ndf43nFYu1LIYoBUiVX4tWBPFps7bf1RSgxJL5aGt10RqhE14vseILFwa%2BbwbybI0KFPmTNN37YxBuBpKucgBW8QW54g%2FYdGbst0ExlJS44Tgbho6TV0s9Y9wbDGnxBS4sHHoU7qZnK4z0inw3RKOxqtMt8FVxFkO8Pml%2BFFL4Lspe%2BXbWMh&X-Amz-Signature=886ecc12eea0ee8e04eaa44130c4d01e18feb37c66aebfb2e5d50bd978ee4b51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
