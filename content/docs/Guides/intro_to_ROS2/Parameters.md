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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYET6KQY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIApgx68t2Nj9xqxila5JHNJ6FdMOdwfh8lYXYaK1CuDVAiEAoHjDuS%2FG9mflwktNUEOA3e43DvSDl59vC0FDbzP9QjQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGEoj21dc4iWXDBJASrcA0qH8nXR19HZ9Q7uVUp%2FW1fFLVUAK8nygQEz62Uz8%2Fcr62MFln4BYuWV950aB6IvjYkdcB%2BBLwK8ugWtPazAl4xUADBMCMnrM%2FycRJvkBUTAY3KoXOWcBJgPy9LvKSbiCaqFIHgqavWzc1TJxSMCXRzZNkQ9q2Vrl%2BxP87J6bm6jcKhX4aYdewR7sd0uzDxHN3%2B%2FrByiOAomNuQwGY9JMhvFW%2BMkWXplDT%2ByEQmMVlYn%2BR6B8SO2QaD9NDx1upaK2CzWeeGCJTAV%2BT36keg6DKI3Owa2I1lVehVg3fbawBWJ8oQdgWq4ebR5XuJJMm7J0GH9WyMB%2Ftm%2B8plgQtx55C96WC1FGK32dx8AK2juQ9L1jXkyi1ZE39JhkIwOMMA1ZvP9rGH8bSrf2uGWLvpDIZbxwt8zI8NbeumlAcSgVqAVrbQJf43rma0S4wExNdJ5mhkJARA2FTLbqUUDxXYI0WrojZh72vW%2FPrrr2xkDfnwcj89XPed9mb%2BClfh95S18uH06t%2Fkj8WktB%2BFZy9qEE3rY9ZtHESeHCPEpsSqPz5y7gs3Wd%2Fj1M5ANNkRibh5BsAEbMDN5QUz3nxyzMez7VhV%2FNAicJMn%2F37vUu8njyXMr%2FW%2BW8lgdLHYj8sOIMPW2mcMGOqUBo0C3WyWuolgGSv7%2BkNCNpiK3AE3KYPbSmZGqFd%2BDnYWh15xCiWzYRimg4szKtYcwUYViUQ9Vpe1Z%2Bt9fvRYyiXzBGNctCliVmDij8bg8wZyxGp3PGxKDNoFYsO3wnY5s76le4AX%2FZuHTY7CwdHiWO%2FGhYmAW72iHJeR1yrqhZsbgClsA%2FR9PzU%2FxwIz0%2FPXWP4QOt568FpRToqwu8Paq7tn%2BmguG&X-Amz-Signature=019486f85ac3013ed7a745d714056dc2542e453e814108a673e07716ccca0599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
