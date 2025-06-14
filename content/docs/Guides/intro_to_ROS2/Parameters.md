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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PTCW3O%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDSISFwMpuEHijSe8nnnicTvZ%2BA4Z5j%2BX9Fv%2BomwCp8cAiEA4x0gF1d6sK1d4vsHGuYpXHYeWsLVAqIQIFj4pIwmQLcq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMWX4g1aStx5O7CGnCrcAw7rvFAhZtQNpkb8Lk%2BbcYKOky30jXFwyqccnkYrLT%2FLF3sKnmmDpi3bH%2BldD2MWJI5N0HKYecRmCmCxRbqVv4DTUJdHAMdNdBNnapJk0NcbABTRLp3cKheDI7I7Ah5SeBLZVPGEBH3sxZ4TPWx2wWlHXwce96NMnfKrRws9Om%2BcQC8YZccs7AULrwk6IaWaqfPw6KwdxC7o86lM93K%2B6TMPQ%2For8K7xGOGmsRJU0ZDWkoXuPNHLl4EnZd1w26FZrrxabspbax15Ozk4GZCWUgLu9rTaIgx1Lr7wswt%2BWHSkfAU0B3ISlgdyzvkSMob%2FGaNxjOkcDP88Jt7Viktksq2Q3ET8HUcjClKdWHAw0t4D1w3%2FUqqeupLW%2Fbd453o2cCHhyJNjW%2B90q7S6Hj0SolMa3Tvzgj%2FXfebcu2qWSwzX2xkH2uZAe1A1xO8p5WkTE4uw4U%2FB6clB2r9gEyuUeWrb%2FKiV8I9K8rbLa1ki%2FRVJio4ETwAxQLPopsXr4PbWLnHz9xpWefrl8eOiI3%2B351ec6rrQ3LHLJZWYTzuY1TEnkytVpY5y%2BSzDx6TQPC2FJdijK9azyyNarW%2FzMnO4UK8uElbGYbWPBNRU74LrUa99LJ%2BpGmiCx03SauE4MIK8tMIGOqUB3W3xQfkLyg6axYHlIXnej2dNujGt8IRQlxXMDqZ%2Bo9UHuM%2BoVxEOYdnCo00qkBDldu3OuVVAjWOoDomXbbv0iw3qUMQ6i9kJFUKyNaiOV8igdXI%2BNFj2FmLbJS5dhoQl%2FXCMXk5%2BuW43rHxNz7ihJDZ7FCR3IJE2MVqX6ROJUpuXuchpE%2FfFODdaxRSvjHqSpNUIYfrtDgzfRXxKJnw%2B5RYY4iGQ&X-Amz-Signature=424aa3042b87a286207765967a419f868760b7c13d72b2aa474fb7a70627b1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
