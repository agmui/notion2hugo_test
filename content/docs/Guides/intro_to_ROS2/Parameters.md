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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DH5Z5GB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdxWGC5YnM97Uw9zk80A%2Fwz98jcFp%2B18RcLnaKHjpzSAiEA3I5rYLQS5MHvgFmYHGPKSt1sHxJg3XbQMM0ifta%2F5ngq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDEAu%2BS7NbhN7mzEw3ircA1tB7SUZnEzm2P%2BjpDK906NhVm1pqgORNKUyUa1FPAOlJIILY3inqJ2qjeO%2BWwfvJ%2FNtHGD90%2FMYZZs7HXIHiQ%2BPZnnW6R1pRbatmRhgmPQg%2Fe1pElNxqfJVktS5TQD0CyvnpkgfjytopujeyUtm8WHTljUxAEXZtOJzxBCOR3tgIrPuBB1ZZEs7bgBFC9N93ZbGEO9W8p64B%2FxUrxoD0mXriYsmu62%2BQ3ApjlcSQ%2BHFUXBupROcJlYUXOs5KROvI%2BEjEow%2FpUiHGO8vIyTepxPi3DGQ0PceAKswakpOMuWK%2FlGIq5d0vZbIjWyTYcGCXSbgVKlSA5epBR5%2FxjyzxBI%2FENSOPyhjuvKCT3UVUYn5p6MCJvMOfyqDXR59Tj9jQsDIwBvbv8jueIuJ2K3JoQcLPR5BK3i5pKC%2Fn3Bu1YQMRbRnV7VFHn%2FMpBS9S1qryxHxlIsEi7uLTba9%2FGILAlid%2FuyHlV7VVRZWW6Qk%2F1iWMcaFPrGZ1iXwhCi%2F%2BDTmAgXLP5z3Eur%2Fs92QdJ7eCQqU3NE%2BYQjtimsV9avU%2FBYtKTawELX1Xcy6vKrvUNr7HUjqlxrnXR7wL2imMC0FkfV8KvRXUo4Pcw8p7kSpECayH%2BJ%2FiBJYKFTWL5bpMJq3osEGOqUB%2FnBJfSF30iE2U4SJ3sD2eqyvjLQTrtDJBcxOm2LputK65R3opA7ymT7JUsZx4g01tL8rFXtoFH8%2FLkYl8oLa1mU0gAIGuYbC5gR%2BNFnwUrWZ59BvhKbIKhpWduD%2BfFcHiMh07Q3eGinA5z4DsWL3wU23dNJwvQ4HLFfGE3oTwJ6Z3FN%2FCyejSW56j1NOKe2JmInwp6%2B%2F2LLpVrb8RHD4AZ7hyDnV&X-Amz-Signature=b874ed77b7c69c5f93bf382e93187c7a8c626c7e4a0044a9a9777198e08e25b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
