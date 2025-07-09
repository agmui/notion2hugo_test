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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62IMHZV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE6ViOl1K3AvtJq8M%2F13foYhX4hd4OTn8w%2Bd130Vg5ggIhAP%2BZvbM%2FsEANdKdLoFWXnh%2BMZb98w50b2AYKUUl7QOgkKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb%2FgeBtaMPsjxIRV8q3AO%2F4hLcWi6UtIGw892VP%2BYbTApe4J0gMpX%2Bv7NJvAn6vyMcoCwUjO1zmXUrpA90ONHbLuqOn10zBqtWsY7HEw9ZhQZVBsfNsw1%2FMtNyVrRlrPVar9B%2BFggY%2B0MtP4tY7htCZLvQX4Q1LODBqNlAGQb95oei2zMLDxJnM0y67300zPaEnQSGM9hTraHNn2bEVDvqlELolsJvToTJEAkD5K%2FO0DK%2B8vwB3E6EnJLuU2fpx3rWIC22rMmQLQrKoW%2F3Ks45yL%2FVaTxqhrkfuOdleZyytK%2Bo2xgkejSWE7Y4DKdRhmCiuJvmzuAezjbY5NuNwFpKEwSu5DoPqv8MB7zoqm8GKrRrg3PqbRfOWPCDpIJ7axW6ihE9omKJzoqB%2B8EDGnCebZgW8mXYO5DAJ3bybtElF34WlzrjIMUNPvI%2BNv3ts%2FqPiUM9fPDGfvv5lc8Z88hFvKS1EW0QJ%2Bg2fnNKSzCNTPpSQDCcJ70uYDYO3Np6TgUclQqFnMlbou0BEN6IxHqZdefX8Z40%2B5P0SHCU1nmmVf%2BPgu3mtrz2rlPRt1JMzrEF78Eh9gg02zSXHb%2FfIe5qhPMufE1VpjZLiLeIIbMIBS1r8MCqvq1UYopBa8ymFFJEmAs3%2FfhuAQBIyDCUxbrDBjqkAXWrOzH7C%2BERs511AYY3Sm2htefA1hLg47q1RTgYyC2LjoqdSK3iF%2BhlOt4wW5AX%2F4zJj%2BQOxe6If9T0VH0DoPEosztZbigPRCBn2k3yuPDnakdzSYni%2F24LskqwX5xc4G03IgfTuKL6gnqn6oElsr1uAEani9gEgYtVBAjvrbAk1OsMFP2nOV9z7rBNC3LAYLX7OO0gWvi4OFhnfbGntw%2FatqCO&X-Amz-Signature=69ec511fb58031803383068b7552521494871cd723f3a03db6333bd86a991edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
