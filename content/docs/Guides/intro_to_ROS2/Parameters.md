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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6H6GFRX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDePom1y4iUl3W1Ma7%2FK%2F3AAMrdNxTEAWhhrEWjceJCtgIgQbuygap7iD0UuzBA20fWiFnEeOG4fqFUD6Q2zEiKr%2BEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCUJEFbnQEeNOIKPfircAzWyftxpKP%2Bv4NY3iJzQKO%2BbXX8zh33dCvg3ZDoi0LHNuEB4mfMvf%2FQ3q%2BhepnOoPvKOsE5Z2iEBpYWevtIjUCinDW3VZ64f5V6WErSPK7Obrkg8vvvTnRGFCHgbgi9czzbYOmq%2BeA6wGSqBuzhfQgr3fDN%2BMDvxCjckM6a%2BVwyTUz%2FFNpGq9K8wcoBMIxXMnGE6I6Osut9%2Bq%2BT9iwE498cJ%2B%2Freoo0h6BSndd4htJx%2Bv9VSODMhd4n2kTWkSP7hkiK5jcy4o%2FZ2suR284AyJf%2FbRDODIF5JTMhu2pv1kWi0WLwfeMG28oQllgVabqM3JL9QXi5kTP5EaypFlvxnhToig%2FpNcNJ8QMWPLmj2FupZIvQ9owDXMi6Q2WYGQJylnvB%2BqhSWTnU0cZHGiiHiRD2LnS90%2FqT8oogyqS7tFtV1fU17c1bc%2BTiIZoS2hv49Q6%2FgtSWvBfGiy3rELcrBrbiy4ddIpdHSUev7jHiHcVKk7t5Zh2bOjul9XyiquI6ihI5LynJ5y1cUlmnyAycjnF8na3qf7UzFbKRkI8f9P7pmi9RsWKVC%2FotOY%2FrHXPyicnomVprDrE9f2Egmz3o5x0Vh53iB0Crx07pmuy5mWXyju1kXCK4TS5T7NMplMOrF3MEGOqUBL3W77qn2eizfDqKkg2kpVsj2rug8ii%2FmB0DmRKRwX2KUIb%2BuYQZSP9oKLbkOJ%2B304Gl9jsK9Jx8cMMjs84CNWAHhvtchNdpsipzPJp5yEHL91nnNnHMrSI%2BWmqMrtoNi0o9tkPudpxkH6P3t2mHcRRrK%2FisIW7wfZLfkZptxV0u6CEfl2MR2CsT%2BcOc%2BAnmlPR9rLo26MjsspmcNullRrqmq5PVw&X-Amz-Signature=a8ccd3c7905bf23a417f3d68fed1bc27c9c91197c133d2bd8e8663c35dae6dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
