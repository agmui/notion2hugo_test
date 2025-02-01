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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XESFMHYA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzQhymC6dpPvZBFG5x1BqOitR2VT5y7PSIx8ZhgQSFRAiEAgYEZ5rtlc3CXMCJxSrGlmp1Eyko3h2S0EQshL8kj2iAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAT%2FXs7MQVToeFxzwSrcA9wXNqt2MPf6u3%2Bc22JvLCqNKNOZrwtPuggUzty4hhrHQ6DC0Z3aO8JSuoI6B7PbZOIPYUSP0mGO%2BC%2BOV%2BqkfTgfjsejMKGHQnjZihO3Q6KvYD5yFlaAacK2ZgTpvuzuegmuWZT36YQjUduEuV%2F%2FBoEukZqcFAYuKoGsF%2BSQD0ipMkMcxJtG9UkMpYjbdkJiVrFMTU9%2FabPg5GJj97U0XXJ10HhjYkCfCBFTXPuD%2BX8ycqHT439kZ4xrE4Rei%2B0YN7pudICVFKqwieEnwVHftvJf%2BuAu0cWxXV78QUMnxN7wAyub3wPCJ5ZEeh5EpRMCJ9JK2KNep0VCxb1G01rhWjp4%2BMzfrrxZqOS16F5U5QO1JR0KrzD5%2Fn10UW8rQUTJcR2nxHghvaxGh5kd%2FRuUR99tcyBxcfO4wjdeiAT6Sa%2BNlJkpZNcoJ5KKF3N1qySg0hTpnjPq9TIsH6uuBzx%2BGGugyRk07OrV7k0z6n5a0IuQvYV%2FNJ1Uh%2BnjUlBN9gJvjGnADKL9bMb21DKNCjZXjggh87YgQEKZtk1mzV3F%2FQH%2F98AhOth4abV0hHsyaGnv7YQ81MlPcd7a9ctjtLH5eL%2Bm4etkfoKo%2B8LcgeY2v%2FPWKT5qpfbU8WPXjtcGMPPD%2BLwGOqUBa2RaL7qzegvHU88IvRlEP6usoYC7mFKknFSZR585r7OTH54QeFd%2FRdpmnmDd4HJLkr7HRphTU9MtBpPPgjcrJxV0s0Td3rtpiLYDX%2B4Y5W0I%2FqbTIfdadXtqj7yYiQSgYX7fi9AweLDXBghdKzlrOInR4YBvK7Y9Q9NlhmHoKG7SKnVcXxHwDybfkOFlY%2B4BhEs52JImh%2BYZYHRW2K5M5niZQ6bC&X-Amz-Signature=911a8e85d0ca1ce0d7e75fb47a8036a302b2057f0b4a33967e400351c1a37dde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
