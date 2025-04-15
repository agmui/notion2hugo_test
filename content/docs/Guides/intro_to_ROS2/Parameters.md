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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRRWTMMT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMrGfEVL%2BtF7KC2ZNnuKC3Vi%2Fe1vvjARu4H3JffDgBHAiEAu3v0bkaWYFiRZnjWwKExWePm0yCJ%2FAZNkZbx09gJRa0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHXFbi9I%2BFYrzu5rJircA48%2BTBImWU9Q7RR1rAfDk%2B1ZqWmEyPHpS4gYl1KJrQwRdl609l6BwcTYCoh7PnlvZulD1xGUgKUlEGrUo7ngZXEBSuZVk4t%2FYCl7jODqReek6luHmPtPuArfUtACpY4BbfJD9FYpH8wAJRlki1LMGboz%2B0yZV8EujXQyq1CFzdLdTtNb9fC2frcCiXJtAPaAJ0G0qXOaJcnTDRrg%2FJYer5JSzKDcfQ3LNW9zjmDxI%2FuVxLL2nvuVREmqIppAlL7GXA5%2Fh%2BpIDZdq1Lp9JwygNL3SpRishP9Qgz7heAgLk6AXe9By95tI53cZAGfyqbTwk8L%2FsjVBTMw0%2BlWVzQ5peQ53vC5LmF61NOTA9iAwyyUwHefrSg8%2BQwjpJFSOz7f%2FZAL2HplyT2Syr7%2FKkSfr%2FrnCl9OXEdynDbDQG%2F3Jwe8LjFtqOXa6Ukud96UfhWmlNuraMzZy1UvTO44THONXUk%2BB3w%2B6O2d%2BifDO5lgQxHqmbwDrxqAmWIdzACTcXSmUD6kJtguC4x1ChS3XSldd8E6MMcg%2B6kwE%2B8vwudFRKAagLYwReLWdRtlpdsdwWX5g2uHvou8yFniSkZv8ypgyi85FQeMj7hpYMje2xagFzrulOJ%2FGwWPydEt3imEfMKjC%2Bb8GOqUBFAbuXL62iX8ppNMNkJIOhKcmv6ahpEOSjEF4PB0v3VoBzFEoOo3m1UCq%2Fyf4CMJHnKVYCP1gfSUfG8DgUbGH39OE7zVBHx6hcsp%2BBHrDE5GE17RpqlBi1FbSGBTCrVyTDflDAcrSpeidqdR%2F32ddJnZYnp1%2Bh3F8gJhCIrP81xohO0cxL9RdY6WfeVawy6Nl%2BiIcDUAt7m%2FAPGhJzBIWEBwl8LS0&X-Amz-Signature=24b82da09a64176f4510f391fc6ce340bd8ecbda80e8275cbc555d480f621814&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
