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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECUZMSE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDwnP1obuz3qKamez0MGyoBOW8nUjLDEAfgXkYhUi49gAiEA1PI7KG%2FqUd15S7GFBXUmn81RF4R%2FFn0GKpkugPZIGckqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIz3ukQGgUXDsJtSryrcA5v8Tx33UQHFzDVfH6hd7%2FdTYAWK%2BKdBdulocoBipK96YfIdJK2CbtWFMzAPYer%2BbaNfOeJUpeFm%2FkpnitFyzWEZnwpiajp%2FGj%2FYfjdBLPTMfLsXUpmhgGxldmuaERuhMHCzlyNN1cmttcJjBOnG0fZDgrbHa3Vb9SxZcPorU5RY7I2vp1AwIDspCTOjvSaWEYpHVXhz7cG1PlSQSx7e%2B1UOZE17gebb%2B300wP7h%2FjLPvBr7CzU3YyXosbSzkzr0jvPMoQf6j%2BQ8UAYxQBpjZUfr4TW6uZKSllY0vs6%2FYBaMtUkxwOygpOO3z5ST3FHplchzbtdaiuIJoR07lpCAeGEoPVcx1bqDiVNbUTZPwYwmzz8gsixfYKdTzoOJcftt%2FkO77Fm%2FBnUOIr3LTSpMo2vJ2S6Z6fqNnJXJWwJsYfVkttjI3rDp2Gr3u7Ckua%2F1h7BDt8VdoPcyKDGFwoy6Z8wKik7Pi3gE3OHXqdQoFMfj5VHA%2FWEAiYF4dJLdJivViFsjLi0WMlJDEUDvdp8Fta%2Fa5LnyM%2B9zroER1GogXfL85lqQ66MR2VSVIVE0H8m21ebvDqvf1ECaNwaqHVGO0M1E88vDWPgr2HU5%2Bn%2BDk%2FCmu7rMYDRo6hU6etfnMKiM0L0GOqUBBXc8WyBQwIOjHL4qXP5e2PfIAho6iOz3cOqdvdQWKbKm8WAqVa4qKVq1IJceAse0X8JPhsMmT5GJSTC%2B%2B6DuvXn5efBsDSHoBXqyjEKxLH9SpCq9v9GH2PV9ne8yURpuGzfEzX0kT1avEu8awtzxM0OiB7QCOZNbAzHwdLrApQnXfzgSNHwOIDFRidTs8Dyc1rFkiRB9Vs7eUkAEZ7zO8S%2BvlKo%2F&X-Amz-Signature=9c77b657a3e10c5ba8f35f9feca7df70db4785d6d2e51f539b0f8ee7bca0d2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
