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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQ5K2FR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCstI5%2BDs%2BkCUgOKs4L7h5Qe3Ivj2l5LHdYpvF6k0HWjgIgYNYfKlDVjY5Fe%2FYg3cZKAkIgKFcSfwhGHkJM56UFVHsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkoK4hBwhHUDuKMSCrcA5nxUZJHfFvIASGzm2KwFV1l%2BkCnq51wnGkraGBvFrkZXBM%2FNC%2BLO7mO14fRUuZM3xyhe%2FdMlCY60IaqMje%2BuuYMyG0RKKYUSSJN0Pjdb7mV1%2BlwAjaSKYwJ4YikK%2F6R4pL5HEQzXsQU0AkUq3cHtNwNWs1UOP8OvAYlxSg1S3Pkc1NVHboREe0jpdTwpHl3v1e20%2FfZCvWyOdSxiUqywplgi1SULhUJ1LDNKb%2FHTvh9lEwpjDMTagFGyjjXhBZoakaWB5xnV6Rl7EC7NF539V5pnrpmveJkQiG3BsBvl6LWvCXrbokCz7F8u4fPeh00EYTQw3IRMJXyvV6zl4LuyszwWGrbuyF4jstbrkBpwpmHg8hF7N00aPe6qnhW6e59HzOMIbexI2bLcPD7%2BHa2Sp84nfeUSjA2I3wqA%2FWSKRk0biMe0OSBIz3gxjUIolSCaiQoHYlWwqKB%2FwgXfi06EFq2VR2GcghSGX%2Fzzszjshv25N5O3NN%2FqvzfgilOK1b9Z2gmVmK3xA91LpvS%2BFy2wTEtZnsg8kpd%2BFGWyWgX8A2tASSUmE%2BFCyTG75wWtahP466pAIehYdzZOq0wpH8Eg2AdhiBzCHfzO2IYwky%2Bw1giKo7iP2QYStcBQKLCMPGjjcMGOqUBQntzahcsTJV1OGcSrKqyTo7vnpn83nugW1mZTNNXHKHGlMdQOmVx8DPFOCdAlkNnM%2F8p%2Byf%2BjKwwADBe6dLA%2F%2Fho8sx8u9EiovGUYxSJ7Ki%2BQUICEVXk0nRYT4meRflpGa2RuCZFYjJ9QuxnxN2UEaaFNsGUbCjZCmZohrKJGd1EoW%2FVWXYCt3XHDfPcObT1%2BMOdEjBvlJEqsS7wawAEUU2YuNrB&X-Amz-Signature=4e0c65a57465bf0c1b22da94348d29b851ed3e68b925c779da920befd6319c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
