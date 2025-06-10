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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5NP4KU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDK5o874ajPt5v0XEjrPBApAikrCEWDiC1exnPS8eIiAiBkebRW6knDcngrakinuvQflrFaN0EFVR5%2BZibTALoatSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhHQliGopI%2B0mYqddKtwD0IYLLLL6HbNF5yGKRmUCerS5S0znfgOY9awTnjWU5c34x5O9px%2FJ6iyivw5ThDNJpnogCIcWvOZbAg%2F48TpGujhLimezvuuzVLyY5Sf1ptiBYcGXmk4SW1RuhBvH2JkxHKHFgoqqzejz1HUMgRbxwdsLuCLN74on9rZ9A5zD9kRmAbTAY3z47Wu03F%2BSFs%2BKGcflMmiNRy3GhlkQDiPqv9B1HEF%2FvnACFQ3h0er5%2F6irt8hkGEBOjDr7gk41wfLOmT2Av03Uke2XdYA%2F6IkN38hJ1Eigbd1QIJ7VSRQFOVGPE43gmxPv4CEjC%2Fe6XOJLdZXvxg79ddWYgL8346sUtf%2BG3ji2qEusWVm0SLOzVf8scm6i3%2FR%2FYoozzaeuD0qjV9s4EBzRHYsjzxhBsbekUw0HD5tjVAg1EDvIaWf9%2FKEBlvgYurJMYynnVBYZI7TMivuQifrfibgxWiFBDHMaa2LE%2BuVBNivUK5XEX6idSoUczCnqr1%2BrgZnV2qZGwqV%2BFR5mPWhpZmkCvxcLSl3nd0iu6J30mzYgXsk%2Bu%2F9WscGL%2BiEN7BF68K8XqnBzLoUl%2BJqKHgt9uRB6Po4AlIKbFE8KO5WPwrK1Hzd4m8wh1VpcSWd1OCeBwxIFJf4wrb6gwgY6pgFkFnGdNYzoUFCUifltK8SSGncl%2F%2B3slgnB6IkrMT3dW6ehRssX9wfIw9pHYKF2kd1MsBPCjBwK0FLySHrSvy4k%2F0k8IhnM9usqYbN4NH%2B9C4qcfGkDs8oeMCrs%2FusrW1IEUyoET3T4EaQHEKFhgUDtl3uOR3Q%2F41khqXwPzMm65hjFvp4Rey541pP5W6bfVTAZGYDOPrYOE0ZU3XJ0Kl8qa7Me8TZ8&X-Amz-Signature=4ddd3880a51303d45bb81c89a57b3de99122ccf7d037b31b77dcb4ed50699ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
