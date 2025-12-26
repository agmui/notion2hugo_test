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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DF6WE5H%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7U7EbR%2BSBW3MtaPMDXh3QhdYdW%2FJdk6%2FFU9qBfxfTmwIhAJIhCk4hUyJRKqVup8syV0zQWFvYgBAMhxawqINQEwIgKv8DCEsQABoMNjM3NDIzMTgzODA1IgzwW3V7xcGaN1s0vMYq3AOijSolZvMzkcq6qYX4G9RdENUaa5N2hjzF7yw1ta1AeGAzx8AkiUMks%2FBiKc0J9stZqwgGt8Zyjd0Zepi%2FNyz1YQHQ3gcDJGnm1d1axl4nI3rLnWiwiTFvzFxwsrUgVRX0Ru%2BY3ye3xPGFls3HrFBmXEJVXpySvAby%2F9YDpV%2B8m1LsbsGljjKwQqFQUvjAhSOTvtn0C3dYqZzIbj8pcbWyIckFEsBFmzEZtLQReKQ5r4yIX386RqbcfKu9qUx1Azpm2qmQs2d5vPgUYZDk5e17HeESJTne8TlGqU7lj%2FAWDlmCp6ei5Az4%2FT0ly6j6v4hToPM3N9O5JTKcBj9tN1FHGykS8MCwsFOZsMqaSgynwGwijVgnknJ%2FgbREDzBekRnJjLodPnnR19QFz2mlwoGMIZcKcCs9h29raHvglBTS1IJvoWESfL6Dxe4hHb%2BfVq410sO9Z%2B49bRuNoICQWE0OHlDpBJwu7wGOOavexagL7FGhx9HSkJOrN0KAKCV%2FKX7JqMFXJqe3o%2Brpj1XIAp9QAMO2b7W205iB5Ld%2BnLhjJ3831JKdKUIiT5PbcXOrrHP4QT0abqLgrJZQpjqR21iSsY7xbe1Ei0gz2IcZOQdijR5ULOgtWCkcqgycajD8x7fKBjqkAVd5VqS3AK6bJFP0yTkz6YdaMJMkExGQcDFA1ImTd62jWs6RIOmt5GC7eoHLsc4uLAIysjBi5gIWmXaav63j8NP0n6LoQiBMsGbl%2BZU7rXr7cOiHUFVR1a9V18TGD%2B5XO3ivevi32VnsQL8KtjSzrRPsY64DnbADmdDXrAvvTJ5l%2BELw4kjWR27RcJ41YQmv9zAEwDTCz7V%2BFeHquDpQOYzjv%2BxU&X-Amz-Signature=af1972a8482492b5d345dde869eade25ff3c61780f66599fb360f5bd54a25079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
