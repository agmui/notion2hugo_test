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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZTJCVC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwL9GfrwtNg4dtDu9ALT1kunIfpuWyAOHfmNZ%2F5ZNOWAiEA%2FwvvSmB2CKwo%2FMMvAHjSK%2FB5YfUUztMU5iIZu5Vy1WIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN29E0D39dfaI8AxLSrcA%2BrXqQm4Rwya3hkkmQeSJDbINlpxsvZIzeBxRVrM79dYNUhK%2FuFJ2cg%2FiDFYt1WPT9vLBWzXqoUt5lb%2BtoR%2F7XIq0nKqPcrRLxGiBkmdE2egDuLUWCc65cHnd7KvyRO4iBBk7G8xWXIymEAJsdmp2pm6JLOQWyIyHjdp31tFBxlzclEt2XrqrhnFV3Q8HJnTx1GpUNcKCO%2F4AlNgInB%2B5U0FOkfpuvOBkyuIgXsDXlxAUhnp4%2Bgm8knX%2BGGti2LUl2MGtIRGXjVBOnAzF3Pj7oWmDpAw7D6F%2BD30D4KBYbdWiq%2F%2FQ0cdRhFVyDKcL9dXwAfUhxzqjjbSuiVWu8Eq8%2FttQeAVHUYxf5BbNelF56E2Y2AC0ngF1akONqkRT%2BuaT%2B91MJ0bi8kM5BuPbCnc%2BrBtqmmVmeJ9T18dA7b4PdOUrFu9%2FxPsXTRRh%2BfiLhIU2SSuzBHBmAQJvfS753yf2BThUeEl0BaHiAr%2FWwkpw9zyuBKOkfBXlq6U736D9qrJAEVh1QUJBzKRm04qWj5W60bBuKdb%2BF8XoBfjqB2ZLYq442cVAG0MwY0PEsg10QLfJR%2ByTpgJzRD0JOC%2FUcY4laipDu9ZM27%2FO0rGbH2nr69Dx43RPVkW%2BjwGejWlMIady78GOqUBH6dAAllLibYoeKiI6ibvvOiDXJ8eIVx7etXHGhPC0RJra%2B%2F1oiWpKnpnAXnugJmVl7iUvUg%2BETYUPuV3u5QQi10L2lBObHYZStRSqpydyJfDw8gc%2BVCb3abtTY4DebScRjhofr1CDOgZ%2BLzoRBqJM%2BXlMle12u6GvB17mZ9wIgDGu7ZNXgFgn0VUfVrF17q6J2TVR7lwRLjc%2Fuf503VUvJytyE1P&X-Amz-Signature=eebea78c6b548e4dd98fd75a2d207175529b34b22142234b06545d61ba385d70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
