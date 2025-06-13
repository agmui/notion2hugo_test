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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2AVBMT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDoY0hrG4uc21nOsTZs0hwf4mKV28jfXmiILEoNMbHPXAiA44RV4ZTJaW7aw%2FoNsrNT%2F7qisYM9NEUbGuBqImHhNHSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9J5OVxaMywo62O7oKtwDp2fNWz9Z2nLh6arFnx8JOnencann08ehTVQHy4H44pzA5uxQYNADM41YvI32SpZ1ihP2Mg6CP6oLMiy8VOCITrMTn1oP1D%2FDyxw7aTLv%2BlfHX4khmqkP4QADD2xgLBwKg9GUmJIZeebPEt2ucEDXtv6BLb4kdxyr8SGoJyThBNgH80wPNfNlKmWRGAIk%2F24TLkLJC5YpkaLLVTJDbOfOPtaWLNhHiLzw1ERGDciiL9olNJ4kZJzCCoRm7SfNv8H9qjxuO%2BN1c8%2F0fLEHIY4gAcnPmehJIaRxkOLUp0SNJS5W%2FRufBVewURIcXhgiRYkheWf%2B2OLgrxF74hOBUNk0nJ9QEXXM4ayn%2FiU8o3DTe26CCNZn9JzS%2FyJRVKTvcJpt%2FOuROKDMyBTCw9%2Fusuzz6RNamrxYl2%2F%2BkhdZgfdjTENny3giWx2m6aEmO%2FIwGA5x%2F7D23jxvHdB2NrZ%2F4oVchI93fRoAKgO0COp0BH2LzkatkAlW31HYmB3MlC76heb9ZqFn3IOuq9xBOOKKsMYFvu68bMVQ%2FD0DG0CsmazhzIY2RpB45zgInBSfJ3BnjsDOFXuy2iUxiYypf9Ri%2Fkc0ttMGk5RKWYfLjYhL2vpk%2FLxg7XD7ghQ06c8fAxswgqmuwgY6pgF52CqBiJHNeh3a45dpK5%2FVK0qkl0LZQMevGJwKkDhZiGxbH0ewGGynLslqzLgT1Lh8WuTgieSnkE676V%2FhuVfAVru1pQiiGhDP5QmgbDQeyGqcfbmvPMu4k6%2FF%2F3VyrEJL9ClYNT1KFssA97nrysp99W4fQm2sOxSL0zHbBYblaih6UP3TVf6BPx3qidqQGIjC%2FmW13gTJTG72Hehckhw6WarDe%2BOF&X-Amz-Signature=6c15016d70ac89bdeb6baf5f5bfc1ad33bca9f404fedb0a74cbae336e7d00015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
