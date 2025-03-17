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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RBXEENC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGOG%2FtulcEpvLlFCpKfWZQdwhlrCSL%2BFe6GlXS4dXbuAiEA0axRHAJ%2FhWG61yzhBe8jhRiJht4ew22B2cGvEn1urpIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLdl6mxFGKT4ZoExvircA2r1G7qMqH0y1awc4Aum6ayk%2FNhIVZIb0TlbaThweS2mU%2FMzSpIgidhMUqlQa9f0hPmx9o1eKX0Pbn8koW7leZTP815ssZ4%2BedwinlqvVs3owc1FfrFunyFds%2BlO2IppAA11ZcphtQiwWF2CCWnbdILAdh1WiNdppgmbJI3qpUWZlQTEx0xK8mJXF1Y5pkigF4wyAiNB%2Bqiro8JZxR6apKlbjDbDDHngTua5go2GnPw7ZgVGjyL8aSLuX2ed45ETGqQltYIkNnKYhJGICTZo4dzzGqpxoFcQYuOrtqP9rpT%2FfuYSYLc4DChKj4uww5On9u2AdveYq44HDxW0xK6cjBv8MFQRhReiI%2Ftvd568Q2%2ByZT5u8pYz8LH3cXgN8dRJea1YoBUZnkmxDPhCmLURnyHsmHws%2BcmLgJIpkDAcUFzF478gJxDmJKJfEZbNsQZj3WZkyrNf6wCM%2ByudU%2F3%2FPk7rOMm0ZLgkVCJADWIsHDhZkZYFdaR4VCBVzksxCWQgBGHdmCWiaBXACuBuaaD%2B5spAhuUVirdSeTFBSgGo5EVbY0jR8KAaHGZsY%2Bw1fsZKLNQ1Cpx94NuJ9pPnF8VkWMukbuYr6AE904jyCS2lk%2F5LdX%2FnXclgbgzu8CKDMNmL4L4GOqUBDXXQuaJC8uHgzuAXw00DLA%2Ff4JNDE3euV41aaolNZxHCZWe%2B5mmKpPKNubeYdW2exCYxQc7NoPUUVA579qmhH7Yg9wyVUcaFLddv0Cqaq0GwbMiJYnQnUX%2BJ3C41QoVJ5iqdzfToezfjf1eVMWJ49IKUaWx5IkPII5kl29d%2B%2FmzbMLnUq3hspdg5tblf%2FrJNqDwuh6ChHpzt3oQBmmuSA0lwIYer&X-Amz-Signature=598f88e620a25adf52cda2064e833e7d3ae1e0551ebb1a06c2b6a8ba5809ee4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
