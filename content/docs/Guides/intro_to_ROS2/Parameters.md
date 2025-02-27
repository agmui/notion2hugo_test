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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMFRPEA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDmida35Da2URsLtN7SSA1Mz9%2BLg2bw%2B8J5Q02AHJFuBAIhAIA2pejRKOFDDyY9nEGY5qc%2B7wJhI3VjjnBYMBBZwOi8Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzgaWXB04Y1vpDM2rIq3ANlSJ4rv%2FYHZdgpnfc%2FBj%2BKYYm%2FWm3%2BqnfvuNv6OTMVWlruAm6AlvnVb9sSxydnARtKmWfhonhoX%2FIjjnSuwTLT0WTMJSmjSTZCAt0gRvOL9EAIOSIjbB3pb6WZ0ISbQ7uRPiNLfLPFt4F0FWxtCbv1InLCfamluSrG8PPxqrK8A%2FOpp2ZZu4Ae29akxrgz5O7BDH%2F4jyQxPm1SJqjJClFRYDeHkqEG%2FPjXXxmjW4kY2xIp%2B4A5OAQb8V5AnYHjU8vozHOxucM%2BtKaZp%2B2b%2FJ1TPvJ3Arr1JPTJbtJkRhu8AyTy1BD%2FTru7SDATapmrUk5Pma6L7nF3BkCLH6BSVqiRSV5lu0dG18NCejT5OGN0hIGDxtF3CXHp2N5hE2jL12v%2BAX%2BERqANJb0I1b8KrLiVvkThQsYuY2pONdQRHLH8p0jgk1N2ccHO5poXQrzCMF2MMHma3PX%2FUw3HRL1eDlSK6TuVtyBp1cRS0AtPeU52%2FPa8fzSdY3SjhJV133gcTWNIa9gSrRbHggWy%2FIt5xqGoS%2FZrcss76f7%2BZCtG0H0ISd33nZM3crUe1WgBeRNQZQm4W4zCEjvoU12%2FXPil17WGRCAUiY4xgbSvqg%2B%2FT966zB2tCGaYht55pzQQ1DDukIG%2BBjqkAbE206dvXJXejN5w8bhcemh9qaYVX0stPUVsYB3RoSjBLXyvFrEx1vlNziBJfTTs4xX6NOlgV78okEht1tM%2FaDGPCfgjvJ4s4a9wS%2FM1QFsmDD5ou8lwyYG8ZFWiAM2aWP38VlPp7%2BQYxgagFOBKf0cg1qVQGM6CpmxpACxX0NeCv8UrddDV9X7Ps3WZKSg46hRVXl32rZu2eaYsCPVSjMSj5sO3&X-Amz-Signature=d3746c4e3567086ebd50e4e2f0fa70a9ecdd796bbe8993ec655cbb61b83ef32b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
