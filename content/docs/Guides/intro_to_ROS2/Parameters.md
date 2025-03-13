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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FZ67M6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ07UkNlkoXsbsxXy%2BWUoIH8fgmRy6IppfzhY4NbCcHAiBoBAUmQxgeE87myEsbAxL9e8a68l51CibwwtAY6z0QWSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQBgGbM9Yxhk4VAdzKtwD%2BUSaddTzCae15gTG%2B2q3%2FIUbtd%2BwRzKpyL9JZsmLpWYdrpggPc%2F6U%2Bpq5AuTpfYP7oVEHz2Pr09inwzcdwBBaVCGWlcMZfZ2tuzOMB9V%2B5leDoh%2F2g8SMtFns%2Bs9ipr%2FSsLrOSuEHc0uE3vCkupKJqLu55sJYGphzLEHRLZbY6DlRytbZPNqy0gW9F1mKQxyKOEQR3HDv7kS4SdQedCVImVtDBd0NxHHFpD4whQPEzaLmgG8XtCL%2F41eDfv%2B6h99JN5Wa4xY9588iJ3q6B3YMB%2B96TZi1LowTqDk5kec8pm8MGHp3PrMm0aDb%2BXtf9ah8Cg9MPRuq0Mr2iZFnLRQMObqfcGp5pYeS5rSJgTBrfharTXtlCT08UUYmKnc3KcYNHWwDKpA1avVDUPAD5sBIz%2BNTZmK7OuJ2ze%2BloI8xXwyiPD5mIhgcUIgHA5kQh8BrAHyNqnoDbghQCBoGtaIMCsknkcd6sq8B08yZ4ObcR0pjIGi%2B33CS8jIeY%2Biq8i6YIqjdH8cduqCu1w6NUuVsOZDzAvv8yLvLlrZAMDM15uzY6FHRuk%2BF0%2F79pvnpuXpfJZnU%2FgduNEIJjL6NNNifPYfKF6Qd1wptWf1YRX%2BRB5Ik4vDPns5q75KNZQwzqPKvgY6pgFUtTpb%2FMFx5QeBkZzf4xAaX1E%2FdX%2Bpa80OiNxSVdASGsVhKLaQG7l0fpCh1zDVzEVH9gMkTI%2B1tsI14ZmdfhM49aqhrIRFVkZitzWqyiMUzx5DTSEfGepbSr5iSoSOvnl0t7TchyWNhOSKgx%2BwWblI1fDIlcsXfADNr8IX8vbufb%2FLG%2BY4KvQ%2BEX7MAdxoei%2FK87t5ouyGMpvgXx1pffbLz4vF5cFg&X-Amz-Signature=13626f20e01840a580d372b5e72b035153c28043c4da567a1b956f3c85af85c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
