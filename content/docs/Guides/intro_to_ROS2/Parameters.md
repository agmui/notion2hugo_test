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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ34KYMB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFqtXgkJZX9Nbk5uKB4LTnY0RQXx0cDZ%2BrUpnrGagETYAiBjA%2Fe6uWnBVwQNAD88DNmExgo9NZcRXzrcSEXS2%2BdjJiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVEc%2FLHPGoFlozkkaKtwDcupYH%2FO5R%2BEnCa7IlCx8OGDH7ArgnQXSMnCgjoIcN4o3%2BC%2FxjCq3ssDMOyzPluZvX05wLwNd4pfoT4fQGsYGiXX%2BnuYHZpc7gGD9sq2ZF%2B3yPe2oip3jeySHLvyvvmjE03noSenVPsTOQZOaNx5N9O3uWj7lDIKBJXLDiP0pqqGtNyBJ3PwnCQyMEmfXyvwWEhmyyLz05bXi9g%2FmTd%2FAEdIRDuG8OidLQA8I2bmP2kunVn6O9hs62QheZWrlXYYqY6gLouyFy5B%2FcGOLQPNoKdyKaZNUDODISRO5qS3vrIlcOehRGwzg0PpwKoylJ%2Be9pL7MhHWdo6hqxZSxtdmA9WPVh6GNeFJnhtJYGQ2OAZfyvqUVBNSPCLfsI6hfPG68A7zH5WFgbMiRlAuHtT2VnvIKGbH8SQkBrTXitw391yqshr%2BC9j8K0OIe2NFG5sZgAAyK4xGG2IvJ6YKTKW6hQQq16K6oTuQB89%2FHm5IANlZMTvRuQyocU%2BxCOb%2Fq0bp7U9DVvoyWs4EQHswCxLUJ131mls9j8Y9E%2FGQKKoM6%2BeTlaXibPK%2BFLma84arg6%2B7wDQYs2WDCA7%2BOZyu14DerMrh%2F12q3DUT7T1He6EvnedViYM9U0r4tfjqP%2FkYwudiXwAY6pgGUR89ZZdX4YUutWAg0ZoQsOtK54yOmf6Iuzy28rDyuZQa6XhRKfiZ1TLDKnErq0bplxbIkCOwPkW3JDd9DKNHfF%2ByjwdkNCfu4g2FhsQ01Ge4SOu8lbv8umT99ymI8mRR4S%2FB%2FQjMqWKJ%2BtWsYuWh1ikJ8dCExCws7lhjPsuwraZsHmaUl3Ldx%2F9xnZdnOmKCgH7B2YX%2B52hzbcwCbar5vhfunOl47&X-Amz-Signature=a4e2e18d52bde811bf9b033b4f7a5e324983e9082289f56802dfd67ce37c479d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
