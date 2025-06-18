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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKROD53%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGqDwY2%2BVHpTO%2B6dVJq3eVpzlsJEYhZ2wbD%2FVVPhQoxAiEAgWIe3foUCXThoqsnDkiY%2BKCM4XhzCPJNJDBXqOsGp6MqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNy9d08GRL%2BAlHgESrcA9swK0gSwl9CxAOsrUOu8Z2N8otGJkcOSHfUAI%2B9%2B2JZJeyWVqLWE6enTL5jOXwejrtghVspM%2FSLtTkRgqt1lUZkxTIeKVcXgHqX%2BHLVwnYEqEk2zdOAaisOq9Li8n2Kp3CiE89Yr1Sv7dWOdK843VoYZzUjgl%2BBSg0DDolEbCBIwa3wMVZmr9Ln2RKAit8SccgCaecCNr567zvHK9CO7FHrkrXFWIkxBQJ%2BSDItEpqSsbheH37H1fqofjQfHyaQcL3zHM6yncI35ttMxw2W2T0JS8pWtNs%2BiDsh6yYUO%2Fgfs41CElilF9cbrLdTofwkK9rX%2B1rfFu65Bxf4MuBiaGe3glcvg0Ww6bK2X0euGnPBk%2Fe5R6QpbfMfmYNtD99MbCbcZLbZ6D8fhBKu42mNl80316vKsSj7ETQihY6h5ufRcD%2FWYlbA6%2F5NaeTMjK20bCKXF%2BueuK4WDV5T%2FpVKyD3%2BCg3vV9m5Y%2FjFqdWQZpWKq51OveaWrYv0CnwHCieYH1rf4ODVoeCwlEYtdF%2FTfdoMH4uKMwrszJTOzuG6GDYyYsBC1uk3wYD0s6b3SGN%2F0dMe9FNCzdVvlJQyqfydrBp30eGXIwDZROjUcehDf9OqqfYt4bW1qnJ5JMjhMKP8y8IGOqUBMgrsM7RK3jwEk%2FL46jvu0EhXeoSxq0Iab808WtY7xW4gF3Y0UxexsznXThErXNJ9p1i%2BUiAdiBRfzQhQ1t5qGZIUlPhcCcrclI%2F7ciJLa%2FxhgDDZU9z9tMTDB2mOkiBbRPMkonBs43p5CLX0rItEXm50jFWj%2FH0ofcnI7nIY2g89r%2FvnoEiu%2FpWu%2FQrl9t14MuwqMi%2BNP0XK6Ga2jppdMzn9QY8%2B&X-Amz-Signature=1ce08043561135797c9b191a1d25f1f543f82ebd1ebe8bbb1bdb992da6e52ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
