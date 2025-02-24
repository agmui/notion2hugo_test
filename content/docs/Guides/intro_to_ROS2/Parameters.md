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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEJMBRZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCizPEHv9ZfMy49x%2Fu41w%2BO%2FuCmMWsMWcoUc3gw3%2FKy%2FwIgbxzRUwNVp1DI%2FdwjUj6c1hM6eob6%2FeiIabdoBEFyRiMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGVv%2FvqIVsIPwsUKhyrcA0%2Byl3tU3Vp6n14fW67GvgtlnwdK%2FmyVzkWclpN4iVMHL75%2Fiw0tZvUxecDX6sxMlG2w8LYbdSy3CyY7NurICN%2FXTDMakpq1DZvwzQwKrDYs%2BbAepVKwl0ojZrfjlxcxR2Pk1ft4gYXWrQL4MMvE7Tikt3MTdh%2FiH9pgXVPZX5jA402XHwmGC5EQdUzXyNTz3MrN%2B%2FQFgb%2Bwv3z2GySHm%2Fz4Z71P7PIz5nImMIU%2FIR2qkhRlakyfz1oCbIRvGui0wn%2BzUuVD4lAxaLB0ORczbJUuKVJoiBe8FkT4AecYW4enZiT64BtqSryBk57TjCMhADves%2F%2Fjgd8PbG59y2oChsdVbLF%2FMkMVZOs1bbZoJC6nHQoqh9w04Rf52M7vFcxvSVGYi3v0JMZq9iHzSjId1EPRM3YPL6mHzjXpC2tpTUMmPzJhYvoB09JZi4kUersGJZ%2FiUws5CRApsDASzLv5iFMIhSANNcp%2B3lGmLhpdVvm6HK0DPbpcHtMB87YjqZ%2B5UhqCBHF7SjC1S3RXS%2BsOmGyfcSpPY4m9n4jilNcszeiRlGNKInRJivvEdu1hv%2Fmtta%2FYLjHL9uN9OMo0P6LV4uMUA6yDkjKgiLVq7TbWECu28XhNAUDuTlNikN8SMLzV870GOqUBrG5%2FXT7rbAS9oWJ29ybCMAZq2hJSqBCwAYY4yCAlIH61VOG0mIeWqzs9UMjFqrtnLxF0BuE54nkyPqoEwrPm%2FyvcMV5PygeaS94ELLDsvwSfUrFA3eqzPBRnqZJOrIllD7UMZHJmvGIgcO29fTgMj4SdCuZ3hCw1n1kejpb34Y4rXVoSQL6QGCmGWdHL1FjECfYjetdwb9Ci28pbnghibJrFgkUp&X-Amz-Signature=d371804d749148d10fadc47bd882be347f4c9137cac1872d7bc2620536b30b54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
