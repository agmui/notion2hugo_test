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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG6RYXVT%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIF%2FZ7NPpVyFdiqzH4chyEl0TgszGnAFaNCaIYvbv1I8CAiEAmz%2BdMzhqL24OdmOwxWz23wMcMdaM9%2BQldz3y%2BBYHLQUqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfuhnQNB2Ac2%2FThbircA1R7ADW9cD83S4ILk4%2FY6D6UcjluZqgZyQliqPBbjSoEimpFEGkRurynzj8w7hmG%2FDI5R%2Fe%2FErz9lqWFNfaA6dXJr6OEjz3s0h89ojlDq7%2F7yFOE%2BmjJc%2FZTY8cWr9oG3J%2FPeo05gh%2FJyyE8CRHHZtDazCJQ%2F2FAqtosMpNTH3TMWiZMY7yYYqKQx4wPq3utLmm3JYifRErWolYwrFOpe3Y%2FQ6t1HPW6NBX%2Fy4Ie%2FMKZRT%2BbMhlAAT9cBNXLoVgxZUD1dt67we4RerWE95JRGz2cfoAshEhVuV9v7u6y3hhtDqFeuooWlMVzCDj1dgeNuObIqq3q2pmrK%2Bqn%2F4pkJFuWc%2B6v5M%2BgveCLiqnldbw0SwIuvAxlBCayhjs7Wb%2Fzb1M1tLKslE6Swwl5Y%2BqKByedvWqOLHBh3OnsxTXfM3HqGB%2FVoDYeV%2FBp0Du4t3NhyZ11uUtRvNxJg029bzkgeIT6nJfsXpXozWypSmmkuDjLKrhbn%2BxzIrualzhqi9G8Y8Vmjjud5%2FZA%2Bgb85xAyR6F2OopMd2uZ9thMu%2BQtZnIRQ1MQ8ADoC9rasDvV%2FT2oQClgS4aci4p0muX4ln%2B3kKG0VVacS6as6PyArvzRayrkEarBLMwDwC8t%2FTiqMPOo0sAGOqUBvmpqxYLK5YCTZPLcAew5MyAhM6Mc1YV5QpPvVP7sihOX%2FXy05Q4Kp237RbUGq4C73nvV1d45JRKc7zgKVl7wKDNixRkfsfsU3QKU5RKNxBe9bfErPmAxVKz%2BeCL5gWgH8%2Fhg8coYifofNYl5zwaRVATDQxwbbfcLq0mXb9XHTkc9gjLHCvuZAESYxk98la2TQU6ugjKLgrfiEQjhx4q6vUXw8ckC&X-Amz-Signature=7983bd3a4132b2fde56d0b272a3cedb42bab4e7e7e067645fe930f3f2adf933a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
