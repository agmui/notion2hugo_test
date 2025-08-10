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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQPR5VY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BK1Y1BCdCx7x%2F7KKd1%2B605VD1rOMki2yeqtwA3qTR5wIhAJKjFnvUWCazv3wt%2BFtofvRRN2WDXgOxriBTQWgwUOErKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igztc1RhK0aI9e3KjCoq3APw3WTw8NWuB9TpDs9Zgu7dcViN8WWVMetfQdlqTwNTD8FyNrcSumrX%2F4OhlIy2K8NS3xYav9H1pP795NBCC8FudHmGgwfsdjHYvBnhNbO1RkWqP8IDpcHV1HHbN4MXYbUuuYr1WhNFcwtFCTIQOSTQXcgQUmAVf90rH7GbOLf79SYjeKFCMyshE8j6x%2BScErsnwtK5iv2fsFPOq%2BkpczUbC%2BQwroEIso2LsVm09IjYR92Fn%2FIr%2BaEmUuZs0Btce7GHriLnO0MPp1Bd1Lhmo1%2FRr7g2BXnajV2uG5oMxsC14ABP0eyYSIO5NtgOMJLQvJFmkP55XNKIw1CozIJEf7U1T9CMeegQfEzrx6lh5stjb5NWjlu3U8r42emrWoUVMtyTuMsaYl5B9gnhaX2sjJ1dRgHSzbLcqguKCJEb4ony%2BwxZsZrxfRQ5mPGM8oD88r%2BWtRSMwXVBEToc0GCrrZxAjOBk6yqiuq4woK8ysDCbswxmNtOKm7dqEWKSkg93RGS2xpuutkgaAcIMBve%2BEgzMzOIWm%2BOastsvksdR8z0TwOCswjoqZGM4GCSZ9VHbfSOJFakdXaJHRTVXXh1Mss7Mb9gzcW633a6jM5PQU43ysb3s675YNxI7ttPbzzCHs9%2FEBjqkAQotFfkQ7xLo76T6aT2QlaIcoYpmim44NfiG2ROhbPXQ5asoGyKtk71V0dZRb8wCNnxxFf3K7MBt8l1h1U8rKtUHKMFXk5iW4XehXkSpSUyOD%2BQLsNdMxkucloiQ6umKrzs9hi3kladlzfs4OIA7fk7l8dWuJ1NoOFZoDsMZT1Cvpc5yUH9ptajJbDYczA41qiAPW9Onf0UKIOrHARj9SO9FBQ4J&X-Amz-Signature=7360f20c317c488457cf931c8386d89b2f37a70eebbb063d2b0765216b127b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
