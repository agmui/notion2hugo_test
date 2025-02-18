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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDQNS45%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQChaEees%2BbPe0MuLj7jk%2BVvrxJ9I1NCEL3gWp%2FpCzWCawIhAMZCH%2BmWuW1lP%2BTdkATuJidAy%2F5zsTn86%2FxXjVm%2BNrOIKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzns4BPIJrTrakC3tUq3AOJn2dzweDUiBWSMs4BOAqcgHl2fRuGqlhJkWbPDGagc2QCq%2Fg2v1dBU8w0IuDXea58EinKKd90rR4%2BR2wMoR6yU9%2FOnD805c%2BvncfWSLnLPxoviKp1n8FO23fz3eFM%2Bww%2B%2FQeEUkVL4RkOVjlwa8NUCfOeP2M7wc%2F2K1sEJhjRQyGPfvbef9YLVy3b6Q%2FJ35oQ2WJA8Ks5hmybDiJorgFLgxnUGOOOJ2Ro6CC6sqO2MFHgK2VhRuCqqHeNi%2FP%2Bdc8TTKjhbITpcZv8ZoYUy%2FMHHgWNyYZJk0cTMewuGCuMcmAFQ5ZKxd%2FjdnASTexyXPPR7gwOA0huLXOQbCvZvCR7LkvETtkEPLWV9AAs20imiyvRLV9WEBRzmO30iS8qBcFsUA6rgJZjx56IPUrTn5vf41HiHZmqIAVAaI7xjBz%2BeTiuzx3ULiTOuLji4trowm%2Ba9S%2BoSlW21FFWNRgsQo6dQSsHfTNlL1JOGJXASgS2H4ESZyiCh9x5oOBB%2BLLfpz71m28zMOu3MbTJs5emq6mhQlEIEhdz%2BbodRjRA9rQyWdFwc23RG6QgqVHRD0fmltUPa9qeyR9Fc%2Fa0IKU7HZw%2BzNxbb90d1L2NuG5b1OW95xeCgxWv7kCRgxlzQDCQ99O9BjqkAS2vxuO%2FJclZoGjqr4sOkJRW%2BHJkDP%2F9RtzSJxK1dquSmYwLr0tqgJGlY0Ne9qzwgQ%2Fz1hD7ZX9MnDJke%2F03DbzRXQYNNnzz6Sp75mDL1auFWVnZ40RmPlSCI%2FSepQySPwWWc%2B5CZMuBu%2BjcOCwffNPTZl1gjDUXH0PnoewvHNhIGR7o0VS8buAnGM3Q%2FOAWO%2BKMNdj%2B7FeW4v2BnyUHHLikDKZI&X-Amz-Signature=056a655d92f2094f6063de0499a7153314bab128383be339e391ec71cdb0d009&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
