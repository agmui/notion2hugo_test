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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UI6VGE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG2tRUc9MvjUp7v4qQ9U1eUVjMr9zY6fQDzSmdRPinSJAiAXlwrINsiacD7r%2FZexzNn5m25eb70iDlZTTv9oiJLgTSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdpOf7W2QjKZvaug1KtwDBpds5Drl8iK186jPlWeSG9fe70S0IT80tO%2BI%2Bzsk5wgVd5qPoMS2bybBQE7PHaxymSKsK0uPwsL2UmzlytxSVjEEnTWYgA%2B7uxGcmq1bPyyvwFnObBVGBEMh%2Bvl6tSBkkjRkb4C6JZH1glHjSRm8x5g4GElE1UBTW07fTvhojSPaBi3XwE%2B6Q7rQQ%2Fn7zC%2FtyOtOzGvzi7U%2BVQ9wS45bIYDPnhjfflbgMmk6sS2rfg4Pv8smxUMadQXPfW63uRGDTd%2FhaD5gz55oUrlqqSpkwrSH2DomzmhL61Fp9pksYX2cpvXuROgEUtnwqpdrzhROzI4vGgd5bEKbM40A0iMav6J%2FTcEhj9yPIGUI0jTbaXM6n%2BYBG2GspmxgHD7hFzWp8fCfEazdUG%2F52i3cpgLHOw8UQjuMmm9N8L02NKErfNvjvQvFiTlIAoFHyBlIqKbP13Qm%2Bhr2JvegbvW%2FsfwiVHMw1S12ObHypZxJr39HHPYyZWI5x3VLy3zOkqs%2B%2FGNy4vLIy76Ia6Is0iE%2B3JQOidKcQ1fND7BjF4bAVwk5kCmeRFaA6DKew%2FdnFEC2NdlGbUIwr10zvN1BY3AN5iF6bQC72y4%2BugL0SqTkF51ut3BXKN6lFJUA16o2gxYwlZCcvQY6pgE%2FvPmjlku3NQOBaJL9P3HikY%2BOAkkkCvbQ2Afh7VJIR83DY5ot%2B1rSMJ9VY23P99iswlGKAShElu24bRRFWEKQG9ifh7BYwtPljGycXSeXQVW3W6x6qyY8vBUiK7Ybkx1xlVtBjiIucsF%2BFfC9y8JDgtrdlT6BE9Kuk7HltkyVz9y9YgDzY6pNg2ERN1wXPhSLMrre4ur1ybgw6UHs%2Bm8vx7iWxTCg&X-Amz-Signature=a407bd1fbbd698e3252c066ba7d75a69ce782174ff8406e7f244bbc06e039d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
