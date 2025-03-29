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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACZLNMO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIErLq%2FVj9ASVQPBGgZUUSmqfxZtybMj0OMuJeyayxb6fAiEAye43ZXE3DcOJ1KzW%2BX9e00lN%2FtC9ifqewOPgjvM5fWIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIDCKH5Kd7d6E4UIfircA2sXrRvJyMF%2BI%2FhWU3NqK4%2BSaMOGIQMCPLtHv4WgbYxMtzWoi%2FSlP8t5vE17s4heAJyEMslXHLv5A1UJfBZM1pYtQgNXBXEuCRN2v6Gy2tKNr%2BhnukMpdEkX9OBBeeaozeQ14l6hwXAi7yIEDfoUEaVox6lGcMsoqb3GL2sSdAsmlYapMCKYGt5JEoqU922PmpjI2wWoADjRDqEWwyMNAyaY%2B2Dc%2FOLX87Sx0bc5f90yw86SLnyACpDZmKOMzZzHFFRUBBY8AvHAyZCWk6o9ovM2mk3r%2FWofKAihyEheIrPg4BFSMw38Kyw2gfqV5S08vk%2Fkvd%2Fxg625%2Fl%2F07J%2FuJIg0h3LwqNLNAL9w1Qgr%2FF5Kk9f3xs%2BAbEtwyrq6crabE4XaueLrabrOrJmrcIt8v8qjH0k3KNOdakZdf3C4Atg%2FI%2BBG3xjiQU6OECa8plKmX8uTgHhfuqaVmtVGdXwN2qRZewg%2BQ0PBkNeniRNVtY%2FdQ%2Bx%2F5e0xgXwPHtzwsrBQFnds8h1u0xq%2FRSDvrcFvx4IGA6fyXQBPMn8wDlaKFVNujAkt1Ml%2FZabUCDeTAC5HotFch3wSE5HfiHD3V%2BvUhuVNIh4wol6zDVIwzd1bGJih2aFAiWTAu9EpaIQQMJrinr8GOqUBBuY3k%2FT5ZwAHaa%2B9OEeeWS031hf0FRxsUW0%2F%2B4pCC%2BHMboBGJjIzsVmGMyxYz8moqYW9Czi2s4e%2BSVc71KwLQSfyYAyCGNumHiw3ApHZ3An%2FdCrf%2BNGq7OzfIM337ogO5S2HRQs%2BJ8QPc46wskZNd%2BMTOr6MR9DIGQk9sjLUcDVv42XnVDlfcDP1IZabh7jZkW9nqOUGr2FnQJEtVGPmwKHyiTqC&X-Amz-Signature=18cb602d7930b21c80ff3617fafd7553d67dbc2572d9898f5edf49e2b6fe0e10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
