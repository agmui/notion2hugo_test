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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36WOHVR%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID26CsvcMW89UW3g%2FbEZ%2B0O4C7Qz%2B8%2F7C03q6GSESUC1AiBonhl6F5MPckBkewLmm7kUM3FCKQB%2Bwui3ThHeqHsIFSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIPkUeEVKsLKK7SxqKtwDjuNUr3eZGJJkIYHnrQOhW%2FMczH4yFIFOkGDwRNIS6dyb22cIVfcF8T8AXHTV74uV1jtxV88FawK1CPsVmjTn70XksUtXZT35yNRFsj7wMtt1J28dFYFmbysUyGN39QO22EexNKn21pfzu6ppNtnnnbDuP6r2tFL5uYM15mckc1tBHjAAIJ2p1dKMUmuRsp0DXJWEFBpg5xA3UbBQygZmKjaXQWVVLgHsuhZk6T55JARxx0AeBHeZz1reSLwqADaTKiyElYheRZ%2FqkUG%2BixSlkfIZXc2qPM0X5KFB431P3g5DT%2BuoU4YQTRd5jrecEgv%2FqZbtuvWvTCmMf5QSISQoHAsH3%2BBDx8W3Utzo%2FlUJphBsTQXp3ZFp1S4zknXkpAQ4rpCUKzq9g%2FZ9n%2F6LIaxIuvC3lpiFGyjuAKepQCA0EZMDS76DXPLqpz%2BwbQheso6kECUQRAl7%2BwecyBf0qReIW6u9VDabA%2BKPRfPd68Vh0VEwxvbJFCrh2AjIIw8wT0RLWSULBEl7xsug9aExBMUxTujaHBTB97RWtVMq79bMT4BTQmoG%2FX%2FW5KK%2F7pKNTsjRQxcrQZDRax00kcRzryNjQlgm4W34AYNzFKc5Y3PYnMy3cLDBdw1r6R8rI2Uw8P3avQY6pgGGCg167tYIZytejF6Zs%2FhCbCv9hq2ZUH%2F2YtlC3GvEqUX1FBLPh7t48nucp7AQ2vaelcRLxe41LYWFwHJD2%2BGxNPyYAY3km34jzlSd73CHv%2BlnqzAs4%2BkzcXUZsoAoYjlJQZQqxS6x%2Fwo87t52ZCcXPRCIjxBsmT89zl%2BMTpS0W1tWZwKzo1NgSSmiRbnfO6xckm0tuGFLD3lh4HyQ2jvtsyPJGNYx&X-Amz-Signature=3f2b31f9c4678e81f798f1f4e86fd4b766a49c6dd85a400faabe6925d0f63719&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
