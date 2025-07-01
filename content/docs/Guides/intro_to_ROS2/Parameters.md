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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBHTDK3%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnm%2F3vgJV%2BGvPFgEyoMaELVinguJFnUqar5EQFiqPuWwIgfLooRkL1IEuMw8YmVjaGuRax9vPMAx59UAHH6AyMy9kqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMAgxhsbmnTMZ7MTyrcAzSQmWuNslMPX5fwYPsnRUPsa9WwWo3Ec34NejZB95S9lfW0Bgn9h8walkV25oOVwat3HyMfQfF2%2BUrke89CUKBHklbh05I4RpgkIDujBCHVghCy1N1pUe31mzdXyLipwV7Elwq3%2BfWMO%2FoDUJ3iCMoY7oWd1ToqBVrcnaNrcqIckugtlgKj09Rc5FXmcCEnIkV3TLTPeQsug3Q03P7dUvIdizyH%2Fmmk4tUhX5ZFy9j48KpoHtyIO3WxRJCzgazCWKsy4o%2F%2BHSgdBjyoUfNsO%2Ffx9jPwQh9kmvTQ3AkrBBUurl%2FCj9U7b9VmhbFl6iU%2Bil86rsVAPyG1L7LaQXnhgvR2KgeXWRgJ6V8yfjOWkQQVCKQuHM32J6H1zyOTSxII2VHvUhSzIf%2B35aHzenlhCGjegx%2FfiH7DSH6GcdEOXZBMjefmoJ9e%2FqrprBSRvW13B3dbbpC%2Fwf%2Fg%2F5eH2zPSBPAt7OBob1bs8amS3LjU8bU2Bd7D5105E0NfzEKsQCp5v5XqZirCV62oLSkISvFonys8U6bnYOZXEngypoWpYPd8dRhbQGB9xlmv3jESODgYSXNgpv9RTAeMlYsjoxfX3lodLHOvjbUdgVAnMHnaH8820TkTDkmpI68rGTVmMKDMjcMGOqUB%2BLuH1n608tKHAM2MpCFrOV2Ir8IJICFznfaX%2BEBJwkTN4u5vDERQ73OwkgdGkLLSdXwh7NPUY3hCVn9sJLdpfmzL3xEHq%2BAwcMUvEqljqx3NxzwGdGhI%2ByLAoN3ueat33Yh98Wk1cxGjVlTQgiDhL0Ncermt%2BCwVkzDF%2B2yHMujYy1fX%2BTey5rqVsG36dpYaTlHMTIXAAL6wgus%2B2EwvSR1YNjMd&X-Amz-Signature=c13e28d7031a764839253254bd0fcad031e6acb96d3f077f9257f91441645d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
