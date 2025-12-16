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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUP3KZG%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr2jPUnRKgeddlUo3mblC15FT1dAOxEx8llLIXvsnV1QIhALziBa%2B6Qyp3pJIk6Zn2ogDZVHNZRxJU%2BXjuzMT6LZW8Kv8DCFkQABoMNjM3NDIzMTgzODA1IgwCEK65ypvuMKRPH6oq3ANrlZATpUEmlU6FeKX2Mny%2BsbxaiCgR5K8Wp70TPf8By3E18M2245KWyIoQ90BvHdAOWgvE3f%2FDAB4IDJwN4ivZ%2Fhv5wvVuiqzgASJ6EJNAzdBAFF%2FAPxWJaqtOFfGlZg0TeMYwcesRnCbrfliDryfhLt3tJd9tj3Z1sHO522aqVQ7DmYsyjH0rMMduhnEisd%2F57ytFfOeWBQuZ6oV9y36072JKvtwcz3nxesYz0lF6NP%2BeUccP1vXseJK8%2BuKEllreFkZFEEqqvChFVk1FtJuDym7ziL3NVDrOf61%2FJ6qMeNfnYy7rzLfsgqfJ06WYGDf7%2FsBVvSvs3qc%2B%2BU9saTfKc9Hz0rlVUb7UWwCwjb7TYacmlGk%2F3nctaPOFnEG%2F5YaardboESUtgYqut2ty2%2BCIQM0251wvHib4v1z6zUAGQKyWtvHL3ckbmCx9jzjXS8d%2B0hBAC3iRmHQPor8BVxfPuftXDVYxSc%2BbgvUfM8VsVzxC20GPTqUzzTAXbUCPUfxdPG22rzkVvyMfazB0Fc%2BQLrRJfy2Xcee2j3RSWMX8s6lVIUzfv3ZKRmdQnzywFaBKHfwTJ4xk3CXGUujaEqP87JTdTOuotEi%2FPhzsSwSupRU%2FnJ645i6mLXRYqzCuyoLKBjqkAVhs77vh6Lx10M5uzVB1uiuKpADTkchEsZQ4qnB%2FwgAhS4W8ZkAoI%2B66r9xSYV24h7KEiz3sXuSH1PmM4h5xePnMq%2BOzvuBbc1rrAf7ee%2FM4RJ5omsRdqyiEwOg8cf5%2Fkfq0mWkRaIQjijP91IyaSwzErrReO7QdcZk0dP2NRdiq2E88kzB1zQxXziHyG3kXmJUmmPMDc%2BxG4Q6w%2F4U%2FdX%2F2ekiq&X-Amz-Signature=e3b3ed1f232020bb77bd2f803e8d00410ffe8283e06ca1c8c5f00fc29823d8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
