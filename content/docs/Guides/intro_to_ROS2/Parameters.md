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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4FFCM5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzTNfgl4R9DYNaLknPzGfhbGqPVv5fPpzaq3g1T0UprwIgLYpg82oQTTf0qmprmvcrQZaJBtRXlBhJeC8Ojht0cDoq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNG%2BZYl7%2FLejHlDcVyrcA2G%2Fh6oQ7jaKxn%2BFqvIAFfUwN0ivmcXoQRVwN1JwL8D6UylnGnLQRD2lkxiQS5FMDewnh4UErBBTOzWuryVnpxGKGXfPCzGNU3KEodXZDk%2BuNXuZpVx849ZqI5qVfK7Ektwf9Qnof6MaICAs4gYZm4%2FiFpZAOCHB%2Bf86nkq1AfsomIxhO1sxBgUuojz8RMhOj4ChqGfDzZxcZrDTCI6AiOh3sjdNeXjYx9yDjjvqv2bNGdGpPCNLRKjocvVRuWCNhklKoOeHKtmbk8xlBwHl8kyrrPykiJzBYU1DqtDpjUYVgFJC61HoY1v1cgIz5T2sGL0j3%2BJkpUslHlD8yQZ8MAgVtQWNDbIknf6iNsuiO%2FCo3sP%2FGASu5pfzLm%2Faf4arwybcycL9UmAH0nuYRY4hZpWgnaXAxjL3FctIN5jP63duqUGt8pahYpK3TIgAGQcwvkpYOdYoqq9EsEzNnHE8KGxw%2BYPwLe41oKkyXnu9wbUQzbxGyoqmFEFDJVf2oHiKO8O541nW%2F9HFjGeC6b%2Fzb5rM32BEzkWeEHMMjpHdrHwW3H7WYq1AG2Ya0asyuC4HWsNZ5LA3bkCQsFKHMd7aJgpRpiWtnFSPIOif07YKNxoKE6W9twV1A12VH1D%2FMK%2FOrsAGOqUB3HeJtJcCCi7h7OoQWJxq0WM67wpx2CRDhIfgZS7HtdMPzVyuCXciBj1aHk1gRF%2BAMbZofLC2P%2FRcC%2BDogb6tf28dPg6C0MfMRsxLQYO%2B1%2FJGgiv0FVRg9Wo75CaWvQTF26H2ksst0Hxer6nMpwcS5qtXo7paGQDuNw%2FOcoc%2BYubm3U7bqCrfLzmtogx4q%2FpF%2BCKppGcVINnvRgi1rLlgtAX2jlav&X-Amz-Signature=1bb7a7a411e9a5982016f186d3529b07ca92164fd27338aef3cba02e99baf848&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
