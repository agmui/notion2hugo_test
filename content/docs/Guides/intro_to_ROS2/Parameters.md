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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3CU4BKS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUqJGiXkEE%2Bixnt5sZjT8Yb8%2BDl%2B5xIQN72NYRc9K6LAiEAsZFneLa0SVZhRMoaUjLyYOmRiL8idSuMuqM1%2Fc%2BO2Iwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP%2Fr4x7ujCkBWZd1sircA6%2F6gxdHjCG8jzmUbK40o5UuT2tQyDBJREi66GnkGIS5bJ%2BBHz6prAv2itNjneiiCqzODex1tEiwFCz8bHVaEE75z1OEebppLI5kkc8d6sD9swY4REyuV%2BRhxN9tZ9s9RYsBV9Q2tTUPnZoBb0yvnLgfzh7KRxeS6XPJMbiIW3ddalw1HuJs%2FFRtKKmmcMKlWq7UjstvAFmuRKTrl96T9%2FKtQy%2FJvlb3B3Ye%2B8PATZNtz6dnxIaD%2FAL7Jqd%2BJ4WA8epaX1QXD623GAcJExm%2FQfillJYVE4mNjwiVo%2FQ78J7tWx3cGGr3f1zSObnW9jSX9n8xUbs1bhEPxaiU878Rte7ZJw%2FbYILxNPqkJBPDNe1CW3IUAnuM201PTUXAtjTKu0P3TWmyhA52eKlnFsy%2BRJ1zJ6hW43qZJMvjFZTEt4Qlokr6bvVTl%2Bk7xPNrZqiNePoCiv3Y0MKGE8by6S40e52AfwRZ3BYGGgWRTfsAgydqX%2FVD2JznC8rnR9ZMIybZC2Qi4c9m6jxAH7I6J7Drn9qagR6G5FbLx7wkDC10OiejDo7c%2Bl1PHvqGOTaVaA1SAXGhEsjMjfXMeHT9YQW8YV8i6Pgnj%2FmSVOFnRD%2BN%2BIhDEFazJQuoc3BGkHMpMP6kk78GOqUBANtcRH%2B5feZYKq0%2FDm%2FHvBxkEO5hvyMUSncEGKaAdbSe0RFmI9GE75Vx9icdSAnWPg%2FbsGJyGTI8ZSkfny2RDkFE6L3Z7LksQl1zf45lBAqg7Zfe7sNgLjIlBOwLBbi8FeWmXleTuNa8e0uLmEklo3f8B9QTTHLdXTi2x1k%2B7wPWSJuRB4iQxwhASEPeAL7hdmF4Xx%2Fz5weCIwAfk%2BBkoeD5R67f&X-Amz-Signature=e96976c5074cfcad553184b4e9d6affc0aee4765e8d0aa9bdc24b2bd75e95d68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
