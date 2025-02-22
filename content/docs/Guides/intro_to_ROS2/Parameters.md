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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW7PFJM3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdfpsNKVX13889kG%2F9N89OleaQdkQCJ5w6zP5cmtLJPAiAiHW%2B9RzzS%2Fvk4NVxIPjtWlain7TzMFSQjtCP%2FiC1qtCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwZnfcIhhNOCHU1abKtwDDRUJ%2BFWH6XRS16P2F85PZhlTQctNNjWjxTn5PJWupZ8ouuuS1UdP77JVy05%2BpsdRJ5u6%2FG2W15KEYKkP4AMrP2oFlzVFbHWH3A7PO9AIZpdn%2BD827ww4OuHigMui2wBvAbbp1dUf4yBKVKqLIHiL7VYTwVyMjqqVheRu1LLnAoCYVSGYu9wT6hFTR%2BingWLL5CHgCXl7RRoaulIwXtjLwYjkHhYlaYnhLAy158EjKBpfGzYMSVe8sBLupOvf9SIYDy7vKqbqv2csV2Z0FWWLo5jiRzQ1mv%2FhBo9EsnhA3vUj69vtw2atxIXprPqZN2DTwM0IQa93IYI7TTmdnafQJ9w%2F8IKSK312PoTAL9gwd%2FGIMVMbe%2FaiVhXh4OMUYIRQWeUOr2ZN0C%2BjaM%2BRza7tqzqWveSiH%2BhcFB8UENa04TGStCmAwgPtVsl75ZlaWUC0GcE84QY2ls%2BDPE8cuyBZ6AWUWAfO2Q0AbrMbLrnAfwTUjiV3pCE5gfQhkY5ip64nnWpop%2FHXS4S90eTdG%2Ba%2FOHKCUQiNJ3Jie5wfaOg8VrPgTwcIrFHamXhSyG7EWkA66GaZPrxDIekYkKoq%2FL%2Fr7MGPD1HxCBaFbE8jm4Aps0aCOUxqatXC6yiwxAAwnMflvQY6pgGgkg6hhgcJWJk%2FlZOdG195XLHeS4vkE%2BRLuUMbvAyndT3Jq6oe88b3eKMweWNIG%2F8FPgGcNH1e82ZxZbDiDwxQzsLUvA2MuHgEvU4oy8bpxX70VreQMWRYqFU8sUkR8V%2FCknNIs6logJOaK1N1ekoY4agykuP7OOdyypmmtSVQ3Llu0ea06OBuNPwUnpK75W6PrD7uF4X8ZM2Cl9gm0EyjXBgR0L0w&X-Amz-Signature=8680dcbca138c5d48ea1a9c88357f8b47f5feebb695b4373b3d4d2af00560fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
