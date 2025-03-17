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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMS62RCA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJmgbI10y6vJzn8iRHCruW83B9tQGBC0xH9vshIa7n1gIgD3yHOqGJ7ZhYr0D%2B%2BzNPzwCzjvNPrboTxfp31bOQFo8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBKAp4QNOSb3o5yUzSrcA%2F5aXX9XfTM8%2B%2BcVTbSKhV5l%2BxU3CLHMOGp4N2DFNuty6zS7z0s81nPvMW6YgfvaDBVAJksNn07NyLu%2B5LvrTOmvBMi6QHioUZHpLoNTIo9EnR10gbPAzDfZXDv9iFrJqwfZuXFR5igCTMaXxiUMcbA47u%2BQJ%2BR4cdL%2B9pfscLXDM84hXtni5fnhMYr0V9CyZHElQ8cu6kekPOAAU3O%2Bbk0b1bbseSjqXEzGSNbrhUH1KwLzNUYwIH%2FO8ncKAl8nm2ACrEtB5gYHapiXdTqiWl5MRlZ7zDgGwP2Bj1%2Fhvlqe8y0Gh70AijBLibkPYeTDEzwp8T9yssWKmpjblOjzlQft7u7ZOw9emj6%2BmZzk2aoqc9Thw%2BgUOhqGpZZsIij%2Ff78LR23Rybz3aqCbOyFvT9Tw7O0p2lUVh0RWmWs1%2FvBREzztgk%2BhGXvBS%2BnY%2FyRW7jYh4QEhGWdRNPQIXJjHLB9AABC2V4fbqSUMXP1oSce6PMxKZR%2FMSPOqqumsaMsPfWhU9uSCqcoy1kf1MgRX0JTGuzVu9yPF5BAq45w0ZzBK2PzQASpHfO81s4qAeVApU5MlCBfhW7qxSLYZgtbThIyDnIC4cBwzTfgaz3tmkUS1q2W0qZxnLA058EbDMLSb3r4GOqUBJatptllym57XBlbcHEnZ%2Fc8MdsNig%2F9sE9%2Bk0jMECjKtNujIzZrG9IK34aRnL2CZcRLqwWXo8Vy2K2ILFIbNZgfs61byIHob2BosPiXG56NSUAUwixInrxgNrcTFgOvUiCMraHabMoXuJT0tnDJk9HmdgDh09XZcEJ4fiTiuINNEFEuHSMfMMBjLd%2FTV3%2BUTW4v5s8vw8qj6F8BRS%2BTWgIhoVGJf&X-Amz-Signature=f2f5d5c8e4d6060ef20446880ad7869d243c5577a93dee4a039d895f2099dec5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
