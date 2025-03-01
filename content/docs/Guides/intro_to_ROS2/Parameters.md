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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIEWEWKQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIAkRvXqebc6oGXDoop1kokMaRI8DtrurxWcV7Mte3%2BwBAiBx8ONJ7baP%2BEGKkFnsZtk%2BDExxZDTVmm4CqEKweT5cZyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuWK0VgWmKnHTHNpDKtwD8UJulCoUFDfhm1Ov6IwPOlR6zgwsk8gCXPQmQicxSmasG%2B1xywTkAV%2Bt1wGJtCfTa9NhCQEhQZLYLAa8CYE%2Fr5BpCRzgcur0LZZg8eWck4gMnXS%2FvuIkuAJYQDulpI4M%2FBeKMlGagdWtSHjRHGaQ4gPqXABWENuCwXBDhWwGB2o3%2F9LU6%2F8%2FwtamBmj05cvsjdr0kdYOJS1Z%2BXYrYF1Hmmw5kO0gzx3oNXMdVyOCBg6woMbtM4b9ziwvsG%2FxAG5L2vxToft4H%2BnhEN%2BoSkdMa0buZbgKb4vvc06IFTV0ZS21J%2Bw2PssLOvtKSrtPyo7WGnXZlKvhurasCEKCPH1qEKA9T4QdiI7%2F9Wm4QKNvVb2oN%2FocVYB5B1XplW1nObCBIqnwyR4FYNDN1p7Wvf7jOvQz6EA7sXDtJFjY9jJ12r2T%2FknwL6UdMqTmeLTX9AhW8N5%2B1sW0Nqprbs58IvB1QWU7%2FRibGZafRGKT02d3NoFjbIj4EuIANbGF3yCyDtyW4%2FQbs2W77WuR%2B7KTquOe7SqsaneIkytMlXhGDGcPrWS7TPgUWCs0CFLB4f5W7j62UrqJQhXD3%2BbxloR2HoO1KnUAy1g9KxWMw%2BGQr5r04y7QARMqqiWwSxpL6RMw1bqLvgY6pgGaDK8ZD9pcUvi7oOCEunvLKCdgbDGbUfxG8dbXa4gjkcXgwuWKN0UbQS%2BamLsnfLkYkU83bgQN2%2BIBmhEvw5KnnhZYrh9flnKGYLR4i82LpnTR3lMQyif6JPogfuRolAYhpg0%2B3JuC5vCHwd6uYkdCxDFBhnVd7kFVHJ7l4OSFkeIg9lA0qWXyhFhyXm3p7AYVhiZjJsgN4mqz6mGgk%2FfJfgpvTpra&X-Amz-Signature=1d76f980dcae87bdec59bf6d87751eee0164e7676a83d8999bcce1ae55a392e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
