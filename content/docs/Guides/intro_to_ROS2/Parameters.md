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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBXCG5A%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf7%2BeVe5VJJcyWn7EI%2Bv3hNQkVIxpOoR2mSMCYXFPahwIhAIqubPJiSLItJt4d8ZDi75OEPo0cZLFZnDSlT6V2coaVKv8DCEgQABoMNjM3NDIzMTgzODA1IgyhDptZaBilEo12fDcq3APbEmji9u5UrcLKNEQKM8oMII%2BscHFQ%2Fqr7Nlp9D5OA6W3j9SuRrGvkAGRewyOYPlcqV%2Br1nknJs6gpA1HmQ7wunoOVZorHLa5rEpUV2QSRmYFRVPqVVI2rH6xd9%2BBhHgnlgGBsH%2Bt1VOKpwp7cH0hhGiKAuEGCoW0nDzDEAAJ40A84YcUa9wQ65idszmnbOI4j%2FcJ%2FwNUxicBbjJftDk0y14NUNkKE1b%2FmPLjJYrtRls%2B%2BpivlSUH0cEFA7LiOwGzuLzj8kond2m1OC9hHBLUtnmR5ncI%2FtIvJhb3qcS3wNDMoq2RIVmGNu5pkw4HpRRmUhSC%2B2qKZTJJphxCiwMHJ6uE8Z6u9Lv1AE0zcWkruSrRRvAojLLUUx8pZHeXBRo6Vw9fmcunwKrCB9p0i5feLQTWZikRemd3R8D1fvtrcNxhK7OKXK2rHTyKug19kMPkDRxGL%2Bt%2BaUWE76K2qk0ziz03rUOf5X%2F78CRboUEdHb85JtzJPQpnOIY53Y3ajMmDglikDzXkVwUfSQSsZVdKFxMAxq7J43g1QlH7De1PUML2zJBBdvi94ow9SDK%2B8gCfQ4xMy6kRqSCJnB092Ef%2B9abGu%2FE%2FW3msV9W4niCTPIV%2Bjsg5A9bSMS8yTBjDJnMq%2FBjqkAbmDfPHkYceIHvm5dA2IeIULYfbV8U7GmCXb0viS3DPFOYelA%2FfU6p3OtRusk98fbUFzcnnUnAqKsuhiF6fWNL9OthvkphWxqFHvULjzrvXT8xfE2LxILxhcCeDU89Q4gzO%2Fi1RlJIB50Mn0G8hZO0Wd9uGhTw87Xl8yjSoeix3V3yYYt18VI4u1aIZ%2FJ%2FNcWjQWMkaK43QhrLj4JczBSh6S4grK&X-Amz-Signature=af9ffa386fc143c64775df3f9f363117e239623d8159ee9ad481879053aacb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
