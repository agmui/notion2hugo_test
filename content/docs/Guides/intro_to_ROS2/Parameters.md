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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYK7LFUR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxnWXZV6fV0Eblq9b4ew7UXLwPTRpEpu29CF1GZ9HzKwIgAZ7mlvXY04rszq7RQuNIBJPOk5%2FOEK3Pv7VnaIXPuB4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw2KJ1hG%2F38ZJeUpyrcA8LMYnCVnxFdyyNAw71r5YDz3z5%2FqhjPDOfoGcpG1JuYyP0hoGjNWzZFLCburigWWBim%2FlIFQsgQnKarIMEKQV%2Fa9CIqKU3WGMFLAnugcsJFytzM0Ytyc0XpYeqUTYFJ%2Fx32JnuDBAZavUPIN1uSlZI5b0XIB82txy5%2FqpQlhmAQtocbzq7kj2qRYZqETPrTbh7GT0FxyMS4dgT0SHPXN3UyqbGwJZa6I0y92nBWd9zBUOmF1Bw95jhyin8CHDJpxLAGYpoAx2K5M2E%2FSq7XLgWAKA7Z1VeH1UWCwLEveCenpL7V%2FEy8QZpF8MnYy6%2BMwhXBcQnep300FH%2FHwUkSTdU%2BE2atDjolqOrAzFZS9CeS%2B1twxQKZhN0qdLABh2IS4%2Fym8w9%2Ffoo%2BpMGfYRPae9gZ8RLsFrKs5okyWkcuQ5UoqQVn7eMskhQ2Aj8NIXyiqC4838NT6NjCVXJb09ZedXr3SJLkCnp0HqBZuNRbnaJ%2FF2CygnGvJTcv8VYGpUyRvPFhcxnlv%2FTyWi7Eldex1QY%2BSq9nCaY3tc91aLlLsnUGO3SGR1UG5EEGxsRlyaZ4Ix879t%2FvvX1bdsSSRkkBdtQSMGlscVnTnQ3IjHL%2BA8BXj3oLMstBUAyeZslIMODDkMMGOqUB8swWnJ4e4ikyZVfDGaBnF%2F38VV4veAMf5aqZP2hYgPU2esOSwoerPCE4Tm0Wl0bWbZ31g2CMPX8ocRVawenWntlzyizzeZfojT7xerhSShDKOxtC7534yL22G9n55zleQEpHZn85kbCHD%2Fh9xr%2BAc1P2cdSFIgS5%2BczwLUsxUyMXktkkv6%2Fnv%2B9KfTRDaEqJyM6pagKVhLIA16%2FgTaN09x7C4GT7&X-Amz-Signature=0ba392a3ec2a504bb54a3a31ef42a90c233c6c556c9a0b42f82153ad498920f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
