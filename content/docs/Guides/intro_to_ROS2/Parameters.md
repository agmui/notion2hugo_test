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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4N7ETVP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA9R%2BhOE0TVeXWHa4mHvJcO%2Byw1WS6PpU9Kf9Xq86P2AiEA7%2Firqjs7MgOdjfCTcYQeU%2Ft8CYz4LzXa5JYGUcFDuL0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHe1uLS%2BFaYv1ZM9OircA2buPf%2Fak2%2FxK67D1cywABeAR97TcPvzHDVAFpgqoIlBkN2%2BWs4NPlGDFEvS5SobhuGgQA%2BvqFJ0behK2FQcthl6gUtxV1a3HMY38T62V18fRA%2BIDhDoUOGCMByLgNk2HnNsgE5UonN7K9WxOorsYJm7adYcKv9s8IRpGR49pZx%2FJ6HUk8%2FDcbZdYQRo9012%2B8sZptYvxL%2BsUsMQoQN6wRwhkwo%2FVKGbvOhrpepy5jdQ5I%2Blna3drC%2FuYdowGqvjvUhNle1fRS7p%2FFXmEUa753TYrTZ1UsAZLhTW2OD1kj7FBKK7Ujgcywnd8V%2F6MRfzGFpYjDxy9VKvlC0kOxsXTQpRQhdG7A96sDhwDzmf2y4SR21eQKeUmEP5PZKQ9Wua3uZ%2Fr2T2DLZAA5beDSryU28VZE91SFgt52XefKlL%2FuOAlQLb2j861qfGE3%2BxMRt85VDtD0gzfHT0H6K%2Br9OnrGLD3jVay%2FLtfGIf%2FsDVWEmaItJKf8TbvT4QQHKXvEfAYgzjU%2FJa%2F2PfsKMT9W%2BiW9SiDeyJAgA4gRhfLT1SXnh09K%2ByRpq4rZX8jbQWYKeBa44%2B1lxg9AGsq9VGVYoW5mm7PL%2B6l3TuLlGsoGLv7%2BOQip7JhRoqspznjDbqMJaiqMQGOqUBg0SOg7cDo9UTShA6MqFrKZDZJbCOFxOhQkj9Qcw9Ux2JzJWmZbvqUaYGtMlWC1EsEPda54wYv9TU0kJ1fBbIysUNyVAwVWrTizDpDlCfldKF%2FFjbSpgcoB2u%2BDT%2FtCP6uJN46N%2BDD8IA5aW1tpwrsdRBGwZiN3IQHRfZ%2FqH8tA6xgex2FuuTWBwfe38yxMYfeFciLSIdvchpfBdDkXQlG40EwCc4&X-Amz-Signature=e2b88b5651b6b9dd656e55dd4a450c9547f57714bb901ecf5e41fa6b7ee1ee25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
