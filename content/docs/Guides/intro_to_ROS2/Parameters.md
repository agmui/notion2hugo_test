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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MX5XABS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwAujm%2FLKhZUWogdDoTEOTlJJyb3%2FRDD89KGpFbqm20AiEAhDVJSP56s8CI3z0kQhmS4agU0c6qy8h2XTT393l0e9oq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLmkkxaTWrROtI821ircAzJq7INFBKp22%2BuVP2Dl1iLcubo5Fjq7QOqJoEeRC%2FizWzBUFRptuf1O2QqRtt04K6BfUgXsE%2B8Co8jmMPvb3tE%2BUWy2oehTql9tQKZ9iWcRZPzJNyfldTDwotbXENqTN%2BBkv4OiQQAS3eit5E111lw4IS9Hvz7RHC3qKai8h81nGZCwIMj%2F8Njuuz2f9Bd%2BO7uqvXXHZ5Pp5iYOjuypBwKhiXYClJQY6hY%2F5ILIFD2KB5mvV1HMeE4PT5r3zc8P50ZAWHSJrkXFrZ0vAlr4jOxCr0A1SyWZIe2pHhfWiqicfpOUdsjsf28pmobBSPcYFEqtp3h8uBrrtQ7GIClYMt7QZ3CYpXKge%2BzqAs%2Ffp9i%2Fnw6WiuCTHghSE0rLDEM%2F29KhT1NShtHMD9%2Btd1eD0O3u0oH8cGDobTb%2FL4fh0BXTkRxKrDoQYGTPSBMi7fqJ1rB%2Bl5Dslqs7WcpFmnE5ZIEOVnEMekP7bTm%2Bz%2BXWuNNJL1SNfOcqJ8ur%2BNtCS6V9HdbY84Mt8d20DrchSrjg8EGPPAm0k1CuX8%2BjSzonVUuyEA%2FJNyXS9ORhF9GdgwaN2eg9IJyT3Srk6MjeekFcYvR3ceSgRsPusvi9Kb4EM2CKfvNySYCIdhZyjAbIMNuk2cEGOqUB21uZYD%2B9ZLAib2mfFJyp%2F63xnXcBFGjwJlo9rzMbvVq8Nei8FUvgs7igvrJmXKK89Hlpm4q081kzvKo83FeSwhiwG7v8ndD5mEs%2BVEHikcfFD114i%2B0lX6h0IC%2B%2FbVH%2Bmslbr1ly1rgObPSUwffXA3TRgXBNTmbNiUBDL8XWTZIvRG0tacz61pvC5Vwj2miZR7WkN41u23VB58ptFRIx83feW52S&X-Amz-Signature=98f7762f7d1928aa5d20d417b704ad4f9b3dbc87f5d151cd607849ae0bf7b1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
