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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW36KGA2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ZUSfkmiMQ7IOlEHGF%2BP1D7gD7bgeK%2Bsgy9dhPNZueQIhALH66Pczs%2FDqgF2tblP7jVOjKba92%2Bqi6nEwdo7zqLSAKv8DCFsQABoMNjM3NDIzMTgzODA1Igw0PoiMuVPa9BA4EHYq3APXO%2BRpOfkljNsac9MWubkazaEEx9Tt%2B6RgYNQBTmz%2F13B9l6CjBfnp7ulUg7AJ65odbZqSdzWyUmudoagiTWhsK%2BCoEdokjzcA4FILIAztIitn89aCR6XMgSYAxiIsjOXXz0x1s5BblWK%2FQVa74AoT%2BnOh2NG2RAorQFPeLMlBB3nVfpjZY6kQakCbPRdsFsjuQ17tM4VbZvP8rMvrR72rxnzityakSRtCYwxSfhiBUcwf2nN95IPnzaYkGQ%2F71UkZNbmDSVzwWmOIIYua1dWGpi7ORjaNM%2F7kPZrbBGLMf9ho6xIZ6srwqJLteBW34jsvrWGBkDQ0nKaCZxBkxVPQehlWIwa6D9Tv5fibGGheVLAkP%2FeYW0xIlJWdO%2F%2B0Jrl7RHaJQfotJab4B10R0x7%2Bx5af%2BFpZZi%2FYNqHAJiL2s9RTha%2FawtYHgkEK1c3ucsbQSbm049bB%2BTfMbCNZbisBzSQhv1s400ENithhzqJxe9xf6hreab5xS%2Fgl8k8nrO%2F5o7ktYPhovrx5CP8PZPilwaHWVGwcfqlrwDUzA6qxSqTb4SrGgWM7UGGCDfImwuhm7uEyAE0U60itMH8DrES8LFbpv6kHgT0feWWgKhf2hrtxpTNDzHpHIiq7XTDH6ezABjqkAYmC495EiEEDW2nFUmtGECkiFskOP%2BYEVyMJwDd0%2BxeX20NbhnPs2VUTzQPEDmwXmpl1F3QYdBsK8q2GSvAwNCNlqdEI0N%2B8WMoDSoTWAu3xgeOrKgUaNfqLzq8bR5Nnre9kWvTrMlisKgtuGhN8yXL0wi3or9uH4FE7FNNZlp0yo0u0FjBomrJ7Zsz%2BdaZOvd%2Fy3YQWecIj5yIQpsWFDT59XnWH&X-Amz-Signature=d4bad0f351b54a9fe1181a18ee756c54cc09eff837a9730a46b422da45d71096&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
