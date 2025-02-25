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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PDQDS3%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCs6sD36KGRtT80SqFd8WNGoFhtR1fvX6oojZ7kYKv6GgIgCwr6PYv%2B9gR5BeGg8H9ql%2BXwtWoVHJ2CD8hRqLeETVcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA%2FUm90mcMuJTZ18yyrcA2T7te%2B4UIBiapXVNurohOwkdEeDKE8zzRIRLX4arP2QKdljVSEK0XcDWcbjujR2JNml4yYSK8QhZZrqkPpHN0vXj2vhJ7w%2BGg7DKyxBrHXvzaC515IfSaXaA%2FZ2QlOPE8ni37fX6wYQdE7O9MWIrnptXlslXPtMqPo8AhCI3pXFOF9Kp3ep1lEgWx1LJkDQVGGNlQjHZXLuz0KO158ehWmCbpb7%2B5gygRyesLarGkujGdJvtuoGXM7VWl3nJZoyWaVy2co9EDyjO9QbzoK5fXC4h0uHx6fJpdUFsh4UISabJyBNHW2S5IFdjE%2BBkYY4ELkuyYhOrgZwIn6SaKRo5h58RUiNjEkWNqZZXIApvwhd5tR41Rc0RPK1YGjl1YRVwS438f%2FHMfLljQYxwMWwBDWEprkAXQ135NiPsuKBz0hywU%2FzM2LrB4KDKbDyaohe9CCPo%2F9MTbOHs%2Fpovtgk1rnDWibiaZ6m5Y84ARwHsn40DzXVoq6uAERiww%2FP4q7ZDGeRjULxInon0cbkCvj6E6mpwUH691TgsqqxGq40few%2F2zOkLwgdzNTw22nGcW%2FInlnX7m9dqsHZK317lpwQu1Caso282%2BHTm6EX%2BVeS0J%2B%2B1zFIgRdo8jYtTva9MIqN%2BL0GOqUBcXFijGnF1mrO2oDrD84CzrYuJR5yJaC84tHmotTcGBXLQyHFJ2%2BhdHPhnjpg%2Fq9H7f%2Fhn7rKrnRJfIf%2FFGm9MX5RuAgHYsDUzGlSsvoL%2FguvGvRv98cLg3VLVG%2BMSa%2BvFnbqYAZUNAIYfS%2Bihs5y7%2BabX9lWzzN%2FhHmXgImW2Ur8h1lrdEnIGZ%2FmNbdWCjBEhbQ7LIIHThCRDZlrmC8MKsNn%2BZSG&X-Amz-Signature=3e43c5ec390f3e5bbdc4c130250801990775c1c76f365ccf3532c043f4eae4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
