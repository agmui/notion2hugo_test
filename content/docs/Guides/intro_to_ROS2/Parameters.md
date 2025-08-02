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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGHX5X6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBD%2BH4yvADfuyeDADD7Oaj%2F0l7bz15VgFRDz6m16GgpqAiEAxb2aF4sm7JWJKRv4eKi9ouemEOCfLA%2BGMM0mpELX%2BK0qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVsb6T%2BEPR1vlTmaCrcA07rHAoTRsd0bKEf%2BaNEJbIxf9q6dlxhv0CoB4QvNpoH9IXTxog9q09%2Fs0veCJC%2FrVpcVNqoLqj%2B8FbDkTn8bkKuR8byPJNv6ZughERbU5wyGdVjZgTBh%2BIGxKNjSyu%2FcWNSZ9Y7i7Ocm4Ax5ZQuXxrQM%2F%2FCWvzqIQVIE7ARWEbKMZexLXY2oKoKXbq4xED4cHR8EEKUU6K2D1K4Zqak3kedHff09KmFjwrgQGKevo1PBbiP7XwfUEafic0Dq3QWt4Bekj18uRVSJwPhqYTnZIlLzOyvFYaANUXjkF0PLIfM2GGd1KDgGAtdaFxbPR5%2FUDZWH9ZlwVB7XLWMcPA5DedJAd9cjWwZKAftPnIrxmO89HhbFL1YxsPNfcve4L08STtfvvRx4YmEazFb%2FdyL8cEfbJxgwsy2gfynjI0%2FWXCvHYN2wnby5bsBlgTlcrsQ9adZ5tQMTqRHlZYtuzuICd8CaRIBX9zFS%2FZ6d4SYMu%2BYRvVXJdVGkzHrs7x6JgM4LC2ZOMo0oXOoH%2BGka9GihUPnZQUyrRjqCdPLFEvg1GPJOF7iQBId4OdMfjbChyqJ9LalgMlK82%2FFs0%2Fl233cGo8roizd14PlA%2BFtfYGdmalssQL58lAil1pD5jIMMLWttcQGOqUBKn2ef8WQFBrXFExGe0uleRMZiqmrXk2ThZYcAQ5xCCd67U6V46dwB8v4x3LkxXJqip64qeVKi1nnTu1JwsIiA%2FEcSqozpiXzstLcLPhQamWYAw8wB%2Fvdv6vrz5Z2Flaxe5RKMvoZ%2BRmxbtk9cGUZJSEe6f9cmFryoIMgE0sSW%2FBmMc2WoIaxupEMKKsD3sOA%2FGkJE9ijWGEfXIUKBOP%2BrKB6Q2DP&X-Amz-Signature=ca6640127349e30ea1916fd2b086b5249bb9f4e20464dba72362d429e1e3b5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
