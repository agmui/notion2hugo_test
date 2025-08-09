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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RX3Q4LN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDGu6TWThnjSIJXFsA0v6weBAAMoM%2F%2B%2BZB%2Fa3hH0L4JOAiEA47zDnre7sD0RdI%2FLhZ9emAVfilgXScrGcM4iREbIq0wqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZ2hbRIgR%2B0o074HSrcA3vNVxNRjPNgeBt1LDQxTM3ijgAtme9enTdUk1t8%2BlhL%2FETyFoDZuU7gFhyyrq%2FmRy3XcpT%2BXv%2B997xWwIBL1LTZ%2FUpmr9A9oeXhzLDDfkcU0wxTxWMTv%2FuyMAswOjTqPfB7Oia4jOJYGrgh318jGILAxq3tkgRFo4grg6mjH2%2BWuTj3C4b2e4pQ22cZxPjz8%2BFDTISXXBAbJn6sFRabwYda1qixhH73Owpwux6%2B7aRMfcS%2FmWyDoOrd0%2B63H2Aart5R1M2k%2F2Yc6LT%2FZrnVdSvHDWfL1v1YSODym1xOy4wGdm9LUj5gA5rjhIcRwz5THCwXfss0TQW%2FPD2VCGDwu7OqiipijQUsWSAL0ZPpTmZ5%2FTmhtVciCGt%2FbyX2U6PhqYDrgZGinvbr5WSBvYs8Qq2pDWLy%2BbNSQEdk7%2F%2BrW49Jqgwwe9cK7eK0R0HmaGNrnMqPH3z3SXOQ2eC7sNQiJN%2Bc1ddZg%2BUiJ158aqFMF1G1iDaZQDAisnyWZxs%2BdvCyN91%2FIldwwxOb5Nr6p56fY3yusORG6IlJJ4g6MNtxaW7MUWG9wYLI9v0pblXWMk52vokoOpPenexGQzIX84elXPnmztTWIfjpKuuc4EhAVR3gz9b5iEQyFkMpXwi5MPaq2sQGOqUBZBSd4MG9IVYLGv4600wJIdPXM6F5R4pXyUmXnkg%2BWy7eJ1aYSmcof68zw5tUtw6cWk8v0F3zwcBnPEv%2BZPwX%2BWfxRV7OL0C9hQEQCPwS9ou7X8ZKIBx34lgZ6Ptjj5cgl4qNdp9FBpXp0RHqxsB5bPRrh5ctapEBwfzWJHA85ByflpcGtc8co5qG4c3KiVX384uI0tZBZi7ImFpUNoSieMeLDE16&X-Amz-Signature=c0610853a9201a19cb1790b8309b42533dfc3b28026d783b53331f77b638d061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
