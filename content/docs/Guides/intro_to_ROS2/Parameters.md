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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KMFFMG%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFVvrhD5vomrSXUgdzrlhYXBf7Ola9YgQJmTIJu4vU7QIhAJdRcpB74hmiwyfL8b4IAkVun29fPWMLYGCHDnQMrRtMKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVWuBwRCoYDFEz1y0q3AMGhxDMQ3ZaI85%2BpktQ9HvFrwG1CQnxcr7MwCiI%2FFWmVF%2FlAGFtKj7VTRRAqXmu7F1PlbOpSlHvMfBWK5t2%2FPDraoarInWSf8j6pYIxukGPp%2BZqR9JomZKWCXEllxnxioGG%2FTPCmtNoOq1VnxcVShYuikNnomD6Dfdr%2FCeVRBd4WBU0pDlFGyMKWSMfZhi5%2FZ3h6GxXPpHTbndnjB7ALR0b%2FAfyG8pGYlrwy9nKDXQD57nlVLRxqiLO1I2oV%2BXAYTw8IJRJzoAdp0A%2B1IsSyldNXLa%2FyYoqmWTG7ZYKc18%2F74z6V9Zu%2BjlgGwClfWSjsk3EO8txFWs%2BZ11WnbpgVrXNBCPnuzRr0pwEf8gyOVRHc5rrX4exUMqoyx48%2FSK8U4jsbbtouoSWb%2BMaQYeEKVweCz6mRDWlxedXFlrOlIWA2FY0RqM9m%2BNmv4gP%2FgH8rTZynNiICEDOjplAiHSvrfBP8s2SgJnphrbrYvalPP0tr2Zeht73pObr6UeE0ExUnc8q9GjFfp0VhnBsqrVnhez0xBicmC14EMEX2qJAkVfZpz2hOGFRvj%2BRDE77stngSne7L4dt9xUG9EKkCTmxdKZa7VJGt%2FYc4%2BZN99NXWrMvjUuAuGkw5xkgZ6naojCQudC%2BBjqkAWTkRKYAUlP%2F%2B8OMWkwxjQgnqbrKvJVf5A82qT416L3LEEJ%2B0Di2dHxCJXNZtwzebEQdo27eP%2BTCdjzuwytb%2BnJWZRQ%2BF3B80FLvBRjY78VgW5M9XhNAup%2B0CumvDodYeVaQTahrhrfw9Y70PG6xVfmQsbs%2FJXFNR8qg952X9eg2PTegs3lPlnAzKQZmyHcIJkpc86MCBlFND49ZEDgjy%2BvNhaQN&X-Amz-Signature=f14c1606e459510b6f19808d53d18c550e6e3ddceb9f9df32c9aa441e3ef66b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
