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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAYKAIUT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYCccPhKFMwMndi6SRS8lHyNTBRnGYgHMu87mCEFiBKQIgMQ%2FtTLpNSur%2F%2FetfATuY8F3Q44zIBl42dhHKOFvz9z8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDETpLYXW3LULredWiircA4nYzSSVrenudhfLvIs0HDgdHvLq4tP3ZGr8soHfh7i7cMXfmY5inOC4%2BDkcltsVp8sPHc9n6t7CCxsoOEleqHqSOCBJ%2FlVl%2FW53WL1zhq6SSB43BSgnFPzsUk6PhyPuN96mc09QB%2F%2FCVgUjxMn9ZedJ11WrP0LtuQtjAVeVq1GeICmHskc45v3J4mwR23G3juM0fyX7XxwbMjVQVHeCPPiWNjo7YolmrspztuvNc81cTLCCt1MotRW%2FAMVjr8fadISR8hno9L23JnAtCzkOrI3M9uL878i13W4BozpFgZinoq6G9YgMn8tgO9LlMfodgFeX7tVq%2B5Ie6VxH%2B0w9r5ZC7fJBrQ1QpMM3Z5iuQVlTOheT3E1KuxBQhtAgzoV5IxmlPOeutYkfMSSy%2B30lfEdSV5a6y6PT%2BDfouTgCrxQvLFn9832QSn6FTre9rtlRsAHYwaLSvdZWJ6biuW8jOPKTeD08ZoqEjzSE2gNI1eJR1An3PGsQsAl6LHp%2FECDk%2Bk639ZWQlG7VQOaZj8hUtXT%2BFAvQvdFBloL4uW8F%2BVh6NIKqpApPGoZMjPA4TecTsJXJuSCVof5eKeB%2BJ1QPxJ2ojUnRYcXGeU55lv6kzlSKeE6q7IvMY4k7Xih%2BMI%2Bn2b4GOqUBpipKBgBXc4AmoCDvXIAtcWC0Kg%2FndGrVKAU1wTa3s%2Bonu6KnyZCnCQneOJQsiol0KGlnJxgvBzhpb0fR4MUh5MexjXN1ADJ6aT4Z0XB6b55zJt2npt5XrA83oeRol522vONMvyB8IwJicJJ9CeW8RGAWFJGV6anucrwdD3mXPSKZXFmb7di0%2BN8L9WfkP5SvnvfjjINlg2MFhdk3YJV8%2FXmqIEpg&X-Amz-Signature=22e1e58ea0ad14fe975cb59680aa7423bd7826f921ad7e00a9b0ce484f948a20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
