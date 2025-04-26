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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KQUZ5D%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqRegnah6JU%2Bpk4YtlRetrFvvRkMSdjyPSZpMXKqjxzAiEAuByzjrVJDEnYU%2B4CLH7rRbvKesGZh1Z8glwMNILNxNYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJu9NkeUvYmW%2B%2F5VzyrcA2NeDsfh%2BilanEksCA6Vo9FP75t4qInciHTHwGK%2BvUk2jZX7Hsk89RjQGPKNhxzKi2iHg1I84XKJapEBJ3HRzcNN%2FhmaTiR43BRMjtyvKKtEZbYHdtR17YAyJqvO38dXWK5TqFfvR1k%2FoF8PfQyJp4J4LbRI3AO9rFE6jmHcDyraUUmQpkW44PWpxC4kQN7QLAszRIlHvzYBWY1wM7yikiTfnPX%2FACzbwYNeVIB4%2BnJijYQilgviqsP1D7l%2BhNBx1kXmo%2BNPXYTsc7mKUsfp1nh%2BV6zgAJs2BmzZDbhtpG%2FvUYo%2FAisG9S4uYj4QXeA2O3RxtHpRmH3it%2FAiOrUutbQQ5IjSlPGoa9CYfppx7%2BdHHC2E17t4yNipMD%2BcVfIhx44%2BfgxS7Iu7KNvUmpPnEx8YE2Ao4J90%2BsvIYU0pthPXWxN6%2B%2FaOrGU2hfFjhnq303VS5U6vpLS6cegdc%2Bv2pP9kLf52Awf3Qz6oJnKc0Ur0przGD2cdcOrKOhZVeXEfjsg8Bmg2XdHwzzlICqFNLq%2B6nwrx4RX6l1ofFVDbp3QsGR13f3LBZpMiKqGEs43jDvTKLew%2BG0gxKVsrHVuxic%2F%2FSMITHLQJqbVQixAqY96vlML%2FQFK7wIYPMUFhMOPIscAGOqUBHWFNdv%2BKrRIoodvJsSncjifpjbQfRjX8sHi4MfGTliztlO4PLwqJdoqemunF23KlURAKtH1b4Rlt2I9l1sbxxvh7hANGPO1yUHLc3aXeVcnELDeoAiLkDSuNJKNdus7UMpxLlAZmT%2BCxDymcTdCqs8MdtszwMaojboPKJ7M0hoxtNMKXRNaAxeBmVQFJUPiSYZWLHI3wYszexbMbQcNtwr8ROH2Z&X-Amz-Signature=7b395261065f8746ce49033cad8aeb3e6f1ab2a9d53b85b54908e760663c2455&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
