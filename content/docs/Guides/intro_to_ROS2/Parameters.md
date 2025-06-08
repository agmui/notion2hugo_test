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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423G6H7A%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFUw21jTVn6n8j1pKIrsEAnvGx4N%2FuukFvnT89ZiN%2FlgIgaW7smfe4glANLP9bUCxn1frOvtrtAoI34DPyyECQ38kqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZKADepN3%2FlsCBc2SrcA4eohlg1MwTWn6Bmqc11gg6xBno6N6poN1AsisTZThFlk0%2FBu5ug1wRPRfBxlTVIA5l%2FGBAt0UazFHJ6bHaPxV5s8n7%2FJfnW3MgviU1owX0YOU6vypHN80mSQjbHCHHOgDE45RMG50Z7odNAQEq2DoMatzt16P8Vd1oX47hNLBKZf39b34U924AvENSh3SDrdh0dtRJ99FaRXQedze%2B2tjcrGQFTP4t8V3AV6QzeO6wCNhfXww4X2pBh9INWouJKdiApDtLoRujQiuUReNAlD9LzBLhAgADzKSPJMFhPZQYCLzB8IY%2Byz4o%2BA%2BoINibGtHSrdaX%2F6I1lHOc8Vhgxz4brgLL6yC82o4Ke4I5tdbeour2XyR7CpJ7drjWp5EfZ2VI%2Bbqhjz9ofbZkSr1b13fedTuGfGIiqtKyRtjIQlQQQ5xEKP8bJd%2F0%2FXSTDK8KLdwXbkmBM87YmAglWrG%2B1XYW9l%2F0w9vgaJspW0zPIsyEeJwIET2e5eluQcq6zWvzxFCcMzhXEA0OM944VwcO3DO%2FEIzUa8SadBn3Q0Kn2PAN8bBhF%2FQlxOCayBo7mK1kaUL67ZHmtabSbtzKHab7AbxvCFMpl3v6xrjMQgLcHW43g5z5WJuOC42O7EJgtMMGxlMIGOqUBbdhXy3oVJr0MlTufaPDRSuw%2FFA5XOehjwoKQtvjipambRt9dmcGEt%2F1CAgc3qHQuBYak3N12PtND3MjaBDG4Geq7F65czK%2Fxw76zPSI14HmMWKmllz4W%2FAQJZfooh3xxWDwTm88bs%2BfIUj4BTQPThshvYz6Gbmg7RXMTq7JKBmd5w1yV9qFc9BrnzKxQCTnhN666j364UnPJXWxsTpGp0cxNB%2BHc&X-Amz-Signature=6f138c57adffb70ac1bf3912c950d7d681fc98c19c974d33e5ce765d039884db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
