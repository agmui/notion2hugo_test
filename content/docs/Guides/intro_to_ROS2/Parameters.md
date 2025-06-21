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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THVTSXW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL9tNYqB5VkMcQphJ8AH60%2Bt50ZGXMzpBWEtmJFQPF1AIhAJuUDnpGYsN%2FZuIjMfarKU5lHYiL5voxNmQHySN94PrZKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHdubpL5hV%2FuqJsLIq3ANLxT0rnZugrHDYgkDqK5GO0ppE%2F%2FbCWZkNOhHlmajq8ndbdkM6Tn1%2BoUBglkoYs9q1nkp%2B9zyiedmViRw7Z05KaeYzt9ySOhNtWUqrEMkX9aGLlqjPMUWrgLHzvy3p%2FlssbisiPI6AKl%2BgPSKtrPg1j4dzA7IjCLOjHm61SC%2BfQSLzk5QDRCCUXCSJb1LiWawRu4hPCYUwlHgjTCl1k%2FmYrL1Gk%2FKGLB4OZHgsbt1wtoIzkcchAvNdF0rHtnYzF5eNvOGaJt5Ck0YuNx5NgztYBuLRgjjFmeS5cxQ4kNxGJXWPqx5VYPOcsOOrcob9nZfMTXzLzv%2FL6QPDAVVF2p8bSvlWLGKB%2F526h0Dy4UiiAFwp%2Bfu3jm8rSiWUl4ePyHN4bZJVFUaebRTU5ywQhjeyo8cmWXJSBmNp6JR1vPJ4jqcuWXY7%2BDVBdARL%2F6CdUoUuLOTDNw0nSrdPXrlWrrZJJ3TwCOVIe79NSX4Ati7SozB5S%2Fp7YcFZ249ZyD0vwbF0AFjnkBjjLTp%2Bv6mPzxUP%2Fa03C18EUrTihtbpv88%2Fk32396H6lwJvvdbXp6Z8jUfkMPAkvVtPSTFDDbN9JO%2BL2IbfIMg6VOr3VJ0GZNkWf4uxdO%2FoLSmitbnlczDGj9vCBjqkAabT6PeDwlurfKZO1dJdkdg%2FKoo%2FeFGsI6m5z1rKKQkPkLWlMiWHwG8qvJlgc8HDhzJVWWML2SMhOZkGdw3l5iAfHjragIKbElIUZ5wvONHLNCGZZ6GWE6uQt5her959ggAdfqYbi%2BmLDsRpe9ZoQ37vx6Co8Q9jo2hWxJXLrJWjbtXNiOuAVt%2FRGEzslYt4XhVrJOe8DsU5Va6GODJM7N%2F2Apvl&X-Amz-Signature=3de6f046beedfb63c6c3702392e11278bc38eff303c639e70b2f71a19761617c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
