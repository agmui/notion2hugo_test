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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LJM6AJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFz3bSiyKB3HbbpojUKh8%2BMsftzxl43wdaqXhiRkDq3sAiEArAmzAVI%2FxRCdFStXJnTMQ0TBT%2Bot7tBKjLXbiIPbHP8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7NJGcsA3wpqdDMDSrcAwr8uhyB%2BSqOfXUlWMR2y%2Fwy0wMlCB9YWKJz6T%2FiSPhFrbKbDOt04TgGE01cpAN3E66fra1gf5L5p2xZpFAfR12j819ybVDY4uhHqhEpjr5sKk52Jf%2B7VghFtYWY16X3Gg8tGqzCI%2BWFjv4fNPmGZutQk5j90sFgHGaqOdiun7t3e7rGZQnPbpYxbvkC%2Bu3pI%2B7r73MiAq5pAwt9gO%2BK7XQE%2BcDfwkw2nBKOJ5UVllPwMy9270zeD2afcuw0vzAOTpAYO4WtkHCQNAcmzWHnsZrj3xBPkTpTbbdt%2BbsMPqHlYrZbJiqu%2FfRvVUPFo16Hx3rDdqXGxRthxOAGUv4gYiRym786Byr%2Ff5RD6XiZk%2F23TQzmY1O8i%2B5EOVYbYoYU6p1cEIasL%2F5RnDBhqf3N46v4Pdcf55IkXpCi79qL%2Ffdh2mR67i8k3Lz9tA8nikUyLziBOUfO7RikuThlulIIiawwnb%2F1EzxqukDsFbPWA7yINqiAD6XMVgun02JdD74KXe5cPV2fcP07lNnMVnUEsUycRxNKab%2B1eXwylg7wGvAplmzmZHvIBt0j9Tk7uCw%2FFXnZN8XYc0jGZ28LHAfBourjvuJDPg4%2FMOK4ggw26R7Gf3gLfAgRBVkK6U7eMO%2F%2FtMMGOqUBr9p6qCqY%2F2U9S43foPSXrSbu2G2NymOg20zbCRKDbaOnipeIAhD4dAn3TyTjMys44ivrIp%2F758nKVkTVIg%2BpIo3NFg7Yip8kGGer8mkZRuiSd%2F%2F8hRLGvdvSBM8Dow7G7yrcLqAJtnpTIdVz7UY71rouAxT4pzpaEvxXhLeXxXy9%2BxOYt2et9itSBcXwdsNfDSGh%2F8NVCw4X0mRgq40t56%2F5NbDb&X-Amz-Signature=9c87a6f0b4aaadebad591bead9e17ea39f9c68e95cb9965ae49c6e5f3573a286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
