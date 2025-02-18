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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCHP254B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDKoGlBMXfKJ1pYyzzwxkajjQy4RuxbP%2BbLi%2BaRyKk76AIhAO4lZgA3TWw2ELOpbhrSNjaOclUyKA%2BKSlxBQtwwgeKFKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywxY0V4aL69lGU6R4q3AOtZ4aKM45%2B3o2n8%2FxiP2mI080e6Pyw8ePVuscTzNtPf71PWbR75fEIhawN4QZP%2FV%2BK4F3Je40MoA4RfdH7O4MZDmHwFKvd3P5UflH%2Fi4HgxWlu%2BSsVlOdpVSIrNEandM2%2BfACtF%2FIPeVip2lRBEXcNRNB7AZLaASS05Si1J6gZzS5EVtS5vJkpUXSYyiUheCoo9fzOilNHjOSKUoGNHfIVahrk0fAoeo3ZLD6oItWn005AX5fUV4Dciq17QT9jNqxDYw9y5ciFrWIhvpHjXe32k7C2ZxaaNMWWgDiOUV3%2Fum%2FQmOhzjMTCaIPbxq31BCMavqf4umnpegtqg4%2FI4sXQpj2pHGRPGiW%2Fz9b8nGPl%2Bb6ly7OjsUeB9SjksW7G3xL%2FIOQKISYgJN0PQ6u90P8XABBQQHirYREI%2FQRpmqG418XqGjiqbF8qdZB8kltZcp7HGHgMWE7NozaiXaQIVISF0UICub5NbRtLFvRjU8KrdTzMZHvrNS8II0DVE8iuWRsaJ3ZuSvRJk9pRDkxu5TkdoUc3MHfeoeGZlY1%2BbWbHaHI5py4ZHt2qHVbT40wqCYYree8UVIADuXsipc2BRUGqZ6C2rO4gVBxjwo6PqQoQphy7BrKV58cO3anmZDDuudO9BjqkAe%2B%2FbZYxiSxXzNAuSLMB8UW23sTsNYGUkNH7gNpB7Njv0o2F3h5yCZdcRwvcOwBAczH0zui%2F7wQU6MQVm7IOhh%2F9H3xFRryDvqTxfPIK%2FktLzOJWqa8rHnYPcHXPHTerLBf0kmXQU6iWllB76KIlyzeWjw5fgePmhaNzx86ZWBL%2BCX3fvCFqJOeOfC8%2Bw284fQnOQK9TKdvaWSY0HHxhAx0UOFvo&X-Amz-Signature=ee997ab8ff6daf0f3bb0afc660fefd7db25373b88aadf6c04da8a0b32c9f2f15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
