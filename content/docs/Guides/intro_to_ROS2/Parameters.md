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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLE7KJS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt2amwEszuTihkuBi8eLMMgRr90ZzR9adihoMAfPgsWQIgVkvh8Mmtcg0sm8s%2F8c8wWFns%2F3F9oSdfhuIyPU5mXAgqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPkZdhPt2yd%2BHJX3ircA3xv0SsKOwJZPuvPYdf3Ga7PhfL5caxodx1S3%2BoTN5FWCHsXK8GRZpaYGyZOBaWsfxJ4XCklPr6QUrxKsL4SvCnce%2F6xepEwnY3MN3simbhLlaLRIhCLbPnG%2BhKlA7cCisEO%2FrzSALqH8kpgQQAog2Rb4WhSnK%2BnlXgBP78reovwstDNCfX%2F9Gum0DSesW5lJbU%2BHMnzhe%2F1RkRk8oaMe%2BC1VRUWR4T4%2BCG4Op0q%2FR1lWmVgPPQRG9%2FDA5594mTu57gb6KWMmOL%2BDGg3%2FMpI4GoihiA9WoTE3toxL8ymp95ldqgQnhynIDqqS3osI1jFBt5kaRNEkJb9uP7RQnhy5dxL0ojwCtcDNmNh2nQeSNDuGrW4trWTd1MIrxbSuyBGi6xCoP4t205QEOG4LpdRwpZLONizgh9pCTRJ%2BNi%2BkB0iKWY1jL3pse2AZgT76dZ%2Bnr0Fe%2FtwdLjOuQ0CDAA4Frb49WtkW7zPa9Tm9jKbYaYowYqA0cRQM0n3ZzHa%2Ffs20RVT3C2FzJvv%2BCBwcRMlb7H8ObRMqzZeBQbcIasWrbHVuQT8n1dJ5QNlNN8VMyXphbByA4spc6RSErpeaOaHkpy2StdgDriwhdcW%2BqVBj%2B9r9mzKQzV77CvOJmvnMPuL5b0GOqUBPYnSF6GEgmyyhnkFGJM6%2B5H1Ak5dL8F4WskoJZknzDzlPuYktymQvtNhFJDpuVHyiVZ89b5UQevDyn8fBA3vTAIm1Lmz%2FSJbeVbkplJoZQqxgWoCuLBZvGVU3af%2B2hNVOgalJ8byyqn2BWPJbZ6wOfEYV%2BeiAAWtKv9mXAtTs4Ily77wCSLzhorl%2FsyApBFdBFlhrPMmg4SeO%2F8kdyY3HtopTMAT&X-Amz-Signature=a8732b219251b533b885a5049b6dda1be5a47ba2b43d49a52e7a655ce9a40aee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
