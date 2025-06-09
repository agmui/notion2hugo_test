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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKF7KKX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBou7onV4uOwl0d43X%2BP4Ly4DRLE12cAvF3YCKsc9L%2BQAiEAsJQkkrIwcoafKRFL0IRI8Y3SVfFEDzz%2Bg%2Bmutv9oy28qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsoQNyhqRoPK6U6%2FircAz7IdkOJZyrxkWUI7EdNIrJaLoLA7q%2Bo1cmajypKHw6Pnkg8%2B%2BnwIXjKVPm%2BJzOAQGQdulsPdSmDESGvhOI8ffeI4i49e6myhoSuPJevqx9sk3EKPbDnjvbGj%2BGyoZ8pQ037hbv5rIi%2B58%2FO6Y7YveuWvX%2F5KpUfSjChy4SUmTue3Vk1JDAHAw3ekid4zA8xZ8P6tOFq3z3Gbz1WqUFFNQnApEMsUq6xBtDVheBIFRF8Fy1Q46q6mjsoDjXAe9Er9H%2FFw3Takz%2B2MAv0ZLmJDJcBIrbgiy%2FPg9kJ2R5d7u9DhsP%2F90PyBCnVX%2FincWwSedSrI5AyeQ8QYNNZHU480GtH2dNeyHIaOosuZ%2BuBwSjdIM40xc8RqG%2B79cKgna9nKkJZfMdP2R1GRa%2FweK5qHjJ8xfF3trySzPw1ySimTq5SJNgI1T3abPM0D8oVQQ%2FLIAnrdt75l%2Bsv2q98EeEJ4y9WYJB1B%2FmUq85sIgS%2F6t8Tt8dK7VH4lP35P%2FVdZ5%2FFEmK3P0TahxoY4y2cKy2smBroWtbGkhjWVjAdZFgvbugPXwkRQ5kK7jg89EtC%2FZ1VA1LmCFoN%2BEmdQPTSfGBInRiRuQscp%2FiDWSGsXecbqsD5e0pVLsfkCGKdx820MIyVncIGOqUBuzkVucDF7uyCbmtc1OHp2q7QLAvX%2Bx7FRd%2BTZTems6zozV4pAr8sUh9WPvfA6Zq03uztc9MAMTNHakXH%2Bxo4GKW3MlMN7k2FKydu6op97YhhNOm%2F2AZH98%2Fdj%2BALQO35g%2B7kMi0bce%2FURVfp3M2dUA9%2F17hr%2FUDXtxGqTqFcownmuFvk2lFbAy6DtvgPclfxmkq9Z1wNanQqOi0R1%2F%2F7VaPPO%2B%2Bs&X-Amz-Signature=243fa174b49c7388f30c60b4d7e2ae1f6e73fa56e7b1c3b9317404540dbe21ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
