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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTJWY5C%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjmE1TypwXlBUrGyRLI1DepSOjD9RLTflnlzxAHCtEvAIgLvUsrEPzIQaAqiwALwsSXxpcLxDfBJgqQ44uv9sTcuUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOa3zymfGp8KJ6w9HyrcA9KinMbCrUL%2B88XjlytjlBJt79w3sX6vQf0crwjn13F6Ol2cEDzZpLFCgkiodhefFowq52wN%2F%2FqGVGSbQMwhifuvkEZ74imqZllNgkXGNOJ5ECFTNAxUmZlqMvfJVVeEFCpBiOeMxTU7SvqaDpw0RLBU6LO3g%2F0V1fowfEqIiPqrzJZrSVdkBikB3RIgBJ8b92HC6MIOEJlk82%2FI%2BnFE32JyfTP3DJqhL4PA9Xwr3qk7PuFmi6YP2Gc0UFKC06gpVaZz%2BN89Z2YsfPkgcByN3%2BkASTAG7rCZy6FU0RmMT9J00L13o7RHfoJ7eLD6BFQIOKYLJoBuQomL7IrxYbD8a4UsLhKt6MXQkvMbHyNvDPe7MT0CLO9c89zmea8uX9DJOXZaGI9Mzjbo%2FD6r%2F4RwcUhP1I1EnJwkOYOiQ8lLHAg4hw8os5cPU47ajt3KPAPwwL5l8AXB889YfbtwgrT1hGmuwNJZ%2BKtG3SMv1kXRL4b4RAAT%2B2L%2BGG5uMl%2BDWIGfpUXYOc%2FxlTiHW%2BgiPsC%2BRHxQEr6NO42RWR76AMHD%2BlNqnMev74Y4jsGwBLZEBcHN4EHQxOgwF6BQuxvqZBDEs0JNrBmug2tIydtbvyq2naVCRC4Qyofpf%2Bg0Rw3vMKqr%2Fr8GOqUBedjslkG%2B4KM5vuClmxVCxY5OsAU9627YQTznB%2Br0pAT7Qe%2B5el1k%2Fw8jVvPbvqAT9wgDCiYCSMeYJmrCHQpyD9M0GC18v%2FX4XeO5IA%2Fb6v8YEgA8Fg9adbCSXxpF%2BHg8G2vyGPyvTrpIe3UNXTuWk9fI150V6sWtIb6e8Xb0Flhh8fLz5byC1P60X1NDtXcvBDYM9kHRjoniVZdypn0aTM5bzNy1&X-Amz-Signature=94931fead34db9bc3726983cbb2a5199e1a87dd47eee2a8a5f18c72d27b8b813&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
