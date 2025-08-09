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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLYXTKV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIEwwZk%2BdDZiCMlQ37MKVKNKyrVKMUrzCZA98%2FtTrBqchAiBg8s1r8X5Iqw80KA%2B3aChdeY9ACS1NTYkXUI2hLEn9niqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJkQf%2BMDVgT6rNLtKtwD%2Bvu8b5YcaLO50Z128HvYvvA5cLfV8qk%2F0JzZd4VGj%2BrlQJTe0uyIqdjHiDFCHjIA3hr%2BjDYIVblsQimdmj1qPjgH46vw1UCuGX5136ZhTMcmcD%2FYZjurFFrGQ98ZhTUrCXSfDssFJBP0r%2BSI6IWbpYvFplqY3Df4OL3561Puq6kPD3zj94vL7Wi8red2ZTaukh3ZnBWpwVgoirUIru4i1lyHLxw%2Bf9KtSXcgrBYJvRzAPRetJXUdbs%2BTKH%2BTiZ1iuc%2Fy22nRHvt2oIbfCwlnvn9W8gc8ohLSUhpQ4iwe4NB%2Fg88mNs%2BLHAqHaE2G7JtJ3Vg8kNYODKigbx64QulLOXHZzC4pxsHjbpoiU%2Fp1DFWDdGxpj3HY7RdSppTd%2F6xWUHHKbCmC052%2FL7A%2B5XYhKF8EN%2BkGpsepmzXYZK9LrcBp5NmRjs6WoNJ7f%2FO80sM18C7v4IAPfyZNmdjFsQMBmSAqEo%2BK5FOuhIaTPAjeLzyr%2BkryRtcwj%2FE%2Bu7WT8MkXZUzN6aQBhyrx%2F1ZQOZLKJ%2Fs%2FTWZ%2FDEoa8LHrNUM9JH7RfbIxecETpNLOeNqWSlFj3WjdEHBm%2BBEABwiTod33tu93uS7dA7%2B7FjMlSKZ%2FeMRHFptsy2ZclwMCwdQwzNDaxAY6pgESKcT5ozL%2BBHF5u%2BnPtegamgr8Hu3h9i6ucBiNzVNogvllTsCAkcxj2vqCUdH1mLiZnGJnLE9lUzmh2A9sg5zhvqh%2Bz%2BRK77WLTLBAeUVe5K6yv58oLpKoO907%2FyQyUu%2BwqUwyT88Mglarra1QgEcAX6kpIh9wgO8Me%2F4WRPvJNYT1ggTQaIoYR73CQ7DC7DblZA3cIdiG9diufD1vOui1VRhHeR7D&X-Amz-Signature=7c86de8b285bf0cf79f6137389a06cf5eac63a5609d9b277cd8bf04f02661211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
