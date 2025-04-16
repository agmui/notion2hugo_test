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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G4ZP6Q%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfIdi54LtloDwFMt%2Fn4cxBEN%2BdI2BIp%2BG8FwqUV5LalAiAtaTviYQKrcko3upWvPHfr5FwGWBRpF7iMw1aONu3Jpyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMWx%2FqvzggffX9krm7KtwD3XzwDoJBw%2F8IyhK58PmCx7jyn0C%2BLy%2BWKAsUxlEdRBJ%2F2%2FYNWKVbbJC4X03TYz%2F3E5QXimI2qqK0bhKbD189TDARflf%2Bim0vT2%2FJIRkUj2r%2FMYdEbGcolVHziEchH30vwEjpbYFc38H9dKfvK6ZYr0Wodaz72oktYi2yd95qtFkEG1BZ1KDhCqmQdPbz3Q9LxOjece%2F7Y0BU2pIcIF%2BLszc8f6um6vY7AMYdLPFbB9BpDfiXO0QsvUUig8rLDYkkD2W92upyb0oMd1rMP3l0FfbfxQVD%2FIPFtEUBJacHtbeZ7c4HmmOa%2F4iI7dpWYjJ2V6WAaF6LJ%2F%2BNpGvsroSOkt3PxdWKVc3Jkm6qXd1uwXaS9vBdPnDOHTvEBNoTCilK7mDb5DcfxTEnoukWhH6yr%2FT8EEnlBvRrqxHEWX%2FvRoBjbAStxdwuHsi3yTzODBZ0I7bSgd8y3RPlgbCxssKsdbKtzFP4G%2FWb4t8ycDs%2BnH4eSXoS5iWDJIBjkaloF70uGHn3IDmjnMTnQXg5IgH5aHtPfvBXh2SsJiBpw%2BXOTXZAHWYufL9iqgSusix6Uqfo2OQpLGhVpmoyrcamNKY3Lp0E04YkJMi%2BI%2BZQn30vVOkenW0Hc3L%2Fo2178gQwqsf%2BvwY6pgGEEtRL9zxGAZOWKjxYlM1g9ZbaXbK7ACEDH6Cvpqfn2h2rBZAxP9mYXZplb6lJUfYbLhh3Vce%2BrZmrZkw%2Fz%2BjqE9y%2BiT0KVf41hXGK4dCmpewptakFVDcc9hQRf84yYNVlSbYXFd%2FUSa4%2BUxumn9QVAYhuZ2LMm4bA58oCSPpdlp8C8C8lb5RyLKLf4c2j3RytdGx6MJu0GhO91j%2F7lbMySsNWlsXo&X-Amz-Signature=b04c76b260ca38805bc13fd3c898077a022056fda9522a000b48499abb6fb78c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
