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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKVNPBA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDQpr7IxIe7kALbadIdvJZRFudWv9RylqJ1sP7O%2FL2KHgIhAJo%2BqvXlLzmW65vyE%2BGtzx8QavZBI%2FM8dSyx86jDuHv6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXZRR2iwiEmX6Y6SQq3AMZKXz2A%2Fdrz7J5i%2FTAV4iDzyPN5XgWmxjczgbdprPbwcp9KDeM%2FxYKPMZSEVybUba2iO62yxIbD%2Bbn4Kiq42JGTQLRZ52ZHCkF4yytmmKxBFJ4eeSploRdN1SKYMX%2BlvkSpEsytn5FlC7M15D51uU31marUJnv%2BTmCV7QvQjPVxFVFFmFwWPfgkw3hQzwqdJtmVx%2BJAvle8R4uGlaScAhG9yLf%2F%2BuAl%2FJrmOUAU%2FNrOvSF6AYAwlR1RP9Mmm64XpXOePZb%2BzSt8nSTeRFJSbpOSZj8czo6tQg3xZU55ElW15BmDxwRW8A%2FfBMPP2rQxpilaUFwEVL0mDX%2FHhxBpOq3KC9ojGVVix2IqicOdIgEvhZgxaBEqg798aWwDPe0KMwGz0t4q8IEvCLkFTTx6jWdB%2BuPdd3q0mqKAh4aVTxlx5W5KslEIiw3k2Iv8Le8R9OE6GQcICEqvUx08JTMwuVa3AhDAc1Fe%2FGzJ7wHwS3EP7ENEMviqPIw2wnxCM0fF7fMUmddKCrOMk6YiNkyOZ7cy2Y2k5h81lAXHDWVw5Gjo3fJgegZL7TDT%2FBougGr2d%2FBjim0Tb9SYlK19lmzbQdCVdJWY1y2BNh4wLpAELyNz1r19QEz%2FYB3OzwuRTCx3%2FDBBjqkAVnBhHHHr2Rds9XAee7a7ZsWN9W7eYrek%2BCSV6oqQRYpU9OnM6ghpDc0mFvD%2Bf0hQJxZ3NMG5ElcFWjIoo%2BukJ7HRNnikl9UKXQu4hxh2ih0cUS7bczBBBe4vMMsiBSjQSuulom1te%2BR9fS70a2Slh%2FZGfLnTxS8qdZq9TWzxU80ocS8rOElikjdZrHYLDAOUPuqFplMUrSyW%2BiHXWZ%2Bj3Y6326S&X-Amz-Signature=2d7e5545c8518c24c054c55c670cf8868d97ef14be82fc271e2a3a93556e2836&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
