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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE2G4PO2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7gFscX79gNH9WgbwteBRVzdsHrCuZXWcdfXisaJ0SQIgOs%2Fcx%2FWbBUJvD0ho%2BApIEcV84nkXZmlhuImyFpuDHscqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FAzJLLa4yuAjZYircA8xFcW6sVgHTygVbWJQ0wIWNe2C%2FQIWML25JF09%2Fde%2BxkLVYZdXHb%2Bq72aOya7fWFztWZA4wR4E9sdT%2FMp1eGk59xg%2BY35fPfAHaH%2Bt5kxfJbb%2BBJjmIY5Gh18f%2F%2BlD4FlSdTnbTkcMpd%2BJLqQXs1WjQ9xgjCmfag6rDa40v4CIcjner97tvvPh%2FWSkie87iaosjLsuuPB34zLOlA6tC4TPM5X1GChlygbQoLRgTaJ9zUe0mzkvWYfYvlY0zPtso0Ht38N8GMRMg90Gtq%2FKxezE3x5iWTUiViasUkNirnCG4DCNny6Mx7uyf1q11lZQ8cvT024P3na8RVq9xZ9mJKTgdp%2B52Um9s1iXV9%2BYTABoaRxfVWSgQWqZXj%2BHba5p0MziEBfNM2XC09%2FNy01JlQlk10AT0ronFJ6ejnmPdTrE8zgR3OM6ueEEkk2TnchzmGzZbPiR3F44GMmR8Lr9WUsZsbUxWcCmBWDc%2Bv1j%2Fm6A8AoJuc1Y9kn4lQYbghZ1yyD6u8GlSH%2BLNn2MLY7Ixl9CCl%2FL3UXqSMaZe%2Br2WG37na1hdxwXDiZQquo5CJvIpD72l6RSSBfouj1N1%2FfNlGfvUCn50F2aFdcZbDL5RzMdDAx0k1E4WX0xG8Lh4MOvlpcIGOqUBYGuHgiDLOHkTM4%2FdRkUImTBhZdTy41pEynyT4SdSbXWgCE31UIT3texZZHQKWqb8PIqOFk8Nyq7oZquNZxFBcOGDEGtkc31DOFfHCYOPBXs4IU93kra023s5y6jsmyANnU%2BbOcvFcF92zHCPVd0%2FTCVzhfSZDd6mWyWbElhscyMGw%2FNdncqGSuF%2Fvc4u2iK6XWPuefkgyQq%2FqmROezbTm8AG0UCY&X-Amz-Signature=1e94e568bc93cfcf73ea58aa1f563bcb3f6a7b41d81de0389cbf0ac23b3f2914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
