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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2FXXCLL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAe1s1BYNLvydGIs%2BpMxT7Z%2BfAJk%2BMeES%2B5F05koRR5iAiEA7GSFK2IiQVworIdcwqL8a4GuDjGAUldoHIyy%2FPEALgMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC5dyxu3yZzFHyigBircA%2F87evuIXeMxfXdNzkEpz9E8pH6kStjMRamqstfq%2Ba1mTVk%2FSaqbGkKGMOsU6wHTzWpNgeZr6UIG9RGrKo5DbkrQZYYCjxFl4c%2BUEIPnbm2i49dnnDbHvXRyC94vk3OxYtmfilqGOUI905cKfq%2BJ63agc0R0%2FmVLetwDhOBHACZ8JhehAL1RfgZHMQkVdxkgLByLAPoVreTrXxgPiWF0bOl4PFd%2BWSoUHnPg9MTBWKKi%2B%2BPZIG47QuP2zfD7Etne9lyoii4p69Wc1pl7hILOlpSAopW5U6PTxuqqB5vsIBX8r4eajCWmfL6jrFRTGXT56S2jDHw7Zo7d8sxzWCbt9ch8py0DNL2wCJf4ERZcheQ8DmTThvXxujS08L4CM0P5U7Ldhd25xbNXWtq6u5h8idBKKvPoOxNGfoWdmcB0ByOEbN9C7VkV%2FGBNwEmmc4Lrt5NhxtMl%2FNp1xBWm85KYgHNfI5XvEI5wgvEVpeXGmEJVAJaSAvLPQdA1zSKMcyxUeTAfKlkSyR1bldTkIMko6DeAQ6yNcqW9fKYx9CFb9oMMPnAfNxtCDJIukcS7IByjnwgz25rmwkXAip0GHbuek53wnui8BkOzQFZ0a1k6sJjGPafiQHeg3ARcqeuZMIz15b4GOqUBdWtccOMhLbS2nY8e2JA0q7XPGZEcSnvuHhZW7%2FKyp%2FtZcZkZIGhp%2F4kLa5CRl2scdVHYj7lJGJyYbJ%2BOWdLRqRZs7AG4lz7j3aIimjwkoionr32d7gwBoLIaw9J7AT14Ryrhys1gGITJ0IJPgW42mCl7J40eMAy88N383z9wpboe3rlB6o9tKHQtL6ckqG8t4FdwjvDBk3sFNOx3EZ2p%2BUGexUgm&X-Amz-Signature=b1bdbf1e8c79247c1cc5e893d54242021418498305df12221b8f4d020dfad546&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
