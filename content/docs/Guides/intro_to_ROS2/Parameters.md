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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBAQHSK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSdDxVMO22umUwwhFTtrJBQzX%2FZ0Q2Dy7CKNoDn6UdkAiEAwOJiSDNnr6ncMECdEu9QO%2BmLKKuyHOgSz3VbijhDcrIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMdOTLB0TFejEgspIyrcA1FJqwDvHu40HTg8GBBuesJiXQUpdf79ltqja8gVkN48b4Pe6B7tewKjJqEfqsAsv%2FdauZxOAsWBXcHvCu%2BtQw8RjHCB4bpNvuZh6WtC3CWNS80UNlNM2E2uHw4XuoL9y13xtIzDMX5COtUScR9Lzrxas9H2IdOgWLNRQmeNOHXLG%2BmuqWUuf52cakwntgJyKlbW1lo%2FCryeznksCMWiKlxMUcPXvzXt5TovUhqHbY17m1t7CopuEN7Up24sJsFj6xcBIwweYdsIoK5gXTuZ5FH57BfJa3W6VnShvWL5wwQInMzx3QTqeSyzabMHh0IYgHHA0PTFGREh2LvAgvP8YPnhDHos%2Bz7Dy3wCMTWoHmZy7B%2FuEUcbypZlyhG%2BWDl5jNJySAt2lzDOZWi%2BsYH8c7B2ujS8%2Bw2bZ%2Bcng5GCJrkYeSW9d0zcM6iKBu3NP%2FbUNrUfBiY%2FgEiONZGFhVo2Q7PMsyVwzwrHJfLfew8anRo0ADR%2BvmocwNLusth%2FP39YY6Y6v85Fz6Sf3KpOQV2gWF6%2B3wsnCyEy5nX1Bf3VoUdny4MNkdG2FEkAkO3E1pFVEM0zrD%2BhXZkKlmY36nC%2FGSWGdJ3qEaMqmoaBlindOFwybi0fCaIhbPBNVJEiMM6qvsQGOqUBsMi59YhsXBPMSl4OWfy532BxO5R9zOhV48QuJZ9DyqQ1YFhdIAGjm1dVbQDf4ME15QlVnGATTWZqIsCkvXA9%2BcY2Jryd0n2CUfR%2BS9HFjVU7%2FY80SPiVRMBiVDZ5yU3okUnvVC8G2cm8WPG7ZAh88yAL2PhXKmka3faPf96tCKOoLCF4gd%2BlOx%2FW8ZaGgHQ8h3ry5ygMoGUaGFXIWZyLbmURTzXr&X-Amz-Signature=048ae8d110035689011867356ebd8032e3babf163297724d6ab8cba0081adea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
