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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQT2A5M%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvtSam%2B9mcz1y7XePbsru2NRVxkePU04ZVDKn3APyzTAiEAmGtMl%2BkTEsEdMFA6v6Iy5tvbBlW44zL6omnz0nJpIfsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQVOrB5ImsqP2u8wCrcA0X1UlNeqozYLu548c%2BRtBHEhFl1BNcNiXU1tlzh1C%2B2uyCpwbSOqB2ijWB9P3UFwfZvAJbH9QZvF7lt5LbjH0%2B5V4pQSngGEBKzQcf8ap1zmWw94%2BoP7CvdGvafXUcgVfVqwmTR%2BaGaGIX7r5CB3jRJ3lyy1gX609WFjJwGSL%2FC3Sgq7ZxplNinms72dfwrP2ckkD9Q%2BOMrKWfYCgVflRtl%2BAwViMW4VkG1jGlo2PB3HsgwF3vqVfzsokcFSt%2F6dKmeyR2t1VM0vsbe0QocFUCxsc4zLWb7zm3wCo8mT94o5fXeZJ0ARA5mRJMrB%2B0eOB4FT9GxRRImQTxYEXUM8SLhRMhpQVvk6KlNvBaKDlDauc1bGa%2BKzxJc601bc3JfHtS03%2Bcda5i9ejuJW3i6%2BYv3sXU3a1%2FvTHo20RuXVi4vfxoBabMmr7sGQmPs59ebzDfw73vZ4N5UmrS8gOK7UokNxmKtnMaSqdlihxf6qgcAqgOY5CGJI2XX27kUevlqZCMcISQtoX3KoFXpHRDttJBQm0q2b4gwMGNOqzPheQBrM5u6B4EaZvoNsTTqg5fvf5slZ0qusFe4eB9%2FdBwgy34vZcGft6DGdeRKYC4OOXaUDKoJEqqEyrv30cK9MMXF7MMGOqUBtUIEsmadZXDNDZE%2BrZ3Mnt7ofsliwm2GXvs8aare6hk37le00pXH4nxxjqBjDyrvkeaeYv6SQbvpzXzQ2Jo%2FMxvOSzoQ1FPB4izGSTfn%2BIrATd8RG7N6r5X5qAHxKGGPfutb8rmLJTCqsBwxa8cIhCSVVAVpmkEZapaWeQdoZHllkfDo2hBCw7JI%2F76J9%2Fx2%2FW2MYKwL2gDz1%2FBtnnrj08k6kyj1&X-Amz-Signature=f09f4807d2f31a88c8b12ab3093271bb4bf647fe151e93ccc944b5e825ae7cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
