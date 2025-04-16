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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5533FH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDhhoMv%2F6%2F4O2i2hQNz%2F4ltmA4%2FdRiVJR2BJxuZL%2FZpAiEA0qf7C7ZiJ73N%2F7JRSLpRQSm4hfdn2H7LvTw2zKw%2FOzkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAGiK18w4bBZaRm5kyrcA%2BVgdGs4vTKqqe%2FWrRTWBf3tNC5yPzCHkg9bX2VBEkGqpLiEUOZ53T%2FjzYH%2BhWpLsUt9owx7Rhbbhy8yDbJLtdtEzD%2BcqqnPHqyNABdjj2ggWfC64BwOW02ce1HywVRMF5Jps3VZCWDmyVPd7bsoHsbzQ8dhI%2F7t4JMLK6tWiwluNiuSM67emyaanE9aIC7BkvqEPn0GoJH79q4xf%2BKIif7roBD%2FVToWdhKFdYDRleHeyQeTQwFY1dn6jMtiwMzS43n8xkuStdFUZB1esHwWIOVLKa3MTgPmO3af7uhJGx3SMa8PYaU4EtsQvAAUKOZaXgKmTkp4R2ZyNlMt1zprfRYElpQ6ziIyZaTzGw7Z1f43m%2BLXmT3E%2B2DWFHfEmbJvgUDGaobvaH5MARKMv9f%2BhBT9L3PevjEH71rYQGpLtAsr7mie9LdtdFCzFpR4YetbSuzxjAa20Xkt7I%2BO%2BxZm1nJNi2WT069AIqaHU970PkqUsT3SYbRn%2FJhIXb8YQhKI%2B1e7CKTESQj0tC230m3tDiFwGy0dUdCQ15rCHTcl79%2F2%2BPO8tifYsJl%2BiFOlpBGpIVOPskP8qKnG1UKZ4NxQyFxt%2F3cELj8RjsUYYmcvGi9P77B6EnBLlmdolPZJMJbf%2F78GOqUBFj1DqwpevfyS6JTtI5u1j9oXQfuMvBPh3G%2FAtAwaJYtvtDhUBHazCr0tpWPOFYWfWpxJ9S1OMMYa96hyk%2BTIfma8HnDcUEeKR4JUXzHtW6FkrJsTy%2F7RVGRF0%2FUGM4VoxWzw6LiphYdmgt0PkqAfPhHPSXgpsLUItW8Pf90zT6jl3oSujCqdrqFBmdGgHuzdI01CAOmwa5UOXXzBYOv%2FuF2ctMQL&X-Amz-Signature=7de6dd87c6f24b510a7375174ce94fe281219ecc7814fff99d8dc7f5f75d73b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
