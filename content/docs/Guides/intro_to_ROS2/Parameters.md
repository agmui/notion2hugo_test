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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YRHT2T3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDCY%2BM9W8xnIpgyyxSdHiamdyMKec9KpEhMeB7N%2Bx7tgwIhAMBFSKxVpi2pPTqMHhzVuQEgVcfnLci2cEHVYN3gWOE%2FKv8DCE4QABoMNjM3NDIzMTgzODA1IgyuneucM38Qixqy71Eq3AO5uLL%2BLYP7p3iqdwcGpQWhtdVYZ9DjO6eLhFttZqdpSwZEuzB6YkCRO98TdXEf3vKdewwO25oXjrtLHlJWHUlJ8RRKWQM%2FQlXlSpc%2FRH6VreEzIKbGKzGXKmwMnbn26txVyt2%2BXSBvspDKrqc%2BXlUOshiYbmDPDwPEyEqG8zFUlwB%2BoZWhaLiMS2bksK9OqH8YGZ15o8nYXMWGOukC2HuMptP%2BjC4P18wEoM8S8ktnaiDh0%2BLeuHYiAmfgcXw712w6l%2BtBbyQm2IofbPSKmyIZTJf0dQ8siBN7tisNbP%2BpIMzmqgf1jz3R1tEMB1UXMUoF%2BEtavfyOpqZ4xF8Fw4eJWkyXJuIQBYiG6kCgzasyY%2FskAOr7kr%2BroLGHfV6%2FFb6kAE7RRqDd8tk673%2BSFp7yt85UTiJYY99pl2DHQYPdrChhz%2BGu9X1OCf89AEM%2FKe5gasWkPSox%2BuRVATm0RZeK4DiiHMELtASHpvCcwtvGaFQhKRVXlLelitbYWlzQLXCOy%2Bmh02pZ%2FG1aN1Nc0lip6IOVF7%2BC1DUq3gmNYZULbJIQtBgq%2BmQmx6JSnKz9fQz%2FAElA6PuotUeClpa8nV%2FjPJ%2FDrexseGwRmK95vrlIQBNe5xpYBhc%2FhRreADCo0Y%2FEBjqkAS66ow3btk%2BimOSbwx3jbJaxTv9U0my0foKaxXXB9YkIOLPbALyB2T2QlYU4R0LkU4pny%2BLdpdbXHkrRrhn1G1PMMpssY4VWlPVJ%2FYVQFyigAdwGFFSzXSIXKKVwxUWKb5TpjK3nvEZmqNXhxcuSNrlakufJrvTN9HUbwSANXB0IKIZxG5C%2BCzZEIk1H%2F3nMBBBUboaBqxWoLZ%2BWwyn3nzdLUXN3&X-Amz-Signature=82ac9d6b7a86b2d0d4d385e8b9dcd30380791b74165315e1ceeffa5055f259ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
