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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6SJVYQT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCenjckCFojFSKXw%2FyivFBFqbCDCY%2Ftm%2FyjC48Wcz5NtAIhAP29%2B3qxFNeY0pklrD5Rul1mczTO85Wz6fGxDWZXHV0kKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFwTCIJyXAKQhR9FAq3ANNp0JgQu9UfTl%2Bon2geQflul%2BlBLqyLh4G6Et%2BdYRmLiCq0PwLSiz0IhtsbU9EaB%2FjAFbHEBbblZlZM%2B%2FyD0v9DEPoQVfuay3K%2FZeyaPs45VAtUYCu%2B4J0tzLZUWb1IFb8YZMaz9LA9OyM41bixRnfOH8u7wWCNR3XvcNk5Ks9%2FxM1m86WbCHqcCGXivc7ZjiZcl0%2BBTa8Nt1HjH27FCfGChjKC8R6cJD7BszYPhZk89mr57Nr9TH9OJvhlNQI4Jl1rMqCp2WIgzvC9zTo2i6u5PycFW8OEvU7Ke%2FS3Oxux8MxuHbxsQBcT3S9vWd0sSkccexD1%2B8Bhj%2BiAXkDu5rrQSfeMOVfaDxbOEgGq2Bnu5eGykepGfvQ%2BKdPtPEdCU8lISDQD8rLnABROngEq5bZuY%2BFn51D2Qz2vmSUKmjpaE2CPACohbFzRQqJt%2B0JO4dzJ32y%2FCvQce6Nr%2BBHvHl%2Bi%2F42PuG69RUI%2B3fyE025gm%2BaHXwxTnfajvPiZyyKIdi42itBJk3BDiSxFLc%2FpVCQxTlW81DpkWeZeWI4p81GYQY76ZUBVairpmZ0YHjeDkSWrSN%2Fdst1il2OewGF4ef9bazhjKqmVwE9lobmLOCn31koATRJyrPrd98oWTC%2FzaDEBjqkAVLoh59EYYtGCAiOaoEsK333v3C2fM79v8GcIR9yMJZCUx8%2Bgs2tU1BsRSU4c9r6wCn%2FXpAEQFJFN2Qvboo4xP2RDmXVbyh5yqY9vXX%2BYmsyk0PQXnbj22HTkxhNEzvb7MsMuceEkYRSKYMswfrbZVnSZ52iZieiFHiBrNFOwSs%2BIGtOnWOfCkNA5YtJbv3p3icyCX0fCzuUsT6lzP2Cg7Gowa5%2B&X-Amz-Signature=d531b5849bc98083a1c5570ae6fc2ac9a79757eabeb69fe1fd7b22b20e4992ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
