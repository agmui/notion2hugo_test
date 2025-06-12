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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667URXNMAY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIEAMQHgr3rc2y3tsBMuiuyAte6MMmKgR5bhlVyFynCbyAiB6gC8TQwkHEaabPIZfaP83xCrewPtJ7K%2BWqm1QBpxZYyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5BESW7p%2BHitlCLF7KtwDjiberLFcypZiXMWgLp06ExHAwuR2eYZSJzuaz2CY2wDxvgFsS37H%2BtW%2FPLERgW1n2Kcu24p7Ib64%2B6MB21DJf07fxWDEonpTe3YgKMCDqV86%2Fg4hMn0duIv607VRjRhQ0Zhq6kRBqp0TXJRgBKDVoc2f%2BVrNSvFNsXvwtLNPYrs%2BQVYJON%2B6wtH3Kl1eEq9lHdqcmoxTq%2F%2FUiJ%2BNF2hS4ltBQSGdN%2BisueFKdqW6ZXM5CqW1A6LFbP6RvNl01nPObcQMtSpuQWVj2tFulI5gIsahcr3QyYOWVuSg6Bxadkq%2FNoGqBYejACk5Y0C0htsKmXZellKxtQYg8H4TBNUTw45GS0iOwedMucQGKW5C5I8tXNG5Tt2IYldHHrR7GdqpJuPxVy01dC1SkApPPKqwgef9vtwU8TPBurbfGB6HTbFGqwwpU20msThUNlVWgdSLnJzY%2F%2B%2BqMT22xD1%2B3Zppio7ylFeAxW4pnbAmTn%2FLYK17dPU%2BdWlevMjFLqoCBebCi0RKIKCvf%2BN1vetBfxplOdqgH1j7DDF0s90VWiQVcW7bcVD%2FAJVUxG82gRVX2oZRtzjtUfeUc%2Bk1nRdWhtRjbBx%2FYZCVPEQG9brrKsLDuMqpTcTi0Q66mowUhJQwxvGowgY6pgHpNDpZwR12pQh7lGqpqTYNsb73JSTEbMeQxIS6NseOab77HruAt31MRRS%2BMi%2F7UKbGUgKPNnB7v8OF3AXLr%2Ft0o9uCEBNoQVpTqg4HkdVYstOJwTWt8sV5ptCdC03UNwYkFB7m%2F3h4rpcy0OiJlq%2FwhDOBbu%2BImFof66kb5StcE58MgrENw0RUqODMHsOMwHrOZiQD3QnQiDd5Xzd6Jitz3BkvD7tG&X-Amz-Signature=6373989746c5448d9d0ea02b7068329bc705576d8adbe419c3bef5a470bb7946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
