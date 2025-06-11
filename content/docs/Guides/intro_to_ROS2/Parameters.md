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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RHNFVEX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyM0LTVsic8t7yb5z6EVaT8fBSDYQ7rH%2FtFymjADSfeAiBjFyRo3tcMNwy%2B4qP9L7chkIUC%2Be%2Bj0XeLwasoty7ZtiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ4qHpwW%2FHcN2zSf7KtwD263HWNxEMx%2F9upffbWjx1uy1oi7G4mRe86iiOAb1kfDDe9rNZBO8n7OF28NMlCIjrqRQdfD7BiTe8pKi8lUljQ85DxWeaDvO0f6mBo%2FC01KMEyC971XSj87OX%2B2GXIypimt8u%2F%2F78YVG1wHiLrTpUk78EhXIHn6OG%2FdafZ77mi0Y96jXdlHbAttJE4%2F6hgUzSKcHNR7RI5NoZEHqT0UVy5COio4K2ixAA2gzk%2BAAcX%2BAYeSp4izX%2FNa69iftmMEYwm46rElIz8pLwMpLUFwCXDZTLu8eFdVjOy3JumhDR5%2FAMe%2BOQvIZaNa14yp68beGXZVBaahBt8WuEF2YXjJnfPvW64fGWMrgZYS3ckz3RLwtrw%2FszlBK9oI29KdRgUCEG%2BmkVssoJkZjnDId3ZVkP6AQMzopzHF4kG33c4TihCWQTwI9RAvtwp8uEHvE3IoXkZxUyUe9g851U%2FY01w%2BFMC79ijaN%2BR5aApkoxqu9xdB8rBmEB2PaUBQtE8egdBm9M3tE3lg2vgKdJrY3KVTOubTqfbVnKs7CBkA3S7AJdKUnedweFakWMT54SJeGuR1mz0rL2FjkUnO1tI0TSGTolOtp66jcI8QQjr7ATBOLkKs8QR9ZLAwuGkH5YRgwleWlwgY6pgFHR9jVhphrdOOG5%2FvUztOqnXV2dRY26C170qvTKvEpopMvymvareYKEb%2F069w5cnIj%2FvIlb9IP%2Ba55ylog90gOMPbwlYIw046iYmIE2mpWfPBB8QPxCLJOwDmbk9zueSkclZ5reMNA9PY3qi%2B%2B0ldo6mHbdgfj8nqLq8eSxB3ati%2BGUzaKaJOSXFl5OXjsQ1VeyNDzIlXhCSXU9fWNm3bF%2Bl8jnooT&X-Amz-Signature=94cbccf4c02af6533de67df62cf211981120600a0db0047545f1ca01b8fa6505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
