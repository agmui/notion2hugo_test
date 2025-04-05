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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZIDNKQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEYl%2BKMqg5pn4I2NZRjWp9dr9Z5a3FCMCz2J3LxLMQEQIhANJ6%2BErQ29UQW0QZ1PvZgSL6ae5Y5fSN%2BU0U6B4bMCtaKv8DCDIQABoMNjM3NDIzMTgzODA1Igx1bkw9PC41P86pGuMq3APp8g8lZAh3JwxAptId%2FF%2B2UOC9qc%2FwZhAALD4F1z%2BCei0bee0AMLb7%2Fh6S6hwtoc7k8VXkLzE3QkJ0%2BAnVmZG%2BbUOEzHL6Ipwq%2B4tdAqhwh24PKf2cQtex4%2FKVyQBlcekIPT%2BPr3kVLTfWkVtNECg9MnRdBMhZousr5XlxYHYfm38PgNFSuYCJmEv4rJax9cKsdFRZLjk3x8Biq%2Beky7UVrK6t7pCc7O8Gzq8IJwatZt02zUWANxxo5OTppqTwduU1ewkKEwiFJtw75RFq5f0dW1ERJA1hYd0w1%2FrgLxJqxIDiyeOm%2FlJ5d5eAe%2FdOrUaxOTLBrI0GwtS1vSuP3TzTSxM69jeHmhqi8y1HMy5O%2FdyMVjJfAbSA5xePRpOoY7cuozI%2FuIFWNqxJYdZ0Qn5gcYHtUfgrVkSQkuYAVj8sptYkm%2BhxaVtPL3wxqrRrYzlKrTt5hvROeCIsAoxtx05sWnAmiycySob5uuHtj09cy8qwJ5DaGTBAv%2Ffo8Gp%2F7N13xhGm%2BpqBKeqyC%2FgVAQCSUkuzruQVABpRI03vdeaSqpKYK6Uq2Sh9rUbPjqnp9vlzte7O1diXI82bosqhf8cPUye5aaS%2F6RLg6BNTUOfAGKYO3U3Hks%2BxLG%2FqvzDjx8W%2FBjqkAYrYuOMTHYhoZauFKa6Hdd2CNgwv3Q%2FRjUQYMu%2Fh6BBm%2BM9Ux2Qi69Rl5nAUeSQ%2F5P8l0Fxor4Ypvxwr%2FW8%2Fzw2o4%2BiKPfq1jkv3pcr4WYWrJJJYRVnu52ndzbQokWvYo%2Fhl9SzRhdu78KPTGVYeH%2FqCVU91HKxeKBy30Pr6puc5Vjaei8PO%2FahRIXjeRjSgrbppOZNEzzffPZmTCsWpblcz%2F4Zc&X-Amz-Signature=f4e626a51d86a8f0cdc414cde3efc477534cd4a64d643a752b0c2802f7bc1b08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
