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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZC4IQT2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCUN2TUykBZ01aHVoRYF3TKW7sbRTwxhMpkIkqyxYmphwIhAMD58O6UbRNHwh91MN7iyxyiAzMy8Umy7TFeQEnouysTKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBAze1uYrG3YRY8E8q3AMDVX3LYgaQ3A0rNU2HwM3hyJgUhhxNi6wIduYlP8U%2FeH72elgNmYJdDj0YV4mjUMCtZ6jkwfjsYXjYZF%2FjT15paB7miiZLvnWf8dLDWHY2dr9zM723ivCoAael9j%2FwG%2BGSQqjdOv2XUJ9BgDNNwbyDEp9DBvJY3g0MiOJPqlWjzIQxlJ9b%2Fq50W1Cd2Fb5dBeBmdhFEf9DFX0G%2Blz1pC7gjrBu1XcFkQF3tpnzbNcuzB9kA7RWoDGJfVDu6Cv4PzMURhzYBseJCOyP91re6rUohNz4VMN%2FWreldQAOHifrVAGAwiwM%2FooUDB2jW1f7aiEDdwmmoPf%2BwHMAo8d%2BgsujgsJUfcNlaEYWZloh3HTtmknsiRon9UViFSdVMg8j8M5IkpfwQFLJ7L4B5OFF5jpvJExxoI5GBiTZjJZ02v%2FWJNJUsQVIxUrFN7Le6LDVxpdB%2Bo6DB44zoreYn0SRsWyVTv2mxA7WOlxC2G6Y2XsHyyw%2BkQaRJW0uHrUDDL6R3bxsWnD6uupIvCPhGPgVCNYb5wVNvO45RfCev%2Bs6EUSMJHl%2FEjxevTEc%2Bkz4KkvgpEP166FQRvjWGzvpnKCJ5%2FvGbNcWRgIikVDnTAAxHJ69o62fpICaOiGMP90GSjCOstK9BjqkAbfcObdh0aecbK7qIuDusE4hwonPG0m2pHvJJZ99pu3ocrOVRh5RxpUtOsOFRX2QWLiPDjvmD%2BmCt6aO2uD8%2B8xF22JfFxxbQtBx5P4BauLGuU3Hq9AZnCtxFMmeFozAfyyq3TIO1baBJppz3ktZxLxkzItJs92eVN478V8OsU%2FkVKkoXYB1Mfh3%2FtKU%2BFgYwJnE3BnsGQo3wCKooNQE%2BMo668l8&X-Amz-Signature=a205dbbe3351171001e0a28daf59fc2c1839f2e05ac82bb2ba86009f77d29708&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
