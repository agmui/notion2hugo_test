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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DQIKCX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzNopwGuuMaFH5G6ULlAF76B%2B0UCFXSV8bwc44sNimrAiAC8WBApSZBegpwNUUePzmlDz6%2FNnuGyttCClFmhOStTyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMtuvYSGaeHQ4zxKnYKtwDk89W61C1Jb1%2Bt8kzx9Q2zIkf0F22GKza4EFFWJCu2DVFsXG3rfL%2BpPMMJVrhTwwVrmYu%2FZVc6nSZ4P5oc9qW5rvMS9qeNDtRiWb3IeTirZM5pmtjaZ5NZbez9Y%2BGWvrBWEQ8XYx9HjzzOamWwG0M%2B2CU%2BH422SEBC7h01Sd2xpSLRcbHXhF0qKp7uPFEaWnGqmeUEXwR%2FvSuOdoO0hu9FMbKlMiGVgGUA%2FHXVF9EyRwTz4iCSL1JJ2MHC%2BX0GsdFe%2BL8yFeH2njfw4Tw4QzDGcS7XyNXOFKP4rDStomYpMbJls7S0UX0lROAp%2BpxI3gWqDA3JESQ4wa2GTLZEIbxM1MgYRL2nk9s4JR0%2FNGq4yUn4m9%2BHehlbiY%2BJWmYv3nvVNSHNPOYUMLx%2FOaylGjlOd4v2HBQS8pkgkFlNxYV2MKxVliL%2BREOub9yo040QLz4fOa5G0EHCK%2BC%2FbgDyWiDJmVjLecyws0josDElRikn8BRQ%2BVKGI7CLn5LeQnuFFvltJyn0OUP9jezQDTdgvneRsC3whJylvTtPhtplt5XlgKXSpp2IvHI0ZH%2BxNfjo55Mp9Fahx8rOobSWBx0raIjpRMU3qfMc%2Fv3hck1eqQA901yEv%2BidOLqQbvq8QkwteXiwAY6pgGtQcxhm%2F55RrFqRxpYMCinIYR87cWh1%2FpYx0Tq0qpLoKb5dEuF2hHLO2Vr4WnMXlT4jiTj7iQrnVHyCRpRstoeuRqULcA43J9bIzOA5UPPscqiWcsXainsOCiw7AzZc2j00tKV2PU6sUWV94oCPibi1Zu7Zh86RUsO%2BIf0Fj%2FvWiWfh9JJTzvXopMnsN81fZr7LL2Dy2JnI6YK6OQqEF8mLLQeh3B8&X-Amz-Signature=01ee141b92ff2da558abb4499e4080c97ce67a265bff0a2b1c1557a3974fa5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
