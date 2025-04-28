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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MMS4VFM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXOuzOhS7hVEgYSEhpgsu2fxtrzE8VMGKX2bwdj3h8jAiEAnihXBGgg3DOWUwnttNxVFHJZ7mLHzQ%2FhGqPX%2BXhzA9sq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDObLzedMmpsct3LbcyrcA4NkD7CzsO%2FAKeOeGTJE%2FMZ1IH54K%2BFe9Xc3S8zRw3FxikpkwRlVM9WZTaP017JMmpBInI9zidtkH3fbqaPN9qzMPUbNrNCAI14F3Lv8jRigZobozdR0PF449w5AxWvf%2FsBkcPhj2LXbghG1oRV0ivBDKsVWNObRY2gj9UBPZxtTw3RIK1ZcF9dj0broixMTj2h4kgGO5efyRN2GCioQJlk6PL6hdtdQo5Bi5hpt5hw3uc3y9On10y1V2MmHxQ9r5%2BOWMOPyoWpI5qzKKPRgVxUacIWFQoT6Ku2WmG47dUpP9i5xXktdLtisMa4e18%2Bo4g%2Fjc86tCFv%2FxWxIhDfLK8xnJZjYYBSn2lowEQn8gKH66QABAWH5kdCgW7ziaxfW6maspBOiGzupZMcA7tGeKZTgmeHPkC0CT972s7h2y2QqQE%2F5DGVeGUSe6sBp101eT6HJ2PXPsVQC1wO2gZ12pqu%2F27Y7RX7TnX1l5V1wJbQHDlXoEbUWui3fKj1OBTbN%2FPDmhfFyVK8n05sMFKEs1ILbmOB3WqxTV38W50PWzhLmTpuT2AvMC9VwTHWulvXNP7ssJZL3YOy%2BUKtrDVNV2iCFKkWnD4KH2VIdUDw9dy%2BJ1iB9VFhE5fSENMsBMLTWvsAGOqUB2mN8o%2B76wVz%2F7ikyNdSs9A%2FDVIS554ggeVnfHt12MubmwWU0XBaYAQER7PuwjhSh7ozeqtrCrPCvHJLG8tZQKoFgFucTJeuVfUsnhUNPmBdn7KhXjYBjtbDgLT98qlTp80VVszJ3%2BlJVUFKlmqMBkjI%2FIKnCd0i9GqepuIqELf1708fdhJwzLI1v2%2FwFJXIgMVctK64vDflrJZSImsXOhmK9YX6e&X-Amz-Signature=3bb3332c9fdadc893aed94e1c97fa47ff2e0c425c3a013c17b796278bcaa09de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
