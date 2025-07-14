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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLZFS2E%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC%2FuQ4FWfy%2F%2FWpaZ4AkkJUDjgc2x1FOQSFzgilsYDY7FQIgdBsZLuTj2GOiQfMyrgr3yD3IXp17%2BONJ7BVp0Wk8FWIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIpxqKzG2jeby2ANKSrcA6mrrCSio94eMxnXSDzPcUVnilFHSbSIAP%2FzzeWvgdfoECHdf54YldIOvyGjbUnzEEGviBplwwswRMDCJw4l%2BCb%2BFR62bLSyPf614WpnCeuy0Zkz633O6ql%2BDlJ9epnECGiuORPt%2BrcJIKPpPKLqg08rxL9OORVwCPUmsEyB0V9ZW09xJ8WaXmcusnnTQkC5oU7kAJUb0QYU56zvldYT6PXqwDncDkbC2e9ipbHOJsATL7%2Bs%2F4c0IPp4fjGQbJ0fe15140J%2Beh4PDZsST5CWFygGIkKYKA26zCEddTfH6RROEQus8jar5ArfaPjJvF29%2B3L%2B1IjP7PNT10x2Fxyj0M4Dv8ntkniSGxLmNia3KoVDyGd7oOfalNmyRVrVk4EYWcVK5VFsyaOcTib5H3ugQwNdDqMJn%2B%2FPPm6FSJXE4nkzNJck0in%2B8ZFw5YdYo5WK6wLYNGnPQf2FvPi5n7cJ0aMYDkdnrKyL4t6VgqG7iarJt7HP0jGVAN0q1ToqozIbYADGNellFRaRFpEDOB4OJy6niR0W8Wg5Vv1SvjJ0kQj%2F5fee2jMr3RerNgA01TsW%2BfVtOIJPK6muCq2ebtyqjuWr%2Bqegn2Ux8rsHHY2j0SNz0GwwiGp1qmLT1ivYMLTL0cMGOqUB7gl8%2FypA2S%2Bd%2BUPl6ENdiVMK60cXs5Joa9koUwMyI6lfQyr%2FY6xnr8dVgiVwZNaa6i0ZDO%2BFXQgUqqqRojz4ubn3oSZmyITx04jQU3wDPKhAORbV%2B5IpfnkGTNCwyx%2BFBWKaB07ZwkyTQ9jBPpsinflb2gX0LatkH16qhMQbALtmoCD1zzFb6l98d22pTmosnfOANkqctmdNALIMIZ8qtBTA1ktE&X-Amz-Signature=76ed9895b36cdca24dd7e838483540c5c36d1976fb21ffdc75f4b61ae5f3663a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
