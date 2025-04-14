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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6TXE64%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsauNu9TQ92fMlmMqW6wRdECsd%2FRjomCrh1o9SK3BMrAIhAK8CB8JorcIhf18uFEJlgcGd9tizBUNlldwLMLmarL4WKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlKtMFkdnX3jWDKuYq3AOueB8VeYYWS863uWjLBSMXR25YEjs4ax4KfHPfw1FpLBbzrfb972mYL1mF215A9nPmYTBF1Q3PSZHSslofCMSxQ%2BvrxkJm%2FKv59i6H0fpLirLd5b5PDnHdGogqcwST2GdOlTd8w%2FNrrvvGri6gu8T9LV7P7Xfotb6Wf92Aikowf2x%2BI%2B5zLjtIcPYXJoBAn0KKbDO0DGuoRMwTxqRPQbUq0E6RbcLakJLKWuW6onyYgrXQoqWrng36rtojQEJGw%2B7N8KZRGwXdvlNFzYUVSIp2xy%2BjA4OEWfNYvIchlaZOIE1Sw9XJYIOcG1XKHuBVHuq5EhNdVpKzaF5jo9x7ROZGXBlObXh3OsxlAqY8IEGBZf6xV%2BTDD%2BO%2FmsBpudAXktLavuJj62Wtlu%2F2ljiQiphE0h4UrG3epmP%2BWrAIUTRO4SwRx9y2JNMbnE3%2Fsz32hndDi9JN%2Beh0MMTrwvwHWMrUjT9ksiPcN3b4pvH6q1xs2%2Bw%2FjDWswjQ%2Fet2ggbCESrrvfRxpLx5b7yBwF8imaZdw1wkoW08MMcLVEcMas1t29WjwqdvI%2FFJqcyMD3HJzEix4J2D8qoNHCMRlXKCmHyHz9DCIfKQuVZfg6oBfYQeooaINeaZYpKkWkOs9AzDkrvK%2FBjqkAcErrAjjn1bJ%2BFUgHev79iOTW240IGgG41v4iIOd0iZyfjKJIOuRy6WgPHMDWx%2FBSWXA6Yh5OUhuKeuxRwjBUcqCVhSQ7YcdM%2BGRwGZiQypEm2M7jmgo8TI0yopGB2%2BIprfHfY00siVfIZetsJ2ikBkrSfpIYjJQxRGEMI%2FXyqAH8gjXbKKdEAkSjuU3wkInSW9u7eQHd%2B4883aII96%2F5oIDjzy%2B&X-Amz-Signature=b25bcb30a667287c0257c916e6f208d43d3e559dbb5dee7fd682deeec8691a68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
