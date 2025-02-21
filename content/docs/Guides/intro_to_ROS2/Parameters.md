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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWBJZGI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiHrOS1gGROXbuQ3Gz%2B%2B7k0n1zTsdOABzf5rDfa8Cp1AiAtSt7D8KTHi3bpyKMxjJFF79W6%2ByuTxt9NfvJptyU%2BcCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAozhUW9OaxIh7ZL6KtwDB2iNM5Ezd7reG4NdTy%2BmIsGLweuCr55CMlY5upi4J51XJLCPBUO0OjIb7KwNYJettkceiHuB6y7l2T13NLcyQbqdkQEG6XJzaiVErqmjMWNPFzgAKtRfUpqX4MTeAf4rMU8e8ZWvYvY9bz2saPR9V9XIBgrw1XT46Ye6AFZgmahzaoUl6TRxHKsZ1Ynh58o98ajGPQbr0gFwVl4Y5fWtkbRDChS0ZzpRkIoFusAvRAGmY5hfmnBUaGyeTp0n%2ByRurXY0q73m%2Bj28m40Wj2uqAXvRUElMMOl1UDu5dkkp6NEvq8erDLoNPyOv9uiN4UyaDTda0ZpEv2EWJc7wFB9SxrzMrkG7J1f6ErEMBYiGIrZlX%2BttZUzYuF1cmpZ6oOIpdMQY1zUYOsS8yYdwdodHLoAsCWwq9BW12KuKaMu5fRWL5iT5gSJlfXX0hLHfWFdVw8%2BOUUYK%2FtLrtUdDGw6gRNSSm4Kqqrkx%2FhOdXVH0fg0nWT28Qxq0VO%2FXaNDRqzJt6j%2BwXjl6S3075PmRjGap08fvrO%2FzWXmnakZapGY0ZEHkO0z18kRHhyxeoQA6Sm4tPaaaCOvdDPxja9bkO2Zi%2FanZ93poLSebxhmPOpikVJqvIOuAQDecCgPvNL0w94TfvQY6pgG5lLKIXPiVeLhyG%2BRIV5mGXW8yTzYgrEXdjDXx1Uy5RzDonzUt4X%2FNKvnblHGX2ydYE92vBXImHF68TQLUPWJh5K4W2JUeZqnZtBHF306gKLFFsmsNzWzh9ziD7vPN6oOeJhoBFFAvhK2eBrea2pvHEpgpRnCZ64FOXsCN02WTjC5ST%2FuXXLHfB1aMTpSwO%2BtC1O2fAW6pNVnVu%2B2wzKM8dBD8KTDh&X-Amz-Signature=ff98bf2ce73e6ffbe97ec7a00d88c8dfd1c22abae974251663c7341696fcdebf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
