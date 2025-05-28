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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGSNO45%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOjeTTST6Ci1fxJ1bwjc%2B3DE9VXTus%2BGTMS%2FGfTdCusAiBWQ6BqXtwKViiGaMycg%2FJIeSMAeK5wfI06UxDwd98GkSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7njRpZZkoch0SkFnKtwD%2B6EdPCBaQ8dM4jGTi7iNZQSjH7eocnmdDdtPUcgqoVGePOiOa2nmt2TIVf6XMOCoG6miaAB%2B0FvFPgo%2BqWree2mMmxl%2FI5BHxR%2FTp0aDxkhPmC7Malfv8VeQLwcX8GFCGNwZ9UHzfVL9KqGNh7NmY9P9tsyQcs1OvtMZI%2FOdfDt50zPh%2FQMG8PMQuR2gJitJDIRUhJNq%2BNNtveDCekSk6%2Fkug87WMphUwZTSnvOyDZLq8Zp9M4b5E8emc0P5W1ndpJk74%2FAlE5xMHGsfOvLKFPbWge3q4F8ca7VL%2BMh6pu7akMnCYUk%2FlO1twi8bmOfaI44uGokYjpOHSosaUsnhf8PbHP0gCLl2xzGXX1AyNP%2B8Q4OIyPN%2F4LP3h2td1NPU5xYmsURObSr2RN3boQnU5mUeVeKuWlqIiL8%2BwaYb7BTl63alEUTyVjsUjDCoEh3KOW6%2FC9IqGF%2BFGfPg2JMySyGKOkD2ZCSUG4xVrz16Qv6cuuA2htNlFC0UAZoTFPKbxC2dRaNWuV0lr66h%2BJ8Op6jfuNkGsv5qk72K7mZsKjOt4mqPd9C6DsVsMur%2BDpYP9ouTMhCiQM7yYFpu0qvOt%2BP%2FsrnzKlvhEK2tGihjnZEeYaLeWOJRPfx4AKIw%2Bp%2FdwQY6pgHS3ghWDNWzKQJUOhsJcBcR91J8WGUn%2BF7pNXnOGQwpaVckF5AM1w48yfvw7kxsaUv5kNCw53HDfLRSN%2BS4rD2KVB0tX22dBXVrQ5U3m4Y64uhiH7trIT8mR5VaZyPNjCVcYY2NJH4Vtuux5hVeJN%2BLyDLust0lalfK57ysiFjwLYTwiJV0f5L6T3zKzA7pJpN%2B982UHt44%2Ff5yjixKfUQOf92Tj5d4&X-Amz-Signature=f3affe8f5938fa5d28e52b610acfc7511d199d76e079646094b8f3efeb22d3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
