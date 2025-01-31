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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGIVCBR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0RHVXZNTCl4hEO4ufSVE2i7d2kiyPhhgm%2F8K%2Bp8bOCAiBzEtYQeNfZULU8UmYLuGfbHD2I4ci9zSwm2UEZEjBN2yqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fet7FbKJPVgbFq2yKtwDvb1aZjw%2FfcgncwbR8P5171LDx1WyCXaOUHn%2FZzdjNbDf7%2BSxk4tdGU1hy0uKHdBpdur0XpJ3SVRpq8JLfeQAEh8sFkPEAHqLUED3C3mSADeY1aQLTYnkOg6exZEmqPBvxR8bKjI3qR6m%2BmHOPQprL97ey0AZ9CVEkCx556KNBsLO0u0BKq0yxEtklhDseayWRKqOKI99wOg%2FqyjMn6MMybDUxGQtlaRZDRvP9GNyFzlzdP5NeWyPfZTIimUyqrLumUA9O%2FwoNqI2XgERzCajjPu7Y8%2Fvv8v7IzvtMlgFmSJSXl%2F9jWS2zUjsKXR5HZf8HfQompSoAtlxeP1cNPliz8ZU4Hk5%2FOB2Ce0n8gK7nCb%2BYzAwCee07srgWogLhD0z8Htej6OnW4GhivjBmNYlolwxZL8OYdWK8RADKHb5YPvmJMDgRITopGz6dyPZAI8oPr6CUXjWIkH1SwG4%2BMIF0OeBU4JMz7JxgXUembcgYxaoBS1l2vfrW0%2BAq26%2FpuZnPYzUOkBlx9olHUPEtnXoYmG%2Fjb1%2BLLahEMncajTeR3BVplAo49BcjCrjOuqyWctbpqlzcoHWP4th5Ozng1taPpVM7nQh%2FBUKh95YRrB2yisbGmRUEV%2BLK2xfApgw%2BpX1vAY6pgHmKQ0Zh9GUQnFt%2BRqYj0LVN0llJa2CcPuCGStshKaBozm9a7%2BPZ9bUamxs4tSUERta%2Bv61osQX2jvTXxXvGpAOaSWNLwRid8q%2BuEMEXnu7Xhojzb7UaJW7ta4bup3pRdrVuysxoOi%2Bkj637cfXkWEFpA%2Fx2Wl397aVRZ57CvYbakBa%2BZnNWr4LkWZr%2FJkxSqzeeZEOOBu0cqHrxrV5lbKoLKVSg%2BbO&X-Amz-Signature=e9dfea22e8cb5af8ce38fb481c68bee3ec2d98116a2ca15cb017697fed9ded3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
