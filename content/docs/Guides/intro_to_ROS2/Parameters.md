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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIVBHC6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSGMzkyDVCh3YdFMeLzhRRv41jXrHpwLsIcmXpOo%2BA7AiEA9ePoZwGbC2hUTSJMLS4WOfwuhWiSdYxHB4L514MBYNkqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIPoOVDbqcvZwqabCrcA4vcKCpd5Hvg4BwpaTrmdiJ1x13flPgX2yWm9%2FjxTCu6qZnXIh4OLgg3eZE%2FYxzhtp%2BiMr%2FMwyHwYtf0Nq6pEni62aASIDJrFfsPTKGGQSv4d9e4l45%2BbKQxbxzKnGSAy4547QDMURqVa9YqBp99Ynk5DqHF4UyZzgiH%2BIbFGKUkOp2D6sn1bojOte%2Buvy%2B2dU%2B%2BAULNqMbvXiydKFZrKErIOfmDEQl5R1NRndr0nkW76CiuOSubTJJeRaj7pEKYKruVDqvtUM6kCBpbUNbDzl0VUUKd8jAAhcW57GXJPqgyfb9E0MG0t6We%2BSzHPZ3W3dMXYDnZI61FeQnJg2uilamINpFYm3hSxWnYjPZcL5zDiLagl9uqaCVFRrbUUqq55vsFXfEY4m2ZpbyAArMAbQq71tuwPl9zvM0q4VM3SfSt9uyhfBNKnCF%2FotWsOphNzLmQ5a%2BPh60S2mGmJ5%2FZATj7dFwbkvmnoTPQKRBfZtND%2FDpGmzH4gwuuLCDBdpxtmv9OCXYk%2B4c8NdjUQKODeRztzLDCTaUW3vBtGHtqoqEPIGxnTimizCdrYK4gi6TWpWwdZSIpQ%2FwQQpchLIOL4HzWNesYxy2TBF4ussppVnJRC1o3H%2FdCHb%2B7NZQmMLzaksMGOqUB%2B53Xg1zKnrPmyPeQdYwfh4d0LaKLzInYvq%2Fy2%2BmH77wQwFLhNnUsftpoizdKP6ViDppCFQGiPRVDddlce0Q4UmD9kq79lRFqByxy9PoafiHB8NK9O%2B8c9oW7u3ixXwG0rH46SYzD7pBbCRBFAavJutsd%2BtGxBWqahkKld6TJDwqkd1fBuQeMfgm9JdNkVTF%2Bffcyn%2B79MP9r293Atd6rDnPrd2dP&X-Amz-Signature=bf38464266ead87c49724a5f4fd9d800176ff314832c96faad16794b0848005c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
