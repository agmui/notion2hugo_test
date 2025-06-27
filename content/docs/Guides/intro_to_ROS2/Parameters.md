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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK4LAZKZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChnGnBFd%2FpzMW0jZ2ArI7%2B6hkNLZzzPs%2BZ6lCPTmEt%2FAIhAPJAAcIDJfLfYXif1SS6sC0mY%2FWrrd%2FnaRdhmfS4u1V1Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwLr33fUwcPGr4vEhMq3APNh1KG3t4uynhc4MbbLsO1CJWtZVyIk5RM3IHuAu7DU1oZdr%2Fr7zHWHc844ZckyZ%2BwraYEW%2BeTN%2BkaqMMpKCOXxqAtJGiZdf1tX1mE2XA6TVj9T2epqKwwq0ARiZunzy%2FxdfYW%2FzQQT2xWVqx5HIP1ZYE9MIpxFkmJVmo8f9RU0RQlr8by4nK9KqqBgSrsc5TXo96CF89FtUb5grSSR24NRML0RiUO6K%2FDzJC0qjKGgLnXKv2VMBosupL26svjYjdzZlpmznbTTMSIYo8Gy8ioRQNmj%2FbgERjE6Qe1mgQ1Z2hGUIh9m75QVmqhWGED4JByN1Z0skFTDxDcp6yri7gL4Mts7lLHA%2FITHrDg7PeUCIS0OOYAe%2BM1sKOCgt7nHr99MUHsv5bN1cRtqkquc4ASl7oW6Pzy3XeHyxiDCqCSKpRHPfawoI0loEf2nILsfydtqplwKlV58hN6Zdihw82L0qhSeJwNU2W38eYyxW1U68DBIclhMMcUchXzK%2F7iy8LEeb3d5Bd4KAS6n4DVOR7qiFcw0Oei8wXSY4zWj2sUqDZZk2wbvand7yDMQY5zj8Oz6HvKO%2FJIQx0gV1M8%2BLGafb4GIje9tJ8264oBDnwSXWDwH94gV88mmUgo5zD%2FrvzCBjqkATP9gqcDDvbM9UxZHxswOFXGOtolRXiz0Ua3o%2FUAdZ4oODBxMUFY7%2FArAVRVfMpucw61h3sOmPTfUdUXX%2Bk47Kg2LPzmO0RzhXiJ1iLHwqRpQRtPJlThdfr92rfxcxbAcmww%2ByZ0MyoKLqB%2BDUT8EgkG%2Bh2BYgsy%2BTXwKfFOJGiq%2BgLOujMKUPQqctQW3CEDKmZRAiuirMutSlylKS%2BYhty9Fjg%2B&X-Amz-Signature=b96c743cb9d6e13e23a275a80f3f6dfa613d17e03d0aa12ec84ac199f9181294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
