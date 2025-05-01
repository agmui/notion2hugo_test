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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653CBRA7O%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIC2wy8igprV0PHuWRnU0s6BJP7CUf0y4Ae3MTA8IX4%2BxAiBmKYi3BYgoFgvEYcHZ4keqVTqAvEphlPlMt1ekSOW8miqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRlcLGBz9YjnyWnsXKtwDmGZrF1K1NiTxL8SDkq1%2Bv7%2B7xmzPXKrnqDuojUy%2F6cIWJ5no0VSo%2B4K8hQ8f%2Fw2L5ILarrJ%2Ff2r2dq1W6CZzcA52vysVNJvsQJieeBLigTfZolCP6ChoT6qUVgaR2F5IC65bj2P3Nih0YDx4ypEzrSLt6PA8XcZ%2BV%2FQV%2FV7iTBsBDvLVQWAM7eKgdPHiYSPiFtSZXWfvGYElbNGnLE6QsHczJOHyOVUXO5u80sQEoETlj429Rr7daS%2FK59G8j%2BF3y4HSGF9gGrR8IRBe%2F484dxm0%2BQLYGA6Yu379lRcQTMRBh4GfIK3SVkxDpJmGEvXJdn2LQ2LKvW4yzYMSDHkIZECp9s63NIs0w3Yrlx1XdqdPQ8eHCqIay3tEPKQd4amfRG5Ndw8%2FXL3xuRrLcOghbZrxuY3Hh2vHfWbdCrQAluGzZcaXQkn37Qxv6Kig3P5DG3UtS95utDqfdXpUoYrLcDLmiWRIur5Osa98L2GUtLsyJszd0PrV6YFDDBIaTsN9A6JivURqDU9mZ5oaE1z9EJWnCjnwxaoFMoYe4GV9IxODO93jGi%2Bw1M4n4aECjCrLD%2B5YnFjAqsG0Y1wCDamBWWNPQ5kwie7HpbhEWBCnpxPzDRw1WnFpP8nkCBAw7YXOwAY6pgGPA7x9LjAk7XVwomiI6D8kYxl1Bbnu9yZk1R4neZVTcgxq1ngwJnCMdPy40vOAEib4GqsKqnszyugd0TiiLKpbkl%2FG8r5Gpz4EpTBW9mPm9Zpn%2FIn4qJc9Vx%2F%2BAsQhak3URH5lZF0J615Jo4CjjmjftmXEG%2BIPlJHWUXkIMjNrp63oMKT32b%2Fid0z7o%2BwGU3PPeHL5hphIpUmq9A3BEDGLlMYn1Iwr&X-Amz-Signature=0a05caccab93d7a0fa8359e29066806a6f7a1b827b245f46af0770561d94d12f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
