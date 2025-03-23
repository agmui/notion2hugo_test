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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQKP7QS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2zRyF0mVM6u33uZbsY7wVurecg5iTiBtDkiY%2Bkp45ZAiEAsx7ExXHNCAk7Zd%2B7cm2HnqCOl8uRn3PAUKGdZ%2BCIKtYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJi1%2Bk5jHSfRUOYM0yrcAwVTY8KPHZiR0rsdW5pUxzjX4rAuqJ%2BdDVqVlK6wRUEXPeW8xPbPkumyBvCpBHoSXlGtCkYDeA2pNgAQRAty%2F5PPyAtfi5nUXFWjmPeySrNu4h2AshQlgt7nteM4cmcPTq1EUqr%2FtpelnfToHEZJG53IpHgKn0dLH7FGBuOqUQEpF2b1S9KyhCuuwsYSd3XUKQxPM2cwlGJBFfwUVJiRoxFtNGUR0TjA%2Fy9mZuFd4YD9yfm7t8GAL2Z%2BhgZ6hZdMtu8BJtA2oYA07lg6ttgU%2BNelvMmasysBL1UtJRUr8JpUE%2BLC96UMANn%2BJnP2V%2B%2FKjEoOs6Bq7XGkESfF0J6f%2BdQD5Mkq5gGsIjJ%2FcOACX7YFsI5cd7jMTEm3at5qMYOFqDSWRF76SNVIelPlRpD8MRX%2F62EpuQCUljA68iuqATd5%2B9%2FQHEQwZo%2FLsIpmRCZXOaajt5fnvPwJASKW%2Bo3t9Cre4qfaS0GqlDojjrE%2F8JZTO7KqsmSBJHrBQ3L7yFkoKYbywGyYvb5QSfzWQ7rNbLrRJHxaIEGd2SEYbUhv79XRALdCEw0MV97z2PRAt3SGgX2Q%2FQhT9YvVrRtmeEdfSJg0sLsxpBtvdoNEtt1rwN8SOmnomvBG2WLoKHKDMITLgb8GOqUBfS2qVYHywq5SP9WaqgMb%2BAhm5xwChEyLOp3mt%2B5KWZF0dh8a8FkuhnhXj7OLxrP6jqUCXqNcHFs0C7Ys9sbn33C2jfzPaDmD8cUSm99YBkN1kieM1GX834gDoOgOT%2BjpnDGXBg0FfAsLJd2zKbXzmLssEqNAYXx0FFnA0OVK5ZyBVQnGym6qgGGc6LaJMWeuI9BJop8N3%2F3QDhHnPbqQKErSqZli&X-Amz-Signature=e514febd7aa5ba32c9d3880a77b6d78f17bb8480a38759b36bb38a6195cc474c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
