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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHXGCLOA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFWz5TQQnI6Qo4QsRI7p2hrXWHcKFLvyMEFSQfQWPLjgIgKTk1s1oW5%2Bl92EPKwZp8t9lnipim4nHRx3Zqy%2BwlRWsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP5vyDOki7dUzQEtyrcAzVE7cqxY72K3yKH5DvIV3sevlS0vxpb2o3Hg5floQJj1LKSRxqEs%2BHkX07YLxIqLMSGftV020Wynu4Oe9oTBCfBFkvBcp%2FK%2FP6KIsS%2BbjR3bYJ%2B2B2sV5FF2a6gswAt0FQ85d2pYAkbaNkJtqDAF5r4nBbJycSpUjbwCqxvleLE4xJBLSVI1zSp7p5jjKnrj%2BJsB5ULFGCfH6cD6ZER9NZ6YE1qPgcEyrpuQUTnRlm%2FxPRS6GCIdeDZO0Agx40BbIrvCc1na20RgB9BQok7VsoPozazoTqx5naNUiJFMSxscqIowUy%2F%2FKus85rv3AJCX6j3Zx1A2n7hSAlOfLPz47kPAxMiTKZBu9vOfO2OVlkjKlLe6QTFzT8XcSfS36y%2BmqkISw2gVornMsdTt2so0BJKMGVftzF7kOGYmTqZZaddHpsnGuXD5ZWE6qy4rWmDKKwMW6PsVhXMGzwipahml%2BIazXQSEblSJ0lZXSZ8l7EYHv7vYYjijRLF0frWNtQyymtuYyv47S0MsndVQFYe7I47sM8CFIyv%2FIpt1DtQ4cGHzGkLp0KEv1By7p2mubYOe9aDCQx8aVcgJlXy1WFAFD2PTIAqamUdh8RzO0yKoL%2F%2B%2BDzxwyLnGyIOLLe5MP21pr8GOqUBXxBrI3OpJOZPvA3H2DM7%2FiBpM360o2%2FOYM7YvamJ0sGRXmdk0XZ9hZaXPpT0IcUKGOzVhHsAn%2Bl3JJOfkpbhEnfszv44%2F%2Fi%2B55r5TWM2TJldbFV4fFgI%2Frmxq8iW83i07PiZj%2FrSfxjFqA4gWgH04w8AHjrl5ppW3TbeEcpTd0KqCcqsXQBcOS5dXwKjMmC6R05qUIx4%2BXMWVtubw%2FNZ4clhM%2F53&X-Amz-Signature=e2027f0d31928b2ef7c9dd29a421f37c60a8a2231c137d2ff608caba130237d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
