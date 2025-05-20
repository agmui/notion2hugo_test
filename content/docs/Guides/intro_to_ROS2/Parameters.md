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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG3QYK7Q%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQOTm3Wh7xxYv6rXYILi%2BCx7aZOxVXBzGIhmobVsyT3AiEArr%2Fh7%2FU0ycagmvB7ft4JKdtzlaw8Uh9TRnwxPpRcKw0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkKlalUddJdZnNBOircA1xoM8u4Lvyrq7A64AdoyPTpCIQ3uDD%2Fsa28HEHJv2nMiamiPqOZTs3P2XbxDyKugwpMMxwDTvMmz%2FTG%2F%2FSSEAUvTO0ZfMTQa%2BeVZ%2BnoHqeeOcNE%2BdZx9R33u1kworxZhvr3aOFvh1VouVF6PZyC%2FX%2FT9%2FeMOqNinIQ%2FIz4szj6qfdKpFDjIhbbMSOeni40mc5kcpIUAMlvRY2XFLgNv9vsAN1O%2Fa2KTFwHPS%2BW%2BjhQjBrLMrbUioszTdI4MpQypxUHQA3GiEOazKvnVF9kErW5pJZCZ7nCZa%2BOXL98M%2FsZDdCwEvkTptdr0sVfRzOwMbJ2%2BMU4QQRH9hK5F21ruBq4ABr12bfXPrZfyRjoOogVZESC4tq5i9NLXlevnHa5dya%2BJkFoagWp6ZGsAYl5J8uqJIFfKNpcUyn2z3tYsOrVsX%2Fw%2BVZWrt%2FHP3Bl42LUKynUM7eShAeapd0RlJF2UgESqiQnv6r%2B7T9snUJjtp4pu6vY5sFHei5%2B%2FGDHnXsZ42JpgV%2B2DYpazART9%2FJKNzczlk2bDAlm1zsyyOpShON13TCOvwrksBGU638lKCDy4hav%2BTvmkVdg67Yrbs6JSCWldZ4zs9re%2BkBrlHRjLTblewCvxNWHjsWEWugchMMOVsMEGOqUBKhgKympUeRKb5EL%2FZAgroYJsn48ZzjFEAdeCCENak%2BqliXvzXtDXHtTKt1syYYTMSUEtJCJdwockHcGMg7x2WM2sKjo5Ux8JoQUTQWyOiL6%2FxHK3oJwAFGoU0wsGRrhlxDDWeLs6UIGJUAgAv0zSVxfnHT4luCnicojv4lmjuoO30DMCCK%2B3KoPU5GvUOFncMuuDJaJZDmmjGcNIr0KYyomZsNwC&X-Amz-Signature=a9c50ba6a6d11f39d63eeaf5cca473ccf1a6beae3ec2dc2c9b64f883f0ac9c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
