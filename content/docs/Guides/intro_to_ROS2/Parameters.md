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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJELDHZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN7JjPQqwBZIitUehEKoJlYr4I9Xps0Srinb%2FfrcV2XAiEA4gbuGgH39up7BiWjyapsEmTgJ6396ZhXjOGNvZHxTB8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNpdCpCS68q2nH9diircAyMfgNvnN5HXfEhdfCkDjx77tKoej%2BsmnQ8LEsrBqZuRrzFv1vK57uUVRSsw6k8NVS%2Ffyd%2FuiTK06FGWKmrBLaDs8n0BE2APoNCq0KPW6iBSaVzXNQCF2bgiPSWE7uySjzDc3AbIR2CxdPDn2oesRAUYlWCtKftFh%2F4LEwdsBSal5nOYPm2HMh%2FORLpPuhlE1yKnLxfrpk8aczK1KDJmo1tVVhNPGJU0Pl8%2B3B1UDor7TmnrNLQ4a6avLMVB4oeLVfCNowEBGqZx1zJBmMzXZxDiN5GZHCyfK3s%2F6r0%2Blbg8DN3TV7L6PgPWDMkF7Et2v2tIQ5xYSXZRckJtVcLZvddnD%2FiPc%2BPgu%2FJbeGIq5Lp79MWDVGyDz51mVQ9e1Joe97m1ipliKIQ6FwxsOcf%2FRkxq0YmTdjjsvklR%2BpF%2FeF1reDMAVNl2pnkhRbscXkFthAvRfsr21LFdIBQNcZUb4Cr7nLJbIE6rqk2W0qerbhyBGKBiDHKPxd0jmGKaEWSVfymKUTSd%2Bxw9I6cqLwxxuO3t1yiFrjpD9%2B0%2BwvpYs%2FLoLSLo%2BYJHr8qtmlhCISrhPUwiCzXKko0YBYalpTy43%2Bfr%2Fw%2F%2BlHFdK4ZNOTW9uW6Igr81DEYa6GRXQbSaMJ6M9cQGOqUBEC8mgAhV4SHfd4VrQsyJKgaQwZDNUZmI%2BdV2SEuLzWip7HMlHqRJBxsAw1J8VdB1dBZg1kabNjejI0dvIF7PMTN7u%2BXrcRmuaX8PnW15cyM1D2fWQ3ZFac3Qa83RtJipCH0dJJRmgADLArMDXTFLnF0oECyyXn%2F3CucSKpY%2BpXhrMzpnACjarB4gvWh7w%2Ff5XodNJqqnJoXnJbBciCgDwlbJszda&X-Amz-Signature=bcffd96697a6f9e4a27194d0b12276720828c35ddad12739e7706ed7cdb02ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
