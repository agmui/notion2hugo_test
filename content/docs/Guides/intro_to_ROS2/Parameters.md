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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYUE42C%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdIiV4WbUDhm5ThZwCtPj24U8WHlsL%2FhvURpgNoTT%2BAAiEA8GYSG6dyR5Q9K2FUNoNos%2BI%2FqMDjb8vR%2B74JGU9TUS0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9aG1lqNBfZX02uiCrcA8dCn1AqpKw3DJiXgykyP%2FNOcqbSiEh7Ss02E5x9FTU7C6cp8InmNkk8NmDjPCdzOiQS1l74XETiLo7mGczZNBVJiU5YeTZjr5IPw%2FVE04n%2BwhfVkHBCp75cCSt790OjJM2NyQjDwdWaWFp%2B7aVnCIzmJPbU7%2FNRrTvmOfXY%2FVD99mFc9nx3Z%2F0%2FW%2B7geQLiHAYta215PGl9PhIWikUsf0r4MaXsJjG%2FP4aYco69BocLUiY1S5Tts0FdnVa6r%2Fbpis%2BCv4CkXAYl%2BCFcKlMgR3Vv3zSFVskFm0mEF9x2FDICSmgiUdStL97gjFSQnwNharVbABEKq1RDD1HQC9tzxUCvnAoYZZFBXP8N%2FSAnVh13onlFiC37jcpo9fdw1UPUhfBUd%2BXE7oZYT5rGxfnODKRUKoyLX6Fe8LC5zBEBJDMF18533W5f53EHofhr7ZKgOLXw1jeh%2FiuACuzx%2FQeG%2BhBs9vBUbNeRZKuFIw75MQ7i9uu4qbH8VO6IbSNfAwcEyG%2FlGhu4%2BcqtdUfCY2sJHWnNY04k6xzccAqCs%2FmPEpzdGf%2FrncxIC4wUxvxJg1%2BwPb076huoHHYKAB3A1cTk8aU6aFtmU%2Fl8fvcu%2BZ7IpfCvl7A33d9Ld95U0f3ZMLqFo70GOqUB1eZHqbURjhX7fY55d90sF8UE9Lpb8%2Fk%2BzHK0cE5pS%2BAyRo57EpuK06vT%2Fm%2B745cFM2i44bfYcd0id%2BwudvAJEKgIzud2VDiQJsIVLCDn1s4oyhUG%2FxcKXv20RpnxQzLEINfSFyGkS6PptiJgMYE26eOxhDID6P5uCfRWxYG4yhESrIrHPBlNgWIAev3P0MJk%2FH454Th6XCE7oJqpNsRJhrOPtB7x&X-Amz-Signature=c1d4698fa589473ab77302c8d06621715ef68cace760893d4cf82e16d6e52bca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
