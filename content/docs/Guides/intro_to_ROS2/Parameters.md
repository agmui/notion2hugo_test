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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GRL2AK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIA3va%2BsHi6xmoNEHENQ5Teds9njLPxgX%2FiHNHlg%2FlilpAiEAjTlX5DjYHQn%2Fr0BJ%2Biw%2Fvt%2BNWKPnaSSFxq4FnN4Y74cq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDG8uZAO9WAfLY9FXVCrcA2qtib%2BDag17k2vGqGTjiNe4XvyIfk0M0QbN0voV8kc9MV8q209d7AvjVJDN5isIPJSHW0v6k6SradyKg4Km%2F%2FoJfVfKSKjnEOiRygMRAfzed540ZBCj3yIdXT%2FBt8Xn7mCFE7f6ssrwyZDT%2BSKWHsAhAaxh2M0cnl5RUHxn6n3VEfuJ%2BkuxcshtaJ6p%2BOtU0GT6BFRfbqlLOOtPriUC6anvwpMRIURkFnL%2FvACrnshOOoC2J9ifD3D8bwdocxVe0mRE%2F3O15YeXnQ0uaGr6rwwWbM4kdIb97cFBBoaUxG088NaRSIazErdYbq0oN33GiIVRjcEPV2DfxfDUEKF7hPwwjXHaAwCR5pfLau%2FKy5YbGjUU3NoFHNJUhASR3SjqS3YTeVpYYZKKy1%2BRTlO89ocoZCD0CvEzXs0YzwgoW7%2B9XDD0dVRhgBOIXsCi%2B24QqyN2kNESwROPdYJ%2BlGTp0PiSL1ofSxTB2jNiMJfADWLwlxeLIH77XbZ7%2B93QgqQoodnjGmFXmIVS8drKt%2F%2B8mhug420dZnygpASk9Ffb65bF16NHHhEH3AAhMxeEcjN5LFwNcTxmuAsVmr2UIJS10CJomwZdvcJAHuk8ye1PGLvUUPyO79LOglQgplqcMJvVgsIGOqUBF7k0Tib0Y6EmJejOwmuTXTunTGOFNBZplCZ2liNivVusJhswA7LYzN5A0ABbfmBa2RV2HiA0drLisMHDrtfILlk6j9Q%2BOqTb%2Fp%2Bg2HIOHf9Ay3ebi9LHQmWkZckKD%2BVBFpCQO1wbVEIERslXTsNuNoZsUI2RmX%2F8qEqI9AyEjlAHAE146H6MVekK6yKaoZEyeYwbl1IyZ0w8dXs%2B6bvfy5xQF8K6&X-Amz-Signature=18a6bc3b3c51db4810cda2eb18f2b6e1d2064924726d2790ca4327e8bb09ce31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
