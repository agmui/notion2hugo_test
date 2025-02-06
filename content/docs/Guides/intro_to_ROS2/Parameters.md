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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRICPOIH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDWcfONbXgl2kbdYPSD5s26GVbO6Sik0h3oqklGXHKZSAIhAJIHZXJC24gQEJMbm%2F2nWiTaAluF3V6XYfCu1riW0%2B5qKv8DCFoQABoMNjM3NDIzMTgzODA1Igyl5IIMfVwBcSSP4jMq3APyQs7c7KCsLwwGtlCxc%2F2hmhwXeyDo2urA4upZDuTL4uVyIUHmH7YcuXkoTqLY1eKsAw8bIEwW7QleNclryhPptveV1FwgBBxARTiwI1egb6rpsIcFkAJMgUL0AUuhUFd3fsL7UE2axMlNSgrQ87UqpTX0kDpcSnPYV8q0miC0j4PvyeXFUilBmhigY9HmGzbX0a7gJRawcCqe3UzVWgM9k2ov3d%2BNPMkspT9VOP%2FCgKH55H%2Fb9FWKnPPkrfZRBaO8864aJ1MY3uu30iw1mAiLduWhNYz%2Frp%2BB7iXQBQDIzM5p2xO%2F8an0SrhJz5cGI19JVW7VY6ND4cQzc9KRi9yS3snDtVEV8YsBGdl7uhE5eE89p%2F8khnZunBYQl9ivvFHJ0hlMG%2BrBRTCWYxVrFOvFJQbce1HJD3y1O0YEqDIIQMotFwgIiqOhTHmOVZMkQL3tUrTAjy8Z6x9%2FxjpC4aA3BEdgVUF28VRXTUWzKAC6GMx99GoJl77cgvevYynbLXeiZVFleiWRWBfgioZDPMV%2FIvdCZgspx8GP8RD7fG3eTznZpde62d%2FoFzmbDWH3pJT6pqT5%2FUqQhHf7gncVi%2BbSIkZGSWJatkubh1xAaJwESdUx%2BITVMpxPB3qwhDCh7pG9BjqkATomYVYQqDOG1q9ma%2Fyt88V32HBNbb34hq66kG7KUlY4nihgyYQPFMZnQsiCVkpVXLo6y%2FZ4cHZEaZifnikq33AqgCyDqFnKLp6JtwwJwy0%2BzhviBbJNu25%2Fh1BrVluDXdAAwbhnkjQxg2iIy%2FyoeBmTZNFqpChRLx4vRnYcwB%2Ftcw27H62mMuknvAZfFpl02bE5VMyDLFgyTyukuQ7nbCGDBPg9&X-Amz-Signature=437128b940036e46bfe57670485e6543f89e6f1a3b59add48b74aa65fe702284&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
