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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK6JQH6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDHR1pS%2FwwEyLR2KD%2F7%2FOJ62lhBj3gzNW1oq30D97adywIhANerLCMd5r4wRvQvjw5A19iKkk39q%2FdVt44W8kNF73UtKv8DCEQQABoMNjM3NDIzMTgzODA1IgxTqZx0gFfh05GOGf0q3AMErFBepK1M90jrljexNGj3fWMCpDH6PzLwhPAb7UBd0yudjdHvtHh9wINRrF3efJqd8a3Sy9bNEQlbSRjL7f9YYWRQCIfIs9DuT4Dz48vt3XaMkXjHJNH65NMgvxp9HD6a%2FQ4gWL0CrTJT0sKKgscAMeIJSmHpT827wR8nOaWTv5cB34QCPS0rjiiS%2BGZ9as5c8JTw5BqeWAwqOBbNBnCvfjzEZ7Is%2BHMLhrCequBVhbspHtE%2BLGlLl%2BVhlPFnu5J0gTvOzpBDCIcHCOQ1gFWUNVYXjuMzQxyku1%2BUMkeJMS2WaQCcwK7%2FNNkq0lMm%2FnDNxSNrImWjFyeHWed4KMi%2BGvqqUr4m2zQn%2BnqaPg0%2B9mqLl%2BGB%2B0YMGjexQ9B5ETjr85shXImp4yIY%2FZJrGfTTkYZ%2BoAKjZa1rvMsRYzchNigzNLbsHhfPRdFko5bJAnDHOTGqi5dPCz%2Bmk5tAoiFwJCBG53X0nP8AsKEcHDPHih47XBMoHtypCwi9jFE86i6DhkaQ2H%2Bh0aqLvrDjl17R7YfZeVF0EIguUemQTSSdTO7b%2BylBYtg1cJsLkmuB9bIrxEChXtsV0q841rpZRL%2BY4lGqRRzFNxVwBsTB6jySqcQ0nrFqFozGAb3UHTDjp8LEBjqkAY0aQXhkBjM6yPncwwhOlgRjbkk931NkhcxFhQiFD0eUiCa0KhhorujElW%2FJ8bTkPKVN%2Bjkkw%2B4JLwgyMRFhcH1r7jDIbqT4RcyrZ%2FG%2Fx6xlEZJkqenNqpwMuCYgVcy6emnaO6dVtfC6OjNDL9GbCEmfG9llVzEXVoY7wvoskveUzdCuL4CtYb4HUL%2B%2F1FQTfqMGHQ6ad2f7r2mKUVI7i4pupXvR&X-Amz-Signature=b491fcbecc7b5cbbaa98ce34504143521374fb668e410e9317ff08002f8d15e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
