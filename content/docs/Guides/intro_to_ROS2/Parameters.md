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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQSG5PEZ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDyFlJOLurvg8XTo8kRFQU7fhyfKtgFI4apqN573oOOXAIhAO4yNsDTGYK%2BymYc%2F9diLw3eJ4YSNVuQKbYv4LTx58pdKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIPAVRK%2FqFvvwkMpIq3ANlTw7%2FW1%2Fom91rViDmJdwTOQhlJGm9eIRFVzOMyMNkYPzA0IDbsD2OB7Aektp0yWrPJAg5kAf80h1kVynsZApaL%2Bkhaay5e2hGOM8Gdxw8cS1%2F%2BCeRNbel1%2B%2FlOU2sSk%2BZb1adDSTd4He0kEUJmxzXqDymuhgwB5rAqzL%2B0YX665G8YStjcwtAYhjRwTORRX%2BPOti9HGub11%2FMk3sBK8b18hp4%2FSTMdQYyTqH7xlDYmmORQy%2F9orSHr4ZICA4M5KRc23eNOdPi6pp%2B9bf%2FINXW5OdHnvZd1HVB053NEMSzv0QQ%2BlGFC3%2BGWmRZqS1%2FluWF2mif6%2FoaoB4%2B3K8cTUz985SCYHKwAkMd2rSdD%2BOg3ay03ncUDUCifclwX4GhYXIZLGtSajM4IHkPsUTb1d1OwXr8ZGMxOMAb3uoB5I%2F3n9Sb0g37KROBQT3%2FM7JSMUFLoRrpQo0v5oMDQBye8gZBSOt3efteIGvNFrBsuXoLFVXpODfB2Y%2FpUjUIAXWlRWADCmSNz6ez4BpWvo0NQAgh7uwN1Y9xGyut2xty30wpxMEjsk2hwCHuUSdZPxS8iK9NAldFuQ4L81WJR3NimD5JqwXJcitgZxi%2F%2B%2BKKUUac2hgcdjkLhg%2BpnjYO1TDIgvLBBjqkAc7s%2FKuSVr4XOlQvVSEFcfw6JYE5b9IWWlGrQIIlOsQQ68KdC2RKSh8gM9LPZPsEsW3vVrfuHNA%2FjXikBtOnkdvfhE40HX%2B24K%2FjhThloRsMHotyRM9TRSxBUjOtgzdtjsDkJQsgiWG9LrGnY6bGB0Gchi%2FNYpnW6lDXq9pjp5PFs%2BpWFHh2ckzAgaC0lBcToa5ZtCHyRWnkIwSw%2FlF1oQOAeBYy&X-Amz-Signature=361101940a23eda7925f782a380594e4472420583ac47d2573dc8fe10ebcf944&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
