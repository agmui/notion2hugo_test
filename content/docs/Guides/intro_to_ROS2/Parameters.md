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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRF4QMV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBa4Xy6I%2BVbdwsyruebTmUC10f6Pvkx%2F0pmLHwdj6Q%2FEAiBlgVyKycw4sOM%2BKJ2C%2FCP3TlNmzwYAhW5MJ%2FQKw5KRaiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKroi4e6ferfpqFQHKtwDnTFbtyKpNwaP889SxwaspmT%2FjyUx855%2FDm2iqFv140B3CRPdywdhEtlueKDWZ8umCMLh20eLfKJZDDhlNB6hcV0BM9QtIQ2gxDNYs5tpsnL1vB2nQIf98EHwAE5Ybc8MqEbPeaSMtml8K%2FHWm8SxDrCMy9K06%2FJt6SR5XRk75gAka3UQfyXXeF%2F2hfrQBJhwMfJ3if8xpG7H33hDpRLHHYSyZpBoR2agrToyOPppJFeM%2F2jr9HZilShPutW8%2BUcy0K4DZZlz1tQbT3AjxDzBsBGoXQzqYmbm9ferrJZwln66UJam0yvU81%2FqzRweIVvG3L1biKVYW%2FKNRy2FiZdDHi5ogv2ddiN%2Bjl1HW%2ByAZzrWHFR%2B4yJo3%2FDNpBVXqvjyshA%2FhaG%2BGi%2BHpeMEIXnEEHi%2Ba4FlNPCehYv6Du5dBb87uwRI%2Fp6wDjCBTkB8PQKPA77qEeEAAyty0V0I%2BlJl5oS3oSa%2BYyxhYZ7PyZ5mN5PCH%2BTjrDfpCc9wOu8DdeUuIwp%2BDw8usARJ%2FKzPkAyMinsUm9tHCIR4OJN9SGyuzv3EqPqglsT8aIj2Q1e8C6FYYCyYbReeI47gzggiK4T1iQ0csRnYOagVXS8bDeMVBFRKg7VHau7aGiR%2B3uUw4LqUwwY6pgGmiwWtJyMSDKF6r0KiewYLc9lholNmVeivn5jdCUOwfVQdQC%2BbEIO9w7DlMWxu0FwabA8ggbPoUrlp1hSzfN9hgpRi7Z9ve2U7dOAZACW8P1NgIDarX04YmoO7cQ5LDOGr7WQNQp4YrfqR3qkRDDOU%2BVNf0LaDW%2FoVbfcluJNC4A3nlD6RoPtyRNhEaFBfdnyRxg7%2F8ncSlRRXKEntXYnp6l5gqyOk&X-Amz-Signature=a03c5e0dd09ec606699c67147d51f51ada05357aca9b883371096cc705774ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
