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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJU5AYC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGHKG4uU7tmDcysaOFc3vdmewL7zvL8K1ubFAtAuMWqAiB0umv5qviZV2ORc%2Fwd7TnV3avjsF%2BhjsMO50C627GXFCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMBPjtwvnwOlUBDpqqKtwDTswClX8qX7I0jPbqXfXav3KXeQAC1iBbW0IIAku8ovDL%2Fvpxpm74xwu1vT7dCIOts5BHCjcIQmM2G46%2B9s7QLRQQ%2BJXYuFWJ%2FjkynwUiyuqT5LmqzfFzT3C%2BxvfdxXM4bGRvGWYk4xsXrK1GL0NZikxa5hbUh8bY0j%2F%2BAcpcnglHfN%2FmyPa5%2BqgzZNUhgFYFbg4BcvbYQ%2Fv5qjcgP6mlDl%2BZUJuy4zt9qADQ5okEneWDzA1iGEeOArMpyB0jqPSGwdSWQEjrV6h7%2BFrhfwinbtzZqWQ%2BzVIlhll0t2fzwhojk%2BzEmeeN9Y%2FcodbmkQM1vMnZnt4Kf5uxOzJhQg0cdKsgXZgTsfhWAZoEKFHNyrqr9NYqm7UBXEFCXLwVKzPRN18Of1NOrjkMFEeiwTYl4HldliOSPahx8xTaaYKonKuxyWsAmIVu4Fgd6E9HJNfn4txR5sdtKFfsEnO5rP6%2FPhT%2BfjVkJBfR%2Bcaiqe%2Fd7ATzf4Q7ZTJZ4uY8Jw5XAg%2FZvwEZd85EhF22AeFdePr0l%2BveSe0uQL6wCuRTOCgcFJ4HS3WFqOflQppEPDVSxmMSiJfH5099QxnevLqCP%2BMF69FYkBvpm9seSr%2Ft9YrN1zWZ%2F1VPIjwbabH24G4w1sO5xAY6pgHDqDNP5NKCWx73lsXfW3GkTUX93TVcI24KS0HHzBl4eKa1q6X6VlJU%2Fdz%2BJ3pF4GotzO2FbOK1UR%2BC5uVyDVacP9ittKd12tknXo4bdACuD8%2Fq77siASCfFi6pTGnQ3aJuFy51RILJzuufvlbypTH26B7HII%2BSJmuZlaLiiW%2F2a%2B73gH3vQjAKv7y6FSC1qzjwVeF%2Be0e93rwGJwIWeqhmQfvUBsUK&X-Amz-Signature=1e981af8f5dbc7f321d43d025ed137b581adcaa2bd8785e0460bf0e02e7a94b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
