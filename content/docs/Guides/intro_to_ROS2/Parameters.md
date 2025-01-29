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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTRBG7R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FINQc4TqEl%2FdnHLXEX2nfraA922m7Sa%2F25p0%2F11vqBAiEA%2FePYDIUQMsGvYQMhzzOAQnxIODfdzb4qM8s3R8NctYQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmfqsAhWm469ZbjMSrcA4STmXrNIrvKgGbAUihBE6zDXgpwk9sWGRBilmT9An8UkXBk3G5SD5b4%2Fyg0HvtRYMClq54n8jbtNy%2FvRXJEE12xARW6tjjdJEouxf9Nz4jsVPllLEesJEpYqm9zU%2BTsrJUAFRc8Sp%2FRnCQKIv2g6hyZQpojuZuQk9d077mWFgj0XgVrFGRYuh8Od9foq7vAZrve2%2FHBRSZ%2BNpiFBM%2BEYKCOqYFI%2FHsjH3nSdhKuU3LmtQc4Nb5LPMcQgoFuJEKKdmrYzhAk3cyqBKWzGYYTndanid0ughkoIX45ZDANA2Am4%2FGFgNk%2BcncT7mJb77dvUI0Q%2BT2F%2BTtrrNqbJ7Gvyuxy3zF6MY8qyWHICknjE6n0Cv8qJ23wchSipRmp5dfXdZNB5lTtsecXtzBl8dqSET0bzKvDN4T9M0Lk3LxJ95fnSc9cVt0a7fH0W%2BsSI1tQuMV8Vsc4czopbZisT2KvZ%2BSJ%2Fc7KIwiGYt2ceowl0TW88QYOW9TZm0fCFDuE1Bc9AlwMutmFPSJ6HiATMykzaoUzwZTq2YepyXSBJrx14RMAaLdLrUvj2GFhrzsdf%2Fpqv7WdG2nC0gFn%2FGIfkcNjxfZaasg%2BtUhkh6JGCmKUdojrVTYvOHlzWacI1k5TML296bwGOqUBjRKgEERSLsKaU9b3usFZJLVfycyZorKlVb7ShzbMXQX3lvWptOQaLfCrk6dSVK81PpSBZLCMn9XC67jcPoN2WyW2N8nrBKmSg8%2FCY7ncUKHNUL3wvLByqU0v7tLHy4EnWx2GBTaljkPMwcqWJnsX%2BvmQn%2F891GgnPzFlpEzSHT2KSX3xFjxaHtfK6d0Sn8x7v%2FG3NVGI10Qtx2BR64ef43Kmkq1q&X-Amz-Signature=459e0670a6051567b8aa6a8ba7823821163b3ea621c0843498a5145c8d6e54dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
