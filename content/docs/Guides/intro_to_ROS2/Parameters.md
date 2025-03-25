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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6SVMMD%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrq5gym9wGQZj3fGUhlgFsol0gYRhpj%2Fs0Gq1wnT2qqAiEAq2DXy%2FrHOGg5DU7b%2BZu87o1%2FOtn7BhM3BLCnpM%2FeRbEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC9IcC5NpEilpzoAbSrcA27kCIpuhF4TM2DPkLEqPSpEWA3l2LRFLLKk7HbRrispU5JXD6mc%2F6MfYhAKD8zVJFR%2BQ7%2Bpy8oKMhClwe%2FoxuqX%2BOGFjgtwtVVhEmTe8aawtIlcIyamXpzpI3E4ytZcIh%2F6fbtZMCtCNCutbtgKpEw12XZXkmIOydVw%2FEfU7RYIaj5jDr7HPirTfPMXfbwZzL6n5HrJwRUfc3WuYCektOYPa6XWKx25%2FhkaxzBnKG0%2FeCoycFdOlhWlV7rl4AgO0Ka6CA5fbKYPDdn4W1cI8Og5f%2BnvfhaNzolIHpSGEDVEZ9GCZ8T7p8MKtDPOyr1SRlUlv6P8QfH0EZtjUbLJmgHjt8yYyvFxyzJeKwbFAgccoc2JukcsTLR7vdVsrgAdYNPZYJv9X07ah7ZH9ry2Dp4vOM9ad8b%2FfrJdLhW3lLA0tbVpmTVeHXLQCdSOWmTC0Rysu5GoZe71Sv75Y3h87OZ0KVXyTiLdViSKABatHAqYnzIQ%2FsnbsVN0joxCuKijQVr1ssURiTRDYpnKJdE%2BkiXB8yfA8PGTKBIBoAwRYx7AGfgkijWhDtoXXEZw3DqOG4pTic0nGS1MCVCwfohmi5WgiE6eQ1m7arE8J%2FDOXid5ilAhaax0fFwjhipcMOqmir8GOqUBR596lccqcU%2F8R9gKkaeDVkASLU3M3n%2BsIanlEePTGSIKMcGRYnevGUT0Ox3jZh8fA30n7IgqBvsUDuRh8NHhnbYxvUEpDxsd7y6F%2BrGpph9kuMdxuX6vCJL9KeZ5nmEm7q0COVwtyAqmt5bWwyhNhGEQ594T1VtyquaZiaaJ5UhYb9zaNo7gJ5kTwZFWkXPDjSpQ3cHb20bjXUVtZoLsdW1xkw0B&X-Amz-Signature=29d7dfee299c201eb90a06000a36b2254e5d32dabdc3bf475ffbe0cbfe45110c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
