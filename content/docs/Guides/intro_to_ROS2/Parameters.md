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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A7K4YRW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICLHWe8x%2BUff4SXgs922fNcM9dLvL4GmsEzFqvCh45%2FmAiEAlo630WGpu62mzdiC90oqhGcVJDtXMO0TJXzb0e4BtFwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPTncV%2FE5ONngSeDcSrcAwTysCHx%2FORGmvrHMYf0ke%2FupMgGW6Y%2FixMf5zixAbLTraShoJHS98nUDGXSgCUl5elAv9lRabQr919FUbvqBdZDu9qsT6fthOurBKgU7MBHzDQZjedyIBgR4l8khset%2FpfU2RISbM03CxUtyRR2nZCHtrYCmaxVMU1AeEkmmknDaFA42FNN%2BSNOuLs9Ra%2FUWLWTL0c%2Fax0b9A%2BI%2Bt9EGBe7JXTFTnlut5Ggy2Hmv3MxLdBa9iiz8%2FbEPTKnmVwUhFaxQVQt9Pw61FZ%2FvUkdSPFoTznEghP0AYujV%2BZ61Du54TDZ5g3QOrqWjfEnTf6yR1ZJHnxnx9eBHKlmQAKCo3T58pqxkuIHAqMvKxpKgLi5qNRfnvmyolqA10EYl9HSw%2FVFEzv96wi00Y7zKEE7HAflyIFlM2gxsGzSshhtMFItvgCKnzYmdF9EZDckeKIWdHMmktEkpucI9C5KPZpZqjNmR%2FvDwlicYwZfHK6LWV0WbmrnNh9mUNHvU6NQ26qeDXgznfyizrPMxm3JJltXqgDG6fg07%2F5GNKMSdToz1jWnkmnK5e8UOWVk%2BjYjT%2Baz7wk0xNIVYG0dSp73ZOpRXSi4wHP9oz%2FI%2FY1wlw4m84heUndPtw%2By4gyPPRq1MJb%2FuMIGOqUBk9%2FP125BUvIOtZ9Zex2GJSewMswIK4%2B2t0IGflRA%2BHy8NMjb%2FuX3CfJ8rjWDvcx0lDaDnar0GqfOw2is5Ll553MPiM5G82nZqaidJGcMk0sSJLvhvOKewhY5bbLjW2EQ9s4GYhv0m339aje0J%2BLJAKey6hwVrbcJu6f5J0EQVH4r9nCo%2BYjwwz1vcKT%2FN16gLp90S%2Fjp%2FxXH8Nw13GcnONDJU6tR&X-Amz-Signature=3b8d9b3af8010e989fc2bf8739c698f5a29b795324ed0bff948c26c9e67662c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
