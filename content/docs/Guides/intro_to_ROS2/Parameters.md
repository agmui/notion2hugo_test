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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YM6TUA3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmGsL7CJ1AFFOTcq6w5fHD9WqnKxg4y0f5wRgF3BPmaQIhAMXw5yWfl696Uq5RDOv453M3AzGYxGjsUELDbTuvKvOGKv8DCCUQABoMNjM3NDIzMTgzODA1IgyQsUNZYAfTGCw8V5wq3AO9%2FYFUo7tjSj6eysewPjtS0hvWfAQaG86LtvdXCfGxAoTw49wJZpM24C7eLrync5qhn%2FmDPl%2BD1GgF8qtAUTA3QnL2imD5t5DKeFOnGn51u3iqUnCaURKy3qC3a76lxfvJ7NIcNZoolyRbzygpuF0ryVDLysktwj1Z7d6Ng4sa0mWhknaCeu4twxU0M%2FqsP1glpfgcFUCp6z3rhGXE18rcqSIFHMMiMSTWcJxAGOjgrjIix8g4UDGUTTZg0Yr4lfKvcq8MwfWLd%2Fn3Y%2BKKDjT1hIp%2FAfJ7sNkZH7fZ%2FnzGFr8H5XfS7H%2Bp5alD%2FsjQ59zKr7HTLcuthfpRaKOHeQ7zlR1F%2B%2B7CXY%2BaxBWGmH0UeXUO0LR%2F%2FMYf6GVrlyuI1BGNEdwtggENAVV1sznNkrECVqPf4dXjfgp81R%2BkHnsoAPomwUfCdL8zGZ2UWfiTRHwGuoChUYcsp3ZWZx9qBDWtEt0dk4ckL6Ewy9FMX89b7YoISBDpIRhfh%2FkUh9fdXIpaKhn%2FJ9%2FYDev1U1wj3dSBE3CF%2FSdc%2B%2FPYfCxnZtjXC7niWw0rfsIEjtjduVYpd9HbSrehm9FhrEawfsyL6hsUd%2FYlSu%2B3QOA%2BW9ledH79qoO7pZMdax5QFl3XTzC5uqS%2BBjqkAZBk08PA8zpG875MO7j01L%2FzOCjlX4UAWsqJyywpXjQZKa1fjlNAsNFEZIrD7u63iI4%2FS7uYN9HyE3JNvF03MWCmjuWk6vIMcljybdznU9BH0JthHviJ9%2F1372l%2FM3TYPQV5bVtcdaqruViuY7uWSGEg%2B4MbYCK%2FlbhvUuxbQoCftK8jz2q5IlYGka4ApfZwCIO%2F11OGURC1rV2UZELpodMbRJOY&X-Amz-Signature=8ef703009700be05cb0161e95b39b6542fab2390866253a27b90e554c7be1438&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
