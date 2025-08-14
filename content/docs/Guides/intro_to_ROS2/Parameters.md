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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCBQUEV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZG0GCAtjMuSR44qObZP0JCea4FQCtOrljcGyIWdzMAAiEA5FoZ%2F5et8lszs8E%2FqUBy27XzW%2F2kJIYYeI%2FR3pV39%2BIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIqCQOrmH33jRQ3tGircA8vSaKwqfV5exfSAfxrNAF%2BYgSZk0EpH%2BZ8iH%2BxDdd%2FYl9oPkCKTwZ%2BWlSgZw8kaOjMbM%2BWydx%2FayAD7sGf%2F2h4MlIJKQBcDlifzMZAF%2Bh%2Bns0husNkeDnj5LINuJx1%2BsUTaZhm3I5v5DnRDdjaBmnYfcRsUrc6VfC3RxtRceozzPRIGvjYppOFyzD468E4ZKUO1Nb9CoFeTv95hlFkHEFi6L746zs9VLOPm2ZNBkCttK%2FZ2bSU8NYSGafPFkQx%2Fy0GAol%2Bp%2FoVTWd5QWpPP3m8kY762t9qo0IgjDfohFQoWEBdymyx0iGALcHzlwhBzstgcWo0S0zrpAcbs8wRnKSS6%2FBU4x7QVInMeX4Sdft9LBsea%2Bfh2OfR3IGz0kcA%2B8Lm0DgJzFUsqAW%2FDKUDSeShsbmInagiKHUdXxXxz6PZFjrtFk%2Fs8xP7gM4K8fZENho5j1HtipTHDYXbOSgtSvYSxoTQ1VjjdijFrN3AAqy7roMiMsSgFApWtM3wL58F0rfekpxkcrSpKc7tDvSq2nbFsstyaBOWE6nXHqvyucPPk2JO%2ByCERBoQvcNZPi8kEVvC%2BDscK%2FZ8XE36j2%2FVUL0tKprvJD7s2ANW4lWHtSpli8pv0vIP5muYnfC3FMKGE98QGOqUBF5bofnasMa3a3%2FdQ5jatYpBP3vBqwlVBe%2BmtarVyZ%2B0PPwSquUJbgI8uOQBVrJTwjp6u%2BY%2FfZnSm4WUqUyFGVSmAWa0IVbKUW0pb56lNd1HxNFW6Q2720IQi71aElOGyik355EqyLnwCPR3Me8vRn4Q5M4abNMx4JSnnqnSvdlMsBaGpdjFAWu1xrpSJfAy7pe9cylswr81iXZ5AKeKDleiH9gQN&X-Amz-Signature=dc63f590cbe4bf4c228bf0c84e30fc7b522aba023ab8a58a7e54ab03cf0e155b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
