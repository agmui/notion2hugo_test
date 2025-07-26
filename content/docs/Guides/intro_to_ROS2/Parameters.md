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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWKAJHO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDq09rhHTgyZ2ILcOFhn0iWCq798M4ha435mvc1FLa%2FqAIhAOgNlyUsVxfii3M5DXUkzdoDXPqlUrT7bi6sDMU7rNw1Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwxhQGdeGTiQ6I9XiYq3AMg4nfzEG4SRlesS3b9jxauf6w9CHeWEtQjLnNdoKMZ%2FhjNfcPHsHbd0lNGihs70D5fSuuVG7fVmorz256XeRPSXkgOgOdGTjdKWlzLOL%2FW8oh5ckyVcIIfHNPP07k9nO5hIJUsIB%2F1W5IYZh1ryWVROelbmTTHbsHJHVYXuZCwrhGJSf0Pf9WMj0fYZIE%2FL5OV4h%2Fj8LjOCizOcgtzqMJfsuj7Ma2VAL0KhaHywkPCYg1HQDctxOZZ5Gk3NE8w1XrlsWR8jNW6RBH0qCYYH4fimMCLaFuhtOzM98ZDVBIwxujCIM4LS2Bz5JXj8i18qfUeRA19mnTgDitJ%2F0pikJwxAaqmY5mjZ8kpo5aTPyrQXyTMdVp%2Bgn9ZkTeNyviHYq7fjeUCEpJs7iesHPb3iZuz1ULACZkA6Z9KeWrbubT895DY%2BI7AJ1%2FyeScgWw5PnvoX1NNjxbI5BUzBZyMdSDXLTSXe7%2B8xXJpVFT6C7r4aWPW9ik4w1wrAQI2T4F7Ppwgnp7g6Y5fo70NS8VuP940uElVqUZYxZCcu%2B5t130hEhyFbBfCymSncPFwhQQkML9n9aU2x4u31svcPX9kU5LRCKt9Hs8vDnFTQG6JiYtntWke4yzJn0%2F%2BhVD2uDDDOq5LEBjqkAQB8AZHVvdZLZOjiNdrLvQd2sO7blKVhTxImtH7q0UOF46fW%2FkSO9KqOYcNXDDnq2o5wfZl%2FFOKwnZJFOagKvhuXTgsjCWfWXTNm5l%2BADfhssQqoRIHQiJrh2FIkNOwRLammyIQBVCdLlKRA%2B6bnkcByMc0QpZBc4M3dJ5Ee6Hi4EMgaSYpGD0ITN4W8aYu3dxt235mEdSouJTuyUzROY1vkxB%2Bb&X-Amz-Signature=0301053ce49c9db2ad08810ab8d4c503158ac926a8caf3610076fd09438bcdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
