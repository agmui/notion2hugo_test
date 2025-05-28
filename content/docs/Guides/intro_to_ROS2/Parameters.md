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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEEJYHY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoLt1DuXR0o78zcaFLE2%2BjmgJBblBvkqu1Jr4HG4uNbwIhAJ5SdhmJSlOuTkWaH5ZRdqaqgcC4g50EB%2BggpQgXgeH%2BKv8DCHEQABoMNjM3NDIzMTgzODA1IgyoBuVXa6Jg8WMXuuAq3APrW0BapkgSzIyK%2FQOcQvLlP%2B9Y7YFHuuLdmeX%2BOlpR9Tbtt2xxHmRrlCQAAuOxE2HEOBsIDD%2BCPX7Rr7a%2FuFyhC9ObJPOZqJvzZBPOUVYhkKMDnF0jfhm0joxCTjteRP7eVoDUUzkL7XF158F1c480bSPrGM0%2Fn3bsXyybm1GeHw8XOs2TRxXIlO1yCKNk%2BO20lXtVbLg1n38n4CkIPvczlas%2B%2F30iOuDfO%2FdoJkeHKSikCzoMLfYfi5ecMnwJ5raWNMcqo8U98Go05XWMtr17rgI4DqXairsv6c0KE7dsiQgLUesZVpcRVfR%2FaR5vNXulUa6J2WwY7Ok7ygW%2BtETzo6WtGxrk%2BGsdz%2FgWtuvWnlQoQ5o5v9pxl7%2BvglsgKwDNngZl19zdLOjGx9z4pGMMBLHf38pnLtGbsgyngvB4WmlRZ1JTndwYAbPaCUwPPaz%2F9sDMgLxsyw4kXqes9DTg1ZwlszleDt9cu44CEeSHsiY6ia3%2BgHzlCk6FvIKpY%2BBGNSYtXv5QEHWq12mZn1ALcjwfBU0vVXW7dpzV3UnGnWlgYAY43DDXfBL2UJjKCdhBG%2BlNkyNTRHZ%2FcISkKGAn0yzaPOoFrTjVdAc%2BDyej%2BOXyvfCUTb4Qvu%2BVxDDM9drBBjqkAbkpFBU3XZ936RBf8196lpMAcjJQQ%2BF8BRzxocpe2c63tB%2BTn%2F2p7o7JPFUk30s47Dx2mEkSQwx5euFe0bYOAdK2IOR7C8P26cMlvS1yosVjl5SUJnDwTiHb82cD7sDjo9%2FipZwUeuxUsKKlcymQyHduvQYp6qEBqJ67KWMXDujYcM5H9K%2FyqzJAgHqX7HJGEu6Bb5eo4RrEal9qX%2FHSeK0bqSjQ&X-Amz-Signature=4494abef03005f09ee3a7d5144677cb936be4264e546f667da00fe2ef62c6af5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
