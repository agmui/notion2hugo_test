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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5U5YTOL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFk%2BkhCbmMASl3XSPXHDqqFcW86PKj2hdA9dOaxrUdeYAiB7MQ8NMYjZtrBf%2BXImkLrqhtCYvaDECE9RrK0NXPhkzSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM77PCWZ7fQ3UV050wKtwDU6cl1SW7skOxRBbTPxfOJmZgkv01M%2BPkIsQgaPVO4qdBSNmwE%2FnpNv8%2ByLljYDkZc%2B911ZW%2Bqw4ybGgT2ZlHO6AV8CrZznyagYw6xqecmT8u42wXc3T0Ki0g2YyUSCJjdvBtQmeXdD3ZskhXyYDmZ8qs1haQXRhE1rHNDcTOMEvMZMUozZbd3gQhQovtunNimTiSQUWEn60CnEtCPqmnHGk5PkTOCZQMg%2BXd1ca9djjuFQ4S%2BtzPQzPhmEolxVmqkaJcgpzHLVe9yNTqLRfhreMIYIopn7mkiaZLnbQa8FJ5fXMAwlbdEcaaZyCNzvlf0mNcJAQH1eno0mF%2BPwKUi7cCpebzkrkAqRcVpz3YkPWsq%2BzKQRwXnArHNPxyedzc4%2BiipfJI2qv9kV5I9DL%2FbwvfR9iMjN8qcMR6x%2BwJt2CSqTYrAYPN7262ne4Mngc1%2Bkyspsr24xXUCLXRQANlEPgxkgqQCgDFJ7pk3VTDwZH0WrSZrqH9uHYOmTypP4N8HXWTJDjONnY7%2FLQ6WVea8AQebBXOb4cKOXB2eF8Np2CBYqoLa5PXXRs6pH%2FD73zhkT%2FiR3yN9tvb4LUuOxWkS4iYcEIibmK3sL5WvCm%2FNVjXtOWxXeePelheW4UwuJ%2BjwAY6pgFFyH2CcAumum5UTv5dkKhJ7mVUBW3nUxilRB5a1V7p42NVQyGRI8h0t5%2FQdQnHxQoFiTGEFSlbPwZ3wUhIbesLHrVqqVTvIRyDNYfoMBWkSrUps%2BG8uaT51xAOGFAKrgoFXTvAKeF0vuEslqdRyIpOzCW2IeXshFtujFbZt%2BiZ8mvJhUfvRDVb%2FxH8ci2ir4NU1uIKUQe9MIEs2uTBs8C6OK7II9mw&X-Amz-Signature=ca480e8b9cbfaf54b4fffe8a9a7d1ee11c2d08b6c742349720014b78abe8dfa1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
