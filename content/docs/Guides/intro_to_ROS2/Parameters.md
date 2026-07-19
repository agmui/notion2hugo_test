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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SENJC57V%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhE19%2BTWblqbF0F1%2BzfM0x7H5UEojyJRvJgiFetVoTHAiAC6Zx0dqVKOtUOIezsPOUjTC%2Bd9gDP8vPVhwczbnZEYyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp9b64eXg5QZq%2F%2F0jKtwD3Y3elkIzrZf891TgxcELxo2p0E9ocKyFqQt3hXDwluD0WNMMYMKoZ9tlOASYnMNKa4efPxCV7kBDAuyps2zs%2F5MtsI32AqdzG9Yc4EU%2BtjLUIX6fNa6MKZX%2BOMy5r%2B8lk3NxnGF0RG%2Fz3eMqiZuEAOgX9W9lIzcQRSgnCXxax3wWSylxa0qCh8a0kVyliDkpms03la3QWYjUBqwtIkKb7dhBy5lvNBMXpP9sOFBizn9Wt3R3p0iir7vXmeGE4M0xQljEX%2FKS%2FlUZzFS48pJgGo%2Fb92TvARmP%2FCQZehkAdFhMZIb5tGAegw0qcVzLAhQTD9d7geYKYqIE3ns1j1QQqMJ%2FWjrq6HDezJMotyZV4lWQ%2F957QjGrMSAu4YMgX0TKvHoZawEIKJBE1H9j6qK3CGyaNN6QJ4xNFtVsUB4aTtUUwklrAoz9x2PX4i1f2mU7Kni5oWxNNai5IpHFon0Fgew5rqFrdFOlnHt70XPib2quSM%2FurlHyp7qrqM0trzuNfoOWC1vn8m%2BEAao83Qar7azQAWGyKhaRx5vZEGAkgcwbhYxf%2BXWX1UqnX6LrXk7o8eKAhqety0%2BjMKVg40Hr4aI78AGXJro711%2BswDb%2FdtUJRZdWWtOdsJPXH4Uw5Nnw0gY6pgGXCOYGuFacaC6Fu4pbb%2FMQYdYUaZlWOkOG9oZCvVv%2BtAt1mCFGfUlkyjjvhXFVOGmrs0N3oV0Wg7ZUZm4VUtQC66%2BAYpbxQ9P27jx4PL5gxannMdLbyjzDOF5ULBeFdO1ASBxgd1yBNsnu10Uhng6N0PGp2tGj3VsM7S04PPianD6jo4XVw7NFe2hsCfO4n3ASGkv5Ma4WuqWg9BALccsMiiB4wRyv&X-Amz-Signature=853f4c628aad5ade63a3ad0c500a3d875ac5d35fcc4750332e9665c310ad9cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
