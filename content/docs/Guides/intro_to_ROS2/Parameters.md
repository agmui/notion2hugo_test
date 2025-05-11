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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RYWKZG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBEzsxDQQMCYnUORNxo1sHiR10g7BS8J7XPiL%2Fack4eaAiBbpF%2Bp1D636yN0G9RGtpfGe7cH%2F5JnZevdCQduhEAcQCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2B%2FCMDIkTXtsmV4iKtwDK3NzayWdzbcVnTxPY5UXzl5CmYcQFARYJX76BGht45gJg0FfBWaOLkqCsqeZ%2FveFUUhuEYfWWBIkXUOEz6%2FWJcE5%2FzD%2Fn4i82AbkiLNWidod4C6dAHJc7K6WAyyw%2F912HYd3pZpaeW%2FVs792xC5tab8OIAzxGIFWhw5OpIaxJ4IBQ0sOmoDx2Doiz%2BSwwu7lBWmait2fcal3Vt4SrHzvjKPaQSUqf4nbcuKHstQg3KhyiBSuVLw8rgf6AhQBJYYIdghpjnBWrInn1iLw%2Bn5%2BxdaYHUiYl2sXoFHPpJW5xyJlJB0JA5iaBF2cATbYBQSmBDoCO8zCqhxzniNvlTcmgetc1Tids1XHi4NnyLELjFZzBZjso50J4E61T2uo7j%2F75qCJGaNMZrMbppKYtRK8Il8WUXj6Gh1l0UWK%2FHeQey3vyTYguEOtYImaEOm8XTMe5DqCVwl%2FAwrWWOY06PA7U8H%2FrXfzxfWgEth9Jri%2FojryUpecwEV%2B9Apoq1Aebggg43dAGjHYq13dNuTS%2FZbQLdQacVGD24Ip8QC9JR99DE9vqYxbvX2WjCvVgOWY3s%2FJ3R1B4iShceXz8sYx%2B25TsOqP31IjjqvhfI0gTaVvMigfriGwFube2ovPhG8w6oSAwQY6pgEDzMHEZyBH%2BkuC%2BxEOkxQZdLfaIqGJ1r9TrxVstW5jbTapbOUUadmHMArj%2B8NBA3sVDML0VefjTbXV4QApKYEGUReqgIGeTvAEOdGKD6LyB7PIPXaPxM8xyqSHwUMGbgh52Fn8nybtYtaJ4YeIVeBApyZRSEPMacE5fa7x8EzctPjNYXq4fz8IJa4EVeUYwN4%2BeP5yd2UJqpTj87P0YFkHBonKMCWP&X-Amz-Signature=523b61bf14a1c5aab37d63b251b764c76dd73003b4f27d345f2a6694bc87b043&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
