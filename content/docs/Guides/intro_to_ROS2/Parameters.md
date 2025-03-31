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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4RUQB6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIAgGl4p0o7l2pB6k3rnLg8SWdxiXM7dYJ6Cq1ZVuWNfAAiBahr7gedSZ0D8Lw693Ywb%2FnpBpWCovLu1%2BTSGiwfdsZSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyZ6mhpbBGh86kaawKtwDkyfURNyd1MwP13z5l9nNfMrCIWMcLUAjGh7whKXi%2BqXDBEqKNJwLIEXEEZuyQ4Kx%2BSGPjfFknkG1Z6FYKWe33%2F3M4LbQgT0gWqUJsjTkUrTx5tIn99g%2Bv2E6unwIJZrBHBAbXFLcvC%2BQeEWmha5npRRrLjwFrFX6kiFYcA9QVEWPdSoXMBepLQj%2BwmOz%2FpTSV%2BIFeZV1kMCzfMRtzthkbQAlvyITb30TX0VIbJgeafjf53kiXulFXU5m1w470ohWxcPsgM1h2rQmW56GbHEeZHJuGWWwkrvSxLm%2BPmvQXNgglAbQ%2Fc0ChRiYB1iMzUzjV%2Fn%2FIndrBRCstvcyNiOxd1qGM9RdW0%2FsttsmVgJMtAHRUqojXDr%2BJ0iUEgUOplRFC7pxX4Htbw7oZW7U61EciHhVQC8%2FrpAzWC4pNw4LFMs0m0gwBGD4LvLZ5aKsY5aVt8JSWE4spQ01sD9xzOPz2vgjGdRWFOxVGlnzjJf6xbOvjWUAkvsevHVwplCdOJBKvI%2BJs19%2B8XCZHB9Tcz6m9xFKnoYq4%2FkDssfscduVeKJx%2FHY3gSXEDnEJK9MlFq3eVIgsngeOX6mlkVzVF89cNmQei4oXr9%2FoGnjYtqJDBBlFZDHPa5NyRJtHrAYw94GrvwY6pgHcG8p%2B2208r1k11qBnuZy2WhioacFo6LFdefpfIsnKKbDusEkpeFuDtk12Y%2BxKMdksVo05QSjWLbxV%2FvpmCOU5KtDIFv8iS7LNMMCG6%2FOfT%2FNwt82Tanof1piL6FtCdOdLFyTJeZRxdUUCqs11Hp28ITG8SO1tj3gAfzqV%2F4C4kFbuKSbk0X45afFm6yuzF1ecjnV99%2B8VtrtzTz7iiqRkIupgXCJz&X-Amz-Signature=c5017c4ff41fade943126ab77146ae538f00ad89b9c316f72a463f29608e69a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
