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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YQIH72%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIG5XVoWyfJMibPz%2FQm38GPybwGT0uXrBsZqqhgdJD4%2FkAiEAvWnldT9C%2BxleNHvFGaWLBK%2BNe3ySkiyhl6jYBX46hSkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGCvtAPFG1EJ2eGIircA4HmBTcxwg3HW6XZJJ3tOO07tnT1BDwQwGLe7wMNsQNZqZpcz06%2FcQcy7VkWbmt5c7UFu9gVh%2BFEs6AQ9i9HhheHTPdleRRsM6NqUdF68KXW8TcHgD%2B%2Fmsy4JTPvpGSoK6PcygxGaalnxN1m1V9g0sU8G0fMLjpvK28%2B2HI6ASiFrFHm8OPZJVBxyTp3%2BBwuMDv9XDQ%2BTNCZyNXTg8mdUUqF%2Fk9NPtbiFqVK9eI6KvKgyvcamN2Peupdmm1SSboM2lZfUtQAXph2671I5%2BE7M4jpWG9I%2FbUDX4Vmv7F76wMFDg4W9wYi5OrvxS4PbPKXJDqy0zdnsUQEAWknU2NijlG%2BD%2FA0luPLQG8o91mycQc1t0UcEp42f1DKOiivf3R3Q45NyzNWYzHLEZ4opyxko33CLjcnpEEMEjPsR1MGsqQ4DUBebJDQMj3WIshmF0ITVdmDYxEpL9DavoDqDoDNQYqQpTwY%2BqrADYR8K7s3gtSQjMkgBfraThexzqrXJP5XufoqqzcDmI5B91vRNY1YDqew%2B0aFbMgp4M6l20nKxIF6Hj2LjnB2ZFn%2FTYZRVR5AeBcPKrpz8HmRI2Sb6RdAiy%2BxDWwGvnGNTHXrvO3VKRHEm%2FvHkUcbZA4wHGNHMKPqor8GOqUBcmoX5%2BVJpCpBD1rwyciURowwb4dU05ZDPzfeI%2BDT%2BXbAtpeCuhkpvgmot0eg3XLsmN2jzAc8jXXkTP7nlT1gSJmTETUw5d%2F4oaqxrAfK0RrTkYX8fhl8ot1zXFCeow%2FT3X7s3EHwp9dW3ILDfpDvi%2FogyqjbhyicEpCm8QQbZ5GfntR9uUsxjGlqp27KnrJ3ktF211AyrvcWAgrtXWu0LJUNo2rN&X-Amz-Signature=2ba32588e60ce40e69ff5f41b04f5339f0b4b0875e5255381315d87ba14cf926&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
