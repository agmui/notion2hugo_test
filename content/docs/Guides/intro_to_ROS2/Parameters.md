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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUWLQY7%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzF5XuV6f1BEOU8IrdGS4DYFjYHtoS%2BHwYWz0oVYeLiwIgXMnVgERSmxgwbPAwTSFN2u1nPS9O5RNjZKWm3dvhqwYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFRD11I9VPTAGhX55CrcA43hDAux0%2Bh8hLqoT277bJM%2Fgn7Wjbz%2Fq7kQJh54n8iPLi8AYs93jJJkvKSVz0k6zNCdfdTwWlat1YPhVXgpEqaTlPRcNKXUVQAVDfBUB%2BV43nLq%2FLShziepTMxPZlMEpgR142mLjYjei6Vrae%2Ft04tEeFqZQvWv3JXxM0xJwhFN7q7S9C65iub5ND8yCpNmgoYa4EkEYl%2Ba4ebWEgN0tkiaJfbDACF2hyaVcAOcBhergbQ%2BYIgWCS7YgdMcFXoGf0OIsUY8kLgZmrnI6d%2FjSV%2BKk8M54QTTf5R%2FjXZlO9jCH%2FAo1aRLC282S2PeqchdVRq1fCo55NeYx8FBuuMz%2BxAr9bvyzQ0ksou1zFCElpLzG9q25WexamIMWBDJaWOk5SisEzxxfyUtVvA4q6UTZ6oV9VXbOaw9Zfc%2BZrP3e%2BZUWQUGeDS908rYYJiIUOE8MsI0WIPqiKuvguoiOwwpLuFRMVQLrPS2lz701WhGuZEYsf0NSSYdZnEONjJdbP6JHnT7ItW%2FZdr%2BbdpwVueFN8x7c8tAKG8sHbaFUTNrHrlhub6joDSRgL6ZyBvcvJNL7AsUrwdCg0IYJKG0GVvAeTdMB6ikKWlw6K1SfmPxlYy87Hb7dMkLeMK22yLdMPux1b4GOqUBIjKpvnEHzM%2FwafZRdRGalVrgGdB2hKS7gbe26v9W23mye8UW%2B4%2B8RlkQ6%2BgA7ECAL7cwOt%2FukbhKbLPpDgn4rkNK4vFdPwVYcJ61dsZwGJqjnUR1BXbr6xO75icGosCsp5XWsmHx3lO9vdpQP2FnSnJLVnqxm5nidJ4Ticlavl2BnAc7o%2BvT%2FgqZOnU57vhOc4sgAOaXQAFhUHalTGZXTH4c9ULc&X-Amz-Signature=43889906dcb362d18f3cfef771c474d0aa10e794b80a3e8c1d10fc7304f2f510&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
