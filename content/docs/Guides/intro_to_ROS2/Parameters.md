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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWT372VM%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmgAqaLcilO5jF517bn%2FMkDTqLLg2HolJFJP5%2FuZnI3AiBJrSYblkEHH%2B7Kyzi4KkU2cc6%2BBHiCuCVfYlG%2FYDwbzCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMpdKON68tvmOGX4zgKtwDVzTlzYTyXv8WepfzE2bPkXPuUn%2Fb3YKFibCuOX0m%2BkooFAVxZrUWRBuIlqimQx4upGdwfxpWUqK6ICWY19FhwcFXO3Q8WhePM7dus2nn1%2FfRKNvLb3WP8ZyFftnnXkez7YX%2FLopMSt2q6g8DV4ae%2Fcox%2FKTVe08BgdUZXvfLQrh0U4tyktA4rpzL2SanlGRsts8Hrt8uOVFIngdVH1aPqko87S9uE7gQa91wqgULcVTowg%2BPJUqBOgf9q0stEVW%2FMmASS4oqUkufp%2BywT61lMCHS0V522HoPhraLj5cSQj7u6R%2FwRPX0jJelx2M8%2BSXoY0lDFbKo8UGRkBZIyikFRM2ZuRweHyUYlFYbB09Yrzx3hSzQ4DMsnAXTG1k3QqQqIkoCkp5whOZ40y6ArCNcHC38TWVNDTUN5iEU6jr4WOJF6d%2FYf9eBaDZ42r%2F69hiZJcE07RCW9xfCmXO5zMbQm0jIJIyBJ3OiLbx1noBHcukGybFqXpeXlc1HpSl5UxPT4fm%2BZCO%2FiugH59nNv8SC8wszHJ7plaoklXcbPcSqFj%2BevNLCgwu9%2FmbI9fJw%2BpdSFut1m%2F0Q82l9K0QMzNj2%2BHsfn8y87sXSRv8tuLTJgt%2FyUBz%2F9L2kwpsRMsow3cHDwgY6pgEBCPIapo3G%2FnHR0i%2B%2F9WbuLl3dT9satiTyUdPfVxmpvdgYee4NJ8iwWzg%2Bnpvm6Z3Kx3fPh27I6Va292IatbBRVwTGah8LnxUE2s%2B%2FBfhAs%2FBvwsVeQo8e%2B6RvDdI1XMZK2rO%2BXzkeU6DJj2KSrDfwBilSVHQjGpWap5sqrjDwHCfZZhnwhyPNCpdcyFC168NDEpmN0YckAUVEi%2BRscyxJDQxAuLnE&X-Amz-Signature=b45bce3f9809ffb342eed93c6cc1c67b9267a32a34d4a5f35db718d149969f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
