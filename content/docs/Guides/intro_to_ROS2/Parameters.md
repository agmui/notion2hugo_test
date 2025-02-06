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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNIUCM7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHDBv0V3LMiERwDk4uYEwjmqwU80MzJxUsjvPgawV6rhAiBFWJoZWlwJuQOLDHKZpFqfVxJg%2BCcgC8XSktrUfRbvNir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMHxMrmYrfekY6MrinKtwDjLbWIrXoubVjMw42MdR%2B5HwbnC7AnWtBW%2BZtVJpCBpD4El6wncyirjmfTuRu%2BjlzgdboVWXT9prmBcJin8Uw%2Fxmh9BmfrO2kkHENMfMh9KycMpkGEoCPwEpSOtwx6Bnvbu53WcxIFKyF3m7EMxiuOZPByUsU6uDJfDXSuiDmzBJ3VaAqbGVQK04Z3neNwczDz2SUsh97g1LSxHsYRa3KV6CsnuhzD5qIRSTiCV2FaEAElV93g9u4c3wz%2BG8xx%2Fc1Z6S1XyqNlvzb7cjbQd1nsMIvAYKQRco1AgqEd4SMCNj%2Bgd1qQxr6KWnf35WHSy5HSWITwV22sOPSnLKyfM9iGFPrYkNWMq4uIqDDAADqZfCw6aR67cwWIHExA1SRMAOFywkfKqwsJs2sJdaGX%2B345BHd5VMzKARHrpj7s7IQ6NwqBWcDJ69vREC62I9DUBLEl7XNexLrbDNr%2B%2Fch3RuUOvrBjTd4BIILWuLLEeSWN8IdpkmbUgDVTmLmkFQ9pG5RSc8iji%2FqIQCshH%2BKIfUhZN9qpaMpx0717xZJAZRlFY8%2FvgHpm9Mado6vR43IMDxQt31zUqeWE1BNHKIljWJY6rHCAMRVagSIxiGfN29J%2FtxwUfp3pCXgyafA2CUwrp2TvQY6pgF%2B8tMtJFg06gRBovxOyiPbZjPtApmsSjcU7aMF8hZDQ6nyLTjBAZfBPB5BpzdTUaLMN7EpGClwDgwyRmvGxG2otUl4RkA1ia4ZmMQHxTYm1jPiBXnS%2Bi%2BFTdrE3%2FT9wPiiOHST%2BRLDb2z9rdv7C5IL1Sep0BHLSZiw7zwqQLRpvrieyX9K9m0A4zrEFu34rLaTrr7Qhm22pM%2F3pHLvpjj%2FCXKgpzxh&X-Amz-Signature=cbc9f82a08a082ebcc6bcdd466dfa06ce0e242531fb265658b951be91637d410&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
