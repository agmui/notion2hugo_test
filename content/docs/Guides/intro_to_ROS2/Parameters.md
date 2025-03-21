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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2MMXOH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCljyrfg6ggXhcxFksAQUvx1JROtmXbMcjZbUegp10LIQIhAI4EhSHIjVPUpq3%2BCDUo%2BoAbhpvhtL%2BoPf4CMNnpWK%2BQKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHLpIyywPO2%2BjxwOUq3APaQJQbPJ%2BFFIL8EYjWxihbSqeR37Jz%2F4nHNln41mZVVzUlTsKHElsT8G%2BzbEjRMEKyqkhOrvOMu%2FpbGPde5HTapf%2BC3tqnXUKev7%2Bp5K5MdUF8jNAuHWqVlQg2TotHEZTWY6NQXC%2Fpx%2Bt0gCnRWG4QaJS4OLftXlNIhyu4hnXr52qHjbhGWIrwwFf2N8o%2BQQf71UbzqeGFrystMFWjPrSyfwnBrqGrhGgKruNX861K8UfGAvPKJSR7xM%2FwfbcONF8i2yPIx1Jg9IEKzAaAlRFZEIrS%2BCqNbsioPzBWgX%2BpLGWOneANCaEDJkHEnhuB8KS%2FGGjFI9WJm3uEvI31ss%2Ff%2FBFeGpaLoCQ27dDwjevaVvGbBK%2Bp65Gj%2FJV0rJbomTdNTJta1%2F%2BYAwhu9vz%2BQhEvixKjIe665yeb9N7DYwEkvLAcqQcyNx2Kjcu0AvNHxKlZKx0FZN5nYcZf%2FujqsqZUbj5Hb9%2BeTbRSL3gZnq4GSZcVKVcBDKnZitc7RepDsJmfowuScVrn5zIKElFlukEb8a3JiXUw0%2Bw42aQ43B1Ce%2BUNGxlIDmP6jx%2FJymkavB84L%2Fw%2BwHMC5tiy0iqM9FReJ3GQmr9phX%2FrhTxLOyO1CRaSD%2F8FI7MVbz5nFzDn1%2FS%2BBjqkAVImYsS%2BBLLnry6Pjtmd6HiW8XzYmEMdY1GMfFaJ9e7y58GuI1oYVQKeNYIUogLGUH3Dhq9%2FicyCO%2Beip4hOqCcDQIL2EFOr1n9%2BS3HmzC8aTsYrb02oXdGhFrS%2BAbmMaA2Qh0K%2B%2Ftr%2Fcmv%2FzuWZ1SMx3NUfgEq6uGqkqAeeWGJr8mg%2F527QOlmhhAxN%2BDKs7JFSlPHdB%2B7hwawwFcEf7VCixKjB&X-Amz-Signature=58deb1701361be0ce3da6a9649c41f643da5d67022bab1d25df7eb4afd40e0de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
