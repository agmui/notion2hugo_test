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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22IFPBI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCkuAiJ91XdwPY%2BUrrQnpwpfsyiIcAWs2CWHAXkcl5eAiBOjAygWriF3NL575X5iSL%2BUFDoWO%2BFh43TKaP87v%2FFDir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMllUQPm6x83GyM8U9KtwDINxVMIzUz1kdzdElTYcwPLiI54Azyg%2BQhDlaHtLEWatxGBmezGVZS2ZYEvAd%2BoTBUfTmgwqWgLr%2FDk0f8Ipp89C4T6jN3RoIVerJ%2BtOdXOsd9AkW7ZhCqGUtFUkQUAjHJ0KaR96Nkdh2z0K3UyGGma0mBhp1mHsSIimUNtM74ocZOCYejNxL0aMFxeEMpCPSipJrt52iv9rxqtK4srf4BYUAU18xhwrj6p01QE7ErCwGU4QzitK%2BpseCcTl1OdLmkZnCIc%2Bmgmn9d4rvpH7sMb7K1cFlcbYI1XdctQMmni1K8zA976Y7r0PsYjGQ1bNZWInpokYyeEKxl%2FewhtAT8w%2FHqYfkxqYaba4qMSZf19JQqL8jpszT6zGv7FFY237ImGFW3uCuwRUgCl9ZDE5GUAanovY8RtYNtXkaJRH3AAnZPXq%2FRChXeugtakoszIBeGP%2BuQgxGkAAnlypzj7Z7ADiZFFgsqmYsOo9KhFYb3HY6n9AE7RlkkTzvKppdqeAUh3G8Ng01O3e7X16q1VTWUn6JSW4gPkG4UbNebl3D0es5yhLJuO0HH%2FymW30ZvoEA9rboj2QtUljoItxowpJVHwpQRqWWCLVQCtZdRd1R0u4k8wg109j5xYcCnx8w%2FMOgwQY6pgHmKg5IDrndZ1HJbGkoIuTj38FKV5a%2BJwhd%2B80mi53uInfQWyuPTPYypIlsilyOQsbMj%2FSBguzBvElHgizwl%2BpfCAFTaDVB2fzW0o0bfPW175X52vMtkiPLaGXCu88AD8Pw5oYXdA7yQldKyEvtkv2qhaFQCcK%2Fv6%2F5nth7H9iKFsoh8juR71epk1UDKLVRlsLaSX9orvG9FSY%2BxoaEmuu779jvA4VD&X-Amz-Signature=dec63f64551d7d388431cb41587e0a166178c8008b2c13f28cad7b25004c3e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
