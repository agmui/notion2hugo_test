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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOOIAYH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC7IbYUGMaXgcxJVreHY%2BoZGLAIUm2%2BZJSnnMM0COXUkwIgWZyTrBIsXbjtOXBYEMUaxgRyTPjjN9WfETTJf3OPRMwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbZq5T2ecqtn8TLESrcAyzrOy2RvvAJ1i5iAFhI48eYd7fgS%2FsGdwslc9Ouu06nDPDdgLF1uru0MdarUvRLlrqyyfvAJJQ8RxUuS9fFstTitSpaP56ykE%2FTlNNaXFYMpv992C0z0lbAhZ7%2B4HTTZyc1GXbKrUBA5Ut7aFCxNG7LmApH21LXgDhvz1cJcEJtP2Sin62wAdFgor5Pntx4vRGemt3KbNizv4Ygng1RKOOuPhLjZaig9bIHCzQMY%2Fbo1S50BWUwTr1SPDJiFMPF4KHRClaQPUX25DhbXFQYFFPOuK3HNA79leZDJi3YCKaFAoXJs7AcyO2LmjSLpLOsG4U0P3qgmYS2qZPWlznejlmH654gi415jp%2Bjajlsqb7GerAyR2BW%2Bwz%2Fp%2Bug2GFAWhPY6ouoY2RabdQI51Usv9qJtJzm%2BfJ%2BZNcxjQ9k8cvFTqOXOGNpoqT8YK9S%2Bz1YgKoMgxZE9jMtAceJyL0Qj7Twg7ZiPfdhJLT4k81CA6lUSC%2Fec%2BKuqBWVWM942mLZFwW5vXOHHkqr8MosrTEDgdo98YCq2JQaKK%2F9aOPBkonjltAOUnucuMtKAi2UryIpZVoMG7nH0sgfm8SUweWbGSfAe8LRMGrSOSkbQAIy4k6%2BvA0U2o33QWE%2Bo0x9MKDkx74GOqUBqKgEVcOy09uX8owDyeAtHwU11Grxd2Am8NSlZb%2Ff8mW2H7rPiZ3J1r21AHHih7x75mpsObFWdclAwuZwd%2B8RUBYJTZVQH7WZ%2FpdRY%2FRq%2Bs7oI5w%2Bb2oXbggzjtjG1QVa30xIuRhh4p8%2Fl2LLjSuyIe7qiBJmVoseL%2FwSuZBkLuEs408RJDSLZQANAKsZi1cyiOhZ7z%2BSmdMBsP27WkYwbjwFoC9S&X-Amz-Signature=2218091aaa0a556b81823415f9983961d8029553d972f3db8f75e3d526af3d69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
