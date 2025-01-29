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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NHKCYV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDtrAkkt7xthTXPBY2%2BUgDRXD0SwcyHdnp7Cj1ZEOSa6QIgUyCbUlpVrA61RP0ldO5lVaM2yeZyZVUgHqmNRi8wJaYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2Fdr%2BuATng45r1FfSrcA9kNw%2F%2FZORVbEr2iz1tN%2FtCwfOrOc1KgXmVRoc9JNiWzxidJv7%2FoknLkq5x9aypA%2BDr8%2BK8qcrbxEwTHGh57mk0NDr5QeJRyvOluM6RoUSiPhPiP8A6HMkMTlxN3BLgZsVxoJ1JcA06vVn5BzEXnNRkvIxcMNFXZLUu5T7IObRft62a49fYb5EVakROkRWOkVADA8Se9bkBhmIUa0qxZgLp0J9jmjp8%2FfJfV%2BKYNKjz%2FNN1YiXgiNyM5rtFVgHqatqoYEkp78yJdWTu5cbx7B123uZ5yqtowopjO1sIjk0US2JoQylzL73tmjmDPHj0VxxNuVHyi4bWoPTmXKKExbKByZcGJ0PVsATO6ecpAk%2FdRj9PMUXsotiqIAmfnWzXyVFn%2FU8YN3v9ddjdwGkc%2FeWoKA2Y5zlHwLwchLrSOvwz7xYTOqIzxMr8vLVDsxX15pI2dPfdEtE4OqXbKdcE%2FcVFo9lmnd2cv8QC5ARP4xWoZ8z8qz%2FDvEvlHHUyXqHLxFO3CGPW%2FtXS8wUl2NJlayAfA9H0otCNdUJrwVLdF%2FdzfJWBGg6QWdvP3RbveDnmfvsQWPw7Jp8nysCG7Q9yEIF9SAEZo8LuFZEDQSrb4LS1t4WVkabL2rC8IW8y%2BMNCF5rwGOqUBMZ9etJpXs%2FzgAy4Vc2jr%2BJmqzFwCzwvZINCsMjxPIeKZXePlw2LG%2FwyhD2qCHYXPAnycerKKRLgiHJsgzaI%2FXteybEEIQxdPRcvA4x6YN46Ccd%2B3NAUYi3WvFwIK13HObh82KupI54lD2QBQjFs38yLODV9yNEXIEGIudiNK%2F%2BF0y6tD8LxN6djdEEyg05G9vyMaiVEo%2F8rB5x1hSJp6j3Tdku4n&X-Amz-Signature=38aac913ba12d96a278bb85d8c3e2719f59ca67f2e907b51ceaa03cb06e8b125&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
