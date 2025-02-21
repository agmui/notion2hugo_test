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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66IHM5C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4sFhNm6%2BMEGN0hzvrXG4CGsFLCW7QNFViNERR6ed4uAiEAzZ465dRqR3%2BqH96DM9LsvMnrp8BQ2hVCpeBXU6dxcSsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkm5D5iqKooXPuLWCrcAx%2Fs3P69xcfqpSLEwKzXtIdXj8zDZx3vFaeNwwPhRiSgjI42UeWLRffnPPZE7%2FO4C19N8XooKS%2FcT117d%2BHprEbnOdhJW%2FJgt8mp6h9dpHV5TrB0nx%2FI2Zq%2FCpIZEsqYibaajs2Q%2B%2FuJeBZCxTmZmUngEn78RCDJsXwVqH1Kv4VdSJZ%2F5GMu2w3DVdvV5zCZWbM2AQz1O1%2BFtvRxazubv%2BuCkBMsqqTDcyRk9zZqekXCddVjeSRTdLEwZyWrNFbTJOWqZVp5rz6XMSPqsYNyjM89GMfZ21yKY329XDqCkNMNkI0s1KfVxylkwfm%2BLdFFWnImhOJmMCka2%2BR4SXJVe%2BBT9gdjl%2FWaUjkkkW7Z8sW50Mqzo8A1yyh96YVScM5Z3bk7U2EWBTyq5kb4W%2BLxbcEyd8Y2qEXJn%2BuiceXO2CHXL76CUEI34ndQaju%2FA4%2FLYD9vofcmBJjdnz4fdSULoxWpNbDKwaoIRHsjm8NBe4bmNv5SFy7dSj%2FRopJpfzdQxWlE8VF1J1Q7P0tYoAq9LmCsMULgG8SDREfUJejsZ8Q%2F7urG%2Ff9aAkGNKQ0jG128FfMSQHnPazHSXjNlwZFdhchRPMjY2lOupe4mgNxc%2B43VxRImpbSKdjv8xsZdMNq7470GOqUBJwO%2Bn4EJpkDWlVz5Ow%2Fon1xcw7FXlKkHkrah%2B1gJZccsxxx8FIk7zL4YvW%2FcYafI%2Bnpxwn5E%2FsGk7otg%2B%2FKb1hjXebTC%2BtB46pi9bjn0dRM%2B3h7KV2waVIwzSFU2fRwdUuP4APvMaY0b%2Fy6eRnTn91scGUhLm9CNJq3m4NqYm9ABWzCxBHMe7hbVzllMcT5bslhZnMMGNAF6VTr9Iqy9vDXSZey5&X-Amz-Signature=5d5b4fb10fe39d710af21b7f77b5a14692ace09efe0e443ed02ba2aafbfafe11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
