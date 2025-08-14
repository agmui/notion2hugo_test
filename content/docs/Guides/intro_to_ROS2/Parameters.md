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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R75PNZXK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtAGuxhMDXAqbedqZYQdM1H4tvaUgvvFF9IMqTchOheAiBcyO1FUyEmQgKJMDHfv%2F1%2BYMs9ZFJiga%2Ftigl0itbucSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMYQ1YXFaYta2rIERjKtwD1N7l8jabS8UwxadvxVE5KbLf0osxNjbjZ3Tp4xMAb9TkFq4%2BTdX5NQ8MM9ZOLJGxfQNMIGuoRNC62VNqxR4HC8H2hSAUItlJ%2BkgD2RrfHsI9ody6%2FE5EnV7zB9s82LXH3SCSKUtSFVR95QNX1%2Bie0ZM8YZHGLW7Qrq5jwNbTJ%2BjaENbPW%2F89TOwELeF71stQkr2QMQGBn8wgmn3zsRYCeu6yrXQjaFVKKyqRJPGdWag1%2FCWD3B959ahyzvpsMVvKWEMBxvGEG79dWfs8%2FiIN%2FTmLs5Bmu%2Ba8sLuodWCc9jzhimqMMAnmuE36%2Br0WeZjMn4U0NwmangiWHUwAxtP4b6lgd8v%2Fyo62l%2BCr%2FltFUWMUl3YEr7k6eGuW8%2F4fEW7Ag5JwGSTAMyfOUw8ldkN33%2BVXC1uP%2FVnoZ40LwEzF%2BHUQMvd60audFPQCbDbLROuw4Dy3P%2F02KG250T1oxwnsFZxr68H%2BhvWf2WNcGwYWRrVXuEpChJKGyBnuzQMgaf4B%2FeZCiO07Ow30HWy%2FzCzAZXYebK07PwXd8%2FiCFzInQ7NtJZ7BIS0UpL6b8c4vFYyzjdX9tHEfT%2BDkv5M%2F%2Ff33MATVwDpWiXVNqlxoZDwJr1l0%2Bia2LxFh2IED5XMwiK%2F2xAY6pgFoxmyvy9O1vNZDv6GcOlDwDHJrnVBr%2F4Hsoweh%2BEVQJbQn%2F8lr8Fuukv6Wzyvwtryfbk5EAVI22GH6ZQ4UykYU7XL4RXnWdT7Tt%2BuNG0oGZsVViEyIdcceHLNvIZBSwzAuOy74R4gHJfGYOyEEqrUn6i0MIKgaOVKc3ikI6UIHV8ZjGhaQ1F7NCVqRL5Dc4fcT9szlKLaiUyYEr9%2FqKjxPXnlZAlAO&X-Amz-Signature=fc9a10af64ef95338980ad6758a564fe9a6ee6db82ec33bba4ac1b799b904c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
