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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWC73REX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRY3vTDCFDIMDY2W73Dh9TvJusE2fUi7REsey0zUiSiwIgPIVU1349OBAKZUT0iJNd4otdHIxqW3cyNfd9K6GLcuoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdYjQa85AWuda5w4SrcA6EWol8jF8kRbLDE5J43YdgHfOR3OxyavkYNGZDBGfJVRFXrrkOcBVnFgfOmwqZrIPlfEyvt%2BN8yuUCmdWdaOZsQgL6isQ6UPTfOBhKbp22pVJWC2OkkYKTlP6AEBlPFR7%2B23Ter9gufZ08BeftB4gIXWrtxXZyc3fBAPwgBmZ40gwavLf9nj%2FSbE%2FttqtAXIXdDJqHC6AVZOBwlG9HqqUzukYNRbyJ%2BpaHfW86yeM%2BQdibLCP75li2tcbllCcqsuhW5mGkG5%2BaMvqkQNZUedDN6l%2FjWsAINh%2BydKsQckUWp0NV9d%2FV2VM589Xvyt%2BKD1wCGSuE6TKV%2B0mYcqYLPjPVDPWFjb4reGChJJ0laA1h4etdfAvqRzc6oTPS6DcpxhjeujYLNL%2FKOTAqgqxwzesMZ5kcvJJjSKF%2BKG3m7rWndrLFBUYspAnqHkSxRqswn4L3qPe%2BkerHLb4tOnO7L4llAeU0wjUwyAcSr%2F5gsPVMJsk7ilk0v7qF%2FWKkn61moMOiXYaVCSSOFAeWyi%2FG1t5jjO5mQQ0haHsOzL8QrXKICk7KLL3vMUtRPW%2Fn6%2BfsuKCUKF4RwoRWySHvgrnOjT2om4HMR8QxOA%2FHzcKgNd%2FeLF3ZxVjLijCqyccTrMLrj9MAGOqUBZhiTk9Sstefg1eI%2FsRFi5YWZTpDHqwhQVJpn424FO9%2FkzbSoReyWXo%2BABFEu%2F1f7m3%2BOHiFcBLyI5Lp%2FXdW1oxG%2FHufC5ZlPoe%2FEIYMa%2F1rX7lyeIrdRTu%2FHycaoaw%2Fio1FVYLaNN%2B7PwMowE1Q9M1aX0JvbDXtTZkYY%2Bilq0%2BTAV61fNxwA7ynCN67BxEB%2FYbeBPN6e3tAzg3Mmzo5bUlHukNVY&X-Amz-Signature=805031c7cbda698950332b39de54f8dba09d1d26a7c293c2149de67663a5d195&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
