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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2D2DB4R%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAgTzGezeVskvIjV3v3C70MScIU4tUJ%2FczFVe39UjVP6AiEA7BNRza9j3PMheIeU4E0hCNpobsrpjPxDXj88mVAfvscq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPPNjXa%2BGP0IEltRLyrcA7%2FU%2F%2FMhUo2e00mG2IYZSU3BdSgk82WndvMLi0BazOQC6FGvI%2BSV2Nqjun3tnaLolR6RflVdGtHNNyFwCY5CDesWXB9sBUgJ8Weeln9ueWmQNhzzfzhUaC9MttYURrrs6UmVLq%2Bop1iof8nmx3z3FD4VIS4WUGartRrXnSexXFDNucGwSzaWG8UnG15cT0nYGg7NEdn9v37ojdTPN01ahCXmJoJW%2FrEBn0Hv6KjS%2Bt5VVSQ9dDjLQH2SAX5kINNPc2%2FEQDn9C7RzxWlTdqW8HdFc5aaloIevX1NvJw0ixxA1wzcdxByRCKnyoGn4GTKZbG1y%2FpFtEz7VZ30vGG3YLYkhDscdaEumYGQ12KptegNaQrZyNX1DNnRd8viQ4W2mh%2F%2BFBoyN5mWwlz00sJ2t4yoKLTwuY979bK%2F23fHRKhrjOLJ40OmnEk7zFOXEyaFBslON%2Bs2s7YQTEHIGixVYeyx%2BYF0DXuOnu4IvdyT6R43lbljM9Oq3pRLDYbwJtLarZDJBvx9hmShaI%2BVmDS6R1LH7cksCZelkr3nAn8xDqNomxWX1xG%2BGv7YXFbv634v%2FyjcJHGIe04wRwpP9SONdAcxfa8Lsultnmt2NNpm1rpZ5mx1K7V%2BYHZxG1dyvMNGy%2F70GOqUBP5pr457h7ZPXTOrEG5HQz62SuqN0FrWb97gnKvSVllouY5MjnZ0f2ZW2DAIAEJPbPx9jHFYVoc6jnCplsfXNBxhggCqwB4jc%2BWqfetJVSorO0w%2Fu9poim%2Fb9XnHQbtBDPtPSefAke6fafINKWsLd07AIgLw5Qo04qqYVQKev7r%2BJZ1eH2n%2BAdYy%2FWF9ivuFrxUL1vlusWRqaebtTBtQETJgcQXwg&X-Amz-Signature=686952edeb975db7ef657a60d66160bbdce9d1a283c16d015baddd57a14f2330&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
