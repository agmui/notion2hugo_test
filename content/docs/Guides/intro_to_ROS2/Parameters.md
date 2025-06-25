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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCL7MQI4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCxxWvR5ka5uswgtjAi7WegtO2xVGS8a65IY%2FntuHX9lwIhANPD3cWMTXe7zAK%2B1gusZfWQdQ3v70raG4JdYfZ%2BBYl9Kv8DCEMQABoMNjM3NDIzMTgzODA1Igw4AmMibwbjX60w820q3AMmdEa%2FBVrOjytn%2B8asZCOZQK0uN%2Fg%2FVKVIZBk1KqVGGbJWOFIwR99x7%2FCMj8YFDLBXMSLhKCJUpy9HkFUc7owxTGBZMymja1%2B8AfU2eJ25nfMnrRVLeiEbNIF58ZdZiWN7zRPHCSY2NXl5AVC%2FOulmIBRRyDA4GQ72Cm1sTsSTzY7BzQuQjRPISGSsR80Jgg9Z8JmNbisGWwS7DupqbbmOWLSGoIYL41HLiAjYtwdT4rmd03mGt%2BhGdaNYqAY7rBN%2F%2FP6nlwzFRH5Ycn%2Fx%2FLZq1jYJfo7IwE2eTUd0%2BmTBf3BhU2sgu0vRILzs0bqPcAUyjdEEpE1KJtJ2M2CuL%2FwJen0Oj1DN81cL97ayDwfXWXSYB4OfuR6BH3xpF7ot4jIX3sihpHy%2BcCDPQXYwFP4JbyPDFMKbpmRRHWGaqVaypwakqfffT5pJmBQfHe4Bj6IT5J4ydewZAOxFEHV7Ssx1ayPWgTCUQYIwqgD%2BYGTiEgg1livvB2c1c4e%2FflOE0Ss6hjOZvnxOkPxgsaVRJ6fwy1L7S4HG0SeZkaaNcn3SB4k02BFhb3HhDCigXsO%2Fbqky%2FA1xvHpkZ5aluYXjw%2FFnnSaqkAQLqkfbLeV6acIQHRaOXuddSw%2B9WhE4bTCoj%2B%2FCBjqkAVk4GhZzTp%2BP5F39YAg8yRUyc6zpjoHIOdxH%2FydsLL01ZFQStvc1%2B4NlmhWMkYViiu%2Fl1byhaPgbSyvXe3eLmrbgLap94nLDLRPFWP32ZkXF5Ds%2B1442IthN%2F0nltMDhbJ8OAWaTd84Gy%2BSujnYhfZFTepNtvQj5KyPZ7BFQFBZ9QjmCUOVT2n4Pv8ogryXOF6pRn5C%2BaQ0IdLLyvRuDSs1o8ezD&X-Amz-Signature=f2e2cf1d4b77bdfdbfcc21f8aebb76ab7660a62b814ce051041f9eaeab159b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
