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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466373TKPKK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5x3okkAIp053njPDZaNeybLd3s2QvUtAp3yKmhddk9QIgNXkNvpOwMdjPz99PLw0xTtPBIQN7Wfzb0Z3denAHtXQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAP5fhc1e%2F8Pjvb%2FSCrcA2dgQQDCqTPVmkuMnhc7FY4UzibCi2G2fRwKkCrZHJB%2Ff5qS59aRJH362M5BOwGm%2BKtCOPDUecAUYKgmOFid0vmtTZlJlpZ2BdKMpboBvO55eAJ47mjJD9OA3SHW5Jd12eumtH2P6Tg3m7GvbbMMHfD3Bgzmd4ZthfZXJ63AebB88Ef%2FgISg1Z3hrquUnefcA6XV7reajZgkr9%2BzASyX6kd08Nfs5RiRZGuEi%2FsBfOMby4zcy9iYbpI8yZqNd%2F2wTpvDNzgQ4bFRGZeyEXvMD2wNVbvoYYACj6Jw0dgmM11bf%2BVoovbPuXGI33HAvgT42cGQWCw6rCTQRyNUW0AIig2aDmkNZoXjPQkG8T7ayW1JtRf1w4dq3D40DYqBxM0yAPEcbE3oq8tDpphNjUJN%2FwbSk2nMCcIYJNzpZwom1KoXwTRv3Mh6WF2BHXnl4aw5bNeOjpHoQrZHLx9rV637HbWFlZlvbXicDa%2FlrYJj5Xapgnsj8q6Zf%2BL9JVsw11nuH9gSZ70TlW6vGvuVw6LhY9Y2RGn94DbU7BLJiEEXi3TCPmtUlbtfTkVlXIOP8dWyKqa%2BvtnSisfj%2FfIQLuZMnM%2FuJUgiKQOEIbtM4pFxZQIjCgVaNwLbqozOdvxjMOaKk8MGOqUBeWgUjS%2BaCbGDlvyAmFWskVcIYnDShqdPLL%2FCphN5v2YFD2qQUGb9NynNvYj9gAoVEJNrQsmFLDVIUn98s765ijhBNfQYk9zOoyrGxZ7rMXmpiuW6Sd3aO10JKjbgR%2FtrS%2FIu4GFbpWBoOwPbW2ZfynaREFHh1DxLhNrTCNRXcpBSMvGYgsexQJqDAY5PvHf8JJ%2FfG5%2FyiFJbm%2FRb9q5dQ49c8ieS&X-Amz-Signature=d1f94d9ec3fbf9ff637220c4d0212b36ab335379920507fa8fe8a8473dec1cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
