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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPMJE4V%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCJroDgijH2Pfz0jl8fB4AAjHUeuOP%2BHxBx%2FTP3Ti32NgIgQEuPCY71NsHyV4DP5pwnWzynMDY5y5dR2vyjpBq%2BYtEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmRCF1c%2BvmKrLCYNircA%2FBPqjwX0hBiOVgHrDmkIIlmnAdAZGlxre1mEwW9y%2BjI%2FGI7lqjnGNJew6XrtWaSn3arYnbu7Kbvb5xvCrilRolcU1qWblIhLjXVvokDzKKo2KqHQhw6WUt%2BYbCUZ12ljqgxdbKSbPSRVSRWVKz9aZfOzLG0nhqYFVfKSQ1e2bbuD2mzvlq6M9SwsHCOuWTx7didUj7xJmJA9KD41Shdgv%2FBieLfnrnlwaMMAoy1pxeGdA2rv7prfIaXsZkHek4RhYlJ1JBWGR8Q2aumFmK1E1i3tZmqCQNPVWeAedN7vWDEx7HUhEPTziAzlVchNzh5C1ZmJuH5PeiSCOSlukNOveYuIpXiOMo%2Bhlpb9VaYAVNBf6FTFm%2FQtG2H%2BseAVp1bgBUwJgbArOjBgIy7s%2BCFO71Jc%2BlPfnSVvQnmWzY2lqIlOR%2B%2FMVjnPPxMTmVByZm5oyomRd3n%2Ffy4YtpDIGQYVn8gOeYg8Dwv%2B%2BgRKyzr3z%2BnW3cNYZHaHO%2FM88BNOQiXsdGMKF4zdR7fsYsMibMhJ365jaswi%2FnjpMoo0llsCP39jTlNQdsDtavff6TV%2FNANwbdeHRcLyhFIsOZtppPeocJTVA4fA%2B1c1RJJUHIyxqI9eXALDyOnxnrm3EMyMPvYg74GOqUBB7yg73hFEZgyZOPxmenYGA8ZUTa9QIs0QadSbvfUmriQCiF4pzy%2B2EPnJPpqGLS6An7ZFmq3lvcWhVQpJB0%2B1N%2FWaEh6O%2BT7%2FNxl0PoGax06uEmKCJ5hHBnXAAkXgDndXPDS5AwvOi764jjpHwyjfX4bI4zEBvTbtkQs3%2FMoT3GEVFYGq6BkMdG%2BCib8PJLXD0gURmuS5AN9r0TwbtTLt03ylJ0x&X-Amz-Signature=719412e2bd63634412d93ffe574dc43428cd42b1951229dab187e0593675e3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
