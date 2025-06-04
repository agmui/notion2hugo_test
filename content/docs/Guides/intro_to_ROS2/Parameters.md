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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EQXJCAW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDKTk02SMQc03AJAsqQ67UpDF1hwM8JDcdHW7bZ%2FDFB6AiBH2b7F9MfQfwrAmuBTHGEQAziSbePIoZVBdTrvHzwz1ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM%2Fb2q7DHyD%2BzJDhVtKtwDVVb0L4%2BkaazOsSivlpPPietG7NLJ9fOGSqgZZLrgHRHP8alr497ia66htHkEbezjkUrdRrGCOhH9HC9Ix7n1ZSesOZhCsq%2FXrreEvebvnwbYBBLYky1oANAgofJIHuvJWmZEFR2NzlSj%2Beiz5ZIriWObls11PrF3ZIGrcPuEzPrdwBzV%2FEZ8K5qGjDOyJBSvh9YJiTxCvk6rgrgQFBThSmWUHS2crHkPtL3mOR3kKT%2FEWd5Yt173ehFMrd4XzGaKgwpvRgxvGdaI9c5FcXfPWVgo30WUmlPKWTRfCtSUv0KSgnEwfk5nqIg0E4SPpxyQWdY%2BtQhtc8lUVN79wzQkkEmaLJLsRc4AzRMjPoNrq0qtxBU%2Bcp0b%2BWICODWgKh%2BfFkdhdZ3jECRLJzdfuVVkisYolvt0rcRw8ifv31zhv9c%2BE%2FGMk1oI1Kqq4R2PxVLKT%2FEymXeykHmPaoVQEQxiMlhHitDL7Or%2BhG3FeAy19TioenU%2BheK391bWdGgk4u%2FFQTXL2PEVk293mMW46I0lQvO7LbQzdzf38sgSs4zvgjuGV6uxJeCo9Jyawvh4wqHcz%2BMOzK69%2FOCBnQxUp%2FB0eR63SSo5oZuptjYFfebPfsHGDp3ueIHoZZdr0UQwxOb%2FwQY6pgHc4SGmOg7xD9YnqTUjWjbD7w82sosf9CxL1M8BLAOzgtLQHpmuoZ8WeNzRu1Ahwtd9rxUk6MQngE7V9SrFHxg%2B%2F200HoMQhAYXz520XLs4sFNBIDCs4uIWMPp%2BY6xpbmJmXfbXpObsO2GAo0beUfFXWYZD%2BIKCAKoAxT4HhYIuAkh5hsxRMcqtOaW7vdHYKO%2BZZOnzbQFb5gMSP4lWR41Ddi6z43Jz&X-Amz-Signature=9152a2faf3eaf4355ab2670014cd05dff028caa95cb14d0be961248b4dfb4b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
