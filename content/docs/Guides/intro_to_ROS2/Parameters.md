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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BMSTFWM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt0rJ0VC2FIJpdx3XFf9SDMwmpC1jV08KzRniM4kJfhgIhAOalYg2JZPJDf2NpHXL45no3HQm99tKoG74R6G%2BRRwtQKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYYJt0q6JQ1dPx%2BqYq3AOtlyNo4AQNl%2FHFc1D%2FsY3YvYL8aXY7Lnn0snHUPiz8llcyeEt459g4Uw9j2SHyOv2ukAHjv24fH59WbusWNR3s7PrzJvMUMwejpd3Mp2%2Bqz4xGgy2U6llkjB0sNzz2E%2BDN5C9uzXnn3poCu9r528bkyP7m%2FR2SGtKCNJm4XECZKkHl9MEMbC%2FD1Ykra4tYZ%2BK01ZkJZfVonTMp1t3VoO%2FffZTHoBja%2BAuyJjiWVkxtFlv8lSK1780cj7G850vvfYu6q5bLMPClLqy%2B9GwP2174QVc3UgvcpJanDXTOip0W3TbFoGMiZEPWGUhcLl54bnQFPYbqT6EdehDn6m%2F86B4j%2FaRGq0xzq%2BI%2B4SjR5o5wfHTAWCARUxrX0BmExwwO%2Fe%2FDgqGhqVpGGPb7ybMNw%2FB7bWUkS3eSPDdJBskNh2RNg17luDXKKM20pcYFzJ%2BU213kt1aHXicul5%2F6cLEe0HAZfwuUcnI5GO%2FN6oZjJYgL8iqFQ%2FYh8XRAvDhObdQueEaqfbqMNCEEGRpndH9p1I1FMBqFsX963Dd5ja32B7HXO9sI5a6Q4b0kNEoAZd%2Br0QygWcKoSTSbdKgqa9V7Qrkc0E9pDmUJ%2BkPlA5NtZlq2kuh1nhyVvecpW1MRCzDQiJ%2FCBjqkAY7fjGm24m18Lv%2Br5U1hp%2BfYb1i2jj%2BNscoQRae4CoSHuPgVYgAn4B%2FkN3XytOPgS8fqJVXrp8gcEsBjcgYl2Yk%2B2JrBxHnHuhOeKCeUG2tfkMrlT9CSp4%2BqpyoKzLzCeHFoykLficUMQdsCavRU%2Ft8UzdUg9Ugts2DWLsJI1Ih71X%2F8%2BIQ0lYbJfPDgCbkw9sgWBOsyCJEmJB2HOTbNAcNGJFIb&X-Amz-Signature=df32b088cf8807296ee1418ff38c29aa4cdf12ddab7ee744e1624f757765c2ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
