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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSF55YS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsOaKd5jNcHyo3uZCMfCDPu0u7nt3lqV4xwe4HPAi83QIgVAdxQRlE05g4ptfRBLsnaJWTY8XCNh9u5ewYz37ZEiUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEClBG6mtzk%2B6sfPxSrcA1ydHeBEoqrXdmFEqwehqBGidjXN3DiVu0PYEkKAteNymczaBLzGk70Zwjt6zhBr%2BbfNcWVfdFyHE%2FFOMVngABXfg6QqWsCX7P9Gt%2FKMwh0Yg4UZqpVbnat5970ZmBAC8d3W4mKr82CXi3Ybl55IOvMs%2F9Q3qkqR6rmyjj0g7ZoZGHaDorvSJBB%2Fv9lKqRzxWZwPa26T18PYE5w0sXC05H45bT%2BVOpGVYrjtxOLMlt%2ByWqYkr%2FEAM8pzuzm2L7kVpWTrrwOL8kA64esA9R0dyfhxxRnZy0WcuqjKLFpMLfIbFJtWVocVIenEU3cqCNWDdtZnUnD4WJtWYq93exERyoAKlF9Lx1aUZaVQLj5DsOcIbjaGsJpdiNfCjDYIpGD7TZtsGtFJN16lWfyZWIy5Rc07eWsRaX2yFIfh6m1WWW0pGZLA8alZh0u2v847qbMoRkKcOXyiF7NlEcmlCuTAEtng8fh62pcI6cxLaYsIwaLnqsTlbewh9VfuT8BeIWjCSKSZ6o%2FUDlWJdJfMpZ13SgKPgaXruos%2BIhDmYHurySbydKrwW7MaM1yPRMwC98THcEeL9vpmWTQcWjk%2FUy%2F9T4%2BKnCVNPOp7n6hvqZ3MqXAnYY06VAzz4JeXRyK%2BMML9hb8GOqUBY5JlsNewXzD6uH3eOj3bkObMa3G0J5RgzhnGI1prs9mDeqrMQ4LuPbjL27RAOKlv73BOzTiRnuydDgDuE4ufDHx6nHoqkl%2FzzatpB9Io6%2B7Oa6XBj2g3S2pV4SAKBEhLbsCXBj%2FRWoGSIQE96xQJFo6whIbaHXPGOWmD9riC0rta3ivSUpfxlCt0bMRb3budhqEo25A3%2B%2BOSdlxY1Ut24nL8J%2Bky&X-Amz-Signature=7851339abfee3503bb7a987bc00c9397dee0537dff2ebca8d25b3bb2f690b96f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
