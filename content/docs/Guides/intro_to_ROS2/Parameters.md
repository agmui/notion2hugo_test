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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2RYV3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBKUsEBiE%2BGTxA5sFngMXa78QEFHF1bJEexQEwj67yjAiBbsURml7Wy8Qyp%2F8EgrTo3pRwnZM%2FnBkex%2FubNmEsaMCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGVeTBuv%2BHwrAXndqKtwDRlP%2BEUMtQM3yf1WAoHFdPhWh58wQ%2Ftue0hGG5hKnP80Te0bbC3BuLAn4m1%2F4OYui1ekhdH9Er4fe3kMNURi11%2FDotWEyGn3LE2JHhNDQBCEokKYkY1grCcnpW3iAQSIBjpFg8VdqoRBn9pK4C%2B6gkDhcCNSGPUy%2Bir6wufqQrT0aQRQF7GbeFCa5GusqlMk4lphQsdBW47UqzbyR2MgD3cTlpZysfhUPjXLtywU913rW1PRXSmhciW3NAubA6roRIYuFupnWklTpdI7NWAq7dQEesLj2%2Fop87aKQyfeVRT%2BcHGECVWBv4W239BWV8nIbFEPugbGoXtOk5%2BB0755R1eNcFnNZRn4630hATUa511%2B%2BKGHI2OXf%2FOde6ETj%2Bm6VOmJ%2FhoiZyz5OvgHIDbPmjh5OdGOjKo4kUmy%2Fw16Dj5HQOZXHEKXku9T%2BV4RYAt6X8vLRyqVn3L6rvUhkFC4FjT9yKkDm6vlRdj%2Bb%2Bl5qYXhmV3U%2F55yyqyOLSrtfysa9C6DZABADn00orRSeJvJ0QYn3oZ6ZL4IYWWMT8rlM5hTl6VqytxVgHDlgzmksPRLmUu3naJpxIegeeruVuI3Ww5Csy1VfYnnZeUxZfysYIyGsAl%2Be0X8nX2fUwHswq%2BWlwgY6pgFt03tRoxApeu9ldk4ke8BBwh%2Br3142PsUJJojYumYCdfM5nSP1smEBflXz6mBtCQc%2BLqolq6eR4r62u7zYyxMSgN%2FEzXJD%2B5mPGRR7E%2Faqb1FuusumaNLkmjm8rXO3XAqY%2FJt%2BEgMGG0ZoGPbFQKg9Pk9vjLj%2BG2QrujquEfRZblG%2BXdahPJisT2LMkf2COEdAMkOjEruuvcxJmiSw48oH8jrMYQJZ&X-Amz-Signature=aa1c007678492d48cd2016c33a716865a050ead21799ca4d7a9dd29aeefdd8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
