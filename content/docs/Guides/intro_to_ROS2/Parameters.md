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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUTN4IL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuVE12B9i%2BLc0hMim5x7OfFp8l2eR%2BtWK39hScz7z%2FiQIhAIcs4QU4aqEWxhYOSmNSWeMd2JDssXozLS2SFAskHFhWKv8DCDgQABoMNjM3NDIzMTgzODA1IgwhhOBHr5P1hV8jNaYq3APzUNwsj1IF5sB2vi%2FUcCqj7%2FxGRs7oSiRx41J2GFzHUa5xVdICex15kqqEp%2BT%2BaaiRrSoJR2vY2SEct8edJn%2FbrIVQZ2ePxCqiN%2Bx0oq%2Ff1i2GV%2F7GW8TJLCfbdr%2BS5Z2Us%2FWwJGE3KBP74ajFiFwLt0BKnjBV2wuawjlpP3t8%2Ba7Ts2I7t86Sus4ngQpJVcoMH2zdAOQ2aJiB%2Fv6eJch7Em4664ERRRQz2bAqxRuu2Tpx9YMZTN5TTakVA25MDEfgpysOP8C7GAol0%2FMaXcWDS2n9MzA1N7etQp6AiZzaaYG0%2FBnD0o7U5YGqe8x5SmO7Tb5x%2Bav8ldefLijWR%2FFRecnvM0CE4rLrLY2M%2BP%2BarRUqW88zX%2FadoiOdxvkM5jyp2hEgaHpT2%2FI3bTU55nMBE1DDJfspOJaI7jOv0CR4YhI3a2L3sGjCZclSdI2aVi7ezKVdDUay3EOMn%2FE0opVTdd4uh1IttPZGRZAw%2Ba1Y87vs%2FS%2BCU9%2FZhk8o3Sy9njKPi6dYAp0ZXnYHqdGtcJ02IS2GRI00R%2BGLuEEWk03KwA4i1%2BngjKLxAHy%2FJEQCyxQyZ%2B9fDNQQzOC1rD4QhAckV56wRXqxf592WcotyQdxAW2AdHIjlR7wwgHqZTCJyai%2BBjqkAQ5i5CIv2tIPPzuMNYu6KgMNC6dSlX9YNIPjVgQhZscJkzFR1Y45qzmyBOm3pRpn1cdrp01EMs5e48iNmjb5BHuqLTdwTg88PWFC%2ByN2QllcC0dgKlW2eorT4Gbh4rxCGATJB%2BXmSv9JLG35yPo22HlWTglu6YxUo7Y%2FSzyDTtxanzEszM1jbtEYZ%2FWoL8Bos%2BNjIZnnNsl1IJ%2BiInQO5RqMfH7F&X-Amz-Signature=6582720e5421df21f329c85a312d3c9c9b422aa4298c86f5756ba7f9d31d3cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
