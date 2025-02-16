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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHRVHIC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIDMAGkn2BNx%2FVgSFYDC4H6EzeY5Ij80xJoa7uwBtvr6%2BAiBKvfN7DYf63ukTtpOvAVthCPlmeTa%2BUjw%2FazR7X6ejbir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMta9XLPAchZyGoPx8KtwDOSpy%2BriLGG%2B90sZx0rLgs63ktTXZR4TbeCPw%2BLfBn92a%2BTwyxMepa3xEVDglwEva74p%2BCQFaPtgp7H613T5N%2FlowCNRqfFc6irTZ8mqwklHF05OO0B2m%2Bld6nzS6QIQo8V7Zu%2B3S1qd0INx77Kq2oBL77tyYJ%2FCFfDLkHf8S2KhZIGuCREXMxTG0xvspCO8aJyFklDpOnz6VwjjI7tEAYyNw05ojus6ZvmEo%2F4lnexqLmnHHRXPr2wkAB7qLQcohPqWctv496E8FTgfHdrZYkH%2BA4jrG6szM1f%2Bg0rZYRSERd8VPE9g8a1x6Al68RZoc8fuH9Pt1%2FlmSv5DSI91%2BTMOJvfivUtd95okzd1y4xZqMN6ErxWigmLmvLWnEvFI1yJg8jo%2BJZ40eaxp4Y76ncBpq6qF7Onliody5yjENMNKpqZqyUXqCTlTE2DVSnzKJrzovmih0ZWjxlviUjbNZ%2FnF8ge1xIBl%2BpcxmNNpBvpBrbIFviEi6cDg2LyqIfDhJVgIUxsWyTtYKvHWInegqtEajqo2%2BSCv4xAodi8VEXVdMAo70Kx4wI8s4b0t9ECoAUFRZsJS6uPxyVztxd152qinyvHBgE41NfK8STRdMtHjwKYRxGe86h2LZroEwkKXJvQY6pgENWz4uuNbYOmgmTomeZ2mRPPBLESnL%2Fa%2B4jxblx0wIAArCwB1tSv2SuOoXwqGG8R%2FESQLo9ZqEZD3q4Sm49UH1r8sZnbs8xXkIO0x5G6CgkGxYkOKtvheFT5lMGddSHvhFlEtA9x3XqUEcJYDc4IgUE9MK63XOCfr3KY5Lt7dy5ejIvNvUzSOgID%2FdoJQCS8w3pF%2BfRAAfh54MFN1XtkvYcL1gmfWq&X-Amz-Signature=088be5119c8f7e549311556fc1547fbf1a25c36f217e7491845f0cd43da2e60e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
