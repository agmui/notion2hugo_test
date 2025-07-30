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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TRQMAU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnonf68r4mppISymOq6xWAuHS3RahRVOqaX6T8eumIrQIhALDtaR593vccTGbnoCvtKabHmyQXeiih7PH2Zuoc5xGaKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7OrS1Ee0z%2FEkYStoq3AMrb%2Fx5VokhHcVsW5GnhQiYZ%2FfYh0chhyfdCZp%2BcZlToLmjn0eHnvWmJ2hmekjWuQiHlE5Nu8MHpBlULWo6yySxC5gSUcHkg4tvaYARYpGCsUxcSOOuFYTMPxPCiscs%2BiNQnZbkaIZGotxke3rDFzOfnd5jhD9m6NaaubvTcOLl%2B%2FNFcFWDr8%2Fblzul7fXHI7vQFzMrWGYM2Cb9ZRAj6iYlcXPT32%2BY1Sodyu1sZbJpOcE%2Bcgr4xXBeLPOisBCNfl9xBcTi%2BgiI8Dr98BN7BtmlWqCeQ38p3EI2oxRJnX06E2A5nVv0VrYYy4tIWOTPYH2yWaevqunHznNKsS1FL2z5Y8PmsxZqg8S6CQ%2Bu0SJEONFmmHhRvQIMf%2F3GR4zirbLrxTh0I9rPRCQ7Fv%2Bj5eoMGs7ROoHbPvAc%2FMii5BtZeDq5DVZKXV%2FuzpB%2Ba8Vad2ldpfcdv4bIQrepyUO6zPjz2rR0VkLdzH8Y%2FsD9gaed%2FSBBNmQ%2FQTm9rqblcTsKN1b5Rgt8WCMMFAunHlTx%2BvOeb79eDKx5haNJLBnjiS7NG6q4Vw8Vs4UniAqoZC0DxjHZkyXlBTIlIPTSYHqrUoT3uDeVlwb8Df8XxoBnN%2FxVIYV1aTWWy06CSeCkrjDJwafEBjqkAVpZ0toyDg6MX4wxFJehWaulnN%2Bb%2B7x3VqGgJC2nG%2Fc9EDrx5r5NwWVzbXzr1KWmpsBesmtsz%2Fmc5y%2FoTTxMe6Fdz0ulzkxrBk0baXF0JQ4QMDyL36MBHXggf%2FCigSTW%2FGyEKHalu6oEDF1%2F9qdOA%2B8GsEvIW%2FxItrfFb59%2BS2q9sn8wR9xlVzV7Ji1Zs9YNJ%2Flv0lzbHoMTtm8HN43E%2BQ%2FgjLWH&X-Amz-Signature=9d0086870d6682fa626d9df19d78c75f5ce661d142dd714d70725a41e19d7e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
