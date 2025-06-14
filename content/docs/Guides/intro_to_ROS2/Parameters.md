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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBGBGBEB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCbooej46ce0RdDcBwTYolvzVdVoUQTkPkxRcUvPWHKUQIgRk8wXCxltwL3nBXl1gY5Q8FwUrPKrFRKEjPJFdrKDtgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDtNqfZuVSgBXmxT%2ByrcA%2BRHhs47e3uKCD80NFYdehEihryfJKHKsOsq6lcjnYlqTKjcFmsf0DWS46DbCoaX50dRZl1mQt8EA116urCnKBQCTjPmjZsJ5Cs2Eea2ztVA8H6byhtjGdvoesdBPDupTqg5ToVzerBO%2FR9h6XJy%2BzctlYnvMTtwUNTOM5TnSPGczG3T4XQ6DCKsiKgVr7igvVdh3olat3GCKCZudgVxRxZEk0xErcI1Yt1i1fn2GMCIT65Aettd%2BqGV9dBA1X7OL%2BrAidGTpo8EHGTxyr30BGSaF2QpWgxmMR9GZT4kin1WmuGL9gh%2F2Zdio2UJFZjg1cItAABMWzfA016N84MowrhunBBf%2B2auFtXV9kd1c250xf0z5Q65VObmOsU2%2FW6fwNLm66d5wmZnEdCts2jqv038vkuOJx5YFdphK782j9e9qIcYGGBw%2BikYyLJ68u68%2F3p3eZoE0tdxxt7bvam%2FZHY%2BarGxQRaVi1KHkSoHY6isoltdhM9%2BcbMXQfkRjzx743t579VQyIE4PkYQT69cHttbhBuHOeQk2Pg7p%2BNr2mrUinvkklNkC9zLAloza%2Bu%2BQh7dT4qfs0JxG%2Bt602%2F9xBxgUKYM2ZNf5dTLeCq91s8VtkOst4i1y8voQeP3MKzbssIGOqUBZRpgG994r%2BubsFQu58V0NUJVRdciqGZYTO24rdYmutej5R3E98nP%2BL5t%2BcT%2Fx0nD7uK00Q64WFw81WCbGlQgYFigtGODQ0kAe1kRrbxk%2FyLpVHBu3x6p8aED0gfLKfRFMCpjXMsTkqUD2IG4FRNYLbJp81gkH1YQKnirWcOE47NoBKTvbndQF7nqu2ADhRrtjgh4CB7jFI9bhwVNjIX8XXkXS%2Fsy&X-Amz-Signature=ca3bc74a41760fa91a878d80e501a1a22c4de235a6e903a409f1122e593d95e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
