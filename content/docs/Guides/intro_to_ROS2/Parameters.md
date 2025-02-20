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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJF5CDG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSEBOxANttqyYYLhd%2FCHvCnO90Fsk78%2BcmTbdKS1Tv9AIgcGkeB30E6alWFuuzq%2BugOENYfHhggdxXCtaF61%2FxeU8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFafVxfGZhOUUpiSySrcA3hVmSec%2BQDzoTWiohffHS2Lw1K81i3TpkIKhkJUQKAgqnR6jM5XWYZsVjLcqJF12qezGfdOyy2bW0VgF3A3LwMg3OD8qPZaT00MZyKGXXb2FWiFXV5EoeqnoR%2FlJJUVev0ju9iQKVqWvfxB6O02dtqo76SP1OdpF%2FSLHlyfpL53q7rLFkuzVBBi5wBErCWcRdXOwYnB0S5yJwf5crnINnz4wJwm3G9NKVYq6nR%2B8hK7kpOxVAecYDiSRlkoxBdXT%2FrQV7z4Yqbr8f%2FeCnqkejqYFaqgASLqQ3b%2BfRedA0fkaCPYUxpBNeEwG5kl6HfAwI51Y7h4zdTYsTm3OIFhWdy04jf2GqWWpLKY0pQgdbQCMHGnkIfDul9bqNwSiPlKs53jmRVuDPWolBlyGUhXN42G8pFymEkc9vZo%2B%2F7EcFQHopKD6Bbzow57KjR0v%2FPI1ALmiBKx%2FAye1F0toN0QAnZYrYpD9lWPA6%2F54JTPSRIUvYuDvGZXWru0FWa%2FbsrGKEZ5SzDSJhxPvdmK42FLTQMaixKg8uxAQM%2FebZt%2BBUwAWA9Gz4FxxaMjstBalbrciN1V6flDZpUnwP4E2jGrJ6q7HUcP7PSJW%2FhD9QTDwQvAK5AGMNV0MKmhqEdhMNCd270GOqUB2Z45qLoujdqtonR0EQhogd6%2BNh21Omr2m8VHPtlefqck8NG8ZWXnteyjmqAWrc9lhN9DTAR4reTwF7T4svFEN1Fd1i9llQOga73FUggA40pHaLmLBBYJ46YR8bzklMrTUE%2BDGlcpP63D%2BtYjgYk77aYjedgOu3ZDc8q9plyrJ8s%2Bsd3%2FSQJtFYzvJO1X42g5MHh1HhdU%2FLBUxLQVgXIOfUkhgnI7&X-Amz-Signature=6a255b271bfde00e48dc1c3c5d5de2f62dbca6dedb6191c39e32019d44cdac97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
