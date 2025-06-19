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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VGVTMXA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0HDFhYSzNtKz2oIlCgtdWtfYkRjYWV%2Bt1xhc%2Bri1WHAiA5mO%2F98ovtoXtifDcdbMI9Y02PNJKOMfAuWoCLf3cTpyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsgxvw7r0g2jByIcoKtwDGlK%2BFfyXg%2BpNo0JzzZYf%2FT7qL75ObzaEy%2BvGJclS1nXm%2BeCxjkZRYu5Us1BbtexwNRsx2pY80Q28nKl7qCaDmlJhwncCDNUJcCHNKkLa0F16fb3NWZGROPhsJNJVZR21p571Cu6T5syMhWn8TRr3KOA2ddtbJCaNV8A%2Fd5CIRYWXo05%2FVEVGDpHCb3E5wQ1SopHPT77WDc8lcmiscHhmezHD9C9jpjTZKfiP4dXL5nWJo0Ijrlri%2BB1%2BSBhC3y8S79MJUZL9BWKvnil9hRrfJMDSvUjzEZaxM68j%2Bd5OzMdvLz07jOKldxjCJneIiurRB2Jx7haZpRlRVOfJJw2x%2FArKZIssQDXtapMhV%2Bsj3y4bUEiKk6g%2B%2FJL2rrH%2FgMHdj96VHK44GIUHRNPa4Q4JUnfMs86zbgBWhfLzZj%2BSM9QwwSijxcgis80sYofWSJJI%2FomDznfrhrltvPox2mvxP%2BqllwfxMtsM%2FIAy8TF%2Boc7BnHyKT3kDMYrfKxrZJDeOi1eCxPEi%2BrBIEXKcxjpTL%2FtpZZFx37SeHMlJ4e0kNiyI1L1IxS58QP2%2BbLwJkWdjg9Ch2rrgGH4jm4LrV4Ckr2b80qFQuIkbF0uTWOUF0M36xZL5O9TXfvQlbGYwt9HPwgY6pgEmR8ht4ZH%2BkD1MTeUPzjPKp26VfOY6t0arNXQhbXf%2B7zpwM4U4VA4r%2F0OxZcjHpcw5eAqGiS15PbEQCXGtyWsHZnn5PUqUVZa2txj83ThJjZSAmTVZmEPJnUk1uWIGEg%2FwiT%2BpQ%2FYKFhAvstiblE6Yp8Ea3aCcKt5Z581JYrXCqdT0IPMJlrr%2FPf%2FExQleOrxdy4EyIgX77612njm%2BHq9fjgmPc8Yx&X-Amz-Signature=b140db52f6f40578eb406a6e0c4e60fec56ea3998634e380a9664aa28b278fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
