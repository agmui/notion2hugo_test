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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DTL7ZV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCSx2TI8UHSNQaeKilu0Soj6QL%2FoE%2BY6Idzi6xnQG4UnAIgMna0%2FXoDSLW9J4v%2FvK9LoLd5meHBDeiY4gRpbp%2FAxWoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItG1bUA%2ByrN%2FecScyrcA2A8yTqLfZPVWVHLjTbjFY1umDIwXjC7bum1Wxia9n25DzokQgQKK%2BlgI42KS84n3n7C4EEtIgBuDMoWJia6ah6VK9%2Ff8FpXGxZpTFd59l2LYkGXMXorAyMU0CoqDG7QqefcLf7Dv8n6AnkYBmXKgfm62GMgINpRley9RHYqSIb2pdbUxPSyFyLzqeYpusUoF%2B7hCz3N5er3P9blhlg9sZsd7wLXVe%2FxM7dE96DoEQ8987uQQIXTaxf1gpVDUathOlRRB7UBOfu0S2Nbg8EDH40fuC8OuDFRnuH5yuGUabVskyy5GRxmamJ7t5uQQPA1ZsDT08wColuDth6ST0c3I7UMQMwx5HQrZjVZw%2F67A%2Faa6fDtBL0jh5Zmn3Ag7TgS2h92MPayfmndGftsFntuopYHlJOUcYzxsgb2eD03Wi2Hu0JZxPGn2EK8f%2FMtzp1eI85Ubr1qHFQNgw6jfLIPqEj1KulEGRkAxkUKl2XwGFIoIqDQi5%2Ffee%2FVPIBJTDAkzJpZZ2JRNpgtVJ%2BIqAC29V2oLxS6%2BzAVY6nhfRx%2FH%2F5dMzdP2LSLyVKvpR2zqMLa6h7mWCpIYYrz9jC6c%2F3%2BiZsvi9P%2F395iP7kzkN3qiG%2BY8T9u%2FG3mnqdp5Sc0MNvCv8EGOqUBTM%2F30KwJSYmveGrfkgboCDfN7smGz6YmORUbtKKX80wPsNBc0ctN5OiAtUH%2Ba6ZC7dHSVobSKv0iIxE0itpAWfsSIX8e5mL4bmpfk6ofX4amDgNBxQh%2BKlXxfC96XjUtOyvoFq%2FW0Ec4yJD%2FIVg2vhVzctE%2BCKSl%2BFivpi0aFBj7muBNnlTYMUWps8F7ZTcuR3TTLUjuZypWE2680fRKa2ujV0lj&X-Amz-Signature=194fffe0075c981399a87cdc5cc5e2bf19a2cf597afecbb23e167c15c1122c86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
