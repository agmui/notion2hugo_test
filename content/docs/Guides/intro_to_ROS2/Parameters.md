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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEG6W37%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0ad7gHMg3kGkq3AWJw6OaIGgTK3UQgCEO9OWaTnlkDAiEAnlZm7c%2FZqkb3mf67Fu2Ri6p%2BqrcwevuEz5b%2F0lnPPRMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5DHnSH3MySfI2cXyrcA7Z5R2KevUd%2BDLnW8sNb3t%2BjQ8aztXAjbBtrtu09tsccy75XNDGBbN7JJZnRJ%2FcxYBGPED0at9h02ztOheOaFR28RbxHm7NxZo4PinRn8%2F9Trn4SzKaqyLhOpjnSAFpeDsmv4yErvRtO9qriAJjSR4WiUk%2Fl6IScL9JVT8b2Of6%2BnSelaASsSUTBJDUTYPnD1bIvRv28AbVBaD%2FkE9Gzkf4umVQlKUvJvxATivgc7clIq6EgHK%2FVCumHwojnS1gxkguDJt4nOzIehag4TIjysnMo1JAkyuSeezfbWdXqk0M%2B1NrbhfCDqOzhQvwFL8x2EzbxQKMvX%2FvR%2BhR10SNTRbhq9DOomUT2Lg7iqzZPcjd5%2BEogf0F0CTMhUEO0X4hFnq2B7SG6l60sBVEESFGsutFhighd7fKHuE3%2BCm8sV%2F7lefPRtS9cTzoZslc1hDDrTrQTt88%2FtQIuER6F6RI87Mihivu5QogxgLTghqOgub%2BERFdJIve7b4c316Opiw2V%2FAvarGX11RkUaVxccChMNNWEhouTY9%2BLqZYCjgM1oirTeatJ6oS1v5NA7H33jjy6%2Fn6b9aPGGhoDvY3X3cDGZ96Ve%2F%2FBRxS4azxEXkxacnV5wG5d1xWIlYkAUK1JMOCtscEGOqUBNZZWYxRZ%2Bg0vcSZ5B4rk1WtnYSPeeLxZmXXVlcMPl5bYv5kMZwFldWKQL%2BYBls5y3JazZgpcecE3bd2zfvZ3zyJ5qXztwKKEnTHfSmuI9zXIioqQDdr9TZMNlfT7sDx6zK2CGz1NLX180heKsrMS0UGADqNyvW5WIBO3oF3B69oPR2HjHjpZgJIBTjzXdDbaBovl8MiY2r0bURMnxTyaJMxz7QPD&X-Amz-Signature=1ee11e9f1bed371b35ba8c2ceb6f49f4458828d09a7d5f85b7c32c8c057b5729&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
