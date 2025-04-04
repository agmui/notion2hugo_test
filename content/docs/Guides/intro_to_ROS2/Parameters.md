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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656PQH76O%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZwe8yqxDKlV8ym%2B8PuUAZ%2Bk2YBS9%2BsHseyyDm7%2Bq9ZAIgAz85ixW6ZgLirowR2%2Bwy%2F29JzV3kBS2swiEUKcQ0Z7Mq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDI9xSBJpvQl%2FYLuCYyrcA5mNUSVKF7c%2BiLkDQCM3ZbJwwqwf7%2FI3y65%2BW25AqvvUs%2F3IltJomZKDWML36lDMJh7fR7zrS%2FEiX5oSBgQNr3AwXY%2BJWR%2FSey%2B%2FvRbB2i%2BDSPSPToRz300DT%2BWOvNpPqoR9VvZrH%2F9HqIbHnQIG9RyiqLtUhCwKYr9nE91NYmnggvvPYVV7qjghifGwISHy2gJBc1nAbGtUQsUIK9rojhWQfxeHSUE8SPQ5HRMDoFh1dZNIzc2UkDzFCpuQjoJvwND8lzYAg3l2brydt8IokKvqPi30VFc2ybOj17kQL%2Bz4CahLtvG2ssOqAsmc%2F8OAWJHhXp%2BjirT6eJoc9lVDZa5BPAea5oY0lZjOKfQOWwScHKpRyWcIgN7fd1pC9hSXXcKyrSWqQlQucFWpLYPBDDFzMP0pRuUTcLYYU16Pp9n%2FOhmTuf9JSeLt8DX5HPY0IKtRhHrWnPvf%2FK51iM86xD%2FBu4KWoHv7AUpArhpI%2Buf9QyUdKpKy2xiK9x3TUQJ1CK%2FUIQZI%2FZgGKwR9sGg9NRQhrnf5nYPU6%2BGtEiX2SAXs7GYGQOkdCudPUqBh2vfsAf78bKKV0iBYd%2BVnpvEKEsyMSz3y9y2uSyVYmRDO3izuQmS5aZXr7gFSYMMVMP%2Fjvr8GOqUBOMMffyjnqPLRtZknb37g%2FN5mZNkBs3t1ZKU7WlBQfpFt5Pa%2BnzMH28QIG5t4YNqptrYRVtPIZ22PgUqS8MOZXSUHADDNZuNOACSMcFIYm2Y2th8BQlPRBvH%2FjhpYDQq4htecV9Uw8emV5P7sTU1KgaPZ09ObxFbUi7%2FPsCIQLik5WDR6JMJUxWpfddZi0KciJqODgEpFORB9IS4qIYtWfeuK%2BGgs&X-Amz-Signature=3e53da350d91e9e680e5c6645a8b6c0c76286ac7d4e169281209f2a2ce4bc8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
