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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFMKT6LC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCICFelnAWpeAYXTtYqDSzqp0V38Q4NMkmmiLXa3ZQsYnjAiEAgZL%2BnADjNpde49cGSam7XctuZ8E%2BiRKp0xJVaC%2Bzoo4qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIop4QKCSYJ7nkboYSrcA7K4oNWttJ47lS0NIaQQtd8w2hNfakZYPhwgziE8IzpgRHfZjpqzEXwGrQy5UYztJkjE0LlqqQFn2TOp1%2FbrRmBWRWZo5X4aNK%2BRCRfflGQCuAXwbKQ1TNjAcDzQBPr2gD20WsrMEVl%2F6kVjAjKmByTE6odFqWLgbKqgQWRNM%2B2weyd50h1gCD%2FeXlHt0pL3qoU4ca6jilJcNgoYYp09akrtmqK6ovfvrFpk%2FpNrTQvtW4vrU4KKsYtwSwvzlQrccIMxDHzghX434sGscQGMSUI4gvO%2BA%2Fuczcg6PGRKwDmwHdaVHDkUxkGB8yckrD4nG9N%2FixvVDtkCrn8A120gLUXrm4esOCyiwnacikTWrNudKzcg8N9pUDEAQ6LbNTL%2B6G3zjWQmhDo%2B8kevH9cAuMdC6mYO4vq7P5KgFvDY7ezNNlju86VlH035sItLoKWodR0O1tBgHxiQJrL9%2BRLxC4pLT5VaVLsb8aQmMZMlIZLz8pUFp1DMROXp5iQdKVydyaL2zibWZGaSbIz2%2F%2BZYrb0QiXdGbbBk6G8Bzk2pJD2dyIPJZJ0xcIHRw0Hae36xWGHxhnLBAOu9drHBfS7dXbXzyVK%2BJize71MEjgxIa1x8Wl2xj%2BdvLkOYSpDlMNqFib4GOqUBXb6pFkId8TXWanvU70fWsZxTQshibUMlMwwFkyAAoaI%2BrjVG7r4aEhzywIR0UJUm15dqBDQhpMOAPsJrHID1EFI5vrwK6kMZuMV4xI1VDFhxZ76O5zF9iHwpey4p%2BcbO2tdYlZnq2lEO31gQcx9Gvtj%2FWE75HFDjwv2AG0faR%2FIaeK3ZOyc7zJksejk7A7m0UlKxH0qhQeloiiycuWTS0VB9KEF5&X-Amz-Signature=e6a91b55e0cc8d6779f06b032529dba5e7c310f4dd688c17eed7e84c544457d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
