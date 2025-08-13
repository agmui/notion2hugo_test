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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMH5PBW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtWSKTLW6wHYgWLo3zhlO99DZLNYTD8LZasX0%2FtSRq2AiEA6U1eCacOEZb%2B7INcgpj0NW51YwAQPzjp3lOOYVFH6hIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFIN3JyL4hSMkIeqXCrcA889E2amaxdNPRU0qvhqNuBRtTSBYbm7lt73P78rywoMzwMPlO8zL6AilS8zLJhIY%2Bddpq5JydSnlA8sa6BJiD%2B1XUC8TntkWvSJIot1jK%2F1vKIcLKM3Crs2E4jAaJgKYVU3NpYB2KgRYn0EgRNTSPCxgYaDjLsatEK0wbFjM4qkv5BoD9tBBHFRMQPjyjMva%2FvqnS%2FhhuSDDx6%2F9RnTI8qZpJ93OnAtv%2B8lR9Lnt2V%2B3gjiYY62h%2BBw00FbBlFKh5yfwy17%2BLhZWx0j5eZelL01JUC5ufeh2vWC1yR1tMNM4XZchP8K7NeVZ0YcB44%2F8588WoEQB74EeXHdGuDvq2XE3aRvcXCRv%2BOHa8MMv8t83QkrOJSWzDsqhYkGCbvGIttIq2pgsnSnTgoi0omelVIBjOoKmqwAt720CBSThz9opSx2hLC9tpl%2BWQhQ3mC0VUzQqJGVoxvYy4SFo%2B4N60qfzb3UReqzRTsGtp8JYgJKZ0lEQTDY6%2B2xTlgLCWuHFxQPZNEYw%2BcCAG8jRwwAkItrfl%2BS5DB5TpIRUkcQeNr4Smk%2B8WmUSbB%2BsUcV0Adh3F28B5qSgHZK4bkKnXjRPs2iRtymdABz9ttZGQ7mZM2HU8R6ORxj5FMJ5E2LMMOe8cQGOqUBJEt6gc8%2BUaU2n5L0P8UtczUcYxvYjOjNZAsRce2ZEFerOCydX4PkNI9L8wmc5sW9NyfgkS%2B9ZK%2FeIMhxxyoou%2BRxdW4wfEy52C317SF7a93xLunLAsdTnaEGsKLjcw%2Fq8x0Z0zPESXqOicaxWmfnQJUNAhM2S08OgJ4mqa9ab%2B1yr9YT9byCPkoJTKXk3Dyt6Dva2dJOAhZZdXHjiTp9%2Bc5S9BNt&X-Amz-Signature=1c7cee3028fb4d9e84da85037188ece992f833260c80b1797c9752ff6912b034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
