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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SON6RBH2%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIGduaAKyzo0eb8zJWIbZ2kWExRMsv7iQVNvm%2BRPAutbcAiBkvomXWQHGSzrqQ6XdfzDtZAyZnsTwfSW24ZqSz0gOPiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEkITa2hQVNlrrYf3KtwD33Dg5KNneV9%2BxDTWkS0D0lquPbUdmGPiyxAyjtVe23JXVq0H23mjxgpE88V%2B3JMHClYEPjyAoGmJzhH2m2gWbKI0xKidzok6a4Kl%2BQkzMGpSH%2F6Xw1bSzKAP3EeWm%2Fxamh4wdHEw0M6y9TaaP27JYVrxqvQtlee8Pq%2BqXsJFbgFH%2B9gbVGh2SW2t89ZvLDqz6WJyWxuc4x6BRRJS4RvcKJipt833l%2BuUpSAWUDH2fg763%2Bb68H2IOxlqWhc1BFcTnj4WtLTOuik8ikLEpZfiWBTV7qfLV71GVg8c64kZaucBtKCOejhvjNz7tDv0eUzDTeW25C7RAopb956ycz30pRljkAxvBdbSgYwu3l5KzvveqDWd7SDqOfbzUkzW8FNhxBxxryn%2B9YX56qewS9A8zxBtmYh34IdeVkOOmNjPJxUHgGYOyWMigIsXUBv6Z2cqFwHZLplkV3Su%2FzWPlM%2BGVumfUTSnjHkZG5bRVeIzC%2BS2L5HZOgAl0QxBdnEvO9%2BemhXpZ4H8S0Ua4jlNRE789fDYN2SjvQOmo6sx37v3IoNsMlbVMnLJ7AN4StoB%2F7z4u1xhN7xTULLEWjZdo7BtNZ9iCLkm8iPhLRNMPq%2BU%2BLiOl2JLrycJWwDJLMcwuo6NwQY6pgH8AIEvHQy3qOTxbnIEAH6MoinkYyBTJ6IZ3BswrlV9nvW6T3j5W%2FU%2BDW%2BtYJAFxQdjKMgB6pzHvBFwnB0AbEyD2varDBlj19BOfHbMuSIlYf%2Bon66ULBJA7a43P4Gn63KGC0vYRAdoXYFDRRyDngA5aMWnHhee5L9zCnytco68EB3HIRxAb4jNXb%2FOUfQK7MIFLaBi0S5kkkADne1CL2eem9XqymrV&X-Amz-Signature=a062e6618aeb8434d5500367023fbcea89663ce1a84aaafcec8b9a7d65924110&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
