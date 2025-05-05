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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEPS2BK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAISWrm0wkEEpRTlN6nyXkE1Qd2oC116UdilJ5rlcEKxAiEAma8j3M8SBWp6BQN05suZ4EeTz8bPk9cTPSvQAifdJiQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJLdoeqDpxabZrGJmyrcA%2FTb0bSQjUrOMf5UZV1BIMTX2I8i1eLKY8NUE7KfYvSdfd4WhWF2uRndO05f%2Fp01ojmDiMH5GcO1lLJ8v0js37ikR4opwb4aHy%2BymFMfS1GIo8oY3bw3mzBerK0z93wS%2FscAaxGdPPyBGjZeC1Od0dvJhsxGIKCLONoI0JVR7oD5MeCDxiYYzE%2F%2BszHL7OLqJMf0Y6eP8HeqzwE8EeiTtpMas9XKv3i1Da7zVGWAc17ib3UNWKSEmodUZwgqxkFx37cc4q0O9Wnlmc14qqWnDQj%2BrcJZkXXn0fHA36D7N34VQLS7Iz9Z3HS0endlYOAnnkhCJsgvqEldq58qTIRD7g8wwxQ25NWkFRync8RdmbhqmFcILQIqcR%2B19kTkdhH1F6iXtkGiROgVN3mxR7fF6PHPkvjjtXqbRybIjGM8XSaYRZudiXuDEqRwN%2FlJMIoiB1A79pmykuS8fG9gga%2FtpJdWfEWDDUc%2FvIRS99yjo%2BRr62b307mc3uUWOXXHU%2F5KELX7eoZ4f6T7xYssD0XCSKKVfwloBCq9jL9V7G89VK6cr%2BLpoPdd8CNuFVzIfvNBExaRC9V5%2F1cgzi1o2RqEr%2Be03NrH%2BhhpQn9%2B%2BhOOxL6KR%2FETXkH2z8Pe7g5XMMKs38AGOqUBGfiJ4zSYeS7lU537iY%2B86Iz8%2BWjBwi3wARif8h%2BbFMDQubyMuH76GexD6kkV%2FmDFTz5DSWdbrEa1v%2B6eDsUEdMs1SBM08Qel2uqnpoF1zb6BbVUzBjAr4i7UbBiTEdYGyQw4Q476nwghB1PbWG%2FWwvkdXBnP3%2Fs9hF4RsuyqWc2cHfoiM6wjGuEPs%2Fg4%2FBWQZFjwCZlBF%2BcIoQCFyxVYEBqOq6VK&X-Amz-Signature=04506ac22df0bc34b44d19b59c4ca2c6cbe7244b6970c4cc0be170ef99fb84bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
