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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAEVNCR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgT68oYKRXZQHBBZWiCEeXCqkK3pjUf9qSquzRVPTBLAiEAx8hjfrqDZtXJHfJSc9ttXgnVk08sbT26D2nD5nFrqksq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAtbotPdKH9VpkD4DyrcA6GTSZ72okRqBTpHxBnV%2BAyYE1F%2Feq%2F%2BS9DdGFYtt4Q9uEuwMHeO5pPaD7CXvXAG6YS4p1al7m%2FykNKRtr6PSwKiOE2R9mp2FFRzFwKH87NHnjUsJuEFygLBwXlNDl08M4%2FyesQmpxWVC2ryvBCFVImGBX3F2ALbQmLxCiC35F5v8PEEkUxCmH%2Be23FZ1M6IjNL9rk7mFd3CLiHvF%2BvhC1DO29Ppb8LZjC9UFK5YMU2qrXJVPdvRF4CAOaKwXi077WGs8oBXXl9onfyB0wf%2BOvQxeplSzdItt1yYMgj2qUaNINQLmwOrEG9M8VbGnukyfIscZKKCc52rz%2BO7%2B78BWQlqo%2F433NUmRNHkGEuRAgcBDTSNigLEblkJvBDIZF9kuAKEqLIjNrTFtQnQS2V0fcrGiZh2JHcWJnerEcSh82Pw6ydM2xEvORov1IznjZpW3p8f3V8HeqUZNqvM6UZKmqQ4TNa%2FCw2%2BHOwyiuCeMcdJrj%2FeVQ2SUV1i57AiigxLN7P%2FGioPA%2B4%2BlAa89wxVFeaabxa6bJB94g0nX6HpjtTzBz1pTl6gsvGzN4cU9plweAaMzamtp01LAAHOeMqdSpCvzEI9ejnbwrA8EvnYeFBe%2FU373n6wUxSeEvXIMOeN174GOqUB0AcXDl5YBygjNLqDAQsHeaJH%2Fyv%2BtJcLH%2BHQPCTKCNqRbhr%2F4ABC7EHOcwsRtxBEb1Us9e5ZOv5b1IoMBGnXkpdb1GcsqEPok%2FnjRZfw%2BmLf0uWoFJFYwqKxV7eF770Hu83abs3a35UkIhE2W%2FoUVuPzjqIE4N2BZwLY73dJ8mV6Co65dbBN1bCrgQVggNBoO1tjW1uGewzpYQSyjv04VHQ8%2BU2S&X-Amz-Signature=052fce9cc8138071d136ce4e808cc621b2fd7cd228b49621a4e2a466724f00d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
