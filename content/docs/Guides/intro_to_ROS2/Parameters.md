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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXO5ULI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDqOrjbetljx1OMc9H5qAnM1U6aVZM0yUoDFUUS1O3ZpgIhAK0aJ9L60mbz6DD92Vcj4X%2B6u8jNRysLmK1YABArv%2BOWKv8DCGUQABoMNjM3NDIzMTgzODA1IgzDVq4r1DCy90sJG9Mq3AOMZLdUOGDepTusTuurEvv%2Bviye7Z9NvQdOVyQkuYB2xIbsA4jLfWGaH%2F61GKnJF8fywqMrL2nmF8DW6hbVsxUh9tHXf41x87f8HSkGEzavDZDGBNNoMJ0LhTLbRbphW6QeMJW7eJcD8Ju4sMipBUNLOS1GD0oNGYNn6S6fl40BJXtgy04EoBL8RD0g1OdVCtdJkFCnHC084KkpJ29xaYtAeCrujv9vy%2FTgYfLqkpIrdNGS3aUDlGpEAUs6KSJrR58%2FmjM5CvWrzluUsN1vAPR3fp6ueXVZ%2BkEHcufHrcclf5XVAdmI76V%2FEnOBaIObPtABaDt7vZDBs9%2BaQY7rxnScV1A71%2F%2FF01QO2BnA4wQ0AaHWi0SJbwlwU0Harc5G2g9xALFE2qnrLAiXf3TeKGrSpDfTlpEYq4rc6QXM8iSZ2MAsSWGcSa7NU6czuQx5ToAnwSIqfK3NeJuyY%2Frw6Faxqlfq9kPimO28j1Nwur7j03kHNmJnRDwRQ11hDDLpgpmx%2Bg%2BS8CAoe%2BoO5MJJIhUYviZRCMOSFdmXyiLIDldPMEn%2BwoiARFtx2VVbWvrTg86WGdjbrYBxs44srzBkblXJeLRL3Iv1J9afeRd%2BMOlG4hdllLzYbKNHjBck%2FzDR2JTEBjqkAXQfzij7EJmmCRZeH7hZiSZw5ckYSA3YPK2mNNgctLXnzXQmrnK8nNj96mGCGcAq0k4ctfv0QzgZvCkoWGHUQRr1eVlZ4CdipGqkeyJ0x4ZGIIcIzVRE30pO7ytVQMROxQ%2BvK9hjaAWsLQu6TOgGI4TlWTLa97vq66oZqwgUbBiz29XftSYUTvmvWFLrEBak7gVN97BQWm202mGuBx5qvq%2Fd1VFi&X-Amz-Signature=c1766b6e2d47d6dc59af82e55520e6def3625eb7cc8512789971c6cd3a21380e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
