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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXR4IVI4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCazO5%2BYt8%2B3zlUHhROpCNwcTaGxZLCM7vORc7S%2BljwjAIhAK81%2FFQsw%2BaC6yJs4wZb4muLZTJcOdB4Uwilf4m8BL33Kv8DCHgQABoMNjM3NDIzMTgzODA1Igzlt3cU97vxzVNWcbUq3AN9G48XXL8M0dw9WPpXX2T4YrFIBB1S%2F42AP0yAR6z6mRvSGSLQ%2FLGRwXT9snKZn52HyHRovYdRoPhKhu6n%2FYPNlHkf2zjhFSFXJUxsdhDzNIWCEeMh6FAbGloBMkvl8toDvWtrETFxqCibpmhwqf7aIlBwi1p2VECbqqjoWeJSvxdgrB6hvDE6neQ49n8dLJk8m3T1nL5JUVwdBPTbdpoB5powxzpCX8uDesHl0rxszzLLM88Y4gEg64UEjsST0L0AfCMpigIyOdvbnx4mwMUJ9WaZ1gzQ0lwWuJyFcYWm94tYDRwO6dsh9cu99k30E6zibUbDNlhZrH%2B1ND1R065E2%2FakUh2MI%2BHSgR2Np6PdEgyeBo%2BFMthAwPWl4nfvjb7qofHBFw7flreq2l3FJ1VFk11HvXI1y8PnSl7ZrWR2z8uIPHSidPKJjQXOaUFeaB2SeH9gk2H6snKhW4ov30wvkmzhA9m1ta1m1i5OPt3KPcqoqxx4AdNRvM7865SQChvVEJzwfi84O2SBMzSpQm5YMlpoD4FtJID%2FmNYJwGetsFuI%2FNlmtOdKqltbXjfBhEoSdMBnu4ue4HRKHP2Ja3UAhxQ08fWJw9NKn1OztJy2xbDyvWdhwIQPI4Dt3TCels29BjqkAVjQy%2BQajKHPvL1dQZ6nBMiERT1fDee2k1L%2BbM%2B0yK%2B2akR7DqW9V3APCEBnVF0E%2FH%2Fuu16BlRUVZ0nvBO0cjCwMbfE0y6WWvHIrGAZHrkBDxi6Br2itn4ULxVwkNCqG6QQIED9HRv3%2FQ0XGzrsYWnkbVMrvehe3p0gNqVYL1vGViVKZfjS0lKdLesMlbMcMjl7uXe2oBCxLpdQO5MzJUca4MMro&X-Amz-Signature=1f6b3806091f47f11c9e2f964518559b5c2bf8b4011122485af661964024bb03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
