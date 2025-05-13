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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPJ3CY4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGpPDYaNjXzwssj6mLcPQ4533FJe0W0vpW9ZkcVj%2FU2BAiEAqNiG9u2q26PkJfdp34ZARmjPu%2B0euyC1TCvf7ACZPuoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMTUmzmImy0AOuCqCrcA0dYgFwv9xov07VceSP4k62vf7%2FLNlIYkq1HzLXOrxSSVJh0VIXd3ont%2Ba0TN2sRAVXN0RMRnw7YgznY6%2F30GfmR%2B5scHXGy8COnglqtNHK6cmyQrktW%2BZi9BnM6KoXRFT8%2FH8ddIzkEP3Lc1LOWhIBo68eroOyaRh3Hbjr9aYAee3VY7OJ99KJNesf8mWAV%2Fv0vSmTWAne%2BrblhRVPW5iMusZLYMa044%2BTQHnxlUpRPpfTZU7vQSZOoKLsLQ36kwi7QA0mK6YrDfHpMhJRDw30LZRjzXjn108lOk3UYNzxP2UJvBkex4S05GcU0%2FSG1DRBOZBbB8bRB4Ft2UTgrEqGQk8oiolyBPMiECTV2YR%2B9GM07khK%2BTvsIRWD7wUj7T7pn%2BO%2Fu2ee23jau3w2iTdrgeVULMPD7b7n3FKZZQOxkUX9X%2BuT5LQmtoMC70fTCmKH87Hf8rmmp4FfSGDenehk6AiNVLIBwjwqGK5%2BnmivAjmZO4bT4KG49Cu9xxpRy%2F3mpt3CBor%2BXEQMdy7eGqIdrig%2BMJnpBPU%2FhLEQJzmO%2BqmvpR13Q%2F26cjm3GbsB4SqFwyY%2B%2BkzgirYmkw6Un6raRhJBmU0s0Y1AazroH1OQl0e4cPVhpFJT6gnkEMK6OjsEGOqUBXs7fg%2BpX4x180NSE3RN6tdQ3I1mTLDtLc%2FyFUGfzK5XolqvzrCg0Vq1iivBr8RFA9TXQ4LFIK5SbOaJrspF%2BajD8C2h5bHZJbjNoYQBZP%2BiCENILUyiVQJjP4kww4zFKkOmLC6qUfcg8YXP9bLk9qJB%2FUTT0aeHADN8MpnN6evkOgyjpUMidp8j5%2Benz7NJBMVAHpo47jPBZmL5I%2BXFCHw%2BiHPCE&X-Amz-Signature=bed9cb49734ee58661561deaaf7d1bd45cd6a588be55a3dec83c09eadf43f5c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
