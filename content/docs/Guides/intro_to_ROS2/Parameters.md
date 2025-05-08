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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVD77EI%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXay0OhAZQ%2FlCrib4qf1zeRFdHDjmnC%2F%2F5Y%2B3fH%2Bw9iwIgahp2WciGhwca0cBhddNSepcLbZUI8RBQZDBngUXS3Bkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNzU781jaRCaejXM4CrcA0ksRjLi6OJ0oXn64Dq2vSjDyVJFBuCMREm7T9zDHyJX7sM%2B0dFxZoWsm7DbQfoZpXelQRsuTji6LsW%2FR3RKYKtwwFjUM7Y2Wc1i%2BmzQ002P0hrbs%2FDz4kSvkdqbNtQaskFcmiMrySuNk6JT2WK8zpB6GaHm6QwIs9DrbfF%2BU%2BMoLmkA8y%2Bmy3fsLRazm16UGIyqHCPsMPjUhuuZ2MeIj3k%2FhsDhEYo0XBxIoVc8tCIbXunVABwjsalEo3LhEKhjTPru2rQ%2FXJCV9Z%2F3%2Ftmey3WFq%2Bg5pw%2Fq9unjP9BO2b9tplVXaaOB28SVSJuQLrq%2Fj%2BBz%2BRgRwNB%2B4vDuA1VjDNEc0QsXD0auOiVSTaLJm2E%2BY7F2ExU2G8We0Q2uOBaG9ZfZdluuWGTikVRU46PIEh2xRQAQXXnmZ2CwsaD4yVyOjLPMyH7V43tcglurpa4jLXefOq6LI4az5jtObB1Bx4l7tOSePjwhgFHDz%2F1tfbwg08pbgpCPCclOSsMl5zlYEy7%2FVpf3RcadtusxPTHRiscvN8JgskOXdQ4rR02%2FEn%2BO5l3hoStAivgGfRQFLQurSTfLkg2upPog6aC2%2B2OCzKTvJqZHrmL7rpNjJg68koiO4p73tWSUYM3k7QMSMNiA88AGOqUBTXyxW%2FtWrWlV5VD4E7s1AJMkVn1vHCqFfkFMUauDGvS9w1uVS6sxXIzuJ6y2xzI%2BUbxjdEZySgH%2BEQu%2BJy75nOCsmw2Uy756Bd2htWHCHLhdGKXD5f%2F7fXqxVLzutQWIGgSsxcBwl6gFfh1vENw6kZjiX4rkpTrdtwTP6PouleLU02L4pe1Be3tVktEy7ARZGq57gpWeWbJ8Erh3UCFQga8XEkuf&X-Amz-Signature=18093d5e63903802dcf57e8ac6ea76e8cc7c456ecd2f8a54029b8c0066042871&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
