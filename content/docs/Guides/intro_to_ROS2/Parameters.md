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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPKV7AQ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDxR9bVJW2nx355RY21nDYWnWSCfKe5CweDlNTENOSuvQIgNhsCdA29oPX7fJ35S9V%2BnQJI9Bv5ICkwAuaJVgHSQtAqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1jnyE50nKu3JW2YSrcA9YXsykyva1fvMtm%2BuU1qqiXW4WmyxS7mUQ5jDRWH9F8w7QePRUz9qFa7PaGxxtZKT7p3ktYao31JXtutYXVh%2BDq0DUpoW%2FRZWQY30KUQdvBdHMcN6WH%2BdtV6y1KTmWlnp2QZHAyAG%2FdtnlHLfHBt0Zp%2FFhUZur5LKZ9PqRKa9mnVhW5aRkjEYHU%2FQxyaWrYDoQBPPSF0xmn8iUdOUq4yD6xMSvEbU6m6FlvgzeJpiG5cpMmSlu5%2Fg6DUiIvyUp6G3jaXNhuNuxwB4XdiLtzr%2B%2FAuQtD6yrNtH3j9bT2xs3mzN3ORnYQPyCTsCxlNXeu5VN0YnnrsRn%2BizQDCXFMJQltXRqYbCWoVh%2FAVqvMcCw8%2FNHczWDdX84N9UIHAzSjcLyya%2Bhlxq%2B6yMyCKYUSw9pmByfsjiVaajlavrKaTuYb0laAc3SbT9Cv9FljdDuPu71l6WhvfpC23Plmd%2B322cF4yMdt1KaZECxH79qnoqskrqi5wvMIgAmthq7od9%2FmmgAKWnXLDsBzUgcQl%2Fbu9BEjWirBvhom8flRgrTYnxT4CuZMDtd7AQGzv1eykec%2FO%2BPyVxzMgQfihBk5ZvJhxuIzyorREE5tfHBvqUju3gf8E%2BFDmNczpufRqCUsMNLXpscGOqUBQH%2FkYiOlTeknLRnodqnZ%2BfWICMnjMo7L2%2F5P5UBQEtRYlAAcNzadqr%2FtMU8tvriq8aekJVUbL0Xp6IBBONmaxg6S2L7D3Y2lrCykhZEgOzLeYndWppq5su4chzTDb3hfJkGn9LwIoXD2pp%2FXhe9I7gfQ5TJmP5Wtfa77vlVCoS1ElnJK0REMplCQsuzbbBPOVA%2FK6RmN2O5fbf%2BGyZ77UIa4bGQq&X-Amz-Signature=2c154e9e7a2d9c97a325bb7ca2d0d4302df3ceaca85f0032c93e7761777402e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
