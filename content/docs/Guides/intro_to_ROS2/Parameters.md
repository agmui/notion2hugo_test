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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTIRM63R%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBfRc%2FIUdD6qXQgqTRzEQPx89O5VYmP83uMGegaO8wdHAiEAxxG8h4gHgvjAPacXzhaUuul9rDbJylwBwKjQDnPluWMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAWoIWdW9vJSsU7NcircAzujW2NCaNEjdVEoIgyaLJvpA5GS0vhPvmtqgoWhx43kE4pgu20mw2aBKreEBNKOErZRDf%2BFdVekzbgvs9nLtpOuc92RHsfVLcPerR%2B39tv6U8iRrxOg0D2nSQURWP65HdA8JKLWVm77OFDf9lR8WuapUFnX6RGxZQFUYN0a1psOnqD%2Bid8nVbumqmOxmIedYz6tFp013kcx6WE3drbVcQhomjwZsXAGJCJMS7GfJqKi6UmpH5Zz6Kxx5G55Jq4K297GmlpNlNouk7P%2Bf1Cbqwcp2WygnDmhEc2esDzTIar4rZTsUgvtwnxfMhD4NqSUpVuldzanp1xxSFrg41SF6fidCtbMwtqENIBeesKns2SVEdV2ox6AOncif7fzvZwI0UvUPenbLCIYsYcNr3eZ4dEFY1CIkRYfPUA0yT6TkEpn60pzw4xe9eW7bTUg1nUxP6OMxVJbxFTaZ8SfQbKgHkGtVeE5LZ68YWfykIBUr5flc85H9zrczn9IBro6dIfJZ8LI8E9kh2AyClLoe1ro4tJep69AtX5JlT8aWunxDsufNmZRCK4QbP3hxQo4OGi4%2FqjqykrZVqaGmfPy4XB8eh0u8qNReOFy9ZurlSzESG7%2B%2BrWhtq9MChL%2FTifSMPP8kL0GOqUBY%2FfM1GiRyAyPw2lmFjxqlARNU%2Bkexw2rGebbe8uBpCMbRvZkScvE3ni4QDrinSazItf054tsarBsIOOvuHlR%2BNUNVANc6QnoK8R5H8tCaoHLECZ%2BO9qkwrHdJyIk84ctE0c6WN6F%2F61Sn%2Fbp6Wi1pQ%2FvaVvRXmV2faFF7Xf%2FuqhOVhvgpIl0DXjP03W0M%2BXCwahRW0smzQ9G1Iu3ptb2FeiNbjHw&X-Amz-Signature=78191b834cfa771956410b29b50f004a54ebcbecc029a405532b22ed418bc070&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
