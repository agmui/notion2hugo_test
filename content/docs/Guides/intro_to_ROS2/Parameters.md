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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEV7KSIP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfF38OuAKsCyJR3vxErTcySexiww%2F7nUOWAgSWG7GcRAiEAzTXyQXp4Eq83WXeZI67Ar9RxaWGIG3YT4ztTXNJHAIQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXdmV5duRWUEf93%2FCrcAw5zFQ17YXavqzVJMN8HOiNpjHvSSgJ4Zn2BN8pTPQo1jvsiiuYJ2RinjwWqIZS4VM7dB2UNCczzTvMkRoFW4mTGm0H0lNJKy9wtNm4QmbwOQODGQ5ELg0wu5Q0xGPpLSoKmFRdqbHQ4rKCaDe8fc6JNlku%2BykeqISV2DHYRZIHCqWf0omg0WQD35cMMIQiVUtJiUZgtWzaxcPmJPcdenYzqzW%2ByWFLQ7WgJrl%2Bdmwi04mQgDCktuuae6BmXCQNAlgmdbccIUnsv3GbVMy4XSTGyfQ8pDoLlnccTBh6ja%2BPkcz8NJsyS7V6O6b8aB41AGzMX6TEc%2FNe%2BvAfw0yB335crBRtH40MpNlPZ1Ba%2B4JJY0vZbKxJ8xStgHbkdZjmh2GBain2EOsvdSCRTBvXrbBY0wXuma5ihhUy%2F89A7u2tnKiLGn8f6R7ddxdz%2BrMP3uUINKZjQPMRI7bREGgsk1eqyDJWTWKDYm%2FMI2dWsE9Pl2iG2RB6qtPb%2BBannSqJFIyxF5x7Q2Wctdi7I09PU5kwYpIVjncXdp8jGMadvvJAobPEEkzJifen32V3yImDm%2B3JgKn62cByvzu7zgEcollSrvKzZQzuYcZqWrRovQewqWLWQXC0Sk6W8kVh%2BMJ%2F53cIGOqUBsl57tTCjMOX7STgK1OvrFeMCmLh4pjXGsr%2BSEXlg8DJhmLJH%2BDl5916LogrwCXNwOV2ZbM9XvlTsmHMAE4QSU8MEKtAN2EGrMQdi%2BLbYKO1OVg4tq3bMDBwAbbeEdgfJv%2BqKOZ7U459wQ9NtY%2BsQ1Gr7uh4AOK%2F6n7SqWTwZd%2F7VGTYRTcXGjUtsaoAL8GYZ4olniuGusjFYL3LoQ8N0RRedUmLn&X-Amz-Signature=b92067250a5b04165b16a276c0e1be047223fb33f289382424bbb5421a58bc14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
