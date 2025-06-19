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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQWKSNB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmIHrAQBsrB2YO6ECqhvEk5pgbT5QGjQnde0UFZ4LrXQIhAO5n4wVUJJSCMVyniZvWGjkabYdoQpYMIUzpC4verwBoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgl35R8xH620%2BZ%2Bkq3AMG84yCF0COuZl7xDbXWgM3rnZ4EuQxxN%2BINw4uqVyNnjZpAvHgXvijgBIoFPnJcNsDeMZDM0mACC7l6mg7A1NEFMkrti8kpGdGj%2BfpgZmNfb6NsJNgw0s7kgwGRq2yAEdmtddXdUPHA43KZkYXQV9me8a1jm%2BjEv3xdwKRQIsY6nMbAhGjdClXMcCYVsCJA4yBR%2FDiAwiN%2FobsoMnTkC45%2FNKaovi6tJikz%2F6Sk8SH2MZle9%2F%2BVMrCijkCAvfCO0rYF0WhvNh8aPnhTdn4ZmLP%2FPq1O9quR3dZVoP0QBPZyh%2B%2FEt7B%2Bdu3jn%2Bj3eKRsucl%2FwQLXXvAC8UR4%2B3qZH75VituPFLhL8L2UBMXr91P7nqcXxicBDobe%2FQVBQ4gSC5iLf5bO26PFGfA810VrUkBh5V1B4xmkjY3mhg%2FrRqiyIIVxvT7QOJioVgKhg3dQnaH4i270%2FeTNdPVz%2FNlJgUcka509J6P6AZN%2F%2FpqsxC197tnQO1zzBKYwziwG%2FiTmUFm%2BYzN%2BTiPYXnofhwhtcZ8zWH85hIZrGTmb21Xc2Ka85ZhzlGTyrDUm9r5RNIEjuF15hhkH3cxzW%2BDow2YtJtW1fzKn4PR749qe7kR7WJkqzJHf%2FMXZD53tsEvtDCK4M7CBjqkAR4hzFyjEyIJtvymJGyavxPIqTINcM9%2FY8CwG0z2Lc81Rz10qL3RKwUHUVFKPJVNMX%2Bus7h1LUXLjLbW7P1gwveweqoumuv12cSyA6vMebmQH0i9I5TU30gn9Hh6zeXub0uMzFPA3mVNrfN5W0K0QAIflToMurB3%2BIcPIkrBiRi6KWTYlQ0CV0xMSNyXsC3fLs32XFHJLTNZcwjtGoewhLXM34Ti&X-Amz-Signature=7198bd66690c93e03eff4f7b62e906a9d910a1de674261be8c00ff64a21ff364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
