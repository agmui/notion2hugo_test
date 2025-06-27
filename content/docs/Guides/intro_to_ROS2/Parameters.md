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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIUUR5V%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDRNXkZ4dnh6o%2BKIEiZ%2BBPTOHSyJ7enWFv3YrE0h%2FMTGAiBhtVb9ikkMVCd7dd3b%2BSt75Kfw0HbqL1kO9eKHmT3gKSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMx6qe7bnaUoqzxLkCKtwDkW%2FtquaB1t7z9%2Bq1MRwap2oYedX1T9sSqBYkj0hCvYp2ykMezTOlTFuXsZdbsLkQfJMzyhGdVBoqj%2FXD%2BObwyQtcHcYl0%2B7oY507woDC5VTW%2F8vF87M%2BC5aJbZ1sdhQ65mjHIOTkdhLjW1X5v3lhV%2B6S07i6kOfBIyLw%2Bq4QsE3KprmKLWa2%2Bk2R9pHOX6hB9qAjmGLiJL8PJjefl4FZGTdjnpr7EQ8s2pWBX5QmXHg8jHnZwwY%2FlER55avuHXNN8VGsBJZQ5DnfDFGhg%2B%2FRwM5xBGiohKfOtgsUPnz3t0FNaoXMxy%2B8ZrnXnqJjM8NsuEFKA18hFkNfLz2P0iOA0kqjU1Lqgpj6q0eBTP1HjcVCP1n52wxxf0y6XMYjNl0NEb86ux73WAcng5T2ac4JvrJwFy0Tm4uDIQnuxXhoVFrHlSZFqsj6BZdOmqxL%2FLG0KjiXgICht6KRzn9Si%2BQ2btV59jVh2B4rZNkjaK8vyIlzp%2FdPxBMuwHy%2F%2BZEHCIvy403b%2BwfRecQhsQ2Me5TM2IHVan%2BdvIR0A47VCN9XHk1%2Fapseb9%2B%2Bqvl6iQTe99eq9fhz4SFNBLUcN%2B7FgjjWtxUoBfpQru8mS6DgN6dijCsP1w1nM%2FpHlR%2BWZocw4%2Ff4wgY6pgE7rbN7R9ovSFkC7sd%2FfBwzP%2FwMx6cHdgIOzf5LiM5JLji1%2FS3facp4H7YG6FyUxf1n4VdXsS4OfIyV%2BkJyLjvAzhwMc6rGpEF%2Fd12DUdnn0K35hRkwQLTVo1IT5gmcXMGmIUQxVhNEcR%2ByXzn9aIr8lW87ka1mbD%2FD4u6mV1bl3RlI%2FAalec2Bu6bTHxzrzk083YWocA2jj%2Bah4MGLeMIXVm6bXRL%2B&X-Amz-Signature=8a0cc6c6ae185dbf369dd2bbd236984291140ae5b89747c6d730497c49010ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
