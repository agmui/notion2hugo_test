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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6ENUWS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDBtcA8awpae3ZqfKKS2ta8REdI63bfJfuWlHllmeh4GQIgdqBEpfKcOHRPRnl4a0cVCTgqQu2JQ4D7p5YX3VmSvhgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxhfHXXYeR8oqMvBSrcA7MD27y13QC94ApYGseLkEGvWQTLoil%2BOoYcB8OLPQSjbAb9IYbmpJyNAsRXVKPckF3i14DCayB%2FbrQurNsaVua3ZJ6LIPaSjZqFhAJPnWGtbQa850YEDMVLdSa2h2EIlklE%2FY5F3tn7IOqjqMEkdZyDPK6KsjERX1w4R0OWbmv9cJDEini0SLnffjeGqMAj%2Bia9X3ugp9qZBLZ13oS9UOB1ssdvJB%2Fdz%2Bg9rxnqzJRmRsNAyXSVS%2Bct8TswasKOV6Zewr3HZoUtEsqyqGIBF83Epmg1zjlybkNAuLMOz9TjMsQBelnpXUtIcVZGZZBhB6OQpXWD3IYrBzwsgS7tByhvvvuPrb1yvfYPwjSYtmxIpO4nrenU%2FUmIjnzemIXTrinaxHiyCVgNNdV2770a4geQBf9KexrU1c7Jk17gdmDSQaG1uJ1U4wfqKOY1Y1A4dCzf0e4kGS7GP69Frn2NxulDxJLXP0HEr9DdM1AIMtANmD%2FjMMI4UoKRwaVY4mowMsuoutwd7vZ7Qd8GGFDfcTNf7RbTHiQiL8LV0HWtyn7cMdQ1KV%2BXSR2efEUR0Tqet%2B4Rw4anr7HCLhN3EsCDiQHqYo9wL%2Be1NWdljq8wCGyv6BBXTWVpMCpJ1n%2BqMP7dxb4GOqUBPoDeN9r0O184c9j3iWZO0kk6SPA3f2QdRtAl1lhEQtXx3pF46nhPyubr082qyDERPKlWZs%2B9kJUJV34ObRftrnohSAN%2BrehRTo33hKwqbdtc58dbzJZk6%2F93kL4%2FY4L3dFluYv1S5w4aS7OogjKl0gCVlgnSKxZaBacwrtOjoHrrR%2BQIdahmIp1Jdlpo%2F7mF1IwX%2BLnwohnIcaWrfAeq3s34zGm7&X-Amz-Signature=3c07b45041888a9a95a8cdb84c5d63c836a1e6b2175edb1d98d75fbd64e731ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
