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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGIUGUFO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCaEkMy7bb5GAG9gQuYs9YyjVsghShiLQklAdbVghALFAIhAKr2Jhf233MmgWIFXvr%2BdFt0805AByhKEYBo%2FlPAJ6EJKv8DCH0QABoMNjM3NDIzMTgzODA1IgyzsJTvPSUUbK%2FsTYoq3AO34LtMbrhq41zmmMK2D0mUrc9XwydSWbTdB3%2BLRWIu6nUAysW48RwpdRruPwvS6gN1LoGBTADf9AaaCGACV6VEMvH6SO6ENaInDrqbyhSZRIbMqfiaXqx2dEaNYnmjJMHDujxh5sCJPatkvLwv0lcuVV%2Fut7aOPvX0dMDFbfdAWJ6CDa2wGdo4hwwI3n0SEkVmLlrlrOt%2FCcy782%2BaZ6ad6daFB8tpgdlhd6GW4uJ3aaYRkd1hZqRJzxfmrqmB6rVAN0AwsQXIXHSQtncxrxnmygoBVCbMC1%2F7kmBPMn2PtEegPjqx6xMokSfLky3B3l2MMyakjttGbnIQrL5nbC9G069IeYqPKdhjZxiQCFKt%2B%2B9PgE14m%2Fp4M2v8DaRMEdso9qNNhnV7e7bvgNiWjeJns4iM0v124nj0Ri7lah5NtS6ChlrqfYh9h3N7LoTupr8JO0U4Z4cpsL%2F0I%2FOyn3U5nF70831a9%2F9eh03CL6CvGViJfc6BWekl4B3VL3YsTpb4pycl%2ByrGJKs%2BACVMVwsAsRkgNacuY5sPpkff3XDy9rY3XKrcKcySS5l7QTLfOS0e1Ra0QK7zu7G4MFY1bQRcqB6JLudjs%2Bz%2BfYdQjP2zm2qvFUQzlKOiHRPRKDCOps69BjqkAXRoKxa5%2Bvo6ksomdsaemDQms09bWC8v%2BnDtWTUl251cRySI4Kagm2R9K6EiSo9YCZI8a2yRze5Gjstut1HXsvi4emtyb2bWa2qbWQ%2FvBXOreNMzQr5e27%2BrlIBbTcxJyB8UTdfLU0nEEKvuLxsnCWdcpZg%2BlFadGfCl2ATSiTFlRusn3bqlQcBi8vnkwPd%2BV7oJCpC417xUKrdADITQr%2BdQHBe8&X-Amz-Signature=4719eb23e88a386bda397d7f1b6e362ad66dd20adc49308e6e97b7f5d71ca5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
