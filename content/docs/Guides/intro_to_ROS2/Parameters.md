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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSCGQVAD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDotdg0KaAvenSHFziJXVblyQ735T%2FX3kQkGaj%2FW5qDHwIgDMRtt5vwHUHhKbG4MH5gVhRo34l8hJ%2FvQS2RY8HQQPMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGjnjpqU4lTnBr9%2BPCrcA%2F6U%2BwmG1TpReCa79m4%2FK%2F2DAiRk5crQCy9EvvA%2F1MueDbCdThAIp2DCzohV79NM5iRx5P%2BDMdoeAvntT2yWghhh0TvLwcMy8Vrv3MouXpA%2FalPBbwZcbjuiN9GAffvoxc0cOV6EVPHrSeadr53KcD8HGP3RLsX5pfNvuUTCn050XRipACj%2F%2BX1DQNTaX2VqxJyoww1sEnI7YBafVr0jzCIPP2GSDS3IsroRPZfSTWKooiMB2j6NTD68NW8GGTNydWImJ%2FpDwQY5s2T%2FjDo8ZXAIv%2FtUPCWEUKy1lD0YUKcp9KHnBVdOOqYGRjkzFcyR5Goh%2Bpf%2B9PjquQneStkMoyMt8wZeTKyda1H9Iey00aYpBti5WtVZrKV%2BZXFEr5bIDlW5F34UV02ArDrlbCheSfOhJs4wRb1KfvMzjHu5J6x%2BknG7lQXLabfZEzitYb7FUfZ64y%2FiQxhH3%2FjhAtKxjA9zTUiBx1N50lNH8wqKSe1%2FrcWePv%2FJjPxENZYV%2BH5OHIKfdQj3%2FvunWA92iVuf%2BnqntGUM28XO7I%2FT0Ssdcox3hzPDZ0PkgBPEqn%2BzkK5ZbxAn9lErUYCqLWIlxNXW8zUBoa8NBKohC957kLAvkTxS7TIgKpq5CUCaN%2BkoMMq35cMGOqUBFPVmyT4rYYPdBusVQHTrxhDsU59s%2FSG4tjgR1OAM7V0myz15jsF0c8I1587uUfJjOTdhccnOoK%2FTx0Sgs1ktgoK8XGXs%2BIds%2FhfPzBSsQZOJ7QXd4MicMMNfrSnXHE0vm6w42eOREmMBDG2MCzAshej5dvB3tHK9rgHQnZa5wFshn7GuCgLBLQF4yQIeONjQ54b0rZ%2B6h2mZzk8Uu%2BGJOp3sXWDY&X-Amz-Signature=bfcb0aeaf052a0bb35e7e7bb237d2ed4fb37a93c9f346f832b0f26894f9a4c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
