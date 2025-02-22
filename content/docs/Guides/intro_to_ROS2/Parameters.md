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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL7B77PG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjoAwjvPm%2Bxh9%2BSOR53K96PG%2FTe1q5kcrK01tvn9CnRQIgUaLiXqkZcm%2Bqfg9iemVUF3zmXVsYobist8IMp8DD6WkqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJoqs%2B0XwfHmGOfqWyrcAwG%2BtS%2FyxjWVWvO26tsMDkeoAdZ5BNquChP3Vt5bTq6o6u%2BMuas55eyyFPN7%2FeVJFObCHOyxE11e9VqPrMtqyIfu44nrmpHD5BXTcRepPyjTJh6dkKWk2QC3Yn1DnoR4M3gsG%2BpfCg5E3%2BRXN0X4yza2iZzokT6E8MiR5GfUq%2Bq8DWi85Hr207wGKaruMtlONqpVWiZOoWtuCjMURo%2FTtbnh5lrQQOxS0RWlYp3oTVqEg0dEmyQ8wVSS0SNL0TsVHnFuBuDykf4JHnMn3dpybRo4ELN0vwX9hR%2BdzZ%2BlEpMaYAN50yHt55M2sHUx2Ey%2BOsif4lr%2B4wk2y2gjFDZpqvzY3C7rPnt0K%2BipBeYEt07FCDCoOFxJFPWrQ1ZIoBehQVWeuskzN4XIC2EHg8CO%2BHdMsETxcv7axnNkYo%2BqaF4eF9FWAxa7CNGD3yIw7V8EbDtCfXvmHBIzZ46W%2BkWworjln2BhZq1h%2FwIwO0cq52pm2uztBCyQls12bliLx1gorIbZ0G9WZQX5yDWDHI4Zj8fsoDMWUbLzTzk9tTF0K%2F%2B9IaefSb%2BltETQSj7m6VinCRKNQqyyqhHXA1CMLuP4HqXKLUxUWhOgLLN7w%2BRySsElEzmYSEyxi3GTBixzMMLH5b0GOqUB6gntEWLCmdPbrCsGVThpr%2Fgg9S70cuYO1qA1tKCJzVElP0xwGyuc5%2BhOg7ZeVeH6ETAYT9NtML4iXyKaI7cADUgIidj41O5uQXY%2B1wqjEVNANKiEaxfaSTZowFjKGf208W%2BcyRNf8OsKCHEUcBRhrO37L%2Bf%2BjO58T%2B0utowwraDAP55%2FcY8%2B9yEeU1SAtGCRl8oXTfAjylq66cCk%2Bivb%2BI%2Biy6f1&X-Amz-Signature=46eb2cea2d0a7de381069c2df864462b311e2c41d26c52a8e44b8dac7d12116c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
