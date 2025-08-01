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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSOUMWP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQB80%2Bf7wgqyJjWVuVuS3p9BzQWgbwTXKrXX6Ggrb%2FrAiAvl3xjwBnNbs%2F2dBL4WttqsHjUkAdyE7xjgf2H32WTviqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BUg1tB6oewDImMJoKtwDUD6VNdx3t3v8Ag8r%2FQtjJHy8TA0kI9QgUBZn0%2BOSKZlU6N%2F84j8sOH8Rl5akZV%2BCLX8fUGcuh0oCBd7fZ3qGd9yFEfvmTfQZ8T0MQGH2j%2Bf3NMvOdx7CMr4n0b5Ir6AAjG0tvQTzE%2BPZb%2BsimYDiT4Dr4NX559RHmMs%2B0%2F2ot1MpVpjvaNfvWKM%2BQ8jLV3Z%2FR0pWaZm5Tv1s2HDxW0G3VArrhuWK8ONCTofB2jgOMhhHl4aj%2Fm4KtHT17ml%2FMFTXoyRsvJaawGkIuncS1hL3AjZWRIuIb9wEhgqDkhdtXnMNVN0watzg88Hf2X%2FhpMa8zopbqqXoodyyHLTOlKQ4B3CYDW3coyjUmtBTgf3nvd%2FsOoAuzBNEYkEAcmcyHXIN7bq36JvPbwb5bGFMtuBeF9zQCmbhrZyKo3nbny%2BH3OnTO3KdSMC1HCI5qJg%2BltGE6e2yvdZMa%2FmTT6cmRtaXiu1Vu%2F0WLzvSXAwGSsODv2uDOAFuUXQVTWVCyBa7hErZpJUOrxW592vUjqolgPKiFwkvUUQRCzNR%2FfYBqSrf%2FGlkLP0lB6ZBUI6sv9WbZLcOMsTuGFpZfE1BIxhPXUzwR27wZqI1xUIZzCxYaBBc1GxCq%2FVcWKcXZFd94ZkwpbCzxAY6pgGXhkjz4Js6MPWSF2xMniVtg1pd4ZSjHTk7hb5uHSPuIdMocp0E9TXuqOqV7250kaLq4CLbQqmHMGZa96dbRgYOWg8tC6nyb8jdawLfh1plL6uXZVNA99evXJwzI6Xis7G9YDgJznSqq98MGg67%2FkvFL6VkDLvhkDhCsvjrTb%2Brs0aEO4yFZ1i4HcRyrIMi5oghyOP1B%2Fe40%2BVac%2BzQBtWyHyCl2zTE&X-Amz-Signature=545ded9e83e090234781f375a8786d7bd7946093d31ae92974b7b13aa5ae4ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
