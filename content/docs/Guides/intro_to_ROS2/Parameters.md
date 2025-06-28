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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEXQGUFS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjSgjYomqmou1AyLGrCL%2F3hH%2FDkUIvX%2Br0065Kyz%2FbTAiAA90UzAnVjz1SFYASK5dW3xK7D8sxrjZJOodBNptU75iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5BbtwgFbWtVSihZKtwDSFWMvaSs%2BDqEIClv5sQOFPK2J1oE0pgV0fPurXBb%2BT4eBZLHfNX8UCpEytyHLtjM%2B8WQyHywdsfCLKDrVkgQZiybr8mu6dNHF4I%2F20lJwVpXa%2B8bJXqlR2SZOuc%2Fdow2Dhan%2F9G1D%2FQ63OQShppfMDCIpGfcuVKHp4RrXyzM1rDfaVxzy%2BWhbz8cYsHC7shHBrmpMTFLlkbl5vDfZU%2FJgzywlxUZm%2BBcrQ2hqQAb1tzGaW5oV1MsHgS96d2WEhbwy8zK8OKFNV3snHzguD8Kw7TiFo4g4Skx%2F2IKJ2T7cyc9v0yB9fVgmaqFy5f3Sdhzg%2FPyYTN8Ba4omeW5xDCjlRvHFcLIoa9rL7DOtSZbue90vKMGFGipIfCjKYbm0ZlBYShJXBH6QJSk44wktwopAC4w3xUbaV21bwEXIvJ8bVh5nQfaNiz2FqWISqWjGRt%2FnnbRromMSoTzHXpZHuJ8qBVIiHGMLOke%2BONB9eIjgPeLWWc2HOoilGLrc53dcvn9FTAN5BmPywGwY00zxmAx6vOm%2FF5eaSBM8rRwbu0qNVeQvqhUqcxP5r64kONh4v40u0vJBdjq4amF7RLvYmkENv6y4t%2FVTxgj88VL8dIs87O%2BzQCe%2BMQeFwT9WtYwx4%2F%2FwgY6pgEJrG6ycQt%2Fuad%2BtavsOjpq7N7QyFBuwnAuW4fRGl%2F2kPe62lxX6y7KKv9OUXPkB0WUSBSTlZxneyKvXFHy1Ag4w4j91Nzb4j89aiwogrBf8VrJPKgT7xTDYQJr3V9SH2NkL73CSvkNGLU%2BpAFciZdlNr1jmQGdherain62oPkZ3siEJL%2BUHA3X7bPhqPsIgUTVE1KwSZNtTOujsEP5TIu6xETitpXF&X-Amz-Signature=c03fd298b5698a812eef579bb17f434014f8af75d1de0e2bb3dc02115cb1d14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
