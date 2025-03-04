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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCWS63LZ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1E5WLBL4WtxFRkLDF2witXd%2BQHiPK8KgHlO7CLBDhqgIhAKrZmJZ8zs4X2JJWOZ%2FdKNJV8jhAwMdda8z7ltY%2F%2BBIMKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBwx%2BqIK8B0Q6zWW8q3AM4IQCSYIvJQ6Ktsg%2F%2BzqmkLrPU4dZB3w%2B1%2B91iI3ZxBV3AZ%2BLm8Qk%2Fd3phryBdKfrMF16Gxz0RiQnpsTj0u%2FHV9mWVFAc%2FZ6ZEExkuf9IG42rj%2FJQjylPQY505o8SuUeV7j07Y94pxtASMzWTUErHgClrce%2FYwwCABieoCX8hUprVPMmtXKfjUOqCEVp0Y9TfysVd7%2Fodn4MKrA%2B7aGZh2hBbDrrkCK2FBLR28%2FNYzvNkl3nsxsDktPbO5DGWFbNFomgJZLrgRtbH9uR5PCOEa6IfippT%2FYa%2FOey%2FZb3TzUkR2XWf1v%2FylJ7HhbkV1oyNfS7jx8RQk6Sw2vwKz7WLGCXThbNQ2lsJG6DG4XDuEQ08wN0T3lOv%2BXYyyFUA6O5uWEdCpByXVny%2FSvBUO3Cnz0RTT0XC5d5pjoKku587Tia0t%2BfHfHnhnxxWWRCGp%2BLDrIS5vRFOYNkcK6JOcTVQ5g9OD3U3DVEWVsyhVk2CDco%2F%2BAklfKHnr3IQxfOVm%2Bgfbsa4NvoAWhSkuAeX8EmlH3139f2UAtcXzUB3S%2Fdf%2F%2B5IO29UQeQH0Rt263gP0KbkILLJ6057XMqSImHrVUjzlH7PUdiJgRrxkI%2FyKrHfa5Y1Ya3lQExwDqoy07zDmhJu%2BBjqkAZPBK7Eboh077%2Bat%2Bw4RLJHx0%2FuZ98Duzo5J%2BPRZAqdRdLk7coelIXlYpI33J6PGOyxTXfYzZO4Vzq9uiE%2B6MIqleiwQp%2FY4%2FbmQd%2BUqkC8MgA6qFdONHO2rbU9TAJuHi7RVxK6ZLILKEU0Azg9jImMbzIht3x87%2FCvtYPgSf%2FG6lkyIP1FrqiWWsOOs%2FyCwl4lb6XqG8gcRdEJzfu0VZ58j%2FeWn&X-Amz-Signature=58accdd11fb98ba37b5dcdbad0e99aeb46d3c67edc44e2299d919b156a125d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
