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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YWFIQA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDgGkUA8NCw7%2F3pyJfpCvw0KeBFb%2FS09DNmcxo9D0VqvAIhAKdszfCO0L1EShsOb%2Ff1XefTrAw7YEP2EU0N5BcaTc7BKv8DCHAQABoMNjM3NDIzMTgzODA1Igz9Pady%2FN4PxuSTL1Mq3APVZ%2F1tWNbZAvjm1b5r57nP86BsQIlQzeFawpUx0zNYTGTBc5oQaVI%2FvbXKG12%2B3p7RnYCjFJipB%2BO6Ksxkr6bTYqKYk5fduajU4DDW77ayVbsc32u9EECrgHT6Ku%2BFl5G2kPr48Z88z%2BYuWKAq2w8ekRAWtHPBul%2B7cFapWJBfnO2r9A8OZQzpB8KkuRixV%2FwPYCj9JUm08Qiflllsb%2FNnG3s9WLR7LscLLhEfX%2BB7F2XxfiyR05bC22A4KvZx5x0jyB52mkxn8Q8%2F7Cb7Y4lvx2nMl8t6fBn5h1IDtN040bwlfGe5t%2BUFvAK0C5cvj6kFwjKgUdxcKcXw88w94X5O3HHFBNrYRKFAuYh%2FtUm3Rpb%2F13aV6kNhPjdqHAuKfnJCVvQyVRsPOwr2GpG0M89mC2a6x4hQvyyxa6yzXqCTr2RRpbml5%2FG9IAnirqnot%2Fp9ZgImlcgbneu7P9J0xtJ9z2vFzVZQgMN5hSGCpEGm1QQQmBTiMOCbW8DehoJP%2FK68BUHkBOk4dWjfzDUHWAE4MiVN2SVfOELjr5gyWpuB56aCNCVmWGUhcf8svwfl8ZcKuQsEr%2BwQK9Y9uzEs%2BOW%2FlZPWiPW5I6I3AHAcU0jptK9bk4T%2BQ8hBHKFeSTDr4um%2BBjqkAcHhBZxWCPddAbDP9iEOTAC2xJVkAIaR8lMmQJNKOOCUVN7jSdcx7Pq3%2ByHaGGbWpzJO6LtZJ4VxvJeOKrFM1MP8XOzQMrKQxnvffarG3mzGo0ifSK2ZXP6MmgcC0TtwIAaULKwTSa%2Fzh8S7529QI9OKhIYzFW1kXV7h4cqnhhyC7BTgs7ApKkWXUpLxRUrdfRJXF9zI59qPzHfe78M8z%2F1%2FquCp&X-Amz-Signature=7c62bb7af93fcff0deedf9114979832ca1f3346201d3e75adc528ffe7ca3b8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
