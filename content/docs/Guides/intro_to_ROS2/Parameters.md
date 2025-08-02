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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PNB3G4P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwmu3%2FgbOkD4A9k55hK30%2BdGmKlQjuiNRv%2F3EGjzRRBAiASzmrot4ckY9XOOdfpDbG6eNtenq0kdE%2BleCos%2Bqcs1Sr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMcB8s%2Bk2ouEGCAxFmKtwDA1Kuyazx3ZX8EBUoMJiHFUqWnXiCINArJ38ErbRu4DxIVwzAAmQTgErrLMST0AnLR33VZVynrqmAvm3D6XufBSxLWr0xhL7rxwwGtxa3dPII1j7zIBAL%2Fs2RPoxjKAqKICTmlWDbev0G5OaOO9s6rEVExWOSI1iTZwqCZnbiXe9PO5I6BWybNVz4oA2FJGFx5GSnVXcVsd%2FYovl%2F8FKrN4Z37snUX2WPpMSPNZt3FEmf3h5z5FNzZWVqAsSEj5g9zwPF1dJnGcrx8H3LkeN1HPdjNbHXE7bND7PBXhToOw4R8JCCKZHzpVVPpt66WQ6P9MzCJlWLg0RPDVgGxLVybviytpJiJhuAabqERn0wccmxX%2B%2B5lTZ4xUeAtb666XtzKQukTFLU%2BLU3NZEypM2gnb7c4aptF28xYYYqGr5QJ02OrKud0RhQ0uV0jGl0VTpvIbjE3i2MKUFzwxR5XqzPvTTKIH7jmWF4utjnw6aIrolVQcrPBIZaL6Hlq8XQ%2FNjOHL4bZBy3Fw0LYyV0xj1bxj%2Be%2FjkSFbudEaHa%2F95y6%2B745xTVgjy1%2FUoWhQAfmIZGDlGbOBKMnFX4REAtNZSllRg9EzyHhym91UICBTLf5G1CFlOCYG0klVu9Y84w84C6xAY6pgEhXUuvtdGMc5cJjL890BAwKR0mT2iOUEknqynIM65ZNA0VkFjFF9p%2B%2BYdgiB7gH8XKNSAJrVqNn%2FTXULJSS%2BEMqJg1mklHnRe%2Bt5UeDruJQL785vNYCq7Xxg0vwetka99oyO2E6M2XwvxS%2BX5uOn6UXmyWqLJjzvugGJrSx5jYjhCAyy%2B%2B4ZAIsbbG%2BGqTC1m5bSOf%2Bn49mWYTE1O5X6WxINUKzg98&X-Amz-Signature=a19f97d238c41110ca7dff3132381bd4379089a3e86c87fc8dc5906e8e3f0b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
