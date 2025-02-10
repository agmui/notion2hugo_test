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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQNODWP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALVG3ZK6EHJItzCYDrWtey3pnXlqXynSQVIkywaVer6AiEA4qTKGxWiotV8Fl9WicJA5q%2FM9G3z9w1q192KefZR8LIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqWZ1fjvyLCAByKLCrcA6uwTA8SA1MyxP6t7Gi2V3dZqNOq1vsNRDmUJmwjWA1vFMFnfyEKwOaDebpQEaGk7JV%2Byzc4amX8oCIuHZmeMGd9HzFHRxIwSR2VojRY79DctVBOjvuBvOCJ5Av9ixZaYz9n851hHVhK2lM8sh%2FW5tWlWzuDDGr7OJzYhZFZ8td0Q3BEJmgDpML8wZfhSm514DQfueazq6sZqUFu3bj5c0QANzd5NqlArvBmpm%2BHne9XNYtnZMMmCb4DLwKewkYsyBHZG%2BrMPpNgmbmj9KomH46R0CP7NC%2B3%2Fw8HQduP2JE4G5HP4F6SdpngpL6gjA4xCVnEc9iOatvuDSpXpaFuQGQBVQshBVxS%2FaMhEWVxTIlTS70zZSkff1oXdmRgg1rzcjryR8LvBg6SPQp6dqS5z9NIAZD4zKFsyxKWrFgjD00opc0ZMUWWF%2BLU9eQ%2B3Vx6ch4LltbBfYa%2BFVzCEhX%2B6D5pYO0vcMC4AAaNtSRu9VcEweh1BLqLlIFaxj3meIhSQAP5yumZfMQo7HNKrpHfYx186e2WskMWaE8%2BFc6ASApAzbMv27FXko6NIxdUuOzoI8%2BJfNt5TVBmBctZZFze9FE%2FN7inh6OeswCO4U4bK2VGWDOif%2BNiJEh9gqF4MMW9qL0GOqUB9pIt8J8eszbwSeQK1cgmU9bQY333PzLyYNduB%2Bskl0TIgiiYJ9mq1XInBIV%2F0q0VfK6Ip%2B9ZSOlxk3xS%2BTfD6vFEYbwA9S2%2FeLfX%2Br4HkymtPL%2BLeuDelfJgWjPxcMTBm0xgSaN9DXL%2BOBl00XDJWOqYiJNLcEhHkh8oX3VMrGQKEDOxf%2BgMtODR0VdQ7B82mTcmk%2FIsPkq1a3L8eWxD8r8zNOqv&X-Amz-Signature=7417359ff05b7799496d1367f7b4c7f6b77cddd6ed9640b5bdfde325a531be48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
