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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL34TYW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGlq%2BVXE8qnj9dwBCt%2B1lcpDmfMzQ8IDrNCyjrIuKz%2BbAiBGir%2BzTeYy7HCibYPri%2Bh%2B6oKmrLJf4mpGbdppbS02tyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMWOuYDLKYcY4gcHTIKtwDTKa8GXguSsUBICa3hZxusSn%2Fq2V3BiuQu7YbuSJ2YdZvQCn7s5pE%2BaeJEZZjB9%2FztRQWfKNorkQLTRqsAqTPKuJOdKnGnwd7kPHhxnLnuutHhZVlly%2BcDQxjN%2BGtaCT382c0R33yzADxOJ4Ynl%2B6zQjQPtOnbU8KnkFTA7aJlQ2mNjFulFamqGTm9CdL%2FnXIo4SM9OtLw6MRNBAHxdHEAZRPe4XDR%2BPQBfAkk%2BuRP%2FqQg1Ivbfnje%2BAi34wjfIvd%2F9vfpH9GW%2FCgioq3zV9JF%2F4%2F%2Fb7MPGHLYfrybyStULw9xjjJ2gKoJBCzePN4zIht9v%2FqPO%2Bmm8HZ5%2BxRbQvfRs693e116wj30av4bpvZcyq7AvUrIjuYRb9CzsWnTvr2zQbTq0x20OaH2m4aM6jMjFzUGT8EdOWAG1g3L1oINiILnGXCvoDwFqL%2FzIHxbFRfuwh%2BNiPNAYFlru7HMHcrMXgM0gbh90LRBWTC8sYhNJcyMXP4YCSFe1ZDlaba0cjw4PvOlVh7xYHXEBVfLGNlBTYy9G1GzbYsQ%2FLcvcXIRu3tzk%2B%2FAiu%2F5vdZZbxI22hr59Anv26yWZB55qd5fZ5jb%2F%2FwTDxlALuWdxGL95bElQhQpfzSeVE4IM7nXHEwxI%2BIxAY6pgHajNjHL02i%2FgXZZUsabhGfsllXhWIl0FWzSnf4VG3kbzru%2BlMUBNwAEE7M%2BsjuuJpIdXuOkNeErt5%2FZYYoDizn9M6k6XFYkeC9f8zIbxN%2BBj%2B9PA5RnzYlmZzvjyUkBkFDy0YHXUNieoiqc71t%2FM9DgkGfseGZDguzWL3v8iWVeDNFFN%2Fc2d4OQj18OiPbdIW7lYVdyiNk%2BoKAFHRymM5yJ4pfN29x&X-Amz-Signature=696fff25ac43486475f2437a514b52a2f61567b2b5406ccbeca7645dd467debd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
