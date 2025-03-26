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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKEGIN2D%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVGYlx4cUvcoIAJfeXZcO1qTJ%2B%2FxHvmb7PG%2FFwlNKMBAiAOUyZ6WLsT6wDHzy47hqZJ1qzAqZ7wYiuxD84MwrioLir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMHPcNC%2BAEucNzqmNXKtwDycwRmN5ub0fUdVSJF9yV0aYO8MKDkI0BLkxWb9NU2JgmtXP5alPyyPe0UOqezQcW2p5Hz%2Bb2TKB6YQ6r0NXIhaO4KXpF03zoldeuIciya%2FQ8jB7Q9x%2BcN%2B87SQemYnvrqm80sf2dtNrSRBm7EjkiA4nM9YwfK%2Bkp1njc%2B%2FGXlu%2FbWMcyd71JXM8C7aGctt%2BIS7kZCHXp2cmeQZ0t1LiQTSQdvmBQvyXD5YM3R0J5B0ik6SBLxVdq9xQT7m8hCaihYtTgtGI9qST2or%2BZV66s3ZjlmDbjAHvVIzHo25YAFaAK2IDYmYHwauB74fhc8Istw%2FOmWiWYJDv3eT8y8icudCiwMJ0bXvjDQ9GiB3KbNweOhIkJjCL%2FHcRo5%2B3o2IMgk3NIhCeQ4aYLrSMRTANT6LLqnGxp78pbRLIxbj1rWzKvIFB6YM%2FVYIwMxOcSg%2FpNY6PNnk%2FiB%2FwbuD9xz796n7WJCsYKeyuha4W1YaJiysgAqusTDgdSgrC6gVBbw0N5Oz5WdXJUEkHh7k%2B%2FsosWMLdu%2BDk8AeJ1vatI%2BDZd8DfaKOJr285w9vKESPkm6hYmpopWy%2BaixMQUG6RPdPAxRPCsaixzW97t4INO3KrWg2eGo36FzDxpIacpoIAwnvqPvwY6pgEjpU1Q8yRH%2Fs3tb0E8YbW%2Ft4Xn4c7W44FpXVeLLdfCnjuznYYoE6i2FbqPJxFl35MVsa0LFf6t10e1sSU3A0kUoNxhCFwHR3Wu5kx2GRiNY%2BbBHsUYha2yuQ9UVLwgTb8JHFy7SXglaKgQMFOvfBKCVdD5iRaoDoxH9kq%2FG56j8LQiHrcIcF1LSpk0MjxuV4rz3W6NPKs9n2rIJ4w8LTpHLMinRpjT&X-Amz-Signature=2850fe08f54097dd90638bf74071dcbc9395c38a2d14f7cb6aa4e727790fed19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
