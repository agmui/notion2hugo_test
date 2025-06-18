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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWI7JA5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC47zXtyO0zQ0774veRZKLMXetMeNAK83aTrHcOYnuBxAiEA0J%2FNjl4nPPcp5ENlCr57oamRtntBKqxuqz7DGTaTERkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGCXUTzmXyUWxQ%2B7ircA%2BpLgdqU2PuV9oUFaAba0dsp0NWoVk5EbMtPP4gTq2ZzX5Tuc07AOy6LrAvk2H4qfnAiRFw1ctvJ865kJd2Wfi91S%2FxXs%2Fi86Y%2BW3ImG2E0P1ZBou1qpVtZ2GzfwsPEelEi9t%2BskBUl%2BHdFaTm%2Fz5VDLInG%2B9WHkKspU6ruM3gD7StEXlsk%2FIBIlifBOEEK2870C5tqLi9OgY7tRNA8emGyosiUJoEQFWIOnLursZ%2Bl2HR%2FtMQQ8kqTezgxv%2FM8nk6wccAG8TM3ZVeLvBxjPblw8wsaXMfYqe4SLKWEGUOCBD0M89qM%2F%2Bcn0kKz6AYAdgpfHF0zzoEUDpI8JasBHpGXSHDuw3mBOOKT%2F1QlbUrPegkDh7B4IalmUXYc4ubPGT5B54gfqBHDJXvE5ov%2FUArxnA9VOaadFc8t538oQda%2BhAGTnfA50qH%2FhWAsw%2B4pS%2FyS9Raubozqi4koxpxTJh3qfONjSfxCX91imxePycYXsm9SMuzW4DsBiB7eBlM3J2GbH9Cm3751a%2FLyss8Isnq54j0m%2Ff2SKrFONNa745YnfExiAYwDN9FZjZ903HYlDZK%2BIbK02e1cDa6HAtmnUg9mjfXWAFlExcUxDoUfNkWF%2BCjvNwbDNyDY1CK8kMIr0ysIGOqUBZCss2uorPC3QVBl8QS49kCHpkBGL1ujTWkhIPlVhhYcwayP5Uvhza8mEcKvxlCNmrkAl%2FX4w8KZS%2BzYBBlWAPdczabzHRhEIQarnvdh0ExpH7YLp2RJrjWjdGtQ9UAcmvYrYymmoOiVKQSpaOwUVcTOM6Y6MNM75JAMJMgHVfW0qXl6fA%2FQuma9Cg%2Fn3guPKhJKuMWG7kFq51VCPTdx2Nvts8U6j&X-Amz-Signature=a4dabd6436a161d8716fe746fb53816e957f87ff50e78b1ca924f8b056aac011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
