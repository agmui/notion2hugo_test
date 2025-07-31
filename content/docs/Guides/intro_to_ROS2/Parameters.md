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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNK3YAY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwr5DqdhoE0acDPwoCnfJp%2Bi1qKHuo3UQWzjOKVDLZ%2FAIhAMpLmrLBXevdU5FBujsZn3x0d1slyLyS7MCTj%2BbDYFr1KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxkkIBepzglX22ES0q3ANkl%2FudQ3Z1RiUxfrjhUJ4gaeAdv3GkLyB3zX%2Fa5YyBfLcjv%2B8R7K%2BOsjrwTtMPIUSyCu0tyKBz8d07qDTzDsifqSB2BGa7QC20plMT0LFQejcF65vrcNBbHA9714ah7i4EH%2BcXS4TwAfvThtJiwMecuOOfFITcXI%2F%2Bkz%2BC1Bofe5FtFl2I9eRKRTihVmBKIdIfwce%2F%2BbVn%2FI%2Fzszqcq%2B1xfjSzKkJ84ZuwmcA7yBBsl20D%2FQl1MyENFwurxb8Th5jcWQImLf3hCgjSK0CnyyAmBq3HyWOzqcliBBpDDwm3CNTvlW9m74yfvjVWdPY3SEs%2F7d5Hl3vcnobHU3Y3RvYrju4l2TzSYwGf9q0XKKg1I9%2FON0bdioWqvfQ2QRYIn3AFZD5uQhFwkp30ux%2Fhj46jeyuNZGrXqdZWk1lLkImpHXdZkhu4SkcCpiIIgQqlstb%2FpJ3VcNJXv6oAhmpqr4XxcPlEhE0CkT8IftADgG6AgwgkG9o9JkoEcdD0wx3I6xzabRD3qtH4qwmY2aOyc4ROTxliGBxF5t%2BwBLs45vmka%2BWd7Moavn3Qy8rwrqmF97nfq5wHLKcGu7Tl2EIhRulyTCs9T%2FWVX%2FzMeoCA5LlOrD9VZTuC4a%2Bz5e%2FwrDDokK7EBjqkASARgI%2FtjICsfECrFiOiX6LB3kgAQVcgCyx%2FRBYEcECTXceMXDsCrSV6T99DNGunNchbNsy7ulFALF%2Bfci7ByB%2BzkcoQIeKGItZcLOpSeiUgE3LYgtOvv21f%2FQqIL8%2F3iLoABbtoMx5KWRwBvCziLbxpmC3o8W1FgIeeogWfOF9JMGRura17zTQ%2BRfL11yHxzq6%2B%2FU95P0%2FHDDnhn4Bi3zEa6atz&X-Amz-Signature=1a7ea5b306bd5c974ad91a236997e88a9b4916b2d67030be453ccaae6610237d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
