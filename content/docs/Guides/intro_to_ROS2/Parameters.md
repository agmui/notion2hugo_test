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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4A5FRWI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD3ae2Gt%2F3ZynIjDhvxHtx16zSQ7V9HlAhNpiLDMcksLAIhAJSKQBrjBqaHziCL7WiKy13CqBdXrtadZpNI8jP6H99iKv8DCEwQABoMNjM3NDIzMTgzODA1IgzVpBE4PWwbFEbYjOsq3AOwDkq9RI5%2B%2Bc%2FM2R4xRhImDKVz%2F1D4fF23LUmdPigUs7CrzUghVY2OInZrk3fgviEIIXhg9ev5A1IW1YJMRhiNeKtmHK5yKbOC4inuwdsPZygQRSsE3z72nvW7M36R1%2BZVoUgDKMtt86CA1nvhrkP%2FJu0k%2F3kHPWLGige%2Bcgd1Tx30mUzkzvzfUutJE4ZIS15pI4llCj%2BeJAe9Gv8iY5xpLDTEam76CsAoOD%2F1RjySeCJRBschejqrqUYl9Vpcd20nddETQBvjfiwh6z4TonuCV5PVWo0lPudzZkrv3FkojDa4laO5jETqoVUuP747tSOCgQJraKgylEHNIecO19A3PW7ebs2%2FSvdJsla8gEv8BmChR7Lqbvpa7PT45qXXDqAOG1cTujNL9USRybXf8d%2F9%2FilTWlxe9f56QL5Z8AcO65EoOEymV0zc5z2wVMTawcGIdfF4kSdxSCxiyZW8ypoELD%2BsSWA0pXTfs3GmKYMiErI2Y4wEbnW0l53UaX%2Fb2dpxwANmL9YSnCpVinDnOUkpntCabcX3pIhVQAwcKFoxK9hXRF%2FqdIPdUGqXriKOrtQiFFmIYI4cdJD42ENybKeh2K%2FVx6bM5J8aFHebGj7zfp0qvHugLmhIbczA0jCyjfHCBjqkAcMnPGD%2Bfs7sAenMW%2F2O05HsXK4Q6rlmumu35YTRYm2vTd1bGaWJuFr%2FenQ5PuUDt8eHi9N1iYak4F6UXuHeEzLnzL782jMLmJEGHrJ5sfwLH9SncUUXmo0YiiN%2BkhxTyw0Iplck6NwKRPKUZIZfKgQ7Kk5HYg3u4BL3BjIwnrY4e0fvbak9%2BG5rqh8xqcDfcr64mhkO%2BVL%2BeHxTGzxKvRrSM%2FnB&X-Amz-Signature=df706057c75e7b34b62fd6e47a57906b3f9b532364a872a47a743422e208e147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
