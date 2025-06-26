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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDIACF4C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC077qTJiai726xx1dnhjVC79b%2FmPuI08eqERDb%2BEUGYQIgeTJ7ee5HkfoGsRF7eXR2kG2uU1ihTxH%2FHMexGCHEfKIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNe20NKNWWr2OtT08SrcAyY3EyeTXOtBN%2BQpa5D87pUduqaJ04SIXcroA280EfGCoc6%2FRK1F%2FiPDCQAhGsyjtQRzs2W7wGDEDin5PxqRJWF5LSDogigrG9AotCht9UGisM8uod5%2BBMv8OX%2BB5J6Yvp%2BqwliEwWBjMK%2F0Psn3ZHqJSOC5TEFKyK7%2FAhsn8UKvANfwt3DJ7WcGgK2CG0tsFfAePeq5HiBD8Gl3gbLVWeO5aMAEAACMQAYMZngVY8ok33oLLkSIvkvcXJzdY%2BdmP2wq6zjcO8%2FUzUX9iPS7fbVLLwfWKaZVNouoddqa%2FUeXdLVyPX9RdNwziL%2FapREZAAzifGFh0nVx0Be81EaGbig%2BU0eEsmy5uuGzLLIoSTnw8O%2FitBlkBdT4T90LuEqn35x2%2Fj%2BzF6B4rOLqd8%2FpLvsHVdnVDeyNPPYCZHPOA3rxWryF3CCdpspL49NPYPUrZdouT71B7Ces9UmKXVzN0h4ZrPwfib%2B8O%2FJ4jxDQS7HmItUTZC9dsmh%2BF6orXmGaEn0CCQcn686BZiXTsKCLIFGEshmlKLOPNjZQJb7oZQfOfwA%2BF5888ALkHvBBqzVhfX5qMljNW7SQebAjr6HN%2BG73D2eEt7%2Fdv8Hte6zSzaxsaU5ZHTm0zLYVxm1UMIiJ88IGOqUBDFQ%2B8Q5%2FCTz7mXS%2B0QtrhtNPecbY0ZtW198PQCeN6EoDi4s9VyBznDO8%2Fx6M7ev%2Fh67%2BJqI9bFSR5TIyeZTpbbrUrmQBkgFtLZiakkjiZ8RHRduZfoCzqsXgwo%2BBC6Nzu966iZVZihJs%2F0I7hsJV8zlPTxPjSHl8mpgDRuL3aEbA%2F0gM4O1gTeoQ08X9zZwZdLdCx2lPTbKrtEV4GMazvtzCDITS&X-Amz-Signature=504962f08489e160e1ea217fe2c2574ee29b1b96259598411d527d528340e46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
