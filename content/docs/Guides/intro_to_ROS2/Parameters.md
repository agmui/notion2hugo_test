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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVPA6UE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGga6xlSwmh1DQbHgjEEXruGZ9FtzciObFIOpFdQrN1AAiB1sd81aStjU04FAyr9TY3P2veGs9tNZZrqvM%2FJwA4BVSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMF6sYxIIS5Fn7NPawKtwDI5fQXyGtxWl%2FyjjmIVepuohovyQXszXvJ2Idm4X880g1souqwNJ%2BXm%2BpWPbOlet%2Bs2%2FFx7H3MfeudBomZkIOnUcRlti07DKfqJSIi%2Fr1JPRRkU5kLvkDoz4XgubEOAUoBxuKG3L11UGK1%2BMZfsYwl2r6DfvxJo65LESVmHKz3qcpIU90tBk2o%2F5%2FJ6oIjxg2XqHSROD6TxxjrEyI9HTWrWOX%2FLGJCf9auElJfiT2SXTDoYwZGcAZlIdEwPcP9N70SFGyp2LfnHMJ2dQnvMtv5RmjT9mreS1JUAr0P5kvq3pgfPHXgOKJbj6RKIaIAjeje0I2I3dMoHMIClMH1l5aZbD23c4DXiLN%2BRRJG7GJ4bIwED8c0khbJ9IOBcCWNb7zsHAUthMlZbX67taV0nna5mtoscVQ0%2BAOx0CogATKT6pFv4PUqQ8drodsw3PMh8Pk7Ww42bmbAmT7f1%2FjWRNaBBhfOEYaDIL1kW9e1DDsYZU9IdznyWzfX%2BatgR9POHxuyM8ClLrBwkYuZ%2BYKgZPcJeuD4%2BvSgWWYGC9Akev7hZLU7yYVfp6QIm%2F9UjkqcvemfPg%2BdOkPJ4hPN35TUSjKb%2Bk5IgY%2FvldaEEUQm3sWz%2FPtb7GhaB3Ud82qde4wsICBwgY6pgH7NbN5Pj9lQn241LRDGpMye51kuN3wvN6PZF1TPmoY7g17ThyCEjc2%2BmLoGK5T9LO%2BBrkaMjHbo7FmxNW4ICwHpjfQvV43gJfWH3tUMS7q7j3QVpFzicnSlfH0qWavTHgiehcmnXdOP20QiolDj%2BtJLsmGASbNwZPSzG6I7VPaTSptPNQEgq0c7Kp3HOiGJtaEeuyDIWrA45yMtNCivGmnh4GSq42J&X-Amz-Signature=5acb71212cdb25d3b68a3313b9f8a55ea52c7e7f1b52029d81dd51885c63de57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
