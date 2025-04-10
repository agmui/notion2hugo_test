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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKQPQYG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIEeoQ%2FCynj8Zww6dzwFSFCImCxq9YQc1LcgyhOGAdVaNAiEA8P9JdUqjEVv2qwhhdvWdNRXa8pqwfmrjbjzcdKRSxxoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONOCsJjdBrMjXQZpyrcA558ILvRvfLLxlgEFWMiTMCxREMmXiCXBV9fggoEJ%2F2JcC0qhOA%2BXg%2Fkd2vlM7%2FKrwcaa7iQwDsBQ3j3rQ6SxAty08NZk7u8prhv3wMGyOy6337ZL39K4tvIB%2BmSCzFGC%2FXrMA6xnYiZSc1y9tscW1v5SlBpnYxRmFwm%2Fn6AUbEZoFamZQhTt7xqa3jcVWXG4IpT5swW2b4ebU6dbyKowvwOYiWefZcq%2BQhfxyjzDEcHOBU9LXXvCkfFPoKuLCtciAwtpH5yNb2HlQVM0PuaJ6UC%2FOgFPI1%2F8Eop%2FvNgi4qoL1nHeVLRHmbg1FaQFvZw8S%2BauOv93Lv8p5YDCsV8Yjd24mdzkzsnjv1yqE8QgF239%2Fnz3QhWvF6GxNQ%2FK%2BkEijY7D4pk3Y6BB1P6rTakdGO7hPZNiQ%2FcHrH6Y77JoJNTmA8gxJFly0fuVlSYGNn1uriMsWP2%2FG%2B00iZSFqQyode9wmAHtp3nmRP6wSF9AeMuCO%2BwpXM%2BJI5XKQTJnm37su3%2Fe1OUYtIVpDVGmk9DZqSH8x6hfNBdwVVMi7EzS2mnXV3QBQykH%2FZTWfQCOpq7U1elm9Cd%2Baetf%2B1EA47kMhsHTvpQYaXjl3jtOj9OF0UysiUzEqd8iQclNrU1MKmx4L8GOqUBCnnQiYOS4Qf0501G0TC4vGvpVLXTI%2BnPp3O9bEOrGryGfD%2FnObAN%2FEYuOYIXY9pKBR1nsvWeNQPLEtE8ZzZ9E1onEFG0uqg%2BbofzQkJO9315CIcojApNR9N%2FMs1e8Si4KXqP4aojoeJIM%2FETUcE%2BQPi7u%2B1GXAjhR63AEHdVc3hHUzfBTxlHjUlLN36q%2BMddsMlUmW7Gjy5yNy3R7wX82gtGL0OZ&X-Amz-Signature=22983732d0aa4826f01fada020d222287f923b5f0de0425ce863a32505f2ef9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
