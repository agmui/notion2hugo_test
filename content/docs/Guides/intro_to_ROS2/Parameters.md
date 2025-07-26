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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3B66PFK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCJLS%2FRGrGSYpEVj%2F2syia08EQJKafOGDhhdU19mR3V7QIhAP2tdCDy%2FtLI1tmrgWHikdcp2IwPnG%2BfNMKp1bJLcsNVKv8DCFoQABoMNjM3NDIzMTgzODA1IgyigLT38PI8olm68%2Bwq3AMZHVhUUKnLhCBB0KP8LD0saw8Rn9yRHuvkooV7x3pg%2BpUA5sfFgkeg11rfUFvn87kh8jeanWVyOH97nbeBz8NzQLUsRMLvPKgT9%2BjTUaCfrRNmoxnp65aXBlxmwiWQ75LGwtWIDqrKwpo8tVOZtpwjnBdTR5ghwRZ%2BpSxcWevfcohmFKz8kGxwBc7auNuiqsEdScoo7chcQGZnSw%2F1Ytu7aq9KAHahiKhCmmLMjoARZ5Ly02hPDr%2F6KYVqkObvVN2se9q54EVfelNjNgyKo9MjRfDVFhtafucfaqWzh%2FX4CG2tp0Y4N%2Bi141y8D2%2FZJzsIF1z71X2UBNApw%2BmYbACWRRkGs%2F8YKWXHiw%2FM%2B5MR2M3A%2Baaq5AKXDPcWuB%2B%2B6HjNU903h6CeN%2FPiq3OSlWkMSdSUb0k3sWCiFgU2MN8xYWPYajfMD6S8OF63Er6gzdTXRqWCDTwSqu8%2BMWAZRVyLGtVhY7jcdlgGzmfK7FZRj5jjwEUw5nCkcNUaXi5g0GTOZBHxiCNNDB5T7yjE9%2BCN36jAVQHdWPFAPqpLzg8fszcxPEzuGFC7RyR6LXeNSzUmSdBwStm8d15VEJXvj8uVrhkrVJol5Dw4NBNdN8nU7xx8vKdA5u77wSD6gjDeq5LEBjqkAYryH8r1qJYYViMT3YxVPCi%2BY6h1AWaY%2FOVoH2HKlnGz2eX%2FO%2FzAVwT%2BiSQFPUF52XYNrF84sg%2BwMrjmrOFVpTKRlZpFo5NlFmUxWO6dlf8V8mHxUCdL48DWYbHRNxpxOQ6UKbszp6kGXgxLi1f6kpJyfRV7DI3Fjrxyy00pecsyogiSGAsKpIB9CSMgDPE5VtFZmHXUCa4Bl%2BOgjb2ldn%2BWWHTQ&X-Amz-Signature=3eb778f3711a4847d4effe262595e8b0abec23bd49a888c7ed251193166c4796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
