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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDJNRH6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2AMMz4FdyCJyA1kJ3mdtu4madrtqS8nMEMWHKp1qYvwIgWLphI5wePwlLa8dBMvCYP8BntCLiZjWFSJfXlxWlgjoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDO%2BmwIrOvDiyIV31ircA2LxSz7BMhbdQu1W2wmeNwzyK6h1or0CT3x7CJZ7JWLzPYvjvd1Tr7%2FIE3BWNtgijQV8HrlBVJYVweVVlAJkTmgyticXtQu2pwxQTWYJDwwfcNJUCno1KTus0rjWmlU%2BvX2WbNBBfVdLNlTWscon35zH0ST3u2YG6NbqlTg9GJvSC%2F0SbB1GrNOGHiVNGLhlC%2FyqF%2BDsnYD1Mr4MmrV9vXfp10if%2BuHH%2BxCVDp0mxKi8OisnvefDhgvGtdi2m4OY1k1iENRlnS2%2FNUJ%2Fl1oH5qGfP18tlt%2BLkzMK8web2UirfDi3EyPgBdavgl4wDouvO07xM6MFocXpunnEZTnxu6pqSu1y3QRMzn9XO3VFkR3196vN%2F0lMP6xXv51Mho%2ByBZ6esZqSR4bXPPKmTdRodf24rd29Jo%2FFWgig%2FV7ZhnAqikfuoMalxuu5JnhgqM5mCrTXVWErBDMNCsDWDtcxtH3t7LpN98rR5ByMKPXC%2FphZhXIyctqXA8ubmn6d2XPp0mpJxEPT3glTMiHAwbep5fDh3wnmeS4U3cfN%2BippJUlwswHROHt0QX8g3fzJZyztHSdDELCI%2Fsjz%2FUm6PxJNdWd7ksov2PARLUma6jNnD0geLp4PFB48ibR7JlOPML781sEGOqUB7HERAQiU4R%2FmREV3cWrZj7SzppoXVLJ8zuOQALqcmBzcQCF0MI1HfKhTxkLX7Fyx%2BbuOf8qDWrwMpJrxdonpide25Kj90Ot5rWGElWpkgNCy9rHSG1ue7gQRRuXL9xFB5Fe8XXdeCRfGjCp1oEctGmJoGiusetYztdqucYjVJSbChNepEJvjoZ0OtesJSAIuencp%2FgxyiqJB0g6sl5eLGvhQGx5s&X-Amz-Signature=53a159955d8e5946f0a7a8f93adbf010d8c055e3490bceefc74537bf8d3fa97b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
