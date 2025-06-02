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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5IXPX5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC5%2BKx0LLpPZEJyvwNg06%2FKcN%2FXB71ubFh9%2FpOIlnnsmQIgMKFeyMHfZZmTh%2F2u6AFBS7kQW%2BOdfREbourvhK3to1sqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXtV%2FDL%2B9zogfPkVyrcA27FF%2BslkCfue0%2Boi38L9XwU%2BYVoBlb%2BR1g1Xk%2FoZZiUy2NRa138QlZP1OlF59wQVmo4i42Kl92z1%2FxCIselLdyNue%2BSuDQLaNaGUE%2FAJPNq%2F%2BCtzAoms%2BxQwYo5ZA41BtWIjUHIWkdwKFTA5EhqHwbBa9WzZb8R6LJLXB3thQ54f1r69%2F%2Bf%2F6MDZAVNC8UvHBAdhPfPVm1ZaeklXeAoFR2xsdbaBpNEvLP8%2FCqx2FXiY4wHlLzOPUfrzufR897G3pUQxeKkrM0hpdw8MByqVRwIO9Y3wBcN4nS3itr30u8lzRmdHXTit971E0efkaGcAsU9MDmiRCtpPzs9hVL5mYccjfWc9U6md7%2B7MoCdF5WKM00c5oWFp%2BxE0hvioD0s2DmfNd53wbyW9S7N8VQAd4Mt%2Fm2RFEYT5tKltW2N%2B5swDJZNJv6NTiQ7%2BSOO6Kj6t49Qv5OV9SXiwmlzKXoDLFrDdPlBTe21l%2F5EOkYBp0uu%2FHfO%2BHC%2FSCsshNgJL08uI6484wXq4NNsnBx7MR4q0aGnAEnZZS1z5iNhFNrs8MWRmvOby0xp5cT7K8l7VnIeMkBFmY9RK0RBwtub8JKdWYXYAuz3%2FuZZuWul5oAwoLPC%2BC1iqQNpGAVVh9C7MO709cEGOqUBLEmBpo%2FlNM63%2F7lyloOr67UhKVU0Nn2s2I7VcZylFfDP1cwZ1aKemvfys%2Fx7c7IC7XKqZ3pGnTsgm2qSTk1YXsITKOD5N63gYRb0Wvg%2FRG4CHC8PDgIAI0Xs5bXIpQnz4lc3ZlX91ke1wUIdDcGBNVq%2FF%2BXT%2FFfFku3qREc0onuMq0x166eiXFCA91os3BB%2BUzjNoR857u3orXypvq2hsc%2FKlV9Q&X-Amz-Signature=6bd912205dd37edfa75daafb94a9b070203bb23ada373095f7b32709f93a7fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
