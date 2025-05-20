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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TII3TWRV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Id64id75eOv7sKR%2FQQYTSYExXqNBAuE4FLXd%2B%2BRSoAIhAP%2FOnX1JRlm%2FQJGetDPA5UmjtkXpGUoSDRlZRQnnssPjKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwla%2Bbo9qVx5qNW6ccq3AOspKrs1nmXqllVifw%2FEdm19dG18rHSfeF91piXjFdBACvj6RmskcIIMrSTNo%2FYmvIaxX4BTJuSrTPvDa%2Bt0BRVtnoF8yO1t1QrGwdBV9JUnC%2BNeWQOTdlNs5u9Ptu0%2BOkBBauqD83PAMpRIobOjyuzSgTTmjn%2Fr9NU2CkX%2FqsdrfwluI9MjlHZJu7PYQJ6plPG19g9BZ9SfzWufUs4cWngnp4G0vUm1%2BSIZ1bloXHkqw2gTICKYwWUHIkjD6%2B3Nn82U3nBg2Lm5rDi4VVJxH2aqUrv9SAneIbwQJNb7cESryzuQxaowC1dbg%2FY2lU%2FDz%2FPq1S32RmtzbcOR2PAl%2Bf8UZQk8oHMJT4NuLuDq%2F%2FpNF4T0yeh0vCjhotqHxcdjEoWIdSJJpRv9ldzh6Y2NMvPK6s6oKuF4y9EfDOKVJbOPvDsFOJJWDQDsG0yzcndn3KG5Z8JG8d7BzU4g0l49Laf%2F%2Fl3BC3LuV0dHbnovtyUhmc76ADXCYNR9ezB20iR8qAw8qNzrQflp%2Bwi2s1YDU3r1%2FoKZgbQ0jgnl9lB34jZm34U8C3J3SA0nRxvxAj1c2oHMzaFRAFcdoM5dkAIQqPQ%2BerxTyH%2BcVHcrpFDNKJBtiWvm7Dp%2B23w%2BuNHuDDZy7PBBjqkAXM9yTeS7zWyPV0CHXqU%2BWneGTh02bp3IdxCViaDw8hIwgW8DKPJ1G3B8AFaB6VZFP8Q%2FOt%2FVKkzrzycS0zWBmDOHvdQlh3oI%2FtrROKQs7FGAYpbl39izlOjNhgIoWizd9eXFBapbqWhTJPNMjdtOhG%2BSiOexxJn6eH3bLOgL6EtGx0OiMfexPtkietqZF%2BK4a75UTisl0ds4%2BdAOUi5C%2F7Mmy5L&X-Amz-Signature=cb862774e9da58290ed1fd20bf1a1fcee550f505c51885694282c0e40575d829&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
