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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VS4KCBV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDKmceQPaPHE2pw2zVB8Ph6IejElV4q5PdCrGmn%2BmoiHQIhAMoKT8jHU6fxthbtzoS8BgqhXcTA2PA11R0rSVrRTTIaKv8DCEMQABoMNjM3NDIzMTgzODA1IgydTJ3IUrY7ydgfYOwq3APx2msTNB2%2FQy9xG0oZ25E0JTPcEczbEqz2LJj7l1Y%2BFx3AwhXr%2BU1oK%2BaadiEO55DrxPBQNFUEtWp010N9cP8LA5JvaK546VKYheqFY%2BiH15sKXcsrVnSGdQMRmHZNj%2BOMCjJ9VcG3mBZF9CRTJ6LjwWN0b0p%2BcEMy6kmcTxltVsxFMvY9RFGLcBzKFqVPwF2DtwL47v%2BaSPNSH5J%2BpTamNhx2l8i12rtCLM%2FE2v0%2FKx%2Fpet7IknSFp8HqtA3ek%2FSe2dnhz1RWzx%2BYpCC5M40BtKTVIHNUjrGyQcp8xj9l%2FEpH%2BrbkBNokfgFQVZP0WWjFHlqSSVWmkOwi%2F8A1LX%2BKf4EhmbqzvzBuCvKqQX%2FfKEU%2FEHgq%2BlmeJJ4j3lvz16ReXW0ZWiiC9y8gr%2Fg8h%2Fkc6bWNMub64iv1eq6KsMGpYHxgcfuatNbY311pmSWZHIs3YjeOILIdv%2FGLJU%2BH2gsLiAjyULTC4gaqU9nYcWPx50PPfxzB%2Bz9XR4kzDkcvjxBB1nWsQ6TWi%2BxU7d8%2Bdaav5wmhhVfU6wiW8W2kuSMOE%2Fxm5bqvxmqSAeXtdZ0UqSjxNQgQS1H0bhFSoMPljHmM111jYWElotNuDnXljFvwJmHbzXl4k0T%2BNxXhgDCvofa9BjqkAfoy%2BGs3JsfonQLXTUokUwJfo2WSgPuxdPUoTiGgpc3MhKDf%2Fy5rDRJrDb0f1tQSFoQ%2BC7fcOAS2x5JbPnf%2FQ0TwMlPpP8prRLTG9cYoulvsIRobn8%2FMbVgdjqIzbYmFbsAOh3SOXxvaH9ERMs32KaoEG6Cq4t4gOhnY8hw8dtUFdvfNkJv8fSpNj5ABUXrKQm5Wke%2BbZVgGa6ooDbxQWb5EV693&X-Amz-Signature=c1eb03876ad7afb253032805ee76097798f2e60ec1095e3eedd99844e31b3751&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
