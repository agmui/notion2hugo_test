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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPBUBTB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCID7%2BhUg1pv0%2Fya3d4%2FuJr2kxR0%2Fl3%2FIszEIefIdo4l9TAiANaHROmg%2FA7dubWlCNLHW3VWzbttUF2%2FE6n6vVj2KqVSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM8jLz2%2BaMcswqcrqkKtwD5wE7q6WRDfiAN1Y1IQsLAzC8L8rYQyzcShGTPNH7EHjtefZjmSQLH2SUA6%2BE5Cox%2FHIqfB2BR%2BPTVEXklIcnXUo3vOdYbCp0p3LADFEqimg3WTTORJZxER7PUjVM9sDTmS7y27%2FRWRDAqssjplpVqtDn6eFq3iKwoRs0luVx%2FcU3QJnPqUi2s5LZCmEbd8qkhZWES6JvGUl0%2FvG9UE404tEaR48gpJC92nrtqMSx9yerlJXJyPoZ%2FRp9WO%2Fhm2cEUl77VGnXUAIbnUlBSohddvX3d8P8KWs9ERDA7rh%2F%2FGLRi7qjy5aEilMnvbYu8VNZiUHBM7dxFeasLznbxf7WNPNJhSiwjnQN3vT6%2FxUjaoyyJIrPnnEvNdOr6CkQucOyeD098NgWWtyiZ7JNhA6a3NmPXJAs3G2V8xPj1KZWXFOAee8jE4caJsqB8PGpPgRMHVSTBE636EfNH18olYGXLTIqBI92PfwvV%2FnjMnHQppjQiOj7REreuc3njPgZ%2FctyOJDHXCPEfYszX20jmUkGlxp89PPokChrb9XHG2Wjxk6SC6cdd6IU080BpOux3cs2iLEmT6pq8buARMIQ9JbF59WNuK6%2B4njV0AaQpSCUeD404ikUzRfODUgeeigwksvKvQY6pgHQte4OCo%2ByJQwtRo0Md5ylys4O7KACFC2OKscYBQm%2FwN%2BpnEuO63%2FioLQxgzM5S97S3GzlFzHqqIDqSxYNmUCnWfjhu9sf01XQ6bS4zCs%2BpTqJsn%2FftnuVjU0rLhM3fFGxsLzhAZyY7oAAyflb07G1qaaaG3rCqOfoPrzROoUI%2F%2Fl8R8yjcKlOLxL1p8IW0%2BM7OjXyck4srESnkPsvPPZRA8I1TblE&X-Amz-Signature=6964ba057091468dca436ac13e54c6711a978219cf43ddfd8aec103d5c96ad8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
