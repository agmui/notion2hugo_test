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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJQNXGS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCNjLDq%2BG2DxWwhbnwVofl4UwCGT%2FaCUwMiXo%2B30L2mHgIhALAlKhJtmhDlbC0eBvXOhJq0YDbMhtKdLvfH9qgeNgZdKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG3AOi%2BFaOmQAkaDwq3AO8dCrCoiV59skP2IFP78vL0sDSfz5BzxFHmoQVyJ%2BrmbV9fHuHecG6gmQ03LWM3mSEXS7bxHGCe2ys8gWIZyj%2FQnbBd1AvhM5zEJ5C5HY41zdX%2Fyg1ZDG%2BR4xht8lcjHRIHKmyAhqtlxk8jj5BpYIo2PVN19J1k0VpUPrS%2FnY%2BVSFMqVruvvCMaNPqzd7wsEuM4D6ql5AWEAFo1y%2FnpM2Kvoc6RSF68Eu%2F8iOBHbLW%2FoaPPiNZ2N2WK6Mf5fPJfF2fqvDOmp9dMJfe2xgLmwv0toUwTDyDMaOVj4%2Ba2z91QqwePCnVfJ3oTZcVSi1oGQc5MoVJEEUA6k3wIbmcJewwEus9BaI9%2B8eAxvnQpTlVc%2FB8L8Hk76o9mwIIm8ejMsZTHEAj4qd8DMndyPycbCaXpGYZWYTUPX6GjjWwVpxvc3nT7jAKEbHC%2B%2B%2FGPVxlf8BXwqCmhRugJLDcteWjR4%2B%2F%2BNF2aIHtXhT%2BN2fWp%2F7QI8OYRw0KTN0xIvolFL5EvjGeZRRi3ozbwaFMIt4yxIS7BHshDxaIN1pGk%2F6yaiDmalJ1xTVogeiXsJaMSeK9%2BmA7teNGkE%2BHxXD1DUblmY44zveRHSXo6lUf66sPKTUWTSwW8ya8PW%2FuFZdhITDKhp29BjqkAWIkFBrx1C1%2B7Ph2e3j%2B3jrZ%2BToOR0MiAICM1uHY2xxmYQS88ZSjqkSRoAPi3y4SHR7kuXNXOg9M8BRmgn1I10Hd89Qoi1b5NgbZhJV3v4Q%2B10GFh8kRw6lty8yr5Wc791%2BOGR3jDH0Dph84iubrUBPHD%2BnQVaiDEBZ1mKiAwwe%2Fn0vG8z%2FlMlpA36fNeMLi6DXpw1TGJn16G1xIupgO4jMPxrvb&X-Amz-Signature=1228ce1f7778631e2224409a5fd52dde282945486147133ad9a5b68504bde7c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
