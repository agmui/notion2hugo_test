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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4AEV3LL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDtXdChTVGYYiHDT%2FaQukT8vVjX2SqMgyE400o1d%2BnpygIgaK97h4S%2BtCGV%2Bi7dxsQ%2BMQSphPA%2B1SFY034VbU%2BxkTIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNakfCSjo3SGUHmLCircAwc88QakyICTU%2BcqERTuPsbX2y5jtnSjhsIn0EQVw0AhMBAPotKkliK661%2BfQL2aZ0IlMvFCQV61uI3ZswdUiN52GjdPGee%2BK5sf%2FkAVzN%2FYYrOd%2FKqAT6%2FFwrtMDZu9h2tG8nN8Pque1W8QPjV7iS%2BEeqXlVkDHlBK9dRKykgIbnNPAcJC0dJ99eIQchpusoXLACe5QWp5Oq6y9%2FeapehgUoy%2B4gYpyruJQNFLDYw3huhGaSjHRfSf0zo9PTe3lJJbttetI0toET%2BdPW0mMFmNdvhUd97%2FjTq8Q4TOYA7eNEWoNum6w3GdXT70Ev6WaaBnHGHo4yspRG%2B8RRPShW84aFG9qzXq9sZ76sHhjIAJTi%2B6WXXJMRSeUYph3ukYOAlCwqyD1jGWSan56rEazQC4AtPJ18JROicIf5m6bIeWIT6g%2B%2BctjHptrfTzn5WGXVDvZV7tzmHLiPApHcMz3fhgN5oh84Mwv13Fc%2Be2YPabFuSRAUGopu7MESlKDFmhIqsqirlGnV%2BzzG3OzRi5WDN8btcXt4ld1x7ggb8M1DTQhuxZ742qtrDevraXatO8E3HXjBpjkFn%2Bas44udCykLEh3tvcmhdPsxKvad2XVxRr2S6MqteuasCRNHVt%2FMNDk%2BL0GOqUBl1EQJ6EoTTEMrMConWD7jQdJ0KgvqnNzNkxxX4ha9iSRV%2B6u0RiJkxMZ5RXAkVyBVaKcX8JMCq2NzUH%2F48f9tGqTzH6RKEaKg5oJ8a9HZ94LMQSnN9u6OIocxxysJqx3cw6AtDyNKYzpuKoPCb%2BsiWWnUVViN2iVVeT8bD60u1dWF3ZC3Gd8Rk3fcNmIvjUOzwewXcq56tTDfvb8MhKgiViPfns%2B&X-Amz-Signature=67ef0bc092d5ae0b529e681d9636ef8d41612c08a426111c6030a782d678fdc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
