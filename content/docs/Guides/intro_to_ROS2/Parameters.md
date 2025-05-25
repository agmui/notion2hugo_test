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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655F6TDZD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDVjM1UmEGDZwGCQSDMNW6lIBKHoyVxNzG%2FMQe0VbLvOQIhAOETMuo%2Fwbnhu%2FWEa%2B7x4HXr8dsOgCPyk9b0%2FtQkhyBPKv8DCCQQABoMNjM3NDIzMTgzODA1IgwgweV4hpb5c0NVjYQq3ANaTIBjJsO2MQE7QB2Qnd%2BHUlXa5RBlIagdEKLCRhxz2WXMprh%2FqSyvd9xLbFFsrZ8bag1eLAJL4%2FQ8puCB5uiMXWS3iRrg3ojeKO5R228wPmX8ZN8ziktmJWejrIaqz2QnYFF2p82Vj7x4pUsMBmDhW49D4DvFv8Kj1FR%2FFkzB9M44bznlvYY7oy2EDMsd032poSJKKPqAxSoqJLVgHzkb8SVDtmmARofD1UA5sSwNRTfAPUOQ3CMhMNIQ9wIJkKubWQwgsNrfT8s7CWAIJ97vDsyX3BId2Cwe%2BtkIrdp4NJYu2yfcC7el11B3q7Bv22lOkEmWT%2B2p1QvZO09YSsJnBx4mq4fN%2BCg7hRt8IMQcPmeXTBQXW1ePkh4OHyDh2GFBjUtEmC2VcLfEix9HAq1rOmHYaSC5Q2sAlhj%2BauVefSnohJFv74R%2FPYyHiGb3X%2Fgx1saZFEL6d%2FzZjvoLDqECiovSiem9VDRm89IUGxKnuTa%2Fto0ZFzUloJ37IfBhmZrqzdZkToSnfWtuedhyhKBeb8xHH8ABHQfguCtiuGazRozOzQ7vgGlU7i9Jzu8JBBICd%2BFeBdbYEmRTqHqSBguHw44yRrNONhaWczL1JlSvPYxDu%2BBm5RmBTBAaxzDTmMrBBjqkAeD7lNlPyRkxYzcw%2F6Aoa6kWNpaYAdp7u%2FAL87fVRjO0McsTwBA1BS8MF%2B1vzSTna%2BFZgC0swYRqWP3H9a%2B70a49nDJ20aVl2BMv4Wsqdy8Uv4veHlilTb%2FqsJPpZuoMJVkRKbEDh%2BpbPdUuT0FIEOH7mEQpaTR%2BeGkjtqOQyBWbjfWoRvNz%2BwM7huoNLYUsoqxq4RJRThY6XIPQzPM4t1vScm6a&X-Amz-Signature=43cbfb6333d4a4ed85da483e651d4989adad4ceda13aa6734860ecf4fe267f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
