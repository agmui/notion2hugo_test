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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DXJ2SO6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDInyEOn7%2BYnvNMwWRUuTBK9OSqa%2BXMKjZy447DFx929gIhAK8i1tSYZZmzv64Yieoi0PFHSzZYkPeu7U9PQl%2F5IoIzKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrLJEbGE%2FHeQbY250q3AMHUhxt9WRUHJAwmyW%2BZVG%2FXoFTeNCGmQLmMn5nastPVwtT0vZ8PKz6KzKXRFjlVptS3xX9dnvkBgqtbbjyGRCym%2BuuTnuQnXd9r9GNEIJDBSvfEaKCcZmD%2BgzWPRS4LUIxDM9nUiih0ufBT6%2FZoFUK9Ou2HG2qGhLZLp7BWVxvccGAjPChE5W2CPn7KfSrhEWc0HtF29xiChurwbg4o8C6XdSZgHNlNWWO3SlMY9k0k%2BWxb6Tg%2F%2FEyYPjTiTeEC2SW8MtQPyPUU1Gku3sRsByeLmS0Ur%2FR64Uyl4ub%2FvwsEJxsg5i1dNhNuayrbT24oNQ2r9OP0cbfXKdw2GuiBU0jU32ME1G8KDVm8xW24UfIsUX5ay7egxeB8hQASK1c7rX7Rq0mP760aNUYTnvpU5d7RLv5xBdsb45iXlZZgZVB1O0s6wb2opb88Jnvk%2Fc9biRp6RINNciA7s0cbHhr9WAkAlMTFnwTXrnYnHTMjnR9lMaZvBGWWHDxP2BdCGSf8nmnHQrht4IlxnqWCZyfwNBK9KeVSc%2BGnAAoTDNEFuqD%2F9Tqw%2FKyCtb3XDGrA2mFvihpPap9c1mR%2BcW9zRowcUjthJPgfAmBYiQrhX6%2FEUV02mYax7kxjKui69KMnjC02e%2FBBjqkAQymmOAcGoyUCVEN3Uo9s4IUuHcn2wV0B%2ByFSZaE9fOSJzPhTovFoFdqtM8RlGjiksMk3n9SrbUJRbymDw3etK0nJh%2BncdWH7jaU1K2P4EYLsbXWw1zZ%2BHp2Pgq8drNI1%2FykYu1G2JM5UIwWxswPgGliclTnkA0qMtc8qJFi0nY%2Bn6Le%2BmEAt6Dfk62uj%2BMpQoCeR2RtTMmMIAhH4ntAqCir%2BtCj&X-Amz-Signature=8fe18d54137a0a6faa67e66feb03cdf0e37846ab6a7d7565e98c7ab0494c2714&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
