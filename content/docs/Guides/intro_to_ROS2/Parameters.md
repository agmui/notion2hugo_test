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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPWW4DP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUZFgH50IVtEYstIwRNowVf74bLcMTFvTThmwz81lrtAiASQjPGXysJaXAZYNzqBQAv8C73z%2FqlzbTIopVwBV3IvSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAAY%2BzK2ppv2h%2FjzLKtwDhpV9s%2Bn4HVivmNhtMRtVAOBgzTP7mqxVcCvmPwARdIBvz3fite1heZ8MoEheWnnB3zVYXFYHViJpuhLSp76vg6FOJQdIQF4kOU1tvGNTXvNJ77FLrQmxdl0GjfStMUElu9VAFoU53RXAAVbpPN%2FDz%2BwlcqTVKtnRox3TJWbPqRi9GPsZqWHOb%2Bk6r7qnZd0LZRQXpksXw9QilNvrGfupahNaFgG7iHH0R3IwHqBjewJOu8pz4jq1NLcUiWJ0lNjcY50DyJctWgG1aqfYGEmPNMKydVR83s6UKhDNSxcMOsi60nLzg0L8qdt%2BCBQTXs%2F3wT52uV5gV1uWT2G8PHmSy%2BnKw0ZRoFfJ4%2Bd0VO7q9gxxgYWYaHbTlbuYoQN86fArhEnHXQUCF90ytJJYcFqe8uKILVvWwyMS6QrdernCT2L34DyGHhLPJT2pxcs%2Ba3K2DEJ5ojgi8RnmGicR5y1XViykAxefoGfPCFtm01bavHlM4ptm5B7VZAs7u1KMQQZi%2Bn1dAQj03kCx2E86TEzHPVw27wyZILHv3H3pozTztF8K%2FVLhk0ND%2FasXedcXvnLkLVt7Hkr5v8gyM9OY2hAU%2FKj2HW15t%2FHsnl3eCwWL7aIMGTqPXZPHtmSFWSAwysP9vAY6pgG8G%2Bhyy5qbw5mlz%2BjcMlFPEzB0GDDLkmVI77s6gKUwc%2F%2FA1kBQ%2BmyCAIceaUHlMvT6XV0zw7VQYygXwQp63AFy9xC8bowVQXHdsA6BzsoEU3IXgbtHgcJ9bbyqsnak8VMmIxoDoUdEagMa%2BkD604Yop8Dbc6qbSU%2B22dJG7mt%2BFUIdm%2FFaynQ9nywCcTbWlk9gJv1w8voEgnwy39xYUIttKP%2FuG8xC&X-Amz-Signature=d69ea907ec06d97386e2bf59fdeda9f9af3c8b2bd187c61acb3b8842a8288423&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
