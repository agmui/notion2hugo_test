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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2N5DRC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1kIQelUSvxOJJNoO30zNX3xGUg3kgWPpTUTyIL8HP4CID7C1BFo2bKYcdeTJ8RlO61%2BF%2FJfaZt8%2FGu%2FnM8XHMYRKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxRRnUkVESeLY63ewq3ANfKDZUnYETVRUbWog%2FDLKCX7vi9OzGg0tjKbykGcoXnktZ0fiS1v5KOlntGFgjiRgDMBMUU5dCKnBQZ77QTX1fpBhBiljsCOyjbGBHaekJ2KByyxRO2Mx01a1O8WfujTM4oN3Pkx48A1zMUjgkFNhiA2yVana1u85QDuQYea5Qm5diNRRkrQuGCkcr48f%2FmRH0MP15WbgUB8oiluSlluMABoFBIx5gVNi%2Bb5TgVGY5v%2Bh3COda%2FmRHFFLVgECKnszf%2BKeB2FzI06orbllMFmWP9XHxAJZCOsLCjdPoKVvPnn%2FPJLZbTCJwySI8oRDb1R3hAlz1R%2FdnvTUpuYKDmscLYGHqv3M4ZrcHF5fjuPv49QWE2sdzLLG%2Buw8xIzGLu4iiEz%2F3%2FvdvLekZLeL44krHeuWrLA3oKV90FCdyvrrcxcDlcTrzHU9oTd1qBL9h2CGZJ9ZlMMrmbTLB%2Bc%2B2OzFcaKIjZfVR8gFj2A4CGp72eoXhhuwx7QYujO7Hg2XPA8J2kY8Sl3TLRr5H5c6Q%2BbuuaeTl7y5lFOZa36Y8PGdXRztsWg6HtCCK57lg4yo2aFPLiwVs0Sf9r3ZgL6tVLHeogLhLAayPZ7cC6FGnannEDNFNTCph%2FMsE2MEWjzDd5u3DBjqnAdS8qWsZiGxReVCRTpVx5TDCtH7JI58cUx1DrSKaXfckqZEAh4wflhJjDd%2F28bAznG%2F5Wtl5WDe7yVH8IJXEC9z%2BCAzmBh3TjjEQUStJqepGVIIblK3EA5S3pjwJ%2BdWTHI19YDLIJPVlQSRsflD4hyqDn3O6O6jPdS9l%2FYepWq06sLZ8WjhgEnJS%2FaN7ZMdWYXHL6V5EZlurK2mfnVBheVxvFJXatzPv&X-Amz-Signature=2c06918d6a7a7d0bb3a82e6bf379b751f28c3ed9dc3ff25150ba9f39bae3b355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
