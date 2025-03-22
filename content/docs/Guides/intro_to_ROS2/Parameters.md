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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PZ4EZRU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEGbjuoWYaCpbG1WTI7ZfraSZ%2FiPDJBLL7JiJ8BDY62bAiEA3fSSAxjER%2BqWMeQaG5qalgw1IZ%2BpSXVBgIXxOpsgg9oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkoqNmx4qJsKeBnBCrcA4Z9wPPh3AzODFHWVNNkys8Q6VMwscgkgpc43C20sV7pCLvdGBXugSZYRwgRNXNtdwWru7ouR6n%2BkJKWwGfQb%2B93QhgZc4j3sotiA9TV2lOrSPYzo9vucrvkN8EsQg6QA6iWTbCh1cB%2Bl4LgFJqwc%2FWeVEoB%2FtLZxfUxcOcLb7sn9bNrucRvVBHgQ%2FztAdtJvSGgwasVoZ0twk4UdvYhczhK7zOscS%2BPcyBb%2Fwfo2KE6VM9PFzUSl9qUMXemwNYxaXwRg3dzC2vTdXxQNVVaPZzJd%2Bq3TYzgdhmgTByqRFXrlmLPW781PDLYSAzeWJRUT2HXqqieR7owcoEzHZYcBMi7l6Ijyr3hlEBYyfykea8EOS5MIV3umN9phqxOE32%2FpWfBjwt%2Bc3kA4jKAVzyECiTWVLfj1yLtFA0YwIO%2B54XnmxDAtoyrbhBS4MYvc6f7r8YVbogvqH0onTi4Tg45BO6WqwGw4Qm%2FNE3AnIY9LO5y6rUV%2BTvsUDpp0BHpklpG7YJHV8KcWzhuML%2FvH6ttN4Yt8AgI7BGyWYztUxCPd%2BlvrJfZO%2BoF0EIzIj%2FPP7jfOIn%2B3LgR7z37jSkCZ9kY8pakQ0IPwt2oUcPEUYDSYOfFfA%2BKIR7gldmq66eZMPet%2Br4GOqUBe%2FvWQ4voNaJGuaFn%2FMxPmuUZZ4kIxiTvdAiv7nfiYo3OgmmaYkf4JYDeO7pesCTm%2BCCaudJ6UU1F5x7SzoRzfmnKi56Fiq5uhXX2tOIkrulgjwcD7fEK5O%2F6a6fNXtUZSTfR9v4eJFkpO51sezjmVgH7hzrwc6pkjasxmY0UP4Xrc%2FAMZGDmT9I0OtvcHsgFHUpRllbiAXBc0vkr30CVmLPs3eUg&X-Amz-Signature=4ad69c9b28a757abef484ab244643572e1d049b6bd0967834e23940b65aa4f30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
