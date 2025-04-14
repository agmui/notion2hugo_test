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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GHHTV4I%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ1fTq8kdpdDPmJlq%2FV2qf%2BVIeozoOJNAXnKIUFam%2BzAIhAIXdi0GQAkoG3tbXW%2B0%2F4yk177FtgeLGr6GVt0nWmo6yKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoGUYjMJt7%2BS5TOqMq3AOyY89nYuGfSoKVPO3dTz%2FD09TfNvb6F1WIylRic9fN5o%2BdD4U1NMvTOu01dwZ7U5IuJwhlmhNQhS2EUrWE79IjUkPKy9AtLN9yK%2BmmwrpTyl%2Fde%2B%2B50i9%2FUNRi2SxBOlQirz%2F%2FSxflMj3tE7m%2BvUZIX66vbq2WIIVpni3IcGnEBb%2BTo6kgbPkj2XqElmSBkRl9aG%2FnJs2rlr44iYokIrAN%2FFL7CRm8P%2F%2FchVLYolylXBPpPq1kB6Yde%2FJiHoxhdafuhfxTZWKycIrCt6e7GAf8G6JUjV8ZTdd%2F4qQ3OCfd6fDmr1LCKpEg0x4idsCXi5EUeKzIDRlM3iN1xvPS9Ejh2ljrY79eM1x964DkJAhGzPlR8WgNYZlmPwbE%2F%2BKBtpwYNHJsBVcuRLZ%2BCbsktqv5QXdiJEK4bCZgRK6o6YGIng614zz%2BzjigR2sy0BNacTuXPNC7QfgVbKqxcC39jrEkwj413%2B1lPcMM23RD%2Fb7Lj7xE7Dpo2TFoBZ1CnMKtUSzlDXPbP3hNJqzD5%2Fr8MuB6HbKwu8mFNtGMzHdjl%2BCE%2FMIir75VgSpDwgyhRvSjKU1Ln6OYKyGMGYA23CryGW35ukx9CzrYC8LmSY%2FID1%2BPR52AqwrrV8oMTi3mGjDfyfK%2FBjqkAb6F9%2FiJ%2FM8bjlWvQsAU%2F49517eXm3vTmbycaOPF6d0%2FajeHHMzUEstpmBbFm1n8bwT0Yo876WOVtnV0fsVkwkFl8hGiv2pgCLwYV9eqiSOPP4ytmj2QFkqAFn8cnR%2FXKipi3dcPCZ7cr%2BF19ECKnSO8l93Vh2H2gwq3GhMKrX6dhoJ9kUSfhFUw6m0iI%2FHO4sZafI4GeApgbTVr0P2r4H4nDRP6&X-Amz-Signature=64530198f3cae62e2310c8a0f080954ed217be42436516f845132c31191a50b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
