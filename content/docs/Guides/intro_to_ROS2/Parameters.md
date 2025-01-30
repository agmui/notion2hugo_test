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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSYFOPM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl3uL7NKJXwGgx%2BYlPTC6H6Cl0BQAJ6mexVbKeJt7GlQIgA8aoUlGcpFz81L1xgP4gwRuWQZmG2ojdkFAg1OJoSKQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWvNlpTadEV0Lp4myrcA0t%2BhJyCs%2BAh4btAMnV4oAyZrVilQbSqKa%2F%2FfI60siIsESyAvMvjv%2FsEY9Gua%2FzP41N4qkbdZY0Ie%2BP3yQB%2B9yOaVyYvqzUCiJ3%2B3hFenJjzq0%2BnI2uR2QzhfsGBqxBMJ1fsvH6n3Ja4wLPKpkhgInSEUKdoNWhAbddmghngiDPy6jaedFQSUPA7SmrJwGgk3KH%2FjBWm8cI5tsOU2s8U8VTU07X82EIbsgbrdiWDI226dSxrKnS4bL63ZhjcZVYAxoLU3D9S9AfzF371grd%2FgHmnz2uGZ4WUhGMoD0kha8s79feTWdsY4NOenEojIYt9rFFH4q9e%2BuDdIbyOvv%2FFg7Z8MkiC4XfgdJv046J7UsrJlnw%2BcvCpLE24wrsqwr7CjmGhr%2Bu1wkQFFEdHQsG34ycPSrKUkguzfHXdSonHP1JrfmMdZWhQWgULL47vMFLZHVYuXilIaST%2BqS5h%2B832AL15AmCpOTDmbFZoN7E53hpQjI8qV357cPhQ%2Fk82I2jRoxf3LSQD9VcJQulfmr2ITyveGKj%2Bu5P4lVWTKeKwKJBdhz79%2BKh%2BRotz4yzyS9oHfBnsr5tnffuK50rHDhOfR5jMAqGXVlxiaME6XZTE3lCDVQndHvPjICU8agL4MIek7LwGOqUBTbXJGVvf5JFqHZTpDb%2F0aoHaQ4kd%2BfvjYqm27IrhOwlSG3pNN77Y7Sv9WGElGd3qhM4kbIQKrVFvJlkO53lPuOBBdZrG5nEnfeAjY4%2BIEndk5C53afFRLTxa0cBHFxOqV5rtc8tgtU2WMb4GRv76Gqac4Qfuo%2FWFm86V0aW1r2FVboZEKK7UdTmWYpC6dcbUc%2Fku7nY4QwrKsgGFFeXrdj1K9BMv&X-Amz-Signature=0e7a1025db7abb129c469d15be578976b167b5add1455f7cfa081e00d11be2a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
