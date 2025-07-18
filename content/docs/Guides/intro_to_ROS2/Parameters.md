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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653QAPXL7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDZ6vgqMoTwOfNd4m9lHMr%2BI8AqTpvOHVYv%2FnmItKuvKAIgWm2gwfK7E6tz0NSavuqHTm24uoO4IIGTO8pRYGrT%2BmcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6u8gTXDmkHgpcDNircA9shnKK%2Biezk%2F6D51oYT2T7lIapeNyVQ3F6iod0yIZ4lkCUrIfivkQDoenYX2cQRmzNJiL6WIwWLmyMsLk%2F5kVVKwPN4pKSXzLaRyZNZ2GMAjUxHt3iftFB37bLlQGliB6yq0a21Nvf5%2Bzi7%2BCU97tsd7%2Fpye6WNZk4R2DKIqZbodJ3bqVAEFy1u3IdgJ1aDssXbrFyDUAr4ckY1%2FkragA%2FsKD4YUO%2FbPkbwAOgWmiXLP5CX12rcjFOBUv5ZBhpVgKiRc4uY1rLBjaVVM43JkdL4GiDE%2F%2Bhi6PUWu5iJ6P5TSEHDhN4OCU%2Fjq1F9Gj9Q6sR%2F%2F%2B%2FsRTsfm1LPrUC9F0TGqovsh8QYuxoRtA%2B2SHU5a0CMRoc3bY57w2h84EmJDHf4n%2BpeHy2jk%2BzVPFpl0FoU0zpn4ERwoiCz7mC19w6UNMpfBjEeaYmNYF%2F70gw%2FQNTuRg%2FWfJhGuVVH8dY2ocrxehVHrd%2Bel5Z9wenKWErPEJvRk8KnroM06afy6VE%2F7pMIWkVWL%2FKPMVtjXye77QVCzSrSosxwycBbyiOuXwqD8%2FSfRSXA20OIcgA3d61qaPQtFqo63tVHvyoFaRLMxummTqz4yRBwRqzfL3lwXD%2FO%2FZSQGgK3WQ1bPODKMNHk6sMGOqUBmWj9qibHtecybGXoZgrDDSH6Hcp6nJvN2xqFHc4dsKHQa%2FvkIizooQzaJMHe2in4A9ZXaTR9b5NVYJZ%2B0Xr7QrKC0%2Bf0iB2sLja%2FqC282JWgxiaVpFIzMs6wq2PO2%2FMaLptUMJJTDJYazdoISubABzvwLu9HAT9tXCQR5GhPgdHkcTi9HR6BOzyzplr4%2FfokH1PWCpMAKkSUOtLRrklcZ6CWcKpY&X-Amz-Signature=0c318323eded071ca1c8145e68e892faf6f784bf4ba7dc74283dc683786e6e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
