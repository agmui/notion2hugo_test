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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJV7TCE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLnZgyJ8RwkMQhMYPDN2US1xgV2eBqTZFhnIZD6eB90wIgfIEDLg1rX6s0HBDJGoW8aGll0emYcLDzltZtkCxnPZYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKoHJ6binmgr0GDxkyrcA3Qt7fj68WwprQOP7SH26NuFzjCHC7Fx%2BMPz6EkxCKkztGs5ypfxlz4BvP4bDZrDOl9QtycMU7HXS0neyZ%2B9C1Zu%2B8NAeMoUotpYrSL9hOqdNTpeTPkkbslk1wgLEx14IgtveAfBvFB%2FYV5cClf%2Bd53lK9qFiT8XRSYVpKlbtE9XU%2BRMNx%2BHXRM0%2Fa%2FriRlRZYrG7qxG6Aa7MQBgYdMGjuap72XZKW2uNGuwL2zLV7Bpok6b7hjhGsWTRykSNRW469OF%2Ft5p0nif8H0ObvI5gMyB1zNWps2kgGJyAAFK1p%2F9jxQjXJzmJPChQwadd2OsPEhP5e8ZbX3E%2BT4BaBn3P2XzaIORPzUzd6EEtUt1o1Y%2Bn6EulCAGCY6DSgKH9dstfbSyQ6MOthYkCkzdpb5WdDoByUic0On7HNsrENRTBQbXg1kbqK9urxWDyx8rQ3zQqgARtXofy%2F9L4QUHik5hjWTaHs0w3lYPiQ22%2Fk5s3QndBLqMFjyoLDNTyuvBA2sYt6lZmaUHtW8YkrkpgskcgcQH%2Fg3d3uC6aKQ25aDQDKyYbWFpHxs9mqe5xCFutMq3i3gCMeaaJkWwtHu3my0vIT149j4FNvI8RSf%2BNJnJBbsWQu6g29X8xUnlxjXmMOChw78GOqUBmv05Kf9lzT2sLyH%2Bn7KidUOMMbX2uERjK%2BOBpxmKUXvJqHaNFayEvUgNRj%2B7Yem7%2Fyam9dRjeMxT3u8B96rf4eYhKLs2v10KqibbATOU%2FojID%2FNBuecGzkCEyxPq5jxpdetxSRa%2B%2BZR5b1ekxlJoKjUUckswoygi2e6L1unm0Y0ksOTZs6CLzb%2F6fywM4txvlw6DSiUdf7bYYtiXi3Fi%2B8nl6NAm&X-Amz-Signature=11574edc9017b3ae140be52a6d82d30e7c16148a1db0b5c9d6d813731ccff02a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
