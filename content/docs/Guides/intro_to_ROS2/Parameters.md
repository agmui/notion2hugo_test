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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UHX76VN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGS0DARG9HGV3df%2B%2FuRDCqcKEWUrdYwyf3AiW72CBNO7AiEAv0dBMsLrXbm55iB0Yu00RD2OytGNJJUzJze%2FQaCQl3cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDDT5OazM0Qe7aUwSrcA5x4%2BAhFanN%2BCMuLCJlbGKr9gNltWsEI5qJMg9zd9bhEuMC2EwCFEzedMDFqxHOl4bQOk88jvozi0qDPpcpk%2BmdFxVQKe4u2ygSOXJ5qHG5796x0qCLix7R5gc%2FA0qP%2BRXU1jGI4ufHZUHxgBp9TBsKTUWbvGVu6kuR1jVtStR88TuVKGx1e5wgXc6Ts9R8wteiEjicuIepDyGT3zsP6Uku2JC5aiKj0IC0V23dtgAMOf8l%2FBiScJPYQ4CJPp7JGvl3zbeLEVZI8kSyCPEeNznNfodq6VCJkOwuw3uPirOEd8wJB0PQzPV3rlhRLX7O5YU7%2BKbK5ggqwwxiVgkW6VXfRumd0EmWWuLclz9rZDbd%2BHdT9qCKI6MT3p9j2dMDQXH85DhqrHCWjnC28Z3En1i79HAJb3Bvi%2BOmKhmJIdHoK2MDZozl8LW78aYoS%2FjZc1HjuvvdXZg1GJnGGeTkFwjOC5W2oJ%2BE1lXDInETduXPyPGpV%2ByHmwT%2BCNpfypwgcnjLTAAKFoQXXBKfnm1%2BQIJh7fMG8juh7jjsOSEhVm40xBf0a304%2BGh1NQ%2FuzGhdVDDlc9wAxLHxVO2YTMJzJDYcuIpnwK%2FINu5KOqXqoH9T0iIKr0nxBAl031iXIMOXu%2B74GOqUBB1G%2Feby6h9fXLhhi1xk4zmtEkQ5L0fl4Jyot1PuOmBJu4%2Bz4Vh%2Fe%2BAmCH53ZKT2MhUUC4JE8CBKyCg7yW%2BAvGRIjU3Ea2Q%2B6d5%2F4FYZ16Kjc1gdMEtgxP2ba7TvdSVimemcVoH%2FGFADlf0SPGEnCZQQ1e%2Frplq8e4xah2ddQ5LPEQWh9h8Th%2FSj4pzYf5kESk3tmgGWBY7Q6usYeefpNH9jV1ooC&X-Amz-Signature=9bc45035411541bc2afbf67c3d2b7559ccab96443e2e3be686a5207fe01f64d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
