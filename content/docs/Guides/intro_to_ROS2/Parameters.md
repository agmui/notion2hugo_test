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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NXS35TK%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCShC8KmREveEKYYMkw9%2F%2BlJn0Qk88QBf9b1nqAUlfZWwIhAPJpXYkxOFY9o3yYR1xYQzGcIqrSBA5yAU58Adq4pHZlKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0yF8JDSOg4JdV0R0q3APIPLPExRE3DjKW%2FwWsl3Tyd8lgObweZXTeuf6wbvDB5u3c4Cc6TMO0nN3gAQe07N70IUWJRGKy6w4NkEbjYfFM7uQd0p4u74zM5Y0K8uYiFsvmX1n0CWcSn7AMnjqtCLL%2F0obX3t3NNDEYMHlWeNUBhS8gs5FTEhmpQjMrk8yyu3ZWLDB0YxM4m8s%2B0US2prDMaWiZRxzg3cw%2B2u03%2F3xsgEwCXhBmAJcPA7FydKW9Ll3FdfhsFvsFhVwVWL7Xs78yI26rJwbLzZAqm6Imj6crTkbI6J3fdNd%2F9GqEGw191mK%2BeLNVZatkCem5ZvYC%2FEI99AJg%2FaHOxFDmZU2j3iCaJI1PQSpTBU1AOoSCdzIVib6MLxWVd0AisO6mJoPcBTw3HLsObgmiooEjDqlLfOgsFKywW2rqDwjE6lq%2B215%2BvD3lVDy5tEwJKB1ZpQLLjR97QjA5i5NHM53qKrb927r5HmQtE6St8gcefx1nXlOaeAiAr%2BkVLg9dr63WNlneLMQL%2F%2FQ%2FmO%2Fj61H7QC4mHQjWs5Z6MhYxAcNmnilktd1skfBHGSqcpOOdzbxwN8wjulwVTgrLzM%2FMO2T%2FAzVFOl8s8tI8P7f9X%2FMaOnaaO4fAFvTcBCQAjM1BvN7q6DC31pvCBjqkAWkf49qWKgRE9kC%2BZvLq7aGqA9CRJyyBQid%2FeyzIMxDYQ5UkvU7L6adfnBwKABuO%2BIfTYXET4CavNmyeJqW3P6HQkAO3c3qoigw6DFMq2OEV%2F5BUNCKw9Jw4BKUIF4ChaMadAMk4xCXE52sHpeDgH%2BikeHMjhv70yKPaPJZ9wT%2FvzyjdGZpX%2FhIGIIGYW06Z8hfkC4Pk97uZKmA2LKcqrBjzsfS1&X-Amz-Signature=90cb4315dfa08f636d6b265ce7d80ca6ca27c260ac3e05277940e1bf9b1772b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
