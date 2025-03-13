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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWYF4KH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL58ZkzVbfCJQVTWcP6ySKmLqhcHeRr1VRXc2vGi3ApwIhAMgTu%2FK3jekJqfnFN%2FAUN%2BjQZ3GcvLrgZyT7YqPVWvIlKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXJJz5B8XxG196ZJ0q3ANahhapT7fcJhzP2EjkmstGGlgj6HcwckzmbfwFCt4Kd0JInKuw%2FfBR0wo4CW8ToXAGEx%2FuxnfIVCKu9qgqoMg4LMqx4lbvmjZuN2uqIUMsLKNKWLITKouN5qWC8eFpc0AidZ56anEk8sbGK68jwHkFlvUr300SOyPf%2FLg6xnioUYO6uQpS6XbgfJfynCF%2Ft31AMxanGG77aGgXrItEFpLPEdpmcNWO0nAeZs8xrkDhvd1yE3Ginm17LPDAsVe9vuqsrL%2BUvvMDkcWyMu3XFpCydCQWEFjl%2BYwENWw8OHr54c2RAeR9m%2BqWs3RDzTNzGrTqiGF2rn4v5EdjymX9JcZXT2mWUPWCy6o9j%2BhWsljYE2gdqBqUIwxFzRzLCUBKqBhZD9haNeXPMj5uvkqEwPbLQF%2Bntv%2ByMfvCRyRNlzbMQk%2BMV2y6UwnY1jxZ2aaNnx%2Fl1Z5t4pScG9r%2FgrfJKZ56eHjEnEjyr66yIHbdRLwp3KflAhh7dwvLqaAaHDMHu%2FKMsfNRT9fO1wMKNupQfYbp%2FRDfJum48DufWW2a3luS69mKR%2F2kuaXkfevlzfM2KZZP97oU9bWJ7aRGwx7RTsgjNdqthN142OM9v0%2FJZuJGWYNbZfuXUgkC3yJ%2BgTCshcq%2BBjqkAVoQGtMkRfBTGrQxqwBz1%2BIeyOHcQT1fWJD7Zu2pBp5vBAd6bwgH0IzhHTXQj3HacP5gYnF5Uc7B3FmMlheh9t2SqqUkcbjd3RD7loYtlPa93PLT0fpp8eoakFjOZYhCa9%2F6KjeT2laP9G6fvQ9pYcOMlHbHZxIh0WFluTY1ITu5aCV7%2F3pdO7BIg%2B5kNhBS2yv2J0yTkBcpOEE8nnE1CYnGSpLY&X-Amz-Signature=ffdb99f12f52a1dea7b4a8689e68614860976b1fe47c85960d5c95999e7a23cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
