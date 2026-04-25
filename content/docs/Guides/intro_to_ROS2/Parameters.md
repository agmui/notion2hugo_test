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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNIAO6E%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOWpifZVop2P0j6YRDhbPqSR1lQkmh1%2B29B0K9t76WnAiEA4MabzD4%2FiYy9Rvp0tVsyCP%2FaIqYhRLOypDs%2FWGCPXFYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSN0e17rsoBCGc%2F9SrcA6M2On2wHHbM%2BikHjcbn3XQ0hpWM6YxXaBrkShoRcNF1PbT2OOB%2BRdXTWGHHLeRUU%2FMdwDXLzU6A3g89FAkdVQwT9qCMohrqjQzmQRRDhFatvbU1W6tBfRRahK0G9vUuLQ3RpsiTnqedlKRxF78beFDRkuF844HDHxUEaz1vAyG5tOEgrO%2BYg%2BX%2BMCPXuntvcLeSkEHfy39FnjZTLDdroG%2F1bylWNlf7z%2FRYlAbmMzZkrU9Wc4Ay6AWvlihBZSaUM%2Bufd%2Fxy1sVdAUT93bMEAnxzyLuARBSJbrCXtJk%2BSfHhRvrtxGcmt8CGswbnIDdGowJyYJBw7HNg0rcba0D6OsV2PuKXlYJdvmD14%2Fjjf8Ka1F7w1qWE90Z3XU8d3cCIbEJLtA3R95ando3I5oMrZBhOm4xr%2FZVKSUzOkS7QSRCErQNg0pA%2B8jxpwJzmlm93rDqHr7UZX2ch4hEzdYEbO%2FKn%2BfJo%2FcziAyEro3IZJhJwihkQQeUOXsRMWbzNbTPYMtocOW%2BMRRA6YwoAhda0GA%2F1sLPgJ4YPTDUgVlqYf0RvvU%2B%2BboA0z%2FGom2M5F3WVQU%2F29L3vGfytbKYxPq6arb2oXgKP99iVJXu3UK95SsNCvZD5K5aIi5MocsmSMNa6sM8GOqUBFsL0bGKSy%2F0rM%2F19CaB4QPqy5SPQkQCqwrWqUOdYBkFq2NEf1%2FJU4WfNlyD%2BL1xZ%2BHde43YjAkJbsEkjdOMz%2F6yc%2B8rtfK0nu0Anb887qVIJhu%2BUSI%2BWyM%2B%2FeuDSv7%2B9adtIrz5DCFK6ePTRm85iAy48yXmxMCwed9LiJbwRFPOCHiZQVNUTq5yLAVC4dVTa9klAgAQo1keUXP4WkqtqvsOaO4M3&X-Amz-Signature=2ac89ff1ea7c428c4d5284b6a8cb0ddae27f7ee027d2cda3414cc2048658ab04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
