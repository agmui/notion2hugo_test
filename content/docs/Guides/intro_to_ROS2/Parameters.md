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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJL4UQ6B%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8YSANxpvU8GJCJia55ceHKGJ6yq2IXXfanWzPjYa8vgIhAKX9y4rK6%2Fj%2FeMyPDdM%2Fmwu%2BbfvMdOioxl8uSp4DK5tsKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5%2FVo%2BDh6h7j7TfUQq3AOfeE1fMKcDyOHL43SPRb0BZlNPIX2MpP8xRb8qVcQKJhUoZXT2miRKC6I%2BwJ3hPAMBrhGYj%2FlCyWwmhqRvHHegKV4ow3kXH25x42uAEyfme9X8n4QKuin4d%2BYfVZNSed7ykHYdJ9exxWWyu3W20XVmpfDR0L6cxtTVVN%2BoJLLZ3XNHoN5doxlka9E8rQWSi6NVMTB%2BwXTXNvTAO0QBAQaBpDrClfHgDJJxodzVCGfF12Sp4TZ61OmI4ZucVb1VakUVMRjC0q0E06pwPW94xvssbr5QF2O%2FrpMvUIOoseRcpbUZOiIh27jRFjv%2FnDJeCz%2FJnMz3FOhTep2mW5F%2F9ynArb3EjW2rwjCGIgUwwZ50Zsj7rNGzoyKFELu9BvSlycyE8YjHyViEWQfKOB%2BLl6iGtZS%2BH2sLOD8fU%2FIjznfZXa7lAPQ0Pbq5AvAz6Haq6kRdkyrV2WH8Sqtsjm1oVdKS0xDRyqCeDj7Q0M3ELYjV3%2FQyjj%2BoVdFPYKSIL4vYS%2FzMbkVSrkQeoETs%2FYYmu1shH%2FGziJvlGHqub2ES7y1jG8qQHiqMx0E7UkB%2B%2BSTzNK2wOmbikZG%2BTyvvpBBs%2FsgJ8NIH0CuAnsJz4YjeKrLc7%2FG2w7OFbmohvImTLTCqoZnCBjqkAQ%2FpFGtje9IZLcATWcDmOMPxALlgQyNZQrNDHPmhrCnSqrKb0YxpYCenlqjrrXoE%2BCx9kNFEIoZTvNclQU7Cp0MdakrTQd0XTD2Jh0sYrdtBjfhYFBSMBNCyChNVE%2Fyo5hqCeIegbvsJj0OEkoxDS84FbhfBaFg3xA2OSjvaAMKWXloAK9Y4QWYIhInT9h1A4J8uEChsJrt5ZGJ038xNgrL42U6b&X-Amz-Signature=f0054cdc1362a676917818940eb2e78f9546dc66eb3ed427289a98beb367c697&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
