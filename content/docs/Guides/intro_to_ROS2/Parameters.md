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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVK3ZZL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsB9Cp7ZWTJgnQ2TbvOb4zbMzqS6hosl%2FdPWLfEvDOGAiB6e%2BbWGGfzcQN4onhhnQUeNd12IIOnqMLuD1Ipt6fRtir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMRqExPv9w2pMhKjmyKtwDrSsuzcRiJ1cn4mycIO2CNEEWWGFOJyOSxQSWHaYlfBdVoOtnedCRYMNXREr1%2B6lOhEfMrujJezgS1lUP%2FJw%2F2yCHQmdLZt%2B7Vg8nn03%2BTW3d4ykwX7KQNyqZp7kDxDsLW8BKn0r%2B9fX3%2FPjw5OQWnGQ5bZ%2FPUBRBlfBQ37uV60IqcAAK7dZRE8QUy2PI0xSZiM4nra7zYlN4NDlRnCW4iFfyKx6CgD02zpNDqJ6EKFTJo%2B3kCmRGlyn3cA0QgZ7khgcz0UvaOGIrt%2FekzFgtiP7rD8xlMzL7rahm9uHCq7dTBgyxp5fdLDFHPzjEEbvQy18w9DIJ8p4gRlCKkSbbkwOXY3PXv60cjWjkLJXW%2F4%2FMbmDDqY%2FfVDWIIMJKdR%2Bj2omWCw%2BsS7dH%2Bk5p4KnD9nvAQiHWgA0sSNW5kQaLwcY%2FstAuCGWPK7zjVUPSlMthCCUf%2BEIEibw%2FsPizehlYT2q9aZR5Fjw7eHgKM%2BlwNWdiOD0eFMRi5dzrdRepiKLjDZ7oSqUQsTSQWuCW9AGNAQ5VfwOj3cmXNVmsBP%2F%2FTL32HaxFSEdFGo9rniGnYWBjabtHXr1PZAACJVLmMwzojx2QO8ZxBK874Ah8jvW8Zoag2Ff%2Fk%2Bga3twyf8Qw88%2BdwQY6pgFJ2kQnEOXJ7xKTj07l16gByiAVIPA6TsY6ZD8UsMDb0nLtsp%2BuTLYgyULvnF1K7EZaXj4mFXpZD4SE5%2F%2FzfwOnbWPl88lYcpNIhLcy%2F2c0rSp3JVZLOCqIsWHYFCXeFVhXmHRs7AOXrMXdYp4h9kYOIRSAA9gLgn%2FmXXOQGOBqyDfqGvomr%2B776Cp9j5cJxzwwQb99AP8uWGSQli1snBp%2FQ37G3quJ&X-Amz-Signature=0059b6cce8375573a97e092c190aa88b922074884d10dd8ad35836435ff78d94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
