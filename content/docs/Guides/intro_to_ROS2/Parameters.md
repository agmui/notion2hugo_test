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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466555YQQU2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw4jqshXh9x5MdM3Yp22YQtan8uWyzFSF%2BWcgP%2BsV3zQIgEpMcfafZcGdrd5t4yYlvPZSd3v%2B1C%2FjXV%2FGcS4da1UsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxEPGJK%2F3PU9ENwMSrcA2BH3ZezwWFoZZTFtXV9FxlszW7%2FruQ3ZN%2BEJS%2FszLdEF2E57p1p2HXhxT4siGxoCbY50Bqijpu6pmJrKhxKHKwd4lW%2F8ZDvv6LbmUcKzeETsFES312d7ZhQjWceW9ERrpfqwYCJpDVdlchzy%2Fg91QJkkS7qO00BEwVAN9HCRguOLLuxRGIMLCLN2mTweBOGRhWANCfJo4XS41fDWWGqg3c2u8Zra0S44JPc%2BaFsTU9MzqiWqLyhhXWiyqggChYTN67rKV2Mf2dUAP86CxJLWEBrDQGKyxErWSfKx3CC9sOVh35mXqxx8tMutaWovILLlLTi0wd%2F7CL3Yg%2FnQ44qGTejwnppNr70m9T7pGDBOwc183DQE660URes9ChMDOfprhj0k48UA6dT%2B28QxpuT8XK8LXZCu%2FSCAeP58ZK3PR%2FKwYeTApoXtVsVxcAtwMHPEiT4XJluU7yOjoWfcT1pK05RFIuaw0YvEptkKDIZdDPvAnk1HkYTPFgtn4qhIb4yneJXsjDvwt8vCub%2F3Y%2FJKy7S%2Biq7uJzMzodkUKWPDSZAjozxw5zYq4bNyXuoWyDYXkXKC1ptSkvH8czHAJwauv64C3qNfOEKf96ne1qwMe2%2BYDxne%2BQFoOKCxcf8MKKP8cMGOqUBtPlmqMKnX5g%2F9aMLsWHEyj9ZevPZeKsqul%2Bn7pSNLOYlMznbMgmLR4QGRuDyuV6Ngo%2B9WMKqXBSA1dMV4gJp90mwMmWPgfP3wAxtX96jN%2FZ3n4epVov9w5Az%2FI2maByUTwFiJ3IvwHUnDgOE1kwVpFgrELRBqzbyxrzvqoGllUX6zHxXUj47GZqmV%2Bjr7HXv1M6OKK46ZZmhKbM0z39wA3gDri8N&X-Amz-Signature=8e9b9940e3f5ef09b9f78f1c260c3c153d95663b989a28646d9dba458ccaab1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
