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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLFVY226%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCLEdOolrZ4LJqxgGQCUKJOUxtWu1wYe1Z0YRb89yEpzAIhALqPWRUP1%2FiQzxy8z99d3I9oKSuBghpAbUU2aBg14swxKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7YIj0%2BsFilu3uMT8q3APSZ1ayF1cBU1iaLNkd0gkSLItgRhPnyw0WS9YS6WV1o7%2BfpHqoiAizu3WVNUNfGT3ixtK4r6N61uyvXl9VRH2d%2FZxbBdj7z7p9rOWsPjeift7azqZ4Wjg%2BbRzvfp%2Bvm%2Fvgxnvv9ZhgHtssy0Gc90taR2M6pv8zo5M%2Fycb7u7AmvWDLMKBGACmm4g2YqJLxGK6aUJc9hRRqmo%2B%2F3rxDIJm5wydXPOwUZ6iJstJPuDhkI0na3mHVTjzRLu0RbzHFCaBE5Mmp6gw%2Fvp7LSGpG9OzS%2BTROjeADVf468pAqCGWffWzpkqMRFsNNPeQ4%2F0b8CYXVRnT2hCQB3oESqwu%2B1kq3EZTyHrlKm2E5UlaAWDjU2MTMNeP9jz%2B64klyqPpckdoJHuG0PoRh34u%2F2P8Z2l4pMYLa6dFTnOWvfdhh74uX%2B2x0%2BKGUIBmMLln18nT4zPhXDfmxcIzw%2Bm7rF2y2dmGe6xT1gCjj%2F2jmoN6wvFowKM7gQ2Pz%2FfvTTemrfqzBuofNfCtx1FYmjxxcmCJrBGYeitii29BfhlVfEsKY673O%2BgQFeOEqeoh0CfwBbAxFof9%2BDLIAHR4f4oDkmovh2FSCehSg6ZYl9H52q5Gf%2FQ9%2Bi2GiDnQnxoNrHjyFUjCA%2B9a9BjqkAeGec3TdkuDwRL%2BWV2TUqN7jXudwqaimPtaqHV1x5mrQWd%2FrdFSNdiPhSszF%2FN6iQyPZm0ozQOmyOqL4DMbdtvz0VOIZpyjNnseiHUF3uLCm6MgrpTU0Tz9F3ljLHWML%2FQMxWVxHJj2zmnLIK%2B2Uz7IAMTqMLxmsMSkEayPRlVo%2BkwxoLX2g1w15lcNG3yZ98ISFrL5ncePCnz1dI8f3%2FkiiImS%2F&X-Amz-Signature=1d70f86e32df0fbb9a59078f313dda4265653fb272dfd577d95ac52e32ec3c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
