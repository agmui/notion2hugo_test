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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBMO5TY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCG1Q3KPrYOcUtyyu3TroRRZJmx9v5dxvSTkXJBjYb0jQIhAPgXaDqYiABe%2BzebvZVyvw2EJKhp6JpS%2BUvjxumwEoqAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAEr02WCv1EP0IEPsq3AMyvSI7M%2BtI9zdAEjXaRoXH%2BJtOAWZZOFdypmSUK5%2B%2BfqC2v1oWvdtnj7sw1XM6zZJqn37DuuQMJS4eigMTW8e9VJXYqEG1DP9HvR0RQjl3fd4SjQema9x55upV5pmk%2F5gydmPabwL65bG8bBFbEUMIKZaLU19Q6zgpCFulkp%2FSR6ncX1tehQSf3pcQ1pY2aRNVVDg4wcwBQPnc49NpO749NSirTx1npsH8HCBp0Htzq0kYoATUV5xxjImp5matIEdu9OSw3RJ%2BNDKNdul%2FIBH0g%2FnNcJUAmV2z9jUv%2BkwxSjWnZ7ndCnx%2BzkiWCVHiQVIORBnPAwoprnChOL%2FwFBNasWkUk6W%2BeTmUWR1%2Fr7vMsWprQNzULx2m54XvzicPKd%2BWrCNdzfidbNtebtH8BlODB67ox6WC1aN2kIBS3Gp3mxnui0uO%2Bzb35Q0THI48TpRAxvmxUf411DFeJlZEyr0WU6grmr5fQnX%2BaBtMENxaHIjHvG%2FO48b5BrVmsep7YZUfH6itZSiHB2huG0dvYa1fLA6um0ie8TGkXkKlouWQSPunEbxCcAYUU98wCrJgIXyNFNb83bWrBEg0fYu3LB5Wr7V1vKpZyBwgHTPXEs7h%2Bsx3UVGsJpBQjw4iBzCVsPC%2FBjqkAXFVfD%2F922%2BufchnDhQXNvX3Shqt2p6bhDTmrSxu4jjWDSf%2BoM2hkl4SXbciarkxhQT3BoB5lHaB2ywpOTDTQPM1E4Xe2S4OgLbIKvtjYPChN4Z21UwpbDafiECvzAsB75ilSsDDb8619TcokJUEOX%2BmraMKG%2BSdcrjpbNX%2BGaXobNAmxU9m08sq8Ez8Pa8Ef9Gs1vZU7WS5vII8V2b9VMzzcLYc&X-Amz-Signature=8ea72a4c681eb79d4c16d08fdff9b2f5ede8856122f313e0c80d0dc513299378&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
