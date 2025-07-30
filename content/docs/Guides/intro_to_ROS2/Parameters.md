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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIXPJ5H%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAdr%2F7oSMAb%2B9I90lgd6AatVcfBrIg96B8jH3rgyMmKAiAvr2IabFWEiCLhIoD0tbe8vdopW0YQg%2B%2BMHbXaEbUfXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV9oLSh3mZm3R36TOKtwDv%2FuqaPknqGjOBNsR9MK9%2BKQe9ectqIZS%2FqJnokKKUZhYETvw%2BIVSXhUlP5spW9pq%2FSYfvV0FNzsQhA1VPSvtEeNkRqCRJ%2FG2PbwL5RsYiM%2FfmMXOk8Syvp%2F6u5GqA7ypHvzMwMG7uo4w8WFC6n5vgiBX2vcSeHZOk%2BAWtZ78SdWbwPgiQb1oezkksfLdIFt%2Bfz8bfsfF%2F%2BsyQ6r2q6o3Ktt%2B76FEkBWQFPqYfH4pchVbTBYnyfxIFffKEjSmoiIAzsTqfHXAXXK7XRNRwj3ud6f2XcqCBRusaAxJzF5oKXcmN%2FwzHJnEVp8dqQi46PlLUbAMvDYdhXjPR8hHXrigliSAMuCl%2Brt0586UDqK80Tz3mUUWf7SQKeKz6p8Po6CoJDiB28FP9PPLrXMzRSfeyUSNsCKtnzgEPyPwmyyoqaruw6vUFIcXpwOgsdQ%2F%2FUN9RxJjGE%2FLgtY3beb2wjqR7Ko6LXCzTH%2FzxQ7R02ivf16rxjvwWXTpFfh7Y962VEw4uaViQ8tyRsU6gB3tafLZAEEgfi2KOgqzZQy7aOjk9aJPW%2B3li3CpldZFdIghM014Qs75oN0vdtas5LhIa4PdPI2EduM9sf8ebcdWlgcjRQhEHvjRh88T65W4Be0wvompxAY6pgGxdUR%2Fq%2FGWDrinZmbNRZeGseg5xt4vmRZ6ETclCezYdqxgN2vYg2JW4vLmxLuV5hhRqDV%2BN8uHrGtW%2FjDG%2FvWjF3waaWtaXE%2FekdWH8XVlX2%2Bg%2F3CRioJy5iK%2FP1a6vjw4FM2a9%2FMJrf4Fnd4Pw1SS838APiTHtRv6kqwa1obub8l2YSZbxZZnqiF08ngoDk1Hcyik8X9j2x9idoJ%2BUdjIgCA7ia9j&X-Amz-Signature=61d726ce01025e39d5a39f73d2012900249eb225c5cdbe8625ca622d431912d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
