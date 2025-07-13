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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRQZQNE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyrr40wRUD4%2BNjS2YUgKMOuoWdAhEIA%2FxVtv%2BtKUs6IAiBD7mtATite9JBmEO0%2FK7MYzboZWJspwfvae7rqNVrmQCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMj0OtcDbDVmAsfM6gKtwDXI5skXHvN8IiDGflGNcRmX5t9D5yWefpRJPB5TVmu3A6Mv0lRy5mz0OvZhc6mGIEvKwQjQAI8rHfiNcY7KQnl5TEPGheooLFGFDk1XkjmdPNegAD0r1Kg533qf%2F20%2FmVYQcuZexkgi1MrSZKiAw5AlE9zG8pUc433VPxfPhjA9HoJIueOaDfKmDCfhCmysx3f9SFlTNWmjdA1fSaqwuqnNwkeb7KkKGV1LDLDIDmPkszhVhgelHLBS0fqS70VQUNoqjAWp6ex0E%2BnmfLiKApwu%2Bo2BBn3K24sa%2B2Yn1%2F0Wl53%2FJqjkf6oOYILtev5OC3txwyzrpH9TXPmD9nIpX5Gjrq7d0t1Wm9QTqroWkNAcnhPXHPiLA%2FScjvHid4yvU6vNdfocDix%2BI9HCJ1n8pH9J7i%2BeHEaq15MYmmag%2BzpePgrmjOUeiPP5gRoAMIvY5JVG6p9JqhGs8Hkg%2FAF%2Bb0w2Bz4Q2ENguBKlqRZGjDMGOG4y3Fa0YnJJwgQvaQpMY%2FjE54GwElrgzrAAxi0k7d3A6XP0CibL14o%2FQcoEskA3eViXy4rfi5tR3JqJVudCFA0mNpWFeB%2BP3DD3GWOvfppJ3bPhTDpbETt4HIm3YEnJfB59xYepTrp7Ah0Ecw18DOwwY6pgHBM0Z1jqgvEIYB2cuHOhAhz4epdTijABgs2ITae0Mi6Ejs4jnCALf91uVqaxE9FgJzxP2rFS5IM1bMArG2L2qs1qh0liycVVjNERHCOpw6bICsEK5X4GL3bK5BR4eBpzlwRQWsqubYoUJVB5k65R041JM9LV%2B8WsVBH1SUURBgj6d%2FFdUkiYOWQQP1MYUqihh0%2BLYkR1HUbQJyqiK0S4zqcE5%2FPWpQ&X-Amz-Signature=e63394e0545e1dc229ebb438f6f24b36d773e2578efc0e8f7ef6167e0875b919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
