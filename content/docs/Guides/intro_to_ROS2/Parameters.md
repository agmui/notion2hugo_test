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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KSR5IXD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHdq9fVp5F5nn2x0SvqzGSTpvEPdp6Wt20wIawmcCa8fAiEAwbE5i30kLNslNTOHjsbVh8fQw6Po9LBhPgCvN1szAdQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFVNs5mNqjOCEu0TzircAyhXdee5ba3beMacIRqCvFXU5jy9ei551B7ju2cTOcQITPIMJG%2B36mp2iuw2lw39ucTUoYvJ1Jn0vn3jF1pXtGDLNoUT02pr6iKhTrxRLq2Y%2B7kArvzgXpewphG4n7Kg5Jkx90TauzJ747j4qBvCuZzbTeqeGKy3uW9GLuikq7ao%2BoURpD29aQ3slLUf3UrAHgxl5%2BXg%2FrDYwsEJLFJghTdAYScTo%2BbdHBo%2BkzwZy%2FgI%2FSWrc%2FB%2FcCfY9zSNMnrZ9mBT%2F%2BNGuMkz%2BGyno89YhFdS6ZZUlCweOFRETlOATpVUNGYzA7tx3grSl13ksyJEpXx%2FfNDTPt8MSPUTRy%2BiElasWu7O%2FQNBOgNE9fUsH1hWh0jO3oG8qxnZfMhZq4u2QgjR6DpQjr70FJ2E9pqpld3%2BFEYo82HGe4RF%2B%2BQTFsDfWSaP%2FZ1EN9Xxv9Y2K5NVMUpk%2F9rN%2Beyba1OgmVlpb3aCxzHNpIx9vZN7UhzR%2FqXZtp0U7wB4S%2F1k%2F5eTeB2oS48aFLz90v0zbdJOeImENRIzeTS5WGjs9ffEy%2FOKul0DbOktIjgqBq2mjjAfeZEngfEqWcyIHV6CeZvVfwu3RkJnPHCnR%2BJ2jctSwm3XenkGFkY5V9Jy0krbMpDeMJ7FpMMGOqUBWuwy8i%2B6JfkYcTDxGwFGy5w6gXGC%2BaVFcHt3coPUMm3ngeedPO6vEtOqenob0ob14yCrY77OuDbFqpQ3nbF1AhrLsRTj%2Bx9fX85EePDHbCKpNpdkuiP%2BV3Yz6hR%2Fwd0fcKLwQYpDTtzvZ0ZlNl0S6tFKMiLW%2BNcZrr2CAk%2FM2T5UtJYaRLTAtS9AtsmYiOidSeimwxP6UYRCQ6HL8JqUmL1fBuxY&X-Amz-Signature=29d325652f3937606d43a3cf3247af216a92c0ab08e2af3053c072d9f8433945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
