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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RA4C7H%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf1O4D11Qa3exgq0uf5bb1meu6j2UM9N82SQvByAYTvwIhAIElxmWkYPfsMJeeDo%2FETeGjcXc3lGgYYX6f89QrndAVKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGjHiKuKoZ5JLHkeAq3AOsDNJzQXC4M1F5H%2FggRdKyDfx%2FUHGZgVTOT8M82AoduvxhBP8e4UW%2BzAktvkZdUnsOigjjJtKRJpwBQUphEKaneDN8GGW%2B8vB2uTpW3E5DF2eymsgvoqkrJ%2BWaNBun5S4WnpbEivr2z8QlrKPLmIA%2FYlxQyqHwoqaHd4RTFZYIoG82r%2FgI4i1klkyaHRQYi7sk2nvoHd87ANuNGwXmbN5Ct3t3CrUp%2FyMHWZtVoVyqcmF2bo4pQyJPbxd3hHahcoo4eCngNC9e7DOwuq5mT%2B4mLpL3WEMyYac0uABiZ4DOxsZFKlfdOANSIVJh6D0kPi2LOqhJROWjelJ1rdYV0Aw%2BglWGNaFiJ62QlUwhwPBsjIfiVywVoDTzxoYWHu8VnEWRn0i1QEFlJC7wq0TIJ8F2aOXmIQpgYqCtyxNkzZXHSnWV3dnvO%2FBgY5ErPSyA08MuT29WSfjn2a9n31yQAvFjPoyMUMTI%2BW9P8vFJ7ntoZCltWkl4WMf7tbb2ciVRHWRR9JZkgejssqN7qn385R3C5%2BHXUPfm2XgFTJk1KsnKa9KaGgvTzZmZ9q0fZNWJY7btSdigZCmHAJVpvDTM9qyw42W1wOrgOPRJoheR101RPBfJ%2Fwk6AfYKiTGw9DDgnoS%2FBjqkAf5N1dmGJwkUDk0TJkiLFILjhP68imslH5KNsx6CbfjdcJ0X89xG2AQxoSOuJYgboxh5mxlFvJtQZnyZdFEwr5IThxFOUOFf2UWsxHhCInjnuHZfUnBW8jCANOALCWef4qe98arjvHFhJCf5uki8qugEqCJMMKanjkIBi%2FHFbKmMMDkQ5HDHi9qYHUJca%2BWWgXtmtWR5gy7rSP%2FA843cwYglw9G5&X-Amz-Signature=eedc677cef6d6ea2ee373c739f0ebe84668c5e9673ce690778fb3ce7a5ce92a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
