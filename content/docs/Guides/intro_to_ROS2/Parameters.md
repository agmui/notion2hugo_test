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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJF2LX5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDtbyc%2Bp2AC85V8FrYyLatgA3iR0%2B7H83V3O8Z8s%2B2EQAIgCM8VqoLujGzSFLjGRlVQLuxtqabJlmAlaMNLhnmAqMgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDI9kWDBsXIgEhJMRYSrcA3arWVfojUiQjkeO8ICy8BSC36WIy3Bd0vbtVFhk%2B11CXZ9iOv9PmraKx7h8Vt1J5kemAoVbqw5SNiR3P8vQGCal7gRdkVD63ZGKwIfirGP5OF4Y0E8ELbI%2FUJjzUq1uNVzZY7KULflYQBynS%2BKEyNqgovO607stXkO1R6zsZsiYeR%2BCNQE6gcEPCMfTuuo9E3gFVkG4d2F8PZWKY%2B7uXUfFDoUo86aIe1101AC1C6OdoTirSTlMEiz3V0mr1P%2BYdrI7hxsUNxysz9A1B%2BiNiRVlNKRLmaHbK3UDTeg8mrobaLSOAns0VBycSuZ9HvmBYUAb1TIVKBITHQltZILtxSzOj8I0Y7HfOseSa2KI8PqxiG4KH%2F1l%2BQF1MS6y%2BuxMS%2B79I4YQNucI%2Bq%2F8WSm8niXzIx5sp6DoZojK%2FGuXdlXxBNx62MH7zv9thscQl4oFIk9kSugSiQxWOpGG14lzMpqJ%2BX18LaOAwLa7h5ZoT4sxSQoNCQAhetlbgLUIDU2qy%2Bm8h2j8Ot1CppYa1qPkOhA7yCYTU4L7CGmNYvwYOU708eBWq8pzfRIZ4KLUxgbKQ72bAJwNWPcYXVjxtXIrc9fLTtkAInN5ZSM6wQfF6WP0T5UTq7064EaUO2HyMNKGjsQGOqUBUbFoMlHLnim%2F0EmUKU%2FTH2I2QkNZcu1YH4FDmGN647s4Hnojc8K3is%2FozAlK6mYuZNztcpgLJf9ueyvFeG2o%2FjTiclMxHp1TPQ3VESqnEhGiSpwDV49Bhok6I2ziXetRzn5%2FQaes84lQvgemi3Q1JRbJppaKwO%2FPTFA3Q1QFwqGOWEtUQQX6qY5KM201xiOs%2FQzEmP5TR9xWUnrw8qPoyaBIqxXf&X-Amz-Signature=285f7ada583a4fc377ef1e43de428a8f51fc5afe6f2a01c0ca79d2e0cada5363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
