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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6KK4O3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIG3TDldLw4LKqcs2tuNNe5jCJEQYbdFCBMeZToUZjZ1hAiBtyD0bBidbeieL01NoBM9Dts1oX7LM7FgNx6UmYJo%2FcCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMhm%2BC66Tfq69kJSVeKtwDWjID9euMAivRMjSoHLZcRIrQD5yCsbLmuuZnQydTyuIxPEl0dlKAkIETl1%2BS3U6gEniO9JMonImQ1l%2FkhDUKqMaIBWMOg4LgGPU6Wv4LdOgIMbYMbsXznDM99Q%2F9n4daMWtHcod%2BbfGupg5L88G%2BFdhuT5H1HHqLv6u3xJrRtN%2BywMZMrUhC6iNRU5defH0hcDdeBQ0RWx5cnsiHtV1NWJNlVp9S8b7B51NLI%2BS4ufriL737SlUR9Lo4oQ35TB7G6VGTlzi4eekg5pXtojRw293zbtt4Ur4HGV1Ue71n%2FisGeSPlciH%2FY%2FlxehXM%2BWczQQf%2Bz9Lz5BBJdBEkBF5BX0mBa2A4jsiCoMS5hUaR%2BtLJlAKGBaNwzoIHBC9CzyCHbfrwM%2FjoPnrGMmkd2CXW1Mwcxqaz49frEiAL5sLVACjcWVfC6CS3C%2B97iccsYjP7Ii9ihcx3BF%2B2pmDRAsLG6D6Fz3pDYtPF1c4f4Jr%2FE9BC8sqADoe4MVFoBiC%2FU8WY%2BJZjx2XY3XXXXmYu2ElcSm6BrcEZBNYIEGc%2BYL1HAFl4tSqkLru0XMHJYhmnAFRwIvXhPLwwE3QzunbDCr9dJ6PLst6TY6KcHGTafXg9LrJ7LciqAIDoVAKSG6gwz4X9wQY6pgGe%2Fof4hr2WG4rnMNLSbt2aDEg61x9wGEDmim2MacD5QKc7RUHBhvmO9ctwSukUS4RXTY7b%2FnMJbTYInrTDHExuugvEJ%2FLiIM%2BR%2BIcPa1a5F7a%2B4%2BAnT%2Bue403BAgIV1vMI1t7R7Vr4MMaeRGxwnrkY2LndUH6DWnDNfZVnm%2FlIE8XNPNBNND7QgX6u%2FAklD9CTtot8SrWgQ18OnVMi5oVHXRk9emyG&X-Amz-Signature=296e9eed8960b30446d32dca135cd1408ae6f6471cc0e6717d9e7fb6f75d5e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
