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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVV2A564%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIG2WmtxEO4IHHYVMUUR%2Fu3vDwm98ls%2FZVuP73kdL%2FoYfAiB0eWFCYjz4asYHxjwjrsRRctaWhqEu4Q8YxIRpy42vYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjIeUAZn%2BOJX%2Bw81LKtwDCFJ3XfeXLL8Wdfn7YaeBNvNkzrR28Y207cEWIO6E6t3OKhBsEug9C2zx1NAlpCRdWk0b5cxc9XzqUfgAjHIMI5ckGydpCdY%2BebWU4P8xotUBWGjdZD2xyi41n8nPLidjm6vdqOUfJpXnAkYzJNifIoKYwvCPNCDvfYFxf5kuT3%2FF6YINU7s9wcySNdbKLBr8TLiboEBOTE7NY8fZesz9Tq8YZt0VbIKYQSyvyCkOx1qvoAWYoRswtuuOjmy2JXPRtxYBdI6lwXa6oZX1oZi6JnHvRGkdE3OH8G37i2YdM67raaa5TGib4eCKYbIajprMclQeTKw1BSYz9lLcg0akPSrSgP3iJiKpEsmgGaY17H4CR%2BAN0cSW%2FgSUI%2BKYZPH6nEivdS3qE65sreUkQ%2FZsx6%2B%2FW34ejoo02e8VoBU%2BPDmgd1fKQIC3ievJfSLBb3hCxUY5t0rPkYMcdr9OoDzW2A%2FkCcrsBnpLM10t42qaHLQx1hMenisx5SxPz4DGMEJWZznANqRzcweWSCoINduv6D49iLvo48BGlTGVrUvZc%2B%2FZerZO%2F9jqb9n2lD1K%2FtVdxR8CBEp2bU7zo%2BNK5lfljRlx2r1otueJ6ykrHNNHDJDvXOpbx39%2FpXB4cwswxtekwAY6pgGppa%2Fz5REC6wsr4hv%2BKeRcnRYxNBHzqnb%2Fx2klUq4tTpzMx7ykjB%2Be7rdijUJFiW7CHHOZWiGAd%2FXtCcde1stGE7C2T4JPYXdRXWkIE9FJkiBFx1NOEriV4jRTOAvkCO8rd5LGvLUzOMVYf6DecvS3frs7dgMkJPEddE%2Bes3EnyM2uOOOPhvXgjCrSfZU04a73p7OMvE%2FHSW%2F01ooHepf35E54XRso&X-Amz-Signature=458716bb5f35e16cdb1f5e3f29c1b6851ce791a2ade08c317c116279f4ce3693&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
