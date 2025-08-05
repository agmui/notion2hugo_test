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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDWOYOLY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQClgBQ4jifEExYvW%2FS3RxCcdqq3fbtV%2FsLdWWwqCiPD4gIgG2JeFhUB5z1IuYMD%2FlHXZNctvQOpytWnIkH6Leb8H3kq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA%2Bq47aT8RlEPd7DxCrcA%2BPMkGfAPMml2ngOnZtkcfQ%2B2Xd02ZYVeViwiXOO9cyxSW3O4PvxZyNQfN9hm%2BYhF4WTHtJQMquL%2B15UPQ6kW%2FxWrTPH%2B2L9lEkae%2BUfhKjwZeFMlM%2FNjLx7gZGWl79KDklX%2BAtwE%2BP49FpLBCV2ww7waVQJCTrkqCL2WZzdpiS3mprsZy%2BLa98sl51ghGvzgu1PERypN4iBJ2%2BHpI9IoWbThgxp0xJFaxo156qNZKKXkSKthzYDyuKyREbwcjNCh6X%2BQuQ2Vw37CfiS5k32KwrTxcl4b5vl5Cp4tsT%2FoXZYOZ1DE1oUGuA3gNLSoTAkqWGZxlYWPeJK3ndukGytXAzyLBnovuNWze7N5XHwHk9AJBZs0Uuo7aZt3EUHwd9BWBs57smSYKvHDwQHBQsuTdvXZPke3KnZqeBS%2F%2BHSQZ%2B6QKzftJ6ankElUNjO0YjZtK47EfDkvf0BMid91cFFLoVMStIBMz6sQBko%2FGKteG0UIHASezpnwNy88foK6arMLCrPvdy5nFHiJM6TCZDZIvlcrYjf7324GhnGYg8n8%2BuHLRMUlySVQjbE%2BzvWvZKW2wI%2FTNl4zEOzu251eJa3Og2jtuOxB7kcyVPPWWNxrzQe%2BKLEBfeKy5yikVhVMNH0xMQGOqUBBEMXzIZpeKZCrtcz4gL4hIwj7LdgY31I%2Br74vqpM89NELW1DOgSzy6mhBEfEI7Ll2ZLkuLu1AWCQ%2Fvhe6nzhdfGOHVWyImPGE79uNCeJQbv%2BU8qfgVJ2HBPTTO6g5Fkj%2FQz%2FJqQb0LXZDfAfwl1H8gJqkWMW31u0LvOiHJI8s9JjWaQEVT3ambL%2F%2BWDwz6SdWyinF%2FY%2F5Mczx9aUAWunQ4b7kvuS&X-Amz-Signature=7827aab74b4679e109ccda0288cf6c3d1e5438f655d97cba7f75f563acea13e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
