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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLFKRWUI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIC3P6IgfAmF2T1XlxOtMxm4AGxRNyi1ABS106udBv7uiAiEA3Bk4cpSPhCpaMBKXo%2FKSvm4y9oaAQwz68cxnK4gRqUIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPKvSnX8SURWyqsfICrcAz%2Bt41rALgMjuQG0B65lRdPenEhEf1wjiWZwTNMPoYHGeaFIlippEPAnFRCy%2Faysu0TNFrqm56AByhUH3nNbrbto5K5uTp1%2F2a26qIMKlrjfeyRBlI%2F25kJlCV%2FZojCQYEx8747CqPPWLQJPfm6t0exQeznusg8vWF%2B8xh%2FfjH9G2I%2BVDX22B9fYd0PCptLiQNWKlxf8djD0nQCdoadI9DYLf6iez5UvsH2Xn77Hry9fj1BqsVfnqItEyn76SQaxKbcscvfmis9v2pArJ9GEip5cTi0Zwp7mQQKnNG%2FYD%2FcKVGfMPhq9lVuMpoXWVzkl%2BQBwpAKfGgghAlRhJHTz7JsIw6Ok5OKXhQpAbqtSUSbJkSa9X8JEA9%2BgDESrGMSIaSW8dhd%2Fs9xued12T%2BwuuSG4LT%2BOU2NkkyNS9%2Bw6qOkE6WJ%2F97txY3JrZQh3b7jVel7PDkZ4swox%2BQugEli6oECnLc%2F6OqBP%2FT%2Fje%2FYy4BwDhS4gcNIjRh%2BMkL7EmC%2BJpt%2BRAg4fFV4YWCaszDloTRDQ4t9VoAh%2BEESLVxgQbhS6AxBKH6kAAoXohoi%2FMPp6LWm%2FzN6nAWfll%2FRP8orodlc%2BImn9LG8nLQVAVxeKpYRZ8JnSHAy0%2FQ3Zj3rcMMzuusIGOqUBtDet49GqBiJ6fM8iIKyEMCVpzwpw%2FAGV6L45be2ipea3HjpGeCCnalMozcKztLY%2FkJ1WSJg6J9JPndZFs6HxXjAV4ez8fYg2ZsTASstgpGWUiuHGZZTJE5ABZIH2A3XGwaUerdNnp9hIJKQKh%2BjDEp3ODmMAs9tEzbUbRspdRxpTCIhwxD9oNxKRhaSHQRUdFGhdthpLTdN%2B6RPArVssXkD%2FVzZ8&X-Amz-Signature=f17d62f336e1e37e236bc19ede496f0a8ba179ca820dbe9cc8ee665d694f42ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
