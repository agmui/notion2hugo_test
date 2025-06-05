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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI33GGCB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDkdkMAxGugoldVSq%2Ff6SQ3TyvnQ6qoHeJSuv%2BMoqrkxwIgZmWZvAwCLXxqj9fwSG5tb5YPxe0G8YvLIjPVeV8nFBUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMrbcvxUQXMELzp6vSrcA8644DxDkqsM2RHEkIpnAjyoIXii%2F7g76%2BKN3poGhtIN%2BTxC7Rt4HMEv7S6OSS225CUwce7i5hzKrafHopyrCqsQS5ajQYvIpAI0TvxBAmYpk%2B4icZxe6Xda3aHriicD3YQF2BsWT0Xf3xk1G4kKaZBPs0fomF%2FKsnGoz5JKzlmBt3jnLNlLDImaPsFW%2BZ7niSUKE%2B1iIGbyKiFSKVHwcsmakrcaEaoFq%2BfcF17AGC2Ms9XK78VSZy8MNxEIHAwHKccq8WFdZQtHRfaWeIJ0BprzwNi9KHNw2MT2PaeVaFvRUk515F3gphEBWca6aPjSDAmC%2BFykvbd2HZuN8SMBM3QxKSHiCGUjQsYDakK8D%2FXnni5NS1TEYgxatcVkkKhBhv2RWh5B0mxP8OgyOG361lpZlh9CFg8uYQAf0JhZcHaCADN1Erdj6%2FU2KceGxsYeomfVJ8quUxFQw75OpN2oCIDuF7oJRT6pBB2mAQfUYIDYt6%2FH53DuxDtn5bCpS8pAXLn6iI5zZgpXgiHfYg%2BEC3o4LHy12rfJFYBcMWJnGQdqvU3ry1aBfvDhQn8WO6ITrNBGeOL3QApQdIuPAF7E6Lmifpx83Gbpe%2BXW173YXUdxGr0h7Ih2oIFOMz%2FOMIHqg8IGOqUB%2BBcV2Ycmw1m0S7a6cbjWMzCEZh8JaJqmP6DrSQ5XaXM%2BIAK5c3k5ai6NVIjXftcB3qS5qgahSdgZh3ATPlq051F8WLW8JjV30fIX22PpPBzABjgsuMDr0CjUlPOh6qUoWZDva7chve2WUtyBFaqzX5GDOsrbhRFI4QrrGtuK98ZwQbRgvsYDH6MP%2FEF%2F%2FAgSXCtA3Xrel3vDtkQuCoGrriMoROYv&X-Amz-Signature=e76db585c7311c92acf8b6038c6256fd584072f436f9cc007595fae3b9b9251f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
