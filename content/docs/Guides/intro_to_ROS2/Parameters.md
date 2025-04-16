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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KXEMXZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm3eJT3SDPK4SNwGZL1i5uHt8EClpxmdMR7w1mdaG7bAIgJt7s05EQmwgle6rOw%2FSJDqpWpn%2Bshu0K8knQAzk%2FD2oq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMEbancb3P3%2BiNd%2BfyrcAwShfLk9FYoEqNSHt9t1097CYQxu9lsYyFInQ1NVuGDeClE6kj7cVprLh6Jy6mtlKj09J2J08%2F2i7T004X7iW%2FhdXLoRFqnj6n9Z1keFcqAIoJUWmre0Qplx9gjjC2OVVDMjqUtnvCbAsk98FtBrrpBN%2B%2B5Dc%2BWDv80oeVMCP9W85dh3w3oFX9MjY95nQQrQ49wRI469LtiPnJ520cGgfgv4GjFSKcqGEIjKKPPgSXqvz3sMQ5pA8RqBju1FvuxFENkes%2F49xFSF35S%2Fd5vWZFxVPxTbzYNKWBZ%2FYNADmI5QhMQNmxHUXFh1evcAbtqHpr800tBPJWmQpStVUfqdpufrq8IVMsRfYi%2ByhfidYqFWJpwzVwG7Kjk8%2FGum6Fzql2o68xIHnR1SzPXX9mCnEf7gf%2FRLbsoyuJmXFK1%2Ftsgo15FPVcZ0sSSSsBYhDiuqzKYY9ZYevsAmQp9q1W5amC8dSqxGA8%2Bn8DeotoCXVK8ZqXu14uk2Os6jUBOzBpdMRXPpo5VywtEViVNDmbw7NfYBvr37uyFdpEiTn1y8bevmc%2BTXSVvYIkGtEXmar5KXsInvh27f2nVYlRqaxdKlJNYdwdIc9eZjOIReOvAVdDutoDmg7sx1Vcq3RpMGMKPv%2B78GOqUBD07oMZ9Tte9NpS3Om76PUNTzmc8gcP%2BmkDQpnkhe%2FNm6HbbQr5JfTVgeMi8PE%2FaMlWGlZMOUpcqF%2F%2FsxKzWeQh%2FRHPsHHnr%2FcwjW35P23NQfWWzlm4Hb0XD78GwqQeXI4NN3xr0nT74iTGUT%2FtajU1tu1OUPIYjP7X11eXOKSopMwWrphyakVCuyVyt%2B2NGwxRF5COqMizStxV%2FQfdw1wlXzihk9&X-Amz-Signature=4854d72f6654c76e49b2c582c0221aeac8105ebbe087b32bf4bb791a65abbac1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
