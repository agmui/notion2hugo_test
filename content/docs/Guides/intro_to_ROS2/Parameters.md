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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBYYO5Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXF7rUk9SQ4N35ed8PtrLHBdV%2BMAfYsK0wyL5Mc2WhCwIhAPKxngxfRH6YAaaWAYburEuMthkOtL8bApAUrRfKwY%2BFKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv7ShdusEv2y1kaWUq3AN%2F%2BlfdilW8AVDRTb%2BgchM%2F2LdAgXA9rdqDjbzXsMTEPggnR6h3bPdPPe%2Fv%2F95AVw9oNWV%2FLeUi7yBOkkxdOP6BC8Df5a427GjdsnBat0zrCfR%2B1%2FaThZkKp1R3sw8jjyWvB0Rl5u70xcaYqkky1C4yOPV6gllfNL4KiO9zdl3NsCyBYzV2ZmrbOQ22NPlItkAMGhQDOd7nr5v3NQl9SgVelanlDMI9F8IEnsf7Vs44rVIvcm0nzyyVLx791T%2FOrMZyJA5Ft0peRIca%2FdAkGu0n60qSJYKuT9pfB%2FC5LLLPlfRwfwl1rI5%2F1ZjHnz6Lp1h%2BXqiiIqqI%2Bfx6QvAD%2FpymGnWKDV%2BAu99i1Y9w1SBUH1yGOiUqMW%2FH22EdthfOkCgVBuTyRT%2BK2t18PewMum%2BJzsED9sKrPzGrhfSdXXuKvMmSLPKHgjHstERo2IecOteDDtgWwncP5nqxwpDIrg%2Bjl5ShPKJVmA6LHv7As35C1TdDwUeZr6gNnHv47yXi5jNWVvepbbOD45DvUEFsDkEauThYqaBSCxWSmi1PwFZf9tF3xclF%2BlYZMUq1QQyC%2BBzPJPL%2B8gPi5H0RB4EcCb716NGHt%2FwFS%2B9GqWyvhss5fImOPqVe8HbBd5RzAzDM1dnCBjqkATIatEXFJ8NWIYTr1ow6Usuj57adGXRBHy%2BB0TCwZ7VbK9AWD2wCdd7%2F06G%2FuH2BKhDKnVar8HiRImKhOvVR4idXuSIpip7%2BrcVhFz9sDyOyc4Z6%2Bc7tMRmBC9sCJV04cRXxSMcfNrMl0uZbV6bH6I%2BiTEei236vkLHzzvTYfApeqEegNeruSS0iTR6gAF%2FLKNn3zoShgXZdCcDjRRVvIGHI%2Fx3R&X-Amz-Signature=b2b3e966cb704966eada07b35668e5a6fd6e6f536ff7450f69d84dd0814df4eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
