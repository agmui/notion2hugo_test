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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH7F26LB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCCmuZMUO8kllVZD3I06NoK0TKS%2FbHbSxlTd1mB8p%2BGZgIhAJSdKkJFSIh11ihi%2B0JnwiADCAh%2B69mWeXWv6UnICmExKv8DCEMQABoMNjM3NDIzMTgzODA1IgxfEMfhywYGK1Jdew0q3AM6ETkchbli7NjXqbmCM9GVDFKTJuBlcZ%2BZSqS0V%2Fjclm%2FjIweQ39LoagFm%2BECetFj89x95X9Gj2IFWsbUU7l4je1X8iQdxIjhf2JMj6uP%2BON35Zi3bxAAEYU3JXSDQltNzfRYJ7cM7i9J%2FhtOJUeauZbJmJ%2Bjs%2B%2Bd%2Bxe%2FZ6hHdZwi784RmjduPzjmqZKLEuJkXy9jlDv1mTfzDWN6yS6Jcf7Gh%2FPUCeVq2VdWwRqKvSiZ4URG1Ll5EHv7fhgSQw6XGHu3ssdluCJd1Rj1DRqWAOwk7SXYDLAgCybhQLIBaHqZXxFBtU6C4P3n261NsumgfoaCNwuDR%2B%2B20Z%2FEo2FkE5yMERIKE%2B0fNJR6tqXOF3MHE5ZYPQPBMvC42ch6fhrt0iyxUkhIG9dCT8LC4iBEU1N8omYiMPvcWs0WfD3XSPi6tc6vPWHUjb6QfJTyflAMrEVyEmkwnbOWyCes89bQ2S%2F6kBrG2ZbifEsV9BJ8%2FecS8%2BFXIcw5I1GEBnxyETai5c93n0PyIN0lx1w9%2F5l3BPErFTtYoYB7HbT8mZZYGop3kWrvlq%2Fyq5BZ6C1JEXY7vFWdf%2BFLTvf5FpMeNBE5C%2FsA85EY0FBPWzIzLzkDHUMaNILdslOJcurUDEjDp8Yy9BjqkARa1WWQoYq1h86pSV4vtlBAknWko4%2FUbHbwRTPrK%2Frhe6ztsCNfY2sokek9xlqOWCjzzeTMF54xyhMaBtBQ1PLcYXvxSWv3%2BG4FmV1hmUeb3uINTZFqtiluaCKxj6Hw6TiETzC1XIWj0IBbyO%2FAnaK2gDyPJIk8jRJdzDPF29tX2043oVxKqe42Z12o1wrSKJM69LCMDgVHa9LZLflLInR9kXvvB&X-Amz-Signature=4e799043a7a25de2f6d528163200d4d65c6a01d917f17264a844304839b7a9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
