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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASG4BLG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVDX4CjBh%2B0GhOYMeDjvR0hF4it5Jmsf9BBukJw5AmQAiEAyFT2z9JJKqeLGTinn7%2F%2BTQbrmxTtrjR3qJkn9ROFrGQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENBx5fznhJ%2FvM3ngCrcA0lWxDlNiPmXVsU%2F%2Fpl1GZ7Vhyr7bOCOx6614FRHbp8iZ0QE2cmrb7pp1%2BVQndqbkAw94vP0pQszq6lzYraxOELaGw%2BxX%2BVqBZl1c2luuYN8oJ7OeVcB7VWxXqGmW%2B65yI2j8dGEWwrgN7Yffp%2F%2B6B5fDZoiY99pbweKXvl0Zm1raao%2FjzPtr5l6x72VCcBCnceFoFB44qhP9eMaDqD77vLDj0dds90DFBPKsK9%2FyKq210PlLMRn5K7KpdP2qh7FAD6m8OTRI9zVaZ7tJZNw47nSnbXXgpNVjW2JGkAzzvQGE4N7Q1%2FA26RlSif0fuavmdtyg5%2Fg%2Fv5Nlno4kjmxWa33Dn17%2B3%2BBkW7dndlfy0F%2BZ7S4vPuVnvpEAr%2Fjvkjc7GTzGkGMIKlZUJRvAm%2F6I8UymToUiYWnFUfQ501VPcAi6mPIlX%2FmEQhBdC85wQSwpxW8BhNyG9fZ5%2BnK4XLeHBZM%2B6k1X06kflsm1gL%2FSUjcC9de4BZXwla1rCMEG%2FPad1E1poCL8E8DgRfIp3ST0SmVlcarbTB%2BGc3Bts4VPbqkocuY69qzQ5moHCaBRZsxU9QmQhR4O0DfUt5hMJ9hQKi9j5Vkywwwv20btxrMJFPZtPaN0KN%2BsRuRKpMQMNiarMQGOqUBZgULHkLLquIv9M4hD%2BYaTW668bKSF1jnfwg3P%2FzEnA%2B7fPeILML3ls3F%2Bi%2BxhfNxVYgl1Qi0GgM%2B68OgUExHpK9JScdKKaI1vfVz%2BcLtuomyuajzsOwaRxSIiDqD7dgnr4zomguQU8du8hoGfHjjsW4viagdRKFHsjrIyLTaQ1TlPspQPRCLDoSxWiH9ze8UvrgRaHxiGrTa75v%2B9mTvDjABGsJd&X-Amz-Signature=9efc585608d32965a83e7e733880498dd9abecf7381124444a426b54f293eb0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
