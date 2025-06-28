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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEF5JLML%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvMVwuiBAwnHMHD78VEmqJ%2BLljUog%2BRr%2B5qQbo3kdp8QIhAKCtwa6A4MVDJTB9z797jEmJeoPjff14ia8nTabh6C75KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPdRdFB%2F6wgAijRDgq3AMzy2deFjVDejZVvy79NSGVRRYKJ%2BwNwXS0ItRmNYKyHCOJUNNZjOmMYAd6SDHPI3tvrcFxUNBXyKz58aY%2FBj0Iex%2BETSB7gwssczNiQKtdj5Qk0ESVSSNF058FoD53XUyw6ysL2goqXvysWUFGriMKNWjSxa9RH9wg%2B4JrhRqsuvkX6OLigIgpQhkr9BiTNE%2B%2FRwq8jwuk0KtUogpoFovHyr6ZoTZ69HlDKtdj3MQN3zkBpE8ylWGlCylBpxObPtnWYAJMzDcdpZ1EAqnyh7XAPY9T7FCJEW%2FCXJyVp2cGp%2BZXUAi%2BtyQ6YhAk5WnblIIgFKAvo%2BQGZ3%2BVosYqxC93ySG%2FRCp5HzVCNx%2FM2a5pDxdNnVHwdLOnZExF5R0ROSozLIZK3SsgDem5RH9dxFd8vUNtbMsoR4t%2FTLQt78mIs84TTCZ4ObyoYRPRGQfvUsJorwf1ojzWd67y5%2BvXtfywYCEUQlNn8H1q4FNfcHMk162j11755Xhbqixz1p%2BkW8BRcQsA8dfTyROzZ%2BHv0myDi8FusoG1aKsA7InmFLq589iQ6Yb2HHYL8EyrqWUSpEGcbrn9I1kigN3cFRf6%2BIPCSx7UZW%2FNXPUQj2NhwctjrquN5TAhKMWp%2FiiKzTCM1%2FzCBjqkAY13HT0RBgKTPNO69vMs%2FdxdqlI2PiY1AlNgZZ1zWF1dReApadoZfIxw2tsGl5n6ph19LEvqipAdTHfT2DrpOa2PiAO4XehFohJhk1gIc%2BnUqizi52yxVQFmaMazCBN6y9%2BSt2RvgNcxy7DLXZ0sd6vXbHABEndywHYu5yLQS3egngNvJUHcJovolFfiKwd3FHhlmyDlohkdB1wbJoo3MLmLBH4F&X-Amz-Signature=3f9fffe45e52b62c43f90a292e57b0993181a12c7c84e628e4f7f647059f865b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
