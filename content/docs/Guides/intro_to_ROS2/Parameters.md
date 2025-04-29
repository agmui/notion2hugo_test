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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRQOBRH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUfBt%2BWWURBirbC388SN9tarqAraCLxfrKc5T%2Fo%2Bpa8wIhAITUgq50iJs%2BfYdjzMvr6A0xBBTDNbNGzaXMjy2%2FM4Z2KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww2fsHtKA276lADm0q3APg7zHGCKc2ePXTRZSSdIfbBuWX%2FdvvmrJ2jHC5tXqCpetR1wseuvMgpHx8lsUxCCptJxsA%2Fe10RAf3WviT8VxhSmY0pqkKdFDKz6WcEtNVkDrBHZFlLa8uas9dHmB7x0oQb04mP2MhWCso0uUQtG1sI0EyOuvp4dcus2KBxiKR%2FB4YtExnTB2nJnAfuraQJE2Dsfitnj0VhjZX7of6nQ6KnjD9LDHGJI1XhQBQF4Cjo8RE5qCjmQNGvHlD5xcRf0R%2F4g0tgdDxPWt49RH%2FlPsERhV0BFyWCsNSfuwhDF8R1a%2BfQZMWK%2BmfBSoMf4j1yooKJH5OTOpc6f84mlbOrXz8VxGZCPovsbxfA%2BnwM8a1tFN%2B1gWqe3iVgY89YUWUhQNF%2B3ikbYi4OnAC1bcMSQ1ccojg1arDdPjk5n%2BbSDqgJfyKxdFPoJVwBTt1QZ16Wqj5o%2BtfH%2FiN%2F6mvi6WJ34GqyzS6Sxc76db1mlnnNGd1FyggiqQ6crUEZCoqTdpNREfRpm7qRz18gTqogFIdabq%2F2fNfSL8%2FAQ7y5%2FsEfBV%2FP1VHcTqT82InfPetHNCNGCnCaCLPMsrqREkWU4eNj9SRX35YBNIDpJMztTaE41ITMX3UAMDoRbajrIsG4jDJocXABjqkAbuhpImnMSeOAgWnqxkH8jIiCqM%2Br%2FKreGsfLp1ljp0W7U3VAUkwzR7UU9pNLfjk4CBQmPhk%2FHrL9o0vA6%2F0ZxV3%2B7gJ0eR5QBIr%2BjM5FuCXWU1M40r83r%2FOML6AnS2L8muqpDuqo2WHetoumlE%2FeG28WHsWbv88Cwdz0JG09RNe1Tluj%2Ftq8F%2B%2BvdNU2IZyLs%2FhI2BGK52I8VsU5jVhWO6OHU%2BJ&X-Amz-Signature=1161cdbd0121be98fa5b762075e8f1a23e1b38fb6b12ef2e905120099e0efb7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
