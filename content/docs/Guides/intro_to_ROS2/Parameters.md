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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSXFCES%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhVlKKLVXZv%2FrVgHd6xkZ5O2ZcCogSNQfjcwi79FmHNwIgDK9Py%2B0%2BNSB8uW31e%2FHSYHgNundsQ%2F2%2BU6FNwzJ3sYcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA45SpbtFKCNTec%2FhyrcA9zLCxprjk05wy6%2FmMiFvW4tAqe%2FuGL4iMoUeMrJLi59jYkASLQAoXVfljJKJZsM4U6x%2BdYdz9Q14vj%2FrIhvShjB8g6L0%2BbKtr%2F1zey7nxOkq%2BASI0mLNKX%2BaS0GqR8zUiSBfQ5V1AiCL0LbBTrEl%2FV6ru5CdsgGvXgrBhSIgFgLMiP6VwBLH4sUKq92MQkEZMl1ySHrYfRzN%2BnNv8xkV1RSD7By5XSVQWy2dXUNFOWVfSM1AnEUWIcBRnyK35EZ6tazQ%2Fhs3q6dJlNtjFAsu9tvzZ4mAZoMNUfnTUaJ21uIanPG0RDMcRljhHDD%2BvOATZ2iY629qRT8OPpvy9pUHC0ManRUa%2FajWD%2BtXlwaJNyo18a0Q8pu9AQxNLr5Ct7%2BGb08%2FmwzY5%2BLNAGUL7ldROGI49VLxq4ibasqay6KyJniHoQauyBBbGXGTg8XdhBlzcxDKEM0%2FRxMFcRwpbuJr8FP3XNpW2oDfgPXP7F%2FrM7668YA1atwQc%2B%2B1BRsp%2B9F57D0Mprl%2BS%2FjPHdQB65jp3e6d73B7J0JySsd8eFRX3WYGa5sj8GJNfDEs8A2ZxS9tiTb6XTcs6Gdkt69Pgjm75ZNHwaTsKoiNQqKDTXr1T28YPWRMfWkBmkKkq8nMPmKs78GOqUBb1qzKYHs%2FrvUQyP821UgxKwpCOqin2YZ8z0KoLyfH8KDCCaWKdf%2B2BE7jO3uT9Tjn0wNQeG%2BhDWD%2Bli2i%2FV8rfrQ0mmhB6%2BwdYO%2BwzbWgM6F0ctQf9qGEbDzplfaClod%2FCNNsQt%2BdRLEcqddGqTfxDBNsjGjeA2FEGMiOF65xAeRS8NA3VQm4LgRTfu5IagI8hVIJ0CwacAEoZspdkrwoUl8i84r&X-Amz-Signature=ae5b0c807e3f393161efd6c41c61b4ac179837d0a0fa0632ee7f4ea0e930bee1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
