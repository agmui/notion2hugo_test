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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXM2WI4N%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD1gfAdyPa4vdLsjXJnMjq3lr2hPe096OZ9qIb1VmLBLQIgOhOSg5kym2fqkURMuUW%2FYptjo0TtZELZ6%2BF74K%2B7jHgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIx%2FhAxSCbqWlkTTcCrcA%2FtrHwnX5lgMqpt94H4wgMThUUKQME8FvMbcn5fAfCsuMFYbywTDEUocdLntdKua9lp3iNTYujMVWZsDh7otETT2Wiz1dKSpiaG2yr3R0Gi1O9qn5Ufkus%2F0DfwuTA7E2uRWTLr5mV1seeTV6GV40UDcP%2FWEtd4YelE5qjT121bh4v7khsm%2BmIXjGQCDC17EW7z3n6RJ799MSWmRJt4YmCoD7a%2FpBFtFM5MJ0AzCn9inPDHMYTmGNJG6sU4SiGoQioCayu8uVoiJj2Qgnnl7lxYWgHxym1PhgxABs2f4sBIAgxWYV09dIifnxr%2FzlcW1wZ%2Bkg4B%2FpSUuGtLdZ8QqxbC8OB0%2BQLApT9qvfwn0LL25hc1OdipNBssNpeqWPipS%2Fshi9femszpCv3C7Sb4VQnQh8cQBou5lGG8jVnvNmc1UJY9xa5qD%2Bc7wyMRYxYbUigAvPIQsPmpse%2F71nxfwTMZ1VTvOt5W5tT8MfjAo7QPExGYyoulIHRFqR7Kv%2BksNxzGIxF1PAS070r2WtwIjE1whp7MfNPMofnpN7dx6xovmHaJkLTKWDcGPmL8oD9pz8yhfogdaZKLhycvBfjxqKsdWbaVcecSMqo9iRudcVzn%2BnJZG%2BZ0Eorkgysn2MJjQjL0GOqUBoIQ89D8cMNK3AGTBMKFcMvyeSscgGuyA0CA%2F6KfARscY62LwbwszYXNA6CI0TK1gPlipm68zBEOD2xscqwQrRtXOtEIU1UUA5ttD%2Fu2VhFEJix0vwj3z7c1DvU10Q3R2w1hFD3tSsTzZd0gFgfi0lkuGkuqHQNTBwI%2BlQRufB5dO4ZV5QPdPfYYTDkmZTpGAzAGVaNqKrAMIyynookvwPLiTKsVM&X-Amz-Signature=41c7725c88a5211b08d9938e6071c3b94c0301880b36e3915a619689f51636c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
