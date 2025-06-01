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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6QKLQA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBAKxRtwVodLkDRi00lP1R7msY1CWonUvtXAOgnY%2FRH1AiEA%2BO%2Bmhx53ldvRfJSwqCeYr8Mp3epBVBobGEWJOHpWGXQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO198sxC0U11UDZs%2BCrcA1cB3MFzcGfN3GPqeroPmAAp3JDAcE%2FUiB1y4I5EWKkamayTFaaB8BSj%2FsK4yjvDI4ktvyzBHUKB02AUoJ7odadCeDoYPiIlFEdO5urEZtIvA96Hj5473UDFHdfXgVqU7YzfJaW4r%2FMMWL%2FjHb2zAhublO1bxdEidb3WBx%2FoKUoaj1afd54dyGnywpyBzK%2F%2BsAuEaXu5y4dcKRowwNIxj3yWTDAFZIDHjE8CT16n%2FOAWYgvsuV9sx%2FxY3Z0N1uwlpBFMzLTTJcAlmvmdzNtJrlDunmonOVVnQfZKbJK36HUWB8koSxMVsMSRYiVYck%2Bh6KeZJxRohkVZ4Vs%2FWm1nLnuGgMbeviTq%2B%2Fa1%2Bx6tL2Jtl8bYnbwvTZ9ZiRYGb4bL6HBnrvWGohucZp1Rpu2asoJqDY3eN6t7pPtmHZLJ3hMHKzC1QwXdYSKHivcbHtSrbSTKLpbmOSkypUonrJd6KP4kp8UfNzBVqEDIFts2dr51L1LFQiPajHXA6WYYCteb%2FbGlL9gO2SlekwUSCpLcizfO16yqorimlXz1a06oedcDpKsKITtUnQGLzd0jIjUeMZU1V9tEApyzPwUO0jRLmWuzMZ8PeRlPfnNRTaxcwqQgHle7VJL9w2skt0XzMNL58cEGOqUBW%2FDPY7U%2F67bJEUm0OSuNobDq7b7NqLQ2A%2FWpDe02dFpz9pk7dHldmrnHf%2F6mqmqJO6b6h%2BG%2BUdVB1qbgO6OUEn90zy8X%2F8hMqFSr8bkIwISkwGIsYElzrFqHV%2BF8g0sKVDMv59DXI67P83d5LrTMdzLS7q81xBkrz7dG5yY0zwoDKQGXIbeW1lOyGuEqlTli5Nszp243%2FDYPt%2B6jRp%2Fc1kiwW%2BQi&X-Amz-Signature=592a81ff20e23e2e528f9481c3c313f9edb4ce0b5749c2687ac2a84a6773081c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
