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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMPD6OB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpjx6puKNSywIe1Y4QM0QIDTlgoQfW8ciMfZSPJ7NOYQIhANTi5AFtN8Rzpz%2Bh0UOJhTm5b2ZOD9xZuvRtT5EfkltVKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxSGIIdJZ1ODfjMm4q3AOMfMjOw7llqDCbophBV%2BZCAsCfcbjkm2cIODfk9q3wjYqP4N1SGIs2gSrF%2BvALB4O81UvHWRgnb5b7M9Lf0it0yPb9p%2B4mi%2BvH5RS5w5otxoK6JVsMtbAq5PMGCF3eV2WN9U%2FctTXhsDy8P5owMunDBAxMLecNCSXg2culvV77pnp5ycwjSy9RFIw2di8BkfT36B04lnhXHnvC1Tt4jrEXz7ax118QcnFZw6T90y18yw0BD%2Bhj98nXVyAvfJZUW80Lmby6v0y%2FC6ZkXO0zu%2FwNM%2FjNEczBXJzZgU3cGh%2B%2FFwk%2FPEn3miCCkhPf5xcJox0LwqHQvRvbFnD45DSWcxOC8RBGm0STYlXbTG0mRpFD3XazgGUiAx%2BqAQFsmEkqeXkkHlzuWeoCu5oHepqwf6kif1f2iO679jBnSZKyKKvO37OdgUchN%2BR04ntpCcIQvMuCkyG7npPYXIM%2BXkATlNrvHunMomOAW9YNsPgGfAecMp%2BdeKs%2Bd8hQXhedPY83AP3368SZB44qdi9LxaQ51aD3qc%2Bdu0CkUUzBHmCcGiVxeuxJesx7cdcMdhcVtkcrbpqwV9VCerFCOo5Z0R5tGUh4KGL5PZZaADFuLdOgyoTrKgpf00NARnbkVp%2BjAzC63tDCBjqkAYo1PW3W7JCAHBI%2F50iJ8GIUuhmkVzr%2FZxrK6sQT%2Br2XVI1uIEXY5fs7wpEDgDPTHUSx1FL2Mpk%2BGA76kB1sSa1HMwMnmTb%2BfVVsalS2MXvU0%2F4TDhYRAxq1M0l314TMAbn5DWqFhMXrCkrlYNECJnAgIJexiDY%2BBw%2BdZav5B7tdVYHIVvyBXTN%2FwltexfMhE5Co7oQCBFwe8vwFkyFB7W2zV0ie&X-Amz-Signature=0f2c98e01076298c0922ee75d15640364e1089405e8cc5390375554cacda14be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
