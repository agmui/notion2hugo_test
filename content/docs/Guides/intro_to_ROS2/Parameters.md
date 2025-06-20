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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RL2T55%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGOXEdoaWQMErXE8J8%2BJoJt1r0MPRkhUZ8F6DUmc54lAIgbj6sM3%2FElED8Hoy%2B%2Fzz6sorS8%2FfUhORv5zlHNRNhBDAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0iZ11HLvN679AxjyrcA%2FXtPeByk0yzoiRpfmPjqJMVHwN65Wc8rjI91aVGVMT0cQlzEukQALDOzRS7Fw2rFKR5D%2FLgIzQ2XmUUFefzV6Foif%2BV4jmHlJ6uR0uFj%2BDQQ%2FnYQhJjz1VkU1CEFlueK5x%2FdPveTgxTmjSHOZsfe7WJ9nPCQsBymGWz4acOYNtlNIcbziNxbds3b1dYioyxWFyUOxZqJ7UKS0dV6ECtpbzHNaHkXQ8CbvU6oVsyguWj0hQ9PCyjFqZ%2BnXgNyDqRSOIBQXUmoz3SicyHSIyOXcajDEDUFFZDdJc1dX0WkWxibTiTC9DVU2vnjhC2DuiHEH8JfwPQHqTAphYOtUcwIW5wEur%2BnOURBShKXcpaOcAMtkurs0FrOXx6T7cz0kpFnm79TRCIpiYnjWArp07Rka9hDE4Y%2BWnA4uJN6VXPZgkq3Tc82jCODQmn5tbxLLSMJ7DapNqmAy8dOhSDtHF%2FbeUY3ef2exHYemGAlcFyBzJEjgzQZBggSYeqQCw0kzsbiI0MbIeijXtCBsy%2FlVl0khvtAYASAOAPg84KhXt5eFs3FJO0l1Q93H3mt3vLEjL9q37MBidvB3k5o%2FLis2%2BGADBtGMBMnO4pj%2Bmd5dQsXuMVszYOXyna5YwB58nAML6k1cIGOqUBYXlh9J0xb%2BIugf%2F4xGo91wiflY9lPTGJCQ%2FXjQRG%2Bq7oobE6t1FS9PMkWsz4R5iMJbJ2ucE6EOCNJLMmkOGEHcBl1aTmzGlxfZLjLCNsjpIMZIl7LSUontRDHDVZfuFJrQybh6GYgpUyVcdm1uPUGnKXqpaTB19m6rdtFDbiaKvq1ZT7uHoo9bSPxjtUeNheF16milQsrDEwj2aGkBoG4yJXpfaW&X-Amz-Signature=dbae79e0175d35e4ed91f518eacae47225eeb87506febad4b851e34ec422227e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
