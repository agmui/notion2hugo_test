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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKQ73WI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDgvnhi0r7J2xnVT9bkQbGl3l8Jg%2FGtBjMgR4mAtC1hAwIgCiQh1jT9LfTvV9eV%2BPGcs9aJsnUJF%2FZ2uMwoB41oM8Aq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMmnX2b4B6LvlsDc1yrcAy0zc%2F7L6X05F4c0rehQPJ10sFU3KJc9Ghml2kfZBIPmTo4y4ttfea5B2Sj%2FufiLzw8AcveQ9TErQbjeJkVOeXGrlSYCHxaQjqYoQyAA1DnuWN19O7rMKdtnnpQFecmMJVrwR%2B6wKYKMwqv%2BFnkXt1x6RFvDsflnNuZFpLBKixzhF9dZN0Tlm03HvUS5GUgcTVlqcKe%2FcNv9pV2bx46m1U5UliMklHldhCF4TOvg%2Fb%2F8%2FczX8kBbe2lCWdv4z0mk6J6OkpUkCJ56gyLfyNwNgwTYejBw9rQrGrVxUQH8%2FCtd8DSW5QXUW8hMsTKHh4gZ9xNmy8JXcRUU8mUWomTjZ448FOYnJ5B3L9lhfEGq6SnZatzDe7%2FVzHXLKudFwMIM0PGtq4hnACkQ4%2F3v38sp81oNVKcrWJRF7JtgGy9HidVEpuzp3JvINHtfA9g4ko6hJlxx%2BpxQGoKW0XoZ%2FRPm0KxaC3NbNqx2plEHAXeKD8qMXRjPWTYyr23SQDav8f0UyGL3MWJ4bEqgKMkLet5Jhx2zuVW4BiV3jjeGqGQNE960XhpP%2BFrRhlEAyV%2BL%2FXZbRLR1lopQcbycnOGVME%2FS7n5ofjkTB2syl99ByVdw1DTqZFbEvg8p1It3RrKsMOaFl8EGOqUB%2BYQNXB0DZbCbH4RmQ%2BFF2XT8ccYlC0TirlFPoYgVI7JEIR9vOYa2fOPrdSW%2Bzis4jaG%2F3%2B7hCm9mifD37JkIntKtiulwQsROd6ZmDQ3LiHwkYJWk4%2Fok1MGdnZtVxF30HCzQiJIRmPYd%2FP2dP8rb0%2B98549qbKykbG53p%2FlpsZzx%2Bf22qUVdv%2F9iVfAPw8y33aJ58F4sn1o1x24fQBBvYOz%2BP8Hs&X-Amz-Signature=295aaebf505614f573204d0e6c18724e4cecf0a8d5bdd31d7d8b96b97eba737b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
