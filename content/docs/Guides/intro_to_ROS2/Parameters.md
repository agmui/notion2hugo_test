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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O74JFOW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCCRpm2YPKzZ9TPVX8wCBznNhg1VRNoetwAh6YWhRjexAIhAJB2uSxgE0MgcCUj2gWYkWxCjyhH1mIxnOJUjxfhB6WZKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9xArjZLd4zgnRaDIq3AMN0yeBKpNaSTBkUEeBaDdI7WDO5pnxghQM7Dew7aHnYOy2TBgelxmorgJpfddN57NAsoYRMN3E0DFxdQF7cITq9SuHddncIVIBcI16iYBdw6V1s9PH3hZj84wfTep%2Fjb3SHXGCAYzCX3e7CRzNOgKIJruUjbT7ZtCjxHIJ9MLc54FDz4G0M6wWh5AfBg16%2BKWkANjgO59%2F13aQRZVSriO%2FIRbXITv4%2F9pMNfw%2BnHFE5V5xEJGNTXEU%2Ft3FZi%2FmMfRlBh5q4KUd54zHUq%2FE5A%2FetKeFjKN9VA3smQ%2FHDWsONAoz1T0xRXzVp0L1QHD%2BgpivYSpkujOuD6n1EFN5Sp2cjUwNd3XyPtH2F3GdT3K%2FXYI2dbXt4%2FAOweNc%2BV%2BtdX3wqx%2FMUCuDxE%2BKWaiXWa1lK2Ep9PfRyM%2Bjp6kBlmCKLVdMvUtgnO%2BSV%2B5Ae50OWAcWKEB0AiIdxGU%2FVIEP4F8JY1NyTZfyLWVUuvodgZRdMnxUM%2FfHLyfXDDYsWCFFG%2BWz%2FSi5Jr8kdXuYN3cRFD1B9yZjUKEa3%2F9A2WcjTBMNMF5%2F7GH%2FSD6Tja36zkElGOMzBfNASSnvoC0faUoSOJ0U9z7%2B2Cp%2FydDfr6OmKiNRKxSz8iTOh0E4joINgjC6p9jEBjqkAUJNo5TaxZ79MY%2B5RfZyfXb6AfUkq9yNDEw5YCz5YiT1WMzylgOulV%2Be28q%2Fuf3NCSWqcUTm47Q0V1j%2Bt%2BV3Dkpd6Ace183V139DxVn%2By9fwMFWlVfcf%2BXoiwHQMNMLRLljkZ2zPuf87gXzqYkqA2gGEpJoH15xWfcn%2Bmcvks726laRXQEdnEVnpCHXNp%2B7A0tmiQm6Xcj8ZXlqIdDpkUcpGXrqv&X-Amz-Signature=aae7d8a44ca10698d6015cd8b00339d8b8ab5223c411ff9f096f543a7c438f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
