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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCN6XLU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkoLswBWUHy0Uw9zv4eEtgO1CN5fmFd6N6xPMRTnaVEAiEA5jGQFcpNHlYkIweEqrBgPHcPKkq0n%2BEuLoWDCYY%2BkdUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBGnVriWKaU5wkFgircA67eCi4p0eAL7%2BrbZngEKEsxjDG0pkh5nxeUjpfJbT1i3KOKbNXcaZMFnaTeeU%2Fza1LzntO3J%2Fa3djevpjNNNsUhhhy7pJlq4%2BEj9veC%2FKwCDcKi3cNq2dpic0MtfeBjhnlli9HMUiLjaFNqzvIK9KnpKnKlkuEg1rEi0oxsBpZ5Y2QGC%2BE0g1AdgdVk3WIZQtKxVGpeg0Gpqw3ERHyLJ0E3g4JmZsqu7Dpa%2BOQZcDsUhFWOT87t30A4RE9Q%2B7o1EKK0l%2F1tlQkaWn9pxeJ2o%2Frd5%2F1dHUXyhSU6lDVN%2FwdGlrf%2BwOWAd%2FsdupllT1q4mTTykRdbsZwCExcX2j2gS8PlhlAojVEOdprROUHJF8JUbseCdqJV9OEAgYmsLwJi1T7TpvFKJY%2FrcTpngHbZ%2BNfA8s1eLMbUng09zqZ8y0EfYaNfWcBz1qdZqgVvuuMmptY45nQ8zm8MC7%2Bz0Mpl2C2%2B4HKLuEWj2hSOt%2FKJPH0MAcrSaPGHUfFjk%2FBZCVtYeNkZjEw5dUcewTT3ozkoqS94s%2BBoKCZtB1sLohYZ6DE6FmaMARc%2F%2FgpeCmpaOQTmD1ZvUthLnO4E98m3XluHlQA86nNhuva%2Bq6kkbWs5PDK2KD51D3SuipBNWOBvMJf9yMMGOqUBYD19B1vIEylDiJo9xlNomAJIGeKTge7G1qje%2FduoFuOoeMU8X8kobAWnlbKobBz6WobwKseQ5gdkxhZTHvDau8lJcZOI8SMDGxuBo8u5IpJM1if16dRzpLJURllSjhBCBGLiV3cs1bzObfVFC8MnDWu5YZcKP%2BZMvVG92qWw4MAC%2FMqMwRZnwQ5H5g7tpffQMvAABA3fPbKHzgj8z7ydlioQKKqL&X-Amz-Signature=034cc3357d436fbfa675b00634dd650bb5645ece1c92e71147826610f6e8733f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
