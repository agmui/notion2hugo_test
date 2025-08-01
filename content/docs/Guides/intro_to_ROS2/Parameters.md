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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XED4JVLT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKzFQp2P86FCrgOnmCskal6QaUC9jc20nUcRAvJhzMKAIhAOeoB6gKBd4P8%2FZW3gBaOfP8PUvVPtAXzcpbDTYFccVMKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNq5CJq9Be7g6NM%2Bcq3AN9YYHa24bE3uTn7saluT3ttvaynOGkzG2BKNjCHPkn8X3JQavUM0wZBUknnRc1crk5qiQoq5hsr5QurYQUXa8JPCJoOh82pR8QSrR%2FhiMzGp42FyGFWaXgjQSeNWMoU7dMyvT6V6Bn5ovPkFRYAIGa29RnVpFXZnWrKmOAey5J8kx2Ma%2Bp8xzU0G%2BmYHuTBDgkP6Eq8svT5RzimTijQ7PTRg%2B0w0JJVlYBDjf36CxlB%2F88OMAgrXgiOHe%2FZqHflmpF8OGdVJNr%2F7%2B5eImoAzltxyac%2FerGV5I%2FJYqh0NtwEDvaE92omnekg9FdM82daJiSm%2FMURpgBk%2Bas1UhpzgxXiWQnNIafvGMdrWD6s%2FV1WXMs4wm8MrPNCntglpGF1Sq7M8IwnRAp5URWs53NTxXJErcEO0DguqEk87H3Vfhg%2Fx2kk4wuhxbzaw11M%2FWrwzAnAFivXMKxxTmw3jq6WNldSFaYGMytGsiWEoDI3skxfT6nmNFgNx6aSuR4Y1SXAPsbtZ6hEw8efEl56r6rY1pt52%2F5UpGKVTsdiGfeciHVhb89TvIycgmnaWR1DBEw6XcScZa9SCLyA3nWlU8Mxh7be%2FbgF7AmtGqk869PugA6YhXwRBvewTKkfBO%2FaTD0%2BrPEBjqkAVUdmLhYzYefW5tzCIHDjphXB6AylfykwLfgqp%2FH8fhDOWW%2BNeL14ZqwYKPYFvxZb9rcdEAQVjgPkF6%2Be37LB8aRMLgVAXsGT%2Fhb42jn4nPPRS2cM3pDzc7VyvcSYBjyGOGrM5XL6uHXEW58sLvWfE8oHs1cvq0Hl1J0c%2B57XCFn603OmbRRP%2Fei5HVAgdclHTFyZL%2BRYty0yekwgnxhHNHZ5Oe2&X-Amz-Signature=a7fbefd32177928ebe4107224a387d37c4f93529f337ef33ad3675c9a7dad5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
