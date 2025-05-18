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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655HBLMBF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDju%2BdXnCuqXf1zt7Y5FW343dyxajaLzngZGTrgaTSmjQIgUEmWmK4W%2Fdj406NU%2F5ppycTq1AqlipH8bL1QRPB6GSEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCBI7A29nWAB9aU3OCrcA47PbP5Q9Iho93%2FGxR3l%2BodwuwW2zPzy%2Fp3RrHHyE7ok9O8L93ihXot98pWEkTtxKAYSMZDiOu%2F2Cv%2BQEBJ1sJmnf1ZKuj0beCK2l3dzJgghAhpr6H7q6VnQ897k1oHlARhdkAPfRKRPqnXXS9A7Olw5PEbBP1yqrbOwqOhvlpjinJvIfRvGuvBs%2F9X%2BhMkBpmfUj14Ri6AY8zuo1NLFnaAE6jBENJWzevcWdVyuxKePMsZeydNf3qauAQ%2BhZjU6Ty9hXfCsqG7tTXdT20y0nX5EZNdLrNTMMiGx5wp3BT9ZusR7l8fMu8ZGor2fYNiBxF0R6LpsMzz1q%2B9XrFEUXOReUlfjZPL7ddY0seOZCcyEQjwCQNx0Qm0GKLwukExXQdxmXDQ%2BphK3H%2FZv2xeVF4lL%2Bc45h%2BNlnZAv79fmmGA6Sut%2BrlgYOBns7ua1QoopwmmbXu2sKcqByngDLAEwq3nU0QgJYm%2BEsqOqBKBPFFovyfBskF07b8aeKWGCTT4JZ6SGIBBAslh9csH35PqjMZzhV8cM6UW7Ms8c9wsoC%2Bh5OCgv79TkCyXSDNlrrBySYaoY8dSw8pfhSXQP13chM9%2BwKh6c6lnXbz43i9HSqziMtbtndAbjAkWI5uuIMI6npsEGOqUBL3%2FheKS7OLUZVSDRZF2dRiigX2VitGbInzmGvBchkWIguS7ZzPwoKqryYqtqpub1WM9uERtkYaU0Z0x1jYS1j%2FQzcFf3YM6vWdGTuKrHWv3QU5ZQaV2myMm7g%2Ba9ULs8WXwiKF%2FIo4hKHot60jF%2FPSl2cxkUSRlUZksiyhtyQ1i0wk49%2BqTV5RfYs4nBt9Yu%2Fe2uzKlaJAXQh5%2FppDXhDd2%2B83U4&X-Amz-Signature=d540b622ee9bfb9b039707c7a2be5b88b75fcc63dc44e4a0bcf486fae6be81f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
