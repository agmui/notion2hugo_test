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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ATC5XW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGxsWmNrisRYoOEBVPJ2HKcv2I9VkVr6rhH%2F6oaBnwT9AiEAgGFzHdQPjIHUmicede0do9CAElDYzhkaCCcrjnlYQlIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOyy4DuF4yUsy2FeyircAyl%2BU8N7cbjl2uuZ4dVorNmce860HNNgpy5FIl%2FUZ1prcZVPKM7V%2BAUD7AMUxWUe7NdXkwrN5BRSeUBjmdvS%2B1SkQZZ%2BtcfGoOwaCatfeVF7WHF%2FLb%2FmN8Ibu3syX5oHHoZosfCLKQVUEhoyE5J0ohDZeZLo2UihOUcnkwzGO7vkSg91sUZDetBg%2BOHK4mfgYJNhHu1CKc%2BHEpH7BqJ%2FL5BLwk7chBbYAj93TBMj4%2FNBDniXRPx87hD1cfGzHPWcTF8kHV3NZv4XGnyryFqvRumJq8ENJ87lHB%2F8GKMXjfkARHuecvWbUITZDLtLeu5exkSUdUU5xTksaYamY7RcqNcR12keSNpvJ5vLLJaSy6A5TlboJUuLDT%2BlAzAp%2F4d7auDJNtykofMdT7EF%2FSiEhCc65jYqm6ETlKBRFUV5pKf1XzC0vVGqC9fGc9aWT2u6NjQTPoQnFz0S%2F7HSRmqMRiwG%2F1YTzN3HmhwuIKmKZ28z%2FqptDfLK0EpMWlVaJWNQW026R2eun3JJihEKpBr6dKxMmWZw5DlTV5xXdBqRQL3ct8TSSWo6mhdL4agPkXOrWukHls59dlESuhJMuvJbv9OIrN85FiSumneAk1SoZdIpAMCH3K%2BWDgRVTG9lMJCK5MMGOqUBupAuo9VSv4DBdN66THqzgc6hm4%2Bq3otJzGnuDj2QWNesfWAqm5FvGck5N5X9AYxynw20LZROv8e4DplE4yFfVFhGJxSR8mpgvyTyC%2BvOHjDYClNXJHfx57QHRB15B4K5OiQSdjHVYBW8PtRx98lfH3yxCyeMSuT71pEN4OXz6vHBlj%2FIUpkOCl5lt4huHf4dea6x2nG%2FQEWw2g1mtbEbhS8CeN%2FE&X-Amz-Signature=ef5541d5c2d629a998196bc5f82dbb34e7f7e508dc5426521dffdf39f20dd6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
