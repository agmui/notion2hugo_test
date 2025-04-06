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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNIN5T7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESUdZdBpxHTfCnZCffNpf3UrL3Pi5dWtnmBtqKNBwIyAiAy7etwoUmploGSn49Ym74HXVzUbe2i9SHedjN%2FqMggLSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMpUbl1b%2BugiA%2F61lgKtwDBs%2FJM5N9vsAlg807MUT72Gwp4W8uAtWPOEKKnX65M7lpfP8iDODB4mK0rteKrvVEqeR9Ej75YbApBU4n9iw8MMQxOh8Q4t1ksXfaBZXd85OfS%2FJxpijt8265%2F9%2BA8cGBU%2BtQxUoHL0OAj8WH4n4XaXfEmL9NhDmkpoRg7bO8lSZbn8u1TYCjC5js8qpYHkGmiIA2tFmEJZtpZPB0%2FkKohsC7Gm6E%2BGdaCPWClfrFWaMZgZCfgqsimHDAMNzbFD9t3yhiRK5K4bL2TAUa1paAjtgPhsWVKOlqXCCfLewtjnQvkGcLbqrBKOzhIkxFCQREVuKNb0%2F1NRZyLKO6Omy41RFzh2i4akaNkK1F2%2B5m2sBNU0Bl1Vq5BzRksoXKKetL22YdbW5DevhYdCqTLzfJIoCT99J1y5qqIvEx1gev0Y9Wfv9ffkgbTpT%2BQ5fB7neLxzZjopqOE3QZIhQiwS%2FH9GYHK3%2BrXV4WbzZ%2F%2BTzWrNOEgP%2FokjmmrIbS%2BMHoxoAVsWguMQHaArvxxRQAn6lYRXechKFymfNVOLBnUPUbi50Qepnv37kNm14FPENQZZuOua6Fc9ZsS8sXx6p%2Bz9sk6BZ7XX8XRrOXKDkOx9%2F1llJSo8qvEERU7rhmvqMw8fTLvwY6pgF3dywyT2L2k5%2BHpBTz7NhmvG%2BjK7%2FDlTPboo50w9crEMQuWmh9AmMxBTL3I%2Fv9FZRpPdmWCVMmZF2djE8vq1KKgtf0xNPkRmpS4Hbz%2BpkDl%2Biw%2BHSuQGzMwEI8C3Z1SsUyswhQvJuNqbN2t6Mqclx2cvoZyuGn5fWEeixbg1ytwJ03jruJ2wRLeypnuC1Nl4LNdVCDwkLEsONpV85tt18sv1y0hrq8&X-Amz-Signature=dfc5cf415a3e520aad309341ea263d249f424675c99bee6835e7578632db3df0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
