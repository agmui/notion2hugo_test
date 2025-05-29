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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6ZWGMS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYvJ1qoaoVY4LZP20Q%2FtPQbgGYeezXz60MUDORFpZjQAiEApd7d7hXmAdGdl37r52Ozu4mCfQNdCVecDy8bDKk%2BidcqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMolUKpSHGqP2WpVNyrcA%2Femh4HfHLQAMOVe4mPCRs2K57LQcrtNEBHpq3%2F6z7Mvq4FzQy%2F4qjp8D9cCJMlTU9h%2FxibYdQzUIl8sdJx6rbD%2FBT8VBRnC6gINgWEoTDDE7CkdNHSqVPO53KLjblGqNXfnPKnMnWc1yXwhVC4k75TDBYldbS0LtSi9nVc3kJlOfNbIf1kYS97j6aDL8AYAAUjTntWZDeRV4bDD1q%2FgL93EYKtqqZiD49KMhbHxnO%2FtGasZgdUO%2BsKi3nCu8GA%2F6Co5SffIllaOyxvrHcv5lyh7gU4d%2BSjff0Japwj3%2BZ4OCP0VbtfoZIA81hzBLMA8o3IX%2Fw3nrGRNy6C83E5%2B2KYsh386WQMohho5KvON9sSONhrY1d648XU5%2FSUXsqQBGXrnxb3nHzUkn38FkBGzIpZ1fSuQlP9sS3VXz4s9q%2FT9EJxWQDczwresgo%2F17lj4Hn%2FxyZrN14NA%2F44wkk7tyW5GowY7RKv9MWHqpEMlqBrTbpDw7u6pHGVXYBOiyGTMEq47JKlbAnXt2m03dBSjSMdFhZZHTiawQvMW8NM8ykXAD8BESqgDSKol%2FLRfTD9flmY7%2FxC9njUldZQM6lfmH4dTBcotcwdzpeCWZ4wyziqHCGSHZL54%2Beybm7AXMIey4cEGOqUBAxYknbPJ0Il2Dy5uynrMr4HVvy77tXVuCYUkfEUP6Vq7cHeo4BzF3NIGktZ2yeOGJ9vjmWHOfqGCRW%2FdWKRxijjgm%2FHSs7BZDCW%2B1zrBbxhX7V7TD8zQCuHxd6Z4M%2FhOTmhkd6%2FgHvf1FukpSjg3gmOt0dOt9VwDdEFt1ANtxLh7UFSHyQUWu1Vl9HTwEuCjUuNQEQ5R6Fb2hSuNaxtfW0jvlMTW&X-Amz-Signature=756e08d59c3907f6c741e5a51f29e35b0d5d886cd31013c5fa85007f3c6d6a68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
