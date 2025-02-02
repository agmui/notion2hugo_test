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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JGMTWIN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNaHdMfLXge1hs8lUpzJHcEw7iTF1zwoXdUinpI4l%2F8AiBKpXTiKAdiCz%2FzP56Ixafx2S7qe%2F5P5NNEJ4HWuqmVKyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVNH7tG9ATOOmdqFTKtwDBjLCT0rbg0woa%2Bv4BT1138W98F8v1Yx31D2kdWeIqldbpF%2BdB0wGOJXAa1dJ7ABM7F8TwdGN%2FAayVe6mQCpbqp3%2FRB%2BS9ah8RB2H27etA9876ApSz0Fqp%2BFd4cY6jlgfhRoSFpxzt4oEHchpOFCCXCd4a2sIxitiSdD%2FSsmdxwf%2FnIrEWV3rRSi97DUq5u2T7k4lKR3EqNNGIerIDoQS6bDF247lIkPHOfUMEuFCq1BjQhTHLEQkXSaALPuxzsmG3Ts32zz7Hgo5H%2BF%2BRESSX4zL5ZvgoJNCEbdNn7Yj4ONuP9E0h%2BF8gC6wkBbZ7KrJXYj38PV7Ykos%2BNc3I7pn7iu8T0OrBDDJs9noHR9yKPzRylo%2Bp6%2BxMS18uwMyYZ8TBoQe%2BlHVe2CfZ7JyV7by1UVJxWGfKCDwnfzWAowAFUT4i2HMCRTbLbWdUg3blVaiS6X82zpGWomcGoQ8LuQNvBHyz93tN4DdVSZ3%2FbrwbqkaWrbTznze7O2ddAMCzTx0Ytk3jPnRRjleDwZg2N3BNiB9lQC1xUiTfJUmEwdimVcPjOyRGdYtpL%2BvIkKHD0iwdI1rXc0bC3LMMoiIcce8Nw29gIa5Taio25AEoDgGlWse51ZezC5LG6geP9YwgeP7vAY6pgHScdSHpKrOOpXZoBBCbDImjtqVB6cTzFhvHoCZik2BwHEgmzviK8nrF3Rhgktnk0LHWtK%2BUxApyfZJCrVCT6Eo%2BvtK5OAqf%2FJT2KzX7aihXP%2F%2F9KAl50%2FPOqf8GeM0%2Fn6bbEf2uGBOc99Fm6xoJgRIsABZCaWWmSl7Bev9q5vloc9Zwhzr7VgRsJJ3wjUKgqRgy9CRLEP4F7f07%2FWnjBXvraj0wG05&X-Amz-Signature=b8e44b60d8c168d6eb6d2545575483a6482a1c44ac83e14dfc03ce0564eb3596&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
