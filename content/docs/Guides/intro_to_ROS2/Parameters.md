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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK5KUTKC%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBBBhCMFtW08rGF4szTKJIoXJHB0hY0TVPl9vp%2B4ZVnPAiEAwZNhlJj7VzXJuc85bDuKovZZi%2FHT4At4bjnDmUvfZXAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDla8FR2e2QpGyfE4SrcA9kJtP6X5mkRtc7BiSU3gCnDGKsoZBlE1mh9nz4Vk59Y46Iv9JztWRC4Ufq93M5skAeTCqeElitF6%2FqCOskrMWshz9bwZhT3AC58G3OGKQz3nL1XfQtMYQzcyxLy%2Fh05CE8ASIrsVTzsc3hswgQHOJnXDhqQoUphpZVeWh%2FweBeTkUodpy9jYu9eaqDDSrCe%2FnLRNfwU8NsvfZb4XHdXgsuxCr%2B9IHwFyYCbgpuZ37PniD8%2Fa1IizGfBgMIk8IpLurDqfVgl2v%2BP3wmSelFAVHc5qWpNVijbG997VDEpa4ji6LoBduUPraSBcYHQauei%2FZC8lcOOsIw85c1Wzft%2FvDTgMt24RvIClHukLio04mpeM5cy%2BNEu%2Fu%2Fn8k%2FoUK7cTFLO8pzGi%2F3bsgJcMOuVeihlN7DZqfMhnxez643LR7emmVlDARvbYxtbceDkx2Ygwuh10kApaCrPdK9HA3cNs8IUjQvj29KnyxPHkUJ%2F42cxVX4vcoovmNjSHwb2sBpodaCzc1GK3Aql76Ax4QMs7to%2Fa73X3wqz63mMhILUa3%2BPiNH%2BJkFDVnFyawC%2FQYkGjdFDjaMaBO3Jm1QZBT41o9Lx5PX6rnODE1cHEv1soiQmUbbu4nPxrMyRr3JOMPbLtMwGOqUBzjqxgro7ZMUMJcPB4XdAIMZK0svWoYG%2Bpu5pjU43BPFJStyNzbdjYUrh07w%2FX4Lk8iC6tNEbx5XSZWhox8mMoW4YevfucOud1S0CI8gp5McqdR3ndHDHpQOc5IpZfY%2FzVUcx9mXogV2Vga%2BHoNDwRSHYTPMZhwW%2BzT7qBfgfCQhPF0mhSM1%2BvsqWiWxKY1OGn%2FQndf%2F%2B949sEYnug71MK0uVMgxZ&X-Amz-Signature=7011151e751f2b4467f3021a3d38fef45cfbdcfa1bcf820ad7b5f9dcae4d7630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
