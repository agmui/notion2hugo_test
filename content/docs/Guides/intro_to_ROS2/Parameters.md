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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2FEVEDO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgy9XX8IgHdWLJLkIy%2B238SWb7LdlzZh5cah80qRoDUAIgWEYmU6wpO8SVg1Hqd8hPNRPiMmmiJkpn%2BTAnT%2F4edtgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6F%2FZujVKI3I1jlvyrcA%2FNRISHAZJXk%2BFYVdxISg0N7LtALsMRw%2BX4nzoILFPciWHhhZPW6nU4eQsVHbkemd5QKnkh42qNMV6dl8HHk8dz2MuVgkVLmFTlbTFFZduDRKpi5WFXWkRtDATipdlua87z0CB8XNBhR522qROGnk1186Oh8NHm6Ly3spMWI%2FSspFv2We7PwnvI8kxPhN23yBTTcp%2BwpFgsaOZF2xMAIVVok1Wi4HRPFdkhju6VwEWv6t8RElSEaZboNyDcApPSs0%2B56w%2FV1OvTmr1N%2BBy%2Fq0qqYWmabEKekBiWndIOLsf2U%2FSiEWNv%2FL08DHpHHaW2FyEmouJkA0E6WxQDv11MuihuXtEDre%2FkpkNKRGH2Yth%2BuaHfUdIWWYNRfu7v%2BbjoYcTfJrNdpxHco4WBQeviDLZTahb4CP4JKLhEsRyvtLt7KAEmSl9lsvD33BqikTg3lyyYybAw4JSCzXfh6sx0NkMgcU63%2BVEHADuVNNkN9XQLZ0WoOxAQNrAl1dIZHcLBYxs18jrzMqJVSQYP4q7RVlrr%2B5v3PbJDOT0aSVaeBFgERbjfg9l6ZfRhUREUs8vza%2Fpdfwxvi8O0iKG8GzuAextC0pBoXW%2BpeCewpCxJq2lmA6Ah9y2qfRrMTviNjMKLwp8QGOqUBN5INPdqNlgBEWuSDZ5%2F7UQ1FF3w%2B5F%2FiKGdnKwLx35eHqkdOw6pJq398bu6ucd54CfAG5RAoxCrwZIEYuJ%2FO62mlD3y2Mvle3%2BZEJjlirn35v0ipt3PZmrMa0CbVo5jfsq0a0vCdZvDd5GhZ774I49tlGiD%2F2Any1K%2Fj%2F4ww5MK7QKv7QJGg%2FwKpqlw8HiO3yUPYu9jFFc5qQ0z94OsGa8q%2Fbo0D&X-Amz-Signature=2c61e4341106ac83b7814d652051d3c2a757ae832710abe853e0a9be9257dc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
