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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVB365BL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDMl4n7pKnSZclk8Rkw2BcJfiq6pkZvSTBGNY557%2BbU5QIhAIqUc9Jzl%2BLCC1txxSyca71nm7mubPIA%2Fc0mDXgt8p0oKv8DCFQQABoMNjM3NDIzMTgzODA1Igw2NJXlW8aBbM0meo4q3AOVtkBALMdOj0Rnyjgy9dJ0tX8VNHmwWdKn%2FyfR6TZDttROHpHb0LJwF3bjpL0brLShFTOktMCkS94qeaz%2B0mKZb9L3aT39YSd4EMYwxJWapncZN8F0rv22HeG36ms1xReRmtG1kkFS2kdfvS%2BrXQtp2zOhL1GjirNtv%2FF4gXi1EXiqHUZU1JFsbPwF9xtFgYZGwQPFw3x6gIyU7KgWeHx3EzELg920XjbgWA%2B99KoDFLWNSQ5Bu95xZtYH%2BDg%2Bntwvf4ZBkPBIJGkAUHElwpVgFD2Rx8nYOPvXW3HwfUAib%2FvaBkAY0d2ewETJGZODRbsQIOQz5Xj%2F%2FqXg%2FrjU4tNi%2FQm3mLRXATb%2FK46nGM2%2BFOWP13Br%2BgBIVj0bTfBlsVOB6JtILMsKQ42iX1tvUHC3lEeRZzK8tcYSk%2BGkT232V2L1OmrOzpPHAJ48bbqkf6Au6R%2Bd3qOCOBmZSsEcXiQ7fir6P0E4mLRrYUgHJG9HcwrXcYJ5K0fQPy5MUny5UsFQydTE9v8AwyAWLs5lR6ofz0bWXTrnXEnMb9ag1ePQJRsIMxu4wXuJDrWFBsOn1uuX5UKytWAUveOAtaQ327PqZ8%2BpMH0bX7bkkWmNpfiG9z0KYzgDHvul5URmujDwrdzDBjqkARJBEfx4QgJYkt0IjFx7q5sXyo7Qk54sJ4aC9f3ZqdmXYQBqc1pq28j7QwHMMhPYIaBEAdziUFcvTTEKPZtF6WCTVy1%2B1NaTdsJmoTFjBRn%2B4OZ0NEY%2B7VIWwRPJRrU6EGAXUAJWtmrkyAc7aN516Tjs6joAffUho0hwvxXR2N1rZ6eVrs%2BBZD3zKwKLGoF0Inxtv%2FyCFIF5lLFGALGwsVzjE1ZR&X-Amz-Signature=15526cb22db463f0d4c141ef480a7e990ce45e8f6f0df116e58f88295c85bd54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
