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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=625525d3c93c3df64b19707848d9f88da4dfabab1421142fc34c95c0727a2a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
