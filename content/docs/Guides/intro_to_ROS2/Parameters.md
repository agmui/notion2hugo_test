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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KXQRXJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCZ5kDa67Z3lcP03oSyy%2BR0zfSueBa1ChEl6sHKVMLFCwIgKSCpn81zKpZYfLsawnd9MRinNRqnjm2Xk55yF6lmpvoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzFq4HnoRcIVF6sKyrcA%2BfV0qs3JYc%2FJXhQwnH7cx6wJZ1LHZFwkWfsr7lgGUdZ5rtLz7WsMpFVyAf00RggQNh5oaRjyQZw5iAzirFvwYW%2FjmEwGrq6NAK2ba3kShNagT%2BzrqLCUNDCXkYf%2FzSOukAluS2aOCFToi5N65Dq12Po1%2FU6X5GS1RlQettyAQA%2F4WSbYch2ensMqmsVji6mD8PGD4KNpCFo2rYpC68Fr0N8KLwAWBQ7akQmxrrEM2LYs02caeUUqexETI70qPkCvk42Ifqsz%2FbeLzf9A9OPTY0Vs5NM8oIrJEHbguCmNMwlQ9pMmjIkLctjjbcw%2B0bGPC4fb8Sp6dZTFeWgHZ%2FvzolFNIStNNilAf6%2FW3hRg4VxS3bN1RMLdY%2F0RUqanCDVOo61jfyKivz0FPFQlFeRBLsiwK52vbcaClrFOEPc%2F%2F%2FHjiRarcEcHn%2FfIoC%2FKBo0ksuGT5gIlOy21%2Ftpv49AaJ0ucV6uLVUgvnEoW170qRt6kzJPDo%2BeJsuPEsgOUt5OpZEdnOueSAKxhPSdUFgto%2FrLtMfgzlY96iSoKYCBwaNZIWn41fyPdGPO6MVOnHof5p1YJuiFr623aq4iXSwQUR2KYHweCwyIl6Nt%2BGSSCLB04RGYi7owPyt349EEMJrhyMAGOqUBxorYNQ3xR5AssWLCzT7Utlc6YAnwc78wKIWXf59NrQJTx1r2BfB1SJjPTxzdutfD8lXpOP0NGKasAz98jQXBgEo9NKYgMZ6unSTg95wh5iqNsbUoGnnQNJooOsjYWjGCXgHevYLZJU%2BYW8MizsDoWICiqG5BA23T4mgWIACXy%2BrsNTu3oee%2F1QWGQtvPsgId%2BWKJxZVfKHA3PEm%2B5Y7LLVKyEcW1&X-Amz-Signature=d785e9040889a921adcd26b8f34270f47b0aab2d047090b0a3e9824f8e396efa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
