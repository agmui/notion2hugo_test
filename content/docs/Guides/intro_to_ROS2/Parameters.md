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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWCSRALP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEgkCijio1CZw7YLCLKWdxHzmGtUZ0VBrlgOIkVVjj%2B2AiEAn70xBo6yk%2BvbHlhlzwf6VTU4MJPNRB18Da0NE9ZBt7sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBqpCYFTUMFbOPggNCrcA7coDM6%2BpL%2FTyJVfinfCwVL5WNcbqsX8jqvx%2B77znSmmIzUFu9uoytQdc0YOlx17RBpI5QPGNcfIlQT4uWmuK319FdDpHM4S48n7N4qFxj4tJMEhrSNRIqwzGcI%2FUZB%2BAqS04jlQH1ctEPYoyCrjoT2bVLLNKLbiZXrC6NbG2eErLDi2Jb%2Bi13X4ysyrLYJoulGFkizbzZbpBLG3V4L3HscEr8trOQSBd4LS6TKc9d8aEdUgfnWhHtNMYb6z4irFEBYRjWeYw8v1lQGF%2FViKWLqTRVp5W%2BZfO4BjC%2BtJaavEYrF1ddUFBeOJkdMWpZ40cYyKSCpgN62rvKyswK0YBtOQxu3LKfvW8LJSE3cidPnIPfZdhWi2zdloMfaw11lEZi99RxmGB9rE%2FT6ruHYsZt%2F3FeZC%2F2u2VQCtZ3UnPOqIZ8BdFpUIlI2Gpn2DoXbk0S%2BnkL2o4zayxAXUd14ia8uitoHjC%2B73IB8pstULG3myKHDF8dr9rpICCJHaPTHsEOiPhv1xrZHJR5bGMt%2FDeZiq5SD4oTnamlfgy80QumbCZDGwrCap4cibqNzr%2BI9aqqmdd7v2ckyGpMGzq6jbLu87vWdH5G5eM8MfhqW1TY6X7KDlFOf7tSGIKbKmMPyp18MGOqUBc57SmmLfrZcxFpYZoqistApOJoSsuYSboMxe9leLMwpBq3rK2UnKolY7rOAy99G%2FuATkC7hZ91IqK%2BIoGz8FEz%2ByJPkShOLdm5ApYJQP9MebdphvD8qHNYQVboZGContJ%2BIeuNhORZo6uZS%2BwqirGBNGREhQfBaqF0%2B6lxPmrQfxFNKjJ1YM0Fn5xrnpB8p63mSL8bQSnFBZWZIAzRRgTgNaEi4D&X-Amz-Signature=70c468e0bc30c1023769e299a936f72da9980b5b8561d9c5df12085061c4b407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
